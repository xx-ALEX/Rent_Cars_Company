import Component from '../../views/component.js';

class Contacts extends Component {
    static async render() {
        return `
        <div class="contacts">
            <p class="caption">Contacts</p>
            <div class="addresses">
                <p>Minsk, Kalinoŭskaha avenue 25/03, tel. +37529-1234567</p>
                <p>Warshaw, Tadeusz Kościuszko street 17/94, tel. +4888-1234567</p>
                <p>London, Jack the Ripper backstreet 6/66, tel. +4481044-666666</p>
                <p>Moscow, Screpnaya street 24/2, tel. +7910-0001488</p>
                <p>Paris, Jean-Claude Van Damme street 19/60, tel. +33711-7654321</p>
                <p>Chicago, Liberty street 17/76, tel. +122-9999999</p>
            </div>
        </div>
        `;
    }
}

export default Contacts;