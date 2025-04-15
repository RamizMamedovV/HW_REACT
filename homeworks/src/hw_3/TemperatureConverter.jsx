import React from 'react';
import Button from '@mui/material/Button';
import RequestAcceptingWindow from './RequestAcceptingWindow';
import QueryResponseWindow from './QueryResponseWindow';
import MyButtons from './MyButton';

function TemperatureConverter() {

    // устанавливаем переключатель, где true - celsius, false - Fahrenheit
    const [celsiusFahrToggle, setCelsiusFahrToggle] = React.useState(false);

    // храним запрос для передачи в QueryResponseWindow
    const [request, setRequest] = React.useState('');

    // обрабатываем onClick события кнопки из MyButtons
    const handleCelsiusFahrToggle = (resp) => {
        if (resp) {
            setCelsiusFahrToggle(!celsiusFahrToggle);
        }
    };

    return (
        <div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>

                    <RequestAcceptingWindow toggle={celsiusFahrToggle} temperatureIndicators = {(getRequest) => setRequest(getRequest)}/>
                    <QueryResponseWindow toggle={celsiusFahrToggle} temperatureIndicators={request}/>
                </div>
                <MyButtons onClick={(resp) => handleCelsiusFahrToggle(resp)} children='&uarr;&darr;' />
            </div>

        </div>
    );
}

export default TemperatureConverter;