import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import {
  Text,
  Form,
  Label
} from "native-base";
import { stylesMain, stylesCommon } from "~/Styles/MyStyle";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

export default class Login {
  constructor(props) {
    super(props);
    this.state = {
      maDN: ""
    }
  }
  constructor(props) {
    super(props);
    const madn = await AsyncStorage.getItem('madn');
    if (madn !== null) {
      this.props.navigation.navigate('Main')
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../../../assets/logo.png")}
              />
              <Text style={styles.title}>ĐĂNG NHẬP</Text>
            </View>
            <View style={styles.infoContainer}>
              <Form>
                <Item floatingLabel >
                  <Label style={stylesMain.labelFloatingLabel}>Mã doanh nghiệp</Label>
                  <Input keyboardType='numeric' onChangeText={(value) => {
                    this.setState({
                      maDN: value
                    })
                  }} style={stylesMain.textInput} />
                </Item>
                <TouchableOpacity disabled={submitting}
                  onPress={this.props.login(this.state.maDN)}
                  style={styles.buttonContainer} >
                  <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
              </Form>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32,53,70)"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 100,
    height: 120
  },
  title: {
    color: "#f7c774",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9,
    marginTop: 10
  },
  infoContainer: {
    flex: 0.9,
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 20
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18
  }
});
