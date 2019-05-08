import  api from "../../api"

//Actions
const SELECT_COUNTRY= "USER/SELECTED_COUNTRY"
const GET_COUNTRIES = "GET_COUNTRIES"

//Initial State
const initialState ={
    countries:[],
    selectedCountry:"United States"
}

//Reducer
export default function appReducer (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload

            }
        case SELECT_COUNTRY:
            return {
                ...state,
                selectedCountry:action.payload
            }
        default:
            return state
    }

}

//Actions Creators
/**
 * Get user countries
 */
export const  getCountries = ()=>{
    return async dispatch =>{
        try {
            const countries = await api.getCountries();
            dispatch({
                type: GET_COUNTRIES,
                payload: countries
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const selectCountry = (country)=>{
    return {
        type:SELECT_COUNTRY,
        payload: country
    }

}



