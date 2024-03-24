import { BackButton } from "@components/BackButton/BackButton";
import { Bottom, Container, Description, Header, HourDate, HourDateTitle, Snack } from "./StyleMealConsultation";
import { Alert, View } from "react-native";
import { Button } from "@components/Button/Button";
import { BadgeSnack } from "@components/BadgeSnack/BadgeSnack";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { SnackDTO } from "@data/Snack/SnackDTO";
import { AppError } from "@utils/AppError";
import { SnackManager } from "@data/Snack/SnackService";

type RootParamList = {
  mealId: string;
}

export function MealConsultantion(){

  const route = useRoute() // consigo pegar params
  const navigation = useNavigation();

  const { mealId } = route.params as RootParamList;

  const [ snack, setSnack ] = useState<SnackDTO>();
  const [ load, setLoad ] = useState<boolean>(false);

  useFocusEffect(useCallback(() => {
    fetchSnack(mealId);
  }, []))

  async function fetchSnack(snackId: string){
    try {
      const snack = await SnackManager.FindSnackById(snackId);
      setSnack(snack);
      setLoad(true);
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert("Refeição", error.getMessage());
        navigation.navigate('home');
      }
    }
  }

  return(
    load && (
      <Container>
        <Header onDiet={snack?.onDiet ? true : false}>
          <BackButton textTitle="Refeição" backgroundType={snack?.onDiet ? 'QUATERNARY' : 'TERTIARY'} type={snack?.onDiet ? 'QUATERNARY' : 'TERTIARY'}/>
        </Header>
        <Bottom>
          <Snack>{snack?.name}</Snack>
          <Description>
            {snack?.description}
          </Description>
          <HourDateTitle>
            Data e hora
          </HourDateTitle>
          <HourDate>
            {snack?.date} às {snack?.hour}
          </HourDate>
          <BadgeSnack onDiet={snack?.onDiet ? true : false}/>
          <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'column', gap: 10, marginBottom: 150}}>
            <Button type="PRIMARY" icon="edit" title="Editar refeição" />
            <Button type="SECUNDARY" icon="restore-from-trash" title="Excluir refeição" />
          </View>
        </Bottom>
      </Container>
    )
  )
}