import React, { Component, useLayoutEffect } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import routeConfig from "./nav";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class NavScreen extends Component {
  constructor(props) {
    super(props);
    this.MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: "rgb(255, 45, 85)",
      },
    };
  }
  renderScreen = () => {
    return Object.keys(routeConfig).map((v) => {
      let screen = routeConfig[v];
      if (screen.type == "tab") {
        screen.component = ({ navigation, route }) => {
          function getHeaderTitle(route) {
            const routeName = route.state
              ? route.state.routes[route.state.index].name
              : "Home";
            return screen.child[routeName].headerTitle;
          }
          useLayoutEffect(() => {
            navigation.setOptions({
              headerTitle: getHeaderTitle(route),
              title: getHeaderTitle(route),
            });
          }, [navigation, route]);

          return (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName = routeConfig[v].child[route.name].icon;
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
            >
              {Object.keys(screen.child).map((c) => {
                let tabnav = screen.child[c];
                return (
                  <Tab.Screen
                    key={tabnav.name}
                    name={tabnav.name}
                    options={{
                      title: tabnav.headerTitle,
                    }}
                    component={tabnav.component}
                    listeners={({ navigation }) => ({
                      tabPress: (e) => {
                        // Prevent default action
                        if (tabnav.name == "Buycart") {
                          e.preventDefault();
                          navigation.navigate(tabnav.name, {
                            t: new Date().getTime(),
                          });
                        }
                      },
                    })}
                  />
                );
              })}
            </Tab.Navigator>
          );
        };
      }
      return (
        <Stack.Screen
          key={screen.name}
          options={{ title: screen.headerTitle }}
          name={screen.name}
          component={screen.component}
        />
      );
    });
  };
  render() {
    return (
      <NavigationContainer theme={this.MyTheme}>
        <Stack.Navigator>{this.renderScreen()}</Stack.Navigator>
      </NavigationContainer>
    );
  }
}
