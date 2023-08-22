import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import axios from 'axios';

import styles from '../../styles/search';


const Search = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://192.168.0.16:5001/api/users/register",
                {
                  username: form.username,
                  email: form.email,
                  password: form.password
                },
                {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }
              );

          console.log(response.data);
            if(response.status===201)
            {
                router.push('/');
            }
            else if(response.status===400)
            {
                setError(response.data.message)
            }
        } catch (error) {
          console.error('Error:', error);
          setError("Something went wrong, try again!")
          
        }
      }
      
  return (
    <SafeAreaView>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: "#87CEEB"},
                headerTitle:"",
                headerBackVisible:false
            }}
        />
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>Sign up</Text>
                <TextInput
                    style = {styles.formfield}
                    placeholder='username'
                    placeholderTextColor='#837485'
                    value={form.username}
                    onChangeText={(text) => setForm({...form, username:text})}
                />

                <TextInput
                    style = {styles.formfield}
                    placeholder='email'
                    placeholderTextColor='#837485'
                    value={form.email}
                    onChangeText={(text) => setForm({...form, email:text})}
                />

                <TextInput
                    style = {styles.formfield}
                    placeholder='password'
                    placeholderTextColor='#837485'
                    value={form.password}
                    onChangeText={(text) => setForm({...form, password:text})}
                />

                {error && (
                    <Text style={{color:'red'}}>{error}</Text>
                )}

                <TouchableOpacity style={styles.buttons} onPress={handleSubmit}>
                    <Text style={{color:"white", fontSize:24}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search;