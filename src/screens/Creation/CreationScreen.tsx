import { BackButton } from "@components/BackButton/BackButton";
import { Container, DivideMiddleView, SideView, TextInput } from "./StyleCreationScreen";
import { DataInput } from "@components/DataInput/DataInput";
import { SelectedOnDietButton } from "@components/SelectedOnDietButton/SelectedOnDietButton";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function CreationScreen(){

  const navigation = useNavigation();

  const [isOnDiet, setIsOnDiet] = useState<boolean | undefined>(undefined);

  const handleOnDietButtonClick = (isOnDiet: boolean) => {
    setIsOnDiet(isOnDiet);
  };

  function handleNavigateToFeedback(): void{
    if(isOnDiet !== undefined){
      navigation.navigate('feedback', {onDiet: isOnDiet});
      return;
    }
    Alert.alert("Dieta", "Selecione se você está na dieta ou não")
  }

  return(
    <Container>
      <BackButton textTitle="Nova refeição"/>
      <TextInput>Nome</TextInput>
      <DataInput/>
      <TextInput>Descrição</TextInput>
      <DataInput/>
      <DivideMiddleView>
        <SideView>
          <TextInput>Data</TextInput>
          <DataInput maxLength={10} keyboardType="numbers-and-punctuation"/>
        </SideView>
        <SideView>
          <TextInput>Hora</TextInput>
          <DataInput maxLength={5} keyboardType="numbers-and-punctuation"/>
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