import Hero from '../img/komputer-1.jpg'
import com1 from '../img/komputer-2.jpg'
import com2 from '../img/komputer-3.jpg'
import com3 from '../img/komputer-4.jpg'
import com4 from '../img/komputer-5.jpg'
import com5 from '../img/komputer-6.jpg'

export default function Home() {
    return (
        <>
            <main className='mb-10'>
                <div className='flex gap-y-6 flex-col justify-center items-center bg-cover w-full h-[500px]' style={{backgroundImage: `url(${Hero})`}}>
                    <h3 className='uppercase text-red-600 text-4xl font-bold' style={{textShadow: '4px 4px 3px black'}}>provide your techology needs</h3>
                    <h3 className='uppercase text-black text-4xl font-bold' style={{textShadow: '1px 1px 3px white'}}>only on hyperbeast</h3>
                </div>
                <div>
                    <h2 className='font-bold text-4xl ml-10 underline underline-offset-8 mt-6'>TOP SELL</h2>
                </div>
                <div className='p-6 flex justify-between gap-x-5 mb-4'>
                    <div className='pb-5 border-b-2 border-white hover:border-black'>
                        <img src={com1} className='basis-1/6 w-full' />
                    </div>
                    <div className='pb-5 border-b-2 border-white hover:border-black'>
                        <img src={com3} className='basis-1/6 w-full' />
                    </div>
                    <div className='pb-5 border-b-2 border-white hover:border-black'>
                        <img src={com4} className='basis-1/6 w-full' />
                    </div>
                    <div className='pb-5 border-b-2 border-white hover:border-black'>
                        <img src={com5} className='basis-1/6 w-full' />
                    </div>
                </div>
            </main>
            <footer className='bg-black p-3 flex justify-center text-white'>
                <p className='text-sm'>Designed by WiraAnanda</p>
            </footer>
        </>
    )
}