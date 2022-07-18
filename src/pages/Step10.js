import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button } from 'react-bootstrap'
import { STEP_9 } from '../consts/paths'

const Step10 = () => {
    const navigate = useNavigate()

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>Так ты просто посчитай в уме😁</Alert.Heading>
            </Alert>

            <Button
                className='d-block mx-auto'
                variant='primary'
                onClick={() => navigate(STEP_9)}
            >
                Посчитать в уме
            </Button>
        </>
    )
}

export default Step10
