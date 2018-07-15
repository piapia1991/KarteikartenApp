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

## Default Operator
bei der Zuweisung von Werten kann der default operator sehr nützlich sein!

```
const bla = blup["feld"] || {}; // {} ist der default Wert falls blup kein feld enthaelt

```

## Coding Style Grid Layout
Grid Layouts bestehen immer aus einem 'container' und einem oder mehreren 'item' Objekten.
Diese sind immer in der selben Datei.

```
            <Grid container>
                <Grid item  lg={2} md={3}>
                    <EditorSidebarComponent />
                </Grid>
                <Grid item lg={10} md={9}>
                    <EditorContentComponent />
                </Grid>
            </Grid>
```