import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./Pages/MainPage/MainPage";
import Register from "./components/Authentication/Register/Register";
import Auth from "./components/Authentication/Auth/Auth";
import ClubPage from "./Pages/ClubPage/ClubPage";

const App = () => {
    return (
        <>
            <Header/>
            <MainLayout>
                <ClubPage/>
                {/*<MainPage/>*/}
            </MainLayout>
            <Footer/>
        </>
    );
};

export default App;
