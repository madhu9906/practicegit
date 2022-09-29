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
        languagesTrained: ['HTML', 'CSS'],
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
        languagesTrained: ['HTML', 'CSS', 'bootstrap','Javascript'],
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


//1. print total employees count.

let totalEmployees = employees.length
console.log(`The Total Employees are ${totalEmployees}`)

//2. print employees name and mobile who are from hyderabad in an array.
let empDetails = []
let empInHyd = employees.filter(eachItem => (eachItem.location.toLowerCase() === 'hyderabad'))
    .map(item => {
        return {
            firstName: item.firstName,
            mobile: item.mobile
        }
    })

console.log(empInHyd, 'empInHyd')

//3. print all female employees name
let femaleEmpNames = []
let femaleEmployees = employees.map(eachItem => {
    if (eachItem.gender.toLowerCase() === 'female') {
        femaleEmpNames.push(eachItem.firstName)
    }
})
console.log(femaleEmpNames, 'Female Employee Names')
//4. print who is trained and not trained by self. 
let trainedEpNames = []
let trainedEmployess = employees.filter(eachItem => {
    if (eachItem.isTrained === true && eachItem.selfTaughtOrInstitueTrained.toLowerCase() !== 'self') {
        return eachItem
    }
})
console.log(trainedEmployess,'trained emp')

//5. print employees name and languages trained from core background.

let trainedEmpNames = []
let employeesFromCoreBg = employees.map(eachItem => {
    if (eachItem.isCorebackground === true) {
        let name = eachItem.firstName
        let languagesTrained = eachItem.languagesTrained
        trainedEmpNames.push({ name, languagesTrained })
    }
})
console.log(trainedEmpNames)
//6. print  names who is interested to sign bond and from non local.
let empIntersted = []
let empCanSignBond = employees.map(eachItem => {
    if (eachItem.canSignBond.toLowerCase() === 'yes' && eachItem.location.toLowerCase() !== 'hyderabad') {
        empIntersted.push(eachItem.firstName)
    }
})
console.log(`print  names who is interested to sign bond and from non local. ${empIntersted}`)
//7. print names who knows html and bootstrap.

let empLanguagesKnown = []
let empData = employees.map(eachItem => {
    for (let eachele of eachItem.languagesTrained) {
        if (eachele.toLowerCase() === ('html' && 'bootstrap')) {
            empLanguagesKnown.push(eachItem.firstName)
        }
    }
})
console.log(`print names who knows html and bootstrap.${empLanguagesKnown}`)



