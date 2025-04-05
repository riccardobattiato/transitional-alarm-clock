import { View, Pressable } from "react-native";
import { Tag } from "~/lib/icons/Tag";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "~/components/ui/dialog";
import clsx from "clsx";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useEffect, useState } from "react";

type Props = {
  active?: boolean;
  value?: string;
  onSubmit?: (value: string) => void;
};

const AlarmLabel = ({ active, value, onSubmit }: Props) => {
  const [localValue, setLocalValue] = useState(value);

  const handleSubmit = () => {
    if (localValue) onSubmit?.(localValue);
  };

  const handleCancel = () => {
    setLocalValue(value);
  };

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pressable className="flex-row items-center gap-x-4" disabled={!active}>
          {active && (
            <View>
              <Tag
                className="stroke-secondary-foreground"
                width={16}
                height={16}
              />
            </View>
          )}
          <View className={clsx({ hidden: !active && !value })}>
            <Text className="text-secondary-foreground">
              {value || "Add label"}
            </Text>
          </View>
        </Pressable>
      </DialogTrigger>
      <DialogContent hideClose>
        <View className="w-96">
          <Label>Label</Label>
          <Input
            className="mt-2"
            placeholder="Type something..."
            value={localValue}
            onChangeText={setLocalValue}
          />
        </View>
        <DialogFooter className="flex-row justify-end">
          <DialogClose asChild>
            <Button variant="ghost" onPress={handleCancel}>
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onPress={handleSubmit}>
              <Text>OK</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlarmLabel;
