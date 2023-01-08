import {parseCurrentURL} from './helpers/utils.js';
import {getExchangeRates, getCurrentLocalTime, setLanguageFromCookie, surfAudio} from "./helpers/scripts.js";

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import Main from './views/pages/main.js';
import EV from './views/pages/ev.js';
import Form from './views/pages/form.js';
import Accept from './views/pages/acceptForm.js';
import Services from './views/pages/services.js';
import About from './views/pages/about.js';
import Contacts from './views/pages/contacts.js';
import Error404 from './views/pages/error404.js';

const Routes = {
    '/': Main,
    '/ev': EV,
    '/form': Form,
    '/accept': Accept,
    '/services': Services,
    '/about': About,
    '/contacts': Contacts,
};

const router = async() => {
    const headerContainer = document.getElementsByTagName('header')[0],
        contentContainer = document.getElementsByTagName('main')[0];

    const urlParts = parseCurrentURL(),
        pagePath = `/${urlParts[`page`] || ''}${urlParts.id ? '/:id' : ''}${urlParts.action ? `/${urlParts.action}` : ''}`,
        page = Routes[pagePath] ? Routes[pagePath] : Error404;

    headerContainer.innerHTML = await Header.render();
    contentContainer.innerHTML = await page.render();
    Header.afterRender();
    page.afterRender();
};

(async() => {
    const footerContainer = document.getElementsByTagName('footer')[0];

    footerContainer.innerHTML = await Footer.render();
})();

window.onload = router;
window.onhashchange = router;

window.addEventListener(`load`, () => {
    (() => localStorage.clear())();
    (() => sessionStorage.clear())();
    getCurrentLocalTime();
    setInterval(getCurrentLocalTime, 60000);
    getExchangeRates();
    setLanguageFromCookie();
});
window.addEventListener(`hashchange`, () => {
    surfAudio();
});