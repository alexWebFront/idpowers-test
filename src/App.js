import './App.css';
import CalcForm from "./components/calc-form/Calc-form";
import Config from "./components/config/Config";
import {HashRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return <>
        <HashRouter>
            <div className="calc">
                <div className="calc__container">
                    <h1 className="heading">Калькулятор займа под ПТС</h1>
                    <Routes>
                        <Route path="/" element={<CalcForm
                            dispatch={props.dispatch}
                            sumValue={props.state.sumValue}
                            monthValue={props.state.monthValue}
                            resultValue={props.state.requestPage}
                            tabIndex={props.state.tabsStatus.index}
                            configPage={props.state.configPage}/>}/>
                        <Route path="/config/*" element={<Config dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    </>
}

export default App;
