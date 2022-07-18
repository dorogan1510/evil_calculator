import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { STEP_10, STEP_14, STEP_9 } from '../consts/paths'

const Step12 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_10)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_14)
        }
        if (ref3.current.checked === true) {
            navigate(STEP_9)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    Ладно, дам я тебе твой результат, только сначала отгадай
                    загадку:
                </Alert.Heading>
                <p>
                    Проживают в трудной книжке Хитроумные братишки. Десять их,
                    но братья эти Сосчитают всё на свете.
                </p>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Я думал, будет опрос, а тут ребусы какие-то'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Мой ответ: математика'
                        name='group1'
                        type='radio'
                        id='2'
                        ref={ref2}
                    />
                    <Form.Check
                        inline
                        label='Ладно, я сам посчитаю в уме'
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

export default Step12
