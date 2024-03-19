import { useNavigation } from "@react-navigation/native";
import { ButtonTypeIconProps, ButtonTypeStyleProps, Container, IconBackButton, TitleStatistics } from "./StyleBackButton";

type Props = {
  type?: ButtonTypeStyleProps;
  icon?: ButtonTypeIconProps;
}

export function BackButton({type = 'SECUNDARY', icon = 'arrow-back'}: Props){
  
  const navigation = useNavigation();


  function handleNavigateToHome(){
    navigation.navigate('home');
  }
  
  return(
    <Container onPress={handleNavigateToHome}>
      <IconBackButton name={icon} type={type}/>
      <TitleStatistics> Nova refeição </TitleStatistics>
    </Container>
  );
}