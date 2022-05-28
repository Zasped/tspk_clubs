import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
import Register from "./components/Authentication/Register/Register";
import Auth from "./components/Authentication/Auth/Auth";
import Menu from "./components/Modal/Menu/Menu";
import ClubPage from "./Pages/ClubPage/ClubPage";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import TimeTablePage from "./Pages/TimeTablePage/TimeTablePage";
import ClubId from "./components/ClubId/ClubId";
import Department from "./Pages/Department/Department";
import DepartmentId from "./components/DepartmentId/DepartmentId";

const App = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [authVisible, setAuthVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    return (
        <>
            <Header setMenuVisible={setMenuVisible} setAuthVisible={setAuthVisible}/>

            <Routes>
                <Route path={'/'}>
                    <Route path={'home'} element={<MainPage/>}>
                        <Route path={''} element={<Navigate to="/home/1" replace />}/>
                        <Route path={':id'} element={''}/>
                    </Route>

                    <Route path={'clubs'} element={<ClubPage/>}>
                        <Route path={''} element={<Navigate to="/clubs/1" replace />}/>
                        <Route path={':id'} element={<ClubId/>}/>
                    </Route>

                    <Route path={'timetable'} element={<TimeTablePage/>}/>

                    <Route path={'department'} element={<Department/>}>
                        <Route path={''} element={<Navigate to="/department/1" replace />}/>
                        <Route path={':id'} element={<DepartmentId/>}/>
                    </Route>

                    <Route path={''} element={<Navigate to="/home" replace/>}/>
                    <Route path={'*'} element={<Navigate to="/home" replace/>}/>
                </Route>
            </Routes>


            <Auth authVisible={authVisible} setAuthVisible={setAuthVisible} setRegisterVisible={setRegisterVisible}/>
            <Menu visible={menuVisible} setMenuVisible={setMenuVisible}/>
            <Register registerVisible={registerVisible} setRegisterVisible={setRegisterVisible} setAuthVisible={setAuthVisible}/>
            <Footer/>
        </>
    );
};

export default App;
