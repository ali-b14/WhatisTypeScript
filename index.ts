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


const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    // const result = document.getElementById(".bg-light");
    // const defineForm = document.getElementById("defineform");
    const inputWord = document.getElementById("inp-word");

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));