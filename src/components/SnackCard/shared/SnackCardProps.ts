import { TouchableOpacityProps } from "react-native";

export type SnackCardProps = TouchableOpacityProps & {
  name: string;
  hour: string;
  onDiet: boolean
}