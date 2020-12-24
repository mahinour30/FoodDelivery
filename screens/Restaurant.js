import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Animated} from 'react-native';
import {COLORS, icons, SIZES, FONTS} from '../constants';

const Restaurant = ({route, navigation}) =>{

    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);

    React.useEffect(()=>{
        let {item, currentLocation} = route.params;

        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })

    function renderHeader(){
        return(
            <View style= {{flexDirection:'row'}}>
                <TouchableOpacity 
                style={{
                    width:50,
                    paddingLeft: SIZES.padding*2,
                    justifyContent:'center'
                }}
                onPress={()=> navigation.goBack()}
                >
                    <Image
                    source={icons.back}
                    resizeMode='contain'
                    style={{
                        width:30,
                        height:30
                    }}
                    />
                </TouchableOpacity>
                
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <View 
                        style={{
                            height:50,
                            backgroundColor: COLORS.lightGray3,
                            alignItems:'center',
                            justifyContent:'center',
                            paddingHorizontal:SIZES.padding*3,
                            borderRadius:SIZES.radius
                        }}
                        >
                            <Text style={{...FONTS.h3}}>
                            {restaurant?.name}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity 
                style={{
                    width:50,
                    paddingRight: SIZES.padding*2,
                    justifyContent:'center'
                }}
                >
                    <Image
                    source={icons.list}
                    resizeMode='contain'
                    style={{
                        width:30,
                        height:30
                    }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    return(
    <SafeAreaView style={styles.container}>
        {renderHeader()} 
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Restaurant;