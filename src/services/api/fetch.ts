const BASE_URL = 'https://api.intra.piletilevi.ee/v1/'

export function getTopEvents() {
  const url = BASE_URL + 'events/top'
  return fetchData(url)
}

export function getEvents() {
  const url = BASE_URL + 'events'
  return fetchData(url)
}

export function getEvent(id) {
  const url = BASE_URL + 'event/' + id
  return fetchData(url)
}

async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}