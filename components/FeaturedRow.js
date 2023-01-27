import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
    const [restaurants, setrestaurants] = useState([]);
    useEffect(() => {
        client.fetch(`
        
        *[_type=="featured" && _id ==$id] {
            ...,
            restaurants[]->{
              ...,
                dishes[]->,
                type->{
                    name
                }
            },
          }[0]
          `,
            { id }
        ).then((data) => {
            setrestaurants(data?.restaurants)
        })
    }, [])

    return (
        <View className=''>
            <View className='flex-row justify-between mt-4 px-4 items-center'>
                <Text className='text-lg font-bold'>{title}</Text>
                <ArrowRightIcon color={"#00eaff"} />
            </View>
            <Text className='text-gray-500 text-xs px-4'>{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {
                    restaurants?.map((restaurant) =>
                    (
                        <RestaurantCard

                            key={restaurant._id + Math.random()}
                            id={restaurant._id}
                            imgurl={restaurant.image}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            genre={restaurant.type?.name}
                            address={restaurant.address}
                            shortDesc={restaurant.short_description}
                            dishes={restaurant.dishes}
                            long={restaurant.long}
                            lat={restaurant.lat}
                        />
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default FeaturedRow