import React, { useState, useEffect } from 'react'
import Header from '../hangman/Header'
import Figure from '../hangman/Figure'
import WrongLetters from '../hangman/WrongLetters'
import Word from '../hangman/Word'
import Popup from '../hangman/Popup'
import Notification from '../hangman/Notification'
import { showNotification as show } from '../hangman/helpers/helpers'
import './Hangman.scss'

const words = ['математика', 'деградация']
let selectedWord = words[Math.floor(Math.random() * words.length)]

const Hangman = () => {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase()
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [
                            ...currentLetters,
                            letter,
                        ])
                    } else {
                        show(setShowNotification)
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [
                            ...currentLetters,
                            letter,
                        ])
                    } else {
                        show(setShowNotification)
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown)

        return () => window.removeEventListener('keydown', handleKeydown)
    }, [correctLetters, wrongLetters, playable])

    const buttonLetter = e => {
        let letter = e.target.value
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter])
            } else {
                show(setShowNotification)
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter])
            } else {
                show(setShowNotification)
            }
        }
    }

    const playAgain = () => {
        setPlayable(true)

        setCorrectLetters([])
        setWrongLetters([])

        const random = Math.floor(Math.random() * words.length)
        selectedWord = words[random]
    }

    return (
        <div className='hangman-root'>
            <Header />

            <div className='game-container'>
                <WrongLetters wrongLetters={wrongLetters} />
                <Figure wrongLetters={wrongLetters} />
                <Word
                    selectedWord={selectedWord}
                    correctLetters={correctLetters}
                />
            </div>

            <div className='letters'>
                {'йцукенгшщзхфывапролджэячсмитьбю'.split('').map(letter => (
                    <button
                        variant='info'
                        className='w-9'
                        size='sm'
                        key={letter}
                        value={letter}
                        onClick={buttonLetter}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <Popup
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                selectedWord={selectedWord}
                setPlayable={setPlayable}
                playAgain={playAgain}
            />

            <Notification showNotification={showNotification} />
        </div>
    )
}

export default Hangman
