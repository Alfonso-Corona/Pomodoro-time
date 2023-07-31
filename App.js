import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import Header from './src/components/Header';

const colors = ['#f7dc6f', '#a2d9ce', '#d7bde2'];

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === 'android' && 20 }}>
        <Text style={styles.title}>Pomodoro</Text>
        <Header time={time} />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  }
});
