import { Component } from 'react';

const key = '747bee413190d4f515e09d896d391710';

export default class OpenWeather extends Component {

  async getCurrentData(nameCity) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${key}`);

    if (!res.ok) {
      // eslint-disable-next-line
        throw new Error(`Could not fetch ${nameCity}` + `, received ${res.status}`)
    }

    // eslint-disable-next-line no-return-await
    return await res.json();
  }

  async getResource(nameCity) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=3&appid=${key}`);

    if (!res.ok) {
      // eslint-disable-next-line
        throw new Error(`Could not fetch ${nameCity}` + `, received ${res.status}`)
    }

    // eslint-disable-next-line no-return-await
    return await res.json();
  }
  
}

