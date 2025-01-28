const Product=[
    {title:'mango',isFruit:true,id},
    {title:'banana',isFruit:true,id},
    {title:'carrot',isFruit:false,id},
    {title:'potato',isFruit:false,id},

]
export default function ShoppingList(){
    const {title,isFruit,id}=Product;
    const listItems=Product.map(product =><li key={id} style={{
        color:isFruit?'green':'red'
    }} ></li>)
    return(
        <ul>{listItems}</ul>
    )
}