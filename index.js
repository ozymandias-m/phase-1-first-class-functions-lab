
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(parameter){
    return parameter.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (parameter){
    return parameter.slice(2,4);
}
console.log(returnLastTwoDrivers(drivers));



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);


function createFareMultiplier(integer){
    return function (fare){
        return fare * integer
    } 
}
console.log(createFareMultiplier(4)(2));


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}
