//HTTP (hypertext transfer protocol)
//Request - what do we want to do
//Response what was actually done.

const getCountry = (countryCode) => {
    return new Promise ((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', (e) =>{
            if (e.target.readyState === 4 && e.target.status === 200){
                 const data = JSON.parse(e.target.responseText);
                 const country = data.find((country)=>country.alpha2Code === countryCode);
                 resolve(country.name);       
                
            } else if (e.target.readyState === 4){
                reject("An error has taken place");
            }
        });
        
        request.open('GET', 'https://restcountries.eu/rest/v2/all');
        request.send();
    })
}

getCountry('US').then((resolvedData) => {
  console.log(`Country name: ${resolvedData}`);
}).catch((err) => {
  console.log(err);
});


