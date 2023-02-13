import { useSpring, animated } from '@react-spring/web'
import { Link, useLocation } from 'react-router-dom'

export default function Detail() {
    const { state } = useLocation()
    const moveRight = useSpring({
        from: {x: -100},
        to: {x: 0}
    })

    const fadeIn = useSpring({
        from: {opacity: 0},
        to: {opacity: 0.5},
        // delay: 1000
    })

    return (
        <div className='top-0 left-0 bottom-0 right-0 flex border-r-2 border-black fixed '>
            <animated.div className='flex flex-col p-5 w-1/3 bg-stone-200' style={moveRight}>
                <button className='font-bold text-xl text-right mb-2 hover:text-red-500'><Link to={'/belanja'}>X</Link></button>
                <img className='shadow-sm shadow-black' src={state.src} />
                <h3 className='text-center font-bold text-3xl mt-2'>{state.name}</h3>
                <p className='font-bold text-2xl mt-5'>Harga</p>
                <p className='mt-2'>Rp. {state.price}</p>
                <p className='font-bold text-2xl mt-2'>Tersedia</p>
                <p className='font-semibold text-lg'>10</p>
                <p className='font-bold text-2xl'>Pesan</p>
                <div className='flex gap-x-3 mt-3'>
                    <button className='px-2 rounded bg-red-500 font-semibold'>-</button>
                    <p className='font-semibold text-lg'>0</p>
                    <button className='px-2 rounded bg-emerald-500 font-semibold'>+</button>
                </div>
            </animated.div>
            <animated.div className='bg-black w-2/3 h-full opacity-60' style={fadeIn}></animated.div>
        </div>
    )
}