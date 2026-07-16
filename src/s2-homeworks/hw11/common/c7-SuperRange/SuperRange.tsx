import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                height: '4px',
                color: '#0c2',
                '& .MuiSlider-track': {
                    backgroundColor: '#0c2', // Green active track
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b', // Light grey inactive rail
                },
            }}
            size={'medium'}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
