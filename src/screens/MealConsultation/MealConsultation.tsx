import { BackButton } from "@components/BackButton/BackButton";
import { Container, Header } from "./StyleMealConsultation";



export function MealConsultantion(){
  return(
    <Container>
      <Header onDiet={false}>
        <BackButton textTitle="Refeição" backgroundType="TERTIARY" type="TERTIARY"/>
      </Header>
      
    </Container>
  )
}