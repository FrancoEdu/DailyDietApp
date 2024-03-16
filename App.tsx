import { Loading } from "@components/Loading";
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/Index";
import { StatusBar } from "react-native";
import theme from 'src/theme';
import {ThemeProvider} from 'styled-components'

export default function App() {

  // Lógica de carregamento da font, isso é assincrono.
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
      />
      { fontsLoaded ? <Routes/> : <Loading/> }
    </ThemeProvider>
  );
}
