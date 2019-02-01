(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Meetup = /** @class */ (function () {
    function Meetup() {
    }
    /**
     *
     * @param year Integer representation of the year
     * @param month Integer representation of the month
     * @param dayOfWeek String representation of the day of the week
     * @param schedule String representation of the meetup schedule
     * @return A Date,
     */
    Meetup.prototype.meetupDay = function (year, month, dayOfWeek, schedule) {
        var dayNumber = this.dayStringToInt(dayOfWeek);
        if (schedule === "last") {
            //Go to the next month's first day
            var eventDate = new Date(year, month);
            //Go back one day
            eventDate.setTime(eventDate.getTime() - Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
            //Look for the proper day of the week
            while (eventDate.getDay() != dayNumber) {
                //If we didn't find it, go back one more day
                eventDate.setTime(eventDate.getTime() - Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
            }
            //Return the date
            return eventDate;
        }
        //Start at the 13 and go until we find the proper day
        else if (schedule === "teenth") {
            var eventDate = new Date(year, month - 1, 13);
            //Walk the days, one day at a time
            while (eventDate.getDay() != dayNumber) {
                eventDate.setTime(eventDate.getTime() + Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
            }
            return eventDate;
        }
        else {
            var weeksToSkip = this.scheduleStringToInt(schedule);
            var eventDate = new Date(year, month - 1);
            //Find the first occurrence of the day of the week in the month
            while (eventDate.getDay() != dayNumber) {
                eventDate.setTime(eventDate.getTime() + Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
            }
            // Skip N-1 Weeks to get to the proper ordinal
            eventDate.setTime(eventDate.getTime() + (weeksToSkip * Meetup.SECONDS_IN_WEEK * Meetup.MILLISECONDS));
            return eventDate;
        }
    };
    Meetup.prototype.scheduleStringToInt = function (schedule) {
        switch (schedule) {
            case '1st':
                return 0;
            case '2nd':
                return 1;
            case '3rd':
                return 2;
            case '4th':
                return 3;
            default:
                throw new Error("Invalid schedule string");
        }
    };
    Meetup.prototype.dayStringToInt = function (day) {
        switch (day) {
            case 'Sunday':
                return 0;
            case 'Monday':
                return 1;
            case 'Tuesday':
                return 2;
            case 'Wednesday':
                return 3;
            case 'Thursday':
                return 4;
            case 'Friday':
                return 5;
            case 'Saturday':
                return 6;
            default:
                throw new Error("Invalid day of week");
        }
    };
    Meetup.DAYS_IN_WEEK = 7;
    Meetup.HOURS_IN_DAY = 24;
    Meetup.MINUTES_IN_HOUR = 60;
    Meetup.SECONDS_IN_MINUTE = 60;
    Meetup.SECONDS_IN_DAY = Meetup.SECONDS_IN_MINUTE * Meetup.MINUTES_IN_HOUR * Meetup.HOURS_IN_DAY;
    Meetup.SECONDS_IN_WEEK = Meetup.SECONDS_IN_DAY * Meetup.DAYS_IN_WEEK;
    Meetup.MILLISECONDS = 1000;
    return Meetup;
}());
exports.Meetup = Meetup;

},{}],2:[function(require,module,exports){
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

},{"./Meetup":1}]},{},[2]);
