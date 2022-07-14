import { useState } from 'react'
import { SearchBar, GifGrid } from './components'
import './styles.css'
export const GifWizardApp = () => {
    const [ searchedQueries, setSearchedQueries ] = useState([ 'Random' ])
    const newSearchQuery = query => {
        if(searchedQueries.includes(query)){
            searchedQueries.splice(searchedQueries.indexOf(query), 1)
            setSearchedQueries([query, ...searchedQueries])
        }else{
            setSearchedQueries([query, ...searchedQueries])
        }
    }
    
    return (
        <>
            <h1 style={{textAlign: "center"}}>GifWizard </h1>

            < SearchBar onNewSearchQuery = { newSearchQuery } />

            { searchedQueries.map( element => <GifGrid key={element} searchedQuery={element}/>)}
        </>
    )
}
