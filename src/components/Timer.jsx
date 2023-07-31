import { View, Text, StyleSheet } from "react-native";

const Timer = ({time}) => {

  const formatTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time }>{formatTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .3,
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
  }
});

export default Timer;