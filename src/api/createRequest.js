const createRequest = async ({id, payload, method}) => {
  const baseURL = 'http://localhost:7777/notes/';
  const requestURL = method === 'delete' ? baseURL + `${id}` : baseURL;
  const request = await fetch(requestURL, {
      method: method,
      header: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
  });
  if (!request.ok) {
      throw new Error('Что-то пошло не так...');
  }
  const response = await request.json()
  return response;
}

export default createRequest;