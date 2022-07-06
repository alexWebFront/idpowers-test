import {sumChangeDiffLogic} from "./state";


const diffPayReducer = (sumValue, monthValue, action) => {
    switch (action.type) {
        case "SUM-CHANGE-DIFF":
            sumValue.sum = Number(action.sum);
            sumChangeDiffLogic();
            return sumValue;
        case "MONTH-CHANGE-DIFF":
            monthValue.month = Number(action.month);
            sumChangeDiffLogic();
            return monthValue;
        default:
            break;
    }
}
export default diffPayReducer;