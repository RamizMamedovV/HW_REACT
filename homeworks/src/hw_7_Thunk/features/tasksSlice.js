import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialTasks } from '../tasks';

// Имитация асинхронной загрузки задач - вызываем fetchTasks.fulfilled
// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
//     // Имитируем задержку сети
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return initialTasks;
// });

// имитация не удачной загрузки - вызываем fetchTasks.rejected
// export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
//     await new Promise((resolve, reject) => {
//       setTimeout(() => reject(new Error('имитация не удачной загрузки - вызываем fetchTasks.rejected!')), 1000); 
//     });
//   });


  export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    // Имитируем случайный успех/ошибку
    const isSuccess = Math.random() > 0.7;
  
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    if (isSuccess) {
      return initialTasks; // Успех → action.payload = initialTasks
    } else {
      throw new Error('Failed to load! Try again!'); // Ошибка → action.error
    }
  });

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
      reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default tasksSlice.reducer;


export const selectAllTasks = (state) => state.tasks.items;
export const getTasksStatus = (state) => state.tasks.status;
export const getTasksError = (state) => state.tasks.error;


