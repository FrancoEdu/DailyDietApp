import { AccountImage, Container, LogoImage } from "./StyleAccountHeader";
import Logo from "@assets/Logo.png"
import Ellipse from "@assets/Ellipse.png"

export function AccountHeader(){
  return(
    <Container>
      <LogoImage source={Logo}/>
      <AccountImage source={Ellipse}/>
    </Container>
  );
}