import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const chartData = {
      labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      datasets: [
        {
          label: 'Dataset 1',
          data: [860, 5830, 1060, 1060, 3070,2478, 4110, 1330, 2210, 7830, 2478],
          borderWidth: 1,
          borderColor: 'white',
          fill: false,
          cubicInterpolationMode: 'monotone',
          pointRadius: 0,
          pointHoverRadius: 0,
        }
      ],
    };
  
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
  
      if (ctx) {
        // Destroy the previous chart instance if it exists
        Chart.getChart(chartRef.current)?.destroy();
  
        // Create a new chart
        new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {
            scales: {
              x: {
                type: 'linear',
                display: false,
                position: 'bottom',
              },
              y: {
                type: 'linear',
                display: false,
                position: 'left',
              },
            },
            plugins: {
              legend:{
                display:false,
              },
              title: {
                display: false,
              },
            },
            interaction: {
              intersect: false, 
            },
          
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} id="myChart" style={{ maxWidth: '400px', maxHeight: '175px' }} />;
};

export default MyChart;
