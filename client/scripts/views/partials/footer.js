import Component from '../../views/component.js';

class Footer extends Component {
    static async render() {
        return `
        <div class="social">
            <a href="https://www.facebook.com" title="facebook"></a>
            <a href="https://twitter.com" title="twitter"></a>
            <a href="https://www.youtube.com" title="youtube"></a>
            <a href="https://www.instagram.com" title="instagram"></a>
        </div>
        <p>© 2022 All rights reserved</p>
        `;
    }
}

export default Footer;