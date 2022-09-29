let employees = [
    {
        firstName: 'madhu',
        lastName: 'vodala',
        isTrained: true,
        gender: 'Female',
        selfTaughtOrInstitueTrained: 'Institue',
        location: 'Hyderabad',
        isCorebackground: false,
        yearOfPass: 2019,
        mobile: 9515723069,
        canSignBond: 'Yes',
        languagesTrained: ['HTML', 'bootstrap', 'CSS'],
        languagesKnown: ['Telugu', 'English']
    },
    {
        firstName: 'Mounica',
        lastName: 'Pillai',
        isTrained: true,
        gender: 'Female',
        selfTaughtOrInstitueTrained: 'self',
        location: 'Hyderabad',
        isCorebackground: true,
        yearOfPass: 2020,
        mobile: 9876543210,
        canSignBond: 'No',
        languagesTrained: ['HTML', 'CSS', 'Javascript'],
        languagesKnown: ['English', 'Hindi', 'Telugu']
    },
    {
        firstName: 'Smriti',
        lastName: 'Gupta',
        isTrained: true,
        gender: 'Female',
        selfTaughtOrInstitueTrained: 'Institue',
        location: 'Bangalore',
        isCorebackground: false,
        yearOfPass: 2018,
        mobile: 8985360850,
        canSignBond: 'Yes',
        languagesTrained: ['HTML', 'CSS', 'Bootstrap'],
        languagesKnown: ['English', 'kannada', 'Telugu']
    },
    {
        firstName: 'Ankur',
        lastName: 'Rajan',
        isTrained: false,
        gender: 'Male',
        selfTaughtOrInstitueTrained: 'self',
        location: 'AndhraPradesh',
        isCorebackground: false,
        yearOfPass: 2022,
        mobile: 9698521470,
        canSignBond: 'No',
        languagesTrained: ['HTML', 'C++', 'Java'],
        languagesKnown: ['English', 'Telugu']
    },
    {
        firstName: 'kunal',
        lastName: 'Kushwaha',
        isTrained: true,
        gender: 'Male',
        selfTaughtOrInstitueTrained: 'self',
        location: 'Delhi',
        isCorebackground: true,
        yearOfPass: 2021,
        mobile: 9696921470,
        canSignBond: 'No',
        languagesTrained: ['C', 'Python', 'C++', 'Java'],
        languagesKnown: ['English', 'Telugu', 'Hindi']
    }
]



//1. print total employees count.
//2. print employees name and mobile who are from hyderabad in an array.
//3. print all female employees name
//4. print who is trained and not trained by self.
//5. print employees name and languages trained from core background.
//6. print  names who is interested to sign bond and from non local.
//7. print names who knows html and bootstrap.

// 8. sort employees based on year of pass, then select latest 3 employees from the list?
// 9. add true for selected emplyees and add package as 3.5L.
// 10. add status as better luck next time to the remaining(who is not selected) employees.
// 11. add joining date as 1st november 2022.
// 12. finally geerate array with full name , package, joing date.


//1. print total employees count.
//console.log(`The Total Employees are ${employees.length}`)

//2. print employees name and mobile who are from hyderabad in an array.
let empInHyd = employees.filter(eachItem => (eachItem.location.toLowerCase() === 'hyderabad'))
    .map(item => {
        return {
            firstName: item.firstName,
            mobile: item.mobile
        }
    })

//console.log(empInHyd, 'empInHyd')

//3. print all female employees name
let FemaleEmp = employees.filter(eachItem => (eachItem.gender.toLowerCase() === 'female')).map(item => {
    return {
        firstName: item.firstName,
    }
})
//console.log(FemaleEmp, 'Female Employee Names')

//4. print who is trained and not trained by self.
let trainedEmployess = employees.filter(eachItem => (eachItem.isTrained === true && eachItem.selfTaughtOrInstitueTrained.toLowerCase() !== 'self')).map(item => {
    return { firstName: item.firstName }
})
//console.log(trainedEmployess, 'trained emp')

