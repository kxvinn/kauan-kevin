import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import PercentageDimensionsBasics  from './src/components/TelaLogin';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PercentageDimensionsBasics></PercentageDimensionsBasics>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
