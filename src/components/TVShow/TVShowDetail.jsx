import { FiveStarRaiting } from '../FiveStarRaiting/FiveStarRaiting';
import s from './style.module.css';
export function TvShowDetail({tvShow}){
    const rating = tvShow.vote_average / 2;
    return <div>
        <div className={s.title}>{tvShow.name}</div>
        <div className={s.rating_container}>
            < FiveStarRaiting rating={rating} />
        <div className={s.rating}>{tvShow.vote_average/5}</div>
        </div>
        <div className={s.overview}>{tvShow.overview}</div>
    </div>
}