import { useNavigation } from "@react-navigation/native";
import { ButtonTypeIconProps, ButtonTypeStyleProps, Container, IconBackButton, TitleStatistics } from "./StyleBackButton";

type Props = {
  backgroundType?: ButtonTypeStyleProps;
  type?: ButtonTypeStyleProps;
  icon?: ButtonTypeIconProps;
  textTitle: string;
}

export function BackButton({type = 'SECUNDARY', icon = 'arrow-back', backgroundType = 'PRIMARY', textTitle}: Props){
  
  const navigation = useNavigation();


  function handleNavigateToHome(){
    navigation.navigate('home');
  }
  
  return(
    <Container type={backgroundType} onPress={handleNavigateToHome}>
      <IconBackButton name={icon} type={type}/>
      <TitleStatistics> {textTitle} </TitleStatistics>
    </Container>
  );
}