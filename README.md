# cardinal-panel
Hackathon - Cardinal front end panel

# running

add the `apiKey` to the config in `index.html`

```
const firebaseConfig = {
    apiKey: "ENTER_KEY_HERE",
    authDomain: "team-cardinal-hackathon2024.firebaseapp.com",
    databaseURL: "https://team-cardinal-hackathon2024-default-rtdb.firebaseio.com",
    projectId: "team-cardinal-hackathon2024",
    storageBucket: "team-cardinal-hackathon2024.appspot.com",
    messagingSenderId: "777745009356",
    measurementId: "G-JWKVBE0HMJ"
};
```

in terminal:

```
cd src
npx http-server
```

open the webpage (default http://127.0.0.1:8080)