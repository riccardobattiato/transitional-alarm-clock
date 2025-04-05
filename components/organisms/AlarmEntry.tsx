import { useState } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
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

type Props = Alarm;

const AlarmEntry = ({ active, time, vibrate, weekdays, label }: Props) => {
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
          </View>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text>@radix-ui/react</Text>
        </CollapsibleContent>
      </Collapsible>
    </View>
  );
};

export default AlarmEntry;
