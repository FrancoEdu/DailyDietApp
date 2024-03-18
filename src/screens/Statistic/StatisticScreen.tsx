import { HeaderCardStatistics } from "@components/HeaderCardStatistics/HeaderCardStatistics";
import { Container } from "./StyleStatisticsScreen";
import { BodyCardStatistics } from "@components/BodyCardStatistics/BodyCardStatistics";
import { CardIfoStatistics } from "@components/CardInfoStatistics/CardInfoStatistics";


export function StatisticScreen(){
  return(
    <Container>
      <HeaderCardStatistics/>
      <BodyCardStatistics/>
    </Container>
  );
}