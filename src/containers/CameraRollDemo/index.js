import { createStackNavigator } from 'react-navigation';
import CameraRollDemo from '../../components/CameraRollDemo/CameraRollDemo';
import saga from "./saga";
import reducer from "./reducer";
import {sagaGetTKNoThue} from "./actions";
import {sagaExtracTextFromImage} from './actions'
import injectSaga from "../../utils/injectSaga";
import { connect } from "react-redux";
import { compose } from 'redux';
import { AsyncStorage } from "react-native";


const mapStateToProps = (state) => {
  return {
    isLoading: state.globalReducer.get('isLoading'),
    extracTextFromCamera: state.CameraRollDemo.get('extracTextFromCamera'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
      extracTextFromImage: (byteArray) => {
          dispatch(sagaExtracTextFromImage(byteArray))  
      },
  }
}

const withSaga = injectSaga({ key: 'CameraRollDemo', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const CameraRollDemoContainer =  compose(
  withSaga,
  withConnect,
)(CameraRollDemo);


const CameraContainer = createStackNavigator({
  CameraRollDemo: CameraRollDemoContainer
},
{
  navigationOptions: {
    header: null,
  }
});

export default CameraContainer