import {parseCurrentURL} from '../helpers/utils.js';

class Component {
    static get urlParts() {
        return parseCurrentURL();
    }

    static afterRender() {}
}

export default Component;