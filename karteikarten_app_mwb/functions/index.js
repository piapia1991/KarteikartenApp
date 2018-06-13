const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// Woohoo, we have a new User!
// Prepare everything for the new User.
exports.addNewUser = functions.auth.user().onCreate((user) => {
    const uid = user.uid;
    const email = user.email;
    const name = user.displayName;

    let userObject = {};
    userObject["name"]  = name;
    userObject["email"] = email;

    const usersRef = admin.database().ref("users/" + uid);

    return usersRef.set(userObject);
});


// I don't want to live on this planet anymore.
// Delete all data from user.
exports.deleteUser = functions.auth.user().onDelete((user) => {
    const uid = user.uid;

    const usersRef = admin.database().ref("users/" + uid);
    return usersRef.remove()
});
