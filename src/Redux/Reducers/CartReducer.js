const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
    cart:""
}

const CartReducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { productInfo, pdDetails } = action.paylod;
            console.log(productInfo, pdDetails)
            const check = state.products.find(pr => pr._id === productInfo._id);
            console.log(check)
            if (check) {
                const jsonCartInfo = localStorage.getItem('cartInfo');
                const cartInfo = JSON.parse(jsonCartInfo)

                // localStorage.setItem('cartInfo',cartInfo.push(a))
                console.log(jsonCartInfo)
                return state;

            }
            else {
                const price = parseInt(productInfo.price)
                console.log(pdDetails.quantity)
                const Tprice = state.totalPrice + price * pdDetails.quantities;
                const Tquantities = state.totalQuantities + pdDetails.quantities;
                productInfo.quantity = pdDetails.quantities;
                productInfo.color = pdDetails.color;
                productInfo.size = pdDetails.size;
                const newState = {
                    ...state, products: [...state.products, productInfo], totalPrice: Tprice, totalQuantities: Tquantities
                }
                const jsonState = JSON.stringify(newState)
                localStorage.setItem('newState', jsonState)

                return {
                    ...state, products: [...state.products, productInfo], totalPrice: Tprice, totalQuantities: Tquantities
                }

            }


        case 'INC':
            console.log(action.payload)
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            let Tprice = parseInt(findPro.price)

            const newState = {
                ...state,
                totalPrice: state.totalPrice + Tprice, totalQuantities: state.totalQuantities + 1
            }
            const jsonState = JSON.stringify(newState)
            localStorage.setItem('newState', jsonState)
            return {
                ...state,
                totalPrice: state.totalPrice + Tprice, totalQuantities: state.totalQuantities + 1
            }
        case "DEC":
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;
                let Tprice = parseInt(findPro.price)
                const newState = {
                    ...state,
                    totalPrice: state.totalPrice - Tprice, totalQuantities: state.totalQuantities - 1
                }
                const jsonState = JSON.stringify(newState)
                localStorage.setItem('newState', jsonState)
                return {
                    ...state,
                    totalPrice: state.totalPrice - Tprice, totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state;
            }


        case 'REMOVE':
            findPro = state.products.find(product => product._id === action.payload);
            const filtered = state.products.filter(product => product._id !== action.payload);
            let tprice = parseInt(findPro.price)
            const newOtherState = {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - tprice * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }

            const jsonOtherState = JSON.stringify(newOtherState)
            localStorage.setItem('newState', jsonOtherState)

            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - tprice * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }
        case 'OPEN_CART':
            console.log(action.payload)
            return {
                ...state,
                cart: action.payload

            }

        case 'CANCLE_CART':
            console.log(action.payload)
            return {
                ...state,
                cart: action.payload

            }
        default:
            { return state }
    }
}

export default CartReducer;





















































// 





























// const initialState = {
//     products: [],
//     totalPrice: 0,
//     totalQuantities: 0
// }

// const CartReducer = (state = initialState, action) => {
//     let findPro;
//     let index;
//     switch(action.type){
//         case 'ADD_TO_CART':
//         const  {productInfo, pdDetails} = action.paylod;
//         console.log(productInfo, pdDetails)
//         const check = state.products.find(pr => pr._id === productInfo._id);
//         console.log(check)
//         if(check){
//             const jsonCartInfo = localStorage.getItem('cartInfo');
//             const cartInfo = JSON.parse(jsonCartInfo)

//             // localStorage.setItem('cartInfo',cartInfo.push(a))
//             console.log(jsonCartInfo)
//             return state;

//         }
//          else {
//             const price = parseInt(productInfo.price)
//             console.log(pdDetails.quantity)
//             const Tprice = state.totalPrice + price * pdDetails.quantities;
//             const Tquantities = state.totalQuantities + pdDetails.quantities;
//             productInfo.quantity = pdDetails.quantities;
//             productInfo.color = pdDetails.color;
//             productInfo.size = pdDetails.size;
//             const a =  {
//                 ...state, products: [...state.products, productInfo],totalPrice: Tprice, totalQuantities: Tquantities 
//             }
//             const jsonCartInfo = localStorage.getItem('cartInfo');
//             const cartInfo = JSON.parse(jsonCartInfo);
//             cartInfo.push(a)
//             const productJson = JSON.stringify(cartInfo)


//             localStorage.setItem('cartInfo',productJson)
//             console.log(productJson)
//             return {
//                 ...state, products: [...state.products, productInfo],totalPrice: Tprice, totalQuantities: Tquantities 
//             }

//         }


//         case 'INC':
//             console.log(action.payload)
//             findPro = state.products.find(product => product._id === action.payload);
//             index = state.products.findIndex(product => product._id === action.payload);
//             findPro.quantity += 1;
//             state.products[index] = findPro;
//             let Tprice = parseInt(findPro.price)
//             const a = {
//                 ...state,
//                 totalPrice: state.totalPrice + Tprice, totalQuantities: state.totalQuantities+1
//             }
//             const jsonCartInfo = localStorage.getItem('cartInfo');
//             const cartInfo = JSON.parse(jsonCartInfo);
//             // cartInfo.push(a)
//             const productJson = JSON.stringify(cartInfo)


//             localStorage.setItem('cartInfo',productJson)
//             console.log(a)
//             return {
//                 ...state,
//                 totalPrice: state.totalPrice + Tprice, totalQuantities: state.totalQuantities+1
//             }
//           case "DEC":
//           findPro = state.products.find(product => product._id === action.payload);
//           index = state.products.findIndex(product => product._id === action.payload);
//           if(findPro.quantity > 1){
//              findPro.quantity -= 1;
//              state.products[index] = findPro;
//              let Tprice = parseInt(findPro.price)
//              return {
//                  ...state,
//                  totalPrice: state.totalPrice -Tprice , totalQuantities: state.totalQuantities - 1
//              }
//           } else {
//               return state;
//           }


//           case 'REMOVE':
//         findPro = state.products.find(product => product._id === action.payload);
//         const filtered = state.products.filter(product => product._id !== action.payload);
//         let tprice = parseInt(findPro.price)
//         return {
//             ...state,
//             products: filtered,
//             totalPrice: state.totalPrice - tprice * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
//         }

//         default:
//             { return state }
//     }
// }

// export default CartReducer;