import React, {Component} from 'react';
import Home from './HomeComponent';
import Pastas from './PastaComponent';
import Sauces from './SauceComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Drinks from './DrinksComponent'
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView  } from 'react-native';
import {Icon, Image} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator, 
            navigationOptions:{
                drawerIcon: ({tintColor}) =>(
                    <Icon 
                        name='Home'
                        type='font-awesome'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        }, 
        Pastas:{
            screen: PastaNavigator, 
            navigationOptions:{
                drawerIcon: ({tintColor}) =>(
                    <Icon 
                        name='cheese'
                        type='font-awesome'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        }

    }
)

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;