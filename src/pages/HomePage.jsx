import ProductGrid from "../components/productGrid";
import products from "../data/products.";

function HomePage({  updateCartItems, cartItems=[]}) {



    return(
        <>
        <ProductGrid products={products}  updateCartItems={updateCartItems} cartItems={cartItems}/>
        </>
    )
}

export default HomePage;



