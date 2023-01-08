import Component from '../../views/component.js';

class Error404 extends Component {
    static async render() {
        return `
            <div class="error">
                <p>Something went wrong!</p>
                <p>404 Error - Page Not Found</p> 
            </div>                
        `;
    }
}

export default Error404;