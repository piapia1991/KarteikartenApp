# KarteikartenApp

# Deploy Site on Firebase
https://firebase.google.com/docs/hosting/deploying


## Requirements

* Install firebase tools
```
npm install -g firebase-tools
```
* Login to firebase account
```
firebase login
```

## Deploy
```
npm run build
firebase deploy
```

# Icon Font
https://material.io/tools/icons/?style=baseline
https://www.npmjs.com/package/material-icons-react

# Hinweise

bei der Zuweisung von Werten kann der default operator sehr nützlich sein!

```
const bla = blup["feld"] || {}; // {} ist der default Wert falls blup kein feld enthaelt

```