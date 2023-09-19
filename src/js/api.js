const mijnFormulier = document.getElementById('form');
const verzendKnop = document.getElementById('submit');

verzendKnop.addEventListener('click', () => {
	const firstname = document.getElementById('firstname').value;
	const lastname = document.getElementById('lastname').value;
	const license = document.getElementById('license').value;
	const photo = document.getElementById('photo').files[0]; // Uploadfoto ophalen

	// Hier kun je je API-endpoint vervangen
	const apiEndpoint = '/api/message';

	const formData = new FormData();
	formData.append('firstname', firstname);
	formData.append('lastname', lastname);
	formData.append('license', license);
	formData.append('photo', photo);

	formData.forEach((value, key) => {
		console.log(key + ': ' + value);
	});

	fetch(apiEndpoint, {
		method: 'POST',
		body: formData,
	})
		.then(response => response.json())
		.then(data => {
			// Verwerk de API-respons hier, bijvoorbeeld toon een succesbericht
			// alert('Succesvol geüpload! API-reactie: ' + JSON.stringify(data));
		})
		.catch(error => {
			console.error('Fout bij API-aanroep:', error);
		});
});
