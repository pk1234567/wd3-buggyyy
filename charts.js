// Global Chart Datalabels
Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
  anchor: 'end',
  align: 'right',
});

// Global
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = '#429bcc';
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.tooltips.backgroundColor = '#a3c4d6';
Chart.defaults.global.tooltips.titleFontColor = '#002C45';
Chart.defaults.global.tooltips.bodyFontColor = '#002C45';
Chart.defaults.global.tooltips.xPadding = 15;
Chart.defaults.global.tooltips.yPadding = 10;


//
//
// CHARTS AUSKOMMENTIERT DA SIE NACHGELADEN WEDEN. 
// SIEHE FULLPAGE.JS/FULLPAGE-CUSTOM.JS

// // Chart 1
// var chartObject1 = document.getElementById('chart1').getContext('2d');
// var chart1 = new Chart(chartObject1, {
//   // The type of chart we want to create
//   type: 'horizontalBar',

//   // The data for our dataset
//   data: {
//     labels: [
//       'Informations- und Kommunikationstechnologien',
//       'Finanzdienstleistungen',
//       'Unternehmensnahe Dienstleistungen',
//       'Elektrotechnik/Maschinenbau',
//       'Fahrzeugbau',
//       'Chemie-, Pharma- und Grundstoffindustrie',
//       'Ver- und Entsorgung, Bergbau',
//       'Sonstiges Verarbeitendes Gewerbe',
//       'Sonstige Dienstleistungen',
//       'Verkehr, Logistik',
//       'Großhandel',
//       ' ',
//       'Gesamtwirtschaft',
//     ],
//     datasets: [
//       {
//         backgroundColor: '#a3c4d6',
//         hoverBackgroundColor: '#429bcc',
//         barThickness: 5,
//         data: [
//           17.8,
//           12.2,
//           11.1,
//           6.8,
//           5.1,
//           4.6,
//           3.6,
//           3.3,
//           2.5,
//           1.5,
//           1.0,
//           ' ',
//           5.8,
//         ],
//       },
//     ],
//   },

