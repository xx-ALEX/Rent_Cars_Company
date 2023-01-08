import Component from '../../views/component.js';

class EV extends Component {
    static async render() {
        this.priceTeslaModelS = 100;
        this.priceTeslaModelX = 150;
        this.priceTeslaModelY = 90;
        this.n = 2;

        return `
        <div class="ev">
            <p class="caption">Electric Vehicles</p>
            <div class="parent">
                <div class="item-ev">
                    <p class="model">Tesla Model S</p>
                    <div class="rental_info">
                        <p class="rental_price"><span>1-3 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelS * 1.2}">${(this.priceTeslaModelS * 1.2 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>4-7 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelS * 1.1}">${(this.priceTeslaModelS * 1.1 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>> 8 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelS}">${(this.priceTeslaModelS * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                    </div>
                    <a href="#/form" class="reserve" data-model="Tesla Model S">Reserve a car</a>
                </div>
                <div class="item-ev">
                    <p class="model">Tesla Model X</p>
                    <div class="rental_info">
                        <p class="rental_price"><span>1-3 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelX * 1.2}">${(this.priceTeslaModelX * 1.2 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>4-7 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelX * 1.1}">${(this.priceTeslaModelX * 1.1 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>> 8 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelX}">${(this.priceTeslaModelX * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                    </div>
                    <a href="#/form" class="reserve" data-model="Tesla Model X">Reserve a car</a>
                </div>
                <div class="item-ev">
                <p class="model">Tesla Model Y</p>
                    <div class="rental_info">
                        <p class="rental_price"><span>1-3 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelY * 1.2}">${(this.priceTeslaModelY * 1.2 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>4-7 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelY * 1.1}">${(this.priceTeslaModelY * 1.1 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>> 8 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelY}">${(this.priceTeslaModelY * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                    </div>
                    <a href="#/form" class="reserve" data-model="Tesla Model Y">Reserve a car</a>
                </div>
            </div>
            <div class="parent_hidden">
                <div class="item-ev_hidden">
                    <p class="model_hidden">Tesla Model S</p>
                    <div class="rental_info_hidden">
                        <p class="rental_price"><span>1-3 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelS * 1.2}">${(this.priceTeslaModelS * 1.2 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>4-7 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelS * 1.1}">${(this.priceTeslaModelS * 1.1 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>> 8 days</span> 
                        <span class="price_a_day" translate="no" data-price="${this.priceTeslaModelS}">${(this.priceTeslaModelS * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                    </div>
                    <a href="#/form" class="reserve" data-model="Tesla Model S" data-modelPrice="${this.priceTeslaModelS}">Reserve a car</a>
                </div>
                <div class="item-ev_hidden">
                    <p class="model_hidden">Tesla Model X</p>
                    <div class="rental_info_hidden">
                        <p class="rental_price"><span>1-3 days</span> 
                        <span class="price_a_day" data-price="${this.priceTeslaModelX * 1.2}">${(this.priceTeslaModelX * 1.2 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>4-7 days</span> 
                        <span class="price_a_day" data-price="${this.priceTeslaModelX * 1.1}">${(this.priceTeslaModelX * 1.1 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>> 8 days</span> 
                        <span class="price_a_day" data-price="${this.priceTeslaModelX}">${(this.priceTeslaModelX * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                    </div>
                    <a href="#/form" class="reserve" data-model="Tesla Model X" data-modelPrice="${this.priceTeslaModelX}">Reserve a car</a>
                </div>
            </div>
            <div class="parent_hidden">
                <div class="item-ev_hidden">
                    <p class="model_hidden">Tesla Model Y</p>
                    <div class="rental_info_hidden">
                        <p class="rental_price"><span>1-3 days</span> 
                        <span class="price_a_day" data-price="${this.priceTeslaModelY * 1.2}">${(this.priceTeslaModelY * 1.2 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>4-7 days</span> 
                        <span class="price_a_day" data-price="${this.priceTeslaModelY * 1.1}">${(this.priceTeslaModelY * 1.1 * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                        <p class="rental_price"><span>> 8 days</span> 
                        <span class="price_a_day" data-price="${this.priceTeslaModelY}">${(this.priceTeslaModelY * this.recountPrices()).toFixed(this.n)} 
                        <span translate="no">€</span> /day</span>
                        </p>
                    </div>
                    <a href="#/form" class="reserve" data-model="Tesla Model Y" data-modelPrice="${this.priceTeslaModelY}">Reserve a car</a>
                </div>
                <div class="item-ev_hidden">
                </div>
            </div>
        </div>
        `;
    }

    static afterRender() {
        this.changeCurrencyCharacter();
        this.rewritePrices();
        this.orderCar();
    }

    static changeCurrencyCharacter() {
        const pricesADay = document.getElementsByClassName(`price_a_day`);

        if (localStorage.getItem(`currency`)) {
            for (let price of pricesADay) {
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
            const prices = document.getElementsByClassName(`price_a_day`),
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
    
    static orderCar() {
        document.addEventListener(`click`, evt => {
            const target = evt.target,
                reserveACar = target.closest(`.reserve`);

            if(reserveACar) {
                localStorage.setItem(`modelPrice`, reserveACar.getAttribute(`data-modelPrice`));
                localStorage.setItem(`model`, reserveACar.getAttribute(`data-model`));
            }
        })
    }
}

export default EV;