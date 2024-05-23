import { configureStore } from '@reduxjs/toolkit'
import { appointmentsApi } from './apiSlice/appointmentsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appointmentsApi.middleware),
})

setupListeners(store.dispatch)