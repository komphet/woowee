import Expo from 'expo';
import React from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View,
    Text

} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import {Tabs} from './navigation/RootNavigation';
import Colors from './constants/Colors';
import {Image} from 'react-native';
import Button from 'apsl-react-native-button'


class AppContainer extends React.Component {
    state = {
        appIsReady: false,
        isLogin: false,
    };

    componentWillMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        try {
            await cacheAssetsAsync({
                images: [require('./assets/images/expo-wordmark.png')],
                fonts: [
                    FontAwesome.font,
                    {'Sukhumvit': require('./assets/fonts/SukhumvitSet-Medium.ttf')},
                ]
            });
        } catch (e) {
            console.warn(
                'There was an error caching assets (see: main.js), perhaps due to a ' +
                'network timeout, so we skipped caching. Reload the app to try again.'
            );
            console.log(e.message);
        } finally {
            this.setState({appIsReady: true});
        }
    }

    _loginFacebook = () => {
        this.setState({isLogin: true});
    }
    _logout = () => {
        this.setState({isLogin: false});
    }

    render() {
        if (this.state.appIsReady) {
            if (this.state.isLogin) {
                return (
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>
                            Coming soon... {'\n'}

                        </Text>
                        <Button style={{backgroundColor: Colors.base}} textStyle={{fontSize: 18}}
                                onPress={() => this._logout()}>
                            Back
                        </Button>
                    </View>
                );
            } else {
                return (
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <View style={{position: "absolute", top: 50}}>
                            <Image source={require('./assets/images/login-logo.jpg')}/>
                        </View>

                        <View style={{position: "absolute", bottom: 15}}>
                            <View style={{width: 350, padding: 50}}>
                                <Button style={{backgroundColor: Colors.base}} textStyle={{fontSize: 18}}
                                        onPress={() => this._loginFacebook()}>
                                    Connect with Facebook
                                </Button>
                            </View>
                            <Text style={styles.text}>
                                This application does not post anything to your Facebook by singing in or singing up.
                            </Text>
                            <Text style={styles.text}>
                                Terms of Service and Privacy Policy
                            </Text>
                        </View>

                    </View>
                )
            }

        } else {
            return <Expo.AppLoading/>;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBar: {
        height: 24,
        backgroundColor: Colors.tintColor,
    },
    text: {
        color: "#d1d1d1",
        textAlign: "center"
    }
});

Expo.registerRootComponent(AppContainer);
