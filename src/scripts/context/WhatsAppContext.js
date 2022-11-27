import { createContext, useReducer } from "react";

export const WhatsAppContext = createContext()

const whatsReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_OPEN_STATE':
            return { ...state, open: action.payload}
        default:
            return state
    }
}


export function WhatsAppProvider({ children }) {
    const [state, dispatch] = useReducer(whatsReducer, {
        open: false   
    })

    //This function is telling us if the whatsApp popUp, that comes from the Home component is open or not.
    //If it is open, then the whatsApp button in the ConnectByLogo component, will not work (won't open its own popUp)
    const changeOpenStatus = (open) => {
        dispatch({ type: 'CHANGE_OPEN_STATE', payload: open})
    }

    return (
        <WhatsAppContext.Provider value={{...state, changeOpenStatus}}>
            {children}
        </WhatsAppContext.Provider>

    )

}