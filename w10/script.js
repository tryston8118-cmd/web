// let student1 = {
//     name: "name1",
//     score: 100
// }

// let student2 = {
//     name: "name2",
//     score: 90
// }
// let student3 = {
//     name: "name3",
//     score: 80
// }
// let student4 = {
//     name: "name4",
//     score: 70
// }
// let student5 = {
//     name: "name5",
//     score: 60
// }

// let students = [
//     student1,
//     student2,
//     student3,
//     student4,
//     student5,
// ]

// for(let i = 0; i<students.length; i++){
//     console.log(`${students[i].name} ${(students[i].score >= 70) ? "Pass" : "Fail"}`)
// }

// function getGrade(score){
//     // if (score >= 90){
//     //     return 'A';
//     // }else if(score >= 80){
//     //     return 'B';
//     // }else if(score >= 70){
//     //     return 'C';
//     // }else{
//     //     return 'F';
//     // }

//     return (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'F';
// }


// students.forEach(student => {
//     console.log(student.name, getGrade(student.score));
// });


function reverseNumber(num){
    return num.toString().split('').reverse().join("")
}

console.log(reverseNumber(32243));

function captitalize(word){
    word = word.split(' ');
    for (let index = 0; index < word.length; index++) {
        word[index] = word[index].charAt(0).toUpperCase() + word[index].slice(1);
    }
    return word.join(' ');
}

console.log(captitalize("the quick brown fox"))