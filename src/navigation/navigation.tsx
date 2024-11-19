import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddTask from '@screens/addTask/addTask'
import Dashboard from '@screens/main/dashboard'
import Task from '@screens/tasks/task'
import React from 'react'

// Initialize the stack navigator
const Stack = createNativeStackNavigator()

/**
 * Main navigation component that handles routing between screens
 * Uses native stack navigator for smooth transitions
 */
const AppNavigation = () => {
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
            backgroundColor: '#fff',
          },
        }}
      >
        {/* Main Dashboard Screen */}
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />

        {/* Add New Task Screen */}
        <Stack.Screen
          name="AddTask"
          component={AddTask}
        />

        {/* Individual Task View Screen */}
        <Stack.Screen
          name="Task"
          component={Task}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation