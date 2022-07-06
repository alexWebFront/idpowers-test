import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {dispatch, subscribe} from "./state/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={dispatch}/>
        </React.StrictMode>
    );
}

rerenderTree(state);

subscribe(rerenderTree);

reportWebVitals();
