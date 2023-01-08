import Component from '../../views/component.js';

class Services extends Component {
    static async render() {
        this.priceRent = 20;
        this.priceDriver = 30;
        this.priceHourly = 10;
        this.priceTransfer = 40;
        this.n = 2;

        return `
        <div class="services">
            <p class="caption">Services</p>
            <div class="parent">
                <div class="item">
                    <p>Rent a car without a <br>driver</p>
                    <div></div>
                    <p class="price" data-price="${this.priceRent}">Price from <span translate="no"> ${(this.priceRent * this.recountPrices()).toFixed(this.n)} €</span></p>
                </div>
                <div class="item">
                    <p>Car rental with <br>driver</p>
                    <div></div>
                    <p class="price" data-price="${this.priceDriver}">Price from <span translate="no"> ${(this.priceDriver * this.recountPrices()).toFixed(this.n)} €</span></p>
                </div>
                <div class="item">
                    <p>Hourly rental <br>&emsp;</p>
                    <div></div>
                    <p class="price" data-price="${this.priceHourly}">Price from <span translate="no"> ${(this.priceHourly * this.recountPrices()).toFixed(this.n)} €</span></p>
                </div>
                <div class="item">
                    <p>Transfer from airport <br>&emsp;</p>
                    <div></div>
                    <p class="price" data-price="${this.priceTransfer}">Price from <span translate="no"> ${(this.priceTransfer * this.recountPrices()).toFixed(this.n)} €</span></p>
                </div>
            </div>
        </div>
        `;
    }

    static afterRender() {
        this.changeCurrencyCharacter();
        this.rewritePrices();
    }

    static changeCurrencyCharacter() {
        const prices = document.getElementsByClassName(`price`);

        if (localStorage.getItem(`currency`)) {
            for (let price of prices) {
                price.innerHTML = price.innerHTML.replace(/\$|€|£|Br|₽|₿/,
                    localStorage.getItem(`currency`).slice(0,3) === `USD` && `$` ||
                                localStorage.getItem(`currency`).slice(0,3) === `EUR` && `€` ||
                                localStorage.getItem(`currency`).slice(0,3) === `GBP` && `£`||
                                localStorage.getItem(`currency`).slice(0,3) === `BYN` && `Br` ||
                                localStorage.getItem(`currency`).slice(0,3) === `RUB` && `₽` ||
                                localStorage.getItem(`currency`).slice(0,3) === `BTC` && `₿`);
            }
        }
    }

    static recountPrices() {
        if (!localStorage.getItem(`currency`) || localStorage.getItem(`currency`).slice(0,3) === `EUR`) {
            return 1;
        }
        else if (localStorage.getItem(`currency`).slice(0,3) === `USD`) {
            return localStorage.getItem(`USD`);
        }
        else if (localStorage.getItem(`currency`).slice(0,3) === `GBP`) {
            return localStorage.getItem(`GBP`);
        }
        else if (localStorage.getItem(`currency`).slice(0,3) === `BYN`) {
            return localStorage.getItem(`BYN`);
        }
        else if (localStorage.getItem(`currency`).slice(0,3) === `RUB`) {
            return localStorage.getItem(`RUB`);
        }
        else if (localStorage.getItem(`currency`).slice(0,3) === `BTC`) {
            this.n = 5;
            return localStorage.getItem(`BTC`);
        }
    }

    static rewritePrices() {
        document.getElementById(`currenciesList`).addEventListener(`change`, () => {
            const prices = document.getElementsByClassName(`price`),
                currencies = document.getElementsByName(`currency`);

            for (let currency of currencies) {
                if (currency.checked && currency.id !== `btc`) {
                    for (let price of prices) {
                        price.innerHTML = price.innerHTML.replace(/\d{1,10}.\d{1,9}/,
                            `${(price.getAttribute('data-price') * this.recountPrices()).toFixed(2)}`);
                        price.innerHTML = price.innerHTML.replace(/\$|€|£|Br|₽|₿/, /\$|€|£|Br|₽|₿/.exec(currency.value)[0]);
                    }
                }
                else if (currency.checked && currency.id === `btc`) {
                    for (let price of prices) {
                        price.innerHTML = price.innerHTML.replace(/\d{1,10}.\d{1,9}/,
                            `${(price.getAttribute('data-price') * this.recountPrices()).toFixed(5)}`);
                        price.innerHTML = price.innerHTML.replace(/\$|€|£|Br|₽|₿/, /\$|€|£|Br|₽|₿/.exec(currency.value)[0]);
                    }
                }
            }
        })
    }
}

export default Services;