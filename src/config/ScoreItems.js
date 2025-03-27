const scores = [
    {
        project: 'The Dirty Snacks Ensemble',
        releases: [
            {
                title: 'You Would Do Well',
                release_date: new Date('9/16/2022'),
                image_URL: require('../srcAssets/images/WyDW.jpg'),
                compositions: [
                    {
                        name: 'Showmen',
                        score: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenFullScore.pdf',
                        parts: [
                            { name: 'Voice', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenAlto.pdf' },
                            { name: 'Clarinet', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenClarinet.pdf' },
                            { name: 'Drum Set', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenDrumSet.pdf' },
                            { name: 'Bass', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenElectricBass.pdf' },
                            { name: 'Piano', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenPiano.pdf' },
                            { name: 'Vibraphone', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenVibraphone.pdf' },
                            { name: 'Cello', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen/ShowmenVioloncello.pdf' }
                        ]
                    },
                    {
                        name: 'Showmen Varient',
                        score: '/assets/scores/DSE/You_Would_Do_Well/Showmen Varient/ShowmenPianoEtudeFullScore.pdf',
                        parts: [
                            { name: 'Piano', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen Varient/ShowmenPianoEtudePiano.pdf' },
                            { name: 'Synth Drums', file: '/assets/scores/DSE/You_Would_Do_Well/Showmen Varient/ShowmenPianoEtudeSynthDrums.pdf' }
                        ]
                    }
                ]
            },

        ]




    }
];

export default scores;