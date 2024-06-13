import React, { useState, useEffect } from 'react';
import upload from '@/assets/images/icons/upload.png'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = ({ min, max, onMinChange, onMaxChange }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    useEffect(() => {
        setMinValue(min);
        setMaxValue(max);
    }, [min, max]);

    const handleMinChange = (value) => {
        setMinValue(value);
        onMinChange(value);
    };

    const handleMaxChange = (value) => {
        setMaxValue(value);
        onMaxChange(value);
    };

    return (
        <div className='flex flex-col items-center justify-center rounded-lg border border-gray-300 p-6 gap-5 w-full' style={{ padding: '25px 25px', marginBottom: '30px' }}>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h2 className='font-black text-xl'>ФИЛЬТР ПО ЦЕНЕ</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center justify-center border border-gray-100 rounded bg-gray-100 mr-2.5' style={{ padding: '6px 43px 6px 38px' }}>
                    <p style={{ fontSize: '13px', color: '#67708A' }}>{minValue}</p>
                    <p style={{ fontSize: '13px', color: '#8D93AB' }}>$</p>
                </div>
                <p style={{ fontSize: '13px', marginRight: '8.53px' }}>-</p>
                <div className='flex items-center justify-center border border-gray-100 rounded bg-gray-100' style={{ padding: '6px 43px 6px 38px' }}>
                    <p style={{ fontSize: '13px', color: '#67708A' }}>{maxValue}</p>
                    <p style={{ fontSize: '13px', color: '#8D93AB' }}>$</p>
                </div>
            </div>
            <div className="p-2 w-full">
                <Slider
                    min={0}
                    max={1000}
                    value={minValue}
                    onChange={handleMinChange}
                />
                <Slider
                    min={0}
                    max={1000}
                    value={maxValue}
                    onChange={handleMaxChange}
                />
            </div>
        </div>
    );
}

export default PriceFilter;