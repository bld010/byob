

let senators =
[ { name: 'Lamar Alexander',
    state: 'TN',
    party: 'R',
    twitter_account: 'SenAlexander',
    url: 'https://www.alexander.senate.gov/public',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Tammy Baldwin',
    state: 'WI',
    party: 'D',
    twitter_account: 'SenatorBaldwin',
    url: 'https://www.baldwin.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'John Barrasso',
    state: 'WY',
    party: 'R',
    twitter_account: 'SenJohnBarrasso',
    url: 'https://www.barrasso.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Michael Bennet',
    state: 'CO',
    party: 'D',
    twitter_account: 'SenBennetCo',
    url: 'https://www.bennet.senate.gov/public',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Marsha Blackburn',
    state: 'TN',
    party: 'R',
    twitter_account: 'MarshaBlackburn',
    url: 'https://www.blackburn.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Richard Blumenthal',
    state: 'CT',
    party: 'D',
    twitter_account: 'SenBlumenthal',
    url: 'https://www.blumenthal.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Roy Blunt',
    state: 'MO',
    party: 'R',
    twitter_account: 'RoyBlunt',
    url: 'https://www.blunt.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Cory Booker',
    state: 'NJ',
    party: 'D',
    twitter_account: 'SenBooker',
    url: 'https://www.booker.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'John Boozman',
    state: 'AR',
    party: 'R',
    twitter_account: 'JohnBoozman',
    url: 'https://www.boozman.senate.gov/public',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Mike Braun',
    state: 'IN',
    party: 'R',
    twitter_account: 'SenatorBraun',
    url: 'https://www.braun.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Sherrod Brown',
    state: 'OH',
    party: 'D',
    twitter_account: 'SenSherrodBrown',
    url: 'https://www.brown.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Richard Burr',
    state: 'NC',
    party: 'R',
    twitter_account: 'SenatorBurr',
    url: 'https://www.burr.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Maria Cantwell',
    state: 'WA',
    party: 'D',
    twitter_account: 'SenatorCantwell',
    url: 'https://www.cantwell.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Shelley Capito',
    state: 'WV',
    party: 'R',
    twitter_account: 'SenCapito',
    url: 'https://www.capito.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Benjamin Cardin',
    state: 'MD',
    party: 'D',
    twitter_account: 'SenatorCardin',
    url: 'https://www.cardin.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Thomas Carper',
    state: 'DE',
    party: 'D',
    twitter_account: 'SenatorCarper',
    url: 'https://www.carper.senate.gov/public',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Bob Casey',
    state: 'PA',
    party: 'D',
    twitter_account: 'SenBobCasey',
    url: 'https://www.casey.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Bill Cassidy',
    state: 'LA',
    party: 'R',
    twitter_account: null,
    url: 'https://www.cassidy.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Susan Collins',
    state: 'ME',
    party: 'R',
    twitter_account: 'SenatorCollins',
    url: 'https://www.collins.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Christopher Coons',
    state: 'DE',
    party: 'D',
    twitter_account: 'ChrisCoons',
    url: 'https://www.coons.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'John Cornyn',
    state: 'TX',
    party: 'R',
    twitter_account: 'JohnCornyn',
    url: 'https://www.cornyn.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Catherine Cortez Masto',
    state: 'NV',
    party: 'D',
    twitter_account: 'sencortezmasto',
    url: 'https://www.cortezmasto.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Tom Cotton',
    state: 'AR',
    party: 'R',
    twitter_account: 'SenTomCotton',
    url: 'https://www.cotton.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Kevin Cramer',
    state: 'ND',
    party: 'R',
    twitter_account: 'SenKevinCramer',
    url: 'https://www.cramer.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Michael Crapo',
    state: 'ID',
    party: 'R',
    twitter_account: 'MikeCrapo',
    url: 'https://www.crapo.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Ted Cruz',
    state: 'TX',
    party: 'R',
    twitter_account: 'SenTedCruz',
    url: 'https://www.cruz.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Steve Daines',
    state: 'MT',
    party: 'R',
    twitter_account: 'SteveDaines',
    url: 'https://www.daines.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Tammy Duckworth',
    state: 'IL',
    party: 'D',
    twitter_account: 'SenDuckworth',
    url: 'https://www.duckworth.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Richard Durbin',
    state: 'IL',
    party: 'D',
    twitter_account: 'SenatorDurbin',
    url: 'https://www.durbin.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Michael Enzi',
    state: 'WY',
    party: 'R',
    twitter_account: 'SenatorEnzi',
    url: 'https://www.enzi.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Joni Ernst',
    state: 'IA',
    party: 'R',
    twitter_account: 'SenJoniErnst',
    url: 'https://www.ernst.senate.gov/public',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Dianne Feinstein',
    state: 'CA',
    party: 'D',
    twitter_account: 'SenFeinstein',
    url: 'https://www.feinstein.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Deb Fischer',
    state: 'NE',
    party: 'R',
    twitter_account: 'SenatorFischer',
    url: 'https://www.fischer.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Cory Gardner',
    state: 'CO',
    party: 'R',
    twitter_account: 'SenCoryGardner',
    url: 'https://www.gardner.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Kirsten Gillibrand',
    state: 'NY',
    party: 'D',
    twitter_account: 'GillibrandNY',
    url: 'https://www.gillibrand.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Lindsey Graham',
    state: 'SC',
    party: 'R',
    twitter_account: 'GrahamBlog',
    url: 'https://www.lgraham.senate.gov/public',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Charles Grassley',
    state: 'IA',
    party: 'R',
    twitter_account: 'ChuckGrassley',
    url: 'https://www.grassley.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Kamala Harris',
    state: 'CA',
    party: 'D',
    twitter_account: 'SenKamalaHarris',
    url: 'https://www.harris.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Margaret Hassan',
    state: 'NH',
    party: 'D',
    twitter_account: 'Senatorhassan',
    url: 'https://www.hassan.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Joshua Hawley',
    state: 'MO',
    party: 'R',
    twitter_account: 'SenHawleyPress',
    url: 'https://www.hawley.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Martin Heinrich',
    state: 'NM',
    party: 'D',
    twitter_account: 'MartinHeinrich',
    url: 'https://www.heinrich.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Mazie Hirono',
    state: 'HI',
    party: 'D',
    twitter_account: 'MazieHirono',
    url: 'https://www.hirono.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'John Hoeven',
    state: 'ND',
    party: 'R',
    twitter_account: 'SenJohnHoeven',
    url: 'https://www.hoeven.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Cindy Hyde-Smith',
    state: 'MS',
    party: 'R',
    twitter_account: 'SenHydeSmith',
    url: 'https://www.hydesmith.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'James Inhofe',
    state: 'OK',
    party: 'R',
    twitter_account: 'InhofePress',
    url: 'https://www.inhofe.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Johnny Isakson',
    state: 'GA',
    party: 'R',
    twitter_account: 'SenatorIsakson',
    url: 'https://www.isakson.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Ron Johnson',
    state: 'WI',
    party: 'R',
    twitter_account: 'SenRonJohnson',
    url: 'https://www.ronjohnson.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Doug Jones',
    state: 'AL',
    party: 'D',
    twitter_account: 'sendougjones',
    url: 'https://www.jones.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Tim Kaine',
    state: 'VA',
    party: 'D',
    twitter_account: null,
    url: 'https://www.kaine.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'John Kennedy',
    state: 'LA',
    party: 'R',
    twitter_account: 'SenJohnKennedy',
    url: 'https://www.kennedy.senate.gov/public',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Angus King',
    state: 'ME',
    party: 'ID',
    twitter_account: 'SenAngusKing',
    url: 'https://www.king.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Amy Klobuchar',
    state: 'MN',
    party: 'D',
    twitter_account: 'SenAmyKlobuchar',
    url: 'https://www.klobuchar.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'James Lankford',
    state: 'OK',
    party: 'R',
    twitter_account: 'SenatorLankford',
    url: 'https://www.lankford.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Patrick Leahy',
    state: 'VT',
    party: 'D',
    twitter_account: 'SenatorLeahy',
    url: 'https://www.leahy.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Mike Lee',
    state: 'UT',
    party: 'R',
    twitter_account: 'SenMikeLee',
    url: 'https://www.lee.senate.gov/public',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Joe Manchin',
    state: 'WV',
    party: 'D',
    twitter_account: 'Sen_JoeManchin',
    url: 'https://www.manchin.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Edward Markey',
    state: 'MA',
    party: 'D',
    twitter_account: 'SenMarkey',
    url: 'https://www.markey.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Mitch McConnell',
    state: 'KY',
    party: 'R',
    twitter_account: 'McConnellPress',
    url: 'https://www.mcconnell.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Martha McSally',
    state: 'AZ',
    party: 'R',
    twitter_account: 'RepMcSally',
    url: 'https://www.mcsally.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Robert Menendez',
    state: 'NJ',
    party: 'D',
    twitter_account: 'SenatorMenendez',
    url: 'https://www.menendez.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Jeff Merkley',
    state: 'OR',
    party: 'D',
    twitter_account: 'SenJeffMerkley',
    url: 'https://www.merkley.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Jerry Moran',
    state: 'KS',
    party: 'R',
    twitter_account: 'JerryMoran',
    url: 'https://www.moran.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Lisa Murkowski',
    state: 'AK',
    party: 'R',
    twitter_account: 'LisaMurkowski',
    url: 'https://www.murkowski.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Christopher Murphy',
    state: 'CT',
    party: 'D',
    twitter_account: 'senmurphyoffice',
    url: 'https://www.murphy.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Patty Murray',
    state: 'WA',
    party: 'D',
    twitter_account: 'PattyMurray',
    url: 'https://www.murray.senate.gov/public',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Rand Paul',
    state: 'KY',
    party: 'R',
    twitter_account: 'RandPaul',
    url: 'https://www.paul.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'David Perdue',
    state: 'GA',
    party: 'R',
    twitter_account: 'sendavidperdue',
    url: 'https://www.perdue.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Gary Peters',
    state: 'MI',
    party: 'D',
    twitter_account: 'SenGaryPeters',
    url: 'https://www.peters.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Rob Portman',
    state: 'OH',
    party: 'R',
    twitter_account: 'SenRobPortman',
    url: 'https://www.portman.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Jack Reed',
    state: 'RI',
    party: 'D',
    twitter_account: 'SenJackReed',
    url: 'https://www.reed.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Jim Risch',
    state: 'ID',
    party: 'R',
    twitter_account: 'SenatorRisch',
    url: 'https://www.risch.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Pat Roberts',
    state: 'KS',
    party: 'R',
    twitter_account: 'SenPatRoberts',
    url: 'https://www.roberts.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Mitt Romney',
    state: 'UT',
    party: 'R',
    twitter_account: 'SenatorRomney',
    url: 'https://www.romney.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Jacky Rosen',
    state: 'NV',
    party: 'D',
    twitter_account: 'SenJackyRosen',
    url: 'https://www.rosen.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Mike Rounds',
    state: 'SD',
    party: 'R',
    twitter_account: 'SenatorRounds',
    url: 'https://www.rounds.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Marco Rubio',
    state: 'FL',
    party: 'R',
    twitter_account: 'SenRubioPress',
    url: 'https://www.rubio.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Bernard Sanders',
    state: 'VT',
    party: 'ID',
    twitter_account: 'SenSanders',
    url: 'https://www.sanders.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Ben Sasse',
    state: 'NE',
    party: 'R',
    twitter_account: 'SenSasse',
    url: 'https://www.sasse.senate.gov/public',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Brian Schatz',
    state: 'HI',
    party: 'D',
    twitter_account: 'SenBrianSchatz',
    url: 'https://www.schatz.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Charles Schumer',
    state: 'NY',
    party: 'D',
    twitter_account: 'SenSchumer',
    url: 'https://www.schumer.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Tim Scott',
    state: 'SC',
    party: 'R',
    twitter_account: 'SenatorTimScott',
    url: 'https://www.scott.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Rick Scott',
    state: 'FL',
    party: 'R',
    twitter_account: 'SenRickScott',
    url: 'https://www.rickscott.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Jeanne Shaheen',
    state: 'NH',
    party: 'D',
    twitter_account: 'SenatorShaheen',
    url: 'https://www.shaheen.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Richard Shelby',
    state: 'AL',
    party: 'R',
    twitter_account: 'SenShelby',
    url: 'https://www.shelby.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Kyrsten Sinema',
    state: 'AZ',
    party: 'D',
    twitter_account: 'SenatorSinema',
    url: 'https://www.sinema.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Tina Smith',
    state: 'MN',
    party: 'D',
    twitter_account: 'SenTinaSmith',
    url: 'https://www.smith.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Debbie Stabenow',
    state: 'MI',
    party: 'D',
    twitter_account: 'SenStabenow',
    url: 'https://www.stabenow.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Dan Sullivan',
    state: 'AK',
    party: 'R',
    twitter_account: 'SenDanSullivan',
    url: 'https://www.sullivan.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Jon Tester',
    state: 'MT',
    party: 'D',
    twitter_account: 'SenatorTester',
    url: 'https://www.tester.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'John Thune',
    state: 'SD',
    party: 'R',
    twitter_account: 'SenJohnThune',
    url: 'https://www.thune.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Thom Tillis',
    state: 'NC',
    party: 'R',
    twitter_account: 'senthomtillis',
    url: 'https://www.tillis.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'junior' },
  { name: 'Patrick Toomey',
    state: 'PA',
    party: 'R',
    twitter_account: 'SenToomey',
    url: 'https://www.toomey.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Tom Udall',
    state: 'NM',
    party: 'D',
    twitter_account: 'SenatorTomUdall',
    url: 'https://www.tomudall.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Chris Van Hollen',
    state: 'MD',
    party: 'D',
    twitter_account: 'ChrisVanHollen',
    url: 'https://www.vanhollen.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'junior' },
  { name: 'Mark Warner',
    state: 'VA',
    party: 'D',
    twitter_account: 'MarkWarner',
    url: 'https://www.warner.senate.gov',
    title: 'Senator, 2nd Class',
    rank: 'senior' },
  { name: 'Elizabeth Warren',
    state: 'MA',
    party: 'D',
    twitter_account: 'SenWarren',
    url: 'https://www.warren.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Sheldon Whitehouse',
    state: 'RI',
    party: 'D',
    twitter_account: 'SenWhitehouse',
    url: 'https://www.whitehouse.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'junior' },
  { name: 'Roger Wicker',
    state: 'MS',
    party: 'R',
    twitter_account: 'SenatorWicker',
    url: 'https://www.wicker.senate.gov',
    title: 'Senator, 1st Class',
    rank: 'senior' },
  { name: 'Ron Wyden',
    state: 'OR',
    party: 'D',
    twitter_account: 'RonWyden',
    url: 'https://www.wyden.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' },
  { name: 'Todd Young',
    state: 'IN',
    party: 'R',
    twitter_account: 'SenToddYoung',
    url: 'https://www.young.senate.gov',
    title: 'Senator, 3rd Class',
    rank: 'senior' } 
  ]
   
