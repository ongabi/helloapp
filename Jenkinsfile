pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				sh 'echo \'Build the SAP UI5 Project...\''
            }
        }
        stage('test'){
        	steps {
        		sh 'echo \'Test the SAP UI5 Project...\''
        	}
        }
        stage('deploy'){
        	steps{
        		// Package the dist folder as a zip file
        		sh "cd dist && zip -r  ../${BUILD_ZIP_FILE_NAME} * && cd .."
        		// Upload the zip file to JFrog Artifactory
	        	script{
	                def server = Artifactory.server 'ART-JFROG'
					def uploadSpec = """{
					  "files": [
					    {
					      "pattern": "${BUILD_ZIP_FILE_NAME}",
					      "target": "UI5/"
					    }
					 ]
					}"""
					def uploadBuildInfo = server.upload(uploadSpec)
	                server.publishBuildInfo uploadBuildInfo
	            }
        	}	
        }
    }
}