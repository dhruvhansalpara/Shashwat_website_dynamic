import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../src/data/indiaToursData.ts');

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

/** @type {Record<string, string>} */
const I = {
  jaipur: '1587474260584-136574528ed5',
  rajFort: '1524492412937-b74d277309cd',
  desert: '1518638153377-983d6baebcf7',
  pushkar: '1539650116574-75c0c6d73a6e',
  nainital: '1626621545994-90e25c25d5ca',
  mussoorie: '1597075687490-8f4530ae3fbf',
  ganga: '1610962385848-f732f7bac102',
  himal: '1626621341517-bbf3d9990a23',
  dharam: '1464822759023-fed622ff2c3b',
  taj: '1564507592333-c60657eea523',
  varanasi: '1524499029940-778e28ee4650',
  delhi: '1583417319070-0c7ddb5329f4',
  kerala: '1602219537921-d544c0d1b16e',
  backwater: '1547036965635-b743e66641c8',
  hampi: '1520442542812-fd27c7eb9352',
  coorg: '1593693411515-33369cf5e9e4',
  goa: '1519046904884-73407d63d208',
  sikkim: '1439066615861-d1af74d74000',
  golden: '1477587453333-f27f5480e136',
  mumbai: '1570168007205-dfb528c69558',
  guj: '1597075687490-8f4530ae3fbf',
  statue: '1544735716-392fe2489ffa',
  lonavala: '1506905925346-21bda4d32df4',
  ajanta: '1548013146-7247974b95cf',
  amrit: '1595658658481-b349badec3a5',
  kutch: '1500530853697-bfde9d2b9291',
  coorg2: '1470071459609-155fe4e52245',
};

const tours = [];

function T(
  id,
  title,
  location,
  searchRegion,
  searchPlaces,
  price,
  rating,
  reviews,
  duration,
  category,
  mainKey,
  isPopular,
  description,
  highlights,
  days,
  inclusions,
  exclusions
) {
  const hero = I[mainKey] || mainKey;
  const main = img(hero, 1000);
  const gallery = [hero, I.taj, I.himal, I.jaipur].map((id) => img(id, 600));
  tours.push({
    id: String(id),
    title,
    location,
    searchRegion,
    searchPlaces,
    price,
    rating,
    reviews,
    duration,
    image: main,
    category,
    isPopular: !!isPopular,
    description,
    highlights,
    itinerary: days.map((d, idx) => ({
      day: idx + 1,
      title: d.t,
      description: d.d,
    })),
    inclusions,
    exclusions,
    gallery,
  });
}

// --- Rajasthan (3) ---
T(
  1,
  'Jaipur City Tour — Royal Weekend',
  'Jaipur, Rajasthan',
  'Rajasthan',
  ['Jaipur', 'Rajasthan', 'Pink City', 'Amer', 'Amber Fort', 'Hawa Mahal', 'City Palace'],
  12499,
  4.8,
  342,
  '2 Nights / 3 Days',
  'Heritage',
  'jaipur',
  true,
  'A compact royal weekend covering Amber Fort, City Palace, and Hawa Mahal with curated walks through the Pink City bazaars. Ideal for first-time visitors who want heritage, photo stops, and authentic Rajasthani flavours without a rushed pace.',
  [
    'Amber (Amer) Fort with guided storytelling',
    'City Palace & museum highlights',
    'Hawa Mahal photo walk & old city lanes',
    'Johari Bazaar handicrafts time',
    'Comfortable hotel near city centre',
  ],
  [
    { t: 'Arrival & Pink City', d: 'Airport or station pick-up, hotel check-in, evening stroll around local markets.' },
    { t: 'Forts & palaces', d: 'Full day: Amer Fort, City Palace complex, Hawa Mahal viewpoint, optional Chokhi Dhani dinner.' },
    { t: 'Departure', d: 'Morning Albert Hall photo stop or leisure, checkout and transfer.' },
  ],
  [
    '2 nights hotel (twin sharing, CP)',
    'Private AC vehicle for sightseeing',
    'English / Hindi speaking guide on Day 2',
    'Monument entry fees as per itinerary',
    'All taxes on packaged services (GST)',
  ],
  ['Flights / trains', 'Meals not mentioned', 'Camera fees', 'Personal expenses', 'Travel insurance']
);

T(
  2,
  'Jaisalmer Desert & Fort Experience',
  'Jaisalmer, Rajasthan',
  'Rajasthan',
  ['Jaisalmer', 'Rajasthan', 'Thar', 'Sam Sand Dunes', 'Desert Safari'],
  26499,
  4.85,
  218,
  '3 Nights / 4 Days',
  'Wildlife & Desert',
  'desert',
  true,
  'Golden fort lanes, sunset on the Sam dunes, camel safari, and a night amid Thar rhythms. Includes heritage walk inside Sonar Quila and curated camp stay for a complete desert story.',
  [
    'Jaisalmer Fort (Sonar Quila) heritage walk',
    'Camel safari & sunset at Sam Sand Dunes',
    'Traditional folk evening at desert camp',
    'Patwon Ki Haveli & Gadisar Lake',
    'Comfort camp / hotel combo nights',
  ],
  [
    { t: 'Into the golden city', d: 'Drive or arrival in Jaisalmer, fort walk, sunset at Gadisar Lake.' },
    { t: 'Dunes & culture', d: 'Morning havelis, afternoon transfer to dunes, camel ride, camp dinner & music.' },
    { t: 'Village & leisure', d: 'Optional Kuldhara visit, leisure or jeep safari add-on, night in Jaisalmer.' },
    { t: 'Departure', d: 'Checkout and transfer to airport / railhead.' },
  ],
  [
    '3 nights stay (1 camp + 2 hotel or similar)',
    'AC vehicle for transfers & sightseeing',
    'Camel ride & camp dinner on dunes day',
    'Breakfast included throughout',
    'Driver allowance & parking',
  ],
  ['Lunch unless specified', 'Jeep safari upgrade', 'Tips', 'Travel insurance']
);

