var students = [
    {
        id: 1,
        name: 'Rakesh',
    },
    {
        id: 2,
        name: 'Kumar',
    },
    {
        id: 3,
        name: 'betash',
    },
    {
        id: 4,
        name: 'Puppy',
    },
    {
        id: 5,
        name: 'Shashi',
    },
    {
        id: 6,
        name: 'Mark Z'  //Ak Changed the file
    },
    {
        id: 7,
        name: 'Steve'
    },
    {
        id: 8,
        name: 'jonas'
    },
    {
        id: 9,
        name: 'kiran',
    }, {
        id: 10,
        name: 'navya'
    }
]


var totalMarks = 100;
var studentsId = 0


var examResults = [{
    studentId: 4,
    isExamWritten: true,
    marks: 80,
},
{
    studentId: 1,
    isExamWritten: true,
    marks: 32,
},
{
    studentId: 3,
    isExamWritten: true,
    marks: 76,
},
{
    studentId: 5,
    isExamWritten: false,
    marks: null,
},
{
    studentId: 6,
    isExamWritten: false,
    marks: 60,
},
{
    studentId: 7,
    isExamWritten: false,
    marks: null,
},
{
    studentId: 8,
    isExamWritten: true,
    marks: 70,
},
{
    studentId: 9,
    isExamWritten: false,
    marks: null,
},
{
    studentId: 10,
    isExamWritten: true,
    marks: 96,
}
]

//1. Prepare students Array by adding marks and total marks
//2. print topper of the exam?
//3. add average marks to all the students.
//4. give ranks according to the marks of students.

//1.Prepare students Array by adding marks and total marks
let summary = []
let studentsArray = students.map((eachItem, index) => {
    let findStudent = examResults.find(item => item.studentId == eachItem.id);
    summary.push({
        id: eachItem.id,
        name: eachItem.name,
        marks: findStudent ? findStudent.marks : null,
        totalMarks: totalMarks,
        isExamWritten: findStudent ? findStudent.isExamWritten : false,
    })
});

//console.log(summary, 'summary')

//2.print topper of the exam?

let topperOfExam = summary.sort((a, b) => b.marks - a.marks).map((eachItem, index) => {
    return {
        ...eachItem,
        rank: eachItem.isExamWritten ? index + 1 : null
    }
})
let topperOfExamResult = topperOfExam.slice(0, 1)
console.log(topperOfExamResult)

//3. add average marks to all the students.

let Average = summary.reduce((acc, cur) => acc = acc + cur.marks, 0) / summary.length
console.log(Average, "Students Average")

//4. give ranks according to the marks of students.
// 6. Print all students names as Rakesh, Kumar, betash, Puppy, Shashi.
// 7. Print all the details fields which are available in an array after completing the task 4.
// 8. Check is everyone passed the exams. pass marks are 35;
// 9. Check is atleast one student failed in exam. pass marks are 35.

// 6. Print all students names as Rakesh, Kumar, betash, Puppy, Shashi.

let getStudentNames = students.map(eachItem => eachItem.name).join(',')
console.log(getStudentNames)

// 7. Print all the details fields which are available in an array after completing the task 4.
console.log(topperOfExam, 'detailedStudentArray')

// 8. Check is everyone passed the exams. pass marks are 35;
// let passCheck = topperOfExam.filter(eachItem => (eachItem.marks >=35))
// passCheck.length !== topperOfExam.length ? console.log("Every Student is not Passed in the exam ") :console.log("Every Student is Passed in the exam ")
let passCheck = topperOfExam.every(eachItem => (eachItem.marks >= 35))
passCheck ? console.log("Every Student is Passed in the exam ") : console.log("Every Student is not Passed in the exam ")
// 9. Check is atleast one student failed in exam. pass marks are 35.
// let failCheck = topperOfExam.filter(eachItem => (eachItem.marks <=35))
// failCheck.length !== topperOfExam.length ? console.log('Yes'):console.log('No')
let failCheck = topperOfExam.some(eachItem => (eachItem.marks <= 35))
failCheck ? console.log('Yes') : console.log('No')
