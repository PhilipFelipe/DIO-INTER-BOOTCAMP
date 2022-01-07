import {useState} from 'react';

function SmartCounter() {
    //Retorna um vetor;
    //1. Variável stateful;
    //2. Função amarrada a essa variável que atualiza esse valor.
    const [quantity, UpQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => UpQuantity(quantity + 1)}>Increase</button>
        </>
    )
};

export default SmartCounter;