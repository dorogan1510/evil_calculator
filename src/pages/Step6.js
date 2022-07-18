import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { STEP_14, STEP_4 } from '../consts/paths'

const Step6 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_4)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_14)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    Не надо нервничать. Будет тебе твой ответ. Уже и поболтать
                    нельзя.
                </Alert.Heading>
                <p>Ты просто скажи мне, ты умеешь считать в уме или нет?</p>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Ну. умею'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Или ты даешь ответ или я посчитаю в другом нормальном калькуляторе'
                        name='group1'
                        type='radio'
                        id='2'
                        ref={ref2}
                    />
                </div>
            </Form>
            <Button
                className='d-block mx-auto'
                variant='primary'
                onClick={nextPage}
            >
                Дальше
            </Button>
        </>
    )
}

export default Step6
