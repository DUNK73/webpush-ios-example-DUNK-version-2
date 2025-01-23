'use strict';


importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBxb9FqiH6fjWGD-w1tlcU55eGBvfrHnLI",
    authDomain: "web-push-2-55d19.firebaseapp.com",
    projectId: "web-push-2-55d19",
    storageBucket: "web-push-2-55d19.firebasestorage.app",
    messagingSenderId: "212408452520",
    appId: "1:212408452520:web:8a2e1b7f0ad5cffcc5c99d"
};

// Initialize the firebase in the service worker.
firebase.initializeApp(FIREBASE_CONFIG);
let messaging = firebase.messaging();
messaging.requestPermission()
    .then(() => {

        messaging.getToken();

    })

// self.addEventListener('push', function (event) {
//     var data = event.data.json();

//     const title = data.Title;
//     data.Data.actions = data.Actions;
//     const options = {
//         body: data.Message,
//         data: data.Data
//     };
//     event.waitUntil(self.registration.showNotification(title, options));
// });

// self.addEventListener('notificationclick', function (event) { });

// self.addEventListener('notificationclose', function (event) { });