import "./Config.css";
import {NavLink} from "react-router-dom";
import InputMask from 'react-input-mask';

const Config = (props) => {

    let configMinSum = (e) => {
        let minSum = e.target.value;
        props.dispatch({type: "CONFIG-MIN-SUM", minSum});
    }
    let configMaxSum = (e) => {
        let maxSum = e.target.value;
        props.dispatch({type: "CONFIG-MAX-SUM", maxSum});
    }
    let configMinMonth = (e) => {
        let minMonth = e.target.value;
        props.dispatch({type: "CONFIG-MIN-MONTH", minMonth});
    }
    let configMaxMonth = (e) => {
        let maxMonth = e.target.value;
        props.dispatch({type: "CONFIG-MAX-MONTH", maxMonth});
    }
    let configPercent = (e) => {
        let percent = e.target.value;
        props.dispatch({type: "CONFIG-PERCENT", percent});
    }
    let updateDataConfig = () => {
        props.dispatch({type: "UPDATE-DATA-CONFIG"});
    }

    return <>
        <div className="config">
            <div className="config__container">
                <div className="config__items">
                    <p className="input-title">Минимальная сумма займа, руб.</p>
                    <InputMask onChange={configMinSum} className="input config__item" mask="99999"
                               maskChar=""></InputMask>
                    <p className="input-title">Максимальная сумма займа, руб.</p>
                    <InputMask required onChange={configMaxSum} className="input config__item" mask="9999999"
                               maskChar=""></InputMask>
                    <p className="input-title">Минимальный срок займа, мес.</p>
                    <InputMask required onChange={configMinMonth} className="input config__item" mask="99"
                               maskChar=""></InputMask>
                    <p className="input-title">Максимальный срок займа, мес.</p>
                    <InputMask required onChange={configMaxMonth} className="input config__item" mask="999"
                               maskChar=""></InputMask>
                    <p className="input-title">Процентная ставка ежемесячного платежа, %</p>
                    <InputMask required onChange={configPercent} className="input config__item" mask="99"
                               maskChar=""></InputMask>
                </div>
                <NavLink to="/">
                    <button onClick={updateDataConfig} className="button config__button">Обновить данные
                    </button>
                </NavLink>
            </div>
        </div>
    </>
}

export default Config;