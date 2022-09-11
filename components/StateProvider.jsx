// components/common/MenuProvider.js
import { createContext, useContext } from 'react'

// Create Context object.
const StateContext = createContext()

// Export Provider.
export function StateProvider(props) {
    const { value, children } = props

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

// Export useContext Hook.
export function useStateContext() {
    return useContext(StateContext);
}

