import { HeaderCardStatistics } from "@components/HeaderCardStatistics/HeaderCardStatistics";
import { Container } from "./StyleStatisticsScreen";
import { BodyCardStatistics } from "@components/BodyCardStatistics/BodyCardStatistics";


export function StatisticScreen(){
  return(
    <Container>
      <HeaderCardStatistics/>
      <BodyCardStatistics/>
    </Container>
  );
}