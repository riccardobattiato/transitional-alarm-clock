import { useEffect, useState } from "react";
import type { Time } from "~/lib/types";
import { Text } from "~/components/ui/text";
import { View, Pressable, Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { datePickerEvtToTime, timeToDate } from "~/lib/dates";

type Props = { value: Time; onSubmit?: (value: Time) => void };

const AlarmTime = ({ value, onSubmit }: Props) => {
  const [localTime, setLocalTime] = useState<Date>(timeToDate(value));
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (e: DateTimePickerEvent) => {
    if (e.type === "set") {
      onSubmit?.(datePickerEvtToTime(e.nativeEvent));
    }
  };

  const handleTimePress = () => {
    // From the official docs.
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: localTime,
        mode: "time",
        is24Hour: true,
        onChange: handleChange,
      });
    } else {
      setShowDialog((value) => !value);
    }
  };

  useEffect(() => {
    setLocalTime(timeToDate(value));
  }, [value]);
  return (
    <>
      <Pressable onPress={handleTimePress}>
        <Text className="font-bold text-5xl">
          {value.hours.toString().padStart(2, "0")}:
          {value.minutes.toString().padStart(2, "0")}
        </Text>
      </Pressable>
      {Platform.OS !== "android" && showDialog && (
        <DateTimePicker
          testID="timePicker"
          value={localTime}
          mode="time"
          is24Hour={true}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default AlarmTime;
