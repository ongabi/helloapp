pipeline {
    agent { docker { image 'node:8.11.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm config set @sap:registry https://npm.sap.com'
				sh 'npm install'
				sh 'npm run-script build'
            }
        }
        stage('test'){
        	steps {
        		sh 'echo \'Test the SAP UI5 Project...\''
        	}
        }
        stage('deploy'){
			steps {
        		sh 'echo \'Deploy the SAP UI5 Project...\''
        	}	
        }
    }
}