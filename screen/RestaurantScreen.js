import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftCircleIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';
const RestaurantScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { params: {
        id,
        imgurl,
        title,
        rating,
        genre,
        address,
        shortDesc,
        dishes,
        long,
        lat, } } = route;
    useEffect(() => {
        dispatch(
            setRestaurant({
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
        )
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className='relative'>
                    <Image source={{ uri: urlFor(imgurl).url() }} className='w-full h-56 bg-gray-100' />
                    <TouchableOpacity className='absolute top-14 left-4'
                        onPress={navigation.goBack}>
                        <ArrowLeftCircleIcon color={"#00eaff"} size={22} />
                    </TouchableOpacity>
                </View>
                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className=' text-3xl font-bold '>{title}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row  items-center space-x-1'>
                                <StarIcon color={"gold"} size={22} />
                                <Text className='text-gray-500 text-xs'>
                                    <Text className='text-orange-300'>{rating}</Text> • {genre}
                                </Text>
                            </View>
                            <View className='flex-row items-center space-x-1'>
                                <MapPinIcon size={20} opacity={0.5} color={"#00eaff"} />
                                <Text className='text-xs text-gray-500 '>Nearby • {address}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2 pb-3'>{shortDesc}</Text>
                    </View>
                    <TouchableOpacity className='flex-row items-center space-x-2 p-4
                border-y border-gray-300' >

                        <QuestionMarkCircleIcon color={"gray"} size={22} />
                        <Text className='font-bold text-lg flex-1'>Have a food allergy</Text>
                        <ChevronRightIcon color={"#00eaff"} />
                    </TouchableOpacity>
                </View>
                <View className='pb-32'>
                    <Text className='font-bold text-xl px-4 pt-6 mb-3 '>Menu</Text>
                    {dishes.map((dishes) => (
                        <DishRow
                            id={dishes._id}
                            key={dishes._id}
                            name={dishes.name}
                            descr={dishes.short_description}
                            price={dishes.price}
                            image={dishes.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
}
export default RestaurantScreen;