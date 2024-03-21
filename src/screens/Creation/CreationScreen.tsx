import { BackButton } from "@components/BackButton/BackButton";
import { Container, DivideMiddleView, SideView, TextInput } from "./StyleCreationScreen";
import { DataInput } from "@components/DataInput/DataInput";
import { SelectedOnDietButton } from "@components/SelectedOnDietButton/SelectedOnDietButton";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import { View } from "react-native";


export function CreationScreen(){
  const [isOnDiet, setIsOnDiet] = useState<boolean | undefined>(undefined);

  const handleOnDietButtonClick = (isOnDiet: boolean) => {
    setIsOnDiet(isOnDiet);
  };

  return(
    <Container>
      <BackButton/>
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
        <Button title="Cadastrar nova refeição"/>
      </View>
    </Container>
  );
}