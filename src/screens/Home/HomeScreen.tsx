import { Button } from "@components/Button/Button";
import { Container } from "./StyleScreen";
import { CardStatistics } from "@components/CardStatistics/CardStatistics";

export function HomeScreen(){
  return(
    <Container>
      <CardStatistics/>
      <Button title="Nova refeição" />
    </Container>
  );
}