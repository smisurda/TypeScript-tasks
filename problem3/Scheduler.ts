/**
 * @file Calendar.ts
 * @author Samantha L. Misurda
 * @desc An interface for the Scheduler class
 */
export interface Scheduler { 
   meetupDay(year : number, month : number, dayOfWeek : string, schedule : string) : Date
}