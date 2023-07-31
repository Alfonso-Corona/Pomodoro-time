import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform, Touchable, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from 'expo-av';

const colors = ['#f7dc6f', '#a2d9ce', '#d7bde2'];

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if(isActive){
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }else{
      clearInterval(interval);
    }

    if(time === 0){
      setIsActive(false);
      setIsWorking((prevState) => !prevState);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    play();
    setIsActive(!isActive);
  }

  const play = async() => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/click.mp3')
    );
    await sound.playAsync();
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
