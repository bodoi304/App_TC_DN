import React from 'react'
import { Container, Spinner, Text} from 'native-base'
export default class CameraRollDemoResult extends React.Component {

  render () {
    let extracTextFromCamera = this.props.extracTextFromCamera

    if (this.props.isLoading) {
      return (
        <Container>
          <Spinner color='blue' />
        </Container>
      )
    }else {
        return (
          <Container>
                <Text style={{padding:15}}>
                 {extracTextFromCamera}
                </Text>
          </Container>
        )
      }
    }
  }

