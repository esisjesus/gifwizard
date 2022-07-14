import { useFindGifs } from "../hooks/useSearchGif"
import { GifGridItem } from "./GifGridItem"
import { LoadingBar } from "./LoadingBar"

export const GifGrid = ( { searchedQuery } ) => {
    const {foundGifs, loading, notFound} = useFindGifs(searchedQuery)
    return (
        <>
            <h3>{searchedQuery}</h3>
            {/* Loading Bar */}
            {loading && <LoadingBar/>}
            {/* No Gifs found */}
            {notFound ?
                <div style={{display: "flex", flexDirection:"row", justifyContent:"center", alignItems:"center", height:"300px", width:"100%", fontWeight:"bolder", fontSize:"20px"}}>
                    <p>Sorry &#128542; No GIFs found for {searchedQuery}</p>
                </div>
            :
                <div>
                    <div className="gif_grid">
                    {/* Gifs */}
                    {foundGifs.map(gif => <GifGridItem key={gif.id} {...gif}/>)}
                    </div>
                </div>
            }
        </>
    )
}
