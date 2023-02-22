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

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const [passwordValidations, setPasswordValidations] = useState({
    lowercase: false,
    uppercase: false,
    length: false,
    number: false,
  });

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordValidations({
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      length: value.length >= 8,
      number: /\d/.test(value),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>My App</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#707070"
          onChangeText={setName}
        />
      </View>
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
          onChangeText={(value) => handlePasswordChange}
        />
        <TouchableOpacity onPress={toggleHidePassword}>
          <Feather
            name={hidePassword ? "eye-off" : "eye"}
            size={18}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry={hidePassword}
          placeholder="Confirm Password"
          placeholderTextColor="#707070"
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={toggleHidePassword}>
          <Feather
            name={hidePassword ? "eye-off" : "eye"}
            size={18}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          {passwordValidations.lowercase ? "✅" : "❌"} One lowercase character
        </Text>
        <Text>
          {passwordValidations.uppercase ? "✅" : "❌"} One uppercase character
        </Text>
        <Text>
          {passwordValidations.length ? "✅" : "❌"} 8 characters minimum
        </Text>
        <Text>{passwordValidations.number ? "✅" : "❌"} One number</Text>
      </View>

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={(value) => setConfirmPassword(value)}
      />

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>Have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign In</Text>
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
