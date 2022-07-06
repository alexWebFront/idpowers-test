import {sumChangeAnnLogic} from "./state";


const annPayReducer = (sumValue, monthValue, action) => {

    switch (action.type) {
        case "SUM-CHANGE-ANN":
            sumValue.sumAnn = Number(action.sum);
            sumChangeAnnLogic();
            return sumValue;
        case "MONTH-CHANGE-ANN":
            monthValue.monthAnn = Number(action.month);
            sumChangeAnnLogic();
            return monthValue;
        default:
            break;
    }
}
export default annPayReducer;