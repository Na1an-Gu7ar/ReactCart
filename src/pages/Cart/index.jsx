import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cart-slice/cart-slice'
import { Link } from 'react-router-dom'

const index = () => {
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)

    const { cart } = useSelector((state) => state)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Math.round(curr.price) * 80, 0))
    }, [cart])

    const handleAddToCart = (prd) => {
        dispatch(addToCart(prd))
    }

    const handleRemoveFromCart = (prd) => {
        dispatch(removeFromCart(prd))
    }

    return (
        <div className='flex flex-col items-center mt-10'>
            Total: {total}
            <div className='flex flex-row justify-center gap-10 flex-wrap mt-5'>
                {
                    cart && cart.length > 0 ? (cart.map((c) => {
                        // cart.count(cart.some((p) => p.id === c.id))
                        return (
                            <div className='text-center border-2 border-red-400 rounded-md w-64 h-72'>
                                <div className='w-full flex flex-col items-center'><img className='h-48' src={c?.image} alt={c?.title} /></div>
                                <div>{c?.title.length > 40 ? c?.title.substring(0, 40) + "..." : c?.title}</div>
                                <div className='flex flex-row justify-between p-2'>
                                    <button onClick={cart.some((p) => p.id === c.id) ? () => handleRemoveFromCart(c) : () => handleAddToCart(c)} className='bg-yellow-300 p-1 rounded-md'>
                                        {
                                            cart.some((p) => p.id === c.id) ? 'Remove from cart' : 'Add to cart'
                                        }
                                    </button>
                                </div>
                            </div>
                        )
                    }))
                        : <div>
                            Cart is empty, <Link className='bg-gray-300 p-1 rounded-md' to={'/'}>Add Now</Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default index
