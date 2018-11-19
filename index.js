// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
   return function(x) {
    return mult * x
   }
}

const fareDoubler = function(int) {
  return int * 2
}

const fareTripler = function(int) {
  return int * 3
}

function fetchSpecifiedDrivers(drivers, callback) {
  return callback(drivers)
}