import { useState, useEffect } from "react"
import { searchGifs } from "../service/searchGifs"

export const useFindGifs = query => {
    const [foundGifs, setFoundGifs] = useState([])
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        searchGifs(query)
        .then(res => {setFoundGifs(res), setLoading(false), !res.length && setNotFound(true)})
    }, [])
    

    return {foundGifs, loading, notFound}
}
