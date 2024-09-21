import { useState } from "react"

const steps = [
    {
        id: crypto.randomUUID(),
        description: "Entender o problema do cliente"
    },
    {
        id: crypto.randomUUID(),
        description: "Desenvolver a solução do problema",
    },
    {
        id: crypto.randomUUID(),
        description: "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
    },
]

const App = () => {

    const [actived, setActived] = useState('')
    const [sholdBeOpen, setSholdBeOpen] = useState(true)

    console.log(sholdBeOpen, '<- estado')
    const handleClickCloseButton = (e) => setSholdBeOpen((s) => !s)
    const handleClickBackButton = (e) => console.log(e.target.textContent)
    const handleClickNextButton = (e) => console.log(e.target.textContent)
    return (
        <>
            <div className="container-close">
                <button onClick={handleClickCloseButton} className="close">{sholdBeOpen ? 'Fechar' : 'Abrir'}</button>
            </div>

            {sholdBeOpen &&
                <div className="steps">
                    <div className="numbers">
                        <div className={actived}>1</div>
                        <div className={actived}>2</div>
                        <div className={actived}>3</div>
                    </div>

                    <p className="message">Passo 1: Entender o problema do cliente</p>

                    <div className="buttons">
                        <button onClick={handleClickBackButton}>Anterior</button>
                        <button onClick={handleClickNextButton}>Próximo</button>
                    </div>

                </div>}
        </>
    )
}

export { App }