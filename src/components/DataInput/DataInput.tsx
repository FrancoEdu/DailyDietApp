
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./StyleDataInput";

export type InputProps = TextInputProps & {
}

export function DataInput({...rest}: InputProps){

  const { COLORS } = useTheme();

  return(
    <Container 
      {...rest}
    />
  );
}