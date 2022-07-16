import { CALCULATOR, STEP_1, STEP_2, STEP_3, STEP_4 } from './consts/paths'
import Step1EasyCaptcha from './pages/Step1EasyCaptcha'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Calculator from './components/Calculator'

export const publicRoutes = [
    { path: CALCULATOR, Component: Calculator },
    {
        path: STEP_1,
        Component: Step1EasyCaptcha,
    },
    {
        path: STEP_2,
        Component: Step2,
    },
    {
        path: STEP_3,
        Component: Step3,
    },
    {
        path: STEP_4,
        Component: Step4,
    },
]
