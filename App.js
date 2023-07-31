import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform, Touchable, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ['#f7dc6f', '#a2d9ce', '#d7bde2'];

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    setIsActive(!isActive);
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View style={{ flex: 1, paddingVertical: Platform.OS === 'android' && 20, paddingHorizontal: 15 }}>
        <Text style={styles.title}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <Timer time={time} />
        <StatusBar style="dark" />
        <TouchableOpacity onPress={handleStartStop} style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  }
});
