import Component from '../../views/component.js';

class Header extends Component {
    static async render() {
        const page = this.urlParts[`page`];

        return `
        <div class="header_top">
            <div class="logo_holder">
                <a href="#/" class="logo_link" title="main page">
                    <p translate="no">Rent Cars Company</p>
                </a>
            </div>
            <div class="user_location">
                <p class="your_location">Your Location</p>
                <p class="time"></p>
                <img src="" alt="">
                <p class="location"></p>
                <br>
                <p class="weather"></p>
                <img src="" alt="">
            </div>
            <div class="dropdown_menu">
                <button class="not_selected">Our Locations <span class="triangle"></span></button>
                <div class="dropdown" id="citiesList">
                    <p>SELECT LOCATION</p>
                    <div>
                        <label>
                            <input type="radio" id="by" name="city" value="Minsk">
                            <span class="custom_radio"></span>
                            <span>Minsk (<span translate="no">BY</span>)</span>
                        </label>
                        <label>
                            <input type="radio" id="pl" name="city" value="Warsaw">
                            <span class="custom_radio"></span>
                            <span>Warsaw (<span translate="no">PL</span>)</span>
                        </label>
                        <label>
                            <input type="radio" id="gb" name="city" value="London">
                            <span class="custom_radio"></span>
                            <span>London (<span translate="no">GB</span>)</span>
                        </label>
                        <label>
                            <input type="radio" id="ru" name="city" value="Moscow">
                            <span class="custom_radio"></span>
                            <span>Moscow (<span translate="no">RU</span>)</span>
                        </label>
                        <label>
                            <input type="radio" id="fr" name="city" value="Paris">
                            <span class="custom_radio"></span>
                            <span>Paris (<span translate="no">FR</span>)</span>
                        </label>
                        <label>
                            <input type="radio" id="us" name="city" value="Chicago">
                            <span class="custom_radio"></span>
                            <span>Chicago (<span translate="no">US</span>)</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="selected_location">
                <p class="your_location">Selected Location</p>
                <p class="time">Please select any location</p>
                <img src="" alt="">
                <p class="location"></p>
                <br>
                <p class="weather"></p>
                <img src="" alt="">
            </div>
            <div class="dropdown_menu">
                <button class="not_selected" translate="no">EUR (&euro;) <span class="triangle"></span></button>
                <div class="dropdown" id="currenciesList">
                    <p>SELECT CURRENCY</p>
                    <div>
                        <label>
                            <input type="radio" id="usd" name="currency" value="USD ($)">
                            <span class="custom_radio"></span>
                            <span translate="no">USD ($)</span>
                        </label>
                        <label>
                            <input type="radio" id="eur" name="currency" value="EUR (&euro;)" checked>
                            <span class="custom_radio"></span>
                            <span translate="no">EUR (&euro;)</span>
                        </label>
                        <label>
                            <input type="radio" id="gbp" name="currency" value="GBP (&pound;)">
                            <span class="custom_radio"></span>
                            <span translate="no">GBP (&pound;)</span>
                        </label>
                        <label>
                            <input type="radio" id="byn" name="currency" value="BYN (Br)">
                            <span class="custom_radio"></span>
                            <span translate="no">BYN (Br)</span>
                        </label>
                        <label>
                            <input type="radio" id="rub" name="currency" value="RUB (&#8381;)">
                            <span class="custom_radio"></span>
                            <span translate="no">RUB (&#8381;)</span>
                        </label>
                        <label>
                            <input type="radio" id="btc" name="currency" value="BTC (&#8383;)">
                            <span class="custom_radio"></span>
                            <span translate="no">BTC (&#8383;)</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="dropdown_menu">
                <button class="not_selected" translate="no">${localStorage.getItem(`language`) || `English`} <span class="triangle"></span></button>
                <div class="dropdown" id="language">
                    <p>SELECT LANGUAGE</p>
                    <div>
                        <label data-google-lang="en">
                            <input type="radio" id="eng" name="language" value="English" checked data-lang="googtrans=null">
                            <span class="custom_radio"></span>
                            <img src="images/lang/eng.png" alt="en">
                            <span translate="no">English</span>
                        </label>
                        <label data-google-lang="be" class="language">
                            <input type="radio" id="bel" name="language" value="Беларуская" data-lang="googtrans=/en/be">
                            <span class="custom_radio"></span>
                            <img src="images/lang/bel.png" alt="be">
                            <span translate="no">Беларуская</span>
                        </label>
                        <label data-google-lang="ru" class="language">
                            <input type="radio" id="rus" name="language" value="Русский" data-lang="googtrans=/en/ru">
                            <span class="custom_radio"></span>
                            <img src="images/lang/rus.png" alt="ru">
                            <span translate="no">Русский</span>
                        </label>
                        <label data-google-lang="de" class="language">
                            <input type="radio" id="deu" name="language" value="Deutsch" data-lang="googtrans=/en/de">
                            <span class="custom_radio"></span>
                            <img src="images/lang/deu.png" alt="de">
                            <span translate="no">Deutsch</span>
                        </label>
                        <label data-google-lang="fr" class="language">
                            <input type="radio" id="fra" name="language" value="le français" data-lang="googtrans=/en/fr">
                            <span class="custom_radio"></span>
                            <img src="images/lang/fra.png" alt="fr">
                            <span translate="no">le français</span>
                        </label>
                        <label data-google-lang="es" class="language">
                            <input type="radio" id="spa" name="language" value="el español" data-lang="googtrans=/en/es">
                            <span class="custom_radio"></span>
                            <img src="images/lang/spa.png" alt="es">
                            <span translate="no">el español</span>
                        </label>
                        <label data-google-lang="it" class="language">
                            <input type="radio" id="ita" name="language" value="italiano" data-lang="googtrans=/en/it">
                            <span class="custom_radio"></span>
                            <img src="images/lang/ita.png" alt="it">
                            <span translate="no">italiano</span>
                        </label>
                        <label data-google-lang="zh-CN" class="language">
                            <input type="radio" id="zho" name="language" value="汉语" data-lang="googtrans=/en/zh-CN">
                            <span class="custom_radio"></span>
                            <img src="images/lang/zho.png" alt="zh">
                            <span translate="no">汉语</span>
                        </label>
                        <label data-google-lang="ar" class="language">
                            <input type="radio" id="ara" name="language" value="العربية" data-lang="googtrans=/en/ar">
                            <span class="custom_radio"></span>
                            <img src="images/lang/ara.png" alt="ar">
                            <span translate="no">العربية</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="search_outer">
                <div class="search_inner">
                    <div class="magnifying_glass"></div>
                    <input type="text" id="search" class="hidden_input">
                    <div class="search_list">
                        <ul class="elastic">
                            <li>EV</li>
                            <li>ICE Vehicle</li>
                            <li>Services</li>
                            <li>About us</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="search_outer_hidden">
            <div class="logo_holder_hidden">
                <a href="#/" class="logo_link" title="main page">
                    <p translate="no">Rent Cars Company</p>
                </a>
            </div>
            <div class="search_inner_hidden">
                <div class="magnifying_glass"></div>
                <input type="text" id="search_hidden" class="hidden_input">
                <div class="search_list_hidden">
                    <ul class="elastic_hidden">
                        <li>EV</li>
                        <li>ICE Vehicle</li>
                        <li>Services</li>
                        <li>About us</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header_bottom">
            <div class="dropdown_menu">
                <button class="not_selected${page === 'ev' || page === 'ice' ? ' active' : ''}">Vehicles <span class="triangle ${page === 'ev' || page === 'ice' ? 'active_triangle' : ''}"></span></button>
                <div class="dropdown">
                    <a href="#/ev" class="${page === 'ev' ? 'active_submenu' : ''}" title="EV">EV</a>
                    <a href="#/ice" class="${page === 'ice' ? 'active_submenu' : ''}" title="ICE vehicle">ICE Vehicle</a>
                </div>
            </div>
            <a href="#/services" class="bottom_menu ${page === 'services' ? 'active' : ''}" title="Services">Services</a>
            <a href="#/about" class="bottom_menu ${page === 'about' ? 'active' : ''}" title="About us">About us</a>
            <a href="#/contacts" class="bottom_menu ${page === 'contacts' ? 'active' : ''}" title="Contacts">Contacts</a>
        </div>
        `;
    }

