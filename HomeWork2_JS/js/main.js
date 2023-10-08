// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს


const users =[
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}
];
function minAgeName(users) {
    
    let youngestUser = users[0]

    for (let i = 0; i < users.length; i++) {
        if(users[i].age < youngestUser.age){
               youngestUser = users[i]
        }
    }
    return youngestUser.name;
}
console.log(minAgeName(users))


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

const user = {
    name : "Lasha",
    surname : "Gazashvili",
    age : 19,
    number : "597 999 999"
}
function copyUser(user){
    const copy = {
        name : user.name,
        surname : user.surname,
        age : user.age,
        number : user.number
    }
    return copy;
};
console.log(copyUser(user) === user)

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული


const diceGame = function() {
    const firstRolls = () => Math.trunc(Math.random() * 6) + 1;
    const secondRolls = () => Math.trunc(Math.random() * 6) + 1;
    let firstResult;
    let secondResult;
    do {
      firstRolls();
      secondRolls();
      firstResult = firstRolls();
      secondResult = secondRolls();
    } while (firstResult !== 3 && secondResult !== 3);
    
    if(firstResult === 3) {
    return `${firstResult}, ${secondResult} - player1  won the game  `;
    } if(secondResult === 3){
    return `${firstResult}, ${secondResult} - player2  won the game  `; 
    }
    };

console.log(diceGame())