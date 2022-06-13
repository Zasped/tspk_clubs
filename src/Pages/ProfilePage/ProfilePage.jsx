import React from 'react';
import MainLayout from "../../layout/MainLayout/MainLayout";
import Title from "../../components/UI/Title/Title";
import './_profilePage.scss';
import avatar from "../../assets/images/avatar.png";
import RowList from "../../components/RowList/RowList";
import Social from "../../components/Social/Social";
import discord from "../../assets/images/discord.svg";
import vk from "../../assets/images/vk.svg";
import telegram from "../../assets/images/telegram.svg";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import MenuLinks from "../../components/MenuLinks/MenuLinks";
import {faHighlighter, faPerson, faPersonDress, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ProfilePage = () => {

  const sex = true;

  return (
    <MainLayout>
      <div className="flex profilePage_flex">
        <div className="column profilePage_column">
          <div className="page-title">
            <Title title={'Профиль'} classNames={'title'}/>
          </div>

          <div className="basic-info">
            <div className="avatar">
              {/*<img src={avatar} className={'image'}/>*/}
              <FontAwesomeIcon icon={(sex) ? faPerson : faPersonDress} className={'image'} color={'#fff'}/>
            </div>

            <RowList
              title={'Информация'}
              data={[
                {name: 'ФИО', body: 'Asurame Socrum'},
                {name: 'Группа', body: 'НК-21'},
                {name: 'Роль', body: 'USER'},
                {name: 'Дата регистрации', body: '05.06.2022'}
              ]}
            />

          </div>

          <div className="background-info">
            <RowList
              title={'Клуб'}
              data={[
                {name: 'Ведущий', body: 'Blockchain'},
                {name: 'Участников', body: '12'}
              ]}
            />
            <RowList
              title={'Ярмарка мастеров'}
              data={[
                {name: 'Работ', body: '14'},
                {name: 'Просмотров', body: '1204'},
                {name: 'Средняя оценка', body: '2 лимона'}
              ]}
            />
          </div>

          <div className="security">
            <RowList
              title={'Безопасность'}
              data={[
                {name: 'Пароль', body: 'Изменён 05.06.2022'},
                {name: 'Почта', body: 'asu***crum@gmail.com'},
                {name: 'Дата последнего входа', body: '05.06.2022'},
                {name: 'Подтверждение почты', body: 'не подтверждена'}
              ]}
            />
          </div>

          <div className="socials">
            <Title title={'Социальные сети'}/>
            <Subtitle classNames={['links__list']}>
              <Social icon={discord} link={'#'}/>
              <Social icon={vk} link={'#'}/>
              <Social icon={telegram} link={'#'}/>
              <div className={'add-social'}>
                <FontAwesomeIcon icon={faPlus} className={'icon'}/>
              </div>
            </Subtitle>
          </div>
        </div>
        <div className="column profilePage_column">
          <MenuLinks icon={faHighlighter} text={'Ярмарка мастеров (В разработке)'} style={{boxShadow: 'none'}}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;