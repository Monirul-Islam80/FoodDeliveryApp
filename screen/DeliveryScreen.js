import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, XMarkIcon } from 'react-native-heroicons/solid'
import dimage from '../assets/FoodDelivery.gif'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import MapView from 'react-native-maps';
import { UserCircleIcon, UserPlusIcon } from 'react-native-heroicons/outline'


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <>

            <SafeAreaView className='bg-[#00ccbb] z-50 flex-1'>
                <View className='flex-row p-4 justify-between text-white'>
                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <XMarkIcon color={"white"} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Help</Text>
                </View>
                <View className='bg-white
            mx-5 my-2 rounded-md z-50 px-4 py-6'>
                    <View className=' flex-row justify-between space-x-0'>
                        <View>
                            <Text className='text-lg text-gray-500'>Estimated Arrival</Text>
                            <Text className='text-3xl font-bold'>45-55 Minutes</Text>
                        </View>
                        <Image source={dimage} className='h-20 w-24' />
                    </View>
                    <Progress.Bar color='#00ccbb' indeterminate={true} />
                    <Text className=' text-gray-400 mt-3'>Your order at {restaurant.title} is being prepared</Text>
                </View>
                <MapView


                    className='flex-1 '
                >

                </MapView>

            </SafeAreaView>
            <SafeAreaView className='flex-row pb-6 px-4 space-x-4 bg-white'>
                <UserCircleIcon color={"black"} size={40} />
                <View className='flex-1'>
                    <Text className='font-bold text-black '>Soumik</Text>
                    <Text className='font-bold text-black '>Your rider </Text>

                </View>
                <Text className='text-lg font-bold text-cyan-900'>Call</Text>
            </SafeAreaView>
        </>
    )
}

export default DeliveryScreen