    static afterRender() {
        this.getCurrentLocation();
        this.menu();
        this.showSearch();
        this.liveSearch();
        this.selectLocation();
        this.setCurrency();
        this.setLanguage();
    }
    
    static getCurrentLocation() {
        if (sessionStorage.getItem(`flag`) && sessionStorage.getItem(`country`) &&
            sessionStorage.getItem(`region`) && sessionStorage.getItem(`time`) &&
            sessionStorage.getItem(`city`)) {
            this.showOwnLocation(sessionStorage.getItem(`flag`), sessionStorage.getItem(`country`),
                sessionStorage.getItem(`region`), sessionStorage.getItem(`time`));

            this.getLocalWeatherForecast(sessionStorage.getItem(`city`));
        }

        else {
            (async () => {
                const url = `https://ipwho.is/`,
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

                this.showOwnLocation(object[`flag`][`img`], object[`country`], object[`region`], object[`timezone`][`current_time`]);

                this.getLocalWeatherForecast(object[`city`]);
            })();
        }
    }

    static showOwnLocation(img, country, region, currentTime) {
        const localTime = document.getElementsByClassName(`time`)[0],
            flag = document.querySelector(`.user_location img:first-of-type`),
            location = document.getElementsByClassName(`location`)[0];

        localTime.innerHTML = `${currentTime.slice(0,4)}/${currentTime.slice(5,7)}/` +
            `${currentTime.slice(8,10)} ${currentTime.slice(11,16)}`;
        flag.classList.add(`flag`);
        flag.setAttribute(`src`, `${img}`);
        location.innerHTML = `${country} (${region})`;
    }

