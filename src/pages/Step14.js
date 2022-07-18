import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Offcanvas } from 'react-bootstrap'
import { STEP_15 } from '../consts/paths'
import useSound from 'use-sound'
import bcgmusic from '../audio/bcg_music.mp3'

const Step14 = () => {
    const [show, setShow] = useState(false)
    const [isButton1, setIsButton1] = useState(false)
    const [isButton2, setIsButton2] = useState(true)

    const navigate = useNavigate()

    const [play] = useSound(bcgmusic, { volume: 0.3 })

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        setIsButton1(true)
        setIsButton2(false)
    }

    function OffCanvasExample({ name, ...props }) {
        return (
            <>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Сookie</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Мы используем cookie-файлы, чтобы получить статистику,
                        которая помогает нам улучшить сервис для Вас с целью
                        персонализации сервисов и предложений. Вы можете
                        прочитать подробнее о cookie-файлах или изменить
                        настройки браузера. Интересно, кто-то вообще читает эти
                        подробности о куки файлах?
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        )
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    Ладно, твоя взяла. Кликай и смотри свой ответ
                </Alert.Heading>
            </Alert>

            <Button
                className={isButton2 ? 'd-block mx-auto' : 'd-none'}
                variant='primary'
                onClick={handleShow}
            >
                Посмотреть ответ
            </Button>
            <Button
                className={isButton1 ? 'd-block mx-auto' : 'd-none'}
                variant='primary'
                onClick={() => {
                    navigate(STEP_15)
                    play()
                }}
            >
                Узнать ответ
            </Button>
            {['bottom'].map((placement, idx) => (
                <OffCanvasExample
                    key={idx}
                    placement={placement}
                    name={placement}
                />
            ))}
        </>
    )
}

export default Step14
