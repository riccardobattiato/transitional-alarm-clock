type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export enum Weekday {
  MON = "MON",
  TUE = "TUE",
  WED = "WED",
  THU = "THU",
  FRI = "FRI",
  SAT = "SAT",
  SUN = "SUN",
}

export type Alarm = {
  id: string;
  label?: string;
  time: Time;
  vibrate: boolean;
  active: boolean;
  weekdays: Record<Weekday, boolean>;
};
