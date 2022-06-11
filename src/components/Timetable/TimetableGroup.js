import React, {useState} from 'react';
import TimetableElement from "./TimetableElement";
import TimetableStore from "../../store/Timetable/Timetable.store";
import {observer} from "mobx-react-lite";

function TimetableGroup({group}) {

  const [data, setData] = useState(group);

  const [currentSelected, setCurrentSelected] = useState(null);

  const dragStartHandler = (e, lesson) => {
    setCurrentSelected(lesson)
  }

  const dragLeaveHandler = e => {
    e.target.classList.remove("hovered")
  }

  const dragEndHandler = e => {
    e.target.classList.remove("hovered")
  }

  const dragOverHandler = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.classList.add("hovered")
  }

  const dropHandler = (e, lesson, dropId) => {
    e.preventDefault()
    e.target.classList.remove("hovered")
    if (currentSelected) TimetableStore.castlingLesson(data.id, dropId, lesson, currentSelected)
    setCurrentSelected(null)
  }

  return (
    <div className="timetable__tableGroup">
      <div className="timetable__tableGroup__title">
        {data.group}
      </div>
      <div className="timetable__tableGroup__lessons">
        {TimetableStore.getSchedule().map((times, index) => {
          return (
            <TimetableElement
              key={times.position}
              groupId={data?.id}
              timesPos={times.position}
              position={data?.lessons[index]?.position}
              startTime={times.startTime}
              endTime={times.endTime}
              teacher={data?.lessons[index]?.teacher}
              cabinet={data?.lessons[index]?.cabinet}
              lesson={data?.lessons[index]?.lesson}
              dragStartHandler={dragStartHandler}
              dragLeaveHandler={dragLeaveHandler}
              dragEndHandler={dragEndHandler}
              dragOverHandler={dragOverHandler}
              dropHandler={dropHandler}
            />
          )
        })}
      </div>
    </div>
  );
}

export default observer(TimetableGroup);