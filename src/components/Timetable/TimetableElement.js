import React from 'react';
import "./_timetable.scss"


function TimetableElement({groupId, timesPos, position, startTime, endTime, lesson, cabinet, teacher, dragStartHandler, dragLeaveHandler, dragEndHandler, dragOverHandler, dropHandler}) {
  return (
    <div className="timetable__tableGroup__lessons__element">
      <div className="position">
        {timesPos}
      </div>
      <div className="time">
        <span>{startTime}</span>
        <span>{endTime}</span>
      </div>
      <div
        className="lesson"
        onDragStart={e => dragStartHandler(e, {position, teacher, cabinet, lesson})}
        onDragLeave={e => dragLeaveHandler(e)}
        onDragEnd={e => dragEndHandler(e)}
        onDragOver={e => dragOverHandler(e)}
        onDrop={e => dropHandler(e, {position, teacher, cabinet, lesson}, groupId)}
        draggable={true}
      >
        <span>{lesson}</span>
        <span>{teacher} {cabinet}</span>
      </div>
    </div>
  );
}

export default TimetableElement;