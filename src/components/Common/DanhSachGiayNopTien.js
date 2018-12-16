import React from 'react'
import {  Form, Item,Label,Input ,Accordion,Text} from 'native-base'
import {stylesMain} from "../../Styles/MyStyle";

export default class DanhSachGiayNopTien extends React.Component {
  _renderContent(content) {
        return (

            <Form>
            <Item stackedLabel>
              <Label>
                Mã đơn vị phát hành chứng từ
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.MA_DV_PH_CT}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Tên đơn vị phát hành chứng từ
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.TEN_DV_PH_CT}/>
            </Item>
            <Item stackedLabel>
              <Label>
             Ký hiệu chứng từ
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.KYHIEU_CT}/>
            </Item>
            <Item stackedLabel>
              <Label>
               Số chứng từ
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.SO_CT}/>
            </Item>
            <Item stackedLabel>
              <Label>
               Năm chứng từ 
              </Label>
              <Input disabled style={stylesMain.textInput} value = {'' + content.content.NAM_CT}/>
            </Item>
            <Item stackedLabel>
              <Label>
            Tên loại thuế
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.TEN_LT}/>
            </Item>
            <Item stackedLabel>
              <Label>
             Ngày chứng từ
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.NGAY_CT}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Ngày báo cáo
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.NGAY_BC}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Ngày nhập máy
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.NGAY_NM}/>
            </Item>
            <Item stackedLabel>
              <Label>
            Thuế XK
              </Label>
              <Input disabled style={stylesMain.textInput} value = {'' + content.content.THUE_XK}/>
            </Item>
            <Item stackedLabel>
              <Label>
            Thuế NK
              </Label>
              <Input disabled style={stylesMain.textInput} value = {'' + content.content.THUE_NK}/>
            </Item>
            <Item stackedLabel>
              <Label>
           Thuế XNK
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_XNK}/>
            </Item>
            <Item stackedLabel>
              <Label>
               Thuế VAT
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_VA}/>
            </Item>
            <Item stackedLabel>
              <Label>
            Thuế TV
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_TV}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Thuế TD
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_TD}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Thuế môi trường
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_MT}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Thuế TC
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_TC}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Thuế PB
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_PB}/>
            </Item>
            <Item stackedLabel>
              <Label>
              Thuế KH
              </Label>
              <Input disabled style={stylesMain.textInput} value = {content.content.THUE_KH}/>
            </Item>
          </Form>

        );
      }


  render () {
      let  dataArray = this.props.data.map((value,index) =>{
           return {
             title: 'Giấy nộp tiền ' + value.SO_CT,
             content: value
           }
        })

        return (
          
            <Accordion style={{marginTop: 10}}
            dataArray={dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}>
            </Accordion>
        
        )
      }
    }
  

