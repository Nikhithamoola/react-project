import { configureStore, createSlice } from "@reduxjs/toolkit";


const productsSlice=createSlice({
name:'products',
initialState:{
    veg:[
        {name:'tomato',price:200.5},
        {name:'potato',price:300.5},
        {name:'cucumber',price:200.7},
    ],
    nonveg:[
        {name:'chicken',price:500.0},
        {name:'mutton',price:600.0},
        {name:'fish',price:700.0},
    ]
}
})
// const store=configureStore({
//     reducer:
//     {products:productsSlice.reducer,
//         cart:cartSlice.reducer,
//     }
// })

// export default store;

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
   reducers :{
    addTocart:(state,action)=>{
        const status=state.find(item=>item.name===action.payload.name);
        if(status){
            status.quantity +=1;
        }
        else{
            state.push({...action.payload,quantity:1});
        }
    }
   }
})
const store =configureStore({
    reducer:
    {products:productsSlice.reducer,
        cart:cartSlice.reducer,
    }
})
export default store;
export const {addTocart} = cartSlice.actions;