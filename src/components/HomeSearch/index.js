import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import style from '../HomeSearch/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import EntypoIcons from 'react-native-vector-icons/Entypo';




const HomeSearch = () => {
    return(
        
        <View style={style.messageContaineer}>
            {/* Input Box */}
            <View style={style.inputBox}>
                <Text style={style.inpputText}>Where To ?</Text>
                <View style={style.timeContainer}>
                <AntDesign name="clockcircle" color={'#000000'} size={18}/>
                <Text style={style.timeContainerText}>Now</Text>
                <MaterialIcons name='keyboard-arrow-down' color={'#000000'} size={18}/>
                </View>
                
            </View>

            {/* Previous Destination */}

            <View style={style.row}>

                <View style={style.iconContainer}>
                   <AntDesign name="clockcircle" color={'#ffffff'} size={18}/>
                </View>
                <Text style={style.destinationText}>Spin Nightclub</Text>

            </View>


            {/* Home Destination */}

            <View style={style.row}>

                <View style={[style.iconContainer,{backgroundColor:'#6875e5'}]}>
                   <EntypoIcons name="home" color={'#ffffff'} size={18}/>
                </View>
                <Text style={style.destinationText}>Home</Text>

            </View>

            {/* Reward Hub */}

            <View style={[style.row,{justifyContent:'space-between'}]}>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                    <View style={[style.iconContainer,{backgroundColor:'#6875e5'}]}>
                    <EntypoIcons name="home" color={'#ffffff'} size={18}/>
                    </View>
                    <Text style={style.destinationText}>302 pts</Text>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text>Rewards Hub</Text>
                    <MaterialIcons name='keyboard-arrow-right' color={'#000000'} size={18}/>
                </View>

                

            </View>

        </View>
        
        
    )
  
}

export default HomeSearch;
