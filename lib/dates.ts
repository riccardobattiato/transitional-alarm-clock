import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Time, Weekday } from "./types";

export const timeToDate = (time: Time): Date => {
  const date = new Date();
  date.setHours(time.hours);
  date.setMinutes(time.minutes);
  date.setSeconds(time.seconds);

  return date;
};

export const datePickerEvtToTime = (
  evt: DateTimePickerEvent["nativeEvent"]
): Time => {
  const date = new Date(evt.timestamp);
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

export const weekdaysNames: Record<Weekday, string> = {
  [Weekday.MON]: "Mon",
  [Weekday.TUE]: "Tue",
  [Weekday.WED]: "Wed",
  [Weekday.THU]: "Thu",
  [Weekday.FRI]: "Fri",
  [Weekday.SAT]: "Sat",
  [Weekday.SUN]: "Sun",
};
