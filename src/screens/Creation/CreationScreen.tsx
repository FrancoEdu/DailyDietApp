import { BackButton } from "@components/BackButton/BackButton";
import { Container, DivideMiddleView, SideView, TextInput } from "./StyleCreationScreen";
import { DataInput } from "@components/DataInput/DataInput";
import { SelectedOnDietButton } from "@components/SelectedOnDietButton/SelectedOnDietButton";
import { useCallback, useState } from "react";
import { Button } from "@components/Button/Button";
import { Alert, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { SnackDTO } from "@data/Snack/SnackDTO";
import { Guid } from "guid-ts";
import { SnackManager } from "@data/Snack/SnackService";
import { RootParamList } from "@screens/MealConsultation/MealConsultation";


export function CreationScreen(){

  const route = useRoute() // consigo pegar params
  const navigation = useNavigation();

  const { mealId } = route.params as RootParamList;

  const [ snack, setSnack ] = useState<SnackDTO>();

  const [isOnDiet, setIsOnDiet] = useState<boolean | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [hour, setHour] = useState<string>('');

  const handleOnDietButtonClick = (isOnDiet: boolean) => {
    setIsOnDiet(isOnDiet);
  };

  useFocusEffect(useCallback(() => {
    if(mealId){
      fetchSnack(mealId);
    }
  }, []));

  async function fetchSnack(snackId: string){
    try {
      const snack = await SnackManager.FindSnackById(snackId);
      setSnack(snack);
      setIsOnDiet(snack.onDiet);
      setDate(snack.date);
      setHour(snack.hour);
      setName(snack.name);
      setDescription(snack.description);
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert("Refeição", error.getMessage());
        navigation.navigate('home');
      }
    }
  }

  async function handleNavigateToFeedback(): Promise<void>{
    try {
      if(isOnDiet === undefined || 
        name.trim().length <= 0 || 
        description.trim().length <= 0 ||
        date.trim().length <= 0 ||
        hour.trim().length <= 0
        ){
        Alert.alert("Nova refeição", "Responda todas as perguntas para seguir..")
        return;
      }
      const newSnack: SnackDTO = {
        id: mealId ? mealId : Guid.newGuid().toString(),
        name: name,
        description: description,
        date: date,
        hour: hour,
        onDiet: isOnDiet
      }
      mealId ? await SnackManager.EditSnack(newSnack) : await SnackManager.CreateNewSnack(newSnack);
      navigation.navigate('feedback', {onDiet: isOnDiet});
    } catch (error) {
      if(error instanceof AppError){ 
        Alert.alert("Nova refeição", error.getMessage())
        return;
      }
    }
  }

  return(
    <Container>
      <BackButton textTitle={snack ? "Editar refeição" : "Nova refeição"}/>
      <TextInput>Nome</TextInput>
      <DataInput onChangeText={setName} value={snack ? snack.name : ''}/>
      <TextInput>Descrição</TextInput>
      <DataInput onChangeText={setDescription} value={snack ? snack.description : ''}/>
      <DivideMiddleView>
        <SideView>
          <TextInput>Data</TextInput>
          <DataInput maxLength={10} keyboardType="numbers-and-punctuation" onChangeText={setDate} value={snack ? snack.date : ''}/>
        </SideView>
        <SideView>
          <TextInput>Hora</TextInput>
          <DataInput maxLength={5} keyboardType="numbers-and-punctuation" onChangeText={setHour} value={snack ? snack.hour : ''}/>
        </SideView>
      </DivideMiddleView>
      <TextInput>Está dentro da dieta?</TextInput>
      <DivideMiddleView>
        <SideView>
          <SelectedOnDietButton selected={isOnDiet === true} text="Sim" onDiet={true} onPress={() => handleOnDietButtonClick(true)}/>
        </SideView>
        <SideView>
          <SelectedOnDietButton selected={isOnDiet === false} text="Não" onDiet={false} onPress={() => handleOnDietButtonClick(false)}/>
        </SideView>
      </DivideMiddleView>
      <View style={{ flex: 1, justifyContent: 'flex-end'}}>
        <Button title={snack ? "Editar refeição" : "Cadastrar nova refeição"} onPress={handleNavigateToFeedback}/>
      </View>
    </Container>
  );
}