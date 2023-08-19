import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor:"yellow",
    },
    signUpContainer: {
        height: "100%",
        width: "100%",
        padding: 50, // Use a specific padding value, not a percentage
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#feeffe"
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
        marginBottom:100,
        padding:20,
    }
});

export default styles;