const discItems = [
    {
        artist: 'Lost Shapes',
        record_Title: 'Surface Tension',
        record_URL: 'https://thelostshapes.bandcamp.com/album/surface-tension',
        classification: '⚜︎',
        release_date: new Date('12/6/2024')
    },
    {
        artist: 'Trivial Shields',
        record_Title: 'Another Block Single',
        record_URL: 'https://trivialshields.bandcamp.com/track/another-block',
        classification: '⚙︎',
        release_date: new Date('12/19/2024')
    },
    {
        artist: 'Trivial Shields',
        record_Title: 'Headlights + Operator EP',
        record_URL: 'https://open.spotify.com/album/7rNujcZXuz3EiyshlcBULJ?si=awO9mbJCT1WWmcLJNC2LSg',
        classification: '⚙︎',
        release_date: new Date('11/19/2024')
    },
    {
        artist: 'Nubdub Ensemble',
        record_Title: 'Third',
        record_URL: 'https://nubdugensemble.bandcamp.com/album/third',
        classification: '⚙︎',
        release_date: new Date('11/5/2024')
    },
    {
        artist: 'Onkos',
        record_Title: 'Vascular Labyrinth',
        record_URL: 'https://i-voidhangerrecords.bandcamp.com/album/vascular-labyrinth',
        classification: '⚙︎',
        release_date: new Date('5/12/2023')
    },
    {
        artist: 'The Dirty Snacks Ensemble',
        record_Title: 'You Would Do Well',
        record_URL: 'https://thedirtysnacksensemble.bandcamp.com/album/you-would-do-well',
        classification: '⚜︎',
        release_date: new Date('9/16/2022')
    },
    {
        artist: 'The Dirty Snacks Ensemble',
        record_Title: 'Tidy Universe',
        record_URL: 'https://thedirtysnacksensemble.bandcamp.com/album/tidy-universe',
        classification: '⚜︎',
        release_date: new Date('6/11/2016')
    },
    {
        artist: 'The Dirty Snacks Ensemble',
        record_Title: "Another Man's Treasure",
        record_URL: 'https://thedirtysnacksensemble.bandcamp.com/album/tidy-universe',
        classification: '⚜︎',
        release_date: new Date('6/24/2017')
    },
    {
        artist: 'Two Aerials',
        record_Title: "Moonphase EP",
        record_URL: 'https://twoaerials.bandcamp.com/album/moonphase-ep',
        classification: '⚜︎',
        release_date: new Date('5/26/2017')
    },
    {
        artist: 'Gold Age',
        record_Title: "Gold Age",
        record_URL: 'https://singlespeedmusic.bandcamp.com/album/gold-age',
        classification: '⚜︎',
        release_date: new Date('7/22/2016')
    },
    {
        artist: 'Nathan Clevenger',
        record_Title: 'i had a dream about amnesia',
        record_URL: 'https://nathanclevenger.bandcamp.com/album/i-had-a-dream-about-amnesia',
        classification: '⚙︎',
        release_date: new Date('1/21/2022')
    },
    {
        artist: 'Jill Rogers',
        record_Title: 'Cloudy Day Sunny',
        record_URL: 'https://jillrogers.bandcamp.com/album/cloudy-day-sunny',
        classification: '⚙︎',
        release_date: new Date('12/4/2020')
    },
    {
        artist: 'Lisa Mezzacappa Six',
        record_Title: 'Cosmicomics',
        record_URL: 'https://lisamezzacappa.bandcamp.com/album/cosmicomics',
        classification: '⚙︎',
        release_date: new Date('2/1/2020')
    },
    {
        artist: 'Aaron Novik',
        record_Title: 'O+O+',
        record_URL: 'https://aaronnovik.bandcamp.com/album/o-o',
        classification: '⚙︎',
        release_date: new Date('11/5/2019')
    },
    {
        artist: 'Aaron Novik',
        record_Title: 'Frowny Frown',
        record_URL: 'https://aaronnovik.bandcamp.com/album/frowny-frown-2',
        classification: '⚙︎',
        release_date: new Date('1/1/2018')
    },
    {
        artist: "Rent Romus' Life's Blood Ensemble featuring Vinny Golia",
        record_Title: 'side Three: New Work',
        record_URL: 'https://rentromus.bandcamp.com/album/side-three-new-work',
        classification: '⚙︎',
        release_date: new Date('3/5/2019')
    },
    {
        artist: "Rent Romus' Life's Blood Ensemble",
        record_Title: 'Rouge Star',
        record_URL: 'https://rentromus.bandcamp.com/album/rogue-star',
        classification: '⚙︎',
        release_date: new Date('3/5/2019')
    },
    {
        artist: "Rent Romus' Life's Blood Ensemble",
        record_Title: 'Rising Colossus',
        record_URL: 'https://rentromus.bandcamp.com/album/rising-colossus',
        classification: '⚙︎',
        release_date: new Date('4/28/2016')
    },
    {
        artist: "Sis",
        record_Title: 'Gas Station Roses',
        record_URL: 'https://bandcalledsis.bandcamp.com/album/gas-station-roses',
        classification: '⚙︎',
        release_date: new Date('9/6/2019')
    },
    {
        artist: "Jordan Glenn",
        record_Title: 'BEAK',
        record_URL: 'https://jordanglenn.bandcamp.com/album/beak',
        classification: '⚙︎',
        release_date: new Date('9/26/2018')
    },
    {
        artist: "Robert Woods-Ladue",
        record_Title: 'Unlit-Overpass',
        record_URL: 'https://dennydennybreakfast.bandcamp.com/album/unlit-overpass',
        classification: '⚙︎',
        release_date: new Date('1/6/2018')
    },
    {
        artist: "Mickey Theis",
        record_Title: 'Range Songs',
        record_URL: 'https://mickeytheis.bandcamp.com/album/range-songs',
        classification: '⚙︎',
        release_date: new Date('9/27/2016')
    },
    {
        artist: "Mickey Theis",
        record_Title: 'No Saints',
        record_URL: 'https://mickeytheis.bandcamp.com/album/no-saints',
        classification: '⚙︎',
        release_date: new Date('9/7/2014')
    },
    {
        artist: "Mister Freedom | Neon Brown",
        record_Title: 'Mister Freedom',
        record_URL: 'https://iamneonbrown.bandcamp.com/album/mister-freedom',
        classification: '⚙︎',
        release_date: new Date('9/7/2014')
    },
    {
        artist: "Dominique Leone",
        record_Title: 'San Francisco',
        record_URL: 'https://dominiqueleone.bandcamp.com/album/san-francisco',
        classification: '⚙︎',
        release_date: new Date('9/7/2014')
    },
    {
        artist: "Robert Woods-Ladue | Mark Pascucci-Clifford",
        record_Title: 'Two Things',
        record_URL: 'https://dennydennybreakfast.bandcamp.com/album/two-things',
        classification: '⚜︎',
        release_date: new Date('9/7/2014')
    },
    {
        artist: "Color of the Year with Danny Meyer and Colin Stanahan",
        record_Title: 'Color of the Year',
        record_URL: 'https://coloroftheyear.bandcamp.com/album/color-of-the-year',
        classification: '⚜︎',
        release_date: new Date('6/3/2014')
    },
];

export default discItems;
