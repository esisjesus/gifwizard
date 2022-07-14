const apiKey = 'mPmQjkT6fjRAyrky7w1GXI1nFvnskbWF'
export const  searchGifs = async (query) =>{
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25`
    try{
        const response = await fetch(url)
        const json = await response.json()
        const {data} = await json
        const gifs = data.map( img =>( {
            id: img.id,
            url: img.images.downsized_medium.url
        } ) )
        return gifs
    }catch(error){
        console.error(error)
    }
}