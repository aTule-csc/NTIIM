let date = new Date()

const months = new Map([
[0,"январь"],[1,"февраль"],
[2,"март"],[3,"апрель"],
[4,"май"],[5,"июнь"],
[6,"июль"],[7,"август"],
[8,"сентябрь"],[9,"октябрь"],
[10,"ноябрь"],[11,"декабрь"]
])


let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

console.log(months.get(month))

document.getElementById('day').innerHTML = day;
document.getElementById('monthNyear').innerHTML = months.get(month)+ " " + year;
