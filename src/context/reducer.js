
export const initialState = {
    cart: localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items")) : [],
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {
        email: null,
    },
    address: localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")) : []
}

export const getCartTotal = (cart) => {
    console.log(cart)
    return cart?.reduce((amount, item) =>  (item.price*item.quantity) + amount, 0)
}

function reducer(state, action) {
    switch(action.type) {
        case 'SET_USER':
            console.log(action.type)
            return {
                ...state,
                user: { ...state.user,
                    email: action.user
                }
            }
        case 'ADD_TO_CART':
            const productExists = state.cart.find(item => item.id === action.item.id)
            console.log(productExists?.title)
            if(productExists) {
                return {
                    ...state,
                    cart: state.cart.map(item=> item.id === action.item.id ?
                        {
                            ...item,
                            quantity: action.item.quantity + item.quantity
                        } : item) 
                }
            }
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart]
            const indexItem = state.cart.findIndex((item) => item.id === action.id)
            if(indexItem >= 0) {
                newCart.splice(indexItem, 1)
                return {
                    ...state,
                    cart: newCart
                }
            } else {
                return { ...state }
            }
        case 'UPDATE_PRODUCT_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.item.id ? {
                    ...item,
                    quantity: action.item.quantity
                } : item)
            }
        case 'ADD_NEW_ADDRESS':
            console.log(action.address)
            return {
                ...state, 
                    address: [...state.address, {
                        fullName:action.address.fullName,
                        mobileNo:action.address.mobileNo,
                        pincode:action.address.pincode,
                        houseNo:action.address.houseNo,
                        area:action.address.area,
                        landmark:action.address.landmark,
                        town:action.address.town,
                        state:action.address.state
                        }]
                    }
        default:
            return state
    }
}

export default reducer