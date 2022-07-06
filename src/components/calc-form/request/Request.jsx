import React, {useState} from "react";
import "./Request.css";
import Popup from "../../popup/Popup";
import {NavLink} from "react-router-dom";


const Request = (props) => {
    const [popupActive, setPopupActive] = useState(false);

    return <>
        <div className="request">
            <div className="request__container">
                <p className="request__rate text-gray">Ставка</p>
                <div className="request__percent">{props.percent}%</div>
                <p className="request__pay text-gray">Ежемесячный платёж</p>

                <div className={props.tabIndex === 1 ? "content  active-content" : "content"}>
                    <div className="request__sum">{props.resultValue.requestResultDiff} ₽</div>
                </div>
                <div className={props.tabIndex === 2 ? "content  active-content" : "content"}>
                    <div className="request__sum">{props.resultValue.requestResultAnn} ₽</div>
                </div>

                <button onClick={() => setPopupActive(true)} className="button request__send">Подать заявку</button>
                <NavLink to="/config/">
                    <button className="button config-button">Настройка параметров займа</button>
                </NavLink>
                <p className="conditions text-gray">Расчёт займа предварительный</p>
            </div>
            <Popup active={popupActive} setActive={setPopupActive}/>
        </div>
    </>
}

export default Request;