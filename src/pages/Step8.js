import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { STEP_13, STEP_14, STEP_6 } from '../consts/paths'

const Step5 = () => {
    const navigate = useNavigate()

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const nextPage = () => {
        if (ref1.current.checked === true) {
            navigate(STEP_6)
        }
        if (ref2.current.checked === true) {
            navigate(STEP_13)
        }
        if (ref3.current.checked === true) {
            navigate(STEP_14)
        }
    }

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    А ну ка посчитай тогда столбиком это:
                </Alert.Heading>
                <p>1545323435/43.234</p>
            </Alert>
            <Form className='text-center'>
                <div key={`inline-radio`} className='mb-3'>
                    <Form.Check
                        inline
                        label='Так, я пошел отсюда'
                        name='group1'
                        type='radio'
                        id='1'
                        ref={ref1}
                    />
                    <Form.Check
                        inline
                        label='Смешно, может просто скажешь мне мой результат?'
                        name='group1'
                        type='radio'
                        id='2'
                        ref={ref2}
                    />
                    <Form.Check
                        inline
                        label='Легко, ответ: 35743244.5528'
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
