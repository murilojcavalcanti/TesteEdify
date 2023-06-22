import { MouseEventHandler } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface RatingPropTypes {
    rating: number
    change?: (e: number) => void
}

const Rating = ({ rating, change }: RatingPropTypes) => {
    function handleChange(value: number) {
        if (change) change(value)
    }
    return (
        <ul className='flex flex-row space-x-1 items-center justify-center'>
            {[1, 2, 3, 4, 5].map((item, index) =>
                <li key={index} className='cursor-pointer' onClick={() => handleChange(item)}>
                    { item <= rating ? <AiFillStar className='text-yellow-400' /> : <AiOutlineStar />}
                </li>
            )}
        </ul>
    )
}

export default Rating