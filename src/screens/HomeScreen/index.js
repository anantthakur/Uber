import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {

    return(
        <View>
            {/* Home Map */}

            <View>
                
            </View>

            <HomeMap/>

            {/* Covid Message */}

            <CovidMessage/>

            {/* Below Button Content */}

            <HomeSearch />
            
        </View>
        
    )
}
export default HomeScreen;