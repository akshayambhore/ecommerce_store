import "./products.css"
import products from './product';
export function Product({id , name , image })
{
    return (
         <div key={id} class="product">
                    <img src={require(`./images/${image}`)} alt={name}/>
                    <div>
                        {name}
                    </div>
                    <button class="white-btn"> Add to Cart </button>
                </div>
    )
}

function Products ()
{
    return (<div class="product_container">    
       {
            products.map((product) => 
            {
                return <Product key={product.id} id ={product.id} name ={product.name} image ={product.image}/>
                // (<div key={product.id}>
                //     <img src={require(`./images/${product.image}`)} alt={product.name}/>
                //     <div>
                //         product name : {product.name}
                //     </div>
                //     <button> Add to Cart </button>
                // </div>)
            })
       }
    </div>)
}

export default Products;



