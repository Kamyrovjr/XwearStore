import { Link } from 'react-router-dom';
import rightArrow  from '../../../assets/images/icons/rightArrow.png'


const CatalogButtion = ({ catalogLink }) => {
    return (
        <div  className='relative rounded-5 bg-black flex item-center justify-start' style={{padding: '23px 27px', minWidth: '251px', height: '66px'}}>
            <Link to={catalogLink}><span className='text-white text-xs font-extrabold'>ПЕРЕЙТИ В КАТАЛОГ</span></Link>
            <img src={rightArrow} alt="" className='w-3 h-3 absolute top-7 right-3'/>
        </div>
       
    );
}

export default CatalogButtion;
