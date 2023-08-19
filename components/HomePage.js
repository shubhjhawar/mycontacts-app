import { View, TouchableOpacity, Text } from "react-native";

import styles from "../styles/search";

const HomePage = () => {
  return (
    <View style={styles.signUpContainer}>
        <Text style={styles.heading}>Contact Manager</Text>
        <TouchableOpacity style={styles.signUpButtons} onPress={() => {}}>
            <Text style={{color:"white", fontSize:24}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButtons} onPress={() => {}}>
            <Text style={{color:"white", fontSize:24}}>Login</Text>
        </TouchableOpacity>
    </View>
  )
};

export default HomePage;