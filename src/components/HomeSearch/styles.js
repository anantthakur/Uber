import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({

    messageContaineer:{

        marginTop:17

    },

    inputBox:{

        backgroundColor:'rgba(198, 196, 196, 0.4)',
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:8,
        

    },
    inpputText:{
        fontSize:20,
        fontWeight:'500'

    },
    timeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:110,
        backgroundColor:'rgba(255, 255, 255,0.6)',
        alignItems:'center',
        padding:10,
        borderRadius:20,

    },
    timeContainerText:{
        fontWeight:'bold'
    },
    row:{
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#f0eded',
        

    },
    /*hubleft:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    hubright:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },*/
    iconContainer:{
        backgroundColor:'#e2e2e2',
        padding:8,
        borderRadius:20
    },
    destinationText:{
        paddingLeft:10,
        fontWeight:'500',
        fontSize:15
    }



});

export default styles;