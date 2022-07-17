import React, { useRef } from 'react'
import { Form, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { STEP_4, STEP_5 } from '../consts/paths'

const Step3 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_4)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_4)
        }
        if (ref3.current.checked === true) {
            navigate(STEP_5)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    А ты и впрям хочешь узнать результат. Чтож, начнем опрос:
                </Alert.Heading>
                <p>Ты умеешь считать в уме?</p>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Когда-то умел'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Умею, но лень'
                        name='group1'
                        type='radio'
                        id='2'
                        ref={ref2}
                    />
                    <Form.Check
                        inline
                        label='Это вообще к чему?'
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

export default Step3
