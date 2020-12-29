import hudson.model.*
import jenkins.model.*
import hudson.tasks.test.AbstractTestResultAction

node('master'){
    stage('Launch Instance')
	{
		//reading values from execution pack
		def count = "${execution_pack}".tokenize(',').size()
		def secret_Classic = "067d4142b732060801b5107f47c76983c3027765dff82cdfb7179a47f49226c5"
        	def secret_Lighting = "77fb25e70b0c0f1fd1ed287155f66a9778e61c091f38a67481a038f5f833e3ee"
		def secret_VF = "fbf794da70f45217f559e0274cd3b1d0386424534cb0e6ca36637caad58f694c"
        	def secret_Flexi = "2dbc7eb0707f4995da58d246758076cf2c6a03951bf395d00b4d980d40bccb3d"
		def secret_Lighting2 = "b1c24876a6ba9abfa184c60536a402a964df5c4b8c0236b32998961fad7a43a1"
		def secret_CPQ = "3a4e0b9d0aace03629eea1d3e8641b5d3b9957cded0e063af186ea4efc9351c1"
		for (packname in "${execution_pack}".tokenize(',')){
			//executing terraform script for each value of execution pack
			env.pack = packname
			if(packname == 'Classic') {
			    bat  "cd C:/terraform/launchparallel && if not exist %pack% mkdir %pack%"
			    powershell"(gc C:/terraform/launchparallel/terraformfile) -replace 'automationAPIpack', 'automationAPI_$pack' -replace 'secret_id', '$secret_Classic' | Out-File -encoding ASCII C:/terraform/launchparallel/$pack/instance-creation.tf"
			
			}
			if(packname == 'Lightning') { 
			    bat  "cd C:/terraform/launchparallel && if not exist %pack% mkdir %pack%"
			    powershell"(gc C:/terraform/launchparallel/terraformfile) -replace 'automationAPIpack', 'automationAPI_$pack' -replace 'secret_id', '$secret_Lighting' | Out-File -encoding ASCII C:/terraform/launchparallel/$pack/instance-creation.tf"
			
			}
			if(packname == 'VF') { 
			    bat  "cd C:/terraform/launchparallel && if not exist %pack% mkdir %pack%"
			    powershell"(gc C:/terraform/launchparallel/terraformfile) -replace 'automationAPIpack', 'automationAPI_$pack' -replace 'secret_id', '$secret_VF' | Out-File -encoding ASCII C:/terraform/launchparallel/$pack/instance-creation.tf"
			
			}
			if(packname == 'Flexi') { 
			    bat  "cd C:/terraform/launchparallel && if not exist %pack% mkdir %pack%"
			    powershell"(gc C:/terraform/launchparallel/terraformfile) -replace 'automationAPIpack', 'automationAPI_$pack' -replace 'secret_id', '$secret_Flexi' | Out-File -encoding ASCII C:/terraform/launchparallel/$pack/instance-creation.tf"
			}
			if(packname == 'Lightning2') {
			    bat  "cd C:/terraform/launchparallel && if not exist %pack% mkdir %pack%"
			    powershell"(gc C:/terraform/launchparallel/terraformfile) -replace 'automationAPIpack', 'automationAPI_$pack' -replace 'secret_id', '$secret_Lighting2' | Out-File -encoding ASCII C:/terraform/launchparallel/$pack/instance-creation.tf"
			}
			if(packname == 'CPQ') {
			    bat  "cd C:/terraform/launchparallel && if not exist %pack% mkdir %pack%"
			    powershell"(gc C:/terraform/launchparallel/terraformfile) -replace 'automationAPIpack', 'automationAPI_$pack' -replace 'secret_id', '$secret_CPQ' | Out-File -encoding ASCII C:/terraform/launchparallel/$pack/instance-creation.tf"
			}
			bat "cd C:/terraform/launchparallel/$pack && C:/terraform/terraform.exe init"
			bat "cd C:/terraform/launchparallel/$pack && C:/terraform/terraform.exe apply -auto-approve"
			}
		sleep 300
	}
}

