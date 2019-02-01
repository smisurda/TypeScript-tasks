# TypeScript-tasks
## Problem 1: Phone Number

Write a program that cleans up user-entered phone numbers so that they can be sent SMS messages.

The rules are as follows:

- If the phone number is less than 10 digits assume that it is bad
  number
- If the phone number is 10 digits assume that it is good
- If the phone number is 11 digits and the first number is 1, trim the 1
  and use the last 10 digits
- If the phone number is 11 digits and the first number is not 1, then
  it is a bad number
- If the phone number is more than 11 digits assume that it is a bad
  number

---

Write a class `PhoneNumber` with a constructor `PhoneNumber(string)` that throws an exception on any invalid input.

It has a method `number()` that returns a string representation of all 10 numerical digits. EG `"4158675309"`

It has a method `areaCode()` that returns a string of the first three digits EG `"415"`

It has a method `exchangeCode()` that returns a string of the next three digits EG `"867"`

It has a method `lineNumber()` that returns a string of the last four digits EG `"5309"`

It has a method `pretty()` that returns the number formatted as `"(XXX) XXX-XXXX"` EG `"(415) 867-5309"`

## Problem 2: Bob

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

---

Create a module called `bob` with a function `hey`.

`hey` Takes a single sentence as input, and returns a sentence as a response.

A sentence is just a `String` of any length.

A question is any sentence that ends with a question mark.

A sentence is yelled if it is in all caps.

A sentence that says nothing is one made entirely of white space.

## Problem 3: Meetup

Calculate the date of meetups.

Typically meetups happen on the same day of the week.

Examples are

- the first Monday
- the third Tuesday
- the Wednesteenth
- the last Thursday

Note that "Monteenth", "Tuesteenth", etc are all made up words. There
was a meetup whose members realised that there are exactly 7 days that
end in '-teenth'. Therefore, one is guaranteed that each day of the week
(Monday, Tuesday, ...) will have exactly one date that is named with '-teenth'
in every month.

---

Write a module `meetup` that has a function `meetupDay(int, int, string, string)` that accepts the following arguments:

- An integer representing the year
- An integer representing the month of year (1 for January, 12 for December, etc.)
- A string representing the day of week, eg ("Monday", "Sunday", etc.)
- A string representing the meetup schedule, eg ("1st", "2nd", "3rd", "4th", "last", "teenth")

This function should return the date of the meetup for the given month/year as a JavaScript `Date` object.
