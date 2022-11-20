import React from 'react'
import ReactTable from "./router"
import "./style/App.scss"
import "./style/base.scss"
import {Provider} from "react-redux"
import store from "./store"

const App = () => {
    return (
        <Provider store={store}>
            <ReactTable/>
        </Provider>
    )
}
export default App