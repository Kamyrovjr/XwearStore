import { createSlice } from '@reduxjs/toolkit'
import clothes from '../../assets/images/gallery/clothes.png'
import accessories from '../../assets/images/gallery/accessories.jpg'
import shoes from '../../assets/images/gallery/shoes.jpg'


export const initialState = {
    photos: [
        {id: 1, img: clothes, title: 'ШИРОКИЙ АССОРТИМЕНТ ОДЕЖДЫ', text: 'Одежда от известные брендов у нас в каталоге. Только качественные вещи.'},
        {id: 2, img: shoes, title: 'ШИРОКИЙ АССОРТИМЕНТ ОБУВИ', text: 'Обувь от известные брендов у нас в каталоге. Только качественная обувь.'},
       {id: 3, img: accessories, title: 'ШИРОКИЙ АССОРТИМЕНТ АКСЕССУАРОВ', text: 'Аксессуары от известных брендов у нас в каталоге. Только качественные аксессуары.'}
      
    ],
    
    currentIndex: 0
}
    

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        nextPhoto: (state) => {
            state.currentIndex = (state.currentIndex +1) % state.photos.length
        },
        prevPhoto: (state) => {
            state.currentIndex = (state.currentIndex -1 + state.photos.length) % state.photos.length
        }, 
        updateText: (state, action) => {
            const { title, text } = action.payload
            const currentPhoto = state.photos[state.currentIndex]
            if(currentPhoto) {
                currentPhoto.title = title
                currentPhoto.text = text
            }
        }
    }
})


export const { nextPhoto, prevPhoto } = photosSlice.actions
export default photosSlice.reducer
