
const AnnPay = (props) => {

    let sumChangeAnn = (e) => {
        let sum = e.target.value;
        props.dispatch({type: "SUM-CHANGE-ANN", sum});
    }
    let monthChangeAnn = (e) => {
        let month = e.target.value;
        props.dispatch({type: "MONTH-CHANGE-ANN", month})
    }

    return <>
        <div className={props.toggleState === 2 ? "content  active-content" : "content"}>
            <div className="content-tabs__container">
                <h2>Сумма займа</h2>
                <p className="sum">{props.sumValue.sumAnn} ₽</p>
            </div>
            <input step="100" className="input input-sum" onChange={sumChangeAnn} value={props.sumValue.sumAnn}
                   type="range"
                   min={props.configPage.minSum} max={props.configPage.maxSum}/>
            <div className="placeholder-flex text-gray">
                <p>От {props.configPage.minSum} ₽</p>
                <p>До {props.configPage.maxSum} ₽</p>
            </div>
            <div className="content-tabs__container">
                <h2>Срок займа</h2>
                <p className="month">{props.monthValue.monthAnn} месяцев</p>
            </div>
            <input className="input input-month" onChange={monthChangeAnn} value={props.monthValue.monthAnn}
                   type="range"
                   min={props.configPage.minMonth} max={props.configPage.maxMonth}/>
            <div className="placeholder-flex text-gray">
                <p>От {props.configPage.minMonth} месяцев</p>
                <p>До {props.configPage.maxMonth} месяцев</p>
            </div>
        </div>
    </>
}

export default AnnPay;