T(
  3,
  'Jaipur – Ajmer – Pushkar Spiritual Heritage',
  'Jaipur, Rajasthan',
  'Rajasthan',
  ['Ajmer', 'Pushkar', 'Jaipur', 'Rajasthan', 'Ana Sagar', 'Brahma Temple'],
  17299,
  4.75,
  189,
  '3 Nights / 4 Days',
  'Spiritual',
  'pushkar',
  false,
  'Blend Rajput forts with Ajmer Sharif serenity and Pushkar lake ghats. Designed for travellers who want spirituality, heritage, and short drives between three iconic towns.',
  [
    'Ajmer Sharif dargah visit (etiquette briefing)',
    'Pushkar lake & Brahma temple circuit',
    'Jaipur fort / palace slot on arrival or exit day',
    'Road journeys in private AC car',
    'Hand-picked mid-range hotels',
  ],
  [
    { t: 'Jaipur start', d: 'Arrive Jaipur, half-day city highlights or leisure.' },
    { t: 'Ajmer & Pushkar', d: 'Day trip to Ajmer Sharif, continue to Pushkar ghats & temple walk.' },
    { t: 'Pushkar depth', d: 'Morning aarti, café time, optional camel cart; drive back toward Jaipur.' },
    { t: 'Departure', d: 'Buffer shopping / Amer visit, drop at airport or station.' },
  ],
  [
    '3 nights twin-share hotels',
    'Breakfast daily',
    'Private AC car with hill-experienced driver',
    'Parking & tolls on route',
    'On-call tour manager (phone)',
  ],
  ['Lunch & dinner', 'Donations at shrines', 'Personal porters', 'Flights']
);

// Uttarakhand
T(
  4,
  'Nainital Weekend — Lakes & Mallital',
  'Nainital, Uttarakhand',
  'Uttarakhand',
  ['Nainital', 'Uttarakhand', 'Naini Lake', 'Mall Road', 'Bhimtal'],
  12899,
  4.7,
  276,
  '2 Nights / 3 Days',
  'Hill Station',
  'nainital',
  true,
  'Boating on Naini Lake, snow viewpoints (seasonal), and easy walks on the Mall Road. Perfect short escape from Delhi NCR heat.',
  ['Naini Lake boat ride', 'Snow View / ropeway (weather)', 'Eco Cave Gardens', 'Tibetan Market evening', 'Lake-view hotel'],
  [
    { t: 'Drive up & lake', d: 'Scenic drive, check-in, evening boat & Mall Road walk.' },
    { t: 'Nainital circuit', d: 'Viewpoints, caves, optional Bhimtal half-day.' },
    { t: 'Checkout', d: 'Morning tea gardens photo or leisure, departure.' },
  ],
  ['2N stay CP', 'Private cab from Kathgodam/Haldwani', 'Boating tickets', 'Driver charges'],
  ['Meals beyond breakfast', 'Ropeway if closed', 'Personal gear', 'Insurance']
);

T(
  5,
  'Mussoorie Hill Escape',
  'Mussoorie, Uttarakhand',
  'Uttarakhand',
  ['Mussoorie', 'Dehradun', 'Kempty Falls', 'Gun Hill', 'Mall Road'],
  13599,
  4.72,
  201,
  '2 Nights / 3 Days',
  'Hill Station',
  'mussoorie',
  false,
  'Classic Mall Road evenings, Kempty Falls splash, and Gun Hill views. Family-friendly pacing with optional Lal Tibba sunrise.',
  ['Kempty Falls', 'Gun Hill cable (optional)', 'Company Garden', 'Camel Back Road walk', 'Central Mussoorie stay'],
  [
    { t: 'Queen of hills', d: 'Pick-up Dehradun, climb to Mussoorie, Mall Road evening.' },
    { t: 'Waterfalls & views', d: 'Kempty, Gun Hill, local cafés.' },
    { t: 'Departure', d: 'Optional Lal Tibba, drive down.' },
  ],
  ['2N CP', 'AC cab', 'Parking'],
  ['Cable tickets', 'Lunch dinner', 'Tips']
);

T(
  6,
  'Haridwar & Rishikesh — Ganga Aarti & Rafting',
  'Haridwar, Uttarakhand',
  'Uttarakhand',
  ['Haridwar', 'Rishikesh', 'Ganga', 'Laxman Jhula', 'rafting'],
  10499,
  4.8,
  412,
  '2 Nights / 3 Days',
  'Spiritual',
  'ganga',
  true,
  'Witness Har Ki Pauri aarti, explore Rishikesh ghats, and add gentle rafting (seasonal) on the upper Ganges. Spiritual + soft adventure in one short break.',
  ['Har Ki Pauri evening aarti', 'Mansa Devi ropeway (optional)', 'Rishikesh Ram Jhula walk', 'Rafting stretch Marine / Brahmapuri grade', 'Yoga demo slot optional'],
  [
    { t: 'Haridwar', d: 'Arrive, ghats orientation, grand aarti experience.' },
    { t: 'Rishikesh day', d: 'Rafting session, ashram lane walks, Beatles ashram optional.' },
    { t: 'Return', d: 'Morning dip / temple, checkout.' },
  ],
  ['2N stay', 'Breakfast', 'Rafting with gear & instructor', 'Transfers Haridwar-Rishikesh'],
  ['Ashram donations', 'Ropeway tickets', 'Meals except breakfast']
);

// Himachal
T(
  7,
  'Shimla & Kufri Short Break',
  'Shimla, Himachal Pradesh',
  'Himachal Pradesh',
  ['Shimla', 'Kufri', 'Mall Road', 'The Ridge', 'HP'],
  11899,
  4.78,
  298,
  '2 Nights / 3 Days',
  'Hill Station',
  'himal',
  true,
  'Ridge walks, toy-train photo stops, and Kufri snow-line fun (seasonal). Designed as a quick mountain breather from Chandigarh.',
  ['The Ridge & Mall Road', 'Kufri fun park / snow point', 'Jakhu Temple option', 'Viceregal Lodge drive-by', 'Shimla heritage hotel'],
  [
    { t: 'Chandigarh–Shimla', d: 'Pickup, scenic drive, Mall Road evening.' },
    { t: 'Kufri day', d: 'Full day Kufri, local cafés, Ridge sunset.' },
    { t: 'Departure', d: 'Checkout, drive to Chandigarh.' },
  ],
  ['2N CP', 'Private Innova/similar', 'Driver allowance'],
  ['Monument entries', 'Horse rides at Kufri', 'Meals beyond breakfast']
);

