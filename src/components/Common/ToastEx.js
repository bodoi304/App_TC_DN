import {
Toast
  } from "native-base";

 const ToastEx = (text,position='bottom',duration=10000) => { Toast.show({
    duration: duration,
    text: text,
    position: position,
    buttonText: 'Ok'
  })}
  export default ToastEx