import React from 'react';
import './_clubPage.scss';
import Card from "../../components/UI/Card/Card";
import clubImg from "../../assets/images/clubImg.jpg";
import ListNavigate from "../../components/UI/ListNavigate/ListNavigate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {teleg} from '@fortawesome/free-solid-svg-icons';

const ClubPage = () => {
    return (
        <div className="flex clubPage_flex">
            <div className="column clubPage_column">
                <div className="page__title">
                    <Card
                        title={'Описание'}
                        children={'Откройте новое направление в бизнесе вместе с Битрикс24. Зарабатывайте до 50% с продажи Битрикс24 и 100% с внедрения. Подайте заявку на сайте, расскажем все подробности голосом.'}
                        style={{background: 'var(--mega-red)'}}
                        fontColorDesc={'var(--text-white)'}
                        fontColorTitle={'var(--text-white)'}
                    />
                </div>
                <div className={"description_club"}>
                    <Card
                        title={'Ведущий клуба'}
                        fontSizeTitle={'18px'}
                        children={'Asurame Socrum'}
                    />
                    <Card
                        title={'Куратор'}
                        fontSizeTitle={'18px'}
                        children={'Asurame Socrum'}
                    />
                    <Card
                        title={'Ссылки'}
                        fontSizeTitle={'18px'}
                    >
                        <div className={'social'}>
                            <FontAwesomeIcon icon={} />
                            Discord
                        </div>
                    </Card>
                    <Card
                        title={'Расписание занятий'}
                        fontSizeTitle={'18px'}
                    >
                        <p>Занятия проходят в еженедельной форме в определённой аудитории, оффициальный график предоставлен ниже.</p>
                        <p>График не зависит от оффициального графика, место его проведения и время встреч может быть изменено руководящим отделением.</p>

                    </Card>
                </div>
            </div>

            <div className="column clubPage_column">
                <div className="left_col">
                    <div className="flex">
                        <img src={clubImg} alt="clubImg" className={'clubImg'}/>
                        <div className="navList">
                            <ListNavigate
                                elements={[
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                    {body: 'Клуб 1'},
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubPage;
