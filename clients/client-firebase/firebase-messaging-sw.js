// // importScripts("https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js");
// importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');

// const messaging = firebase.messaging();

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //     apiKey: "AIzaSyBxb9FqiH6fjWGD-w1tlcU55eGBvfrHnLI",
// //     authDomain: "web-push-2-55d19.firebaseapp.com",
// //     projectId: "web-push-2-55d19",
// //     storageBucket: "web-push-2-55d19.firebasestorage.app",
// //     messagingSenderId: "212408452520",
// //     appId: "1:212408452520:web:8a2e1b7f0ad5cffcc5c99d"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);


// // importScripts("https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging.js");

// // const messaging = getMessaging();
// // onMessage(messaging, (payload) => {
// //     console.log('Message received. ', payload);
// //     // ...
// // });

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });



//  * Here is is the code snippet to initialize Firebase Messaging in the Service
//  * Worker when your app is not hosted on Firebase Hosting.

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
    apiKey: "AIzaSyBxb9FqiH6fjWGD-w1tlcU55eGBvfrHnLI",
    authDomain: "web-push-2-55d19.firebaseapp.com",
    projectId: "web-push-2-55d19",
    storageBucket: "web-push-2-55d19.firebasestorage.app",
    messagingSenderId: "212408452520",
    appId: "1:212408452520:web:8a2e1b7f0ad5cffcc5c99d",
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 