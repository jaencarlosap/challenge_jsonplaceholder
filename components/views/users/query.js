export async function Api(url = '', method = 'GET', body) {
	const response = await fetch(process.env.Api + url, {
		method,
		body: JSON.stringify(body),
	}).then(response => response.json()).then(json => json);

	return response;
}
