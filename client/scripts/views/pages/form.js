import Component from '../../views/component.js';

class Form extends Component {
    static async render() {
        return `
        <div class="form_container">
            <p class="order_form_name">Car order form for ${localStorage.getItem(`model`)}</p>
            <form class="data" action="#/accept" novalidate>
                <p><span class="error_text">&nbsp;</span><span class="valid_text"></span></p>
                <span class="order_data">First Name:</span>
                <input type="text" maxlength="50" name="first_Name" placeholder="Vasya">
                <br>
                <span class="order_data">Last Name:</span>
                <input type="text" maxlength="50" name="last_Name" placeholder="Pupkin">
                <br>
                <span class="order_data">Email:</span>
                <input type="email" maxlength="50" name="email" placeholder="example@email.com"><br>
                <span class="order_data">Number of rental days:</span>
                <input type="number" name="rental_days" min="1" max="20" placeholder="max 20 days">
                <div class="buttons">
                    <button type="submit">Rent</button>
                    <button id="reset" type="reset">Reset all</button>
                </div>
            </form>
        </div>
        `;
    }

    static afterRender() {
        this.abortOrder();
        this.rent();
        this.resetAll();
        this.borderInput();
    }

    static abortOrder() {
        let orderFormName = document.getElementsByClassName(`order_form_name`)[0],
            form = document.getElementsByClassName(`data`)[0];
        if (!localStorage.getItem(`model`)) {
            orderFormName.innerHTML = `This page was refreshed before order! <br><a class="to_main" href="#/" title="main page">Go to main page</a>`;
            form.classList.add(`data_none`);
        }
    }

    static rent() {
        let formInputs = document.querySelectorAll(`.data input`),
            errorText = document.getElementsByClassName(`error_text`)[0],
            validText = document.getElementsByClassName(`valid_text`)[0],
            regExpName = /^([А-Я][а-яё]{1,20}([-А-Я]{2}([а-яё]{1,20})?)?|[A-Z][a-z]{1,20}([-A-Z]{2}([a-z]{1,20})?)?)$/,
            regExpEmail = /^[\w-]{3,30}@[\w-]{3,30}\.(com|ru|by)$/i,
            regExpDays = /\d{1,2}/;

        document.getElementsByClassName(`data`)[0].onsubmit = () => {
            errorText.innerHTML = `&nbsp;`;
            formInputs.forEach(input => {
                if (input.value.trim() === ``) {
                    errorText.innerHTML = `Some inputs aren't filled!`;
                    input.classList.add(`error_input`);
                } else {
                    input.classList.remove(`error_input`);
                }
            })
            if (errorText.innerHTML !== `&nbsp;`) {
                return false;
            } else if (!regExpName.test(document.getElementsByName(`first_Name`)[0].value.trim())) {
                document.getElementsByName(`first_Name`)[0].classList.add(`error_input`);
                validText.innerHTML = ``;
                errorText.innerHTML = `Invalid First Name`;
                return false;
            } else if (!regExpName.test(document.getElementsByName(`last_Name`)[0].value.trim())) {
                document.getElementsByName(`last_Name`)[0].classList.add(`error_input`);
                validText.innerHTML = ``;
                errorText.innerHTML = `Invalid Last Name`;
                return false;
            } else if (!regExpEmail.test(document.getElementsByName(`email`)[0].value.trim())) {
                document.getElementsByName(`email`)[0].classList.add(`error_input`);
                validText.innerHTML = ``;
                errorText.innerHTML = `Invalid Email`;
                return false;
            } else if (!regExpDays.test(document.getElementsByName(`rental_days`)[0].value.trim()) ||
                Math.round(+document.getElementsByName(`rental_days`)[0].value.trim()) !==
                +document.getElementsByName(`rental_days`)[0].value.trim() ||
                document.getElementsByName(`rental_days`)[0].value.trim() > 20 ||
                document.getElementsByName(`rental_days`)[0].value.trim() <= 0) {
                document.getElementsByName(`rental_days`)[0].classList.add(`error_input`);
                validText.innerHTML = ``;
                errorText.innerHTML = `Type correct number of rental days`;
                return false;
            } else {
                const order = {
                    userLocation: `${sessionStorage.getItem(`country`)}`,
                    userCity: `${sessionStorage.getItem(`city`)}`,
                    selectedCity: `${localStorage.getItem(`city`) || `not selected`}`,
                    countryID: `${localStorage.getItem(`cityID`) || `not selected`}`,
                    currency: `${localStorage.getItem(`currency`) || `EUR (€)`}`,
                    model: `${localStorage.getItem(`model`)}`,
                    firstName: `${document.getElementsByName(`first_Name`)[0].value.trim()}`,
                    lastName: `${document.getElementsByName(`last_Name`)[0].value.trim()}`,
                    email: `${document.getElementsByName(`email`)[0].value.trim()}`,
                    days: `${document.getElementsByName(`rental_days`)[0].value.trim()}`,
                };
                if (+document.getElementsByName(`rental_days`)[0].value.trim() >= 8) {
                    order.totalSumInEUR = +document.getElementsByName(`rental_days`)[0].value.trim() *
                    +localStorage.getItem(`modelPrice`);
                } else if (+document.getElementsByName(`rental_days`)[0].value.trim() >= 4 &&
                    +document.getElementsByName(`rental_days`)[0].value.trim() <= 7) {
                    order.totalSumInEUR = +document.getElementsByName(`rental_days`)[0].value.trim() *
                        +localStorage.getItem(`modelPrice`) * 1.1;
                } else {
                    order.totalSumInEUR = +document.getElementsByName(`rental_days`)[0].value.trim() *
                        +localStorage.getItem(`modelPrice`) * 1.2;
                }
                sessionStorage.setItem(`email`, document.getElementsByName(`email`)[0].value.trim());
                (async () => {
                    const response = await fetch('http://localhost:3000/api/form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(order)
                });
                    return await response.json();
                })();
            }
        }
    }

    static resetAll() {
        let formInputs = document.querySelectorAll(`.data input`),
            errorText = document.getElementsByClassName(`error_text`)[0],
            validText = document.getElementsByClassName(`valid_text`)[0];
        document.getElementById(`reset`).onclick = () => {
            errorText.innerHTML = `&nbsp;`;
            validText.innerHTML = ``;
            formInputs.forEach(input => {
                input.classList.remove(`error_input`);
            })
        }
    }

    static borderInput() {
        let formInputs = document.querySelectorAll(`.data input`),
            errorText = document.getElementsByClassName(`error_text`)[0],
            validText = document.getElementsByClassName(`valid_text`)[0];

        document.getElementsByClassName(`data`)[0].oninput = () => {
            let j = 0;

            formInputs.forEach(input => {
                if (input.value.trim() !== ``) {
                    input.classList.remove(`error_input`);
                } else {
                    input.classList.add(`error_input`);
                }
            })

            for (let i = 0; i < formInputs.length; i++) {
                if (formInputs[i].value) {
                    j++;
                    if (j === formInputs.length) {
                        errorText.innerHTML = ``;
                        validText.innerHTML = `Good! All inputs has been filled`;
                    } else {
                        validText.innerHTML = `&nbsp;`;
                        errorText.innerHTML = `Fill in all inputs!`;
                    }
                }
            }
        }
    }
}

export default Form;