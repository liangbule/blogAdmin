import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home"
import "./style/App.scss"
import "./style/base.scss"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}
export default App