import { View, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { styles } from "../styles/search";
import HomePage from "../components/HomePage";

const Home = () => {
    return(
        <SafeAreaView>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: "#87CEEB"}
            }}
            headTitle=""
            />
            <View>
                <HomePage />
            </View>
        </SafeAreaView>
    )
}

export default Home;