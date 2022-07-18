import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { STEP_14 } from '../consts/paths'

const Step13 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_14)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_14)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    Ты что использовал другой калькулятор вместо меня? Я думал,
                    мы друзья😢
                </Alert.Heading>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Ты не оставил мне выбора'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Показал бы ответ сразу - были бы друзьями'
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

export default Step13
