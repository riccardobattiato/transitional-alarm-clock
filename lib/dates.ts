import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Time } from "./types";

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
