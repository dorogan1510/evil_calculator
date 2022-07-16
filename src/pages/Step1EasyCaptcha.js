import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './Step1EasyCaptcha.scss'
import { Button } from 'react-bootstrap'

const Step1EasyCaptcha = ({ activeCaptcha, setActiveCaptcha }) => {
    const onChange = value => {
        console.log('Captcha value:', value)
    }
    const captchaRef = useRef(null)

    return (
        <div className={activeCaptcha ? 'block' : 'none'}>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={onChange}
                size='normal'
                ref={captchaRef}
            />
            <Button className='mt-2' variant='dark'>
                Подтвердить
            </Button>
        </div>
    )
}

export default Step1EasyCaptcha
