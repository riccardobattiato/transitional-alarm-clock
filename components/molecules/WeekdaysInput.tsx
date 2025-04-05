import { View } from "react-native";
import { Alarm, Weekday } from "~/lib/types";
import ToggleWeekday from "../atoms/ToggleWeekday";

type Props = {
  value: Alarm["weekdays"];
  onValueChange?: (value: Alarm["weekdays"]) => void;
};

const WeekdaysInput = ({ value, onValueChange }: Props) => {
  return (
    <View className="flex-row items-center justify-between">
      {Object.entries(value).map(([day, active]) => (
        <ToggleWeekday key={day} weekday={day as Weekday} active={active} />
      ))}
    </View>
  );
};

export default WeekdaysInput;
