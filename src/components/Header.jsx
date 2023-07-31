import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = ({ setTime, currentTime, setCurrentTime }) => {

  const options = ["Pomodoro", "Short Break", "Long Break"];
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 * 60 : index === 1 ? 5 * 60 : 15 * 60;
    setCurrentTime(index);
    setTime(newTime);
  };

  return (
    <View style={style.container}>
      {options.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[style.body, currentTime !== index && { borderColor: 'transparent' }]}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  body: {
    borderWidth: 3,
    borderColor: '#fff', 
    padding: 5,
    width: '33%',
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  }
});

export default Header;