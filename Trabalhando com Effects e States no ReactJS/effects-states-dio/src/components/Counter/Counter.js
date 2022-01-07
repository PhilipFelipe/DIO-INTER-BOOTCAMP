function Counter(){

    let quantity = 10;

    function UpQuantity() {
        quantity += 1;
        document.getElementById('counter-box').innerHTML = quantity;

    }

    return (
        <>
            <h1 id="counter-box" >{quantity}</h1>
            <button onClick={UpQuantity}>Increase</button>
        </>
    )
}

export default Counter