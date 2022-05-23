import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainLayout from "./layout/MainLayout/MainLayout";
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

const App = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <Header setMenuVisible={setMenuVisible} />
            <MainLayout>
                <Routes>
                    <Route path={'/'}>
                        <Route path={'home'} element={<MainPage/>}/>
                        <Route path={'clubs'} element={<ClubPage/>}/>
                    </Route>
                    <Route path={'*'} element={<Navigate to="/home" replace />} />
                </Routes>
            </MainLayout>
            <Menu visible={menuVisible} setMenuVisible={setMenuVisible}/>
            {/*<Auth/>*/}
            {/*<Register/>*/}
            <Footer/>
        </>
    );
};

export default App;
