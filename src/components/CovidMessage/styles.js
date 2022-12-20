import { StyleSheet } from "react-native";


const style = StyleSheet.create({

    messagecontainer:{
        height: 150,
        backgroundColor:'#755ff3',
        padding: 10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        
    },
    title:{
        fontSize:17,
        color:'hsl(0, 20%, 91%)',
        padding:5,
        fontWeight:'bold'
    },
    text:{
        fontSize:13,
        color:'#f2f0f0',
        padding:5,
        lineHeight:15

    },
    leanmorewrapper:{
        flexDirection:"row",
        alignItems: 'center'
    },
    learnmore:{
        fontSize:13,
        color:'#f2f0f0',
        fontWeight:'bold',
        padding:5

    }

});

export default style;