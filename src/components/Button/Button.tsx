import { Container, Title, Icon } from "./ButtonStyle";
import { ButtonProp } from "./shared/ButtonProps";

export function Button({title, type = 'PRIMARY', icon = 'add', ...rest}: ButtonProp){
  return(
    <Container type={type} {...rest}>
      <Icon name={icon} type={type}/>
      <Title type={type}>{title}</Title>
    </Container>
  );
}