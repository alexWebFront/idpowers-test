const tabsReducer = (tabs, action) => {

    switch (action.type) {
        case "TABS-STATUS":
            tabs.index = action.index;
            return tabs;
        default:
            break;
    }
}

export default tabsReducer;