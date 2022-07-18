import React, { useEffect, useReducer, useState } from 'react'
import ButtonComponents from './ButtonComponents'
import { ACTIONS } from '../App'
import Step1 from '../pages/Step1'
import { Alert, Button, Modal } from 'react-bootstrap'

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }

            if (payload.digit === '0' && state.currentOperand === '0') {
                return state
            }

            if (payload.digit === '.' && state.currentOperand.includes('.')) {
                return state
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload.digit}`,
            }

        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }

            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            }

        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                }
            }

            if (state.currentOperand == null) {
                return state
            }

            if (state.currentOperand === 1) {
                return { ...state, currentOperand: null }
            }

            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.EVALUATE:
            if (
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ) {
                return state
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            }
    }
}

const evaluate = ({ currentOperand, previousOperand, operation }) => {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if (isNaN(prev) || isNaN(current)) {
        return ''
    }

    let computation = ''

    switch (operation) {
        case '+':
            computation = prev + current
            break

        case '-':
            computation = prev - current
            break

        case '*':
            computation = prev * current
            break

        case '÷':
            computation = prev / current
            break
    }

    return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
})

const formatOperand = operand => {
    if (operand == null) {
        return
    }

    const [integer, decimal] = operand.split('.')
    if (decimal == null) {
        return INTEGER_FORMATTER.format(integer)
    }

    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

const CalculatorWork = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] =
        useReducer(reducer, {})

    const [isAlert, setIsAlert] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    const buttonClick = () => {
        if (!isAlert) {
            dispatch({ type: ACTIONS.EVALUATE })
            setModalShow(true)
            setIsAlert(true)
        } else {
            dispatch({ type: ACTIONS.EVALUATE })
        }
    }

    const MyVerticallyCenteredModal = props => {
        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='text-center'>
                    <h4>Ну вот, теперь все работает!</h4>
                    <p>
                        А ты не такой и ленивый, раз дошел до конца! Попробуй
                        пройти этот путь еще раз, есть несколько разных
                        прохождений, заодно разомнешь мозги🧠
                    </p>
                    <h3>Удачи!</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={props.onHide}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <>
            <div className='calculator-grid'>
                <div className='calculator-grid__output'>
                    <div className='calculator-grid__output_previous-operand'>
                        {formatOperand(previousOperand)} {operation}
                    </div>
                    <div className='calculator-grid__output_current-operand'>
                        {formatOperand(currentOperand)}
                    </div>
                </div>
                <button
                    className='calculator-grid__span-two button'
                    onClick={() => dispatch({ type: ACTIONS.CLEAR })}
                >
                    AC
                </button>
                <button
                    className='button'
                    onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
                >
                    DEL
                </button>

                <ButtonComponents dispatch={dispatch} />

                <button
                    className='calculator-grid__span-two equal button'
                    onClick={buttonClick}
                >
                    =
                </button>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default CalculatorWork
