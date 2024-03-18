import { Button } from "@components/Button/Button";
import { Container, DateText, FoodText } from "./StyleScreen";
import { CardStatistics } from "@components/CardStatistics/CardStatistics";
import { AccountHeader } from "@components/AccountHeader/AccountHeader";
import { SnackCard } from "@components/SnackCard/SnackCard";
import { EmptyList } from "@components/EmptyList/EmptyList";

export function HomeScreen(){

  // <DateText>17.03.2024</DateText>
  // <SnackCard name="X-TUDO" onDiet={false} hour="20:00"/>
  // <SnackCard name="X-TUDO" onDiet={true} hour="20:00"/>
  // <SnackCard name="X-TUDO" onDiet={false} hour="20:00"/>
  // <SnackCard name="X-TUDO" onDiet={true} hour="20:00"/>
  // <SnackCard name="X-TUDO" onDiet={false} hour="20:00"/>

  return(
    <Container>
      <AccountHeader/>
      <CardStatistics/>
      <FoodText>Refeições</FoodText>
      <Button title="Nova refeição" />
      <EmptyList message="Nenhuma refeição registrada, que tal adicionar..."/>
    </Container>
  );
}