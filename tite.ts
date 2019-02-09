import * as jalali from 'jalaali-js';
import * as consts from './consts';

type Jalali = {
  jy: number,
  jm: number,
  jd: number
};

const todayGregorian: Date = new Date();
const todayJalali: Jalali = jalali.toJalaali(todayGregorian);

const jalaliWeekDay: string = consts.jalaliWeekDays[todayGregorian.getDay()];
const jalaliDay: number = todayJalali.jd;
const jalaliMonth: string = consts.jalaliMonths[todayJalali.jm - 1];
const jalaliYear: number = todayJalali.jy;

const gregorianWeekDay: string = consts.gregorianWeekDays[todayGregorian.getDay()];
const gregorianDay: number = todayGregorian.getDate();
const gregorianMonth: string = consts.gregorianMonths[todayGregorian.getMonth()];
const gregorianYear: number = todayGregorian.getFullYear();

export const nowTime: string = `${todayGregorian.getHours()}:${todayGregorian.getMinutes()}:${todayGregorian.getSeconds()}`;
export const jalaliDate: string = `${jalaliWeekDay}, ${jalaliDay} ${jalaliMonth} ${jalaliYear}`;
export const gregorianDate: string = `${gregorianWeekDay}, ${gregorianDay} ${gregorianMonth} ${gregorianYear}`;


export function getYear(): string {
  return `Jalali Year: ${jalaliYear}\nGregorian Year: ${gregorianYear}`;
}

export function getMonth(): string {
  return `Jalali Month: ${jalaliMonth}\nGregorian Month: ${gregorianMonth}`;
}

export function getDay(): string {
  return `Jalali Day: ${jalaliDay}\nGregorian Day: ${gregorianDay}`;
}

export function getWeekDay(): string {
  return `Jalali Week Day: ${jalaliWeekDay}\nGregorian Week Day: ${gregorianWeekDay}`;
}

export function getTime(): string {
  return `Time: ${nowTime}`;
}
