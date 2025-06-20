
function getPiChart(ctx) {
    const chart = new Chart(ctx, {
      type: 'pie',// 차트 종류: bar, line, pie, doughnut, etc.
      data: {
        labels: ['노트북', '스마트폰', '태블릿'],
        datasets: [{
          label: '제품 판매 비율',
          data: [300, 500, 200],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: '제품군별 실시간 판매 비율'
          }
        }
      }
    });

    return { chart, 
            updateRandom() {
              setInterval(() => {
                  chart.data.datasets[0].data = generateRandomDataPi();
                  chart.update();
              }, 1000);
            }
    }

}

    // 랜덤 데이터 생성 함수
function generateRandomDataPi() {
    return [
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500)
    ];
}

function getDoughnutChart(ctx) {
    const chart = new Chart(ctx, {
      type: 'doughnut',// 차트 종류: bar, line, pie, doughnut, etc.
      data: {
        labels: ['노트북', '스마트폰', '태블릿'],
        datasets: [{
          label: '제품 판매 비율',
          data: [300, 500, 200],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          title: {
            display: true,
            text: '제품군별 실시간 판매 비율'
          }
        }
      }
    });

    return { chart, 
        updateRandom() {
          setInterval(() => {
              chart.data.datasets[0].data = generateRandomDataDoughnut();
              chart.update();
          }, 1000);
        }
    }
}

    // 랜덤 데이터 생성 함수
function generateRandomDataDoughnut() {
    return [
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500)
    ];
}

function getBarChart(ctx){
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          label: 'Example Data',
          data: [10, 20, 30, 15],
          backgroundColor: 'skyblue',
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        // responsive: false,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
      return { chart, 
        updateRandom() {
          setInterval(() => {
              chart.data.datasets[0].data = generateRandomDataBar();
              chart.update();
          }, 1000);
        }
    }
}

function generateRandomDataBar() {
    return [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
    ];
}

function getLineChart(ctx){
      const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          label: 'Example Data',
          data: [10, 20, 30, 15],
          backgroundColor: 'skyblue',
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        // responsive: false,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return { chart, 
        updateRandom() {
          setInterval(() => {
              chart.data.datasets[0].data = generateRandomDataLine();
              chart.update();
          }, 1000);
        }
    }

}

function generateRandomDataLine() {
    return [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
    ];
}

function getBubbleChart(ctx) {
    const bubbleDataset = {
      label: '실시간 데이터',
      data: generateRandomBubbles(5),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    };

    const chart = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [bubbleDataset]
      },
      options: {
        // responsive: false,
        maintainAspectRatio: false,
        scales: {
          x: {
            min: 0,
            max: 100,
            title: { display: true, text: 'X 축' }
          },
          y: {
            min: 0,
            max: 100,
            title: { display: true, text: 'Y 축' }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const v = context.raw;
                return `x: ${v.x}, y: ${v.y}, r: ${v.r}`;
              }
            }
          }
        }
      }
    });

    return { chart, 
        updateRandom() {
          setInterval(() => {
              chart.data.datasets[0].data = generateRandomBubbles(5);
              chart.update();
          }, 1000);
        }
    }

}

function generateRandomBubbles(count) {
  const bubbles = [];
  for (let i = 0; i < count; i++) {
    bubbles.push({
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      r: Math.floor(Math.random() * 20) + 5
    });
  }
  return bubbles;
}

function generateRandomDataPolar(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(Math.floor(Math.random() * 100) + 10); // 최소값 10
    }
    return data;
}


function getPolarChart(ctx) {
    const polarData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: 'My Dataset',
        data: generateRandomDataPolar(5), // 초기 데이터
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
        borderWidth: 1
      }]
    };

    const chart = new Chart(ctx, {
      type: 'polarArea',
      data: polarData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: '실시간 Polar Area Chart'
          }
        },
        animation: {
          duration: 500
        }
      }
    });

    return { chart, 
        updateRandom() {
          setInterval(() => {
              chart.data.datasets[0].data = generateRandomDataPolar(5);
              chart.update();
          }, 1000);
        }
    }
  }