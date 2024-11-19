import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./src/screens/main/dashboard";
import AddTask from "./src/screens/addTask/addTask";
import Task from "./src/screens/tasks/task";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            marginTop: 50,
            
          },
          headerStyle: {
            backgroundColor: "#fff",
          },
          
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
