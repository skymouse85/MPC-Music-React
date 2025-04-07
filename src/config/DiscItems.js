const discItems = [
    {
        artist: 'Lost Shapes',
        record_Title: 'Surface Tension',
        record_URL: 'https://thelostshapes.bandcamp.com/album/surface-tension',
        classification: 'leader',
        release_date: new Date('12/6/2024'),
        image_URL: require('../srcAssets/images/LostShapes.jpg')
    },
    {
        artist: 'Rob Shelton',
        record_Title: 'Hibernation Wakeup',
        record_URL: 'https://robshelton.bandcamp.com/album/hibernation-wakeup',
        classification: 'sideman',
        release_date: new Date('6/22/2022'),
        image_URL: require('../srcAssets/images/shelton Hiber:Wakeujp.jpg')
    },
    {
        artist: 'Rob Shelton',
        record_Title: 'The Rain on East Ridge',
        record_URL: 'https://robshelton.bandcamp.com/track/the-rain-on-east-ridge',
        classification: 'sideman',
        release_date: new Date('3/4/2022'),
        image_URL: require('../srcAssets/images/RSheltonRainEast.jpg')
    },
    {
        artist: 'Bells Atlas',
        record_Title: 'Bells Atlas',
        record_URL: 'https://bellsatlas.bandcamp.com/album/bells-atlas-3',
        classification: 'sideman',
        release_date: new Date('6/18/2013'),
        image_URL: require('../srcAssets/images/BellsAtlas.jpg')
    },
    {
        artist: 'Greg Roensch',
        record_Title: 'Howling at the Moons of Saturn',
        record_URL: 'https://gregroensch.bandcamp.com/album/howling-at-the-moons-of-saturn',
        classification: 'sideman',
        release_date: new Date('11/1/2024'),
        image_URL: require('../srcAssets/images/Roensch.jpg')
    },
    {
        artist: 'Rob Shelton',
        record_Title: 'Eight Lines/The Seer',
        record_URL: 'https://robshelton.bandcamp.com/album/eight-lines-the-seer',
        classification: 'sideman',
        release_date: new Date('6/1/2020'),
        image_URL: require('../srcAssets/images/RShelton8Lines.jpg')
    },
    {
        artist: 'DRMS',
        record_Title: 'DRMS',
        record_URL: 'https://drms.bandcamp.com/album/drms',
        classification: 'sideman',
        release_date: new Date('6/28/2012'),
        image_URL: require('../srcAssets/images/DRMS.jpg')
    },
    {
        artist: 'DRMS',
        record_Title: 'Ostinato',
        record_URL: 'https://drms.bandcamp.com/track/ostinato',
        classification: 'sideman',
        release_date: new Date('10/2/2014'),
        image_URL: require('../srcAssets/images/DRMSOstinato.jpg')
    },
    {
        artist: 'DRMS',
        record_Title: 'American 707',
        record_URL: 'https://drms.bandcamp.com/album/american-707',
        classification: 'sideman',
        release_date: new Date('2/18/2014'),
        image_URL: require('../srcAssets/images/DRMS707.jpg')
    },
    {
        artist: 'DRMS',
        record_Title: 'Night Forest',
        record_URL: 'https://drms.bandcamp.com/album/night-forest',
        classification: 'sideman',
        release_date: new Date('6/5/2013'),
        image_URL: require('../srcAssets/images/DRMSNightForest.jpg')
    },

    {
        artist: 'Trivial Shields',
        record_Title: 'Another Block Single',
        record_URL: 'https://trivialshields.bandcamp.com/track/another-block',
        classification: 'sideman',
        release_date: new Date('12/19/2024'),
        image_URL: require('../srcAssets/images/AnotherBlock.jpg')
    },
    {
        artist: 'Trivial Shields',
        record_Title: 'Headlights + Operator EP',
        record_URL: 'https://open.spotify.com/album/7rNujcZXuz3EiyshlcBULJ?si=awO9mbJCT1WWmcLJNC2LSg',
        classification: 'sideman',
        release_date: new Date('11/19/2024'),
        image_URL: require('../srcAssets/images/Headlight+Operator.png')
    },
    {
        artist: 'Nubdub Ensemble',
        record_Title: 'Third',
        record_URL: 'https://nubdugensemble.bandcamp.com/album/third',
        classification: 'sideman',
        release_date: new Date('11/5/2024'),
        image_URL: require('../srcAssets/images/nubdug.jpg')
    },
    {
        artist: 'Onkos',
        record_Title: 'Vascular Labyrinth',
        record_URL: 'https://i-voidhangerrecords.bandcamp.com/album/vascular-labyrinth',
        classification: 'sideman',
        release_date: new Date('5/12/2023'),
        image_URL: require('../srcAssets/images/Onkos.jpg')
    },
    {
        artist: 'The Dirty Snacks Ensemble',
        record_Title: 'You Would Do Well',
        record_URL: 'https://thedirtysnacksensemble.bandcamp.com/album/you-would-do-well',
        classification: 'leader',
        release_date: new Date('9/16/2022'),
        image_URL: require('../srcAssets/images/WyDW.jpg')
    },
    {
        artist: 'The Dirty Snacks Ensemble',
        record_Title: 'Tidy Universe',
        record_URL: 'https://thedirtysnacksensemble.bandcamp.com/album/tidy-universe',
        classification: 'leader',
        release_date: new Date('6/11/2016'),
        image_URL: require('../srcAssets/images/Tidy U.jpg')
    },
    {
        artist: 'The Dirty Snacks Ensemble',
        record_Title: "Another Man's Treasure",
        record_URL: 'https://thedirtysnacksensemble.bandcamp.com/album/another-mans-treasure',
        classification: 'leader',
        release_date: new Date('6/24/2017'),
        image_URL: require("../srcAssets/images/Another Man's Treasure V3.jpg")
    },
    {
        artist: 'Two Aerials',
        record_Title: "Moonphase EP",
        record_URL: 'https://twoaerials.bandcamp.com/album/moonphase-ep',
        classification: 'leader',
        release_date: new Date('5/26/2017'),
        image_URL: require('../srcAssets/images/moonphase.jpg')
    },
    {
        artist: 'Gold Age',
        record_Title: "Gold Age",
        record_URL: 'https://singlespeedmusic.bandcamp.com/album/gold-age',
        classification: 'leader',
        release_date: new Date('7/22/2016'),
        image_URL: require('../srcAssets/images/GoldAge.jpg')
    },
    {
        artist: 'Nathan Clevenger',
        record_Title: 'i had a dream about amnesia',
        record_URL: 'https://nathanclevenger.bandcamp.com/album/i-had-a-dream-about-amnesia',
        classification: 'sideman',
        release_date: new Date('1/21/2022'),
        image_URL: require('../srcAssets/images/clevengerAmnesia.jpg')
    },
    {
        artist: 'Jill Rogers',
        record_Title: 'Cloudy Day Sunny',
        record_URL: 'https://jillrogers.bandcamp.com/album/cloudy-day-sunny',
        classification: 'sideman',
        release_date: new Date('12/4/2020'),
        image_URL: require('../srcAssets/images/rogers.jpg')
    },
    {
        artist: 'Lisa Mezzacappa Six',
        record_Title: 'Cosmicomics',
        record_URL: 'https://lisamezzacappa.bandcamp.com/album/cosmicomics',
        classification: 'sideman',
        release_date: new Date('2/1/2020'),
        image_URL: require('../srcAssets/images/cosmicomics.jpg')
    },
    {
        artist: 'Aaron Novik',
        record_Title: 'O+O+',
        record_URL: 'https://aaronnovik.bandcamp.com/album/o-o',
        classification: 'sideman',
        release_date: new Date('11/5/2019'),
        image_URL: require('../srcAssets/images/o+o+.jpg')
    },
    {
        artist: 'Aaron Novik',
        record_Title: 'Frowny Frown',
        record_URL: 'https://aaronnovik.bandcamp.com/album/frowny-frown-2',
        classification: 'sideman',
        release_date: new Date('1/1/2018'),
        image_URL: require('../srcAssets/images/frownyFrown.jpg')
    },
    {
        artist: "Rent Romus' Life's Blood Ensemble featuring Vinny Golia",
        record_Title: 'side Three: New Work',
        record_URL: 'https://rentromus.bandcamp.com/album/side-three-new-work',
        classification: 'sideman',
        release_date: new Date('3/5/2019'),
        image_URL: require('../srcAssets/images/rentANVinny.jpg')
    },
    {
        artist: "Rent Romus' Life's Blood Ensemble",
        record_Title: 'Rouge Star',
        record_URL: 'https://rentromus.bandcamp.com/album/rogue-star',
        classification: 'sideman',
        release_date: new Date('3/5/2019'),
        image_URL: require('../srcAssets/images/rougeStar.jpg')
    },
    {
        artist: "Rent Romus' Life's Blood Ensemble",
        record_Title: 'Rising Colossus',
        record_URL: 'https://rentromus.bandcamp.com/album/rising-colossus',
        classification: 'sideman',
        release_date: new Date('4/28/2016'),
        image_URL: require('../srcAssets/images/colossus.jpg')
    },
    {
        artist: "Sis",
        record_Title: 'Gas Station Roses',
        record_URL: 'https://bandcalledsis.bandcamp.com/album/gas-station-roses',
        classification: 'sideman',
        release_date: new Date('9/6/2019'),
        image_URL: require('../srcAssets/images/sis.jpg')
    },
    {
        artist: "Jordan Glenn's BEAk",
        record_Title: 'BEAK',
        record_URL: 'https://jordanglenn.bandcamp.com/album/beak',
        classification: 'sideman',
        release_date: new Date('9/26/2018'),
        image_URL: require('../srcAssets/images/beak.jpg')
    },
    {
        artist: "Jordan Glenn's BEAK",
        record_Title: 'The Party',
        record_URL: 'https://jordanglenn.bandcamp.com/album/the-party',
        classification: 'sideman',
        release_date: new Date('4/5/2025'),
        image_URL: require('../srcAssets/images/beakThePartyCover.jpg')
    },
    {
        artist: "Robert Woods-Ladue",
        record_Title: 'Unlit-Overpass',
        record_URL: 'https://dennydennybreakfast.bandcamp.com/album/unlit-overpass',
        classification: 'sideman',
        release_date: new Date('1/6/2018'),
        image_URL: require('../srcAssets/images/unlitOverpass.jpg')
    },
    {
        artist: "Mickey Theis",
        record_Title: 'Range Songs',
        record_URL: 'https://mickeytheis.bandcamp.com/album/range-songs',
        classification: 'sideman',
        release_date: new Date('9/27/2016'),
        image_URL: require('../srcAssets/images/RangeSongs.jpg')
    },
    {
        artist: "Mickey Theis",
        record_Title: 'No Saints',
        record_URL: 'https://mickeytheis.bandcamp.com/album/no-saints',
        classification: 'sideman',
        release_date: new Date('9/7/2014'),
        image_URL: require('../srcAssets/images/noSaints.jpg')
    },
    {
        artist: "Mister Freedom | Neon Brown",
        record_Title: 'Mister Freedom',
        record_URL: 'https://iamneonbrown.bandcamp.com/album/mister-freedom',
        classification: 'sideman',
        release_date: new Date('9/7/2014'),
        image_URL: require('../srcAssets/images/MRFreedom.jpg')
    },
    {
        artist: "Dominique Leone",
        record_Title: 'San Francisco',
        record_URL: 'https://dominiqueleone.bandcamp.com/album/san-francisco',
        classification: 'sideman',
        release_date: new Date('9/7/2014'),
        image_URL: require('../srcAssets/images/DLSF.jpg')
    },
    {
        artist: "Robert Woods-Ladue | Mark Pascucci-Clifford",
        record_Title: 'Two Things',
        record_URL: 'https://dennydennybreakfast.bandcamp.com/album/two-things',
        classification: 'leader',
        release_date: new Date('9/7/2014'),
        image_URL: require('../srcAssets/images/TwoThings.jpg')
    },
    {
        artist: "Color of the Year with Danny Meyer and Colin Stanahan",
        record_Title: 'Color of the Year',
        record_URL: 'https://coloroftheyear.bandcamp.com/album/color-of-the-year',
        classification: 'leader',
        release_date: new Date('6/3/2014'),
        image_URL: require('../srcAssets/images/COTY.jpg')
    },
    {
        artist: "Joe Rut",
        record_Title: 'Finger Painted Sun',
        record_URL: 'https://joerut.bandcamp.com/album/finger-painted-sun',
        classification: 'sideman',
        release_date: new Date('2/3/2021'),
        image_URL: require('../srcAssets/images/JRut.jpg')
    },
    {
        artist: "Cave Clove",
        record_Title: 'Still Just As Free',
        record_URL: 'https://caveclove.bandcamp.com/album/still-just-as-free',
        classification: 'sideman',
        release_date: new Date('12/13/2013'),
        image_URL: require('../srcAssets/images/CaveClove.jpg')
    },
    {
        artist: "Bill Baird",
        record_Title: 'Soundtrack',
        record_URL: 'https://billbaird.bandcamp.com/album/soundtrack',
        classification: 'sideman',
        release_date: new Date('4/8/2024'),
        image_URL: require('../srcAssets/images/BairdSoundtrack.jpg')
    },
    {
        artist: "Meerna",
        record_Title: 'So Far So Good',
        record_URL: 'https://meernaa.bandcamp.com/album/so-far-so-good',
        classification: 'sideman',
        release_date: new Date('10/6/2023'),
        image_URL: require('../srcAssets/images/SoFarSoGood.jpg')
    },
];

export default discItems;
