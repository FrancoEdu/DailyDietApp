import { TouchableOpacityProps } from "react-native";
import { Answer, Container, Icon } from "./StyleSelectedOnDietButton";

type SelectedOnDietButtonProp  = TouchableOpacityProps & {
  text: string;
  onDiet: boolean;
  selected: boolean;
}

export function SelectedOnDietButton({text, onDiet, selected, ...rest}: SelectedOnDietButtonProp){
  return(
    <Container selected={selected} onDiet={onDiet} {...rest}>
      <Icon selected={selected} name="circle" onDiet={onDiet}/>
      <Answer>{text}</Answer>
    </Container>
  );
}