const student = {
    name:'John',
    age: 24,
    isActive:true
}

//convert this object into a string to be stored in local storage

const studentObjtoString = JSON.stringify(student)

console.log(typeof studentObjtoString);



//localStorage.setItem('student',studentObjtoString);

//stringify turns json into a string

const toJSONStudent = JSON.parse(studentObjtoString);

console.log(typeof toJSONStudent);

console.log(toJSONStudent.age);