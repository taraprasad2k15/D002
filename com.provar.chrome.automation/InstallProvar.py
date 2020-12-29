import os
import shutil
import re
import sys
import time
import subprocess
from os.path import join
import json
import xml.etree.ElementTree as ET
import boto3

def killProcesses():
	os.system("taskkill /F /IM provar.exe /IM chromedriver.exe /IM provarTestBuilder.exe /IM chrome.exe")
def OlddownloadAutomationJar(version_number, build_type, dropboxapi_token):
	jar_name = "com.provar.eclipse.chrome.ide.automation-"+ str(version_number) + ".jar"
	if(build_type.lower() == "dev"):
		api_folder_path = "/LatestBuilds/Provar/Development/" + str(version_number) + "/AUTOMATION_API"
	else:
		api_folder_path = "/LatestBuilds/Provar/ReleaseCandidate/" + str(version_number) + "/AUTOMATION_API"
	try:	
		timeout = time.time() + 30*60
		print("Polling for Automation API Jar on dropbox started with timeout of 30 minutes")
		while(time.time() < timeout):
			command = "curl -X POST https://api.dropboxapi.com/2/files/list_folder --header \"Authorization: Bearer " + dropboxapi_token + "\" --header \"Content-Type: application/json\" --data \"{\\\"path\\\": \\\""+ api_folder_path + "\\\"}"
			result = subprocess.run(command, stdout=subprocess.PIPE)
			if("path/not_found/" in str(result.stdout)):
				print("Automation API Jar not found, trying again in 1 minute")
				time.sleep(60)
			elif( "\"is_downloadable\": true" in str(result.stdout)):
				json_cont = json.loads(result.stdout)
				jar_file_name = json_cont['entries'][0]['name']
				jar_path = api_folder_path +"/"+ jar_file_name
				# print("jar file name is " + jar_file_name)
				# print("jar path is " + jar_path)
				print("Automation API Jar found on dropbox, starting downloading")
				command = "curl -X POST https://content.dropboxapi.com/2/files/download --header \"Authorization: Bearer " + dropboxapi_token + "\" --header \"Dropbox-API-Arg: {\\\"path\\\":\\\"" + jar_path + "\\\"}\" -o \"" + jar_name + "\""
				os.system(command)	
				print("Automation API Jar Downloaded successfully")
				return(jar_name)
		else:
			raise Exception("Automation API jar wast not found on the dropbox: ")
		
	except Exception as err:
		raise Exception("Exception occured while downloading jar: " + str(err))

def OlddownloadProvar(version_number, build_type, dropboxapi_token):
	installer_name = "Provar_setup_v"+ str(version_number) + "_win_64.exe"
	
	if(build_type.lower() == "dev"):
		installer_path = "/LatestBuilds/Provar/Development/" + str(version_number) + "/Provar_setup_v"  + str(version_number) + "_win_64.exe"
	else:
		installer_path = "/LatestBuilds/Provar/ReleaseCandidate/" + str(version_number) + "/Provar_setup_v"  + str(version_number) + "_win_64.exe"
	
	try:
		timeout = time.time() + 30*60
		print("Polling for Provar installer on dropbox started with timeout of 30 minutes")
		while(time.time() < timeout):
			command = "curl -X POST https://api.dropboxapi.com/2/files/get_metadata --header \"Authorization: Bearer " + dropboxapi_token + "\" --header \"Content-Type: application/json\" --data \"{\\\"path\\\": \\\""+ installer_path + "\\\"}"
			result = subprocess.run(command, stdout=subprocess.PIPE)
			if( "\"is_downloadable\": true" in str(result.stdout)):
				print("Provar installer found on dropbox, starting downloading")
				command = "curl -X POST https://content.dropboxapi.com/2/files/download --header \"Authorization: Bearer " + dropboxapi_token + "\" --header \"Dropbox-API-Arg: {\\\"path\\\":\\\"" + installer_path + "\\\"}\" -o \"" + installer_name + "\""
				os.system(command)	
				print("File Downloaded")
				return(installer_name)
			elif("path/not_found/" in str(result.stdout)):
				print("Provar installer not found, trying again in 1 minute")
				time.sleep(60)
		else:
			raise Exception("Provar installer not found on the dropbox: ")

	except Exception as err:
		raise Exception("Exception occured while downloading provar: " + str(err))

def downloadAutomationJar(version_number, build_type, ACCESS_ID, ACCESS_KEY):
	out_jar_name = "com.provar.eclipse.chrome.ide.automation-"+ str(version_number) + ".jar"
	if(build_type.lower() == "dev"):
		api_folder_path = "latest/development/" + str(version_number)
	else:
		api_folder_path = "latest/release/" + str(version_number)
	s3 = boto3.resource('s3', aws_access_key_id=ACCESS_ID, aws_secret_access_key= ACCESS_KEY)
	bucket = s3.Bucket('provar-daily-build')
	for bucket in s3.buckets.all():
		for obj in bucket.objects.filter(Prefix=api_folder_path):
			print("object key is : " + str(obj.key))
			if obj.key.endswith("jar"):
				bucket.download_file(obj.key, out_jar_name) 
				print("jar downloaded successfully")
	return out_jar_name
	
