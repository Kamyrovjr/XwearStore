import { useDispatch, useSelector } from 'react-redux';
import { prevPhoto, nextPhoto } from '@/store/reducer/PhotosSlice';
import rightArrow  from '@/assets/images/icons/rightArrow.png'
import leftArrow  from '@/assets/images/icons/leftArrow.png'
import CatalogButtion from '@/components/common/buttons/catalogButtion';

const Gallery = () => {
    const dispatch = useDispatch()
    const { photos, currentIndex} = useSelector(state => state.photos)

    const showPreviousPhoto = () => {
        dispatch(prevPhoto());
    }

    const showNextPhoto = () => {
        dispatch(nextPhoto());
    }

    let currentCategory 

    switch(currentIndex) {
        case 0: 
            currentCategory = 'clothes'
            break;
        case 1: 
            currentCategory = 'shoes'
            break;
        case 2: 
            currentCategory = 'accessories'
            break;
    }

    return (
        <div className='flex flex-col items-start justify-center mb-20' style={{minWidth: '1541px'}}>
            <div style={{backgroundImage: `url(${photos[currentIndex].img})`, width: '100%', height: '631px'}}>
                <div className='flex flex-col items-start' 
                style={{marginLeft: '90px', marginTop: '98px', maxWidth: '400px'}}>
                    <h2 className='font-black text-5xl mb-5 text-wrap'>{photos[currentIndex].title}</h2>
                    <p className='text-lg mb-5 text-wrap'>{photos[currentIndex].text}</p>
                    <CatalogButtion catalogLink={`/catalog/${currentCategory}`}/>
                </div>
                <div className='flex items-center' style={{marginLeft: '90px', marginTop: '65px'}}>
                    <div 
                    onClick={showPreviousPhoto}   
                    className='transform -translate-y-1/2 w-8 h-8 rounded-full 
                    bg-white flex items-center justify-center'
                    style={{marginRight: '15px'}}
                    >
                        <img src={leftArrow}
                        alt=""
                        className='w-3 h-3'
                        />
                    </div>
                    <div 
                    onClick={showNextPhoto}    
                    className='transform -translate-y-1/2 w-8 h-8 rounded-full 
                    bg-white flex items-center justify-center'>
                        <img src={rightArrow}
                        alt=""
                        className='w-3 h-3'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
