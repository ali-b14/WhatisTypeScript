// Import stylesheets
// import './style.css';
console.log("Hello, World");
// const form: HTMLFormElement = document.querySelector('#defineform');
// form.onsubmit = () => {
//   const formData = new FormData(form);
//   console.log(formData);
//   const text = formData.get('defineword') as string;
//   console.log(text);
//   return false; // prevent reload
// };
var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// const result = document.getElementById(".bg-light");
// const defineForm = document.getElementById("defineform");
var inputWord = document.getElementById("inp-word");
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/inputWord")
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error(error); });
