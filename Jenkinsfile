pipeline {
    agent any

    tools {
        nodejs "NODEJS" // El nombre que configuraste en Jenkins
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'ng build'
            }
        }

        stage('Test') {
            steps {
                sh 'ng test --watch=false --browsers=ChromeHeadless'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build completado con éxito.'
        }
        failure {
            echo 'El build ha fallado.'
        }
    }
}
