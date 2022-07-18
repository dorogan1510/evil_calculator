import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { STEP_6, STEP_7, STEP_8 } from '../consts/paths'

const Step5 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_8)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_7)
        }
        if (ref3.current.checked === true) {
            navigate(STEP_6)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>Отвечаешь вопросом на вопрос?</Alert.Heading>
                <p>
                    Я смотрю тебе не очень то и нужен твой результат. Попробуем
                    по другому, математику учил в школе? Умеешь считать
                    столбиком?
                </p>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Ну умею, и что?'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Допустим'
                        name='group1'
                        type='radio'
                        id='2'
                        ref={ref2}
                    />
                    <Form.Check
                        inline
                        label='Ты мне дашь мой ответ или нет?'
                        name='group1'
                        type='radio'
                        id='3'
                        ref={ref3}
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

export default Step5
