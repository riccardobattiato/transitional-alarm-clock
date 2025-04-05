import { Pressable } from "react-native";
import { Weekday } from "~/lib/types";
import { Text } from "~/components/ui/text";
import { weekdaysNames } from "~/lib/dates";
import clsx from "clsx";

type Props = {
  weekday: Weekday;
  active?: boolean;
};

const ToggleWeekday = ({ weekday, active }: Props) => (
  <Pressable
    className={clsx(
      "p-1 w-10 h-10 rounded-full justify-center items-center border border-primary",
      {
        "bg-muted": !active,
        "bg-primary": active,
      }
    )}
  >
    <Text
      className={clsx("text-xl", {
        "text-primary-foreground": active,
        "text-muted-foreground": !active,
      })}
    >
      {weekdaysNames[weekday].charAt(0)}
    </Text>
  </Pressable>
);

export default ToggleWeekday;
