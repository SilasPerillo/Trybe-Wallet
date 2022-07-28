const APIURL = 'https://economia.awesomeapi.com.br/json/all';

export default async function exchangeApi() {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
}
