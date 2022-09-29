import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';


import MainNavigator from './navigations/MainNavigator';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>

    </QueryClientProvider>

  );
}