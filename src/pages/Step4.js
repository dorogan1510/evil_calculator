import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { STEP_11, STEP_12, STEP_5 } from '../consts/paths'

const Step4 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_12)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_11)
        }
        if (ref3.current.checked === true) {
            navigate(STEP_5)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>Я так и думал</Alert.Heading>
                <p>
                    Считать в уме довольно полезно, так ты развиваешься, а
                    калькулятор заставляет тебя деградировать
                </p>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Я просто хочу узнать результат'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Может мне нравится деградировать'
                        name='group1'
                        type='radio'
                        id='2'
                        ref={ref2}
                    />
                    <Form.Check
                        inline
                        label='Тебе то какая разница?'
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

export default Step4
