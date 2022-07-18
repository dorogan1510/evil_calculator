import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import { Button, Alert, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { STEP_3 } from '../consts/paths'

const Step2 = () => {
    const [modalShow, setModalShow] = useState(false)
    const [isButton, setIsButton] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setModalShow(true)
        }, 5000)
    }, [])

    const navigate = useNavigate()

    const ModalWindow = props => {
        const closeButtonHandler = () => {
            props.onHide()
            setIsButton(true)
            setIsLoading(false)
        }

        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <h4 className='text-center text-danger'>WARNING</h4>
                    <p className='text-center'>
                        Для получения результат вам необходимо пройти опрос
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className='d-block mx-auto'
                        onClick={closeButtonHandler}
                    >
                        Закрыть и пройти опрос
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <>
            <Alert
                className={
                    isLoading ? 'mb-2 d-flex justify-content-center' : 'd-none'
                }
                variant='danger'
            >
                Ваш запрос обрабатывается
            </Alert>
            <div
                className={
                    isLoading ? 'd-flex justify-content-center' : 'd-none'
                }
            >
                <Circles color='#00BFFF' height={80} width={80} />
            </div>
            <Button
                className={isButton ? 'd-block mx-auto mt-4' : 'd-none'}
                variant='primary'
                size='lg'
                onClick={() => navigate(STEP_3)}
            >
                Начать опрос
            </Button>

            <ModalWindow show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Step2
