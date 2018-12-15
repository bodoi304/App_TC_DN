import React from 'react';
import { Container, Spinner, ListItem, Content, Text, Button, Icon, Title,  Separator,Thumbnail } from 'native-base';
import {stylesMain,stylesCommon} from "../../Styles/MyStyle";
import ToastEx from "../Common/ToastEx";
export default class TraCuuKetQua extends React.Component {
  
    render() {
      if (this.props.isLoading) {
        return (
        <Container>
        <Spinner color='blue' />
        </Container>
        )
      }
      else
      {
      if (this.props.tkNopThue === undefined) {
        return (
          <Container>
       <Button  transparent onPress={() => {this.props.navigation.navigate('TraCuuTimKiem')}}>
          <Icon ios='ios-arrow-back' android='md-arrow-back' />
          <Text style={stylesMain.iconButtonText}>Quay lại</Text>
      </Button>
          <Text>Không tìm thấy kết quả</Text>
          </Container>
        )
      }
      else{
      return (
        <Container>
        <Content>
        <Button  transparent onPress={() => {this.props.navigation.navigate('TraCuuTimKiem')}}>
            <Icon ios='ios-arrow-back' android='md-arrow-back' />
            <Text style={stylesMain.iconButtonText}>Quay lại</Text>
        </Button>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>{this.props.tkNopThue.maDN}</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>
        </Content>
      </Container>
      );
    }
    }
  }
  }