def downloadProvar(version_number, build_type, ACCESS_ID, ACCESS_KEY):
	out_installer_name = "Provar_setup_v"+ str(version_number) + "_win_64.exe"
	if(build_type.lower() == "dev"):
		api_folder_path = "latest/development/" + str(version_number)
	else:
		api_folder_path = "latest/release/" + str(version_number)
	s3 = boto3.resource('s3', aws_access_key_id=ACCESS_ID, aws_secret_access_key= ACCESS_KEY)
	bucket = s3.Bucket('provar-daily-build')
	bucket.download_file(api_folder_path + "/Provar_setup_v"  + str(version_number) + "_win_64.exe", out_installer_name)
	return out_installer_name
   
def installProvar(build_type, installer_name, installation_path):
	try:
		if(os.path.isdir(installation_path)):			
			print("Deleting the existing build from the directory: " + installation_path)
			shutil.rmtree(installation_path)
			print("Deletion successfull, now proceding with installation...")
		else:
			print("Provar is not installed in the given directory, therefore, doesn't need to delete anything, proceeding with installation...")
		
		os.mkdir(installation_path)
		installer_path = os.path.join(os.getcwd(), installer_name)
		command = "7z x \"" + installer_path + "\"" + " -o\"" + installation_path + "\""
		os.system(command)
		print("Installation was successfull.")
		print("Deleting the installer")
		os.system("del " + installer_name)
		print("Installer deleted successfully")
		return(installation_path)
	except Exception as err:
		raise Exception("Exception occured while installing provar: " + str(err))	

def copyJar(installation_path, jar_name, version_number):
	try:
		source_path = os.path.join(os.getcwd(), jar_name)
		destination_path = os.path.join(installation_path,'plugins')
		command = " copy \"" + source_path + "\"" + " \"" + destination_path + "\""
		os.system(command)
		print("jar copied successfully")
		line_to_write = 'com.provar.eclipse.chrome.ide.automation,' + str(version_number) + ',plugins/com.provar.eclipse.chrome.ide.automation-' + str(version_number) +'.jar,4,false'
		abs_config_file_path = os.path.join(installation_path, 'configuration','org.eclipse.equinox.simpleconfigurator','bundles.info')
		with open(abs_config_file_path, 'a') as f:
			f.write(line_to_write)
		print("Deleting the downloaded jar")
		os.system("del " + jar_name)
		print("Jar deleted successfully")
	except Exception as err:
		raise Exception("Exception occured while coping jar: " + str(err))
	
def deleteMetadata(workspace):
	try:
		os.chdir(join(workspace, ".metadata", ".plugins", "com.provar.eclipse.ui"))
		dir_content = os.listdir("./")
		cwd = os.getcwd()

		for entry in dir_content:
			if (entry == "configuration" or os.path.isfile(join(cwd, entry))):
				continue
			else:
				shutil.rmtree(join(cwd, entry))
		print("Metadata deleted sucessfully")
	except Exception as err:
		raise Exception("Exception occured while deleting metadata: " + str(err))

def updateEnv(env_name):
	try:
		source_path = os.path.join(os.getcwd(), ".testproject")
		tree = ET.parse(source_path)
		root = tree.getroot()
		root.set('selectedEnvironment',env_name)
		tree.write(".testproject", encoding="UTF-8", xml_declaration=True)
		print("Environment updated successfully")
	except Exception as err:
		raise Exception("Exception occured while updating environment: " + str(err))
	
if __name__ == '__main__':

	if( len(sys.argv) == 8):
		build_type = sys.argv[1]
		version_number = sys.argv[2]
		installation_path = sys.argv[3]
		ACCESS_ID = sys.argv[4]
		ACCESS_KEY = sys.argv[5]
		workspace = sys.argv[6]
		env_name = sys.argv[7]
		killProcesses()
		#dropboxapi_token = sys.argv[4]
		#jar_name = downloadAutomationJar(version_number, build_type, dropboxapi_token)
		#installer_name = downloadProvar(version_number, build_type, dropboxapi_token)
		jar_name = downloadAutomationJar(version_number, build_type, ACCESS_ID, ACCESS_KEY)		
		installer_name = downloadProvar(version_number, build_type, ACCESS_ID, ACCESS_KEY)
		installProvar(build_type, installer_name, installation_path)
		copyJar(installation_path, jar_name, version_number)
		if env_name.lower() == 'default':
			pass
		else:
			updateEnv(env_name)
		deleteMetadata(workspace)
		
	else:
		raise Exception("7 arguments are expected but "+ str(len(sys.argv) - 1) +" arguments are provided")
