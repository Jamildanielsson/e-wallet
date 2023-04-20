const initialState = { // Vad vår Redux store ska innehålla
    cards: JSON.parse(localStorage.getItem('creditCard')) || [],
    active: JSON.parse(localStorage.getItem('activeCard')) || {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CREDITCARDS':
            localStorage.setItem('creditCard', JSON.stringify([...state.cards, action.payload]));

            return {
                ...state,
                cards: [...state.cards, action.payload]
            }

        case 'ADD_TO_ACTIVE':
            localStorage.setItem('activeCard', JSON.stringify(action.payload));
            return {
                ...state,
                active: action.payload
            }

        case 'REMOVE':
            const cards = JSON.parse(localStorage.getItem('creditCard'));

            const newCardStack = cards.filter((card) => card.cardId !== action.payload.cardId)
            localStorage.setItem('creditCard', JSON.stringify(newCardStack))

            let removeCard = state.cards.findIndex((card) => card === action.payload)
            const newStack = [...state.cards]
            newStack.splice(removeCard, 1)

            return {
                ...state,
                cards: newStack
            }

        case 'REMOVE_FROM_ACTIVE':

            let activeC = JSON.parse(localStorage.getItem('activeCard'))

            // Kolla om det finns aktivt kort
            // Kolla om det aktiva kortet är samma som det som du vill ta bort

            if (activeC && activeC.cardId === action.payload.cardId) {
                localStorage.removeItem('activeCard')
                return {
                    ...state,
                    active: {}
                }
            }

        default:
            return state;
    }
}

export default reducer;