//   // Configuration options go here
//   options: {
//     animation: {
//       tension: {
//         duration: 5000,
//         easing: 'linear',
//         from: 1,
//         to: 0,
//         loop: true,
//       },
//     },
//     scales: {
//       yAxes: [
//         {
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//       xAxes: [
//         {
//           ticks: {
//             suggestedMin: 0,
//             suggestedMax: 20,
//           },
//           display: false,
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//     },
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           if (value > 0) {
//             let percentage = value + '%';
//             return percentage;
//           }
//         },
//       },
//     },
//   },
// });

// // Chart 2 Radar Anwendung 1
// var chartObject1 = document.getElementById('chart2').getContext('2d');
// var chart2 = new Chart(chartObject1, {
//   type: 'radar',

//   data: {
//     labels: [
//       'Produkte, Dienstleistungen',
//       'Automatisierung von Prozessen',
//       'KI-Anwendung für Datenanalyse',
//       'Kundenkommunikation/-interaktion',
//       'andere Anwendungsgebiete',
//     ],
//     datasets: [
//       {
//         label: 'Informations- und Kommunikationstechnologien',
//         backgroundColor: 'rgba(163, 196, 214, 0.4)',
//         borderColor: 'rgba(163, 196, 214, 1)',
//         hoverBackgroundColor: 'rgba(163, 196, 214, 0,3)',
//         data: [66, 54, 35, 9, 11],
//       },
//       {
//         label: 'Gesamtwirtschaft',
//         backgroundColor: 'rgba(3, 196, 214, 0.4)',
//         borderColor: 'rgba(3, 196, 214, 1)',
//         hoverBackgroundColor: 'rgba(163, 196, 214, 0,3)',
//         data: [60, 56, 34, 22, 11],
//       },
//     ],
//   },

//   options: {
//     animation: {
//       tension: {
//         duration: 10000,
//         easing: 'linear',
//         from: 1,
//         to: 0,
//         loop: true,
//       },
//     },
//     tooltips: {},
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           if (value > 0) {
//             let percentage = value + '%';
//             return percentage;
//           }
//         },
//         align: 'left',
//         display: 'auto',
//         backgroundColor: '#f2f2f2',
//         font: {
//           size: 14,
//         },
//       },
//     },
//     scale: {
//       angleLines: {
//         display: false,
//       },
//       angleLines: {
//         color: '#429bcc',
//       },
//       gridLines: {
//         color: '#429bcc',
//       },
//       ticks: {
//         display: false,
//         suggestedMin: 0,
//         suggestedMax: 70,
//       },
//     },
//   },
// });

// // Chart 3 Radar Anwendung 2
// var chartObject1 = document.getElementById('chart3').getContext('2d');
// var chart3 = new Chart(chartObject1, {
//   type: 'radar',

//   data: {
//     labels: [
//       'Produktion, Dienstleistungserbringung',
//       'Administration',
//       'FuE, Innovation',
//       'Informationstechnik',
//       'Vertrieb, Marketing',
//       'Einkauf/Logistik',
//     ],
//     datasets: [
//       {
//         label: 'Informations- und Kommunikationstechnologien',
//         backgroundColor: 'rgba(163, 196, 214, 0.4)',
//         borderColor: 'rgba(163, 196, 214, 1)',
//         data: [57, 14, 36, 26, 8, 3],
//       },
//       {
//         label: 'Gesamtwirtschaft',
//         backgroundColor: 'rgba(3, 196, 214, 0.4)',
//         borderColor: 'rgba(3, 196, 214, 1)',
//         data: [52, 37, 21, 20, 5, 3],
//       },
//     ],
//   },

//   options: {
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           if (value > 0) {
//             let percentage = value + '%';
//             return percentage;
//           }
//         },
//         align: 'center',
//         display: 'auto',
//         backgroundColor: '#f2f2f2',
//         font: {
//           size: 14,
//         },
//       },
//     },
//     scale: {
//       angleLines: {
//         display: false,
//       },
//       angleLines: {
//         color: '#429bcc',
//       },
//       gridLines: {
//         color: '#429bcc',
//       },
//       ticks: {
//         display: false,
//         suggestedMin: 0,
//         suggestedMax: 70,
//       },
//     },
//   },
// });

// // Chart 4 Radar Anwendung 3
// var chartObject1 = document.getElementById('chart4').getContext('2d');
// var chart4 = new Chart(chartObject1, {
//   type: 'radar',

//   data: {
//     labels: [
//       'Maschinelles Lernen',
//       'Bild- oder Tonerkennung',
//       'Wissensbasierte Systeme',
//       'Sprach- oder Textverstehen',
//     ],
//     datasets: [
//       {
//         label: 'Informations- und Kommunikationstechnologien',
//         backgroundColor: 'rgba(163, 196, 214, 0.4)',
//         borderColor: 'rgba(163, 196, 214, 1)',
//         hoverBackgroundColor: '#a3c4d6',
//         data: [59, 47, 55, 23],
//       },
//       {
//         label: 'Gesamtwirtschaft',
//         backgroundColor: 'rgba(3, 196, 214, 0.4)',
//         borderColor: 'rgba(3, 196, 214, 1)',
//         hoverBackgroundColor: '#a3c4d6',
//         data: [60, 56, 34, 22],
//       },
//     ],
//   },

//   options: {
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           if (value > 0) {
//             let percentage = value + '%';
//             return percentage;
//           }
//         },
//         align: 'start',
//         display: 'auto',
//         backgroundColor: '#f2f2f2',
//         font: {
//           size: 14,
//         },
//       },
//     },
//     scale: {
//       angleLines: {
//         display: false,
//       },
//       angleLines: {
//         color: '#429bcc',
//       },
//       gridLines: {
//         color: '#429bcc',
//       },
//       ticks: {
//         display: false,
//         suggestedMin: 0,
//         suggestedMax: 70,
//       },
//     },
//   },
// });

// // Chart 5 Einsatz von KI in Produkten
// var chartObject1 = document.getElementById('chart5').getContext('2d');
// var chart5 = new Chart(chartObject1, {
//   // The type of chart we want to create
//   type: 'horizontalBar',

//   // The data for our dataset
//   data: {
//     labels: [
//       'Informations- und Kommunikationstechnologien',
//       'Unternehmensnahe Dienstleistungen',
//       'Finanzdienstleistungen',
//       'Elektrotechnik/Maschinenbau',
//       'Fahrzeugbau',
//       'Chemie-, Pharma- und Grundstoffindustrie',
//       'Sonstiges Verarbeitendes Gewerbe',
//       'Ver- und Entsorgung, Bergbau',
//       'Sonstige Dienstleistungen',
//       'Verkehr, Logistik',
//       'Großhandel',
//       ' ',
//       'Gesamtwirtschaft',
//     ],
//     datasets: [
//       {
//         backgroundColor: '#a3c4d6',
//         hoverBackgroundColor: '#429bcc',
//         barThickness: 5,
//         data: [
//           14.7,
//           9.4,
//           7.8,
//           4.4,
//           3.1,
//           2.1,
//           2.1,
//           2.0,
//           1.2,
//           1.1,
//           0.8,
//           ' ',
//           4.4,
//         ],
//       },
//     ],
//   },

//   // Configuration options go here
//   options: {
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           if (value > 0) {
//             let percentage = value + '%';
//             return percentage;
//           }
//         },
//       },
//     },
//     scales: {
//       yAxes: [
//         {
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//       xAxes: [
//         {
//           display: false,
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//     },
//   },
// });


// NICHT AUSKOMMENTIERT DA DIE UPDATE FUNKTION SONST NICHT FUNKTIONIERT
// Chart 6 Zeitliche Entwicklung
var chartObject6 = document.getElementById('chart6').getContext('2d');
var chart6 = new Chart(chartObject6, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
    labels: [
      'Finanzdienstleistungen',
      'Chemie-, Pharma- und Grundstoffindustrie',
      'Elektrotechnik/Maschinenbau',
      'Informations- und Kommunikationstechnologien',
      'Großhandel',
      'Verkehr, Logistik',
      'Ver- und Entsorgung, Bergbau',
      'Sonstiges Verarbeitendes Gewerbe',
      'Unternehmensnahe Dienstleistungen',
      'Sonstige Dienstleistungen',
      'Fahrzeugbau',
      ' ',
      'Gesamtwirtschaft',
    ],
    datasets: [
      {
        backgroundColor: '#a3c4d6',
        hoverBackgroundColor: '#429bcc',
        barThickness: 5,
        data: [6, 11, 17, 9, 8, 20, 12, 35, 24, 43, 17, ' ', 20],
      },
    ],
  },

  // Configuration options go here
  options: {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          if (value > 0) {
            let percentage = value + '%';
            return percentage;
          }
        },
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: {
            display: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 110,
          },
        },
      ],
    },
  },
});

