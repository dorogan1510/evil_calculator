import React from 'react'

const Notification = ({ showNotification }) => {
    return (
        <div
            className={`notification-container ${
                showNotification ? 'show' : ''
            }`}
        >
            <p>Ты уже вводил эту букву, соберись</p>
        </div>
    )
}

export default Notification
