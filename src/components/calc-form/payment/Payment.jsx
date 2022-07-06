import React, {useState} from "react";
import "./Payment.css";
import AnnPay from "./ann-pay/Ann-pay";
import DiffPay from "./diff-pay/Diff-pay";

const Payment = (props) => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        props.dispatch({type: "TABS-STATUS", index});
    }

    return <>
        <div className="payment">
            <div className="payment__type">
                <div className="container-tabs">
                    <div className="block-tabs">
                        <p className="payment__heading">Тип платежа</p>
                        <div className="tabs-flex">
                            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}>
                                Дифференцированный
                            </button>
                            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}>
                                Аннуитетный
                            </button>
                        </div>
                    </div>
                    <div className="content-tabs">
                        {/*Дифференцированный платёж*/}
                        <DiffPay toggleState={toggleState}
                                 dispatch={props.dispatch}
                                 sumValue={props.sumValue}
                                 monthValue={props.monthValue}
                                 configPage={props.configPage}/>
                        {/*Аннуитетный платёж*/}
                        <AnnPay toggleState={toggleState}
                                dispatch={props.dispatch}
                                sumValue={props.sumValue}
                                monthValue={props.monthValue}
                                configPage={props.configPage}/>
                    </div>
                    <p className="text-gray">
                        Условия выдачи займа могут отличаться, исходя из анализа документов и состояния вашего
                        автомобиля
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Payment;