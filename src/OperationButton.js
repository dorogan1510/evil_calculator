import React from 'react'
import { ACTIONS } from './App'
import './styles.scss'

const OperationButton = ({ dispatch, operation }) => {
    return (
        <button
            onClick={() =>
                dispatch({
                    type: ACTIONS.CHOOSE_OPERATION,
                    payload: { operation },
                })
            }
            className='operations'
        >
            {operation}
        </button>
    )
}

export default OperationButton
