import type { Destination, Tour } from '../types';

export const tours = [
  {
    "id": "1",
    "title": "Jaipur City Tour — Royal Weekend",
    "location": "Jaipur, Rajasthan",
    "searchRegion": "Rajasthan",
    "searchPlaces": [
      "Jaipur",
      "Rajasthan",
      "Pink City",
      "Amer",
      "Amber Fort",
      "Hawa Mahal",
      "City Palace"
    ],
    "price": 12499,
    "rating": 4.8,
    "reviews": 342,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "A compact royal weekend covering Amber Fort, City Palace, and Hawa Mahal with curated walks through the Pink City bazaars. Ideal for first-time visitors who want heritage, photo stops, and authentic Rajasthani flavours without a rushed pace.",
    "highlights": [
      "Amber (Amer) Fort with guided storytelling",
      "City Palace & museum highlights",
      "Hawa Mahal photo walk & old city lanes",
      "Johari Bazaar handicrafts time",
      "Comfortable hotel near city centre"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Pink City",
        "description": "Airport or station pick-up, hotel check-in, evening stroll around local markets."
      },
      {
        "day": 2,
        "title": "Forts & palaces",
        "description": "Full day: Amer Fort, City Palace complex, Hawa Mahal viewpoint, optional Chokhi Dhani dinner."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Morning Albert Hall photo stop or leisure, checkout and transfer."
      }
    ],
    "inclusions": [
      "2 nights hotel (twin sharing, CP)",
      "Private AC vehicle for sightseeing",
      "English / Hindi speaking guide on Day 2",
      "Monument entry fees as per itinerary",
      "All taxes on packaged services (GST)"
    ],
    "exclusions": [
      "Flights / trains",
      "Meals not mentioned",
      "Camera fees",
      "Personal expenses",
      "Travel insurance"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590496793910-449e7529482d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "2",
    "title": "Jaisalmer Desert & Fort Experience",
    "location": "Jaisalmer, Rajasthan",
    "searchRegion": "Rajasthan",
    "searchPlaces": [
      "Jaisalmer",
      "Rajasthan",
      "Thar",
      "Sam Sand Dunes",
      "Desert Safari"
    ],
    "price": 26499,
    "rating": 4.85,
    "reviews": 218,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1518638153377-983d6baebcf7?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Golden fort lanes, sunset on the Sam dunes, camel safari, and a night amid Thar rhythms. Includes heritage walk inside Sonar Quila and curated camp stay for a complete desert story.",
    "highlights": [
      "Jaisalmer Fort (Sonar Quila) heritage walk",
      "Camel safari & sunset at Sam Sand Dunes",
      "Traditional folk evening at desert camp",
      "Patwon Ki Haveli & Gadisar Lake",
      "Comfort camp / hotel combo nights"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Into the golden city",
        "description": "Drive or arrival in Jaisalmer, fort walk, sunset at Gadisar Lake."
      },
      {
        "day": 2,
        "title": "Dunes & culture",
        "description": "Morning havelis, afternoon transfer to dunes, camel ride, camp dinner & music."
      },
      {
        "day": 3,
        "title": "Village & leisure",
        "description": "Optional Kuldhara visit, leisure or jeep safari add-on, night in Jaisalmer."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout and transfer to airport / railhead."
      }
    ],
    "inclusions": [
      "3 nights stay (1 camp + 2 hotel or similar)",
      "AC vehicle for transfers & sightseeing",
      "Camel ride & camp dinner on dunes day",
      "Breakfast included throughout",
      "Driver allowance & parking"
    ],
    "exclusions": [
      "Lunch unless specified",
      "Jeep safari upgrade",
      "Tips",
      "Travel insurance"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1518638153377-983d6baebcf7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621235129643-fc0f15c71d62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582650843477-96a9289fffe7-96a9289fffe7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "3",
    "title": "Jaipur – Ajmer – Pushkar Spiritual Heritage",
    "location": "Jaipur, Rajasthan",
    "searchRegion": "Rajasthan",
    "searchPlaces": [
      "Ajmer",
      "Pushkar",
      "Jaipur",
      "Rajasthan",
      "Ana Sagar",
      "Brahma Temple"
    ],
    "price": 17299,
    "rating": 4.75,
    "reviews": 189,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": false,
    "description": "Blend Rajput forts with Ajmer Sharif serenity and Pushkar lake ghats. Designed for travellers who want spirituality, heritage, and short drives between three iconic towns.",
    "highlights": [
      "Ajmer Sharif dargah visit (etiquette briefing)",
      "Pushkar lake & Brahma temple circuit",
      "Jaipur fort / palace slot on arrival or exit day",
      "Road journeys in private AC car",
      "Hand-picked mid-range hotels"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Jaipur start",
        "description": "Arrive Jaipur, half-day city highlights or leisure."
      },
      {
        "day": 2,
        "title": "Ajmer & Pushkar",
        "description": "Day trip to Ajmer Sharif, continue to Pushkar ghats & temple walk."
      },
      {
        "day": 3,
        "title": "Pushkar depth",
        "description": "Morning aarti, café time, optional camel cart; drive back toward Jaipur."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Buffer shopping / Amer visit, drop at airport or station."
      }
    ],
    "inclusions": [
      "3 nights twin-share hotels",
      "Breakfast daily",
      "Private AC car with hill-experienced driver",
      "Parking & tolls on route",
      "On-call tour manager (phone)"
    ],
    "exclusions": [
      "Lunch & dinner",
      "Donations at shrines",
      "Personal porters",
      "Flights"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1582650843477-96a9289fffe7-96a9289fffe7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "4",
    "title": "Nainital Weekend — Lakes & Mallital",
    "location": "Nainital, Uttarakhand",
    "searchRegion": "Uttarakhand",
    "searchPlaces": [
      "Nainital",
      "Uttarakhand",
      "Naini Lake",
      "Mall Road",
      "Bhimtal"
    ],
    "price": 12899,
    "rating": 4.7,
    "reviews": 276,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": true,
    "description": "Boating on Naini Lake, snow viewpoints (seasonal), and easy walks on the Mall Road. Perfect short escape from Delhi NCR heat.",
    "highlights": [
      "Naini Lake boat ride",
      "Snow View / ropeway (weather)",
      "Eco Cave Gardens",
      "Tibetan Market evening",
      "Lake-view hotel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive up & lake",
        "description": "Scenic drive, check-in, evening boat & Mall Road walk."
      },
      {
        "day": 2,
        "title": "Nainital circuit",
        "description": "Viewpoints, caves, optional Bhimtal half-day."
      },
      {
        "day": 3,
        "title": "Checkout",
        "description": "Morning tea gardens photo or leisure, departure."
      }
    ],
    "inclusions": [
      "2N stay CP",
      "Private cab from Kathgodam/Haldwani",
      "Boating tickets",
      "Driver charges"
    ],
    "exclusions": [
      "Meals beyond breakfast",
      "Ropeway if closed",
      "Personal gear",
      "Insurance"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621545994-90e25c25d5ca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "5",
    "title": "Mussoorie Hill Escape",
    "location": "Mussoorie, Uttarakhand",
    "searchRegion": "Uttarakhand",
    "searchPlaces": [
      "Mussoorie",
      "Dehradun",
      "Kempty Falls",
      "Gun Hill",
      "Mall Road"
    ],
    "price": 13599,
    "rating": 4.72,
    "reviews": 201,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": false,
    "description": "Classic Mall Road evenings, Kempty Falls splash, and Gun Hill views. Family-friendly pacing with optional Lal Tibba sunrise.",
    "highlights": [
      "Kempty Falls",
      "Gun Hill cable (optional)",
      "Company Garden",
      "Camel Back Road walk",
      "Central Mussoorie stay"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Queen of hills",
        "description": "Pick-up Dehradun, climb to Mussoorie, Mall Road evening."
      },
      {
        "day": 2,
        "title": "Waterfalls & views",
        "description": "Kempty, Gun Hill, local cafés."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Optional Lal Tibba, drive down."
      }
    ],
    "inclusions": [
      "2N CP",
      "AC cab",
      "Parking"
    ],
    "exclusions": [
      "Cable tickets",
      "Lunch dinner",
      "Tips"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "6",
    "title": "Haridwar & Rishikesh — Ganga Aarti & Rafting",
    "location": "Haridwar, Uttarakhand",
    "searchRegion": "Uttarakhand",
    "searchPlaces": [
      "Haridwar",
      "Rishikesh",
      "Ganga",
      "Laxman Jhula",
      "rafting"
    ],
    "price": 10499,
    "rating": 4.8,
    "reviews": 412,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "category": "Spiritual",
    "isPopular": true,
    "description": "Witness Har Ki Pauri aarti, explore Rishikesh ghats, and add gentle rafting (seasonal) on the upper Ganges. Spiritual + soft adventure in one short break.",
    "highlights": [
      "Har Ki Pauri evening aarti",
      "Mansa Devi ropeway (optional)",
      "Rishikesh Ram Jhula walk",
      "Rafting stretch Marine / Brahmapuri grade",
      "Yoga demo slot optional"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar",
        "description": "Arrive, ghats orientation, grand aarti experience."
      },
      {
        "day": 2,
        "title": "Rishikesh day",
        "description": "Rafting session, ashram lane walks, Beatles ashram optional."
      },
      {
        "day": 3,
        "title": "Return",
        "description": "Morning dip / temple, checkout."
      }
    ],
    "inclusions": [
      "2N stay",
      "Breakfast",
      "Rafting with gear & instructor",
      "Transfers Haridwar-Rishikesh"
    ],
    "exclusions": [
      "Ashram donations",
      "Ropeway tickets",
      "Meals except breakfast"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "7",
    "title": "Shimla & Kufri Short Break",
    "location": "Shimla, Himachal Pradesh",
    "searchRegion": "Himachal Pradesh",
    "searchPlaces": [
      "Shimla",
      "Kufri",
      "Mall Road",
      "The Ridge",
      "HP"
    ],
    "price": 11899,
    "rating": 4.78,
    "reviews": 298,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": true,
    "description": "Ridge walks, toy-train photo stops, and Kufri snow-line fun (seasonal). Designed as a quick mountain breather from Chandigarh.",
    "highlights": [
      "The Ridge & Mall Road",
      "Kufri fun park / snow point",
      "Jakhu Temple option",
      "Viceregal Lodge drive-by",
      "Shimla heritage hotel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Chandigarh–Shimla",
        "description": "Pickup, scenic drive, Mall Road evening."
      },
      {
        "day": 2,
        "title": "Kufri day",
        "description": "Full day Kufri, local cafés, Ridge sunset."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Checkout, drive to Chandigarh."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private Innova/similar",
      "Driver allowance"
    ],
    "exclusions": [
      "Monument entries",
      "Horse rides at Kufri",
      "Meals beyond breakfast"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "8",
    "title": "Manali Snow & Solang Adventure",
    "location": "Manali, Himachal Pradesh",
    "searchRegion": "Himachal Pradesh",
    "searchPlaces": [
      "Manali",
      "Solang",
      "Rohtang",
      "Kullu",
      "Old Manali"
    ],
    "price": 19299,
    "rating": 4.82,
    "reviews": 356,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1605649238038-3482701d898c?auto=format&fit=crop&w=1200&q=80",
    "category": "Adventure",
    "isPopular": true,
    "description": "Solang activities, Hadimba Devi temple, Old Manali cafés, and buffer day for snow or café-hopping. Balanced for couples and small groups.",
    "highlights": [
      "Solang Valley day",
      "Hadimba & Vashisht hot springs",
      "River-side walks",
      "Naggar half-day option",
      "3N Manali stay"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Into Manali",
        "description": "Drive from Chandigarh/Delhi route, check-in, Mall walk."
      },
      {
        "day": 2,
        "title": "Solang & culture",
        "description": "Adventure activities hub, Hadimba forest temple."
      },
      {
        "day": 3,
        "title": "Leisure / snow",
        "description": "Buffer for Rohtang sector or local hikes."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout, drive back."
      }
    ],
    "inclusions": [
      "3N CP",
      "AC vehicle",
      "Solang parking coordination"
    ],
    "exclusions": [
      "Activity tickets",
      "Rohtang permit if applicable",
      "Lunch dinner"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "9",
    "title": "Dharamshala & McLeodganj Tibetan Trails",
    "location": "Dharamshala, Himachal Pradesh",
    "searchRegion": "Himachal Pradesh",
    "searchPlaces": [
      "Dharamshala",
      "McLeodganj",
      "Kangra",
      "Dalai Lama"
    ],
    "price": 16899,
    "rating": 4.76,
    "reviews": 167,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": false,
    "description": "Tsuglagkhang complex, McLeod markets, Bhagsu waterfall, and Kangra valley views. Calm pace with monastery etiquette guidance.",
    "highlights": [
      "Dalai Lama temple complex",
      "McLeodganj market & cafés",
      "Bhagsu Nag waterfall trek",
      "Dharamkot viewpoint optional",
      "Valley-view hotel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival McLeod",
        "description": "Pick Pathankot/Chandigarh, check-in, evening market."
      },
      {
        "day": 2,
        "title": "Monastery & nature",
        "description": "Temple circuit, Bhagsu trek light."
      },
      {
        "day": 3,
        "title": "Kangra fort or tea gardens",
        "description": "Half-day heritage, rest café time."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout, transfer."
      }
    ],
    "inclusions": [
      "3N CP",
      "Private cab full circuit"
    ],
    "exclusions": [
      "Monastery donations",
      "Personal porters",
      "Meals beyond breakfast"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "10",
    "title": "Agra Taj Mahal Express",
    "location": "Agra, Uttar Pradesh",
    "searchRegion": "Uttar Pradesh",
    "searchPlaces": [
      "Agra",
      "Taj Mahal",
      "UP",
      "Fatehpur Sikri",
      "Yamuna"
    ],
    "price": 7499,
    "rating": 4.9,
    "reviews": 892,
    "duration": "1 Night / 2 Days",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Sunrise Taj, Agra Fort, and optional Fatehpur Sikri extension. Designed for Delhi weekenders who want maximum monument time.",
    "highlights": [
      "Taj Mahal sunrise slot",
      "Agra Fort guided tour",
      "Mehtab Bagh viewpoint",
      "Marble inlay demo",
      "Express hotel near Taj"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi–Agra",
        "description": "Drive or train connect, afternoon fort & sunset garden."
      },
      {
        "day": 2,
        "title": "Taj & return",
        "description": "Pre-dawn Taj, breakfast, Fatehpur optional, drop Delhi/NCR."
      }
    ],
    "inclusions": [
      "1N stay",
      "Breakfast",
      "AC car Delhi-Agra-Delhi",
      "Monument tickets"
    ],
    "exclusions": [
      "Lunch dinner",
      "Tips",
      "Train if chosen (ticket extra)"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "11",
    "title": "Agra – Mathura – Vrindavan Circuit",
    "location": "Agra, Uttar Pradesh",
    "searchRegion": "Uttar Pradesh",
    "searchPlaces": [
      "Mathura",
      "Vrindavan",
      "Agra",
      "Krishna",
      "Banke Bihari"
    ],
    "price": 14299,
    "rating": 4.74,
    "reviews": 234,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80",
    "category": "Spiritual",
    "isPopular": false,
    "description": "Taj heritage day plus twin Braj Krishna cities for temples, evening aarti lanes, and sweets tasting.",
    "highlights": [
      "Taj Mahal visit",
      "Mathura Krishna Janmasthan",
      "Vrindavan ghats & ISKCON",
      "Prem Mandir light show optional",
      "Private AC road moves"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Agra monuments",
        "description": "Arrive Agra, Taj & fort slot."
      },
      {
        "day": 2,
        "title": "Braj day",
        "description": "Mathura & Vrindavan temple circuit, evening aarti."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Local sweets, drive to Delhi/Agra station."
      }
    ],
    "inclusions": [
      "2N hotel",
      "Breakfast",
      "AC car",
      "Monument entries Taj+Agra Fort"
    ],
    "exclusions": [
      "Temple donations",
      "Meals",
      "Guide optional add-on"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "12",
    "title": "Varanasi Ghats & Temples Immersion",
    "location": "Varanasi, Uttar Pradesh",
    "searchRegion": "Uttar Pradesh",
    "searchPlaces": [
      "Varanasi",
      "Kashi",
      "Sarnath",
      "Ganga Aarti",
      "Dashashwamedh"
    ],
    "price": 14999,
    "rating": 4.83,
    "reviews": 445,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1561361513-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "category": "Spiritual",
    "isPopular": true,
    "description": "Sunrise boat, narrow galis, Sarnath Buddhist ruins, and main evening aarti. Respectful small-group pacing with boat safety briefing.",
    "highlights": [
      "Sunrise Ganga boat",
      "Dashashwamedh / Assi aarti",
      "Kashi Vishwanath corridor visit",
      "Sarnath museum & stupa",
      "Heritage haveli stay"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & aarti",
        "description": "Check-in, evening aarti by boat or ghat seating."
      },
      {
        "day": 2,
        "title": "Old Kashi",
        "description": "Sunrise boat, temple lanes, silk weaving demo."
      },
      {
        "day": 3,
        "title": "Sarnath & exit",
        "description": "Half-day Sarnath, departure."
      }
    ],
    "inclusions": [
      "2N stay",
      "Breakfast",
      "Boat rides as per plan",
      "AC airport transfers"
    ],
    "exclusions": [
      "Temple VIP passes if any",
      "Lunch dinner",
      "Personal rituals cost"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524499029940-778e28ee4650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "13",
    "title": "Golden Triangle Short — Delhi · Agra · Jaipur",
    "location": "Delhi, India",
    "searchRegion": "Delhi NCR",
    "searchPlaces": [
      "Delhi",
      "New Delhi",
      "Agra",
      "Jaipur",
      "Golden Triangle",
      "NCR",
      "Gurgaon",
      "Noida"
    ],
    "price": 32999,
    "rating": 4.81,
    "reviews": 512,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1587474260584-1281d429ca54?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Compressed classic triangle: Old Delhi pulse, Taj sunrise, and Jaipur Pink City snapshot. Fast-paced but organised for time-pressed travellers.",
    "highlights": [
      "Old Delhi heritage walk slot",
      "Taj Mahal",
      "Agra Fort",
      "Jaipur Amber & City Palace drive",
      "Private AC car entire circuit"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi stories",
        "description": "Arrival, half-day Old & New Delhi highlights."
      },
      {
        "day": 2,
        "title": "Agra",
        "description": "Drive Agra, Taj sunset or next-day sunrise planning."
      },
      {
        "day": 3,
        "title": "Jaipur",
        "description": "Forts & bazaars, cultural dinner optional."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Fly / train from Delhi or Jaipur as booked."
      }
    ],
    "inclusions": [
      "3N hotels (city-wise)",
      "Daily breakfast",
      "AC vehicle & tolls",
      "Monument combo tickets planned"
    ],
    "exclusions": [
      "Lunches dinners",
      "Domestic flights",
      "Tips",
      "Travel insurance"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "14",
    "title": "Delhi – Agra Quick Taj Weekend",
    "location": "Delhi, India",
    "searchRegion": "Delhi NCR",
    "searchPlaces": [
      "Delhi",
      "Agra",
      "Taj Mahal",
      "Yamuna Expressway",
      "NCR",
      "New Delhi"
    ],
    "price": 9499,
    "rating": 4.66,
    "reviews": 178,
    "duration": "2 Days / 1 Night",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": false,
    "description": "Yamuna Expressway comfort drive, Taj + Fort, and return same/next day. Lowest footprint triangle taste.",
    "highlights": [
      "Taj Mahal",
      "Agra Fort",
      "Expressway AC sedan",
      "1N Agra hotel",
      "Breakfast"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi–Agra",
        "description": "Morning pick, drive, afternoon monuments."
      },
      {
        "day": 2,
        "title": "Return",
        "description": "Optional sunrise Taj, breakfast, drive Delhi."
      }
    ],
    "inclusions": [
      "1N stay",
      "Breakfast",
      "Sedan",
      "Monument entries"
    ],
    "exclusions": [
      "Meals",
      "Tips",
      "Guide"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "15",
    "title": "Munnar Tea Gardens & Misty Hills",
    "location": "Munnar, Kerala",
    "searchRegion": "Kerala",
    "searchPlaces": [
      "Munnar",
      "Idukki",
      "Kochi",
      "Tea gardens",
      "Eravikulam"
    ],
    "price": 15299,
    "rating": 4.79,
    "reviews": 267,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": true,
    "description": "Plantation walks, Mattupetty dam views, and Eravikulam (seasonal) Nilgiri Tahr chance. Cool climate escape.",
    "highlights": [
      "Tea museum & factory insight",
      "Mattupetty / Echo Point",
      "Eravikulam subject to opening",
      "Spice garden short tour",
      "Resort overlooking valleys"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi–Munnar",
        "description": "Scenic drive, check-in, sunset viewpoint."
      },
      {
        "day": 2,
        "title": "Munnar sights",
        "description": "Full day tea & dam circuit."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Checkout, optional spice shopping."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private cab from Cochin",
      "Parking"
    ],
    "exclusions": [
      "Eravikulam tickets",
      "Lunch dinner",
      "Personal shopping"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547036965635-b743e66641c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621338520-20516fc469ec?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "16",
    "title": "Munnar – Alleppey Houseboat Combo",
    "location": "Munnar, Kerala",
    "searchRegion": "Kerala",
    "searchPlaces": [
      "Alleppey",
      "Alappuzha",
      "Backwaters",
      "Munnar",
      "Kumarakom"
    ],
    "price": 29499,
    "rating": 4.84,
    "reviews": 198,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    "category": "Beach & Leisure",
    "isPopular": true,
    "description": "Hills first, then overnight premium houseboat on Vembanad backwaters. Classic Kerala twin experience.",
    "highlights": [
      "2N Munnar + 1N deluxe houseboat",
      "Shikara / canoe village glimpse",
      "All meals on boat night",
      "AC transfers",
      "Welcome drink on boat"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Munnar",
        "description": "Arrive hills, light sightseeing."
      },
      {
        "day": 2,
        "title": "Munnar full",
        "description": "Tea hills day before drive to Alleppey."
      },
      {
        "day": 3,
        "title": "Houseboat",
        "description": "Board by noon, cruise, overnight on water."
      },
      {
        "day": 4,
        "title": "Disembark",
        "description": "Breakfast on boat, checkout, Cochin drop."
      }
    ],
    "inclusions": [
      "3N total",
      "Breakfast at hotel + boat meals",
      "Private transfers",
      "Houseboat charter"
    ],
    "exclusions": [
      "Premium imported drinks",
      "Tips to boat crew",
      "Ayurveda spa"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547036965635-b743e66641c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "17",
    "title": "Kochi Heritage to Munnar Hills",
    "location": "Kochi, Kerala",
    "searchRegion": "Kerala",
    "searchPlaces": [
      "Kochi",
      "Cochin",
      "Fort Kochi",
      "Munnar"
    ],
    "price": 13299,
    "rating": 4.71,
    "reviews": 156,
    "duration": "3 Days / 2 Nights",
    "image": "https://images.unsplash.com/photo-1593693411515-33369cf5e9e4?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": false,
    "description": "Chinese fishing nets, Dutch palace quick slot, then climb to Munnar for tea vistas. Culture-to-climate contrast in three days.",
    "highlights": [
      "Fort Kochi walking slice",
      "Drive to Munnar",
      "Tea estate photo stops",
      "Mattupetty half-day",
      "Boutique stays"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi",
        "description": "City heritage morning, afternoon drive Munnar."
      },
      {
        "day": 2,
        "title": "Munnar",
        "description": "Sightseeing loop."
      },
      {
        "day": 3,
        "title": "Exit",
        "description": "Drive Cochin airport."
      }
    ],
    "inclusions": [
      "2N stay",
      "Breakfast",
      "SUV",
      "Toll parking"
    ],
    "exclusions": [
      "Monument fees Kochi",
      "Meals",
      "Guide"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1593693411515-33369cf5e9e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459609-155fe4e52245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542397284385-601017642ad3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "18",
    "title": "Ajanta & Ellora UNESCO Heritage Circuit",
    "location": "Aurangabad, Maharashtra",
    "searchRegion": "Maharashtra",
    "searchPlaces": [
      "Ajanta",
      "Ellora",
      "Aurangabad",
      "UNESCO",
      "Grishneshwar"
    ],
    "price": 22999,
    "rating": 4.77,
    "reviews": 143,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1603201236596-eb1a98074906?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Rock-cut Buddhist & Hindu masterpieces with expert storytelling, Daulatabad fort viewpoint, and comfortable Aurangabad base.",
    "highlights": [
      "Ajanta caves guided",
      "Ellora Kailasa temple",
      "Daulatabad fort photo stop",
      "Bibi Ka Maqbara visit",
      "AC road package"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive Aurangabad",
        "description": "Check-in, local city slice."
      },
      {
        "day": 2,
        "title": "Ajanta",
        "description": "Full day cave complex with lunch break."
      },
      {
        "day": 3,
        "title": "Ellora",
        "description": "Full day Ellora + Grishneshwar Jyotirling."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout, airport drop."
      }
    ],
    "inclusions": [
      "3N CP",
      "Private car",
      "Guide Day 2-3",
      "Monument entries"
    ],
    "exclusions": [
      "Still camera fees if any",
      "Meals beyond breakfast",
      "Flights"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1603201236596-eb1a98074906?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2171?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "19",
    "title": "Lonavala & Khandala Monsoon Mist",
    "location": "Lonavala, Maharashtra",
    "searchRegion": "Maharashtra",
    "searchPlaces": [
      "Lonavala",
      "Khandala",
      "Pune",
      "Mumbai",
      "Tiger Point"
    ],
    "price": 10899,
    "rating": 4.6,
    "reviews": 311,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1544243956-621193309a6f?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": false,
    "description": "Tiger Point, Bhushi dam splash (monsoon), chikki tasting, and easy Pune/Mumbai access hill break.",
    "highlights": [
      "Tiger & Lion viewpoints",
      "Karla / Bhaja optional",
      "Chikki & fudge factory stop",
      "Valley resort stay",
      "Mumbai/Pune pickup"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive up",
        "description": "Pick Mumbai or Pune, check-in, sunset point."
      },
      {
        "day": 2,
        "title": "Sights",
        "description": "Viewpoints, dam, local food trail."
      },
      {
        "day": 3,
        "title": "Return",
        "description": "Checkout, drop."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private cab"
    ],
    "exclusions": [
      "Cave entry tickets",
      "Meals",
      "Insurance"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1544243956-621193309a6f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621545994-90e25c25d5ca?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "20",
    "title": "Mumbai – Alibaug Coastal Short Break",
    "location": "Mumbai, Maharashtra",
    "searchRegion": "Maharashtra",
    "searchPlaces": [
      "Mumbai",
      "Alibaug",
      "Kashid",
      "Gateway of India",
      "Konkan"
    ],
    "price": 11699,
    "rating": 4.58,
    "reviews": 189,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1566375620436-6804be8593f6?auto=format&fit=crop&w=1200&q=80",
    "category": "Beach & Leisure",
    "isPopular": false,
    "description": "Ferry or road to Alibaug beaches, Kolaba fort sea-walk, and quiet Kashid option. City-to-sand in hours.",
    "highlights": [
      "Gateway ferry experience optional",
      "Alibaug beaches",
      "Kolaba fort",
      "Coastal cuisine stops",
      "Beach resort night"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai–Alibaug",
        "description": "Transfer, beach evening."
      },
      {
        "day": 2,
        "title": "Coastal loop",
        "description": "Kashid or Mandwa exploration."
      },
      {
        "day": 3,
        "title": "Back",
        "description": "Checkout, return Mumbai."
      }
    ],
    "inclusions": [
      "2N stay",
      "Breakfast",
      "AC transfers"
    ],
    "exclusions": [
      "Ferry tickets",
      "Water sports",
      "Lunch dinner"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1566375620436-6804be8593f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570168007205-dfb528c69558?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512789170370-e89b278db538?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570160897042-da398479e0e1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "21",
    "title": "Ahmedabad – Statue of Unity Patriot Circuit",
    "location": "Ahmedabad, Gujarat",
    "searchRegion": "Gujarat",
    "searchPlaces": [
      "Ahmedabad",
      "Statue of Unity",
      "Kevadia",
      "Gujarat",
      "Narmada"
    ],
    "price": 13999,
    "rating": 4.73,
    "reviews": 224,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1622329676667-834458988691?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Sabarmati Ashram touchpoint, modern Kevadia infrastructure, and Statue of Unity viewing gallery slot. Strong infrastructure roads.",
    "highlights": [
      "Statue of Unity viewing",
      "Valley of Flowers (seasonal)",
      "Sardar Sarovar viewpoint",
      "Ahmedabad old city optional",
      "Comfort hotels"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ahmedabad",
        "description": "Heritage morning, drive Kevadia."
      },
      {
        "day": 2,
        "title": "Statue day",
        "description": "Gallery, museum cluster, laser show optional."
      },
      {
        "day": 3,
        "title": "Return",
        "description": "Drive Ahmedabad, drop airport."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private AC car",
      "SOU entry tickets pre-blocked"
    ],
    "exclusions": [
      "Gallery upgrade if separate",
      "Meals",
      "Personal audio guides app"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1622329676667-834458988691?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570160897042-da398479e0e1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "22",
    "title": "Dwarka – Somnath Krishna Coast Pilgrimage",
    "location": "Dwarka, Gujarat",
    "searchRegion": "Gujarat",
    "searchPlaces": [
      "Dwarka",
      "Somnath",
      "Porbandar",
      "Bet Dwarka",
      "Gujarat"
    ],
    "price": 27999,
    "rating": 4.81,
    "reviews": 167,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1623912108507-601931988965?auto=format&fit=crop&w=1200&q=80",
    "category": "Spiritual",
    "isPopular": true,
    "description": "Bet Dwarka boat, Dwarkadhish darshan, Somnath Jyotirling sunset aarti, and Porbandar birthplace slice.",
    "highlights": [
      "Dwarkadhish temple",
      "Bet Dwarka ferry",
      "Somnath aarti",
      "Porbandar Kirti Mandir",
      "Coastal highway private car"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Jamnagar–Dwarka",
        "description": "Arrive region, Dwarka evening aarti."
      },
      {
        "day": 2,
        "title": "Bet Dwarka",
        "description": "Boat island, afternoon drive Somnath."
      },
      {
        "day": 3,
        "title": "Somnath depth",
        "description": "Temple rituals, Triveni Sangam, beach walk."
      },
      {
        "day": 4,
        "title": "Exit via Porbandar",
        "description": "Short city, drop airport."
      }
    ],
    "inclusions": [
      "3N stay",
      "Breakfast",
      "AC car",
      "Boat tickets Bet Dwarka"
    ],
    "exclusions": [
      "Special darshan passes",
      "Lunch dinner",
      "Tips"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1623912108507-601931988965?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "23",
    "title": "Rann of Kutch White Desert Short",
    "location": "Bhuj, Gujarat",
    "searchRegion": "Gujarat",
    "searchPlaces": [
      "Kutch",
      "Bhuj",
      "Dhordo",
      "White Rann",
      "Gujarat"
    ],
    "price": 19999,
    "rating": 4.69,
    "reviews": 134,
    "duration": "3 Days / 2 Nights",
    "image": "https://images.unsplash.com/photo-1621235129643-fc0f15c71d62?auto=format&fit=crop&w=1200&q=80",
    "category": "Wildlife & Desert",
    "isPopular": false,
    "description": "Full moon or general white desert sunset, Bhuj craft villages, and Hodka / Dhordo tent stay style (property category as chosen).",
    "highlights": [
      "Great Rann sunset",
      "Kalo Dungar viewpoint",
      "Bhujodi weaving",
      "Smritivan visit optional",
      "Tented resort experience"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Bhuj",
        "description": "Arrive, craft villages."
      },
      {
        "day": 2,
        "title": "Rann day",
        "description": "White desert, cultural evening."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Checkout, Bhuj airport."
      }
    ],
    "inclusions": [
      "2N stay",
      "Breakfast",
      "Private SUV",
      "Rann permits coordination"
    ],
    "exclusions": [
      "Festival surcharges",
      "Camel cart",
      "Meals"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1621235129643-fc0f15c71d62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530853697-bfde9d2b9291?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582650843477-96a9289fffe7-96a9289fffe7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "24",
    "title": "Bangalore – Mysore Culture Express",
    "location": "Mysuru, Karnataka",
    "searchRegion": "Karnataka",
    "searchPlaces": [
      "Bangalore",
      "Bengaluru",
      "Mysore",
      "Mysuru",
      "Srirangapatna",
      "Chamundi"
    ],
    "price": 15999,
    "rating": 4.76,
    "reviews": 289,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Mysore Palace lights Sunday (if applicable), Chamundi Hill, and Srirangapatna history bite. Great first Karnataka loop.",
    "highlights": [
      "Mysore Palace",
      "Chamundeshwari temple",
      "Brindavan Gardens evening",
      "Srirangapatna walk",
      "Bangalore-Mysore sedan"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Mysore",
        "description": "Pick BLR, drive, palace evening."
      },
      {
        "day": 2,
        "title": "Mysore depth",
        "description": "Chamundi, city food trail, gardens."
      },
      {
        "day": 3,
        "title": "Return BLR",
        "description": "Checkout, drop airport."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private car",
      "Monument entries"
    ],
    "exclusions": [
      "Lunch dinner",
      "Palace photography fee",
      "Tips"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459609-155fe4e52245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1623912108507-601931988965?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603201236596-eb1a98074906?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "25",
    "title": "Hampi Heritage & Boulder Landscape",
    "location": "Hampi, Karnataka",
    "searchRegion": "Karnataka",
    "searchPlaces": [
      "Hampi",
      "Hosapete",
      "Vijayanagara",
      "UNESCO",
      "Tungabhadra"
    ],
    "price": 21999,
    "rating": 4.82,
    "reviews": 176,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1581447100512-322df7bad27b?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": true,
    "description": "Virupaksha, Vittala chariot, sunset Hemakuta, and coracle ride slot. Archaeological wonder with relaxed evenings.",
    "highlights": [
      "Core UNESCO core zone",
      "Vittala temple & stone chariot",
      "Hemakuta sunset",
      "Coracle on Tungabhadra",
      "Boulder resort stay"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hubli–Hampi",
        "description": "Transfer, sunset hill."
      },
      {
        "day": 2,
        "title": "Sacred centre",
        "description": "Virupaksha, river ghats, local lunch."
      },
      {
        "day": 3,
        "title": "Royal Enclosure",
        "description": "Palace ruins, Lotus Mahal, museum."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout, Hubli/Bellary airport drop."
      }
    ],
    "inclusions": [
      "3N stay",
      "Breakfast",
      "AC car",
      "Monument tickets"
    ],
    "exclusions": [
      "Guide full day add-on",
      "Meals",
      "Bicycle hire"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1581447100512-322df7bad27b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520442542812-fd27c7eb9352?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603201236596-eb1a98074906?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "26",
    "title": "Coorg Coffee & Waterfalls",
    "location": "Madikeri, Karnataka",
    "searchRegion": "Karnataka",
    "searchPlaces": [
      "Coorg",
      "Kodagu",
      "Madikeri",
      "Abbey Falls",
      "Karnataka"
    ],
    "price": 17499,
    "rating": 4.74,
    "reviews": 201,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1542397284385-601017642ad3?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": false,
    "description": "Coffee estate walk, Abbey Falls mist, Raja Seat sunset, and Pandi curry meal experience.",
    "highlights": [
      "Coffee plantation tour",
      "Abbey Falls",
      "Raja Seat",
      "Dubare elephant camp optional",
      "Homestay / resort"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Coorg",
        "description": "Pick Mysore/Mangalore, check-in."
      },
      {
        "day": 2,
        "title": "Waterfalls & estate",
        "description": "Full day nature loop."
      },
      {
        "day": 3,
        "title": "Exit",
        "description": "Checkout, transfer."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private cab"
    ],
    "exclusions": [
      "Elephant camp tickets",
      "Meals",
      "River rafting"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1542397284385-601017642ad3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593693411515-33369cf5e9e4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "27",
    "title": "North Goa Beaches & Nightlife",
    "location": "North Goa, Goa",
    "searchRegion": "Goa",
    "searchPlaces": [
      "North Goa",
      "Baga",
      "Calangute",
      "Candolim",
      "Anjuna",
      "Goa"
    ],
    "price": 14299,
    "rating": 4.65,
    "reviews": 402,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
    "category": "Beach & Leisure",
    "isPopular": true,
    "description": "Baga-Calangute strip, Fort Aguada view, and Anjuna flea market (day). Party optional — we focus on safe transfers.",
    "highlights": [
      "Calangute–Baga beach time",
      "Fort Aguada",
      "Chapora fort view optional",
      "Sunset cruise optional add-on",
      "North Goa resort"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "description": "Pick Dabolim/MOPA, check-in, beach evening."
      },
      {
        "day": 2,
        "title": "Explore",
        "description": "North beaches & fort loop."
      },
      {
        "day": 3,
        "title": "Fly out",
        "description": "Leisure, airport drop."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private AC",
      "Airport transfers"
    ],
    "exclusions": [
      "Cruise tickets",
      "Club entries",
      "Water sports",
      "Meals"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512789170370-e89b278db538?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519451241324-20bff7d7a365?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "28",
    "title": "South Goa Quiet Luxury",
    "location": "South Goa, Goa",
    "searchRegion": "Goa",
    "searchPlaces": [
      "South Goa",
      "Colva",
      "Palolem",
      "Agonda",
      "Goa"
    ],
    "price": 17999,
    "rating": 4.7,
    "reviews": 256,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    "category": "Beach & Leisure",
    "isPopular": false,
    "description": "Colva–Benaulim calm sands, Palolem day trip option, spice plantation short tour. Couples-first pacing.",
    "highlights": [
      "South Goa resort stay",
      "Colva beach",
      "Palolem day (long drive)",
      "Spice farm with lunch",
      "Sunset quieter coves"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival",
        "description": "Transfer, beach sunset."
      },
      {
        "day": 2,
        "title": "Palolem",
        "description": "Full day south exploration."
      },
      {
        "day": 3,
        "title": "Plantation",
        "description": "Spice tour, Ayurveda optional."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout, drop."
      }
    ],
    "inclusions": [
      "3N CP",
      "Car",
      "One spice plantation lunch"
    ],
    "exclusions": [
      "Palolem long drive fuel surcharge if applicable",
      "Tips"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-73407d63d208?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512789170370-e89b278db538?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "29",
    "title": "Goa Leisure + Dudhsagar Adventure",
    "location": "Goa, India",
    "searchRegion": "Goa",
    "searchPlaces": [
      "Dudhsagar",
      "Mollem",
      "Panaji",
      "Goa"
    ],
    "price": 22899,
    "rating": 4.68,
    "reviews": 167,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1590393952601-b28665049386?auto=format&fit=crop&w=1200&q=80",
    "category": "Adventure",
    "isPopular": false,
    "description": "Jeep safari slot to Dudhsagar Falls (seasonal), water sports package at Calangute, and Old Goa churches half-day.",
    "highlights": [
      "Dudhsagar jeep safari coordination",
      "Water sports combo (parasail/banana 2 picks)",
      "Basilica of Bom Jesus",
      "Fontainhas Latin Quarter",
      "3N central Goa"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Beach & sports",
        "description": "Arrive, afternoon water sports."
      },
      {
        "day": 2,
        "title": "Dudhsagar",
        "description": "Early jeep convoy, waterfall time, return tired & happy."
      },
      {
        "day": 3,
        "title": "Heritage",
        "description": "Old Goa churches & Panjim walk."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Checkout."
      }
    ],
    "inclusions": [
      "3N CP",
      "SUV",
      "Jeep safari seat",
      "Sports combo voucher"
    ],
    "exclusions": [
      "Jeep park fees",
      "Lifejacket loss",
      "Meals"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1590393952601-b28665049386?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512789170370-e89b278db538?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519451241324-20bff7d7a365?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "30",
    "title": "Gangtok Capital Highlights",
    "location": "Gangtok, Sikkim",
    "searchRegion": "Sikkim",
    "searchPlaces": [
      "Gangtok",
      "Sikkim",
      "MG Marg",
      "Rumtek"
    ],
    "price": 19999,
    "rating": 4.72,
    "reviews": 145,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": true,
    "description": "MG Marg evenings, Rumtek monastery day, and local momo trail. Permits handled for Indian nationals standard route.",
    "highlights": [
      "MG Marg pedestrian zone",
      "Rumtek monastery",
      "Ganesh Tok viewpoint",
      "Flower exhibition (seasonal)",
      "Permit assistance"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Bagdogra–Gangtok",
        "description": "4–5h drive, check-in, MG Marg."
      },
      {
        "day": 2,
        "title": "Monastery day",
        "description": "Rumtek + viewpoints."
      },
      {
        "day": 3,
        "title": "Departure",
        "description": "Drive airport."
      }
    ],
    "inclusions": [
      "2N CP",
      "Private Innova",
      "Sikkim inner line support"
    ],
    "exclusions": [
      "Permit fees if any",
      "Meals",
      "Personal warm gear"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "31",
    "title": "Gangtok – Tsomgo Lake & Baba Mandir",
    "location": "Gangtok, Sikkim",
    "searchRegion": "Sikkim",
    "searchPlaces": [
      "Tsomgo",
      "Changu",
      "Nathula",
      "Baba Harbhajan",
      "Gangtok"
    ],
    "price": 25299,
    "rating": 4.8,
    "reviews": 198,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    "category": "Adventure",
    "isPopular": true,
    "description": "High-altitude lake day with yak photo ops (ethical distance), snow walls winter, and permit logistics included for shared route.",
    "highlights": [
      "Tsomgo Lake day trip",
      "Baba Mandir",
      "Yak ride optional pay",
      "High-altitude snacks carry tip briefing",
      "Warm hotel nights"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive Gangtok",
        "description": "Drive up, acclimatise, MG Marg."
      },
      {
        "day": 2,
        "title": "Tsomgo",
        "description": "Full day lake & mandir, early start."
      },
      {
        "day": 3,
        "title": "Buffer / local",
        "description": "Handicraft or rest day for weather buffer."
      },
      {
        "day": 4,
        "title": "Exit",
        "description": "Drive Bagdogra."
      }
    ],
    "inclusions": [
      "3N CP",
      "SUV",
      "Lake day permits & vehicle"
    ],
    "exclusions": [
      "Nathula if open (extra permit fee)",
      "Yak ride",
      "Oxygen canister personal"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1597075687490-8f4530ae3fbf-8f4530ae3fbf?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "32",
    "title": "Gangtok – Nathula Border Experience",
    "location": "Gangtok, Sikkim",
    "searchRegion": "Sikkim",
    "searchPlaces": [
      "Nathula",
      "Tsomgo",
      "Indo-China border",
      "Gangtok"
    ],
    "price": 31999,
    "rating": 4.77,
    "reviews": 112,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1605540435647-d86154563a65?auto=format&fit=crop&w=1200&q=80",
    "category": "Adventure",
    "isPopular": false,
    "description": "When army opens Nathula pass for tourists, we secure permits in advance window. Includes Tsomgo combo day.",
    "highlights": [
      "Nathula attempt day (subject to army)",
      "Tsomgo lake bundled",
      "Permit paperwork support",
      "Oxygen backup on vehicle",
      "High nutrition meal tips"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "description": "Gangtok settle."
      },
      {
        "day": 2,
        "title": "Tsomgo",
        "description": "Acclimatisation lake day."
      },
      {
        "day": 3,
        "title": "Nathula",
        "description": "Early convoy, border viewpoint, return."
      },
      {
        "day": 4,
        "title": "Departure",
        "description": "Fly out Bagdogra."
      }
    ],
    "inclusions": [
      "3N CP",
      "SUV",
      "Permit facilitation"
    ],
    "exclusions": [
      "Nathula permit fee variable",
      "Army closure no refund policy applies",
      "Meals"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1605540435647-d86154563a65?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fca7f73623?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "33",
    "title": "Tawang Monastery & High Himalayas",
    "location": "Tawang, Arunachal Pradesh",
    "searchRegion": "Arunachal Pradesh",
    "searchPlaces": [
      "Tawang",
      "Bomdila",
      "Dirang",
      "Sela Pass",
      "Arunachal"
    ],
    "price": 46999,
    "rating": 4.86,
    "reviews": 89,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1580967615704-2755910404dc?auto=format&fit=crop&w=1200&q=80",
    "category": "Adventure",
    "isPopular": true,
    "description": "Sela Pass crossing, Tawang monastery depth, and war memorial. For travellers okay with long mountain drives.",
    "highlights": [
      "Tawang Monastery",
      "Sela Pass snow photos",
      "Jaswant Garh memorial",
      "Craft emporium",
      "Inner Line Permit support"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Guwahati–Dirang",
        "description": "Flight connect, long drive split style (custom per actual road plan)."
      },
      {
        "day": 2,
        "title": "Dirang–Tawang",
        "description": "Sela crossing, reach Tawang evening."
      },
      {
        "day": 3,
        "title": "Tawang",
        "description": "Monastery, memorial, local valley."
      },
      {
        "day": 4,
        "title": "Exit",
        "description": "Drive back to Tezpur/Bomdila for flight."
      }
    ],
    "inclusions": [
      "Stays as per circuit",
      "Breakfast",
      "4WD / SUV",
      "ILP assistance"
    ],
    "exclusions": [
      "Flights Guwahati",
      "Meals",
      "Army area restrictions",
      "Altitude risk disclaimer"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1580967615704-2755910404dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa-f732f7bac102?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "34",
    "title": "Bomdila – Dirang Valley Soft Adventure",
    "location": "Bomdila, Arunachal Pradesh",
    "searchRegion": "Arunachal Pradesh",
    "searchPlaces": [
      "Bomdila",
      "Dirang",
      "Sangti Valley",
      "Arunachal"
    ],
    "price": 28999,
    "rating": 4.7,
    "reviews": 67,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "category": "Hill Station",
    "isPopular": false,
    "description": "Monastery views in Bomdila, Sangti Valley orchards, hot spring Dirang. Lower altitude than Tawang full push.",
    "highlights": [
      "Bomdila monastery",
      "Dirang Dzong",
      "Sangti Valley walk",
      "Apple orchards seasonal",
      "Homestay mix option"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tezpur–Bomdila",
        "description": "Drive, monastery sunset."
      },
      {
        "day": 2,
        "title": "Dirang",
        "description": "Valley & hot spring."
      },
      {
        "day": 3,
        "title": "Return",
        "description": "Drive Tezpur."
      }
    ],
    "inclusions": [
      "2N",
      "Breakfast",
      "SUV",
      "ILP"
    ],
    "exclusions": [
      "Meals",
      "Tips",
      "Flight"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542397284385-601017642ad3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621545994-90e25c25d5ca?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "35",
    "title": "Itanagar Capital & Tribal Museum",
    "location": "Itanagar, Arunachal Pradesh",
    "searchRegion": "Arunachal Pradesh",
    "searchPlaces": [
      "Itanagar",
      "Naharlagun",
      "Ziro optional",
      "Arunachal"
    ],
    "price": 12499,
    "rating": 4.55,
    "reviews": 43,
    "duration": "2 Days / 1 Night",
    "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": false,
    "description": "Ganga Lake (Gyakar Sinyi), craft centre, and state museum for tribal culture immersion without high passes.",
    "highlights": [
      "Jawaharlal Nehru State Museum",
      "Ganga Lake",
      "Buddhist temple Itanagar",
      "Local market",
      "Quick permit city"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "description": "Dibrugarh or Lilabari connect, drive Itanagar."
      },
      {
        "day": 2,
        "title": "City & exit",
        "description": "Sightseeing, evening drop airport."
      }
    ],
    "inclusions": [
      "1N stay",
      "Breakfast",
      "Car"
    ],
    "exclusions": [
      "Meals",
      "Ziro extension extra days"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580967615704-2755910404dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605649238038-3482701d898c-70e676c8c973?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "36",
    "title": "Amritsar Golden Temple Weekend",
    "location": "Amritsar, Punjab",
    "searchRegion": "Punjab",
    "searchPlaces": [
      "Amritsar",
      "Punjab",
      "Golden Temple",
      "Harmandir Sahib",
      "Wagah"
    ],
    "price": 11999,
    "rating": 4.88,
    "reviews": 502,
    "duration": "2 Nights / 3 Days",
    "image": "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
    "category": "Spiritual",
    "isPopular": true,
    "description": "Harmandir Sahib pre-dawn peace, Jallianwala Bagh, partition museum emotion, and Wagah ceremony energy.",
    "highlights": [
      "Golden Temple visit twice (day & night)",
      "Jallianwala Bagh",
      "Partition Museum",
      "Wagah border ceremony",
      "Amritsari kulcha trail"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrive",
        "description": "Station/airport pick, evening temple."
      },
      {
        "day": 2,
        "title": "Heritage",
        "description": "Partition museum, Bagh, local food."
      },
      {
        "day": 3,
        "title": "Wagah & exit",
        "description": "Afternoon ceremony, drop."
      }
    ],
    "inclusions": [
      "2N near Golden Temple",
      "Breakfast",
      "AC car",
      "Wagah parking"
    ],
    "exclusions": [
      "Temple VIP gate if any",
      "Meals",
      "Personal offerings"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595658658481-b349badec3a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621235129643-fc0f15c71d62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545125301-44754a17ed4c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "37",
    "title": "Amritsar Patriot Express — Wagah & Jallianwala",
    "location": "Amritsar, Punjab",
    "searchRegion": "Punjab",
    "searchPlaces": [
      "Amritsar",
      "Wagah",
      "Jallianwala",
      "Attari"
    ],
    "price": 7999,
    "rating": 4.62,
    "reviews": 156,
    "duration": "2 Days / 1 Night",
    "image": "https://images.unsplash.com/photo-1595658658481-b349badec3a5?auto=format&fit=crop&w=1200&q=80",
    "category": "Spiritual",
    "isPopular": false,
    "description": "Ultra-short: one full Wagah + temple evening + morning Bagh. For tight business travellers.",
    "highlights": [
      "Wagah ceremony",
      "Golden Temple night",
      "Jallianwala Bagh morning",
      "Local guide app links",
      "1N hotel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1",
        "description": "Arrive noon, Wagah, night golden temple."
      },
      {
        "day": 2,
        "title": "Day 2",
        "description": "Morning sites, checkout fly."
      }
    ],
    "inclusions": [
      "1N",
      "Breakfast",
      "Car"
    ],
    "exclusions": [
      "Lunch dinner",
      "Museum audio"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1595658658481-b349badec3a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "38",
    "title": "Amritsar – Chandigarh Culture Combo",
    "location": "Amritsar, Punjab",
    "searchRegion": "Punjab",
    "searchPlaces": [
      "Amritsar",
      "Chandigarh",
      "Rock Garden",
      "Sukhna Lake",
      "Punjab"
    ],
    "price": 18299,
    "rating": 4.75,
    "reviews": 134,
    "duration": "3 Nights / 4 Days",
    "image": "https://images.unsplash.com/photo-1477587453333-f27f5480e136?auto=format&fit=crop&w=1200&q=80",
    "category": "Heritage",
    "isPopular": false,
    "description": "Spiritual start in Amritsar, then planned city design of Chandigarh: Rock Garden, Sukhna Lake, and Capitol complex photo from outside zones allowed.",
    "highlights": [
      "Golden Temple + Wagah",
      "Rock Garden",
      "Sukhna Lake",
      "Capitol complex exterior",
      "Highway comfortable transfers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Amritsar",
        "description": "2 days spiritual heritage block."
      },
      {
        "day": 2,
        "title": "Drive Chandigarh",
        "description": "Grand trunk road comfort stops."
      },
      {
        "day": 3,
        "title": "Chandigarh",
        "description": "Rock garden & lake."
      },
      {
        "day": 4,
        "title": "Exit",
        "description": "Airport drop CHD."
      }
    ],
    "inclusions": [
      "3N CP",
      "Intercity car",
      "Monument entries listed"
    ],
    "exclusions": [
      "Capitol interior tours if banned",
      "Meals"
    ],
    "gallery": [
      "https://images.unsplash.com/photo-1477587453333-f27f5480e136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595658658481-b349badec3a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80"
    ]
  }
] as Tour[];
export const destinations = [
  {
    "id": "d1",
    "name": "Rajasthan",
    "toursRegion": "Rajasthan",
    "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d2",
    "name": "Uttarakhand",
    "toursRegion": "Uttarakhand",
    "image": "https://images.unsplash.com/photo-1590496793910-449e7529482d-449e7529482d?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d3",
    "name": "Himachal Pradesh",
    "toursRegion": "Himachal Pradesh",
    "image": "https://images.unsplash.com/photo-1605649238038-3482701d898c?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d4",
    "name": "Uttar Pradesh",
    "toursRegion": "Uttar Pradesh",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d5",
    "name": "Delhi & Golden Triangle",
    "toursRegion": "Delhi NCR",
    "image": "https://images.unsplash.com/photo-1587474260584-1281d429ca54?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 2
  },
  {
    "id": "d6",
    "name": "Kerala",
    "toursRegion": "Kerala",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d7",
    "name": "Maharashtra",
    "toursRegion": "Maharashtra",
    "image": "https://images.unsplash.com/photo-1570160897042-da398479e0e1?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d8",
    "name": "Gujarat",
    "toursRegion": "Gujarat",
    "image": "https://images.unsplash.com/photo-1623912108507-601931988965?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d9",
    "name": "Karnataka",
    "toursRegion": "Karnataka",
    "image": "https://images.unsplash.com/photo-1581447100512-322df7bad27b?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d10",
    "name": "Goa",
    "toursRegion": "Goa",
    "image": "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d11",
    "name": "Sikkim",
    "toursRegion": "Sikkim",
    "image": "https://images.unsplash.com/photo-1582650843477-96a9289fffe7-96a9289fffe7?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d12",
    "name": "Arunachal Pradesh",
    "toursRegion": "Arunachal Pradesh",
    "image": "https://images.unsplash.com/photo-1580967615704-2755910404dc?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  },
  {
    "id": "d13",
    "name": "Punjab",
    "toursRegion": "Punjab",
    "image": "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
    "tourCount": 3
  }
] as Destination[];
