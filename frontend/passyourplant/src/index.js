import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import About from './components/About';
import PlantDetail from './components/PlantDetail';
import {AddPlant} from './components/AddPlant';
import {Register} from './components/Register';
import Layout from './components/Layout';
import {Forbidden} from './components/Forbidden'
import Login from './components/Login';
import {Logout} from './components/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout><App/></Layout>}/>
            <Route path="about" element={<Layout><About/></Layout>}/>
            <Route path='plant-detail/:plantId' element={<Layout><PlantDetail/></Layout>}/>
            <Route path="add-plant" element={<Layout><AddPlant/></Layout>}/>
            <Route path='/login' element={<Layout><Login /></Layout>}/>
            <Route path='/logout' element={<Layout><Logout /></Layout>}/>
            <Route path="registration" element={<Layout><Register/></Layout>}/>
            <Route path="forbidden" element={<Layout><Forbidden></Forbidden></Layout>}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
