import { Alarm } from "~/lib/types";

export const sampleAlarms: Alarm[] = [
  {
    id: "abc",
    label: "Workday",
    time: {
      hours: 7,
      minutes: 30,
      seconds: 0,
    },
    weekdays: {
      MON: true,
      TUE: true,
      WED: true,
      THU: true,
      FRI: true,
      SAT: false,
      SUN: false,
    },
    active: true,
    vibrate: true,
  },
  {
    id: "def",
    label: "Weekend",
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    weekdays: {
      MON: false,
      TUE: false,
      WED: false,
      THU: false,
      FRI: false,
      SAT: true,
      SUN: true,
    },
    active: true,
    vibrate: false,
  },
  {
    id: "ghi",
    time: {
      hours: 18,
      minutes: 0,
      seconds: 0,
    },
    weekdays: {
      MON: false,
      TUE: true,
      WED: false,
      THU: true,
      FRI: true,
      SAT: false,
      SUN: true,
    },
    active: false,
    vibrate: true,
  },
];
