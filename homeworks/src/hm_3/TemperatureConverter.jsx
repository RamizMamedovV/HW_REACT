import React from 'react';
import Button from '@mui/material/Button';
import RequestAcceptingWindow from './RequestAcceptingWindow';
import QueryResponseWindow from './QueryResponseWindow';
import MyButtons from './MyButton';

function TemperatureConverter() {
    // устанавливаем переключатель, где true - celsius, false - Fahrenheit
    const [celsiusFahrToggle, setCelsiusFahrToggle] = React.useState(false);

    const [request, setRequest] = React.useState('');
    // console.log(`request: ${request}`);

    // const[push, setPush] = React.useState(false);
    // const handleClick = (value) => {
    //     console.log('TemperatureConverter'+value.toString());
    //     setPush(!push);
    // };

    const handleCelsiusFahrToggle = () => {
        setCelsiusFahrToggle(!celsiusFahrToggle);
    };
    return (
        <div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>

                    <RequestAcceptingWindow toggle={celsiusFahrToggle} temperatureIndicators = {(getRequest) => setRequest(getRequest)}/>
                    <QueryResponseWindow toggle={celsiusFahrToggle} temperatureIndicators={request}/>
                </div>
                <button onClick={handleCelsiusFahrToggle}>&uarr;&darr;</button>
            </div>

            {/* <MyButtons children="CONVERT" pushed={(val) => handleClick(val) }/> */}
        </div>
    );
}

export default TemperatureConverter;