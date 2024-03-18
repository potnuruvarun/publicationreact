import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const StockGraphComponent = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_DAILY',
            symbol: 'GOOGL', // Example: Google stock symbol
            apikey: 'YOUR_API_KEY', // Replace with your Alpha Vantage API key
          }
        });

        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      {stockData && (
        <Plot
          data={[
            {
              x: Object.keys(stockData['Time Series (Daily)']).reverse(),
              y: Object.values(stockData['Time Series (Daily)']).map(data => parseFloat(data['4. close'])).reverse(),
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'blue' },
              name: 'Stock Price',
            },
          ]}
          layout={{ title: 'Stock Price Graph' }}
        />
      )}
    </div>
  );
};

export default StockGraphComponent;
