import React, {Component} from 'react';
import Home from './HomeComponent';
import Pastas from './PastaComponent';
import Sauces from './SauceComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Drinks from './DrinksComponent'
import Constants from 'expo-constants';
import { View, Platform, Text } from 'react-native';
import {Icon, Image} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#9fe2d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                name='home' 
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const PastaNavigator = createStackNavigator(
    {
        Pastas: {screen: Pastas}
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerStyle:{
                backgroundColor:'#9fe2d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff'
            },
            headerLeft:<Icon 
                name='bowl'
                type='entypo'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const SauceNavigator = createStackNavigator(
    {
        Sauces: {screen: Sauces}
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerStyle:{
                backgroundColor:'#9fe2d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff'
            },
            headerLeft:<Icon 
                name='mortar-pestle'
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const DrinkNavigator = createStackNavigator(
    {
        Drinks: {screen: Drinks}
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerStyle:{
                backgroundColor:'#9fe2d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff'
            },
            headerLeft:<Icon 
                name='cocktail'
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: {screen: Contact}
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerStyle:{
                backgroundColor:'#9fe2d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff'
            },
            headerLeft:<Icon 
                name='address-card'
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: {screen: About}
    },
    {
        defaultNavigationOptions:({navigation}) => ({
            headerStyle:{
                backgroundColor:'#9fe2d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff'
            },
            headerLeft:<Icon 
                name='info-circle'
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator, 
            navigationOptions:{
                drawerIcon: ({tintColor}) =>(
                    <Icon 
                        name='home'
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
                        name='bowl'
                        type='entypo'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        }, 
        Sauce:{
            screen: SauceNavigator,
            navigationOptions:{
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='mortar-pestle'
                        type='font-awesome'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        },
        Drinks:{
            screen: DrinkNavigator, 
            navigationOptions:{
                drawerIcon: ({tintColor}) =>(
                    <Icon 
                        name='cocktail'
                        type='font-awesome'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        }, 
        About: {
            screen: AboutNavigator,
            navigationOptions:{
                drawerIcon: ({tintColor}) =>(
                    <Icon 
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        },
        Contact:{
            screen: ContactNavigator, 
            navigationOptions:{
                drawerIcon: ({tintColor}) =>(
                    <Icon 
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        raised
                        color={tintColor}
                    />
                )
            }
        }, 

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
                <Text>TESTING</Text>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;