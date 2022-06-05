const axios = require("axios");

export const getFlightsData = async (origin, destination) => {
    const options = {
        method: 'GET',
        url: 'https://skyscanner44.p.rapidapi.com/search',
        params: {
            adults: '1',
            origin,
            destination,
            departureDate: '2022-06-28',
            currency: 'EUR'
        },
        headers: {
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com',
            'X-RapidAPI-Key': '488441b3d5msh66c8dc7b70c042dp114748jsnb7d12fd3109c'
        }
    };
    try {
        axios.request(options).then(function (response) {
            const data = response.data;
            console.log(data);
            
      const cheapestFlight = data.itineraries.buckets.filter(f => f.id == 'Cheapest');
      if (cheapestFlight.length > 0) {
        const cheapest = cheapestFlight[0].items;
        if (cheapest.length > 0) {
          const cheapestPrice = cheapest[0].price.raw;
          const cheapestPriceFormatted = cheapest[0].price.formatted;
          const legs = cheapest[0].legs;
          if (legs.length > 0) {
            const legsOrigin = legs[0].origin;
            const legsDestination = legs[0].destination;
            const legsDeparture = legs[0].departure;
            const legsArrival = legs[0].arrival;
            const legsDuration = legs[0].durationInMinutes;
            const directFlight = legs[0].stopCount === 0;
            const legsSegments = legs[0].segments;
            const carriers = legs[0].carriers.marketing[0].name;
            console.log('departure ', legsDeparture);
            console.log('arrival ', legsArrival);
            console.log('duration ', legsDuration);
            if (legsSegments.length > 0) {
              const marketingCarrier = legsSegments[0].marketingCarrier.name;
              const legsSegmentsDeparture = legsSegments[0].departure;
              console.log('marketingCarrier ', marketingCarrier);
            }


          }
          console.log('cheapestPriceFormatted', cheapestPriceFormatted);
        }
      }
            return data;
        }).catch(function (error) {
            console.error(error);
        });

    } catch (err) {
        console.log(err)
    }
}