import { getToken } from './users-service';
const BASE_URL = "https://www.dnd5eapi.co/api";
export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch takes an optional options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    const dungeons = await res.json()
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return dungeons;
    throw new Error('Bad Request');
  }

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function getClasses() {
    return sendRequest(`${BASE_URL}/classes`);
}

export function getAbilityScores() {
    return sendRequest(`${BASE_URL}/ability-scores`);
}

export function getBackgrounds() {
    return sendRequest(`${BASE_URL}/backgrounds`);
}

export function getRaces() {
    return sendRequest(`${BASE_URL}/races`);
}

export function specificRace(index) {
    return sendRequest(`${BASE_URL}/races/${index}`)
}

export function getAlignments() {
    return sendRequest(`${BASE_URL}/alignments`);
}

export function getLanguages() {
    return sendRequest(`${BASE_URL}/languages`);
}

