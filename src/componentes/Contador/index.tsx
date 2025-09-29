import { useState } from "react";

export default function Contador() {
    // let contagem = 0;
    const [contagem, setContagem] = useState(0);

    function handleClick() {
        // contagem = contagem + 1;
        setContagem(contagem + 1);
    }
    return (
        <>
            <button onClick={handleClick}>Incrementar {contagem}</button>
        </>
    );
}