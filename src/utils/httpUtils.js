async function get(url) {
  try {
    let response = await
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export {get};
