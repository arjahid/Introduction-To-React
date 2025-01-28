function MyButton(){
    function handleClick(){
        console.log('Click happened');
    }
}
return <button onClick={handleClick}>Click me</button>