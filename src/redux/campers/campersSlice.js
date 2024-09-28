import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронна дія для отримання всіх кемперів
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async () => {
    const response = await axios.get(
      'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
    );
    console.log(response.data);
    return response.data.items; // Повертаємо лише масив "items"
  }
);

// Асинхронна дія для завантаження кемперів (з підтримкою пагінації)
// export const fetchCampers = createAsyncThunk(
//   'campers/fetchCampers',
//   async (page = 1) => {
//     const response = await axios.get(
//       `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=10`
//     );
//     return { data: response.data, page }; // Повертаємо дані та сторінку
//   }
// );

// Асинхронна дія для отримання конкретного кемпера за id
export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async id => {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
    );
    return response.data; // Повертаємо дані про конкретного кемпера
  }
);

const initialState = {
  items: [], // Для списку кемперів
  camper: null, // Для збереження даних про окремого кемпера
  // currentPage: 1, // Додаємо поточну сторінку
  loading: false,
  error: null,
  // hasMore: true, // Прапор, чи є ще кемпери для завантаження
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      // .addCase(fetchCampers.fulfilled, (state, action) => {
      //   state.loading = false;
      //   // Якщо сторінка не перша, додаємо нові дані до існуючих
      //   if (action.payload.page === 1) {
      //     state.campers = action.payload.data;
      //   } else {
      //     state.campers = [...state.campers, ...action.payload.data];
      //   }
      //   state.currentPage = action.payload.page; // Оновлюємо поточну сторінку
      //   state.hasMore = action.payload.data.length === 10; // Перевіряємо, чи є ще кемпери
      // })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Завантаження конкретного кемпера за id
      .addCase(fetchCamperById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload; // Зберігаємо конкретного кемпера
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCampers = state => state.campers.items;
export const selectCamper = state => state.campers.camper; // Селектор для конкретного кемпера
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

export default campersSlice.reducer;
