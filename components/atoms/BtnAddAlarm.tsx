import { Pressable } from "react-native";
import { Plus } from "~/lib/icons/Plus";

type Props = {
  onPress?: () => void;
};

const BtnAddAlarm = ({ onPress }: Props) => (
  <Pressable
    className="bg-primary w-28 h-28 rounded-full justify-center items-center"
    onPress={onPress}
  >
    <Plus className="stroke-primary-foreground" width={24} height={24} />
  </Pressable>
);

export default BtnAddAlarm;
