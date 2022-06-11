import React, {useState} from 'react';
import './_timeTablePage.scss';
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import GroupTimeTable from "../../components/groupTimeTable/groupTimeTable";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import a from '../../json/message.json';
import TimetableGroup from "../../components/Timetable/TimetableGroup";
import TimetableStore from "../../store/Timetable/Timetable.store";

const TimeTablePage = () => {

    const [rasp, setRasp] = useState(a);

    return (
        <div className={'container'}>
            <div className="wrapper">
                <div className="wrapper__column left">
                    <div className="title">
                        <Title title={'Расписание'}/>
                    </div>
                    <div className="subtitle">
                        <Subtitle>
                            По стандарту показывается расписание на текущий день, но если присутствует расписание на
                            следующий день то будет показано оно.
                        </Subtitle>
                    </div>
                    <div className="cldr">
                        Календарь
                    </div>
                </div>
                <div className="wrapper__column right">
                    <div className="selected__date">
                        <Title title={'Выбранная дата'} />
                        <Subtitle classNames={['']}>
                            <p>15 мая, вторник 2022</p>
                            <p>15.05.2022</p>
                        </Subtitle>
                    </div>
                    <div className="groupTimeTable">
                        {TimetableStore.getData().groups.map((el) => {
                            return (
                                <TimetableGroup
                                    key={el.id}
                                    group={el}
                                />
                            )
                        })}
                    </div>
                </div>
                {/*<div className="wrapper__column admin">*/}
                {/*    <div className="title">*/}
                {/*        <Title title={'Инструменты'}/>*/}
                {/*    </div>*/}
                {/*    <div className="subtitle">*/}
                {/*        Занятие. Группа НК-21, 3 пара*/}
                {/*    </div>*/}
                {/*    <div className="update">*/}
                {/*        <form>*/}
                {/*            <Input type={'text'} placeholder={'Предмет'}/>*/}
                {/*            <Input type={'text'} placeholder={'Преподаватель'}/>*/}
                {/*            <Input type={'text'} placeholder={'Кабинет'}/>*/}
                {/*            <div className="btns">*/}
                {/*                <Button title={'Сохранить'} classes={'confirm'}/>*/}
                {/*                <Button title={'Очистить'} classes={'denied'}/>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*    <div className="selected__date"><p>Расписание. 19.05.2022. Вторник, 19 мая</p></div>*/}
                {/*    <div className="delete">*/}
                {/*        <Button title={'Удалить'} classes={'denied'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default TimeTablePage;
