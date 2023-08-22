import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from "../constants";


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"#feeffe",
        justifyContent: "center",
        alignItems: "center",
        // flex:1,
    },
    signUpContainer: {
        height: "100%",
        width: "100%",
        padding: 50, // Use a specific padding value, not a percentage
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#feeffe",
    },
    signUpButtons: {
        width: "90%", // Use a specific width percentage (adjust as needed)
        padding: 10,
        backgroundColor: '#FFA07A',
        borderRadius: 50,
        alignItems: "center",
        marginBottom:10,
    },
    heading: {
        fontSize:30,
        marginBottom:10,
        padding:20,
    },
    formfield:{
        width: "80%", // Use a specific width percentage (adjust as needed)
        padding: 10,
        backgroundColor: '#D8d8d8',
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal:15, // Adjusted padding
        flexDirection: "row",
        
    },
    formContainer:{
        flexDirection: 'column', 
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    buttons: {
        width: "80%", // Use a specific width percentage (adjust as needed)
        padding: 10,
        backgroundColor: '#FFA07A',
        borderRadius: 50,
        alignItems: "center",
        marginBottom:10,
        marginTop:10,
    },
});

export default styles;