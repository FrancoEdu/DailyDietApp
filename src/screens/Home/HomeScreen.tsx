import { Button } from "@components/Button/Button";
import { Container, FoodText } from "./StyleScreen";
import { CardStatistics } from "@components/CardStatistics/CardStatistics";
import { AccountHeader } from "@components/AccountHeader/AccountHeader";

export function HomeScreen(){
  return(
    <Container>
      <AccountHeader/>
      <CardStatistics/>
      <FoodText>Refeições</FoodText>
      <Button title="Nova refeição" />
    </Container>
  );
}