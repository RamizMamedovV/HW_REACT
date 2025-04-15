import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

function QueryResponseWindow({ toggle, temperatureIndicators}) {
    const ariaLabel = { 'aria-label': 'description' };
    const [fahrenheit, setFahrenheit] = React.useState('');

    if (toggle) {
        let answer = temperatureIndicators * 9 / 5 + 32 + '  F';
        return answer;
    } else {
        let answer = (temperatureIndicators - 32) * 5 / 9 + '  C';
        return answer;
    }

    const handleChange = (event) => {
        setFahrenheit(event.target.value);
        console.log(event.target.value);
    };
    return (
        <div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <Input
                    value={fahrenheit}
                    onChange={handleChange}
                    // placeholder={PlaceholderTxt}
                    inputProps={ariaLabel} />

            </Box>

        </div>
    );
}

export default QueryResponseWindow;