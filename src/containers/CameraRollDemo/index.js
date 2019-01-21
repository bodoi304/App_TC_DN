import { createStackNavigator } from 'react-navigation';
import CameraRollDemo from '../../components/CameraRollDemo/CameraRollDemo';
import CameraRollDemoResult from '../../components/CameraRollDemo/CameraRollDemoResult';
import saga from "./saga";
import {sagaExtracTextFromImage} from './actions'
import injectSaga from "../../utils/injectSaga";
import { connect } from "react-redux";
import { compose } from 'redux';
import {updateIsLoading} from '../../globalReducer/actions'


const mapStateToProps = (state) => {
  return {
    isLoading: state.globalReducer.get('isLoading'),
    extracTextFromCamera: state.CameraRollDemo.get('extracTextFromCamera'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
      extracTextFromImage: (byteArray) => {
          dispatch(updateIsLoading(true))
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

const CameraRollDemoResultContainer =  compose(
  withConnect,
)(CameraRollDemoResult);

const CameraContainer = createStackNavigator({
  CameraRollDemo: CameraRollDemoContainer,
  CameraRollDemoResult: CameraRollDemoResultContainer
},
{
  navigationOptions: {
    header: null,
  }
});

export default CameraContainer