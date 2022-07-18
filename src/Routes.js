import {
    CALCULATOR,
    CALCULATORWORK,
    HANGMAN,
    STEP_1,
    STEP_10,
    STEP_11,
    STEP_12,
    STEP_13,
    STEP_14,
    STEP_15,
    STEP_2,
    STEP_3,
    STEP_4,
    STEP_5,
    STEP_6,
    STEP_7,
    STEP_8,
    STEP_9,
} from './consts/paths'
import Calculator from './components/Calculator'

import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Step5 from './pages/Step5'
import Step6 from './pages/Step6'
import Step7 from './pages/Step7'
import Step8 from './pages/Step8'
import Step9 from './pages/Step9'
import Step10 from './pages/Step10'
import Step11 from './pages/Step11'
import Step12 from './pages/Step12'
import Step13 from './pages/Step13'
import Step14 from './pages/Step14'
import Step15 from './pages/Step15'
import Hangman from './pages/Hangman'
import CalculatorWork from './components/CalculatorWork'

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
    {
        path: STEP_9,
        Component: Step9,
    },
    {
        path: STEP_10,
        Component: Step10,
    },
    {
        path: STEP_11,
        Component: Step11,
    },
    {
        path: STEP_12,
        Component: Step12,
    },
    {
        path: STEP_13,
        Component: Step13,
    },
    {
        path: STEP_14,
        Component: Step14,
    },
    {
        path: STEP_15,
        Component: Step15,
    },
    {
        path: HANGMAN,
        Component: Hangman,
    },
    {
        path: CALCULATORWORK,
        Component: CalculatorWork,
    },
]