    static getLocalWeatherForecast(city) {
        const localWeather = document.getElementsByClassName(`weather`)[0],
            weatherIcon = document.querySelector(`.user_location img:last-of-type`);

        if (sessionStorage.getItem(`temperature`) && sessionStorage.getItem(`icon`)) {
            localWeather.innerHTML = `${sessionStorage.getItem(`temperature`)}&deg; C`;
            weatherIcon.classList.add(`weather_icon`);
            weatherIcon.setAttribute(`src`, `https://openweathermap.org/img/w/`
                + `${sessionStorage.getItem(`icon`)}.png`);
        }

        else {
            (async () => {
                const apiKey = `682272ae93aa93292ba313f19c33bd09`,
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
                    response = await fetch(url);

                if (!response.ok) {
                    throw new Error (`An error has occurred: ${response.status}`);
                }

                const object = await response.json();

                sessionStorage.setItem(`temperature`, `${Math.round(object[`main`][`temp`] - 273.15)}`);
                sessionStorage.setItem(`icon`, object[`weather`][0][`icon`]);

                localWeather.innerHTML = `${Math.round(object[`main`][`temp`] - 273.15)}&deg; C`;
                weatherIcon.classList.add(`weather_icon`);
                weatherIcon.setAttribute(`src`, `https://openweathermap.org/img/w/`
                    + `${object[`weather`][0][`icon`]}.png`);
            })();
        }
    }

