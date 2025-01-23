const webpush = require("web-push");

const VAPID = {
  publicKey: "BCIXQbt6YBfQWqVgy_MZDOSKQ0SHil7eeq0ldaFAO7wIPYS2AJTOA50RJkbEmfkgFjeOKJzOHm4cUyOMktB6G_M",
  privateKey: "xyy6ZlnDbJjyV1Igh6MbTjkuozKRuqi5h6hwCzoKV6A",
};
webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  VAPID.publicKey,
  VAPID.privateKey
);


let sendNotification = (pushSubscription, payload) => {
  return webpush
    .sendNotification(
      pushSubscription,
      payload
    )
    .catch((err) => {
      console.log(err);
    });
}


module.exports.sendNotification = sendNotification;