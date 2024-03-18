import { Container, HeaderCardStatistics, IconCardStatistics, PorcentageText } from "./StyleCardStatistics";
import { CardStatisticsProp } from "./shared/CardStatisticsProps";
import { Text } from "react-native";

export function CardStatistics({type = 'PRIMARY', ...rest} : CardStatisticsProp){
  return(
    <Container type={type}>
      <HeaderCardStatistics {...rest}>
          <IconCardStatistics name="arrow-outward" type={type}/>
      </HeaderCardStatistics>
      <PorcentageText>90,86%</PorcentageText>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}