    static menu() {
        document.body.onclick = evt => {
            const target = evt.target,
                button = target.closest(`button`),
                menu = target.closest(`.dropdown_show`);

            if (menu) {
                return;
            }

            if (button && button.className === `not_selected`|| button && button.className === `not_selected active`) {
                if (document.getElementsByClassName(`dropdown_show`).length) {
                    for (let i = 0; i < document.getElementsByTagName(`button`).length; i++) {
                        if (document.getElementsByTagName(`button`)[i].classList.contains(`selected`)) {
                            document.getElementsByTagName(`button`)[i].classList.toggle(`selected`);
                            document.getElementsByTagName(`button`)[i].querySelector('span').classList.toggle(`selected_triangle`);
                        }
                    }
                    for (let i = 0; i < document.getElementsByClassName(`dropdown`).length; i++) {
                        if (document.getElementsByClassName(`dropdown`)[i].classList.contains(`dropdown_show`)) {
                            document.getElementsByClassName(`dropdown`)[i].classList.toggle(`dropdown_show`);
                        }
                    }
                }

                button.classList.toggle(`selected`);
                button.querySelector('span').classList.toggle(`selected_triangle`);
                target.closest('.dropdown_menu').querySelector('.dropdown').classList.toggle(`dropdown_show`);
            }
            else {
                for (let i = 0; i < document.getElementsByTagName(`button`).length; i++) {
                    if (document.getElementsByTagName(`button`)[i].classList.contains(`selected`)) {
                        document.getElementsByTagName(`button`)[i].classList.toggle(`selected`);
                        document.getElementsByTagName(`button`)[i].querySelector(`span`).classList.toggle(`selected_triangle`);
                    }
                }
                for (let i = 0; i < document.getElementsByClassName(`dropdown`).length; i++) {
                    if (document.getElementsByClassName(`dropdown`)[i].classList.contains(`dropdown_show`)) {
                        document.getElementsByClassName(`dropdown`)[i].classList.toggle(`dropdown_show`);
                    }
                }
            }
        }
    }

    static showSearch() {
        document.onclick = evt => {
            const target = evt.target,
                searchIcon = target.closest(`.magnifying_glass`),
                searchField = target.closest(`.show_input`),
                searchList = target.closest(`.search_list`),
                searchListHidden = target.closest(`.search_list_hidden`);

            if (searchList || searchListHidden) {
                return;
            }

            if (searchIcon) {
                document.getElementsByClassName(`magnifying_glass`)[0].classList.toggle(`magnifying_glass_selected`);
                document.getElementById(`search`).classList.toggle(`show_input`);
                document.getElementById(`search`).value = '';
                document.querySelector(`div.search_list`).classList.remove(`search_list_show`);

                document.getElementsByClassName(`magnifying_glass`)[1].classList.toggle(`magnifying_glass_selected`);
                document.getElementById(`search_hidden`).classList.toggle(`show_input`);
                document.getElementById(`search_hidden`).value = '';
                document.querySelector(`div.search_list_hidden`).classList.remove(`search_list_show`);
            }
            else if (!searchIcon && !searchField && document.getElementsByClassName(`magnifying_glass_selected`)[0]) {
                document.getElementsByClassName(`magnifying_glass`)[0].classList.toggle(`magnifying_glass_selected`);
                document.getElementById(`search`).classList.toggle(`show_input`);
                document.getElementById(`search`).value = '';
                document.querySelector(`div.search_list`).classList.remove(`search_list_show`);

                document.getElementsByClassName(`magnifying_glass`)[1].classList.toggle(`magnifying_glass_selected`);
                document.getElementById(`search_hidden`).classList.toggle(`show_input`);
                document.getElementById(`search_hidden`).value = '';
                document.querySelector(`div.search_list_hidden`).classList.remove(`search_list_show`);
            }
        }
    }

