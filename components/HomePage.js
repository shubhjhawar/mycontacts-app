import { View, TouchableOpacity, Text } from "react-native";

import { useRouter } from "expo-router";
import styles from "../styles/search";

const HomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Contact Manager</Text>
        <TouchableOpacity style={styles.signUpButtons} onPress={() => router.push("/signup")}>
            <Text style={{color:"white", fontSize:24}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButtons} onPress={() => router.push("/login")}>
            <Text style={{color:"white", fontSize:24}}>Login</Text>
        </TouchableOpacity>
    </View>
  )
};

export default HomePage;