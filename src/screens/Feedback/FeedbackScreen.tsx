import { Container, Logo, SubTitle, Title } from "./StyleFeedBackScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import positiveDiet from "@assets/positiveDiet.png"
import negativeDiet from "@assets/negaiveDiet.png"
import { Button } from "@components/Button/Button";
import { View } from "react-native";

export type RouteParamFeedback = {
  onDiet: boolean;
}

export function FeedbackScreen(){

  const route = useRoute();
  const navigation = useNavigation();

  const { onDiet } = route.params as RouteParamFeedback;

  function handleNavigateToHome(): void{
    navigation.navigate('home');
  }

  return(
    <Container>
      <Title onDiet={onDiet}>{onDiet ? "Continue assim!" : "Que pena!"}</Title>
      <SubTitle>
        {
          onDiet ? 
          "Você continua dentro da dieta. Muito bem!" : 
          "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        }
      </SubTitle>
      <Logo source={onDiet ? positiveDiet : negativeDiet}/>
      <Button title="Ir para a página inicial" onPress={handleNavigateToHome}/>
    </Container>
  );
}