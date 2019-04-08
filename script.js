var moneyQuestion = prompt("Ваш бюджет на месяц");
var timeQuestion = prompt("Укажите дату в формате гггг/мм/дд");
var mainExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var amount = prompt("Во сколько обойдется");

var money = moneyQuestion;
var time = timeQuestion;

var appData = {
    budget : money,
    timeData : time,
    expenses : {"mainExpenses" : "amount"},
    optionalExpenses : NaN,
    income : [],
    savings : false
}

console.log(money);
console.log(time);
console.log(mainExpenses , amount);
console.log(appData.expenses);
alert(appData.budget / 30 );

// 1- 6 типов 
//     число
//     булевый
//     строка
//     null
//     undefined
//     object
// 2- console.log();
// 3- && - логическое И, возвращает true если оба операнда true
//     || - логическое или возвращает true если один из операндов true