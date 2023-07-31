import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = ({ time }) => {


  return (
    <View style={style.container}>
      <Text style={style.body}>{time}</Text>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
  },
  body: {
    color: '#fff',
  }
});

export default Header;