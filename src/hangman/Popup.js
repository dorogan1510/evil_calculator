import React, { useEffect, useRef } from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkWin } from '../hangman/helpers/helpers'
import { CALCULATORWORK } from './../consts/paths'

const Popup = ({
    correctLetters,
    wrongLetters,
    selectedWord,
    setPlayable,
    playAgain,
}) => {
    let finalMessage = ''
    let finalButtonMessage = ''
    let playable = true
    let buttonClick = playAgain

    const navigate = useNavigate()

    let ref = useRef(true)

    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage =
            'Поздравляю, ты дошел до самого конца и достоен узнать свой ответ 😃'
        playable = false
        finalButtonMessage = 'Узнать ответ'
        buttonClick = () => navigate(CALCULATORWORK)
        ref = true
    } else if (
        checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'
    ) {
        finalMessage = 'Может все таки посчитаешь в уме? Зачем тебе все это?'
        playable = false
        finalButtonMessage = 'Попробовать еще раз'
        buttonClick = playAgain
        ref = false
    }

    useEffect(() => {
        setPlayable(playable)
    })

    const popover = (
        <Popover id='popover-basic'>
            <Popover.Header className='text-center' as='h3'>
                Тут такое дело
            </Popover.Header>
            <Popover.Body>
                Я уже подзабыл ответ, почему бы тебе самому не посчитать его на
                калькуляторе?
            </Popover.Body>
            <Button
                className='d-block mx-auto mb-2'
                variant='dark'
                onClick={buttonClick}
            >
                Посчитать
            </Button>
        </Popover>
    )

    return (
        <div
            className='popup-container'
            style={finalMessage !== '' ? { display: 'flex' } : {}}
        >
            <div className='popup'>
                <h2>{finalMessage}</h2>
                {ref ? (
                    <OverlayTrigger
                        trigger='click'
                        placement='right'
                        overlay={popover}
                    >
                        <button>{finalButtonMessage}</button>
                    </OverlayTrigger>
                ) : (
                    <button onClick={buttonClick}>{finalButtonMessage}</button>
                )}
            </div>
        </div>
    )
}

export default Popup
