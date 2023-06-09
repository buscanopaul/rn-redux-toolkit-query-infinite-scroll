import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
