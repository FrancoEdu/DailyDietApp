import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps } from "../StyleCardStatistics";

export type CardStatisticsProp = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  percentage: number;
}