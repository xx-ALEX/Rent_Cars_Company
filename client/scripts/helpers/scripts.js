//Обновление местного времени пользователя:
export const getCurrentLocalTime = () => {
    (async () => {
        const localTime = document.getElementsByClassName(`time`)[0],
            url = `https://ipwho.is/`,
            response = await fetch(url);

        if (!response.ok) {
            throw new Error (`An error has occurred: ${response.status}`);
        }

        const object = await response.json();

        sessionStorage.setItem(`flag`, object[`flag`][`img`]);
        sessionStorage.setItem(`country`, object[`country`]);
        sessionStorage.setItem(`region`, object[`region`]);
        sessionStorage.setItem(`time`, object[`timezone`][`current_time`]);
        sessionStorage.setItem(`city`, object[`city`]);

        localTime.innerHTML = `${object[`timezone`][`current_time`].slice(0,4)}/` +
            `${object[`timezone`][`current_time`].slice(5,7)}/` +
            `${object[`timezone`][`current_time`].slice(8,10)} ` +
            `${object[`timezone`][`current_time`].slice(11,16)}`;
    })();
}

//Получение курсов валют:
export const getExchangeRates = () => {
    (async () => {
        const url = `https://api.exchangerate.host/latest`,
            response = await fetch(url);

        if (!response.ok) {
            throw new Error (`An error has occurred: ${response.status}`);
        }

        const object = await response.json();

        localStorage.setItem(`USD`, object[`rates`][`USD`]);
        localStorage.setItem(`GBP`, object[`rates`][`GBP`]);
        localStorage.setItem(`BYN`, object[`rates`][`BYN`]);
        localStorage.setItem(`RUB`, object[`rates`][`RUB`]);
        localStorage.setItem(`BTC`, object[`rates`][`BTC`]);
    })();
}

//Установка выбранного языка из cookie на кнопку menu:
export const setLanguageFromCookie =  () => {
    const languages = document.getElementsByName(`language`),
        buttonLanguage = document.getElementsByTagName(`button`)[2];

    for (let language of languages) {
        if (language.dataset[`lang`] === document.cookie) {
            language.setAttribute(`checked`, `true`);
            buttonLanguage.innerHTML = `${language.value} <span class="triangle"></span>`;
        }
    }
}

//Звук при переходе по страницам:
export const surfAudio = () => {
    let audio = new Audio();
    audio.src = `../client/sounds/surf.mp3`;
    audio.autoplay = true;
}