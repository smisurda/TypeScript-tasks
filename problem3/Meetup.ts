/**
 * @file Meetup.ts
 * @author Samantha L. Misurda
 * @desc A module to represent a Meetup Planner
 */
import scheduler = require("./Scheduler"); 

export class Meetup implements scheduler.Scheduler 
{ 
	private static readonly DAYS_IN_WEEK = 7;
	private static readonly HOURS_IN_DAY = 24;
	private static readonly MINUTES_IN_HOUR = 60;
	private static readonly SECONDS_IN_MINUTE = 60;
	private static readonly SECONDS_IN_DAY = Meetup.SECONDS_IN_MINUTE * Meetup.MINUTES_IN_HOUR * Meetup.HOURS_IN_DAY;
	private static readonly SECONDS_IN_WEEK = Meetup.SECONDS_IN_DAY * Meetup.DAYS_IN_WEEK;
	private static readonly MILLISECONDS = 1000;

	/**
	 * 
	 * @param year Integer representation of the year
	 * @param month Integer representation of the month
	 * @param dayOfWeek String representation of the day of the week
	 * @param schedule String representation of the meetup schedule
	 * @return A Date, 
	 */
	public meetupDay(year : number, month : number, dayOfWeek : string, schedule : string) : Date { 
		let dayNumber = this.dayStringToInt(dayOfWeek);

		if(schedule === "last") {
			//Go to the next month's first day
			let eventDate = new Date(year, month);
			//Go back one day
			eventDate.setTime(eventDate.getTime() - Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
			
			//Look for the proper day of the week
			while(eventDate.getDay() != dayNumber ) {
				//If we didn't find it, go back one more day
				eventDate.setTime(eventDate.getTime() - Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
			}

			//Return the date
			return eventDate;
		}
		//Start at the 13 and go until we find the proper day
		else if(schedule === "teenth") {
			let eventDate = new Date(year, month - 1, 13);

			//Walk the days, one day at a time
			while(eventDate.getDay() != dayNumber ) {
				eventDate.setTime(eventDate.getTime() + Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
			}
			return eventDate;
		}
		else {
			let weeksToSkip = this.scheduleStringToInt(schedule);
			let eventDate = new Date(year, month - 1);

			//Find the first occurrence of the day of the week in the month
			while(eventDate.getDay() != dayNumber ) {
				eventDate.setTime(eventDate.getTime() + Meetup.SECONDS_IN_DAY * Meetup.MILLISECONDS);
			}

			// Skip N-1 Weeks to get to the proper ordinal
			eventDate.setTime(eventDate.getTime() + (weeksToSkip * Meetup.SECONDS_IN_WEEK * Meetup.MILLISECONDS));
			return eventDate;
		}
	} 

	private scheduleStringToInt(schedule: string): number {
		switch(schedule) {
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
	}

	private dayStringToInt(day: string): number {
		switch(day) {
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
				throw new Error("Invalid day of week") 
		}
	}
}