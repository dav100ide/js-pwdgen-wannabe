// // chiedi all'user il nome
// const userName = prompt('qual è il tuo nome?');
// // chiedi all'user il cognome
// const userSurname = prompt('qual è il tuo cognome?');
// // chiedi il colore preferito
// const userColor = prompt('e il tuo colore preferito?');
// // il messaggio finale
// document.querySelector('h2').innerHTML = `ecco la tua password: ${userName}${userSurname}${userColor} `;
let b_username;
let b_userSurname;
let b_userColor;

document.getElementById('new-password').onclick = function () {
   b_username = document.getElementById('user-name').value;
   b_userSurname = document.getElementById('user-surname').value;
   b_userColor = document.getElementById('user-color').value;

   document.getElementById('generated-password').innerHTML = `ecco la password generata: ${b_username}${b_userSurname}${b_userColor}`;
};
