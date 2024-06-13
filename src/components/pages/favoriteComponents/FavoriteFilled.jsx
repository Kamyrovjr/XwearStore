import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteItems } from '@/store/reducer/FavoriteSlice';

const FavoriteFilled = () => {
    const dispatch = useDispatch()
    const { favoriteItems } = useSelector(state => state.favoriteItems)

    const removeItemsFavorite = (itemId) => {
        dispatch(removeFavoriteItems(itemId))
    }

    return (
        <div className='flex items-start justify-start w-full'>
            <div className='flex items-start justify-start flex-wrap w-full mb-36'>
                {favoriteItems.map(item => (
                        <div key={item.id} className='flex flex-col items-start justify-start mr-7' style={{ maxWidth: '318px' }}>
                            <div className='relative'>
                                <img src={item.image} 
                                style={{ height: '318px', width: '318px' }} 
                                alt='' 
                                />
                                <img
                                    src={item.yellowStar}
                                    onClick={() => removeItemsFavorite(item.id)}
                                    className='absolute right-0 top-0 cursor-pointer'
                                    style={{ height: '19px', width: '18px' }}
                                    alt=''
                                />
                            </div>
                            <h2 className='text-lg font-bold overflow-hidden truncate w-64'>{item.name}</h2>
                            <p className='text-sm'>{item.price} $</p>
                        </div>
                ))}
            </div>
        </div>
    );
}

export default FavoriteFilled;
