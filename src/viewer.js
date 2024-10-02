import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

var token, userId;

// so we don't have to write this out everytime 
const twitch = window.Twitch.ext;

// callback called when context of an extension is fired 
twitch.onContext((context) => {
  console.log(context);
});


// onAuthorized callback called each time JWT is fired
twitch.onAuthorized((auth) => {
  // save our credentials
  token = auth.token;
  userId = auth.userId;
});

const firebaseConfig = {
  apiKey: "AIzaSyAmjMt3UpXHT5arclAf_ecUwQ4I6UuL0Kc",
  authDomain: "team-cardinal-hackathon2024.firebaseapp.com",
  databaseURL: "https://team-cardinal-hackathon2024-default-rtdb.firebaseio.com",
  projectId: "team-cardinal-hackathon2024",
  storageBucket: "team-cardinal-hackathon2024.appspot.com",
  messagingSenderId: "777745009356",
  measurementId: "G-JWKVBE0HMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// Listen for changes in the '/cards' path in Realtime Database
const cardsRef = ref(db, '/cards');
onValue(cardsRef, (snapshot) => {
  const cardData = snapshot.val();
  console.log(cardData);
  populateCards(cardData);
});


function formatText(data) {
  var s = "";
  data.forEach(card => {
    s += `${card.card_count} ${card.card_name}\n`;
  });

  return s;
}

function populateCards(cardData) {
  var textarea = document.getElementById("cardsList");
  var text = formatText(cardData);
  textarea.textContent = text;
  replacePurchaseLink(text);
}

function getMassEntryUrl(cardsListText) {
  var replacedText = cardsListText.replace('%0A', '||');
  var dynamicURL = "https://www.tcgplayer.com/massentry?c=" + encodeURIComponent(replacedText) + "&productline=Magic";
  return dynamicURL.replace(new RegExp('%0A', 'g'), '||');
}

function replacePurchaseLink(cardsListText) {
  var el = document.getElementById('purchaseLink');
  var url = getMassEntryUrl(cardsListText);
  el.setAttribute('href', url);
}
