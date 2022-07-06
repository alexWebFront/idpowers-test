import configReducer from "./config-reducer";
import diffPayReducer from "./diff-pay-reducer";
import annPayReducer from "./ann-pay-reducer";
import tabsReducer from "./tabs-reducer";

let rerenderTree = () => {
    console.log("rerender success");
}

let state = {
    sumValue: {
        sum: 15000,
        sumAnn: 15000,
    },
    monthValue: {
        month: 2,
        monthAnn: 2,
    },
    requestPage: {
        requestResultDiff: 0,
        requestResultAnn: 0,
    },
    tabsStatus: {
        index: 1,
    },
    configPage: {
        minSum: 15000,
        maxSum: 1000000,
        minMonth: 2,
        maxMonth: 12,
        percent: 2.7,
    }
}

export let dispatch = (action) => {
    diffPayReducer(state.sumValue, state.monthValue, action);
    annPayReducer(state.sumValue, state.monthValue, action);
    configReducer(state.configPage, state.sumValue, state.monthValue, state.tabsStatus, action);
    tabsReducer(state.tabsStatus, action);
    rerenderTree(state);
}

// function logic calc
export let sumChangeDiffLogic = () => {
    let temp = (state.configPage.percent / 100).toFixed(3);
    let percent = Number(temp);
    state.requestPage.requestResultDiff =
        ((state.sumValue.sum * percent + state.sumValue.sum)
            / (state.monthValue.month)).toFixed(2);
    rerenderTree(state);
}

export let sumChangeAnnLogic = () => {
    let temp = (state.configPage.percent / 100).toFixed(3);
    let percent = Number(temp);
    state.requestPage.requestResultAnn =
        ((state.sumValue.sumAnn * percent * Math.pow((1 + percent), state.monthValue.monthAnn))
            / (Math.pow((1 + percent), state.monthValue.monthAnn) - 1)).toFixed(2);
    rerenderTree(state);
}

// initial start default values
sumChangeDiffLogic();
sumChangeAnnLogic();

// render
export let subscribe = (observer) => {
    rerenderTree = observer;
}

window.state = state;
export default state;