import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Pressable } from "react-native";
import { ChevronDown } from "~/lib/icons/ChevronDown";

type Props = {
  active?: boolean;
};

const BtnAccordion = ({ active }: Props) => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: withTiming(active ? "180deg" : "0deg") }],
  }));
  return (
    <Pressable className="h-6 w-6 bg-secondary rounded-full flex justify-center items-center">
      <Animated.View style={animatedStyles}>
        <ChevronDown className="stroke-secondary-foreground" width={20} height={20} />
      </Animated.View>
    </Pressable>
  );
};

export default BtnAccordion;
