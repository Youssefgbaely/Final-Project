import { useContext } from 'react'
import { storeContext } from '../../Store';

export default function Sale() {
    const {discount, setDiscount } = useContext(storeContext);
    return (
        <div className='w-20 h-6.75 bg-[#EA4B48] text-white rounded'>
            <div className='pl-2'>Sale {discount}%</div>
        </div>
    )
}
