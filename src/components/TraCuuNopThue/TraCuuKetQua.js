import React from 'react'
import { Container, Spinner, Thumbnail, Text, Button, Icon, Tab, Tabs, ScrollableTab } from 'native-base'
import { stylesMain, stylesCommon } from '../../Styles/MyStyle'
import ThongTinToKhai from '../Common/ThongTinToKhai'
import DanhSachGiayNopTien from '../Common/DanhSachGiayNopTien'

export default class TraCuuKetQua extends React.Component {

  render () {
    let tkNopThue = this.props.tkNopThue
    if (this.props.isLoading) {
      return (
        <Container>
          <Spinner color='blue' />
        </Container>
      )
    }else {
      if (tkNopThue.ThongBaoLoi === '1') {
        return (
          <Container>
            <Button transparent onPress={() => {
                                           this.props.navigation.navigate('TraCuuTimKiem')}}>
              <Icon ios='ios-arrow-back' android='md-arrow-back' />
              <Text style={stylesMain.iconButtonText}>
                Quay lại
              </Text>
            </Button>
            <Thumbnail square style={{width:300, height:180}}  source={require("../../../assets/images/matketnoi.png")} />
          </Container>
        )
      }
      else if (tkNopThue.ThongBaoLoi !== '') {
        return (
          <Container>
            <Button transparent onPress={() => {
                                           this.props.navigation.navigate('TraCuuTimKiem')}}>
              <Icon ios='ios-arrow-back' android='md-arrow-back' />
              <Text style={stylesMain.iconButtonText}>
                Quay lại
              </Text>
            </Button>
             <Thumbnail square  style={{width:200, height:200}}   source={require("../../../assets/images/notsearch.png")} />
          </Container>
        )
      }else {
        return (
          <Container>
              <Button transparent onPress={() => {
                                             this.props.navigation.navigate('TraCuuTimKiem')}}>
                <Icon ios='ios-arrow-back' android='md-arrow-back' />
                <Text style={stylesMain.iconButtonText}>
                  Quay lại
                </Text>
              </Button>
              <Tabs renderTabBar={() => <ScrollableTab />}>
                <Tab heading='Thông tin tờ khai'>
                  <ThongTinToKhai data={tkNopThue}></ThongTinToKhai>
                </Tab>
                <Tab heading='Danh sách giấy nộp tiền'>
                  <DanhSachGiayNopTien data={tkNopThue.DanhSachGiayNopTien} ></DanhSachGiayNopTien>
                </Tab>
              </Tabs>
          </Container>
        )
      }
    }
  }
}
