import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imgurl,
    title,
    rating,
    genre,
    address,
    shortDesc,
    dishes,
    long,
    lat,
}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Restaurant", {
                    id,
                    imgurl,
                    title,
                    rating,
                    genre,
                    address,
                    shortDesc,
                    dishes,
                    long,
                    lat,
                })
            }}
            style={{ elevation: 10 }} className='mr-3 bg-white '>
            <Image source={{ uri: urlFor(imgurl).url() }} className='h-36 w-64' />
            <View className='px-3 pb-4 '>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row  items-center space-x-1'>
                    <StarIcon color={"gold"} size={20} opacity={0.5} />
                    <Text className='text-gray-500 text-xs'>
                        <Text className='text-orange-300'>{rating}</Text> • {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon size={20} opacity={0.5} color={"gray"} />
                    <Text className='text-xs text-gray-500 '>Nearby • {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard