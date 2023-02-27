import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Route, Routes,
    NavLink
} from 'react-router-dom';

import styles from "./Router.module.css";
import Exit from "../../assets/images/exit.png";
import Header from "../Header/Header";
import Home from "../../pages/home/Home";
import Footer from "../Footer/Footer";
// import Home from "../../Pages/Home/Home";
// import Login from "../Login/Login";
// import Footer from "../Footer/Footer";
// import BackToTopButton from "../BackToTopButton/BackToTopButton";
import routes from '../../routes/route';


function Router() {
    const [authed, setAuthed] = useState(false);
    return (
        <BrowserRouter>
            <Header authed={authed}/>
            <div style={{minHeight:'100vh'}}>
                <Routes>
                    <Route exec path={routes.HOME} element={<Home/>}/>
                    <Route path="*" element={<h2 className={styles.h2}>Страница не найдена</h2>}/>
                </Routes>
            </div>
            {/*<BackToTopButton/>*/}
            <Footer/>

        </BrowserRouter>
    )
}

export default Router;