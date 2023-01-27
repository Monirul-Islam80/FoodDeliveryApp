import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from "react-native-animatable"
import gifimg from '../assets/ezgif.com-gif-maker.gif';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparinOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 6000);
    }, [])

    return (
        <SafeAreaView className='bg-[#00ccbb] flex-1 items-center justify-center'>
            <Animatable.Image source={gifimg}
                animation="slideInUp"
                iterationCount={1}
                className='h-96 w-full
                ' />
            <Animatable.Text animation="slideInUp"
                iterationCount={1}
                className='text-lg text-white font-bold text-center my-10' >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>
            <Progress.Circle size={50} color="white" indeterminate={true} />
        </SafeAreaView>
    )
}

export default PreparinOrderScreen