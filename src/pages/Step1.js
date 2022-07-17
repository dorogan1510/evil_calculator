import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './Step1.scss'
import { Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { STEP_2 } from '../consts/paths'

const Step1 = ({ activeCaptcha, setActiveCaptcha }) => {
    const onChange = value => {
        console.log('Captcha value:', value)
    }
    const captchaRef = useRef(null)

    const navigate = useNavigate()

    return (
        <div className={activeCaptcha ? 'block' : 'none'}>
            <Alert className='mb-2' variant='warning'>
                Подтвердите, что вы не робот
            </Alert>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={onChange}
                size='normal'
                ref={captchaRef}
            />
            <Button
                className='mt-2'
                variant='dark'
                onClick={() => navigate(STEP_2)}
            >
                Подтвердить
            </Button>
        </div>
    )
}

export default Step1
