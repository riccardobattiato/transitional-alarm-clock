import { useState } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Switch } from "~/components/ui/switch";
import { Alarm } from "~/lib/types";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";
import BtnAccordion from "~/components/atoms/BtnAccordion";
import AlarmLabel from "~/components/molecules/AlarmLabel";
import AlarmTime from "~/components/molecules/AlarmTime";
import clsx from "clsx";
import AlarmWeekdays from "~/components/atoms/AlarmWeekdays";
import WeekdaysInput from "../molecules/WeekdaysInput";

type Props = Alarm & { onToggleActive: (value: boolean) => void };

const AlarmEntry = ({
  active,
  time,
  vibrate,
  weekdays,
  label,
  onToggleActive,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <View className="bg-secondary rounded-2xl p-4">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>
          <View>
            <View
              className={clsx("flex-row justify-between items-center ", {
                "mb-4": label || open,
                "-mb-2": !label && !open,
              })}
            >
              <View>
                <AlarmLabel value={label} active={open} />
              </View>
              <View className="flex-1 pointer-events-none items-end">
                <BtnAccordion active={open} />
              </View>
            </View>
            <View className="self-start">
              <AlarmTime value={time} />
            </View>
            <View className="flex-row items-center justify-between mt-4">
              <View>
                <AlarmWeekdays value={weekdays} active={active} time={time} />
              </View>
              <View>
                <Switch checked={active} onCheckedChange={onToggleActive} />
              </View>
            </View>
          </View>
        </CollapsibleTrigger>
        <CollapsibleContent className="py-4">
          <WeekdaysInput value={weekdays} />
        </CollapsibleContent>
      </Collapsible>
    </View>
  );
};

export default AlarmEntry;
