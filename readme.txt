	READ ME
	
	CordovaApplication --

Prerequisites; to be installed on your machine =>
	npm - https://www.npmjs.com/
	Nodejs - https://nodejs.org/
	ANT - http://ant.apache.org/
	Cordova - https://cordova.apache.org/
	Ionic - http://ionicframework.com/getting-started/
	Android sdk & adb - https://developer.android.com/sdk/index.html

IDE - NetBeans


The file 'android-install.sh' is an executable to use in linux for deploying app
to an Android device. 
    It runs:

	ionic build android
	ionic run android
	adb logcat CordovaLog:D *:S


In the config.xml file you can see that the start page is set to 'index.html'.
    <content src="index.html"/>

In the 'index.html' file the <ion-nav-view> tags act as the template where pages 
are switched in and out of. This is done through 'app.js' which is referenced in 
a <script> tag in 'index.html'


    CSS - 
Ionic css is used, though manual css styles can be written in 'styles.css'



