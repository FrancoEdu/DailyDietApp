import { BackButton } from "@components/BackButton/BackButton";
import { Container, TextInput } from "./StyleCreationScreen";
import { DataInput } from "@components/DataInput/DataInput";

export function CreationScreen(){
  return(
    <Container>
      <BackButton/>
      <TextInput>Nome</TextInput>
      <DataInput/>
    </Container>
  );
}