import {
  StyleSheet,
  Dimensions
} from 'react-native';

var {
  width
} = Dimensions.get("window");
var {
  height
} = Dimensions.get("window");

export const stylesMain = StyleSheet.create({
  textSeparatorDrawer: {
    fontSize: 14,
    fontWeight: "bold"
  },
  image: {
    width: width * 0.9,
    height: height * 0.55,
    margin: 10
  },
  title: {
    fontSize: 25,
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#336699',
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  //lam khoang cach giua cac item
  separator: {
    height: 8,
  },
  //seperator header
  separatorHeader: {
    height: 40,
    fontSize: 25
  },
  //dung cho cac o nhap text
  textInput:{
     fontFamily: 'space-mono'
  },
  //dung cho label floatLabel Item
  labelFloatingLabel:{
    marginTop: -10,

  },
  //khoang cach button voi form
  buttonDistanceTop: {
    marginTop: 35,
  },
   //khoang cach button voi form
   iconButtonText: {
    marginLeft: -22,
  }
});

export const stylesQlnha = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    margin: 20,
    flexDirection: 'row',

  },
  button: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 18,
    marginRight: 20,
    marginTop: 5
  },
  textCheckIn: {
    fontSize: 18,
    marginRight: 38,
    marginTop: 5
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#336699',
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  separator: {
    height: 30,
  },
});


export const stylesCommon = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
});