import React from 'react'
import {  Form, Item,Label,Input,Content } from 'native-base'
import {stylesMain} from '../../Styles/MyStyle';

export default class ThongTinToKhai extends React.Component {

  render () {
        return (
          <Content>
              <Form>
                <Item stackedLabel>
                  <Label>
                    Số tờ khai
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.SoToKhai}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                   Loại hình
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.LoaiHinh}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                  Ngày tờ khai
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.NgayToKhai}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                   Mã hải quan
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.MaHaiQuan}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                   Tên hải quan
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.TenHaiQuan}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                   Mã doanh nghiệp
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.MaDoanhNghiep}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                   Tên doanh nghiệp
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.TenDoanhNghiep}/>
                </Item>
                <Item stackedLabel>
                  <Label>
                   Tên trạng thái nợ
                  </Label>
                  <Input disabled style={stylesMain.textInput} value = {this.props.data.TenTrangThaiNo}/>
                </Item>
              </Form>
              </Content>
        )
      }
    }
  

