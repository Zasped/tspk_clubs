import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./Pages/MainPage";
import ModalLayout from "./layout/ModalLayout/ModalLayout";

const App = () => {
    return (
        <>
            <Header/>
            <MainLayout>
                <MainPage/>
            </MainLayout>
            <ModalLayout>

            </ModalLayout>
            <Footer/>
        </>
    );
};

export default App;
