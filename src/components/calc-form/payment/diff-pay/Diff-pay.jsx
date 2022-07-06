
const DiffPay = (props) => {

    let sumChangeDiff = (e) => {
        let sum = e.target.value;
        props.dispatch({type: "SUM-CHANGE-DIFF", sum});
    }
    let monthChangeDiff = (e) => {
        let month = e.target.value;
        props.dispatch({type: "MONTH-CHANGE-DIFF", month})
    }

    return <>
        <div className={props.toggleState === 1 ? "content  active-content" : "content"}>
            <div className="content-tabs__container">
                <h2>Сумма займа</h2>
                <p className="sum">{props.sumValue.sum} ₽</p>
            </div>
            <input step="100" className="input input-sum" onChange={sumChangeDiff} value={props.sumValue.sum}
                   type="range"
                   min={props.configPage.minSum} max={props.configPage.maxSum}/>
            <div className="placeholder-flex text-gray">
                <p>От {props.configPage.minSum} ₽</p>
                <p>До {props.configPage.maxSum} ₽</p>
            </div>
            <div className="content-tabs__container">
                <h2>Срок займа</h2>
                <p className="month">{props.monthValue.month} месяцев</p>
            </div>
            <input className="input input-month" onChange={monthChangeDiff} value={props.monthValue.month}
                   type="range"
                   min={props.configPage.minMonth} max={props.configPage.maxMonth}/>
            <div className="placeholder-flex text-gray">
                <p>От {props.configPage.minMonth} месяцев</p>
                <p>До {props.configPage.maxMonth} месяцев</p>
            </div>
        </div>
    </>
}

export default DiffPay;