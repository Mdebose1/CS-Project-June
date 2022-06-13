// import { getFirestore } from "firebase/firestore";
// import { useContext } from "react";
// import { createContext } from "react"

// export const ShopContext = createContext();

// export function useShop() {
//     return useContext( ShopContext );
// }

// export const StoreProvider = ({ children }) => {

//         const [products ,setproducts ] = useState( [] );
//         const [cart, setcart] = useState( { items: [], quantity: 0, grandtotal: 0} )
//         const { currentUser } = useAuth();
//         const db = getFirestore();

//         const getProducts = async() =>{
//             console.log('hi');
//             // fetch('http://localhost:500/api/v1/products')
//         }
//     const context = {
//         cart, products, getProducts
//     }

//     return(
//         <ShopContext.Provider value={ context }>
//             { children }
//         </ShopContext.Provider>
//     )
// }