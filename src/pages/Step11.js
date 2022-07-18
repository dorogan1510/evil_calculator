import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CALCULATOR } from '../consts/paths'

const Step11 = () => {
    const navigate = useNavigate()

    return (
        <>
            <Alert className='text-center' variant='warning'>
                <Alert.Heading>
                    Тогда зачем тебе какие-то там результаты? У меня есть для
                    тебя занятие получше.
                </Alert.Heading>
            </Alert>

            <div className='d-block text-center'>
                <Button
                    href='https://www.tiktok.com/'
                    target='_blank'
                    onClick={() => navigate(CALCULATOR)}
                >
                    Подеградировать
                </Button>
            </div>
        </>
    )
}

export default Step11
