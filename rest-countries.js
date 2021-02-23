/*
const getCountry = (countryCode) => {
  return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
    if (response.status === 200){
      return response.json().then((data) => {
          const country = data.find((country)=>country.alpha2Code === countryCode);
            return country;
      })    
    } else {
      throw new Error ('Unable to fetch the puzzle')
    }
}).then((data) => {
    return data.name
})

}

*/

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');
    if (response.status === 200){
      const data = await response.json();
      const country = data.find((country)=>country.alpha2Code === countryCode);
      return country.name;
    } else {
      throw new Error('Unable to fetch the data');
    }
}



getCountry('PK').then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(`Error: ${err}`);
});






