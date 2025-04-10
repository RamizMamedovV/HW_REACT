import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

function RequestAcceptingWindow({ toggle, temperatureIndicators }) {
    //  
    // , PlaceholderTxt, request
    const ariaLabel = { 'aria-label': 'description' };

    const [request, setRequest] = React.useState('');
    let placeHolderTxt = 'Fahrenheit';

    if (toggle) {
        placeHolderTxt = '0 Celsius';
    } else {
        placeHolderTxt = '0 Fahrenheit';
    }

    const handleChange = (event) => {
        event.preventDefault();
        let temperature = event.target.value;
        if ( temperature === NaN || temperature <= -273 || temperature >= 15000000) {
            alert('Please enter a valid number!')
        } 
        // else if (isNaN(temperature)) {
        //     alert('Please enter a valid number!')
        // }
        
        else {
            temperatureIndicators(temperature);
            setRequest(temperature);
            // console.log(temperature);
        }

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
                    value={request}
                    onChange={handleChange}
                    placeholder={placeHolderTxt}
                    inputProps={ariaLabel} />

            </Box>

        </div>
    );
}

export default RequestAcceptingWindow;

