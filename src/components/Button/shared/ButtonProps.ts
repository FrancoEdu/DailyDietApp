import { TouchableOpacityProps } from "react-native";
import { ButtonTypeIconProps, ButtonTypeStyleProps } from "../ButtonStyle";

export type ButtonProp = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
  icon?: ButtonTypeIconProps
}