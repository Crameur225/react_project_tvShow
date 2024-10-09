import { TvShowAPI } from './api/tv-show';
import { Logo } from './assets/logo/Logo';
import { TvShowDetail } from './components/TVShow/TVShowDetail';
import { BACKDROP_BASE_URL } from './config';
import './Global.css';
import s from './style.module.css'
import logo from './assets/image/logo.png';
import {useEffect, useState} from 'react'
import { TVShowListItem } from './components/TVShowListItem/TVShowListItem';
import { TVShowList } from './components/tvShowList/TVShowList';
import { SearchBar } from './components/SearchBar/SearchBar';

export function App(){

    const [currentTVShow, setCurrentTVShow] = useState()
    const [recommendationList, setRecommendationList] = useState([])

    async function fetchPopulars(){
        try{
            const populars = await TvShowAPI.fetchPopula()
            if(populars.length > 0){
                setCurrentTVShow(populars[0])
            }
        }catch(error){
            alert('Un problème est survenu ' + error + ' veuillez ressayer plus tard !')
        }
    }

    async function fetchRecommendations(tvShowId){
        try{
                const recommendations = await TvShowAPI.fetchRecommendations(tvShowId)
            if(recommendations.length > 0){
                setRecommendationList(recommendations.slice(0, 10))
            }
        }catch(error){
            alert('Un problème est survenu durant la recherche des recommendations')
        }
    }

    async function searchTVShow(tvShowName){
        try{
            const searcheResponse = await TvShowAPI.fetchByTitle(tvShowName);
        if(searcheResponse.length > 0){
          setCurrentTVShow(searcheResponse[0]);
        }
        }catch(error){
            alert('Un problème est survenu pendant la recherche des séries ')
        }
      }

    useEffect(() =>{
        fetchPopulars()
    }, []);

    useEffect(() =>{
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id)
        }
    }, [currentTVShow]);
    
    // function setCurrentTVShowFromRecomendations(tvShow){
    //    alert(JSON.stringify(tvShow))
    // }
    console.log(`${process.env.REACT_APP_API_KEY_PARAM}`);
    
    return (

    <div className={s.main_container}
    style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
        <div className={s.header}>
            <div className='row'>
               <div className='col-4'>
                <Logo 
                image={logo}
                title="WatoWatch" 
                subtitles="Find a show you may like" 
                />
               </div>
               <div className='col-md-12 col-lg-4'>
                <SearchBar onSubmit={searchTVShow}/>
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>{currentTVShow && <TvShowDetail tvShow={currentTVShow}/>}</div>
        <div className={s.recommendations}>
             {recommendationList && recommendationList.length > 0 && <TVShowList 
             onClickItem={setCurrentTVShow} 
             tvShowList={recommendationList}/>} 
             </div>

    </div>
    )
}