    static liveSearch() {
        document.querySelector(`#search`).oninput = () => {
            function insertMark(string, pos, len) {
                return string.slice(0, pos) + `<mark>` + string.slice(pos, pos + len) + `</mark>` + string.slice(pos + len);
            }

            document.querySelector(`div.search_list`).classList.add(`search_list_show`);
            const value = document.querySelector(`#search`).value.trim(),
            elasticItems = document.querySelectorAll(`.elastic li`);

            if (value !== '') {
                elasticItems.forEach(elem => {
                    if (elem.innerText.search(value) === -1) {
                        elem.classList.add(`hide`);
                        elem.innerHTML = elem.innerText;
                    } else {
                        elem.classList.remove(`hide`);
                        let str = elem.innerText;
                        elem.innerHTML = insertMark(str, elem.innerText.search(value), value.length);
                    }
                });
            } else {
                elasticItems.forEach(elem => {
                    elem.classList.remove(`hide`);
                    elem.innerHTML = elem.innerText;
                });
            }
        }

        document.querySelector(`#search_hidden`).oninput = () => {
            function insertMark(string, pos, len) {
                return string.slice(0, pos) + `<mark>` + string.slice(pos, pos + len) + `</mark>` + string.slice(pos + len);
            }

            document.querySelector(`div.search_list_hidden`).classList.add(`search_list_show`);
            const value = document.querySelector(`#search_hidden`).value.trim(),
            elasticItems = document.querySelectorAll(`.elastic_hidden li`);

            if (value !== '') {
                elasticItems.forEach(elem => {
                    if (elem.innerText.search(value) === -1) {
                        elem.classList.add(`hide`);
                        elem.innerHTML = elem.innerText;
                    } else {
                        elem.classList.remove(`hide`);
                        let str = elem.innerText;
                        elem.innerHTML = insertMark(str, elem.innerText.search(value), value.length);
                    }
                });
            } else {
                elasticItems.forEach(elem => {
                    elem.classList.remove(`hide`);
                    elem.innerHTML = elem.innerText;
                });
            }
        }
    }

    static selectLocation() {
        document.getElementById(`citiesList`).onchange = () => {
            const cities = document.getElementsByName(`city`);
            let timerIdCity,
                timerIdDatetime;
            localStorage.removeItem('datetime');
            localStorage.removeItem(`temperatureSelected`);
            localStorage.removeItem(`iconSelected`);

            for (let city of cities) {
                if (city.checked) {
                    localStorage.setItem(`city`, city.value);
                    localStorage.setItem(`cityID`, city.id);

                    this.getCurrentTime(city.value);
                    this.showSelectedLocation(city.id, city.value);
                    this.getSelectedLocationWeatherForecast(city.value);

                    if (localStorage.getItem(`timerIdDatetime`)) {
                        clearInterval(+localStorage.getItem(`timerIdDatetime`));
                    }
                    timerIdDatetime = setInterval(() => localStorage.removeItem(`datetime`), 59800);
                    localStorage.setItem(`timerIdDatetime`, timerIdDatetime);

                    if (localStorage.getItem(`timerIdCity`)) {
                        clearInterval(+localStorage.getItem(`timerIdCity`));
                    }
                    timerIdCity = setInterval(this.getCurrentTime, 60000, localStorage.getItem(`city`));
                    localStorage.setItem(`timerIdCity`, timerIdCity);
                }
            }
        }

        window.addEventListener(`hashchange`, () => {
            const selectedCityTime = document.getElementsByClassName(`time`)[1],
                cities = document.getElementsByName(`city`);

            if (localStorage.getItem(`datetime`)) {
                selectedCityTime.innerHTML = `${localStorage.getItem('datetime').slice(0,4)}/` +
                    `${localStorage.getItem(`datetime`).slice(5,7)}/` +
                    `${localStorage.getItem(`datetime`).slice(8,10)} ` +
                    `${localStorage.getItem(`datetime`).slice(11,16)}`;

                this.showSelectedLocation(localStorage.getItem(`cityID`), localStorage.getItem(`city`));
                this.getSelectedLocationWeatherForecast(localStorage.getItem(`city`));
            }

            for (let city of cities) {
                if (city.value === localStorage.getItem(`city`)) {
                    city.setAttribute(`checked`, `true`);
                }
            }
        })
    }

    static getCurrentTime(city) {
        let area = (city === `Chicago`) ? `America` : `Europe`;
        const selectedCityTime = document.getElementsByClassName(`time`)[1];

        (async () => {
            const url = `https://worldtimeapi.org/api/timezone/${area}/${city}`,
                response = await fetch(url);

            if (!response.ok) {
                throw new Error (`An error has occurred: ${response.status}`);
            }

            const object = await response.json();

            localStorage.setItem(`datetime`, object[`datetime`]);

            selectedCityTime.innerHTML = `${object[`datetime`].slice(0,4)}/${object[`datetime`].slice(5,7)}/` +
                `${object[`datetime`].slice(8,10)} ${object[`datetime`].slice(11,16)}`;
        })();
    }

