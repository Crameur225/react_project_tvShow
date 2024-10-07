import axios from "axios";
import {BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL} from '../config'


export class TvShowAPI {
   static async fetchPopula(){
       const reponse = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
       return reponse.data.results;
    }
   static async fetchRecommendations(tvShowId){
       const reponse = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
       console.log(reponse.data.results);
       return reponse.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(
          `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
        );
        return response.data.results;
      }
}
