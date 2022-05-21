import React from 'react';
import Title from "../../components/UI/Title/Title";

const ModalLayout = ({children}) => {
    return (
        <div className={'modal'}>
            <div className={'modal__content'}>
                {/*{children}*/}
                <div className="head">
                    <Title title={'Reg'}/>
                    <div className="close">X</div>
                </div>
                <div className="flex ">
                    <div className="column">
                        <form className={'form'}>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                            <input type="text" placeholder={'Login'}/>
                        </form>
                    </div>
                    <div className="column">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur dolor expedita
                        laudantium, nulla officia optio quam quo suscipit voluptate! Aperiam dignissimos dolore magnam
                        ratione. Assumenda autem beatae nisi odio.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLayout;