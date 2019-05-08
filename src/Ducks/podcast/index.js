import api from "../../api"

//Actions
const GET_PODCAST_FOR_COUNTRY = "GET_PODCAST_FOR_COUNTRY"

//Initial State
const initialState ={
    topPodcasts:[]
}

//Reducer
export default function podcastReducer(state = initialState, action = {}) {
    console.log(action)
    switch (action.type) {

        case GET_PODCAST_FOR_COUNTRY:
            return{
                ...state,
                topPodcasts: action.payload

            }

        default:
            return state

    }

}

//Actions Creators
export const  getTopPodcastForCountry = (country = "us")=>{
    return async dispatch =>{

        try {
            const podcast = await api.getTopPodcastsForCountry(country);
            dispatch({

                type:GET_PODCAST_FOR_COUNTRY ,
                payload: podcast
            })
        } catch (err) {
            console.log(err)
            console.log("CAN'T  GET PODCAST")
        }
    }
}





