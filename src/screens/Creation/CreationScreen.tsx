import { BackButton } from "@components/BackButton/BackButton";
import { Container, DivideMiddleView, SideView, TextInput } from "./StyleCreationScreen";
import { DataInput } from "@components/DataInput/DataInput";
import { SelectedOnDietButton } from "@components/SelectedOnDietButton/SelectedOnDietButton";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { SnackDTO } from "@data/Snack/SnackDTO";
import { Guid } from "guid-ts";
import { SnackManager } from "@data/Snack/SnackService";


export function CreationScreen(){

  const navigation = useNavigation();

  const [isOnDiet, setIsOnDiet] = useState<boolean | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [hour, setHour] = useState<string>('');

  const handleOnDietButtonClick = (isOnDiet: boolean) => {
    setIsOnDiet(isOnDiet);
  };

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
        id: Guid.newGuid().toString(),
        name: name,
        description: description,
        date: date,
        hour: hour,
        onDiet: isOnDiet
      }
      await SnackManager.CreateNewSnack(newSnack);
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
      <BackButton textTitle="Nova refeição"/>
      <TextInput>Nome</TextInput>
      <DataInput onChangeText={setName}/>
      <TextInput>Descrição</TextInput>
      <DataInput onChangeText={setDescription}/>
      <DivideMiddleView>
        <SideView>
          <TextInput>Data</TextInput>
          <DataInput maxLength={10} keyboardType="numbers-and-punctuation" onChangeText={setDate}/>
        </SideView>
        <SideView>
          <TextInput>Hora</TextInput>
          <DataInput maxLength={5} keyboardType="numbers-and-punctuation" onChangeText={setHour}/>
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
        <Button title="Cadastrar nova refeição" onPress={handleNavigateToFeedback}/>
      </View>
    </Container>
  );
}