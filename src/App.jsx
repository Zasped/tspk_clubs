import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
import Register from "./components/Authentication/Register/Register";
import Auth from "./components/Authentication/Auth/Auth";
import Menu from "./components/Menu/Menu";
import ClubPage from "./Pages/ClubPage/ClubPage";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import TimeTablePage from "./Pages/TimeTablePage/TimeTablePage";

const App = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [authVisible, setAuthVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    return (
        <>
            <Header setMenuVisible={setMenuVisible} setAuthVisible={setAuthVisible}/>
            <Routes>
                <Route path={'/'}>
                    <Route path={'home'} element={<MainPage/>}/>
                    <Route path={'clubs'} element={<ClubPage/>}/>
                    <Route path={'timetable'} element={<TimeTablePage/>}/>
                    <Route path={''} element={<Navigate to="/home" replace/>}/>
                </Route>
            </Routes>
            <Menu visible={menuVisible} setMenuVisible={setMenuVisible}/>
            <Auth authVisible={authVisible} setAuthVisible={setAuthVisible} />
            <Register registerVisible={registerVisible} setRegisterVisible={setRegisterVisible}/>
            <Footer/>
        </>
    );
};

export default App;
