import {createSlice} from "@reduxjs/toolkit";

const initialStoreState ={
    products:[
        {
            id: 1,
            name: 'Lorem ipsum dolor sit amet',
            price: 10,
            tag:'new',
            image: 'popular1.png'
        },
        {
            id: 2,
            name: 'Suspendisse tempus',
            price: 20,
            tag:'new',
            image: 'popular2.png'
        },
        {
            id: 3,
            name: 'Etiam elementum',
            tag: 'new',
            price: 30,
            image: 'popular3.png'
        },
        {
            id: 4,
            name: 'Proin a augue ligula',
            tag: 'new',
            price: 40,
            image: 'popular4.png'
        },
        {
            id: 5,
            name: 'Fusce vel vehicula',
            tag: 'popular',
            price: 50,
            image: 'popular5.png'
        },
        {
            id: 6,
            name: 'Donec egestas ligula',
            tag: 'popular',
            price: 60,
            image: 'popular6.png'
        },
        {
            id: 7,
            name: 'Sed in posuere diam',
            tag: 'popular',
            price: 70,
            image: 'popular1.png'
        },
        {
            id: 8,
            name: 'Morbi tempor consectetur',
            tag: 'popular',
            price: 80,
            image: 'popular2.png'
        },
        {
            id: 9,
            name: 'Sed ipsum augue',
            tag: 'popular',
            price: 90,
            image: 'popular3.png'
        },
        {
            id: 10,
            name: 'Ut fermentum',
            tag: 'popular',
            price: 100,
            image: 'popular6.png'
        },


    ],
    cart:[],
    productTaken: []
};
const storeSlice = createSlice({
    name:"create",
    initialState: initialStoreState,
    reducers:{
        addItemsToCart: (state,action) => {

            let  items  = state.products.find(item => item.id === action.payload);
            items.count=1
            state.productTaken =[...state.productTaken,items]

        },
        updateSingleProduct: (state,action) => {
            let isExist = state.productTaken.find(element=>element.id == action.payload.product_id)
            if (isExist != undefined) {
                state.productTaken.find(function (item) {
                    if (item.id === action.payload.product_id) {
                        return item.count = action.payload.addedQuantity

                    }
                })
            }
            else
            {
                let  items  = state.products.find(item => item.id === action.payload.product_id);
                items.count=action.payload.addedQuantity
                state.productTaken =[...state.productTaken,items]

            }
        },
        removeCartItem: (state,action) => {

            let  items  = state.productTaken.filter(item => item.id != action.payload.product_id);
            state.productTaken =items;

        },
        clearCart: (state,action) => {

            if (action.payload.type=='yes') {
                state.productTaken = initialStoreState;
            }

        },
    }
})

export const { getGlobalArrays,addItemsToCart,updateSingleProduct,removeCartItem,clearCart } = storeSlice.actions
export default storeSlice.reducer;