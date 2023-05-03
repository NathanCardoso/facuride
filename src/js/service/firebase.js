import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyBJgNHk-SRMEPfHu-BRkFMRwZItkJ8n4Rw",
	authDomain: "crudfirebase-bc745.firebaseapp.com",
	databaseURL: "https://crudfirebase-bc745-default-rtdb.firebaseio.com",
	projectId: "crudfirebase-bc745",
	storageBucket: "crudfirebase-bc745.appspot.com",
	messagingSenderId: "2478691727",
	appId: "1:2478691727:web:53a19eb0237d27b3dd27fa"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());

async function getData() {
	try {
		const data = await get(child(dbRef, `Caronas`))
		return data.val()
	} catch(error){
		throw error
	}
}

export default getData