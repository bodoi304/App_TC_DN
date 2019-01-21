import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Thumbnail } from 'native-base'
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
      let photo = await this.camera.takePictureAsync();
      this.props.extracTextFromImage(photo.uri)
      this.props.navigation.navigate('CameraRollDemoResult')
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
          <Camera style={{ flex: 1,flexDirection: 'row', }} type={this.state.type} autoFocus='on' ref={ref => { this.camera = ref; }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={ () => {
                  this.snap()
                }}>
               <Thumbnail square style={{width: 90, height: 90}} source={require("../../../assets/images/Record-512.png")} />
  
              </TouchableOpacity>

          </Camera>
        </View>
      );
    }
  }
}

