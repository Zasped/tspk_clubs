import {makeAutoObservable} from "mobx";


export default new class TimetableStore {

    currentData = {
        id: 1,
        date: "21-06-2022",
        schedule: [
            {
                position: 1,
                startTime: "08:30",
                endTime: "10:00",
            },
            {
                position: 2,
                startTime: "10:20",
                endTime: "11:50",
            },
            {
                position: 3,
                startTime: "12:25",
                endTime: "13:55",
            },
            {
                position: 4,
                startTime: "14:05",
                endTime: "15:35",
            },
            {
                position: 5,
                startTime: "15:40",
                endTime: "17:10",
            },
        ],
        groups: [
            {
                id: 1,
                group: "НК-21",
                lessons: [
                    {
                        position: 1,
                        teacher: "Соколовская Д. И.",
                        cabinet: "209 каб.",
                        lesson: "Мет. орг. разл. видов деят. детей с задер. псих. развития",
                    },
                    {
                        position: 2,
                        teacher: "Таросова В. В.",
                        cabinet: "206 каб.",
                        lesson: "Информатика",
                    },
                    {
                        position: 3,
                        teacher: "Шароф. С. А.",
                        cabinet: "206 каб.",
                        lesson: "Информатика",
                    },
                    {
                        position: 4,
                    },
                    {
                        position: 5,
                    },
                ]
            },
            {
                id: 2,
                group: "НК-32",
                lessons: [
                    {
                        position: 1,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 2,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 3,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 4,
                        teacher: "Соколовская Д. И.",
                        cabinet: "206 каб.",
                        lesson: "Физкультура",
                    },
                    {
                        position: 5,
                        teacher: "Шароф. С. А.",
                        cabinet: "206 каб.",
                        lesson: "Да да инфа опять",
                    },
                ]
            },
            {
                id: 3,
                group: "НК-32",
                lessons: [
                    {
                        position: 1,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 2,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 3,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 4,
                        teacher: "Соколовская Д. И.",
                        cabinet: "206 каб.",
                        lesson: "Физкультура",
                    },
                    {
                        position: 5,
                        teacher: "Шароф. С. А.",
                        cabinet: "206 каб.",
                        lesson: "Да да инфа опять",
                    },
                ]
            },
            {
                id: 4,
                group: "НК-32",
                lessons: [
                    {
                        position: 1,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 2,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 3,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 4,
                        teacher: "Соколовская Д. И.",
                        cabinet: "206 каб.",
                        lesson: "Физкультура",
                    },
                    {
                        position: 5,
                        teacher: "Шароф. С. А.",
                        cabinet: "206 каб.",
                        lesson: "Да да инфа опять",
                    },
                ]
            },
            {
                id: 5,
                group: "НК-32",
                lessons: [
                    {
                        position: 1,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 2,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 3,
                        teacher: "",
                        cabinet: "",
                        lesson: "Практика",
                    },
                    {
                        position: 4,
                        teacher: "Соколовская Д. И.",
                        cabinet: "206 каб.",
                        lesson: "Физкультура",
                    },
                    {
                        position: 5,
                        teacher: "Шароф. С. А.",
                        cabinet: "206 каб.",
                        lesson: "Да да инфа опять",
                    },
                ]
            }
        ]
    }

    constructor(props) {
        makeAutoObservable(this)
    }

    getData() {
        return this.currentData
    }

    getSchedule() {
        return this.currentData?.schedule
    }

    castlingLesson(groupId, dropId, lesson, lessonRepetition) {
        if (groupId !== dropId) return
        this.currentData.groups.forEach(group => {
            if (group.id === groupId) {
                group.lessons = group.lessons.map(les => {
                    if (les.position === lesson.position) {
                        return {
                            ...les,
                            teacher: lessonRepetition.teacher,
                            cabinet: lessonRepetition.cabinet,
                            lesson: lessonRepetition.lesson,
                        }
                    }
                    if (les.position === lessonRepetition.position) {
                        return {
                            ...les,
                            teacher: lesson.teacher,
                            cabinet: lesson.cabinet,
                            lesson: lesson.lesson,
                        }
                    }
                    return les
                })
            }
        })

        console.log(this.currentData.groups)

    }
}

