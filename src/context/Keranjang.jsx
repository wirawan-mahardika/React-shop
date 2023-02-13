import { createContext, useReducer } from "react"


export const Keranjang = createContext()

const initialState = {
    harga: 0,
    hargaSatuan: 0,
    hargaTotal: 0,
    name: '',
    jumlah: 0,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'beli':
            return {
                ...state,
                
            }
    }
}