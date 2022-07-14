import { useState } from "react"



export const SearchBar = ( { onNewSearchQuery } ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = event => setInputValue(event.target.value)
    
    const onSubmit = event => {
        event.preventDefault()

        const trimedValue = inputValue.trim()
        const processedValue = trimedValue.charAt(0).toUpperCase() + trimedValue.slice(1);
        if( processedValue.length < 1 ) return;
        onNewSearchQuery( processedValue )
        setInputValue('')
    }
    
    return (
    <>
        <form onSubmit={ onSubmit }>    
            <input 
            type="text"
            placeholder="Search some cool gifs here"
            value={ inputValue }
            onChange={ handleInputChange }
            />
        </form>
    </>
    )
}
