import { BackButton } from "@components/BackButton/BackButton";
import { Bottom, Container, Description, Header, HourDate, HourDateTitle, Snack } from "./StyleMealConsultation";
import { View } from "react-native";
import { Button } from "@components/Button/Button";

export function MealConsultantion(){
  return(
    <Container>
      <Header onDiet={false}>
        <BackButton textTitle="Refeição" backgroundType="TERTIARY" type="TERTIARY"/>
      </Header>
      <Bottom>
        <Snack>X-TUDO</Snack>
        <Description>
          Xis completo da lancheria do bairro
        </Description>
        <HourDateTitle>
          Data e hora
        </HourDateTitle>
        <HourDate>
          21/03/2024 às 20:00
        </HourDate>
        <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'column', gap: 10, marginBottom: 150}}>
          <Button type="PRIMARY" icon="edit" title="Editar refeição" />
          <Button type="SECUNDARY" icon="restore-from-trash" title="Excluir refeição" />
        </View>
      </Bottom>
    </Container>
  )
}