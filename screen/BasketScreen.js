import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { useNavigation } from '@react-navigation/native'
import { removeFromBasketList, selectBasketList, selectBasketTotal } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity'

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketList);
    const [groupedBasketItem, setgroupedBasketItem] = useState([])
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch();
    useMemo(() => {
        const groupedItem = items.reduce((result, item) => {
            (result[item.id] = result[item.id] || []).push(item);
            return result;
        }, {})
        setgroupedBasketItem(groupedItem);
    }, [items]);
    return (
        <SafeAreaView className='flex-1 ' >
            <View className=' flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00ccbb] bg-white' >
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack} className='bg-gray-100 rounded-full absolute top-3 right-3'>
                        <XCircleIcon color={"#00ccbb"} size={40} />
                    </TouchableOpacity>
                </View>
                <View className='flex-row p-4 space-x-4 items-center bg-white my-5'>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                    <Text className='flex-1'>Deliver in 50-60 min</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00ccbb]'>Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className='divide-y divide-gray-400'>
                    {
                        Object.entries(groupedBasketItem).map(([key, item]) => (
                            <View key={key} className=' bg-gray-200 flex-row py-3 px-4 space-x-3'>
                                <Text>{item.length} x</Text>
                                <Image source={{ uri: urlFor(item[0]?.image).url() }} className='h-7 w-7 rounded-full' />
                                <Text className='flex-1'>{item[0]?.name}</Text>
                                <Text >৳{item[0]?.price}</Text>
                                <TouchableOpacity onPress={() => { dispatch(removeFromBasketList({ id: key })) }}>
                                    <Text className='text-red-700'>remove</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
                <View className='p-5 mt-5 bg-white space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>৳{basketTotal}</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery Fee</Text>
                        <Text className='text-gray-400'>৳10</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-900 font-bold'>Order Total</Text>
                        <Text className='text-gray-900 font-bold'>৳{basketTotal + 10}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className='bg-[#00ccbb] rounded-lg p-4'>
                        <Text className='text-center text-lg font-bold text-white'>Place Orders</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>



    )
}

export default BasketScreen