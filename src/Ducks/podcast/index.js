import api from "../../api"

//Actions
const GET_PODCAST_FOR_COUNTRY = "GET_PODCAST_FOR_COUNTRY"
const GET_EPISODES= "GET_EPISODES"

//Initial State
const initialState ={
    topPodcasts:[],
    episodes:[]
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
        case GET_EPISODES:
                return {
                ...state,
                    episodes: action.payload
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

export const getEpisodes = (podcastId)=>{
    return async dispatch =>{
        try {
            const episodes = await api.getEpisodes(podcastId);
            dispatch({
                type: GET_EPISODES,
                payload: episodes
            })
        }catch (e) {
            console.log(e)
            console.log("CAN'T  GET EPISODES")
        }
    }
}





