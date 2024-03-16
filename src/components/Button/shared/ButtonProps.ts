import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps } from "../ButtonStyle";

export type ButtonProp = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
}