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
    userBtn: {
        borderRadius: 50,
        height: 40,
        width: 40,
        backgroundColor: "#6CA6CD",
        padding: 11,
        marginRight:5,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        lineHeight: 10,  
    },
    logoutContainer: {
        position:"relative",
        top: 0,
        right: 0,
        margin: 5,
        padding: 15,
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
    },
    contactWrapper: {
        flexDirection: 'column', 
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
        //shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.84,
        elevation: 5,
    },
    contactContainer: {
        position:'relative',
        width: "100%",
        height: "100%",
        padding: 20,
        flexDirection: 'column', 
        justifyContent: "center",
        alignItems: "center",
    },
    contactName: {
        fontSize: 50,
        position:'absolute',
        top:0,
        marginTop:20,
        padding:5,

    },
    contactEmail: {
        fontSize: 20,
        padding:10,
        marginTop:20,
    },
    contactPhone: {
        fontSize: 20,
        position:'absolute',
        bottom:0,
        marginBottom:20,
        padding:10,

    },
    footerWrapper: {
        flex:1,
        // justifyContent: "center",
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        marginBottom: 5,
        width: 375,
        height: 50,
        backgroundColor: '#FFA07A',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',     
        textAlign: 'center',
    },
    deleteWrapper: {
        position: "absolute",
        top:0,
        right: 0,
        padding: 15,
        margin: 10,
    },
    deleteBtn: {
        width:25, 
        height:25,
    }
      

});

export default styles;