import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emil: "",
      password: ""


    }
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Username"/>
          <TextInput/>
        </View>

        <View>
          <TextInput
            style={styles.inputEmail}
            placeholderTextColor="#aaaaaa"
            placeholder="Email" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password" />
          {/* <Text style={styles.forgotPassword}>Forgot password?</Text> */}

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password again" />
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>You already have account?</Text>
          <Text style={styles.signupupText}>Log in</Text>
        </View>

      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop:40,
    marginHorizontal: 50,

  },
  loginText: {
    fontSize: 50,
    color: "#5100ad"

  },

  loginTextContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop:20
  },

  inputEmail:{
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop:-10
  },

  forgotPassword:{
    alignSelf:"flex-end",
    marginVertical:3,
    color:'blue'
  },

  buttonContainer:{
    height:50,
    backgroundColor:"#5100ad",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginVertical:50
  },

  buttonText:{
    color:"white",
    fontSize:25,

  },

  noAccountContainer:{
    flexDirection:"row",
    justifyContent:"center"
  },

  noAccountText:{
    marginRight:10,
    fontSize:16

  },

  signupupText:{
    fontSize:16,
    color:"#5100ad"
  }
})


export default App;

