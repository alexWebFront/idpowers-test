import {sumChangeAnnLogic, sumChangeDiffLogic} from "./state";

const configReducer = (configPage, sumValue, monthValue, tabsStatus, action) => {

    switch (action.type) {
        case "CONFIG-MIN-SUM":
            configPage.minSum = Number(action.minSum);
            sumValue.sumAnn = Number(action.minSum);
            sumValue.sum = Number(action.minSum);
            break;
        case "CONFIG-MAX-SUM":
            configPage.maxSum = Number(action.maxSum);
            break;
        case "CONFIG-MIN-MONTH":
            configPage.minMonth = Number(action.minMonth);
            monthValue.month = Number(action.minMonth);
            monthValue.monthAnn = Number(action.minMonth);
            break;
        case "CONFIG-MAX-MONTH":
            configPage.maxMonth = Number(action.maxMonth);
            break;
        case "CONFIG-PERCENT":
            configPage.percent = Number(action.percent);
            break;
        case "UPDATE-DATA-CONFIG":
            sumChangeDiffLogic();
            sumChangeAnnLogic();
            tabsStatus.index = 1;
            break;
        default: break;
    }
}

export default configReducer;