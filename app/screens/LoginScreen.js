import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { SubmitButton, AppFormField } from "../components/forms";
import { Formik } from "formik";
import * as Yup from "yup";
import useAccountService from "../services/AccountService";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {

  const { login } = useAccountService();
  const [errMsg, setErrMsg] = useState(undefined);

  const loginAction = useCallback(({ email, password }) => {
    login(email, password).then((ok) => {
      if (ok) {
        setErrMsg(undefined);
        // TODO: vai a bacheca
      } else {
        // TODO: mostra messaggio di errore
      }
    }).catch((err) => {
      console.error(err);
      // TODO: mostra messaggio di errore
    })
  }, []);

  return (
    <Screen styleChildren={styles.container}>
      <Image style={styles.logo} source={require("../assets/BCLogo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={loginAction}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              iconName="email"
              name="email"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              iconName="lock"
              name="password"
              secureTextEntry={true}
            />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
      {errMsg && <span>{errMsg}</span>}
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