T(
  8,
  'Manali Snow & Solang Adventure',
  'Manali, Himachal Pradesh',
  'Himachal Pradesh',
  ['Manali', 'Solang', 'Rohtang', 'Kullu', 'Old Manali'],
  19299,
  4.82,
  356,
  '3 Nights / 4 Days',
  'Adventure',
  'himal',
  true,
  'Solang activities, Hadimba Devi temple, Old Manali cafés, and buffer day for snow or café-hopping. Balanced for couples and small groups.',
  ['Solang Valley day', 'Hadimba & Vashisht hot springs', 'River-side walks', 'Naggar half-day option', '3N Manali stay'],
  [
    { t: 'Into Manali', d: 'Drive from Chandigarh/Delhi route, check-in, Mall walk.' },
    { t: 'Solang & culture', d: 'Adventure activities hub, Hadimba forest temple.' },
    { t: 'Leisure / snow', d: 'Buffer for Rohtang sector or local hikes.' },
    { t: 'Departure', d: 'Checkout, drive back.' },
  ],
  ['3N CP', 'AC vehicle', 'Solang parking coordination'],
  ['Activity tickets', 'Rohtang permit if applicable', 'Lunch dinner']
);

T(
  9,
  'Dharamshala & McLeodganj Tibetan Trails',
  'Dharamshala, Himachal Pradesh',
  'Himachal Pradesh',
  ['Dharamshala', 'McLeodganj', 'Kangra', 'Dalai Lama'],
  16899,
  4.76,
  167,
  '3 Nights / 4 Days',
  'Hill Station',
  'dharam',
  false,
  'Tsuglagkhang complex, McLeod markets, Bhagsu waterfall, and Kangra valley views. Calm pace with monastery etiquette guidance.',
  ['Dalai Lama temple complex', 'McLeodganj market & cafés', 'Bhagsu Nag waterfall trek', 'Dharamkot viewpoint optional', 'Valley-view hotel'],
  [
    { t: 'Arrival McLeod', d: 'Pick Pathankot/Chandigarh, check-in, evening market.' },
    { t: 'Monastery & nature', d: 'Temple circuit, Bhagsu trek light.' },
    { t: 'Kangra fort or tea gardens', d: 'Half-day heritage, rest café time.' },
    { t: 'Departure', d: 'Checkout, transfer.' },
  ],
  ['3N CP', 'Private cab full circuit'],
  ['Monastery donations', 'Personal porters', 'Meals beyond breakfast']
);

// UP
T(
  10,
  'Agra Taj Mahal Express',
  'Agra, Uttar Pradesh',
  'Uttar Pradesh',
  ['Agra', 'Taj Mahal', 'UP', 'Fatehpur Sikri', 'Yamuna'],
  7499,
  4.9,
  892,
  '1 Night / 2 Days',
  'Heritage',
  'taj',
  true,
  'Sunrise Taj, Agra Fort, and optional Fatehpur Sikri extension. Designed for Delhi weekenders who want maximum monument time.',
  ['Taj Mahal sunrise slot', 'Agra Fort guided tour', 'Mehtab Bagh viewpoint', 'Marble inlay demo', 'Express hotel near Taj'],
  [
    { t: 'Delhi–Agra', d: 'Drive or train connect, afternoon fort & sunset garden.' },
    { t: 'Taj & return', d: 'Pre-dawn Taj, breakfast, Fatehpur optional, drop Delhi/NCR.' },
  ],
  ['1N stay', 'Breakfast', 'AC car Delhi-Agra-Delhi', 'Monument tickets'],
  ['Lunch dinner', 'Tips', 'Train if chosen (ticket extra)']
);

T(
  11,
  'Agra – Mathura – Vrindavan Circuit',
  'Agra, Uttar Pradesh',
  'Uttar Pradesh',
  ['Mathura', 'Vrindavan', 'Agra', 'Krishna', 'Banke Bihari'],
  14299,
  4.74,
  234,
  '2 Nights / 3 Days',
  'Spiritual',
  'taj',
  false,
  'Taj heritage day plus twin Braj Krishna cities for temples, evening aarti lanes, and sweets tasting.',
  ['Taj Mahal visit', 'Mathura Krishna Janmasthan', 'Vrindavan ghats & ISKCON', 'Prem Mandir light show optional', 'Private AC road moves'],
  [
    { t: 'Agra monuments', d: 'Arrive Agra, Taj & fort slot.' },
    { t: 'Braj day', d: 'Mathura & Vrindavan temple circuit, evening aarti.' },
    { t: 'Departure', d: 'Local sweets, drive to Delhi/Agra station.' },
  ],
  ['2N hotel', 'Breakfast', 'AC car', 'Monument entries Taj+Agra Fort'],
  ['Temple donations', 'Meals', 'Guide optional add-on']
);

T(
  12,
  'Varanasi Ghats & Temples Immersion',
  'Varanasi, Uttar Pradesh',
  'Uttar Pradesh',
  ['Varanasi', 'Kashi', 'Sarnath', 'Ganga Aarti', 'Dashashwamedh'],
  14999,
  4.83,
  445,
  '2 Nights / 3 Days',
  'Spiritual',
  'varanasi',
  true,
  'Sunrise boat, narrow galis, Sarnath Buddhist ruins, and main evening aarti. Respectful small-group pacing with boat safety briefing.',
  ['Sunrise Ganga boat', 'Dashashwamedh / Assi aarti', 'Kashi Vishwanath corridor visit', 'Sarnath museum & stupa', 'Heritage haveli stay'],
  [
    { t: 'Arrival & aarti', d: 'Check-in, evening aarti by boat or ghat seating.' },
    { t: 'Old Kashi', d: 'Sunrise boat, temple lanes, silk weaving demo.' },
    { t: 'Sarnath & exit', d: 'Half-day Sarnath, departure.' },
  ],
  ['2N stay', 'Breakfast', 'Boat rides as per plan', 'AC airport transfers'],
  ['Temple VIP passes if any', 'Lunch dinner', 'Personal rituals cost']
);

