import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoriesCard = ({ imgurl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'>

            <Image source={{ uri: imgurl }} className='w-20 h-20' t />
            <Text className='absolute bottom-1 left-1 text-lg text-teal-500 font-bold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoriesCard