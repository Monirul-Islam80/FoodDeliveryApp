import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketList, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const item = useSelector(selectBasketList);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
    if (item.length === 0) return;
    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className='flex-row bg-cyan-600 mx-5 p-4 rounded-lg space-x-1 justify-between items-center '>
                <Text className='text-white font-bold bg-cyan-700 p-2'>{item.length}</Text>
                <Text className='text-white font-bold'>View Basket</Text>
                <Text className='text-white font-bold'>৳{basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon