// apiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentsApi = createApi({
    reducerPath: 'appointmentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/',
        prepareHeaders: (headers, { getState }) => {
            const token = 'x9+y9Sl4INrbnye8OF6R+iiu4UNCi51xG4M9MqCI6NHR';
            headers['Amelia'] = token;
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAppointments: builder.query({
            query: ({ dates, page, skipServices, skipProviders }) => `appointments&dates=${dates}&page=${page}&skipServices=${skipServices}&skipProviders=${skipProviders}`,
        }),
    }),
});

export const { useGetAppointmentsQuery } = appointmentsApi;
