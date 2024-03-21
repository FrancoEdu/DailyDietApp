import { BackButton } from "@components/BackButton/BackButton";
import { Container, DivideMiddleView, SideView, TextInput } from "./StyleCreationScreen";
import { DataInput } from "@components/DataInput/DataInput";
import { SelectedOnDietButton } from "@components/SelectedOnDietButton/SelectedOnDietButton";

export function CreationScreen(){

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
          <SelectedOnDietButton selected={false} text="Sim" onDiet={true}/>
        </SideView>
        <SideView>
          <SelectedOnDietButton selected={false} text="Não" onDiet={false}/>
        </SideView>
      </DivideMiddleView>
    </Container>
  );
}