function updatevor2010() {
  chart6.data.datasets[0].data = [
    6,
    11,
    17,
    9,
    8,
    20,
    12,
    35,
    24,
    43,
    17,
    ' ',
    20,
  ];
  chart6.update();
}

function update201015() {
  chart6.data.datasets[0].data = [
    25,
    25,
    32,
    35,
    38,
    39,
    43,
    44,
    44,
    54,
    56,
    ' ',
    40,
  ];
  chart6.update();
}

function update201617() {
  chart6.data.datasets[0].data = [
    63,
    76,
    73,
    74,
    79,
    55,
    74,
    79,
    73,
    68,
    82,
    ' ',
    73,
  ];
  chart6.update();
}

function update201819() {
  chart6.data.datasets[0].data = [
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    ' ',
    100,
  ];
  chart6.update();
}

// //Chart 7 Ausgaben (Umsatz)
// var chartObject7 = document.getElementById('chart7').getContext('2d');
// var chart7 = new Chart(chartObject7, {
//   // The type of chart we want to create
//   type: 'doughnut',

//   // The data for our dataset
//   data: {
//     labels: [
//       'Informations- und Kommunikationstechnologien',
//       'Elektrotechnik/Maschinenbau',
//       'Fahrzeugbau',
//       'Unternehmensnahe Dienstleistungen',
//       'Sonstiges Verarbeitendes Gewerbe',
//       'Finanzdienstleistungen ',
//       'Sonstige Dienstleistungen',
//       'Verkehr, Logistik',
//       'Chemie/Pharma',
//       'Ver- und Entsorgung, Bergbau ',
//       'Großhandel',
//     ],
//     datasets: [
//       {
//         label: 'Ausgaben',
//         backgroundColor: [
//           '#1be995',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//           '#225e80',
//         ],
//         hoverBackgroundColor: '#a3c4d6',
//         barThickness: 5,
//         data: [1.5, 0.68, 0.84, 0.65, 0.26, 0.24, 0.19, 0.16, 0.14, 0.07, 0.07],
//       },
//     ],
//   },

//   // Configuration options go here
//   options: {
//     plugins: {
//       datalabels: {
//         // formatter: (value, ctx) => {
//         //     let sum = 0;
//         //     let dataArr = ctx.chart.data.datasets[0].data;
//         //     dataArr.map(data => {
//         //         sum += data;
//         //     });
//         //     let percentage = value+"MRD €";
//         //     return percentage;
//         // },
//         align: 'start',
//         display: 'auto',
//         backgroundColor: '#f2f2f2',
//         font: {
//           size: 18,
//         },
//       },
//     },
//   },
// });







//  //Chart 8 Umsätze Doppelseitige Balken
//  var chartObject8 = document.getElementById('chart8').getContext('2d');
//  var chart8 = new Chart(chartObject8, {
//    // The type of chart we want to create
//    type: 'doughnut',

