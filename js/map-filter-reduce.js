const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filt = users.filter(g => g.languages.length > 2);
console.log(filt);


let mappy = users.map(h => h.email);
console.log(mappy);


let reduceYearsOfExperience = users.reduce((prevVal, currVal)=>{
    return prevVal + currVal.yearsOfExperience;
})
let averageYears = reduceYearsOfExperience /users.length;



let longestEmail = users.reduce((prevVal, currVal)=>{
    if(currVal.email.length > prevVal.length){
        prevVal = currVal.email;
    }
    return prevVal;
},"");


let instructorString = users.reduce((results, user)=>{
    return results += `${user.name},`;
},`Your instructors are: `)