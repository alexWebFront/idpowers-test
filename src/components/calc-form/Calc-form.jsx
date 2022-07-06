import "./Calc-form.css";
import Payment from "./payment/Payment";
import Request from "./request/Request";


const CalcForm = (props) => {

    return <>
        <div className="calc-form__container">
            <Payment dispatch={props.dispatch}
                     sumValue={props.sumValue}
                     monthValue={props.monthValue}
                     configPage={props.configPage}/>
            <Request resultValue={props.resultValue}
                     tabIndex={props.tabIndex}
                     percent={props.configPage.percent}/>
        </div>
    </>
}

export default CalcForm;