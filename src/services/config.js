/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCNoBew2DQyWGQigE_yW5RxPs6H5NA_NhE",
  authDomain: "pvt-h21-lh.firebaseapp.com",
  databaseURL: "https://pvt-h21-lh-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-lh",
  storageBucket: "pvt-h21-lh.appspot.com",
  messagingSenderId: "451415435455",
  appId: "1:451415435455:web:1ea9e3d2143271ab707e0a"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";