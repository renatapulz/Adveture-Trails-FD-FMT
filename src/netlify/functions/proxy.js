
exports.handler = async (event, context) => {
    const url = 'https://trilhas-api.netlify.app/api/trilhas'; // URL do servidor de origem
    
    try {
        const response = await fetch(url, {
            method: event.httpMethod,
            headers: event.headers,
            body: event.body
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
