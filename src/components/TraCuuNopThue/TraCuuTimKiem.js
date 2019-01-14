import React from 'react';
import { Container, Content, Form, Item, Button, Icon, Input, Text, Label } from 'native-base';
import { stylesMain, stylesCommon } from "../../Styles/MyStyle";
import { View, AsyncStorage, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from "react-native";
export default class TraCuuTimKiem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maDN: "",
      soTK: ""
    }
    this.maDN
  }

  componentWillMount() {
    var value = AsyncStorage.getItem('madn');
    value.then((e) => {
      this.setState({
        maDN: e
      })

    })

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Form>
            <View style={stylesMain.separator}></View>
            <Item floatingLabel >
              <Label style={stylesMain.labelFloatingLabel}>Mã doanh nghiệp</Label>
              <Input keyboardType='numeric' value={this.state.maDN} onChangeText={(value) => {
                this.setState({
                  maDN: value
                })
              }} style={stylesMain.textInput} />
            </Item>
            <View style={stylesMain.separator}></View>
            <Item floatingLabel  >
              <Label style={stylesMain.labelFloatingLabel}>Số tờ khai</Label>
              <Input keyboardType='numeric' onChangeText={(value) => {
                this.setState({
                  soTK: value
                })
              }} style={stylesMain.textInput} />
            </Item>
            <Container style={stylesCommon.center}>
              <Button style={stylesMain.buttonDistanceTop} primary
                onPress={() => {
                  this.props.timKiemTkNopThue(this.state.maDN, this.state.soTK)
                  this.props.navigation.navigate('TraCuuKetQua')
                }}>
                <Icon ios='ios-search' android='md-search' />
                <Text style={stylesMain.iconButtonText}>Tìm kiếm</Text>
              </Button>
            </Container>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}