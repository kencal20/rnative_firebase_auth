import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { FIREBASE_AUTH} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const auth = FIREBASE_AUTH;
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth,email, password);
      console.log(response);
      alert('account registered')
    } catch (error) {
        console.log(error);
        alert('SignIN failed:' + error.message)
    }finally{
        setLoading(false)
    }
  };
handleSignup= async()=>{
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth,email, password);
      console.log(response);
      alert('check your email')
    } catch (error) {
        console.log(error);
        alert('SignIN failed:' + error.message)
    }finally{
        setLoading(false)
    }
}
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#000ff" />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={handleSignup}
          >
            <Text style={[styles.buttonText, styles.buttonOutlineText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    height: 70,
    marginBottom: "4%",
    fontSize: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "dodgerblue",
    width: "100%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonOutline: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "dodgerblue",
    marginTop: 5,
  },
  buttonOutlineText: {
    color: "dodgerblue",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
