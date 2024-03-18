import { ContainerHeader, IconCardStatistics, IconView, PorcentageText } from "./StyleHeaderCardStatistics";
import { Text } from "react-native";

export function HeaderCardStatistics(){
  return(
    <ContainerHeader onDiet={true}>
      <IconView>
        <IconCardStatistics name="arrow-back" onDiet={true}/>
      </IconView>
      <PorcentageText>90,89%</PorcentageText>
      <Text>das refeições dentro da dieta</Text>
    </ContainerHeader>
  )
}