// Delhi + nearby
T(
  13,
  'Golden Triangle Short — Delhi · Agra · Jaipur',
  'Delhi, India',
  'Delhi NCR',
  ['Delhi', 'New Delhi', 'Agra', 'Jaipur', 'Golden Triangle', 'NCR', 'Gurgaon', 'Noida'],
  32999,
  4.81,
  512,
  '3 Nights / 4 Days',
  'Heritage',
  'delhi',
  true,
  'Compressed classic triangle: Old Delhi pulse, Taj sunrise, and Jaipur Pink City snapshot. Fast-paced but organised for time-pressed travellers.',
  ['Old Delhi heritage walk slot', 'Taj Mahal', 'Agra Fort', 'Jaipur Amber & City Palace drive', 'Private AC car entire circuit'],
  [
    { t: 'Delhi stories', d: 'Arrival, half-day Old & New Delhi highlights.' },
    { t: 'Agra', d: 'Drive Agra, Taj sunset or next-day sunrise planning.' },
    { t: 'Jaipur', d: 'Forts & bazaars, cultural dinner optional.' },
    { t: 'Departure', d: 'Fly / train from Delhi or Jaipur as booked.' },
  ],
  ['3N hotels (city-wise)', 'Daily breakfast', 'AC vehicle & tolls', 'Monument combo tickets planned'],
  ['Lunches dinners', 'Domestic flights', 'Tips', 'Travel insurance']
);

T(
  14,
  'Delhi – Agra Quick Taj Weekend',
  'Delhi, India',
  'Delhi NCR',
  ['Delhi', 'Agra', 'Taj Mahal', 'Yamuna Expressway', 'NCR', 'New Delhi'],
  9499,
  4.66,
  178,
  '2 Days / 1 Night',
  'Heritage',
  'taj',
  false,
  'Yamuna Expressway comfort drive, Taj + Fort, and return same/next day. Lowest footprint triangle taste.',
  ['Taj Mahal', 'Agra Fort', 'Expressway AC sedan', '1N Agra hotel', 'Breakfast'],
  [
    { t: 'Delhi–Agra', d: 'Morning pick, drive, afternoon monuments.' },
    { t: 'Return', d: 'Optional sunrise Taj, breakfast, drive Delhi.' },
  ],
  ['1N stay', 'Breakfast', 'Sedan', 'Monument entries'],
  ['Meals', 'Tips', 'Guide']
);

// Kerala
T(
  15,
  'Munnar Tea Gardens & Misty Hills',
  'Munnar, Kerala',
  'Kerala',
  ['Munnar', 'Idukki', 'Kochi', 'Tea gardens', 'Eravikulam'],
  15299,
  4.79,
  267,
  '2 Nights / 3 Days',
  'Hill Station',
  'kerala',
  true,
  'Plantation walks, Mattupetty dam views, and Eravikulam (seasonal) Nilgiri Tahr chance. Cool climate escape.',
  ['Tea museum & factory insight', 'Mattupetty / Echo Point', 'Eravikulam subject to opening', 'Spice garden short tour', 'Resort overlooking valleys'],
  [
    { t: 'Kochi–Munnar', d: 'Scenic drive, check-in, sunset viewpoint.' },
    { t: 'Munnar sights', d: 'Full day tea & dam circuit.' },
    { t: 'Departure', d: 'Checkout, optional spice shopping.' },
  ],
  ['2N CP', 'Private cab from Cochin', 'Parking'],
  ['Eravikulam tickets', 'Lunch dinner', 'Personal shopping']
);

T(
  16,
  'Munnar – Alleppey Houseboat Combo',
  'Munnar, Kerala',
  'Kerala',
  ['Alleppey', 'Alappuzha', 'Backwaters', 'Munnar', 'Kumarakom'],
  29499,
  4.84,
  198,
  '3 Nights / 4 Days',
  'Beach & Leisure',
  'backwater',
  true,
  'Hills first, then overnight premium houseboat on Vembanad backwaters. Classic Kerala twin experience.',
  ['2N Munnar + 1N deluxe houseboat', 'Shikara / canoe village glimpse', 'All meals on boat night', 'AC transfers', 'Welcome drink on boat'],
  [
    { t: 'Munnar', d: 'Arrive hills, light sightseeing.' },
    { t: 'Munnar full', d: 'Tea hills day before drive to Alleppey.' },
    { t: 'Houseboat', d: 'Board by noon, cruise, overnight on water.' },
    { t: 'Disembark', d: 'Breakfast on boat, checkout, Cochin drop.' },
  ],
  ['3N total', 'Breakfast at hotel + boat meals', 'Private transfers', 'Houseboat charter'],
  ['Premium imported drinks', 'Tips to boat crew', 'Ayurveda spa']
);

T(
  17,
  'Kochi Heritage to Munnar Hills',
  'Kochi, Kerala',
  'Kerala',
  ['Kochi', 'Cochin', 'Fort Kochi', 'Munnar'],
  13299,
  4.71,
  156,
  '3 Days / 2 Nights',
  'Heritage',
  'kerala',
  false,
  'Chinese fishing nets, Dutch palace quick slot, then climb to Munnar for tea vistas. Culture-to-climate contrast in three days.',
  ['Fort Kochi walking slice', 'Drive to Munnar', 'Tea estate photo stops', 'Mattupetty half-day', 'Boutique stays'],
  [
    { t: 'Kochi', d: 'City heritage morning, afternoon drive Munnar.' },
    { t: 'Munnar', d: 'Sightseeing loop.' },
    { t: 'Exit', d: 'Drive Cochin airport.' },
  ],
  ['2N stay', 'Breakfast', 'SUV', 'Toll parking'],
  ['Monument fees Kochi', 'Meals', 'Guide']
);