def branches = [:]
	try {
		timeout(time: 4, unit: 'HOURS') {
for (packname in "${execution_pack}".tokenize(',')){
	def pack = packname
	stage('Executing Tests for pack') {
		branches["${packname}"] = {
		node("automationAPI_${pack}"){
		withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'ProvarGitCredentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
				bat '''
				git clone "https://%USERNAME%:%PASSWORD%@github.com/ProvarTesting/ProvarAutomation.git"
				cd ProvarAutomation
				git pull "https://%USERNAME%:%PASSWORD%@github.com/ProvarTesting/ProvarAutomation.git" master
				'''
			}
            withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'ACCESS_ID', credentialsId: 'AWS', secretKeyVariable: 'ACCESS_KEY']]) {
              bat '''
	        pip install boto3
                cd ProvarAutomation/com.provar.chrome.automation
                C:/Users/Administrator/AppData/Local/Programs/Python/Python37-32/python.exe InstallProvar.py %build_type% %version_number% %installation_path% %ACCESS_ID% %ACCESS_KEY% %workspace% %env_name%
		C:/Users/Administrator/AppData/Roaming/npm/npm.cmd install 
		'''
		bat "cd ProvarAutomation/com.provar.chrome.automation && C:/Users/Administrator/AppData/Roaming/npm/tsc.cmd"
            }
             withCredentials([string(credentialsId: 'zapi_accesskey', variable: 'zapi_accesskey'),string(credentialsId: 'zapi_secretkey', variable: 'zapi_secretkey'),string(
credentialsId: 'zapi-username', variable: 'zapi-username')]) {
	      env.pack_name = pack
	      print "Packname will be : ${env.pack_name}"
              bat "cd ProvarAutomation/com.provar.chrome.automation && C:/Users/Administrator/AppData/Roaming/npm/npm.cmd test %zapi_accesskey% %zapi_secretkey% %zapi-username% %installation_path% %workspace% %pack_name%"
	      uploadFileToSlack(pack)
              junit allowEmptyResults: true, healthScaleFactor: 0.5, testResults: 'ProvarAutomation/com.provar.chrome.automation/target/build/spec/report/junit.xml'
            }
            }          
		}
    }
   }
	 parallel branches
		} } catch (e) {
    // If there was an exception thrown, the build failed
    currentBuild.result = "FAILED"
    throw e
  } finally {
    // Success or failure, always send notifications
     //  if(env.SEND_SLACK_NOTIFICATION == 'Yes') {
     //  notifyBuild(currentBuild.result)
     //  }
		stage('Destroy Instance')   {
		   destroyinstance()
	   }
	 }
	 
def destroyinstance() {					  
node('master'){
			for (packname in "${execution_pack}".tokenize(',')){
			//executing terraform script for each value of execution pack
			def pack = packname
			bat "cd C:/terraform/launchparallel/$pack && C:/terraform/terraform.exe destroy -auto-approve"
		}
		}
}	
def uploadFileToSlack(String packs) {
	withCredentials([string(credentialsId: 'provartoken', variable: 'TOKEN')]) {
		try {
		    env.pack_name = packs
			print "Packname will be : ${env.pack_name}"
			bat '''
				curl -F file=@ProvarAutomation/com.provar.chrome.automation/target/build/spec/report/junit.xml -F filename=Junit_Report_%version_number%_%pack_name%.xml -F "title=Automation API Test Report v%version_number%_%pack_name%" -F channels=builds -H "Authorization: Bearer %TOKEN%" https://slack.com/api/files.upload
			'''
		} catch(e) {
			println "Failed to upload junit report file to slack." + e
    		}
	}
}
def notifyBuild(String buildStatus = 'STARTED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.version_number}]'"
  def summary = "${subject}"

  // Override default values based on build status
  if (buildStatus == 'STARTED') {
    color = 'YELLOW'
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESSFUL') {
    color = 'GREEN'
    colorCode = '#00FF00'
  } else {
    color = 'RED'
    colorCode = '#FF0000'
  }

  // Send notifications
  slackSend (channel: "builds", color: colorCode, message: summary)
}
