import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cart-slice/cart-slice'
import { decrement, increment } from '../../store/product_no-slice/product_no-slice'

const index = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state)
    const { product_no } = useSelector((state) => state)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        let url = 'https://fakestoreapi.com/products'
        let res = await fetch(url)
        let data = await res.json()

        if (data) {
            setData(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // console.log(product_no);

    const handleAddToCart = (prd) => {
        dispatch(addToCart(prd))
    }

    return (
        <div className='h-screen w-12/12 justify-items-center grid grid-cols-5 mt-5 p-5 gap-2'>
            {
                loading ? <div className='absolute top-72'><Oval color="#ffd700" height={80} width={80} /></div> :
                    data.map((d) => {
                        return (
                            <div className='text-center border-2 border-red-400 rounded-md w-64 h-72'>
                                <div className='w-full flex flex-col items-center'><img className='h-48' src={d?.image} alt={d?.title} /></div>
                                <div>{d?.title.length > 40 ? d?.title.substring(0, 40) + "..." : d?.title}</div>
                                <div className='flex flex-row justify-between p-2'>
                                    <button onClick={() => handleAddToCart(d)} className='bg-yellow-300 p-1 rounded-md'>
                                        Add to cart
                                    </button>
                                    Rs. {Math.round(d?.price) * 80}
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default index
