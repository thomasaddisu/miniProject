import ProductGrid from "../components/productGrid";
import products from "../data/products.";

function HomePage({  updateCartItems}) {



    return(
        <>
        <ProductGrid products={products}  updateCartItems={updateCartItems}/>
        </>
    )
}

export default HomePage;