
/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:20.18.0-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'cp -r "remaindmail.js" "remaindmail2.js"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
        stage('Deploy - 1') {
            steps {
                echo 'From Deployment Staging Step'
            }
        }
        stage('Sainty Check') {
            steps {
                input 'Does the staging environment okay?'
            }
        }
        stage('Deploy - 2') {
            steps {
                echo 'From Deployment Production Step'
            }
        }
    }
    post{
        always{
            echo 'This will always show'
        }
        success{
            echo 'This will show only if it success'
        }
        failure {
            echo 'This will run only if it failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
