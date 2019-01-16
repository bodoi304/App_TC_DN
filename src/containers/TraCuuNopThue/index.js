import { createStackNavigator } from 'react-navigation';
import TraCuuTimKiem from '../../components/TraCuuNopThue/TraCuuTimKiem';
import TraCuuKetQua from '../../components/TraCuuNopThue/TraCuuKetQua';
import saga from "./saga";
import reducer from "./reducer";
import {sagaGetTKNoThue} from "./actions";
import {updateIsLoading} from '../../globalReducer/actions'
import injectSaga from "../../utils/injectSaga";
import { connect } from "react-redux";
import { compose } from 'redux';
import { AsyncStorage } from "react-native";


const mapStateToProps = (state) => {
  return {
    isLoading: state.globalReducer.get('isLoading'),
    tkNopThue: state.CameraRollDemo.get('tkNopThue'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
      timKiemTkNopThue: (maDN,soTK) => {
          dispatch(updateIsLoading(true))
          dispatch(sagaGetTKNoThue({
            maDN,
            soTK
          }));
  
      },
  }
}

const withSaga = injectSaga({ key: 'TraCuuNopThue', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const TraCuuTimKiemContainer =  compose(
  withSaga,
  withConnect,
)(TraCuuTimKiem);

const TraCuuKetQuaContainer =  compose(
  withConnect,
)(TraCuuKetQua);

const TraCuuNopThueContainer = createStackNavigator({
  TraCuuTimKiem: TraCuuTimKiemContainer,
  TraCuuKetQua: TraCuuKetQuaContainer
},
{
  navigationOptions: {
    header: null,
  }
});

export default TraCuuNopThueContainer