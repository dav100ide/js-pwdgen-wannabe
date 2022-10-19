// chiedi all'user il nome
const userName = prompt('qual è il tuo nome?');
// chiedi all'user il cognome
const userSurname = prompt('qual è il tuo cognome?');
// chiedi il colore preferito
const userColor = prompt('e il tuo colore preferito?');
// il messaggio finale
document.querySelector('h2').innerHTML = `ecco la tua password: ${userName}${userSurname}${userColor} `;