    static showSelectedLocation(id, city) {
        let country = (id === `by`) && `Belarus` || (id === `pl`) && `Poland` || (id === `gb`) && `England` ||
            (id === `ru`) && `Russia` || (id === `fr`) && `France` || (id === `us`) && `USA`;
        const flag = document.querySelector(`.selected_location img:first-of-type`),
        location = document.getElementsByClassName(`location`)[1];

        flag.classList.add(`flag`);
        flag.setAttribute(`src`, `images/${id}.svg`);
        location.innerHTML = `${country} (${city})`;
    }

    static getSelectedLocationWeatherForecast(city) {
        const localWeather = document.getElementsByClassName(`weather`)[1],
            weatherIcon = document.querySelector(`.selected_location img:last-of-type`);

        if (localStorage.getItem(`temperatureSelected`) && localStorage.getItem(`iconSelected`)) {
            localWeather.innerHTML = `${localStorage.getItem(`temperatureSelected`)}&deg; C`;
            weatherIcon.classList.add(`weather_icon`);
            weatherIcon.setAttribute(`src`, `https://openweathermap.org/img/w/`
                + `${localStorage.getItem('iconSelected')}.png`);
        } else {
            (async () => {
                const apiKey = `682272ae93aa93292ba313f19c33bd09`,
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
                    response = await fetch(url);

                if (!response.ok) {
                    throw new Error (`An error has occurred: ${response.status}`);
                }

                const object = await response.json();

                localStorage.setItem(`temperatureSelected`, `${Math.round(object[`main`][`temp`] - 273.15)}`);
                localStorage.setItem(`iconSelected`, object[`weather`][0][`icon`]);

                localWeather.innerHTML = `${Math.round(object[`main`][`temp`] - 273.15)}&deg; C`;
                weatherIcon.classList.add(`weather_icon`);
                weatherIcon.setAttribute(`src`, `https://openweathermap.org/img/w/`
                    + `${object[`weather`][0][`icon`]}.png`);
            })();
        }
    }

    static setCurrency() {
        document.getElementById(`currenciesList`).onchange = () => {
            const currencies = document.getElementsByName(`currency`),
                buttonCurrency = document.getElementsByTagName(`button`)[1];

            for (let currency of currencies) {
                if (currency.checked) {
                    buttonCurrency.innerHTML = `${currency.value} <span class="triangle selected_triangle"></span>`;
                    localStorage.setItem(`currency`, currency.value);
                }
            }
        }

        window.addEventListener(`hashchange`, () => {
            const currencies = document.getElementsByName(`currency`),
                buttonCurrency = document.getElementsByTagName(`button`)[1];

            if (localStorage.getItem(`currency`)) {
                buttonCurrency.innerHTML = `${localStorage.getItem(`currency`)} <span class="triangle"></span>`;

                for (let currency of currencies) {
                    if (currency.value === localStorage.getItem(`currency`)) {
                        currency.setAttribute(`checked`, `true`);
                    }
                }
            }
        })
    }

    static setLanguage() {
        document.getElementById(`language`).onchange = () => {
            const languages = document.getElementsByName(`language`),
                buttonLanguage = document.getElementsByTagName(`button`)[2];

            for (let language of languages) {
                if (language.checked) {
                    buttonLanguage.innerHTML = `${language.value} <span class="triangle selected_triangle"></span>`;
                }
            }
        }

        window.addEventListener(`hashchange`, () => {
            const languages = document.getElementsByName(`language`),
                buttonLanguage = document.getElementsByTagName(`button`)[2];

            for (let language of languages) {
                if (language.dataset[`lang`] === document.cookie) {
                    language.setAttribute(`checked`, `true`);
                    buttonLanguage.innerHTML = `${language.value} <span class="triangle"></span>`;
                }
            }
        })
    }
}

export default Header;