// Maharashtra
T(
  18,
  'Ajanta & Ellora UNESCO Heritage Circuit',
  'Aurangabad, Maharashtra',
  'Maharashtra',
  ['Ajanta', 'Ellora', 'Aurangabad', 'UNESCO', 'Grishneshwar'],
  22999,
  4.77,
  143,
  '3 Nights / 4 Days',
  'Heritage',
  'ajanta',
  true,
  'Rock-cut Buddhist & Hindu masterpieces with expert storytelling, Daulatabad fort viewpoint, and comfortable Aurangabad base.',
  ['Ajanta caves guided', 'Ellora Kailasa temple', 'Daulatabad fort photo stop', 'Bibi Ka Maqbara visit', 'AC road package'],
  [
    { t: 'Arrive Aurangabad', d: 'Check-in, local city slice.' },
    { t: 'Ajanta', d: 'Full day cave complex with lunch break.' },
    { t: 'Ellora', d: 'Full day Ellora + Grishneshwar Jyotirling.' },
    { t: 'Departure', d: 'Checkout, airport drop.' },
  ],
  ['3N CP', 'Private car', 'Guide Day 2-3', 'Monument entries'],
  ['Still camera fees if any', 'Meals beyond breakfast', 'Flights']
);

T(
  19,
  'Lonavala & Khandala Monsoon Mist',
  'Lonavala, Maharashtra',
  'Maharashtra',
  ['Lonavala', 'Khandala', 'Pune', 'Mumbai', 'Tiger Point'],
  10899,
  4.6,
  311,
  '2 Nights / 3 Days',
  'Hill Station',
  'lonavala',
  false,
  'Tiger Point, Bhushi dam splash (monsoon), chikki tasting, and easy Pune/Mumbai access hill break.',
  ['Tiger & Lion viewpoints', 'Karla / Bhaja optional', 'Chikki & fudge factory stop', 'Valley resort stay', 'Mumbai/Pune pickup'],
  [
    { t: 'Drive up', d: 'Pick Mumbai or Pune, check-in, sunset point.' },
    { t: 'Sights', d: 'Viewpoints, dam, local food trail.' },
    { t: 'Return', d: 'Checkout, drop.' },
  ],
  ['2N CP', 'Private cab'],
  ['Cave entry tickets', 'Meals', 'Insurance']
);

T(
  20,
  'Mumbai – Alibaug Coastal Short Break',
  'Mumbai, Maharashtra',
  'Maharashtra',
  ['Mumbai', 'Alibaug', 'Kashid', 'Gateway of India', 'Konkan'],
  11699,
  4.58,
  189,
  '2 Nights / 3 Days',
  'Beach & Leisure',
  'mumbai',
  false,
  'Ferry or road to Alibaug beaches, Kolaba fort sea-walk, and quiet Kashid option. City-to-sand in hours.',
  ['Gateway ferry experience optional', 'Alibaug beaches', 'Kolaba fort', 'Coastal cuisine stops', 'Beach resort night'],
  [
    { t: 'Mumbai–Alibaug', d: 'Transfer, beach evening.' },
    { t: 'Coastal loop', d: 'Kashid or Mandwa exploration.' },
    { t: 'Back', d: 'Checkout, return Mumbai.' },
  ],
  ['2N stay', 'Breakfast', 'AC transfers'],
  ['Ferry tickets', 'Water sports', 'Lunch dinner']
);

// Gujarat
T(
  21,
  'Ahmedabad – Statue of Unity Patriot Circuit',
  'Ahmedabad, Gujarat',
  'Gujarat',
  ['Ahmedabad', 'Statue of Unity', 'Kevadia', 'Gujarat', 'Narmada'],
  13999,
  4.73,
  224,
  '2 Nights / 3 Days',
  'Heritage',
  'statue',
  true,
  'Sabarmati Ashram touchpoint, modern Kevadia infrastructure, and Statue of Unity viewing gallery slot. Strong infrastructure roads.',
  ['Statue of Unity viewing', 'Valley of Flowers (seasonal)', 'Sardar Sarovar viewpoint', 'Ahmedabad old city optional', 'Comfort hotels'],
  [
    { t: 'Ahmedabad', d: 'Heritage morning, drive Kevadia.' },
    { t: 'Statue day', d: 'Gallery, museum cluster, laser show optional.' },
    { t: 'Return', d: 'Drive Ahmedabad, drop airport.' },
  ],
  ['2N CP', 'Private AC car', 'SOU entry tickets pre-blocked'],
  ['Gallery upgrade if separate', 'Meals', 'Personal audio guides app']
);

T(
  22,
  'Dwarka – Somnath Krishna Coast Pilgrimage',
  'Dwarka, Gujarat',
  'Gujarat',
  ['Dwarka', 'Somnath', 'Porbandar', 'Bet Dwarka', 'Gujarat'],
  27999,
  4.81,
  167,
  '3 Nights / 4 Days',
  'Spiritual',
  'guj',
  true,
  'Bet Dwarka boat, Dwarkadhish darshan, Somnath Jyotirling sunset aarti, and Porbandar birthplace slice.',
  ['Dwarkadhish temple', 'Bet Dwarka ferry', 'Somnath aarti', 'Porbandar Kirti Mandir', 'Coastal highway private car'],
  [
    { t: 'Jamnagar–Dwarka', d: 'Arrive region, Dwarka evening aarti.' },
    { t: 'Bet Dwarka', d: 'Boat island, afternoon drive Somnath.' },
    { t: 'Somnath depth', d: 'Temple rituals, Triveni Sangam, beach walk.' },
    { t: 'Exit via Porbandar', d: 'Short city, drop airport.' },
  ],
  ['3N stay', 'Breakfast', 'AC car', 'Boat tickets Bet Dwarka'],
  ['Special darshan passes', 'Lunch dinner', 'Tips']
);

T(
  23,
  'Rann of Kutch White Desert Short',
  'Bhuj, Gujarat',
  'Gujarat',
  ['Kutch', 'Bhuj', 'Dhordo', 'White Rann', 'Gujarat'],
  19999,
  4.69,
  134,
  '3 Days / 2 Nights',
  'Wildlife & Desert',
  'kutch',
  false,
  'Full moon or general white desert sunset, Bhuj craft villages, and Hodka / Dhordo tent stay style (property category as chosen).',
  ['Great Rann sunset', 'Kalo Dungar viewpoint', 'Bhujodi weaving', 'Smritivan visit optional', 'Tented resort experience'],
  [
    { t: 'Bhuj', d: 'Arrive, craft villages.' },
    { t: 'Rann day', d: 'White desert, cultural evening.' },
    { t: 'Departure', d: 'Checkout, Bhuj airport.' },
  ],
  ['2N stay', 'Breakfast', 'Private SUV', 'Rann permits coordination'],
  ['Festival surcharges', 'Camel cart', 'Meals']
);

