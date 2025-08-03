import "./products.css"
export function Product({id , name , image ,onAdd})
{
    return (
         <div key={id} class="product">
                    <img src={require(`./images/${image}`)} alt={name}/>
                    <div>
                        {name}
                    </div>
                    <button class="white-btn" onClick={()=>onAdd(id,name,image)}> Add to Cart </button>
                </div>
    )
}

function Products ({ products, onAddToCart})
{
    return (<div class="product_container">    
       {
            products.map((product) => 
            {
                return <Product key={product.id} id ={product.id} name ={product.name} image ={product.image} onAdd={onAddToCart}/>
               
            })
       }
    </div>)
}

export default Products;



