import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import client, { urlFor } from '../sanity';

const Categories = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        client.fetch(`
       *[_type=="category"]
      `).then(data => setcategories(data))
    }, [])

    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
                , paddingTop: 10,
            }}

        >
            {
                categories?.map((category) => (
                    <CategoriesCard
                        key={category._id}
                        imgurl={urlFor(category.image).url()}

                        title={category.name} />
                ))
            }




        </ScrollView>
    )
}

export default Categories