//    // The data for our dataset
//    data: {
//      labels: [
//        'Finanzdienstleistungen',
//        'Informations- und Kommunikationstechnologien',
//        'Sonstiges Verarbeitendes Gewerbe',
//        'Elektrotechnik/Maschinenbau',
//        'Unternehmensnahe Dienstleistungen',
//        'Ver- und Entsorgung, Bergbau',
//        'Großhandel',
//        'Chemie/Pharma',
//        'Fahrzeugbau',
//        'Verkehr, Logistik',
//        'Sonstige Dienstleistungen',
//      ],
//      datasets: [
//        {
//          label: 'Umsätze',
//          backgroundColor: [
//            '#225e80',
//            '#1be995',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//            '#225e80',
//          ],
//          hoverBackgroundColor: '#a3c4d6',
//          barThickness: 1,
//          borderColor: '#012438',
//          borderWidth: 5,
//          data: [17.3, 9.0, 6.0, 4.9, 4.8, 4.5, 4.3, 3.4, 3.3, 1.5, 0.8],
//        },
//      ],
//    },

//    // Configuration options go here
//    options: {
//      scales:{
//        yAxes:{
//          gridLines: {
//            display: true,
//          },
//          ticks: {
//            suggestedMin: 0,
//            suggestedMax: 2,
//          },
//        },
//      },
//      plugins: {
//        datalabels: {
//          align: 'start',
//          display: 'auto',
//          color: '#fff',
//          padding: -25,
//          // backgroundColor: '#f2f2f2',
//          font: {
//            size: 14,
//          },
//        },
//      },
//      animation: {
//          tension: {
//              duration: 5000,
//              easing: 'ease',
//              from: 1,
//              to: 0,
//              loop: true,
//          },
//      },
//     //  onClick: () => {
//     //     chart8.data.datasets[0].backgroundColor = 
//     //     [
//     //       '#225e80',
//     //       '#1be995',
//     //       '#225e80',
//     //       '#1be995',
//     //       '#225e80',
//     //       '#1be995',
//     //       '#225e80',
//     //       '#1be995',
//     //       '#225e80',
//     //       '#1be995',
//     //       '#225e80',
//     //     ];
//     //     chart8.update();

//     //     document.getElementById('finanzLegende').style.opacity = 1;
//     //  }
//    },
//  });


// // Einfärben
//  function colorizeFinancial() {

//   var y = document.getElementById('finanzLegende');

//   chart8.data.datasets[0].backgroundColor = 
//   [
//     '#6143BF',
//     '#1be995',
//     '#33ADAE',
//     '#34D633',
//     '#B3F134',
//     '#FFFF33',
//     '#FEDC34',
//     '#FFBB34',
//     '#FF9034',
//     '#FF3334',
//     '#D83391',
//   ];
//   chart8.update();


//   // if (y.style.opacity == 0) {
//   //   y.style.opacity = 1;
//   // } else {
//   //   y.style.opacity = 0;
//   // }
//   document.getElementById('finanzLegende').style.transform = "translateX(0)";
// }


// // In Original-Farben färben
// function colorizeFinancialOriginal() {

//   var y = document.getElementById('finanzLegende');

//   chart8.data.datasets[0].backgroundColor = 
//   [
//     '#225e80',
//     '#1be995',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//     '#225e80',
//   ];  
//   chart8.update();
//   document.getElementById('finanzLegende').style.transform = "translateX(400px)";
// }








// //Chart 9 Ausgaben
// var chartObject9 = document.getElementById('chart9').getContext('2d');
// var chart9 = new Chart(chartObject9, {
//   // The type of chart we want to create
//   type: 'horizontalBar',

//   // The data for our dataset
//   data: {
//     labels: [
//       'Fahrzeugbau',
//       'Elektrotechnik und Maschinenbau',
//       'Informations- und Kommunikationstechnologien',
//       'Verkehr, Logistik',
//       'Finanzdienstleistungen',
//       'Chemie-, Pharma- und Grundstoffindustrie',
//       'Ver- und Entsorgung, Bergbau',
//       'Sonstige Dienstleistungen',
//       'Großhandel',
//       'Sonstiges Verarbeitendes Gewerbe',
//       'Unternehmensnahe Dienstleistungen',
//       ' ',
//       'Gesamtwirtschaft',
//     ],
//     datasets: [
//       {
//         label: 'Umsätze',
//         backgroundColor: '#a3c4d6',
//         hoverBackgroundColor: '#429bcc',
//         barThickness: 5,
//         data: [7056, 718, 382, 321, 286, 282, 245, 210, 171, 130, 93, ' ', 274],
//       },
//     ],
//   },

//   // Configuration options go here
//   options: {
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           if (value > 0) {
//             let percentage = value + ' Tsd. €';
//             return percentage;
//           }
//         },
//         font: {
//           size: 14,
//         },
//       },
//     },
//     scales: {
//       yAxes: [
//         {
//           gridLines: {
//             display: false,
//           },
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//       xAxes: [
//         {
//           display: false,
//           gridLines: {
//             display: false,
//           },
//           ticks: {
//             suggestedMin: 0,
//             suggestedMax: 9000,
//           },
//         },
//       ],
//     },
//   },
// });




