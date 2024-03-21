import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreationScreen } from "@screens/Creation/CreationScreen";
import { FeedbackScreen } from "@screens/Feedback/FeedbackScreen";
import { HomeScreen } from "@screens/Home/HomeScreen";
import { MealConsultantion } from "@screens/MealConsultation/MealConsultation";
import { StatisticScreen } from "@screens/Statistic/StatisticScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
      <Screen name="home" component={HomeScreen}/>
      <Screen name="statistic" component={StatisticScreen}/>
      <Screen name="creation" component={CreationScreen}/>
      <Screen name="feedback" component={FeedbackScreen}/>
      <Screen name="meal" component={MealConsultantion}/>
    </Navigator>
  )
}