// Karnataka
T(
  24,
  'Bangalore – Mysore Culture Express',
  'Mysuru, Karnataka',
  'Karnataka',
  ['Bangalore', 'Bengaluru', 'Mysore', 'Mysuru', 'Srirangapatna', 'Chamundi'],
  15999,
  4.76,
  289,
  '2 Nights / 3 Days',
  'Heritage',
  'coorg2',
  true,
  'Mysore Palace lights Sunday (if applicable), Chamundi Hill, and Srirangapatna history bite. Great first Karnataka loop.',
  ['Mysore Palace', 'Chamundeshwari temple', 'Brindavan Gardens evening', 'Srirangapatna walk', 'Bangalore-Mysore sedan'],
  [
    { t: 'Drive Mysore', d: 'Pick BLR, drive, palace evening.' },
    { t: 'Mysore depth', d: 'Chamundi, city food trail, gardens.' },
    { t: 'Return BLR', d: 'Checkout, drop airport.' },
  ],
  ['2N CP', 'Private car', 'Monument entries'],
  ['Lunch dinner', 'Palace photography fee', 'Tips']
);

T(
  25,
  'Hampi Heritage & Boulder Landscape',
  'Hampi, Karnataka',
  'Karnataka',
  ['Hampi', 'Hosapete', 'Vijayanagara', 'UNESCO', 'Tungabhadra'],
  21999,
  4.82,
  176,
  '3 Nights / 4 Days',
  'Heritage',
  'hampi',
  true,
  'Virupaksha, Vittala chariot, sunset Hemakuta, and coracle ride slot. Archaeological wonder with relaxed evenings.',
  ['Core UNESCO core zone', 'Vittala temple & stone chariot', 'Hemakuta sunset', 'Coracle on Tungabhadra', 'Boulder resort stay'],
  [
    { t: 'Hubli–Hampi', d: 'Transfer, sunset hill.' },
    { t: 'Sacred centre', d: 'Virupaksha, river ghats, local lunch.' },
    { t: 'Royal Enclosure', d: 'Palace ruins, Lotus Mahal, museum.' },
    { t: 'Departure', d: 'Checkout, Hubli/Bellary airport drop.' },
  ],
  ['3N stay', 'Breakfast', 'AC car', 'Monument tickets'],
  ['Guide full day add-on', 'Meals', 'Bicycle hire']
);

T(
  26,
  'Coorg Coffee & Waterfalls',
  'Madikeri, Karnataka',
  'Karnataka',
  ['Coorg', 'Kodagu', 'Madikeri', 'Abbey Falls', 'Karnataka'],
  17499,
  4.74,
  201,
  '2 Nights / 3 Days',
  'Hill Station',
  'coorg',
  false,
  'Coffee estate walk, Abbey Falls mist, Raja Seat sunset, and Pandi curry meal experience.',
  ['Coffee plantation tour', 'Abbey Falls', 'Raja Seat', 'Dubare elephant camp optional', 'Homestay / resort'],
  [
    { t: 'Drive Coorg', d: 'Pick Mysore/Mangalore, check-in.' },
    { t: 'Waterfalls & estate', d: 'Full day nature loop.' },
    { t: 'Exit', d: 'Checkout, transfer.' },
  ],
  ['2N CP', 'Private cab'],
  ['Elephant camp tickets', 'Meals', 'River rafting']
);

// Goa
T(
  27,
  'North Goa Beaches & Nightlife',
  'North Goa, Goa',
  'Goa',
  ['North Goa', 'Baga', 'Calangute', 'Candolim', 'Anjuna', 'Goa'],
  14299,
  4.65,
  402,
  '2 Nights / 3 Days',
  'Beach & Leisure',
  'goa',
  true,
  'Baga-Calangute strip, Fort Aguada view, and Anjuna flea market (day). Party optional — we focus on safe transfers.',
  ['Calangute–Baga beach time', 'Fort Aguada', 'Chapora fort view optional', 'Sunset cruise optional add-on', 'North Goa resort'],
  [
    { t: 'Arrive', d: 'Pick Dabolim/MOPA, check-in, beach evening.' },
    { t: 'Explore', d: 'North beaches & fort loop.' },
    { t: 'Fly out', d: 'Leisure, airport drop.' },
  ],
  ['2N CP', 'Private AC', 'Airport transfers'],
  ['Cruise tickets', 'Club entries', 'Water sports', 'Meals']
);

T(
  28,
  'South Goa Quiet Luxury',
  'South Goa, Goa',
  'Goa',
  ['South Goa', 'Colva', 'Palolem', 'Agonda', 'Goa'],
  17999,
  4.7,
  256,
  '3 Nights / 4 Days',
  'Beach & Leisure',
  'goa',
  false,
  'Colva–Benaulim calm sands, Palolem day trip option, spice plantation short tour. Couples-first pacing.',
  ['South Goa resort stay', 'Colva beach', 'Palolem day (long drive)', 'Spice farm with lunch', 'Sunset quieter coves'],
  [
    { t: 'Arrival', d: 'Transfer, beach sunset.' },
    { t: 'Palolem', d: 'Full day south exploration.' },
    { t: 'Plantation', d: 'Spice tour, Ayurveda optional.' },
    { t: 'Departure', d: 'Checkout, drop.' },
  ],
  ['3N CP', 'Car', 'One spice plantation lunch'],
  ['Palolem long drive fuel surcharge if applicable', 'Tips']
);

T(
  29,
  'Goa Leisure + Dudhsagar Adventure',
  'Goa, India',
  'Goa',
  ['Dudhsagar', 'Mollem', 'Panaji', 'Goa'],
  22899,
  4.68,
  167,
  '3 Nights / 4 Days',
  'Adventure',
  'goa',
  false,
  'Jeep safari slot to Dudhsagar Falls (seasonal), water sports package at Calangute, and Old Goa churches half-day.',
  ['Dudhsagar jeep safari coordination', 'Water sports combo (parasail/banana 2 picks)', 'Basilica of Bom Jesus', 'Fontainhas Latin Quarter', '3N central Goa'],
  [
    { t: 'Beach & sports', d: 'Arrive, afternoon water sports.' },
    { t: 'Dudhsagar', d: 'Early jeep convoy, waterfall time, return tired & happy.' },
    { t: 'Heritage', d: 'Old Goa churches & Panjim walk.' },
    { t: 'Departure', d: 'Checkout.' },
  ],
  ['3N CP', 'SUV', 'Jeep safari seat', 'Sports combo voucher'],
  ['Jeep park fees', 'Lifejacket loss', 'Meals']
);

