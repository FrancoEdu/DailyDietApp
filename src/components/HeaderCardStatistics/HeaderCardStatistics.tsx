import { useNavigation } from "@react-navigation/native";
import { ContainerHeader, IconCardStatistics, IconView, PorcentageText } from "./StyleHeaderCardStatistics";
import { Text } from "react-native";

export function HeaderCardStatistics(){

  const navigation = useNavigation();

  function handleNavigateHome(){
    navigation.navigate('home');
  }

  return(
    <ContainerHeader onDiet={true}>
      <IconView onPress={handleNavigateHome}>
        <IconCardStatistics name="arrow-back" onDiet={true}/>
      </IconView>
      <PorcentageText>90,89%</PorcentageText>
      <Text>das refeições dentro da dieta</Text>
    </ContainerHeader>
  )
}