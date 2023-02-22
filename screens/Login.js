import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>My App</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#707070"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry={hidePassword}
          placeholder="Password"
          placeholderTextColor="#707070"
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={toggleHidePassword}>
          <Feather
            name={hidePassword ? "eye-off" : "eye"}
            size={18}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("GameOT")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    marginBottom: 40,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#707070",
    marginBottom: 20,
    paddingLeft: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    marginTop: 10,
  },
  forgotPasswordButton: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    marginLeft: "50%",
    marginTop: 8,
  },
  signInButton: {
    width: "80%",
    backgroundColor: "#FFD482",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signInText: {
    color: "#2a2a2a",
    fontSize: 20,
    fontWeight: "bold",
  },
  signUpView: {
    flexDirection: "row",
    marginBottom: 30,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
  },
  signUpLink: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
