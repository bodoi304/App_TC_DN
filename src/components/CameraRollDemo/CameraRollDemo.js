import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraRollDemo extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({base64:'true' });
      var base64 = require('base-64');
     let bytes= base64.decode(photo.base64)
      console.log('bam xong')
      this.props.extracTextFromImage(bytes)
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={ () => {
                  console.log('bam ne')
                  this.snap()
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' } }>
                  {' '}Snap{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

