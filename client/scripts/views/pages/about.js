import Component from '../../views/component.js';

class About extends Component {
    static async render() {
        return `
        <div class="about">
            <p class="caption">About us</p>
            <div class="description">
                <p class="topic">Welcome to Rent Cars Company</p>
                <p>At our service everything we do is about giving you the freedom to discover more.
                We’ll move mountains to find you the right rental car, and bring you a smooth,
                hassle-free experience from start to finish. Here you can find out more about how we work.</p>
                <p class="topic">What we're about</p>
                <p>We want to make renting a car as simple and personal as driving your own. 
                Renting a car brings you freedom, and we’ll help you find the right car for you at a great price. 
                But there’s much more to us than that. We're here to make renting a car a lot less hassle.</p>
                <p class="topic">How we work</p>
                <p>Making sure you have a great experience every time you rent a car makes us happy.
                We are a broker, so we arrange the car rental on your behalf.
                As we cooperate with so many rental companies,
                we're in the perfect position to offer you a wide range of great deals, all around the world.
                But we’re way more than a price comparison site, because we stay with you every step of the way.</p>
                <p class="topic">Why use us</p>
                <p>In simple terms, because we bring you unbeatable value and peace of mind throughout
                your rental car journey.</p>
            </div>
        </div>
        `;
    }
}

export default About;