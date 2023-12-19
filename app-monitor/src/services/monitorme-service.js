import axios from "axios";

export const simulateApiCall = async (appData) => {
    console.log('Simulando envío a la API:', appData);
};

export const postMonitoringInfo = async (monitoring) => {
    console.log(monitoring);
    const config = {
        method: 'post',
        url: 'http://localhost:3999/api/monitor/usage-record',
        headers: {
            'Content-Type': 'application/json'
        },
        data: monitoring
    }
    try {
        const response = await axios(config);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return null
    }
};