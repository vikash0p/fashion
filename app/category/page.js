import React from 'react'
import { fetchData } from '@/utils/fetchData'
import ProductCategory from '@/components/CategoryComp/ProductCategory';

export default async function category() {
    const product = await fetchData();



    return (
        <>
            <ProductCategory product={product} />
        </>
    )
}
