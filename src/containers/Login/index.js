import { createStackNavigator } from 'react-navigation';
import TraCuuTimKiem from '../../components/TraCuuNopThue/TraCuuTimKiem';
import TraCuuKetQua from '../../components/TraCuuNopThue/TraCuuKetQua';
import saga from "./saga";
import {updateIsLoading} from '../../globalReducer/action'
import {sagaUpdateCurrentUser} from '../../globalReducer/action'
import injectSaga from "../../utils/injectSaga";
import { connect } from "react-redux";
import { compose } from 'redux';
import Login from '../../components/Login'
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      login: (maDN) => {
          dispatch(updateIsLoading(true))
          dispatch(sagaUpdateCurrentUser({
            maDN
          }));
  
      },
  }
}

const withSaga = injectSaga({ key: 'Login', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const LoginContainer =  compose(
  withSaga,
  withConnect,
)(Login);

export default LoginContainer