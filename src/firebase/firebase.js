import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4I_w9ks4zIRR4A_qDPZuojPl0ZyoEH54",
    authDomain: "expensify-dc3ea.firebaseapp.com",
    databaseURL: "https://expensify-dc3ea.firebaseio.com",
    projectId: "expensify-dc3ea",
    storageBucket: "expensify-dc3ea.appspot.com",
    messagingSenderId: "2348167986",
    appId: "1:2348167986:web:42983d73573cc66c785d2b",
    measurementId: "G-1ENWL831KJ"
};

firebase.initializeApp(firebaseConfig);


const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

/*
//'childe_removed' es un listener de elementos borrados
database.ref('expenses').on('child_removed', (snapshot) =>{
	console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot)=> {
	console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot)=> {
	console.log(snapshot.key, snapshot.val());
});*/


/*
database.ref('expenses').on('value', (snapshot)=>{
	const expenses = [];

	snapshot.forEach((childSnapshot) =>{
		expenses.push({
			id: childSnapshot.key,  //.key referencia el identificador del valor puesto por el push()
			...childSnapshot.val()
		});
	});

	console.log(expenses);
});*/

/*
//Transformación del objeto de firebase a un arreglo
database.ref('expenses')
	.once('value')
	.then((snapshot) =>{
		const expenses =[];

		snapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,  	//.key referencia el identificador del valor puesto por el push()
				...childSnapshot.val()
			});
		});
		console.log(expenses);
	});	
	*/

/*database.ref('expenses').push({
	description: 'Coffe',
	amount: 15,
	creactedAt: 100,
	note: ' el cafe'
});*/

/*database.ref('notes').push({
	title: 'Temas',
	body: 'React, angul'
});*/

/*
const firebaseNotes ={
	notes: {
		dvvd:{
			title: 'Nota 1',
			body: 'Es una nota'
		},
		asncjsncjsd:{
			title: 'Nota de andrew',
			body: 'Es una NOTA'
		}
	}
};

const notes = [{
	id: 12,
	title: 'Nota 1',
	body: 'Es una nota'
},{
	id: '761asd',
	title: 'Nota de andrew',
	body: 'Es una NOTA'
}];

database.ref('notes').set(firebaseNotes);*/

/*const onValueChange =  database.ref().on('value', (snapshot) =>{
	console.log(snapshot.val());
}, (e) =>{
	console.log('Error en el fetchin ', e);
});*/

/*
//Once obtiene los valores 1 vez
database.ref('location/city')
	.once('value') 
	.then((snapshot) =>{
		const val = snapshot.val();

		console.log(val);
	}).catch((e) => {})
*/
//.ref() referencia el root de la BD
/*database.ref().set({
	name: "Juan ",
	age: 21,
	stressLevel: 6,
	isSingle: true,
	job: {
		title: 'developer',
		company: 'Google'
	},
	location: {
		city: 'Phily',
		country: 'USA!',
		barrio: 'Jardines'
	}
}).then(() => {
	console.log('Data guardada');
}).catch((e) => {
	console.log('ERROR PAPU ', e);
});

database.ref().update({
	stressLevel: 9,
	'job/company': 'amazon',
	'location/city': 'seatle'
});*/

//database.ref('isSingle').set(null);

/*database.ref('isSingle')
	.remove()
	.then(() =>{
		console.log('DATA REMOVED')
	}).catch((e) =>{

	});*/

