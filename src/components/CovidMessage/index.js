import React,{ Component } from "react";
import { View, Text } from "react-native";

import styles from "../CovidMessage/styles";
import AntDesign from 'react-native-vector-icons/AntDesign';

const CovidMessage = (props) => {

    return(
        <View style={styles.messagecontainer}>
           <Text style={styles.title}>Travel if Necessary</Text>
           <Text style={styles.text}>Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum Loram Ipsum </Text>
           <View style={styles.leanmorewrapper}>
            <Text style={styles.learnmore}>Learn More</Text>
            <AntDesign name="arrowright" color={'#ffffff'} />
           </View>
           
        </View>
    )
}

export default CovidMessage;