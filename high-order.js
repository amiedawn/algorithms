const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages= [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// *OLD WAY: loop
// for (let i=0; i<companies.length; i++) {
//     console.log(companies[i]);
// }

// *forEach: no return, like a loop
// companies.forEach(function(company) {
//     console.log(company);
// });

// *filter
// filter those over 21 (can drink alcohol)
// let canDrink = [];
// for (let i=0; i<ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);
// -OR-
// const canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return age;
//     }    
// });
// console.log(canDrink);
// -OR-
// const canDrink = ages.filter((age) => age >=21 && age);
// console.log(canDrink);

// filter companies with category of Retail:
// const retailCompanies  = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// filter companies that started in 1980s
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// filter companies that lasted at least 10 years
// const tenYrCompanies = companies.filter(company => ((company.end - company.start) >=10));
// console.log(tenYrCompanies);

// *map
// create array of company names
// const companyNamesArr = companies.map(company => company.name);
// console.log(companyNamesArr);

// map company names with years of operation listed afterward
// const companyNamesArr = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNamesArr)

// map over ages array and take square of each index
// const squareArr = ages.map(age => age * age);
// console.log(squareArr);

// *sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
//  console.log(sortedCompanies);

// const sortedCompanies = companies.sort((c1, c2) => c1.start - c2.start);
// console.log(sortedCompanies);

// sort ages:
// const sortAges = ages.sort((a,b) => a > b ? 1 : -1);
// console.log(sortAges);

// *reduce;
// add all ages with for loop
// let sum = 0;
// for (let i=0; i<ages.length; i++) {
//     sum += ages[i];
// };
// console.log(sum);

// const sumAges = ages.reduce(function(total, age) {
//     return total + age
// }, 0);
// console.log(sumAges);

// const sumAges = ages.reduce((total, age) => (total + age), 0);
// console.log(sumAges);

// get range for company and total into 1 sum
// const rangeCompanies = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(rangeCompanies);

// const rangeCompanies = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(rangeCompanies);

// combo: get array of ages *2, filter it for ages 40 and older, sort ages in ascending order, get total ages
const combo = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((total, age) => total + age, 0);    

console.log(combo);