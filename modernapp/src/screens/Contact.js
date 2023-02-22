import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
const Contact = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [msg, setMsg] = useState([]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContent}>
        <Text style={styles.mainHeader}>Level Up Your Knowledge !</Text>
        <Text style={styles.descContainer}>You can reach us at Anytime</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Your Name</Text>
          <TextInput style={styles.inputStyle}
          value={name}
          onChangeText={(name)=> setName(name)}
            placeholder={"Enter Your Name"}
          // value={""}
          // onChangeText={""}

          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Your Email</Text>
          <TextInput style={styles.inputStyle}
          value={name}
          onChangeText={(name)=> setName(name)}
            placeholder={"demo@example.com"}
          // value={""}
          // onChangeText={""}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Your Mobile Number</Text>
          <TextInput style={styles.inputStyle}
            placeholder={"1234566789"}
          // value={""}
          // onChangeText={""}

          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tell Us About Your Self</Text>
          <TextInput style={[styles.inputStyle, styles.multiLineComment]}
            placeholder={"Enter Your Name"}
          // value={""}
          // onChangeText={""}
          />
        </View>
        <View style={styles.wrapper}>
          <Checkbox 
          // value={}
          // onValueChange={}
          // color={}
          /> 
          <Text style={styles.termStyle}>I have read All T&C</Text>
        </View>
      </View>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white"
  },
  mainContent: {
    marginHorizontal: 30,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "left",
    shadowColor: "grey",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30

  },
  mainHeader: {
    fontSize: 30,
    fontStyle: "italic",
    fontVariant: ["lining-nums"],
    color: "darkgreen",

  },
  descContainer: {
    fontSize: 20,
    fontStyle: "italic",
    fontVariant: ["lining-nums"],
    marginBottom: 30,
    color: "darkolivegreen"
  },
  inputContainer: {
    backgroundColor: "white"
  },
  inputLabel: {
    fontSize: 20,
    fontVariant: ["proportional-nums"],
    fontWeight: "bold",
    marginBottom: 20
  },
  inputStyle: {
    width: "95%",
    borderWidth: 1,
    borderColor: "grey",
    fontSize: 20,
    borderRadius: 33,
    padding: 20
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10
  },
  termStyle: {
    fontSize: 20
  }
})