// Sikkim
T(
  30,
  'Gangtok Capital Highlights',
  'Gangtok, Sikkim',
  'Sikkim',
  ['Gangtok', 'Sikkim', 'MG Marg', 'Rumtek'],
  19999,
  4.72,
  145,
  '2 Nights / 3 Days',
  'Hill Station',
  'sikkim',
  true,
  'MG Marg evenings, Rumtek monastery day, and local momo trail. Permits handled for Indian nationals standard route.',
  ['MG Marg pedestrian zone', 'Rumtek monastery', 'Ganesh Tok viewpoint', 'Flower exhibition (seasonal)', 'Permit assistance'],
  [
    { t: 'Bagdogra–Gangtok', d: '4–5h drive, check-in, MG Marg.' },
    { t: 'Monastery day', d: 'Rumtek + viewpoints.' },
    { t: 'Departure', d: 'Drive airport.' },
  ],
  ['2N CP', 'Private Innova', 'Sikkim inner line support'],
  ['Permit fees if any', 'Meals', 'Personal warm gear']
);

T(
  31,
  'Gangtok – Tsomgo Lake & Baba Mandir',
  'Gangtok, Sikkim',
  'Sikkim',
  ['Tsomgo', 'Changu', 'Nathula', 'Baba Harbhajan', 'Gangtok'],
  25299,
  4.8,
  198,
  '3 Nights / 4 Days',
  'Adventure',
  'sikkim',
  true,
  'High-altitude lake day with yak photo ops (ethical distance), snow walls winter, and permit logistics included for shared route.',
  ['Tsomgo Lake day trip', 'Baba Mandir', 'Yak ride optional pay', 'High-altitude snacks carry tip briefing', 'Warm hotel nights'],
  [
    { t: 'Arrive Gangtok', d: 'Drive up, acclimatise, MG Marg.' },
    { t: 'Tsomgo', d: 'Full day lake & mandir, early start.' },
    { t: 'Buffer / local', d: 'Handicraft or rest day for weather buffer.' },
    { t: 'Exit', d: 'Drive Bagdogra.' },
  ],
  ['3N CP', 'SUV', 'Lake day permits & vehicle'],
  ['Nathula if open (extra permit fee)', 'Yak ride', 'Oxygen canister personal']
);

T(
  32,
  'Gangtok – Nathula Border Experience',
  'Gangtok, Sikkim',
  'Sikkim',
  ['Nathula', 'Tsomgo', 'Indo-China border', 'Gangtok'],
  31999,
  4.77,
  112,
  '3 Nights / 4 Days',
  'Adventure',
  'sikkim',
  false,
  'When army opens Nathula pass for tourists, we secure permits in advance window. Includes Tsomgo combo day.',
  ['Nathula attempt day (subject to army)', 'Tsomgo lake bundled', 'Permit paperwork support', 'Oxygen backup on vehicle', 'High nutrition meal tips'],
  [
    { t: 'Arrive', d: 'Gangtok settle.' },
    { t: 'Tsomgo', d: 'Acclimatisation lake day.' },
    { t: 'Nathula', d: 'Early convoy, border viewpoint, return.' },
    { t: 'Departure', d: 'Fly out Bagdogra.' },
  ],
  ['3N CP', 'SUV', 'Permit facilitation'],
  ['Nathula permit fee variable', 'Army closure no refund policy applies', 'Meals']
);

// Arunachal
T(
  33,
  'Tawang Monastery & High Himalayas',
  'Tawang, Arunachal Pradesh',
  'Arunachal Pradesh',
  ['Tawang', 'Bomdila', 'Dirang', 'Sela Pass', 'Arunachal'],
  46999,
  4.86,
  89,
  '3 Nights / 4 Days',
  'Adventure',
  'dharam',
  true,
  'Sela Pass crossing, Tawang monastery depth, and war memorial. For travellers okay with long mountain drives.',
  ['Tawang Monastery', 'Sela Pass snow photos', 'Jaswant Garh memorial', 'Craft emporium', 'Inner Line Permit support'],
  [
    { t: 'Guwahati–Dirang', d: 'Flight connect, long drive split style (custom per actual road plan).' },
    { t: 'Dirang–Tawang', d: 'Sela crossing, reach Tawang evening.' },
    { t: 'Tawang', d: 'Monastery, memorial, local valley.' },
    { t: 'Exit', d: 'Drive back to Tezpur/Bomdila for flight.' },
  ],
  ['Stays as per circuit', 'Breakfast', '4WD / SUV', 'ILP assistance'],
  ['Flights Guwahati', 'Meals', 'Army area restrictions', 'Altitude risk disclaimer']
);

T(
  34,
  'Bomdila – Dirang Valley Soft Adventure',
  'Bomdila, Arunachal Pradesh',
  'Arunachal Pradesh',
  ['Bomdila', 'Dirang', 'Sangti Valley', 'Arunachal'],
  28999,
  4.7,
  67,
  '2 Nights / 3 Days',
  'Hill Station',
  'sikkim',
  false,
  'Monastery views in Bomdila, Sangti Valley orchards, hot spring Dirang. Lower altitude than Tawang full push.',
  ['Bomdila monastery', 'Dirang Dzong', 'Sangti Valley walk', 'Apple orchards seasonal', 'Homestay mix option'],
  [
    { t: 'Tezpur–Bomdila', d: 'Drive, monastery sunset.' },
    { t: 'Dirang', d: 'Valley & hot spring.' },
    { t: 'Return', d: 'Drive Tezpur.' },
  ],
  ['2N', 'Breakfast', 'SUV', 'ILP'],
  ['Meals', 'Tips', 'Flight']
);

