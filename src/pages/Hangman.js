import React, { useState, useEffect } from 'react'
import Header from '../hangman/Header'
import Figure from '../hangman/Figure'
import WrongLetters from '../hangman/WrongLetters'
import Word from '../hangman/Word'
import Popup from '../hangman/Popup'
import Notification from '../hangman/Notification'
import { showNotification as show } from '../hangman/helpers/helpers'
import './Hangman.scss'

const words = ['математика']
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
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

    function playAgain() {
        setPlayable(true)

        // Empty Arrays
        setCorrectLetters([])
        setWrongLetters([])

        const random = Math.floor(Math.random() * words.length)
        selectedWord = words[random]
    }

    return (
        <div className='hangman-root'>
            <Header />
            <div className='game-container'>
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word
                    selectedWord={selectedWord}
                    correctLetters={correctLetters}
                />
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

export default App
