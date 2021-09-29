import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";

import About from '../screens/About'

const screens = {
    About:{
        screen: About,
        navigationOptions:{
            title:'About Gamezone',
        }
    }
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee'}
    }
})

export default AboutStack;