T(
  35,
  'Itanagar Capital & Tribal Museum',
  'Itanagar, Arunachal Pradesh',
  'Arunachal Pradesh',
  ['Itanagar', 'Naharlagun', 'Ziro optional', 'Arunachal'],
  12499,
  4.55,
  43,
  '2 Days / 1 Night',
  'Heritage',
  'sikkim',
  false,
  'Ganga Lake (Gyakar Sinyi), craft centre, and state museum for tribal culture immersion without high passes.',
  ['Jawaharlal Nehru State Museum', 'Ganga Lake', 'Buddhist temple Itanagar', 'Local market', 'Quick permit city'],
  [
    { t: 'Arrive', d: 'Dibrugarh or Lilabari connect, drive Itanagar.' },
    { t: 'City & exit', d: 'Sightseeing, evening drop airport.' },
  ],
  ['1N stay', 'Breakfast', 'Car'],
  ['Meals', 'Ziro extension extra days']
);

// Punjab
T(
  36,
  'Amritsar Golden Temple Weekend',
  'Amritsar, Punjab',
  'Punjab',
  ['Amritsar', 'Punjab', 'Golden Temple', 'Harmandir Sahib', 'Wagah'],
  11999,
  4.88,
  502,
  '2 Nights / 3 Days',
  'Spiritual',
  'amrit',
  true,
  'Harmandir Sahib pre-dawn peace, Jallianwala Bagh, partition museum emotion, and Wagah ceremony energy.',
  ['Golden Temple visit twice (day & night)', 'Jallianwala Bagh', 'Partition Museum', 'Wagah border ceremony', 'Amritsari kulcha trail'],
  [
    { t: 'Arrive', d: 'Station/airport pick, evening temple.' },
    { t: 'Heritage', d: 'Partition museum, Bagh, local food.' },
    { t: 'Wagah & exit', d: 'Afternoon ceremony, drop.' },
  ],
  ['2N near Golden Temple', 'Breakfast', 'AC car', 'Wagah parking'],
  ['Temple VIP gate if any', 'Meals', 'Personal offerings']
);

T(
  37,
  'Amritsar Patriot Express — Wagah & Jallianwala',
  'Amritsar, Punjab',
  'Punjab',
  ['Amritsar', 'Wagah', 'Jallianwala', 'Attari'],
  7999,
  4.62,
  156,
  '2 Days / 1 Night',
  'Spiritual',
  'amrit',
  false,
  'Ultra-short: one full Wagah + temple evening + morning Bagh. For tight business travellers.',
  ['Wagah ceremony', 'Golden Temple night', 'Jallianwala Bagh morning', 'Local guide app links', '1N hotel'],
  [
    { t: 'Day 1', d: 'Arrive noon, Wagah, night golden temple.' },
    { t: 'Day 2', d: 'Morning sites, checkout fly.' },
  ],
  ['1N', 'Breakfast', 'Car'],
  ['Lunch dinner', 'Museum audio']
);

T(
  38,
  'Amritsar – Chandigarh Culture Combo',
  'Amritsar, Punjab',
  'Punjab',
  ['Amritsar', 'Chandigarh', 'Rock Garden', 'Sukhna Lake', 'Punjab'],
  18299,
  4.75,
  134,
  '3 Nights / 4 Days',
  'Heritage',
  'golden',
  false,
  'Spiritual start in Amritsar, then planned city design of Chandigarh: Rock Garden, Sukhna Lake, and Capitol complex photo from outside zones allowed.',
  ['Golden Temple + Wagah', 'Rock Garden', 'Sukhna Lake', 'Capitol complex exterior', 'Highway comfortable transfers'],
  [
    { t: 'Amritsar', d: '2 days spiritual heritage block.' },
    { t: 'Drive Chandigarh', d: 'Grand trunk road comfort stops.' },
    { t: 'Chandigarh', d: 'Rock garden & lake.' },
    { t: 'Exit', d: 'Airport drop CHD.' },
  ],
  ['3N CP', 'Intercity car', 'Monument entries listed'],
  ['Capitol interior tours if banned', 'Meals']
);

const destinations = [
  { id: 'd1', name: 'Rajasthan', toursRegion: 'Rajasthan', image: img(I.jaipur, 800), tourCount: 3 },
  { id: 'd2', name: 'Uttarakhand', toursRegion: 'Uttarakhand', image: img(I.mussoorie, 800), tourCount: 3 },
  { id: 'd3', name: 'Himachal Pradesh', toursRegion: 'Himachal Pradesh', image: img(I.himal, 800), tourCount: 3 },
  { id: 'd4', name: 'Uttar Pradesh', toursRegion: 'Uttar Pradesh', image: img(I.taj, 800), tourCount: 3 },
  { id: 'd5', name: 'Delhi & Golden Triangle', toursRegion: 'Delhi NCR', image: img(I.delhi, 800), tourCount: 2 },
  { id: 'd6', name: 'Kerala', toursRegion: 'Kerala', image: img(I.backwater, 800), tourCount: 3 },
  { id: 'd7', name: 'Maharashtra', toursRegion: 'Maharashtra', image: img(I.mumbai, 800), tourCount: 3 },
  { id: 'd8', name: 'Gujarat', toursRegion: 'Gujarat', image: img(I.statue, 800), tourCount: 3 },
  { id: 'd9', name: 'Karnataka', toursRegion: 'Karnataka', image: img(I.hampi, 800), tourCount: 3 },
  { id: 'd10', name: 'Goa', toursRegion: 'Goa', image: img(I.goa, 800), tourCount: 3 },
  { id: 'd11', name: 'Sikkim', toursRegion: 'Sikkim', image: img(I.sikkim, 800), tourCount: 3 },
  { id: 'd12', name: 'Arunachal Pradesh', toursRegion: 'Arunachal Pradesh', image: img(I.himal, 800), tourCount: 3 },
  { id: 'd13', name: 'Punjab', toursRegion: 'Punjab', image: img(I.amrit, 800), tourCount: 3 },
];

const header = `import type { Destination, Tour } from '../types';

`;

writeFileSync(
  out,
  `${header}export const tours = ${JSON.stringify(tours, null, 2)} as Tour[];
export const destinations = ${JSON.stringify(destinations, null, 2)} as Destination[];
`
);

console.log('Wrote', out, 'tours:', tours.length);
