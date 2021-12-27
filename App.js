import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { setLocale } from "yup";
import Screen from "./app/components/Screen";
import Bacheca from "./app/screens/Bacheha";
import LoginScreen from "./app/screens/LoginScreen";
import PaginaCreazioneBC from "./app/screens/PaginaCreazione";
import ProfilePage from "./app/screens/ProfilePage";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  // FIXME: far funzionare questo
  setLocale({
    mixed: {
      required: 'Inserisci questo campo',
    },
    string: {
      email: 'Devi inserire un indirizzo e-mail valido',
    },
    number: {
      min: 'Inserisci minimo ${min}',
      max: 'Inserisci massimo ${min}',
    },
  });
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}

//Per ProfilePage è necessario dare dei valori da passare al component

const styles = StyleSheet.create({});
