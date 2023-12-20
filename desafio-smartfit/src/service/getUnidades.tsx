async function getUnidades() {
    const heroEndPoint = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';
    const response = await fetch(heroEndPoint);
    const {locations}  = await response.json();
    return locations;
  }
  
  export default getUnidades;