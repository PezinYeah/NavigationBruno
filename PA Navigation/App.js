import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NETFLIX</Text>
      <Pressable
        onPress={() => navigation.navigate('inicial')}
        style={{
          backgroundColor: 'greenyellow',
          padding: 20,
          marginBottom: 10,
          marginTop: 500,
        }}>
        <Text>Pagina 1</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('final')}
        style={{ backgroundColor: 'green', padding: 20 }}>
        <Text>pagina 2</Text>
      </Pressable>
    </View>
  );
}

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conference Details</Text>
    </View>
  );
}

function Story() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Our Story</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Pedro artur" component={Home} />
        <Stack.Screen name="inicial" component={Conference} />
        <Stack.Screen name="final" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
