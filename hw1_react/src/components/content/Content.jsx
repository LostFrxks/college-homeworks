import { useState, useEffect } from "react"
import "./Content.css"


function Content(){
    const [isSearching, setIsSearching] = useState(false)
    const [queueStep, setQueueStep] = useState(null)
    const [acceptedCount, setAcceptedCount] = useState(0) 


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleQueueClick = () => {
        if (isSearching || queueStep) return

        setIsSearching(true)

        setTimeout(() => {
        setIsSearching(false)
        setQueueStep('found')
        }, 1500)
    }

    const handleAcceptClick = () => {
        if (queueStep!== 'found') return
        setQueueStep('accepting')
        setAcceptedCount(1)

        const intervalId = setInterval(() => {
        setAcceptedCount(prev => {
            if (prev >= 10) {
            clearInterval(intervalId)
            setQueueStep(null)
            return prev
            }
            return prev + 1
        })
        }, getRandomInt(100, 1200))
    }

    const isModalVisible = queueStep !== null

    return(
        <main className='content' id='heroes'>
            <div className='content__overlay'/>

            <div className='content__inner'>
                <h1 className='content__title'>РЕГНУТЬ КАТОЧКУ</h1>
                <p className='content__subtitle'>
                    Подобрать матч с 9-ю лучшими игроками доты, которые не видели дневного света и травы.
                </p>
                <div className='content__actions'>
                    <button className='content__btn content__btn--primary' onClick={handleQueueClick}>
                        {isSearching ? 'Ищем катку…' : 'РЕГНУТЬ КАТОЧКУ'}
                    </button>                    
                    <button className='content__btn content__btn--ghost'>Статистика</button>
                </div>

                <div className='content__tags' id='stats'>
                    <span className='content__tag'>Трекер тильта</span>
                    <span className='content__tag'>Путь к 2к MMR</span>
                    <span className='content__tag'>Пати без саппортов</span>
                </div>
            </div>

            {/*Агай, гптшка только это написал, просто первый вариант который я сделал показался мне скучным. Остальное было сделано мною*/}
            {isModalVisible && (
                <div className='queue-modal'>
                <div className='queue-modal__backdrop'/>
                <div className='queue-modal__window'>
                    {queueStep === 'found' && (
                    <>
                        <div className='queue-modal__title'>ВАША ИГРА ГОТОВА</div>
                        <div className='queue-modal__mode'>TURBO</div>

                        <button
                        className='queue-modal__btn'
                        onClick={handleAcceptClick}
                        >
                        ПРИНЯТЬ
                        </button>
                    </>
                    )}

                    {queueStep === 'accepting' && (
                    <>
                        <div className='queue-modal__title'>WAITING FOR PLAYERS</div>
                        <div className='queue-modal__mode'>ALL PICK</div>

                        <div className='queue-modal__players'>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                            key={index}
                            className={
                                'queue-modal__player' +
                                (index < acceptedCount
                                ? ' queue-modal__player--accepted'
                                : '')
                            }
                            />
                        ))}
                        </div>

                        <div className='queue-modal__counter'>
                        {acceptedCount}/10 приняли
                        </div>
                    </>
                    )}
                </div>
                </div>
            )}
        </main>
    )
}

export default Content