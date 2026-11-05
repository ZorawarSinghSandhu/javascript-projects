
let myDate = new Date();
// console.log(myDate);
// console.log("toDateString: " + myDate.toDateString());
// console.log("toLocaleString: " + myDate.toLocaleString());
// console.log("toTimeString: " + myDate.toTimeString());
// console.log("toISOString: " + myDate.toISOString());
// console.log("toLocaleDateString: " + myDate.toLocaleDateString());
// console.log("toLocaleTimeString: " + myDate.toLocaleTimeString());

// console.log("getTime: " + myDate.getTime()); // Milliseconds passed since Jan 1, 1970 (midnight)
// console.log("getFullYear: " + myDate.getFullYear());
// console.log("getMonth: " + myDate.getMonth()); // 0-indexed
// console.log("getDate: " + myDate.getDate());
// console.log("getDay: " + myDate.getDay()); // Sunday is the 0th Day
// console.log("getHours: " + myDate.getHours());
// console.log("getMinutes: " + myDate.getMinutes());
// console.log("getSeconds: " + myDate.getSeconds());


let newDate = new Date(2026, 10, 1, 15, 43, 22);

// console.log("getTime: " + newDate.getTime()); // Milliseconds passed since Jan 1, 1970 (midnight)
// console.log("getFullYear: " + newDate.getFullYear());
// console.log("getMonth: " + newDate.getMonth());
// console.log("getDate: " + newDate.getDate());
// console.log("getDay: " + newDate.getDay());
// console.log("getHours: " + newDate.getHours());
// console.log("getMinutes: " + newDate.getMinutes());
// console.log("getSeconds: " + newDate.getSeconds());

// let myCreatedDate = new Date("2023-01-25"); // or "01-25-2023"
let myCreatedDate = new Date("2023-01-25T14:30:45.500")

// console.log(myCreatedDate.toLocaleString());

let secondDate = new Date();

// console.log(Date.now());
// console.log(secondDate.getTime()); // Same outputs for both

// .getTime() is used with date objects, and can be used to get the milliseconds from Jan 1, 1970 up until that particular date. Whereas .now() is used with Date and is used to get the milliseconds up until this exact time.


// console.log(secondDate.toLocaleString('default', {
//     dateStyle: "short",
// }))

// ************************************ Temporal API **************************************
import {Temporal} from "@js-temporal/polyfill"

// console.log(Temporal.Now.instant().toString());
// console.log(Temporal.Now.plainDateISO().toString());
// console.log(Temporal.Now.plainDateTimeISO().toString());
// console.log(Temporal.Now.plainTimeISO().toString());
// console.log(Temporal.Now.timeZoneId().toString());
// console.log(Temporal.Now.zonedDateTimeISO().toString());

const date1 = Temporal.PlainDate.from("2023-03-25")
const date2 = Temporal.PlainDate.from("2027-12-07")

// console.log(date1.year);
// console.log(date1.month);
// console.log(date1.day);


// console.log(date1.dayOfWeek);
// console.log(date1.dayOfYear);
// console.log(date1.daysInMonth);
// console.log(date1.daysInWeek);
// console.log(date1.daysInYear);
// console.log(date1.monthCode);
// console.log(date1.inLeapYear);
// console.log(date1.monthsInYear);

console.log(date1.add({days: 5, months: 2, years: 2}).toString()) // To add days, months or years to a date.

console.log(date1.subtract({days: 4, months: 1, years: 6}).toString());

console.log(date1.until(date2).toString()); // P1718D, P-Period, 1718 days

console.log(date2.since(Temporal.Now.plainDateISO()).toString());

console.log(date2.until(date1).toString());

console.log(date1.since(Temporal.Now.plainDateISO()).toString());