//5. print employees name and languages trained from core background.

let employeesFromCoreBg = employees.filter(eachItem => (eachItem.isCorebackground === true)).map(item => {
    return {
        firstName: item.firstName,
        languagesTrained: item.languagesTrained
    }
})
//console.log(employeesFromCoreBg, 'employeesFromCoreBg')
//6. print  names who is interested to sign bond and from non local.
let empCanSignBond = employees.filter(eachItem => (eachItem.canSignBond.toLowerCase() === 'yes' && eachItem.location.toLowerCase() !== 'hyderabad')).map(item => {
    return { firstName: item.firstName }
})
//console.log(empCanSignBond, 'EmpCanSignBond')

//7. print names who knows html and bootstrap.


let empLanguagesKnown = employees.filter(eachItem => eachItem.languagesTrained.map(i => i.toLowerCase()).includes('html') && eachItem.languagesTrained.map(i => i.toLowerCase()).includes('bootstrap'));
//console.log(empLanguagesKnown)

//8. sort employees based on year of pass, then select latest 3 employees from the list?
let sortedEmployees = employees.sort((a, b) => b.yearOfPass - a.yearOfPass)
sortedEmployees.map(eachItem => eachItem.isSelected = false)

let latestPassedEmp = [...sortedEmployees.slice(0, 3)];
let PassedEmp = sortedEmployees.slice(3);

// 9. add true for selected emplyees and add package as 3.5L.
let packagedAddedR = latestPassedEmp.map((eachItem, index) => {
    return {
        ...eachItem,
        isSelected: true,
        package: 350000 + (index * 50000)
    };
});

//console.log(latestPassedEmp, 'latestPassedEmp');

// console.log(packagedAddedR, 'packagedAddedR');

// 10. add status as better luck next time to the remaining(who is not selected) employees.
let statusCheck = PassedEmp.map(eachItem => {
    return {
        ...eachItem,
        status: 'Better Luck Next Time'
    }
})
//console.log(PassedEmp, 'PassedEmp')

// // 11. add joining date as 1st november 2022.
let date = new Date(2022, 10, 1);
latestPassedEmp.map(eachItem => eachItem.dateOfJoining = date.toDateString())
//console.log(latestPassedEmp)

// // 12. finally geerate array with full name , package, joing date.
let selectedEmpDetails = packagedAddedR.map(eachItem => { return { firstName: eachItem.firstName, package: eachItem.package, dateOfJoining: eachItem.dateOfJoining } })
// console.log(selectedEmpDetails)



let totalSpending = selectedEmpDetails.map(eachItem => eachItem.package / 12)
// console.log(totalSpending)
//reduce 

//let totalSpending = selectedEmpDetails.map(eachItem => total += eachItem.package / 12)

// let result = totalSpending.reduce((acc, cur) => { acc = acc + cur }, 0)


// let total = 0;
// for (let item of totalSpending) {
//     total += item
// }
// // console.log(total,'for loop')
// // console.log(result, 'total')


// array1 = [1, 2, 3, 4, 5]
// array2 = ['raju', 'ravi', 'Ram', 'Rajesh']


// let resultArray = {}
// var minArray = array2;
// // if(array1.length < array2.length){
// //     minArray= array2
// // }

// ///console.log(minArray.length)
// let newResult = minArray.map((a, b) => {return{
//     id: array1[b],
//     name: array2[b]
// }})
// console.log(newResult,'mapResult')

// let newResultArray = []
// minArray.forEach((a, b) => 
// newResultArray.push({
//     id: array1[b],
//     name: array2[b]
// })
// )
// console.log(newResultArray,'forEachResult')

// let forResultArray = []
// for(let i= 0;i <minArray.length ;i++){
//     forResultArray.push({
//         id: array1[i],
//         name: array2[i]
//     })
// }
// console.log(forResultArray,'forResultArray')








