import {
    CALCULATOR,
    STEP_1,
    STEP_2,
    STEP_3,
    STEP_4,
    STEP_5,
    STEP_6,
    STEP_7,
    STEP_8,
} from './consts/paths'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Step5 from './pages/Step5'
import Step6 from './pages/Step6'
import Step7 from './pages/Step7'
import Step8 from './pages/Step8'
import Calculator from './components/Calculator'

export const publicRoutes = [
    { path: CALCULATOR, Component: Calculator },
    {
        path: STEP_1,
        Component: Step1,
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
    {
        path: STEP_5,
        Component: Step5,
    },
    {
        path: STEP_6,
        Component: Step6,
    },
    {
        path: STEP_7,
        Component: Step7,
    },
    {
        path: STEP_8,
        Component: Step8,
    },
]
