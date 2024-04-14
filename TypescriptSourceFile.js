// document.addEventListener("DOMContentLoaded", () => {
//     const url: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//     // const result: HTMLElement = document.getElementById("result");
//     const btn: HTMLButtonElement = document.getElementById("search-btn") as HTMLButtonElement;
//     if (btn) {
//         btn.addEventListener("click", () => {
//             const inpWord: HTMLInputElement | null = document.getElementById("inp-word") as HTMLInputElement;
//             if (inpWord) {
//                 console.log(inpWord.value);
//             }
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    var result = document.querySelector(".bg-light");
    var defineForm = document.getElementById("defineform");
    if (!result || !defineForm) {
        console.error("Required elements not found");
        return;
    }
    defineForm.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        var inputWord = (_a = document.querySelector("[name='defineword']")) === null || _a === void 0 ? void 0 : _a.value;
        if (!inputWord) {
            console.error("Input word not found");
            return;
        }
        fetch("".concat(url).concat(inputWord))
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Word not found");
            }
            return response.json();
        })
            .then(function (data) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            console.log(data);
            var meanings = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.meanings;
            var phonetic = (_b = data[0]) === null || _b === void 0 ? void 0 : _b.phonetic;
            var audio = (_d = (_c = data[0]) === null || _c === void 0 ? void 0 : _c.phonetics[0]) === null || _d === void 0 ? void 0 : _d.audio;
            result.innerHTML = "\n                    <h1>".concat(inputWord, "</h1>\n                    <div>\n                        <p>Part of Speech: ").concat((_e = meanings[0]) === null || _e === void 0 ? void 0 : _e.partOfSpeech, "</p>\n                        <p>Phonetic: /").concat(phonetic, "/</p>\n                    </div>\n                    <div>\n                        <p>Definition: ").concat((_g = (_f = meanings[0]) === null || _f === void 0 ? void 0 : _f.definitions[0]) === null || _g === void 0 ? void 0 : _g.definition, "</p>\n                        <p>Example: ").concat(((_j = (_h = meanings[0]) === null || _h === void 0 ? void 0 : _h.definitions[0]) === null || _j === void 0 ? void 0 : _j.example) || "", "</p>\n                    </div>\n                    <button onclick=\"playSound('").concat(audio, "')\">Play Sound</button>\n                ");
        })
            .catch(function (error) {
            console.error("Error:", error);
            result.innerHTML = "<h3 class=\"error\">".concat(error.message, "</h3>");
        });
    });
    function playSound(audioUrl) {
        var audio = new Audio(audioUrl);
        audio.play();
    }
});
