function getDayOfTheWeek (date){
let weekDaySearch = new Date(date);
let j = weekDaySearch.getDay(); //should return a number from 0-6 for weekdays
// return j;
let weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dayMatch = weekdays[j];
  return dayMatch.toString();

  }
