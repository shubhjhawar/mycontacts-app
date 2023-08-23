import { useEffect } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import styles from "../styles/search";
import HomePage from "../components/HomePage";

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        const handleToken = async () => {
            try {
                const token = await AsyncStorage.getItem("AccessToken");

                if (token) {
                    const decodedToken = jwtDecode(token);

                    const currentTimeStamp = Math.floor(Date.now() / 1000);
                    if(decodedToken.exp && currentTimeStamp >= decodedToken.exp) {
                        console.log("token is expired")
                        await AsyncStorage.clear();
                        router.push('/')
                    } else {
                        console.log("token is valid");
                        router.push('/home');
                    }
                }
            } catch (error) {
                console.error('Error handling token:', error);
            }
        }

        handleToken();
    }, []);

    return(
        <SafeAreaView>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: "#87CEEB"},
                headerTitle:"",
            }}
            />
            <View>
                <HomePage />
            </View>
        </SafeAreaView>
    )
}

export default Home;