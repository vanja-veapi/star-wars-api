import { useQuery } from 'react-query';
import { AntDesign } from "@expo/vector-icons"

import { Stack } from '../routes';

import Home from '../screens/home';
import AddMovie from '../screens/addMovie';
import Movie from '../screens/movie';

const MainNavigator = () => {
  const { data: movie } = useQuery("movie", () => { });

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',
        // // headerRight: (() => movie ? null : <AntDesign name='windows' size={24} color='#fff' />)
      }}
    >
      <Stack.Screen name="Star Wars Movies" component={Home} />
      <Stack.Screen name="Add Movie" component={AddMovie} />
      <Stack.Screen options={{ title: movie }} name="Movie" component={Movie} />
    </Stack.Navigator>
  )
}

export default MainNavigator