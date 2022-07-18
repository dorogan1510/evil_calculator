import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button } from 'react-bootstrap'
import { CALCULATOR } from '../consts/paths'

const Step9 = () => {
    const navigate = useNavigate()

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    Эй, зачем тебе напрягаться? Для этого же есть калькулятор.
                    Просто вбей числа в нем и получишь свой ответ.
                </Alert.Heading>
            </Alert>

            <Button
                className='d-block mx-auto'
                variant='primary'
                onClick={() => navigate(CALCULATOR)}
            >
                Посчитать на калькуляторе
            </Button>
        </>
    )
}

export default Step9
