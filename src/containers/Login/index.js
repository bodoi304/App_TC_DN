import { createStackNavigator } from 'react-navigation';
import TraCuuTimKiem from '../../components/TraCuuNopThue/TraCuuTimKiem';
import TraCuuKetQua from '../../components/TraCuuNopThue/TraCuuKetQua';
import {updateIsLoading} from '../../globalReducer/actions'
import {sagaUpdateCurrentUser} from './actions'
import { connect } from "react-redux";
import { compose } from 'redux';
import Login from '../../components/Login/Login'
import saga from './saga'

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


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const LoginContainer =  compose(
  withConnect
)(Login);

export default LoginContainer