import GLOBAL from '../../data/global';
import Query from "../../data/allDestinations";

let filterState = {
    type: 'all',
    text: '',

    getText(){
        return this.text;
    },

    getType(){
        return this.type;
    },

    async setText(text){
        this.text = text;
        GLOBAL.renderResult.setState({
            dataSource: await Query()
        });
    },

    async setType(type) {
        this.type = type;
        GLOBAL.renderResult.setState({
            dataSource: await Query()
        });
    }
};

export default filterState;
