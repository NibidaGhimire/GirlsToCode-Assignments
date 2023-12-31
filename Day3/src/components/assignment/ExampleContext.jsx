import React, { createContext } from 'react'
import ChildA from './ChildA'


export const fruitContext = createContext()

const ExampleContext = () => {
    const fruit = "Mango"
    return (
        <div>
            <fruitContext.Provider value={fruit}>
                <ChildA />
            </fruitContext.Provider>
        </div>
    )
}

export default ExampleContext
