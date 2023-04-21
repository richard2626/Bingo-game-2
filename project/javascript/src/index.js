import ReactDOM from "react-dom/client"
import React from "react"

import  App  from "./App"

import { Provider}  from "react-redux"
import { store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

console.log("index\n")
const myelement = (
    <Provider store={store}>
        <App />
    </Provider>
);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(myelement);


// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//     </Provider>,
//     document.getElementById("root")
// );

// function App(){
//     return(
//         <div> Hello </div>
//     )
// }