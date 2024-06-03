import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { UserContext } from "../context/UserProvider";

const hardcodedUsers = [
  { email: "Raghd@example.com", password: "password123", nickName: "TestUser" },
  { email: "Emre@example.com", password: "Emre123", nickName: "Karatas" },
];

export default function Login() {
  const { user, logIn } = useContext(UserContext);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (emailInputValue && passwordInputValue) {
      const user = hardcodedUsers.find(
        (user) => user.email === emailInputValue
      );

      if (user) {
        if (user.password === passwordInputValue) {
          logIn(user.nickName, user.password);
        } else {
          setError("Incorrect password");
        }
      } else {
        setError("User not found");
      }
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <Text>Welcome back, {user}! Enjoy your shopping!</Text>
      ) : (
        <>
          <Text>Nice to see you again!</Text>

          <View style={styles.login_form}>
            <View style={styles.form_item}>
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                onChangeText={(text) => setEmailInputValue(text)}
                value={emailInputValue}
              />
            </View>

            <View style={styles.form_item}>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPasswordInputValue(text)}
                value={passwordInputValue}
              />
            </View>

            <Button onPress={handleSubmit} title="Submit" />
            {error ? <Text style={styles.error}>{error}</Text> : null}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  login_form: {
    width: "100%",
    marginTop: 20,
  },
  form_item: {
    marginBottom: 15,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
