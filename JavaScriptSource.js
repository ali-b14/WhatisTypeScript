document.addEventListener("DOMContentLoaded", function () {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const result = document.querySelector(".bg-light");
    const defineForm = document.getElementById("defineform");

    defineForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const inputWord = document.querySelector("[name='defineword']").value;
        fetch(`${url}${inputWord}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Word not found");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const meanings = data[0].meanings;
                const phonetic = data[0].phonetic;
                const audio = data[0].phonetics[0].audio;

                result.innerHTML = `
                    <h1>${inputWord}</h1>
                    <div>
                        <p>Part of Speech: ${meanings[0].partOfSpeech}</p>
                        <p>Phonetic: /${phonetic}/</p>
                    </div>
                    <div>
                        <p>Definition: ${meanings[0].definitions[0].definition}</p>
                        <p>Example: ${meanings[0].definitions[0].example || ""}</p>
                    </div>
                    <button onclick="playSound('${audio}')">Play Sound</button>
                `;
            })
            .catch((error) => {
                console.error("Error:", error);
                result.innerHTML = `<h3 class="error">${error.message}</h3>`;
            });
    });

    function playSound(audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
    }
});








// document.addEventListener("DOMContentLoaded", function() {
//     var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//     // var result = document.getElementById("result");
//     var btn = document.getElementById("search-btn");

//     if (btn) {
//         btn.addEventListener("click", function() {
//             var inpWord = document.getElementById("inp-word");
//             if (inpWord) {
//                 console.log(inpWord.value);
//             } else {
//                 console.error("Input element not found.");
//             }
//         });
//     } else {
//         console.error("Button element not found.");
//     }
// });




// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// const result = document.getElementById("result");
// const btn = document.getElementById("search-btn");

// btn.addEventListener("click", () => {
//     let inpWord = document.getElementById("inp-word").value; // Corrected to retrieve the value

//     fetch(`${url}${inpWord}`).then((response) => response.json()).then((data) => {console.log(data);
//         result.innerHTML = <div class="word">
//         {/* //                     <h3>${inpWord}</h3>
//         //                 </div> */}
//                         <div class="details">
//                             <p>${data[0].meanings[0].partOfSpeech}</p>
//                             <p>/${data[0].phonetic}/</p>
//                         </div>
//                         <p class="word-meaning">
//                            ${data[0].meanings[0].definitions[0].definition}
//                         </p>
//                         <p class="word-example">
//                             ${data[0].meanings[0].definitions[0].example || ""}
//                         </p>`;
//                 })
//                 .catch(() => {
//                     result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
//                 });

//     Now you can use inpWord to make API requests or perform other actions
// });




// // const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// // const result = document.querySelector('.bg-light.p-5.rounded');
// // const btn = document.getElementById("btnsearch");

// // btn.addEventListener("click", () => {
// //     let inpWord = document.querySelector('.form-control.me-2').value;
// //     fetch(`${url}${inpWord}`)
// //         .then((response) => response.json())
// //         .then((data) => {
// //             console.log(data);
// //             result.innerHTML = `
// //             <div class="word">
// //                     <h3>${inpWord}</h3>
// //                 </div>
// //                 <div class="details">
// //                     <p>${data[0].meanings[0].partOfSpeech}</p>
// //                     <p>/${data[0].phonetic}/</p>
// //                 </div>
// //                 <p class="word-meaning">
// //                    ${data[0].meanings[0].definitions[0].definition}
// //                 </p>
// //                 <p class="word-example">
// //                     ${data[0].meanings[0].definitions[0].example || ""}
// //                 </p>`;
// //         })
// //         .catch(() => {
// //             result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
// //         });
// });