import { useNavigation } from "@react-navigation/native";
import { ContainerHeader, IconCardStatistics, IconView, PorcentageText } from "./StyleHeaderCardStatistics";
import { Text } from "react-native";

type Props = {
  percentage: number;
}

export function HeaderCardStatistics(props: Props){

  const navigation = useNavigation();

  function handleNavigateHome(){
    navigation.navigate('home');
  }

  return(
    <ContainerHeader onDiet={ props.percentage < 50 ? false : true }>
      <IconView onPress={handleNavigateHome}>
        <IconCardStatistics name="arrow-back" onDiet={ props.percentage < 50 ? false : true }/>
      </IconView>
      <PorcentageText>{props.percentage.toFixed(2)}%</PorcentageText>
      <Text>das refeições dentro da dieta</Text>
    </ContainerHeader>
  )
}