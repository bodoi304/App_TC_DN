import React from 'react';
import { Container, Content, Form, Item, Button, Icon, Input,  Text,Label } from 'native-base';
import {stylesMain,stylesCommon} from "../../Styles/MyStyle";

export default class TraCuuTimKiem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      maDN: "",
      soTK: ""
    }
}
    render() {
      return (
        <Container>
        <Content>
          <Form>
          <Container style={stylesMain.separator}></Container>
            <Item floatingLabel >
            <Label style={stylesMain.labelFloatingLabel}>Mã doanh nghiệp</Label>
            <Input  onChangeText={(value) => { this.setState({
                maDN: value
            })}} style={stylesMain.textInput} />
            </Item>
            <Container style={stylesMain.separator}></Container>
            <Item floatingLabel  >
            <Label style={stylesMain.labelFloatingLabel}>Số tờ khai</Label>
            <Input onChangeText={(value) => { this.setState({
                soTK: value
            })}} style={stylesMain.textInput} />
            </Item>
            <Container style={stylesCommon.center}>
            <Button style={stylesMain.buttonDistanceTop}  primary 
            onPress={() => {
              this.props.timKiemTkNopThue(this.state.maDN,this.state.soTK)
              this.props.navigation.navigate('TraCuuKetQua')
              }}>
            <Icon ios='ios-search' android='md-search'/>
            <Text style={stylesMain.iconButtonText}>Tìm kiếm</Text>
          </Button>
          </Container>

          </Form>
        </Content>
      </Container>
       
      );
    }
  }