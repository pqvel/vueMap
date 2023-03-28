export async function request(
    url, 
    method = 'GET', 
    body = null, 
    headers = { 'Content-Type': 'application/json' }
) {
    try {
        const _apiBase = ''
        const response = await fetch(`${_apiBase}${url}`, { 
            method,
            body, 
            headers
        });

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch(e) {
        throw e;
    }
}