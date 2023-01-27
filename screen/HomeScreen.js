import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, SearchIcon, AdjustmentsHorizontalIcon, SparklesIcon, ArrowDownIcon, ArrowDownTrayIcon, ChevronDownIcon, ChevronUpDownIcon, ChevronDoubleDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityclient from "../sanity";

const HomeScreen = () => {
    const [featuredCategories, setfeaturedCategories] = useState([]);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    });
    useEffect(() => {
        sanityclient.fetch(`
        *[_type=="featured"] {
            ...,
            restaurants[]->{
              ...,
                dishes[]->
            }
          }
        `).then((data) => setfeaturedCategories(data));
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className=" flex-row pb-3 items-center mx-4 space-x-3">
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className="font-bold text-gray-400 text-xs">Delivery app</Text>
                    <Text className="font-bold text-xl ">
                        Current Locataion
                        <ChevronDownIcon size={20} viewBox='0 0 24 15' color={"#00eaff"} className=" font-bold" />
                    </Text>
                </View>
                <UserIcon size={35} color={"#00eaff"} />
            </View>
            <View className="flex-row space-x-2 pb-2 items-center mx-4 ">
                <View className="flex-1 flex-row bg-gray-300 p-3 space-x-2 " >
                    <MagnifyingGlassIcon color={"gray"} />
                    <TextInput placeholder='write boy' keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color='#00eaff' />
            </View>
            <ScrollView className='bg-gray-100  ' >
                <Categories />

                {featuredCategories?.map(categories => (
                    <FeaturedRow
                        key={categories._id}
                        id={categories._id}
                        title={categories.name}
                        description={categories.short_description} />
                ))}

            </ScrollView>
        </SafeAreaView >


    )
}

export default HomeScreen