import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Bars } from 'react-loader-spinner'

const Step15 = () => {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow1(false)
        }, 4000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShow2(true)
        }, 4500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShow2(false)
        }, 9500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShow3(true)
        }, 10000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShow3(false)
        }, 15000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShow4(true)
        }, 15500)
    }, [])

    return (
        <>
            <div className='d-flex justify-content-center mt-4'>
                <Bars
                    heigth='100'
                    width='100'
                    color='#ab35db'
                    ariaLabel='loading-indicator'
                />
            </div>

            <Alert show={show1} variant='success' className='mt-4'>
                <Alert.Heading className='text-center'>
                    Идет обработка вашего ответа, пожалуйста подождите
                </Alert.Heading>
            </Alert>

            <Alert show={show2} variant='success' className='mt-4'>
                <Alert.Heading className='text-center'>
                    Еще немного, результат почти готов
                </Alert.Heading>
            </Alert>

            <Alert show={show3} variant='success' className='mt-4'>
                <Alert.Heading className='text-center'>
                    Может все-таки было проще в столбик самому посчитать?
                </Alert.Heading>
            </Alert>

            <Alert show={show4} variant='success'>
                <Alert.Heading className='text-center'>
                    А я смотрю ты крайне настойчивый человек и времени у тебя
                    свободного полно. Ладно, держи свой ответ
                </Alert.Heading>

                <hr />
                <div className='d-flex justify-content-end'>
                    <Button
                        className='d-block mx-auto'
                        variant='outline-success'
                    >
                        Ответ
                    </Button>
                </div>
            </Alert>
        </>
    )
}

export default Step15
