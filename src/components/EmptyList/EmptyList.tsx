import { Container, TextEmptyList } from "./StyleEmptyList";

type Props = {
  message: string;
}

export function EmptyList({message} : Props){
  return(
    <Container>
      <TextEmptyList>{message}</TextEmptyList>
    </Container>
  );
}