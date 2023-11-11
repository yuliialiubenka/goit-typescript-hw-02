/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDay): boolean {
  if (day === WeekDay.Saturday || day === WeekDay.Sunday) {
    console.log("Today is a day off");
    return false;
  } else {
    console.log("Today is a working day");
    return true;
  }
}