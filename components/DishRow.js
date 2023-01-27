import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasketList, removeFromBasketList, selectBasketListWithId } from '../features/basketSlice'

const DishRow = ({ id, name, price, descr, image }) => {
    const [isPressed, setisPressed] = useState(false);
    const item = useSelector(state => selectBasketListWithId(state, id))
    const dispatch = useDispatch();
    const addItemToBaketlist = () => {
        dispatch(addToBasketList({ id, name, price, descr, image }))
    }
    const removeItemFromBaketlist = () => {
        if (!item.length > 0) {
            return
        }
        dispatch(removeFromBasketList({ id }));
    }
    return (
        <>
            <TouchableOpacity onPress={() => setisPressed(!isPressed)} className={`bg-white border-gray-200 border p-4 ${isPressed}&& " border-b-0`}>
                <View className='flex-row  '>
                    <View className='pr-2 flex-1'>
                        <Text className='text-lg font-bold capitalize'>{name}</Text>
                        <Text className='text-gray-400 '>{descr}</Text>
                        <Text className='text-gray-400 mt-2'>৳{price}
                        </Text>
                    </View>
                    <View>
                        <Image source={{ uri: urlFor(image).url() }} style={{
                            borderWidth: 1,
                            borderColor: "#f3f3f4"

                        }} className='w-20 h-20 p-4                    ' />
                    </View>
                </View>

            </TouchableOpacity>
            {
                isPressed && (
                    <View className='p-4 bg-gray-100'>
                        <View className='flex-row items-center space-x-2'>
                            <TouchableOpacity onPress={removeItemFromBaketlist}>
                                <MinusCircleIcon size={33} color={item.length > 0 ? "#00eaff" : "gray"} />
                            </TouchableOpacity>
                            <Text className='font-bold'>{item.length}</Text>
                            <TouchableOpacity onPress={addItemToBaketlist}>
                                <PlusCircleIcon size={33} color={"#00eaff"} />

                            </TouchableOpacity>

                        </View>

                    </View>
                )
            }
        </>
    )
}

export default DishRow