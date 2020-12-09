import React,{useEffect,useState} from 'react';
import axios from "axios";
import style from "./Details.module.css"
const Details = (props) => {

    const [gameInfo, setGameInfo] =useState([]);
    const [mainImage, setMainImage]= useState(gameInfo.background_image)
    const [miniImages, setMiniImages] = useState([])
    const [tags,setTags]=useState([])
        useEffect(()=>{
            axios.get(`https://api.rawg.io/api/games?page_size=1&search=${props.title}`)
            .then(response=>{
                setGameInfo(response.data.results[0])
                setMainImage(response.data.results[0].background_image)
                setMiniImages(response.data.results[0].short_screenshots)
                setTags(response.data.results[0].tags.filter(x=>{
                    return x.language === "eng"
                }))
            })
        },[props.title])

        const mainImageChangeHandler = (e)=>{
            setMainImage(e);
        }

    return (

        
        <React.Fragment>
            <div className={style.Card}>
                <div className={style.Big__Image__Area}>
                    <img className={style.Big__Image} src={mainImage} alt=""/>
                </div> 
                <div className={style.Mini__Image__Area}>
                    {
                        
                    miniImages.map(x=>{
                    return(<img onClick={(e)=>mainImageChangeHandler(e.target.src)} className={style.Mini__Image} key={Math.random()}src={x.image} alt=""/>)  

                    })
                    }
                </div>
                <div className={style.Info__Area}>
                    <div className={style.Info__Left}>
                        <h2 className={style.Game__Title}>{gameInfo.name}</h2>
                    </div>

                    <div className={style.Info__Right}>

                        <span className={style.Release__Date}>Release Date: {gameInfo.released}</span>
                        <span className={style.Score}>Rating: {Math.floor(gameInfo.score)}%</span>
                        <div className={style.Tag__Area}>

                            {
                                tags.length >0 ?tags.map(x=>{
                                    return(
                                        <span key={x.name.toLowerCase()}>
                                            {(x.name).toUpperCase()}
                                        </span>
                                    )
                                }):""
                            } 

                        </div>


                    </div>
                    
                </div>    
            </div>
        </React.Fragment>
    );
}


export default Details;
