// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDwxUqbFhBOTl8HJMMBsuSmxqLke0oBV4",
    authDomain: "brs-2016.firebaseapp.com",
    databaseURL: "https://brs-2016.firebaseio.com",
    projectId: "brs-2016",
    storageBucket: "brs-2016.appspot.com",
    messagingSenderId: "190750893487",
    appId: "1:190750893487:web:03a04e3e9e5d091b5efb5a",
    measurementId: "G-6F9PFBCTE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let swRegistration = await navigator.serviceWorker.register('https://web-push-2-55d19.web.app/webpush-ios-example-brs/firebase-messaging-sw.js', { scope: '/webpush-ios-example-brs/' })

let pushManager = swRegistration.pushManager;

// if (!isPushManagerActive(pushManager)) {
//     throw new Error();
// }

let permissionState = await pushManager.permissionState({ userVisibleOnly: true });
switch (permissionState) {
    case 'prompt':
        document.getElementById('subscribe_btn').style.display = 'block';
        break;
    case 'granted':
        displaySubscriptionInfo(firebaseGetToken());
        break;
    case 'denied':
        document.getElementById('subscribe_btn').style.display = 'none';
        document.getElementById('active_sub').style.display = 'block';
        document.getElementById('active_sub').innerHTML = 'User denied push permission';
}


import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js";

// firebaseGetToken();



document.getElementById("subscribe_btn").addEventListener('click', () => {
    firebaseGetToken();
});

function firebaseGetToken() {
    const messaging = getMessaging(app);

    getToken(messaging, {
        vapidKey: 'BGxIs2JACNMgDuWQbOdhaoPIcaoBe1_CmPHtp_lgLCeW3EV30ePHmujCE8AGbBYMpPzzWqEUbfe6mLS9FnXaKeQ',
        serviceWorkerRegistration: swRegistration,
    }).then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...

            document.getElementById('active_sub').style.display = 'block';
            document.getElementById("active_sub").innerHTML = currentToken;

        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });


    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // ...
    });
    
}