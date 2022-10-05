import {useState} from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import Cart from './Cart';
import Avater from '../../image/image-avatar.png'

const Nav = () => {


    const[show,setShow] = useState(false)

    const handleToggle = () => setShow(pre => !pre)

    const DUMMYMENU = ['Collection','Men','Women','About','Contact'];

  return (
    <div className="flex justify-between items-center border-b border-blue-200">
        <div className='flex items-center space-x-8'>
        <div>
           <h1 className='text-2xl font-[700]'>Sneaker</h1>
        </div>
        <div className="">
            <ul className='flex space-x-6'>
                {DUMMYMENU.map((i,index)=> <li className='text-[15px] text-blue-200 font-[400] cursor-pointer py-8 after:w-full after:h-[2px] relative after:bottom-0 after:left-0 after:absolute after:bg-orange-100 after:scale-x-0 hover:after:scale-x-[1] hover:duration-500' key={index}>{i}</li>)}
            </ul>
        </div>
    </div>

    <div className='flex items-center space-x-5'>
        <button className='' onClick={handleToggle}>
            <AiOutlineShoppingCart/>
            <Cart toggle={show}/>
        </button>

        <div className='w-[35px] h-[35px] rounded-full hover:ring-2 hover:duration-500 hover:ring-orange-400'>
            <img src={Avater} alt="avater" />
        </div>
    </div>
    </div>
  )
}

export default Nav;