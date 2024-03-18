import { Container, Hour, HourView, Icon, SnackHourView, SnackName } from "./StyleSnackCard";
import { SnackCardProps } from "./shared/SnackCardProps";

export function SnackCard({name, onDiet, hour}: SnackCardProps){
  return(
    <Container>
      <SnackHourView>
        <HourView><Hour>{hour}</Hour></HourView>
        <SnackName>{name}</SnackName>
      </SnackHourView>
      <Icon name="circle" onDiet={onDiet}/>
    </Container>
  );
}