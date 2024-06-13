import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { accessoriesData, clothesData, sneakersData } from '@/data/data'

const fakeFetchCardFromServer = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({sneakers: sneakersData, clothes: clothesData, accessories: accessoriesData});
    }, 1000);
  });
};
  
export const fetchCardFromServer = createAsyncThunk(
  'shoes/fetchShoes',
  async () => {
    const response = await fakeFetchCardFromServer();
    return response;
  }
);


export const initialState = {
    sneakers: [],
    clothes: [],
    accessories: [],
    sneakersCurrentPage: 0,
    clothesCurrentPage: 0,
    accessoriesCurrentPage: 0,
    imagePerPage: 4,
    status: 'idle',
    error: null,
}


const cardFromApiSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
      nextPage: (state, action) => {
        const { block } = action.payload;
        const blockArray = state[block]
        if(blockArray) {
          state[block + 'CurrentPage'] = (state[block + 'CurrentPage'] + 1) % Math.ceil(state[block].length / state.imagePerPage);
        }
    },
      prevPage: (state, action) => {
        const { block } = action.payload;
        const blockArray = state[block]
        if(blockArray) {
          state[block + 'CurrentPage'] = state[block + 'CurrentPage'] === 0 ? Math.ceil(state[block].length / state.imagePerPage) - 1 : state[block + 'CurrentPage'] - 1;
        }
    }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchCardFromServer.pending, (state) => {
          state.status = 'loading';
      })
      .addCase(fetchCardFromServer.fulfilled, (state, action) => {
          state.status = 'succeeded';
          const { sneakers, clothes, accessories } = action.payload;
          state.sneakers = sneakers;
          state.clothes = clothes;
          state.accessories = accessories;
      })
      .addCase(fetchCardFromServer.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
      });
    }
});

export const { nextPage, prevPage } = cardFromApiSlice.actions
export default cardFromApiSlice.reducer;