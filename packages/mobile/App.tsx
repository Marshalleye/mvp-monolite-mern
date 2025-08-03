import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { API_URL } from '@mvp/shared';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MVP Mobile App! 🚀</Text>
      <Text style={styles.subtitle}>React Native + Expo</Text>
      <Text style={styles.api}>API: {API_URL}</Text>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  api: {
    fontSize: 14,
    color: '#007AFF',
  },
});
