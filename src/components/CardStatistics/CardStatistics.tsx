import { Container, HeaderCardStatistics, IconCardStatistics, PorcentageText } from "./StyleCardStatistics";
import { CardStatisticsProp } from "./shared/CardStatisticsProps";
import { Text } from "react-native";

export function CardStatistics({percentage, type = 'PRIMARY', ...rest} : CardStatisticsProp){
  return(
    <Container type={percentage < 50 ? 'SECUNDARY' : 'PRIMARY'}>
      <HeaderCardStatistics {...rest}>
          <IconCardStatistics name="arrow-outward" type={percentage < 50 ? 'SECUNDARY' : 'PRIMARY'}/>
      </HeaderCardStatistics>
      <PorcentageText>{percentage.toFixed(2)}%</PorcentageText>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}