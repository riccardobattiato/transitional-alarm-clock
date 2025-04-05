import { Alarm } from "~/lib/types";
import { Text } from "~/components/ui/text";
import { timeToDate, weekdaysNames } from "~/lib/dates";
import type { Time, Weekday } from "~/lib/types";
import { isBefore } from "date-fns";

type Props = {
  value: Alarm["weekdays"];
  time: Time;
  active?: boolean;
};

const AlarmWeekdays = ({ active, time, value }: Props) => {
  const activeDays = Object.entries(value)
    .filter(([_, active]) => active)
    .map(([day]) => day);

  if (!active && activeDays.length === 0) return <Text>Not scheduled</Text>;
  else if (activeDays.length > 0)
    return (
      <Text>
        {activeDays.map((day) => weekdaysNames[day as Weekday]).join(", ")}
      </Text>
    );

  const now = new Date();
  const nowWithTime = timeToDate(time);

  if (isBefore(now, nowWithTime)) return <Text>Today</Text>;
  return <Text>Tomorrow</Text>;
};

export default AlarmWeekdays;
