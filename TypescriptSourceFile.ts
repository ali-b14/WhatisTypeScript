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


document.addEventListener("DOMContentLoaded", () => {
    const url: string = "https://api.dictionaryapi.dev/api/v2/entries/en/"!;
    const result: HTMLElement | null = document.querySelector(".bg-light");
    const defineForm: HTMLFormElement | null = document.getElementById("defineform") as HTMLFormElement;

    if (!result || !defineForm) {
        console.error("Required elements not found");
        return;
    }

    defineForm.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        const inputWord: string | null = (document.querySelector("[name='defineword']") as HTMLInputElement)?.value;

        if (!inputWord) {
            console.error("Input word not found");
            return;
        }

        fetch(`${url}${inputWord}`)
            .then((response: Response) => {
                if (!response.ok) {
                    throw new Error("Word not found");
                }
                return response.json();
            })
            .then((data: any) => {
                console.log(data);
                const meanings: any = data[0]?.meanings;
                const phonetic: string = data[0]?.phonetic;
                const audio: string = data[0]?.phonetics[0]?.audio;

                result.innerHTML = `
                    <h1>${inputWord}</h1>
                    <div>
                        <p>Part of Speech: ${meanings[0]?.partOfSpeech}</p>
                        <p>Phonetic: /${phonetic}/</p>
                    </div>
                    <div>
                        <p>Definition: ${meanings[0]?.definitions[0]?.definition}</p>
                        <p>Example: ${meanings[0]?.definitions[0]?.example || ""}</p>
                    </div>
                    <button onclick="playSound('${audio}')">Play Sound</button>
                `;
            })
            .catch((error: Error) => {
                console.error("Error:", error);
                result.innerHTML = `<h3 class="error">${error.message}</h3>`;
            });
    });

    function playSound(audioUrl: string): void {
        const audio: HTMLAudioElement = new Audio(audioUrl);
        audio.play();
    }
});

