import { createStackNavigator } from 'react-navigation';
import TraCuuTimKiem from '../../components/TraCuuNopThue/TraCuuTimKiem';
import TraCuuKetQua from '../../components/TraCuuNopThue/TraCuuKetQua';
import {updateIsLoading} from '../../globalReducer/actions'
import {sagaUpdateCurrentUser} from './actions'
import { connect } from "react-redux";
import { compose } from 'redux';
import Login from '../../components/Login/Login'
import saga from './saga'
import injectSaga from "../../utils/injectSaga";
const mapStateToProps = (state) => {
  console.log('login' + JSON.stringify(state))
  return {
    maDN: state.globalReducer.get('currentUser') !== null ?  state.globalReducer.get('currentUser').maDN : null,
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