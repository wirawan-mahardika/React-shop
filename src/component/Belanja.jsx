import com1 from '../img/komputer-2.jpg'
import com2 from '../img/komputer-3.jpg'
import com3 from '../img/komputer-4.jpg'
import com4 from '../img/komputer-5.jpg'
import com5 from '../img/komputer-6.jpg'
import com6 from '../img/komputer-7.jpg'
import { Link, Outlet } from 'react-router-dom'

function Image(props) {
    return (
        <div className='basis-1/4 text-center flex flex-col gap-y-2'>
            <img src={props.src} />
            <h3 className='font-bold'>{props.name}</h3>
            <p className='italic'>Rp. {props.price}</p>
            <p className='text-white bg-black rounded-lg px-2 py-0.5 w-fit mx-auto font-semibold'><Link to='/belanja/detail' state={{
                src: props.src,
                name: props.name,
                price: props.price,
            }}>See Detail</Link></p>
        </div>
    )
}


export default function Belanja() {

    return (
        <>
            <main className='flex gap-3 justify-between p-4'>
                <Image src={com1} name={'Asus IntelCore 9 '} price={16800000}  />
                <Image src={com2} name={'Acer Swift Z Ryzen 7'} price={17000000} />
                <Image src={com3} name={'MacBook M1PRO'} price={21500000} />
                <Image src={com4} name={'Lenove Slimpad I7 Core'} price={15700000} />
            </main>
            <Outlet />
            {/* <div className='flex flex-col top-0 left-0 bottom-0 right-2/3 bg-stone-400 border-r-2 border-black fixed p-5 '>
                <button className='font-bold text-xl text-right'>X</button>
                <img className='shadow-sm shadow-black' src={com1} />
                <h3 className='text-center font-bold text-3xl mt-2'>ASUS ROG Ryzen 9</h3>
                <p className='font-bold text-2xl mt-5'>Harga</p>
                <p className='mt-2'>Rp. 20000000</p>
                <p className='font-bold text-2xl mt-2'>Tersedia</p>
                <p className='font-semibold text-lg'>10</p>
                <p className='font-bold text-2xl'>Pesan</p>
                <div className='flex gap-x-3 mt-3'>
                    <button className='px-2 rounded bg-red-500 font-semibold'>-</button>
                    <p className='font-semibold text-lg'>0</p>
                    <button className='px-2 rounded bg-emerald-500 font-semibold'>+</button>
                </div>
            </div> */}
        </>
    )
}