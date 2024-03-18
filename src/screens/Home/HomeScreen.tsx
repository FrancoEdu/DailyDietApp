import { Button } from "@components/Button/Button";
import { Container, FoodText } from "./StyleScreen";
import { CardStatistics } from "@components/CardStatistics/CardStatistics";
import { AccountHeader } from "@components/AccountHeader/AccountHeader";
import { SnackCard } from "@components/SnackCard/SnackCard";

export function HomeScreen(){
  return(
    <Container>
      <AccountHeader/>
      <CardStatistics/>
      <FoodText>Refeições</FoodText>
      <Button title="Nova refeição" />
      <SnackCard name="X-TUDO" onDiet={false} hour="20:00"/>
      <SnackCard name="X-TUDO" onDiet={true} hour="20:00"/>
      <SnackCard name="X-TUDO" onDiet={false} hour="20:00"/>
      <SnackCard name="X-TUDO" onDiet={true} hour="20:00"/>
      <SnackCard name="X-TUDO" onDiet={false} hour="20:00"/>
    </Container>
  );
}