		new fullpage('#fullpage', {
			//options here
			autoScrolling: true,
			scrollHorizontally: true,
			verticalCentered: false,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
			// sectionsColor: ['#002C45', '#002C45', '#002C45', '#002C45', '#002C45', '#002C45', '#002C45', '#002C45', '#002C45'],
			menu: '#navbar',
			// scrollBar: true,


            // loads canvas when in view
			afterLoad: function(origin, destination){
				var loadedSection = this;


				// if(destination.anchor == 'page1'){
				// 	alert("page 1");
				// }


				// if(destination.anchor == 'page2'){
				// 	alert("page 2");
				// }


                //
                // SEITE 3
				if(destination.anchor == 'page3'){
					// Chart 1
                    var chartObject1 = document.getElementById('chart1').getContext('2d');
                    var chart1 = new Chart(chartObject1, {
                    // The type of chart we want to create
                    type: 'horizontalBar',

                    // The data for our dataset
                    data: {
                        labels: [
                        'Informations- und Kommunikationstechnologien',
                        'Finanzdienstleistungen',
                        'Unternehmensnahe Dienstleistungen',
                        'Elektrotechnik/Maschinenbau',
                        'Fahrzeugbau',
                        'Chemie-, Pharma- und Grundstoffindustrie',
                        'Ver- und Entsorgung, Bergbau',
                        'Sonstiges Verarbeitendes Gewerbe',
                        'Sonstige Dienstleistungen',
                        'Verkehr, Logistik',
                        'Großhandel',
                        ' ',
                        'Gesamtwirtschaft',
                        ],
                        datasets: [
                        {
                            backgroundColor: [
                                '#1be995',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                              ],
                            hoverBackgroundColor: '#429bcc',
                            barThickness: 5,
                            data: [
                            17.8,
                            12.2,
                            11.1,
                            6.8,
                            5.1,
                            4.6,
                            3.6,
                            3.3,
                            2.5,
                            1.5,
                            1.0,
                            ' ',
                            5.8,
                            ],
                        },
                        ],
                    },

                    // Configuration options go here
                    options: {
                        animation: {
                            tension: {
                                duration: 5000,
                                easing: 'ease',
                                from: 1,
                                to: 0,
                                loop: true,
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
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 20,
                            },
                            display: false,
                            gridLines: {
                                display: false,
                            },
                            },
                        ],
                        },
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
                    },
                    });
				}



                
                //
                // SEITE 4
				if(destination.anchor == 'page4'){

                    // Chart 2 Radar Anwendung 1
                    var chartObject1 = document.getElementById('chart2').getContext('2d');
                    var chart2 = new Chart(chartObject1, {
                    type: 'radar',

                    data: {
                        labels: [
                        'Produkte, Dienstleistungen',
                        'Automatisierung von Prozessen',
                        'KI-Anwendung für Datenanalyse',
                        'Kundenkommunikation/-interaktion',
                        'andere Anwendungsgebiete',
                        ],
                        datasets: [
                        {
                            label: 'Informations- und Kommunikationstechnologien',
                            backgroundColor: '#1be99522',
                            borderColor: '#1be995',
                            hoverBackgroundColor: 'rgba(163, 196, 214, 0,3)',
                            data: [66, 54, 35, 9, 11],
                            borderWidth: 2,
                            pointHoverRadius: 6,
                        },
                        {
                            label: 'Gesamtwirtschaft',
                            backgroundColor: '#429bcc22',
                            borderColor: '#429bcc',
                            hoverBackgroundColor: 'rgba(163, 196, 214, 0,3)',
                            data: [60, 56, 34, 22, 11],
                            borderWidth: 2,
                            pointHoverRadius: 6,
                        },
                        ],
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                padding: 55,
                            }
                        },
                        animation: {
                            tension: {
                                duration: 5000,
                                easing: 'ease',
                                from: 1,
                                to: 0,
                                loop: true,
                            },
                        },
                        tooltips: {},
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
                            // align: 'left',
                            // backgroundColor: '#f2f2f2',
                            display: 'auto',
                            color: '#fff',
                            font: {
                            size: 14,
                            },
                        },
                        },
                        scale: {
                            angleLines: {
                                // display: false,
                                color: '#2b576f',
                            },
                            gridLines: {
                                color: '#2b576f',
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 70,
                            },
                        },
                    },
                    });


                // Chart 3 Radar Anwendung 2
                var chartObject1 = document.getElementById('chart3').getContext('2d');
                var chart3 = new Chart(chartObject1, {
                type: 'radar',

                data: {
                    labels: [
                    'Produktion, Dienstleistungserbringung',
                    'Administration',
                    'FuE, Innovation',
                    'Informationstechnik',
                    'Vertrieb, Marketing',
                    'Einkauf/Logistik',
                    ],
                    datasets: [
                    {
                        label: 'Informations- und Kommunikationstechnologien',
                        backgroundColor: '#1be99522',
                        borderColor: '#1be995',
                        data: [57, 14, 36, 26, 8, 3],
                    },
                    {
                        label: 'Gesamtwirtschaft',
                        backgroundColor: '#429bcc22',
                        borderColor: '#429bcc',
                        data: [52, 37, 21, 20, 5, 3],
                    },
                    ],
                },

                options: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 55,
                        }
                    },
                    animation: {
                        tension: {
                            duration: 5000,
                            easing: 'ease',
                            from: 1,
                            to: 0,
                            loop: true,
                        },
                    },
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
                        // align: 'auto',
                        // display: false,
                        color: '#fff',
                        font: {
                            size: 14,
                        },
                    },
                    },
                    scale: {
                        angleLines: {
                            // display: false,
                            color: '#2b576f',
                        },
                        gridLines: {
                            color: '#2b576f',
                        },
                        ticks: {
                            display: false,
                            suggestedMin: 0,
                            suggestedMax: 70,
                        },
                    },
                },
                });


                
                // Chart 4 Radar Anwendung 3
                var chartObject1 = document.getElementById('chart4').getContext('2d');
                var chart4 = new Chart(chartObject1, {
                type: 'radar',

                data: {
                    labels: [
                    'Maschinelles Lernen',
                    'Bild- oder Tonerkennung',
                    'Wissensbasierte Systeme',
                    'Sprach- oder Textverstehen',
                    ],
                    datasets: [
                    {
                        label: 'Informations- und Kommunikationstechnologien',
                        backgroundColor: '#1be99522',
                        borderColor: '#1be995',
                        hoverBackgroundColor: '#a3c4d6',
                        data: [59, 47, 55, 23],
                    },
                    {
                        label: 'Gesamtwirtschaft',
                        backgroundColor: '#429bcc22',
                        borderColor: '#429bcc',
                        hoverBackgroundColor: '#a3c4d6',
                        data: [60, 56, 34, 22],
                    },
                    ],
                },

                options: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 55,
                        }
                    },
                    animation: {
                        tension: {
                            duration: 5000,
                            easing: 'ease',
                            from: 1,
                            to: 0,
                            loop: true,
                        },
                    },
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
                        // align: 'auto',
                        // display: false,
                        color: '#fff',
                        font: {
                            size: 14,
                        },
                    },
                    },
                    scale: {
                        angleLines: {
                            // display: false,
                            color: '#2b576f',
                        },
                        gridLines: {
                            color: '#2b576f',
                        },
                        ticks: {
                            display: false,
                            suggestedMin: 0,
                            suggestedMax: 70,
                        },
                    },
                },
                });

            }
                
                //
                // SEITE 5
				if(destination.anchor == 'page5'){
                    // Chart 5 Einsatz von KI in Produkten
                var chartObject1 = document.getElementById('chart5').getContext('2d');
                var chart5 = new Chart(chartObject1, {
                // The type of chart we want to create
                type: 'horizontalBar',

                // The data for our dataset
                data: {
                    labels: [
                    'Informations- und Kommunikationstechnologien',
                    'Unternehmensnahe Dienstleistungen',
                    'Finanzdienstleistungen',
                    'Elektrotechnik/Maschinenbau',
                    'Fahrzeugbau',
                    'Chemie-, Pharma- und Grundstoffindustrie',
                    'Sonstiges Verarbeitendes Gewerbe',
                    'Ver- und Entsorgung, Bergbau',
                    'Sonstige Dienstleistungen',
                    'Verkehr, Logistik',
                    'Großhandel',
                    ' ',
                    'Gesamtwirtschaft',
                    ],
                    datasets: [
                    {
                        backgroundColor: [
                            '#1be995',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                            '#225e80',
                          ],
                        hoverBackgroundColor: '#429bcc',
                        barThickness: 5,
                        data: [
                        14.7,
                        9.4,
                        7.8,
                        4.4,
                        3.1,
                        2.1,
                        2.1,
                        2.0,
                        1.2,
                        1.1,
                        0.8,
                        ' ',
                        4.4,
                        ],
                    },
                    ],
                },

                // Configuration options go here
                options: {
                    animation: {
                        tension: {
                            duration: 5000,
                            easing: 'ease',
                            from: 1,
                            to: 0,
                            loop: true,
                        },
                    },
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
                        },
                    ],
                    },
                },
                });
				}


                // AUSKOMMENTIERT, DA UPDATE FUNKTIONEN NICHT FUNKTIONIEREN, WENN CANVAS NACHGELADEN WIRD -> charts.js
                //
                // SEITE 6
				// if(destination.anchor == 'page6'){
                //     // Chart 6 Zeitliche Entwicklung
                //     var chartObject6 = document.getElementById('chart6').getContext('2d');
                //     var chart6 = new Chart(chartObject6, {
                //     // The type of chart we want to create
                //     type: 'horizontalBar',

                //     // The data for our dataset
                //     data: {
                //         labels: [
                //         'Finanzdienstleistungen',
                //         'Chemie-, Pharma- und Grundstoffindustrie',
                //         'Elektrotechnik/Maschinenbau',
                //         'Informations- und Kommunikationstechnologien',
                //         'Großhandel',
                //         'Verkehr, Logistik',
                //         'Ver- und Entsorgung, Bergbau',
                //         'Sonstiges Verarbeitendes Gewerbe',
                //         'Unternehmensnahe Dienstleistungen',
                //         'Sonstige Dienstleistungen',
                //         'Fahrzeugbau',
                //         ' ',
                //         'Gesamtwirtschaft',
                //         ],
                //         datasets: [
                //         {
                //             backgroundColor: [
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#1be995',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //                 '#225e80',
                //               ],
                //             hoverBackgroundColor: '#429bcc',
                //             barThickness: 5,
                //             data: [6, 11, 17, 9, 8, 20, 12, 35, 24, 43, 17, ' ', 20],
                //         },
                //         ],
                //     },

                //     // Configuration options go here
                //     options: {
                //         animation: {
                //             tension: {
                //                 duration: 5000,
                //                 easing: 'ease',
                //                 from: 1,
                //                 to: 0,
                //                 loop: true,
                //             },
                //         },
                //         plugins: {
                //         datalabels: {
                //             formatter: (value, ctx) => {
                //             let sum = 0;
                //             let dataArr = ctx.chart.data.datasets[0].data;
                //             dataArr.map((data) => {
                //                 sum += data;
                //             });
                //             if (value > 0) {
                //                 let percentage = value + '%';
                //                 return percentage;
                //             }
                //             },
                //         },
                //         },
                //         scales: {
                //         yAxes: [
                //             {
                //             gridLines: {
                //                 display: false,
                //             },
                //             },
                //         ],
                //         xAxes: [
                //             {
                //             display: false,
                //             gridLines: {
                //                 display: false,
                //             },
                //             ticks: {
                //                 suggestedMin: 0,
                //                 suggestedMax: 110,
                //             },
                //             },
                //         ],
                //         },
                //     },
                //     });

                //     function updatevor2010() {
                //     chart6.data.datasets[0].data = [
                //         6,
                //         11,
                //         17,
                //         9,
                //         8,
                //         20,
                //         12,
                //         35,
                //         24,
                //         43,
                //         17,
                //         ' ',
                //         20,
                //     ];
                //     chart6.update();
                //     }

                //     function update201015() {
                //     chart6.data.datasets[0].data = [
                //         25,
                //         25,
                //         32,
                //         35,
                //         38,
                //         39,
                //         43,
                //         44,
                //         44,
                //         54,
                //         56,
                //         ' ',
                //         40,
                //     ];
                //     chart6.update();
                //     }

                //     function update201617() {
                //     chart6.data.datasets[0].data = [
                //         63,
                //         76,
                //         73,
                //         74,
                //         79,
                //         55,
                //         74,
                //         79,
                //         73,
                //         68,
                //         82,
                //         ' ',
                //         73,
                //     ];
                //     chart6.update();
                //     }

                //     function update201819() {
                //     chart6.data.datasets[0].data = [
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         100,
                //         ' ',
                //         100,
                //     ];
                //     chart6.update();
                //     }
				// }

                
                //
                // SEITE 7
				if(destination.anchor == 'page7'){
                    // //Chart 9 Ausgaben
                    var chartObject9 = document.getElementById('chart9').getContext('2d');
                    var chart9 = new Chart(chartObject9, {
                      // The type of chart we want to create
                      type: 'horizontalBar',

                      // The data for our dataset
                      data: {
                        labels: [
                          'Fahrzeugbau',
                          'Elektrotechnik und Maschinenbau',
                          'Informations- und Kommunikationstechnologien',
                          'Verkehr, Logistik',
                          'Finanzdienstleistungen',
                          'Chemie-, Pharma- und Grundstoffindustrie',
                          'Ver- und Entsorgung, Bergbau',
                          'Sonstige Dienstleistungen',
                          'Großhandel',
                          'Sonstiges Verarbeitendes Gewerbe',
                          'Unternehmensnahe Dienstleistungen',
                          ' ',
                          'Gesamtwirtschaft',
                        ],
                        datasets: [
                          {
                            label: 'Umsätze',
                            backgroundColor: [
                                '#225e80',
                                '#225e80',
                                '#1be995',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                                '#225e80',
                              ],
                            hoverBackgroundColor: '#429bcc',
                            barThickness: 5,
                            data: [7056, 718, 382, 321, 286, 282, 245, 210, 171, 130, 93, ' ', 274],
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
                                let percentage = value + ' Tsd. €';
                                return percentage;
                              }
                            },
                            font: {
                              size: 14,
                            },
                          },
                        },
                        scales: {
                          yAxes: [
                            {
                              gridLines: {
                                display: false,
                              },
                              ticks: {
                                beginAtZero: true,
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
                                suggestedMax: 9000,
                              },
                            },
                          ],
                        },
                      },
                    });
                }
            
                


                
                //
                // SEITE 8
				if(destination.anchor == 'page8'){
                    //Chart 7 Ausgaben (Umsatz)
                    var chartObject7 = document.getElementById('chart7').getContext('2d');
                    var chart7 = new Chart(chartObject7, {
                      // The type of chart we want to create
                      type: 'doughnut',

                      // The data for our dataset
                      data: {
                        labels: [
                          'Informations- und Kommunikationstechnologien',
                          'Elektrotechnik/Maschinenbau',
                          'Fahrzeugbau',
                          'Unternehmensnahe Dienstleistungen',
                          'Sonstiges Verarbeitendes Gewerbe',
                          'Finanzdienstleistungen ',
                          'Sonstige Dienstleistungen',
                          'Verkehr, Logistik',
                          'Chemie/Pharma',
                          'Ver- und Entsorgung, Bergbau ',
                          'Großhandel',
                        ],
                        datasets: [
                          {
                            label: 'Ausgaben',
                            backgroundColor: [
                              '#1be995',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                            ],
                            hoverBackgroundColor: '#a3c4d6',
                            barThickness: 5,
                            borderColor: '#012031',
                            borderWidth: 5,
                            data: [1.5, 0.68, 0.84, 0.65, 0.26, 0.24, 0.19, 0.16, 0.14, 0.07, 0.07],
                          },
                        ],
                      },

                      // Configuration options go here
                      options: {
                        animation: {
                            tension: {
                                duration: 5000,
                                easing: 'ease',
                                from: 1,
                                to: 0,
                                loop: true,
                            },
                        },
                        plugins: {
                          datalabels: {
                            // formatter: (value, ctx) => {
                            //     let sum = 0;
                            //     let dataArr = ctx.chart.data.datasets[0].data;
                            //     dataArr.map(data => {
                            //         sum += data;
                            //     });
                            //     let percentage = value+"MRD €";
                            //     return percentage;
                            // },
                            align: 'start',
                            display: 'auto',
                            color: '#fff',
                            padding: -25,
                            // backgroundColor: '#f2f2f2',
                            font: {
                              size: 14,
                            },
                          },
                        },
                      },
                    });



                    //Chart 8 Umsätze Doppelseitige Balken
                    var chartObject8 = document.getElementById('chart8').getContext('2d');
                    var chart8 = new Chart(chartObject8, {
                      // The type of chart we want to create
                      type: 'doughnut',

                      // The data for our dataset
                      data: {
                        labels: [
                          'Finanzdienstleistungen ',
                          'Informations- und Kommunikationstechnologien',
                          'Sonstiges Verarbeitendes Gewerbe',
                          'Elektrotechnik/Maschinenbau',
                          'Unternehmensnahe Dienstleistungen',
                          'Ver- und Entsorgung, Bergbau ',
                          'Großhandel',
                          'Chemie/Pharma',
                          'Fahrzeugbau',
                          'Verkehr, Logistik',
                          'Sonstige Dienstleistungen',
                        ],
                        datasets: [
                          {
                            label: 'Umsätze',
                            backgroundColor: [
                              '#225e80',
                              '#1be995',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                              '#225e80',
                            ],
                            hoverBackgroundColor: '#a3c4d6',
                            barThickness: 1,
                            borderColor: '#012438',
                            borderWidth: 5,
                            data: [17.3, 9.0, 6.0, 4.9, 4.8, 4.5, 4.3, 3.4, 3.3, 1.5, 0.8],
                          },
                        ],
                      },

                      // Configuration options go here
                      options: {
                        scales:{
                          yAxes:{
                            gridLines: {
                              display: true,
                            },
                            ticks: {
                              suggestedMin: 0,
                              suggestedMax: 2,
                            },
                          },
                        },
                        plugins: {
                          datalabels: {
                            align: 'start',
                            display: 'auto',
                            color: '#fff',
                            padding: -25,
                            // backgroundColor: '#f2f2f2',
                            font: {
                              size: 14,
                            },
                          },
                        },
                        animation: {
                            tension: {
                                duration: 5000,
                                easing: 'ease',
                                from: 1,
                                to: 0,
                                loop: true,
                            },
                        },
                      },
                    });

                    
                    // Einfärben
                    function colorizeFinancial() {

                        var y = document.getElementById('finanzLegende');
                    
                        chart8.data.datasets[0].backgroundColor = 
                        [
                        '#6143BF',
                        '#1be995',
                        '#33ADAE',
                        '#34D633',
                        '#B3F134',
                        '#FFFF33',
                        '#FEDC34',
                        '#FFBB34',
                        '#FF9034',
                        '#FF3334',
                        '#D83391',
                        ];
                        chart8.update();
                    
                    
                        // if (y.style.opacity == 0) {
                        //   y.style.opacity = 1;
                        // } else {
                        //   y.style.opacity = 0;
                        // }
                        document.getElementById('finanzLegende').style.transform = "translateX(0)";
                    }
                    
                    
                    // In Original-Farben färben
                    function colorizeFinancialOriginal() {
                    
                        var y = document.getElementById('finanzLegende');
                    
                        chart8.data.datasets[0].backgroundColor = 
                        [
                        '#225e80',
                        '#1be995',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        '#225e80',
                        ];  
                        chart8.update();
                        document.getElementById('finanzLegende').style.transform = "translateX(400px)";
                    }

                }


                
            //     //
            //     // SEITE 9
			// 	if(destination.anchor == 'page9'){   
            // 	}
            
            }            
		});


		//methods
        fullpage_api.setAllowScrolling(true);
        
		//add data
		function addData(chart, data) {

			console.log(chart);

			// chart.data.labels.push(labels);					
			// chart.data.datasets[0].data.push(data);
			
			for (var i = 0; i < data.length; i++){
				chart.data.datasets[0].data.push(data[i]);
			} 

			// chart.data.datasets[0].forEach((dataset, index) => {
			// 	console.log(dataset);
			// 	console.log(data[index]);
			// 	console.log("index:" + index);
			// 	dataset.data.push(data[index]);
			// });			

			chart.update();	

		}