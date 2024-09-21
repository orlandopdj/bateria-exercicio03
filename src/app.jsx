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
    const [step, setStep] = useState(1)
    const [sholdBeOpen, setSholdBeOpen] = useState(true)

    console.log(sholdBeOpen, '<- estado')
    const handleClickCloseButton = () => setSholdBeOpen((s) => !s)
    const handleClickBackButton = () => setStep((s) => s - 1)
    const handleClickNextButton = () => setStep((s) => s + 1)
    return (
        <>
            <div className="container-close">
                <button onClick={handleClickCloseButton} className="close">{sholdBeOpen ? 'Fechar' : 'Abrir'}</button>
            </div>

            {sholdBeOpen && (
                <div className="steps">
                    <ul className="numbers">
                        {steps.map((item, i) => (
                            <li className={i + 1 === step ? 'active' : ''} key={item.id}>{i + 1}</li>
                        ))}
                    </ul>

                    <p className="message">
                        Passo: {step}: {steps[step - 1].description}
                    </p>

                    <div className="buttons">
                        <button onClick={handleClickBackButton}>Anterior</button>
                        <button onClick={handleClickNextButton}>Próximo</button>
                    </div>

                </div>)}
        </>
    )
}

export { App }