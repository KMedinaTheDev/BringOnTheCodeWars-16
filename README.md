![.: Day Of The Week 7kyu .:.](getDayOfTheWeek.png)

## CodeWars Challenge- 16

*Description:*
Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.

Dates may be passed in as strings or as Objects.

## Languages Used

1. JavaScript

## Arriving to the solution:

The getDay() method accepts a date in the format of mm/dd/yyyy and so I'm able to use this method to solve this kata. The getDay() method returns the day of the week (from 0 to 6) for the specified date.

 Sunday is 0, Monday is 1, and so I create an array of the weekdays to be use the result from using the getDay() method to pull out the weekday according to the day's index position in the array. I was having an issue in the console and kept getting 'undefined' & so I decided to create another variable called dayMatch that can hold the element at the matching index position and then use the toString() method on this variable to return the string.
