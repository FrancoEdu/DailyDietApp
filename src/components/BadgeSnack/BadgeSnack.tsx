import { Answer, Container, Icon } from "./StyleBadgeSnack";

type Props = {
  onDiet: boolean;
}

export function BadgeSnack(props : Props){
  return(
    <Container>
      <Icon name="circle" onDiet={props.onDiet}/>
      <Answer>{props.onDiet ? 'dentro da dieta' : 'fora da dieta'}</Answer>
    </Container>
  );
}