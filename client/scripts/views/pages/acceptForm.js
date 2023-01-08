import Component from '../../views/component.js';

class Accept extends Component {
    static async render() {
        return `
        <div class="modal-wrapper">
            <div class="modal-window">
                <p>Your order has been accepted.</p>
                <p>Expect a confirmation email to your email: 
                <span class="email">${sessionStorage.getItem(`email`) || ``}</span>
                </p>
                <a href="#/">OK</a>
            </div>
        </div>
        `;
    }
}

export default Accept;