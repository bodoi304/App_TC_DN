import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { WebBrowser } from 'expo';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Separator, Thumbnail,Fab  } from 'native-base';
import { stylesMain } from "../Styles/MyStyle";
import { CHUC_NANG_DEFAULT } from "../constants/Mess";
import TraCuuNopThueContainer from "../containers/TraCuuNopThue";
import {sagaLogout} from '../containers/Login/actions'
import {store} from '../../store'
import CameraContainer from '../containers/CameraRollDemo'
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TraCuuNopThueContainer,
  },
  CameraRollDemo: {
    screen: CameraContainer,
  }
},
  {
    contentComponent: (props) => {
      return (
        <ScrollView>
          <Thumbnail square style={{ width: 350, height: 80 }} source={require("../../assets/images/banner.jpg")} />
          <Separator>
            <Text style={stylesMain.textSeparatorDrawer}>TRA CỨU</Text>
          </Separator>
          <DrawerItems
            {...props}
            items={[{ key: "Home", routeName: "Home" }]}
            getLabel={() => {
              return CHUC_NANG_DEFAULT;
            }}
            onItemPress={() => {
              props.navigation.setParams({ title: CHUC_NANG_DEFAULT });
              props.navigation.navigate("Home");
            }}
            renderIcon={() => {
              return <Icon ios='ios-trending-up' android="md-trending-up" />;
            }}
          />
        <DrawerItems
            {...props}
            items={[{ key: "CameraRollDemo", routeName: "CameraRollDemo" }]}
            getLabel={() => {
              return 'CameraRollDemo';
            }}
            onItemPress={() => {
              props.navigation.setParams({ title: 'CameraRollDemo' });
              props.navigation.navigate("CameraRollDemo");
            }}
            renderIcon={() => {
              return <Icon ios='ios-trending-up' android="md-trending-up" />;
            }}
          />
        </ScrollView>

      );
    }
  }
);


export default class HomeScreen extends React.Component {
  static router = MyDrawerNavigator.router;
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
              <Icon ios='ios-menu' android="md-menu" />
            </Button>
          </Left>
          <Body >
            <Title style={{ fontSize: 16 }}>{this.props.navigation.getParam('title', CHUC_NANG_DEFAULT)} </Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {
              store.dispatch(sagaLogout())
              this.props.navigation.navigate('Login');
            }}>
              <Icon ios='ios-log-out' android="md-log-out" />
            </Button>
          </Right>
        </Header>
        <MyDrawerNavigator navigation={this.props.navigation}></MyDrawerNavigator>
        {/* <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon  ios='ios-share' android="md-share"  />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon ios='ios-call' android="md-call" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon ios='logo-facebook' android="logo-facebook" /> 
            </Button>
          </Fab> */}
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
