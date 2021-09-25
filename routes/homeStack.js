import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home'
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Gamezone',
            // headerStyle:{backgroundColor:'#eee'}
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'ReviewDetails',
            // headerStyle:{backgroundColor:'#eee'}
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee'}
    }
})

export default createAppContainer(HomeStack)