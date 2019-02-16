import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";

export default createMaterialBottomTabNavigator({
    page1: { screen: Page1 },
    page2: { screen: Page2 },
    page3: { screen: Page3 },
}, {
    initialRouteName: 'page1',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});