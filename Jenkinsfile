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
			steps {
        		sh 'echo \'Deploy the SAP UI5 Project...\''
        	}	
        }
    }
}