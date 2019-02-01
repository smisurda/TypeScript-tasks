"use strict";
/**
 * @file problem3.ts
 * @author Samantha L. Misurda
 * @desc A driver file for the Problem 3 module
 */
exports.__esModule = true;
var meetup = require("./Meetup");
function meetupPlanner(meetupSchedule, year, month, dayOfWeek, schedule) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var result = meetupSchedule.meetupDay(year, month, dayOfWeek, schedule);
    var day = weekday[result.getDay()];
    document.body.innerHTML += "The next meetup is on: " + day + ", " + (result.getMonth() + 1) + "/" + result.getDate() + "/" + result.getFullYear() + "<br />";
}
/**
 * Test cases
 */
meetupPlanner(new meetup.Meetup(), 2019, 3, "Sunday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Monday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Tuesday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Wednesday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Thursday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Friday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Saturday", "teenth");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Sunday", "1st");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Sunday", "2nd");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Sunday", "3rd");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Sunday", "4th");
meetupPlanner(new meetup.Meetup(), 2019, 3, "Sunday", "last");
meetupPlanner(new meetup.Meetup(), 2019, 2, "Tuesday", "1st");
meetupPlanner(new meetup.Meetup(), 2019, 2, "Tuesday", "2nd");
meetupPlanner(new meetup.Meetup(), 2019, 2, "Tuesday", "3rd");
meetupPlanner(new meetup.Meetup(), 2019, 2, "Tuesday", "4th");
meetupPlanner(new meetup.Meetup(), 2019, 2, "Tuesday", "last");
meetupPlanner(new meetup.Meetup(), 2018, 12, "Monday", "1st");
meetupPlanner(new meetup.Meetup(), 2018, 12, "Monday", "2nd");
meetupPlanner(new meetup.Meetup(), 2018, 12, "Monday", "3rd");
meetupPlanner(new meetup.Meetup(), 2018, 12, "Monday", "4th");
meetupPlanner(new meetup.Meetup(), 2018, 12, "Monday", "last");
