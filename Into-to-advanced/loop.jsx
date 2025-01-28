const product=[
    {id:1, name:'A', price:100},
    {id:2, name:'B', price:200},
    {id:3, name:'C', price:300},
    {id:4, name:'D', price:400},
    {id:5, name:'E', price:500},
];
const {id,name,price}=product;
const listItems=product.map(product =><li key={id}></li>)
return(
    <ul>{listItems}</ul>
)