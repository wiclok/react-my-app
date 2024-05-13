import React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from '@react-navigation/native';

export const LoginScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [users, setUsers] = useState([
    {
      name: "Brian",
      lastName: "Cespedes",
      userName: "wiclok",
      email: "cespedes.aguilera.brian@gmail.com",
      password: "123456789",
    },
    {
      name: "Rodrigo",
      lastName: "Veron",
      userName: "Rodriasd",
      email: "veronrodrigo89@gmail.com",
      password: "987654321",
    },
    {
      name: "Eric",
      lastName: "Mercado",
      userName: "EricWithC",
      email: "negativegame117@gmail.com",
      password: "123454321",
    },
    {
      name: "Miqueas",
      lastName: "Avalos",
      userName: "MrTex09",
      email: "miqueasavalos2004@gmail.com",
      password: "6789876",
    },
  ]);

  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");

  const handleLogin = ()=>{
    const user = users.find(
      (user) => user.email == textEmail && user.password == textPassword
    );
    if (user) {
      navigation.navigate('InfoUser')
    } else {
      alert('error en el inicio de sesion')
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setTextEmail}
          value={textEmail}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTextPassword}
          value={textPassword}
          placeholder="Password"
        />
        <Button
          style={styles.Button}
          title="Iniciar Sesión"
          color="#841584"
          onPress={handleLogin}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});