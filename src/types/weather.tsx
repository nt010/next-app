export interface WeatherData {
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
    main: {
      temp: number;
      humidity: number;
    };
    name: string;
  }