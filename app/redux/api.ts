import { createEntityAdapter } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const itemsAdapter = createEntityAdapter({
    selectId: (item: any) => item.trackId
})

const itemsSelector = itemsAdapter.getSelectors()

const api = createApi({
    reducerPath: "itunesApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://itunes.apple.com"}),
    endpoints: (builder) => ({
        search: builder.query({
            query: ({term, offset}: {term: string, offset: number}) => `search?term=${term}&limit=10&offset=${offset}`,
            transformResponse: (response: any) => {
                return itemsAdapter.addMany(
                    itemsAdapter.getInitialState(),
                    response.results
                )
            },
            forceRefetch: ({currentArg, previousArg}) => {
                return currentArg?.offset !== previousArg?.offset
            },
            serializeQueryArgs: ({endpointName, queryArgs}) => {
                return `${endpointName}-${queryArgs?.term}`
            },
            merge: (currentState, incomingState) => {
                itemsAdapter.addMany(currentState, itemsSelector.selectAll(incomingState))
            },
        })
    })
})

export const {
    useSearchQuery
} = api

export {
    itemsSelector,
    itemsAdapter
}

export default api