import axios from 'axios';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import styles from '../../styles/search';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewContact = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [error, setError] = useState("");
    const [apiToken, setApiToken] = useState();

    const AddContact = async () => {
        try {
            const response = await axios.post(
                "http://192.168.0.16:5001/api/contacts",
                {
                  name: form.name,
                  email: form.email,
                  phone: form.phone
                },
                {
                  headers: {
                    'Authorization': 'Bearer ' + apiToken
                  }
                }
              );

            if(response.status===201)
            {
                router.push('/home');
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
    

    const handleSubmit = () => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem("AccessToken");
            setApiToken(token);
        }
      
      
        getToken();
    
        if(apiToken)
        {
            AddContact();
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
                <Text style={styles.heading}>Add New Contact</Text>
                <TextInput
                    style = {styles.formfield}
                    placeholder='name'
                    placeholderTextColor='#837485'
                    value={form.name}
                    onChangeText={(text) => setForm({...form, name:text})}
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
                    placeholder='phone'
                    placeholderTextColor='#837485'
                    value={form.phone}
                    onChangeText={(text) => setForm({...form, phone:text})}
                />

                {error && (
                    <Text style={{color:'red'}}>{error}</Text>
                )}

                <TouchableOpacity style={styles.buttons} onPress={handleSubmit}>
                    <Text style={{color:"white", fontSize:24}}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NewContact