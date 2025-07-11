const cities = [
    {
      "city": "Delhi",
      "latitude": 28.6600,
      "longitude": 77.2300,
      "state": "Delhi"
    },
    {
      "city": "Mumbai",
      "latitude": 18.9667,
      "longitude": 72.8333,
      "state": "Mahārāshtra"
    },
    {
      "city": "Kolkāta",
      "latitude": 22.5411,
      "longitude": 88.3378,
      "state": "West Bengal"
    },
    {
      "city": "Bangalore",
      "latitude": 12.9699,
      "longitude": 77.5980,
      "state": "Karnātaka"
    },
    {
      "city": "Chennai",
      "latitude": 13.0825,
      "longitude": 80.2750,
      "state": "Tamil Nādu"
    },
    {
      "city": "Hyderābād",
      "latitude": 17.3667,
      "longitude": 78.4667,
      "state": "Telangana"
    },
    {
      "city": "Pune",
      "latitude": 18.5196,
      "longitude": 73.8553,
      "state": "Mahārāshtra"
    },
    {
      "city": "Ahmadābād",
      "latitude": 23.0300,
      "longitude": 72.5800,
      "state": "Gujarāt"
    },
    {
      "city": "Sūrat",
      "latitude": 21.1700,
      "longitude": 72.8300,
      "state": "Gujarāt"
    },
    {
      "city": "Lucknow",
      "latitude": 26.8470,
      "longitude": 80.9470,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Jaipur",
      "latitude": 26.9167,
      "longitude": 75.8667,
      "state": "Rājasthān"
    },
    {
      "city": "Cawnpore",
      "latitude": 26.4725,
      "longitude": 80.3311,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Mirzāpur",
      "latitude": 25.1500,
      "longitude": 82.5800,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Nāgpur",
      "latitude": 21.1539,
      "longitude": 79.0831,
      "state": "Mahārāshtra"
    },
    {
      "city": "Ghāziābād",
      "latitude": 28.6667,
      "longitude": 77.4167,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Indore",
      "latitude": 22.7206,
      "longitude": 75.8472,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Vadodara",
      "latitude": 22.3000,
      "longitude": 73.2000,
      "state": "Gujarāt"
    },
    {
      "city": "Visakhapatnam",
      "latitude": 17.7333,
      "longitude": 83.3167,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Bhopāl",
      "latitude": 23.2500,
      "longitude": 77.4167,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Chinchvad",
      "latitude": 18.6278,
      "longitude": 73.8131,
      "state": "Mahārāshtra"
    },
    {
      "city": "Patna",
      "latitude": 25.6100,
      "longitude": 85.1414,
      "state": "Bihār"
    },
    {
      "city": "Ludhiāna",
      "latitude": 30.9083,
      "longitude": 75.8486,
      "state": "Punjab"
    },
    {
      "city": "Āgra",
      "latitude": 27.1800,
      "longitude": 78.0200,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Kalyān",
      "latitude": 19.2502,
      "longitude": 73.1602,
      "state": "Mahārāshtra"
    },
    {
      "city": "Madurai",
      "latitude": 9.9197,
      "longitude": 78.1194,
      "state": "Tamil Nādu"
    },
    {
      "city": "Jamshedpur",
      "latitude": 22.8000,
      "longitude": 86.1833,
      "state": "Jharkhand"
    },
    {
      "city": "Nashik",
      "latitude": 20.0000,
      "longitude": 73.7833,
      "state": "Mahārāshtra"
    },
    {
      "city": "Farīdābād",
      "latitude": 28.4333,
      "longitude": 77.3167,
      "state": "Haryāna"
    },
    {
      "city": "Aurangābād",
      "latitude": 19.8800,
      "longitude": 75.3200,
      "state": "Mahārāshtra"
    },
    {
      "city": "Rājkot",
      "latitude": 22.2969,
      "longitude": 70.7984,
      "state": "Gujarāt"
    },
    {
      "city": "Meerut",
      "latitude": 28.9900,
      "longitude": 77.7000,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Jabalpur",
      "latitude": 23.1667,
      "longitude": 79.9333,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Thāne",
      "latitude": 19.1800,
      "longitude": 72.9633,
      "state": "Mahārāshtra"
    },
    {
      "city": "Dhanbād",
      "latitude": 23.7928,
      "longitude": 86.4350,
      "state": "Jharkhand"
    },
    {
      "city": "Allahābād",
      "latitude": 25.4550,
      "longitude": 81.8400,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Vārānasi",
      "latitude": 25.3189,
      "longitude": 83.0128,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Srīnagar",
      "latitude": 34.0911,
      "longitude": 74.8061,
      "state": "Jammu and Kashmīr"
    },
    {
      "city": "Amritsar",
      "latitude": 31.6167,
      "longitude": 74.8500,
      "state": "Punjab"
    },
    {
      "city": "Alīgarh",
      "latitude": 27.8800,
      "longitude": 78.0800,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Bhiwandi",
      "latitude": 19.3000,
      "longitude": 73.0667,
      "state": "Mahārāshtra"
    },
    {
      "city": "Gwalior",
      "latitude": 26.2150,
      "longitude": 78.1931,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Bhilai",
      "latitude": 21.2167,
      "longitude": 81.4333,
      "state": "Chhattīsgarh"
    },
    {
      "city": "Hāora",
      "latitude": 22.5900,
      "longitude": 88.3100,
      "state": "West Bengal"
    },
    {
      "city": "Rānchi",
      "latitude": 23.3556,
      "longitude": 85.3347,
      "state": "Jharkhand"
    },
    {
      "city": "Bezwāda",
      "latitude": 16.5167,
      "longitude": 80.6167,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Chandīgarh",
      "latitude": 30.7353,
      "longitude": 76.7911,
      "state": "Chandīgarh"
    },
    {
      "city": "Mysore",
      "latitude": 12.3086,
      "longitude": 76.6531,
      "state": "Karnātaka"
    },
    {
      "city": "Raipur",
      "latitude": 21.2379,
      "longitude": 81.6337,
      "state": "Chhattīsgarh"
    },
    {
      "city": "Kota",
      "latitude": 25.1800,
      "longitude": 75.8300,
      "state": "Rājasthān"
    },
    {
      "city": "Bareilly",
      "latitude": 28.3640,
      "longitude": 79.4150,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Jodhpur",
      "latitude": 26.2918,
      "longitude": 73.0168,
      "state": "Rājasthān"
    },
    {
      "city": "Coimbatore",
      "latitude": 11.0000,
      "longitude": 76.9667,
      "state": "Tamil Nādu"
    },
    {
      "city": "Dispur",
      "latitude": 26.1500,
      "longitude": 91.7700,
      "state": "Assam"
    },
    {
      "city": "Guwāhāti",
      "latitude": 26.1667,
      "longitude": 91.7667,
      "state": "Assam"
    },
    {
      "city": "Solāpur",
      "latitude": 17.6833,
      "longitude": 75.9167,
      "state": "Mahārāshtra"
    },
    {
      "city": "Trichinopoly",
      "latitude": 10.8269,
      "longitude": 78.6928,
      "state": "Tamil Nādu"
    },
    {
      "city": "Hubli",
      "latitude": 15.3600,
      "longitude": 75.1250,
      "state": "Karnātaka"
    },
    {
      "city": "Jalandhar",
      "latitude": 31.3256,
      "longitude": 75.5792,
      "state": "Punjab"
    },
    {
      "city": "Bhubaneshwar",
      "latitude": 20.2644,
      "longitude": 85.8281,
      "state": "Odisha"
    },
    {
      "city": "Bhayandar",
      "latitude": 19.3000,
      "longitude": 72.8500,
      "state": "Mahārāshtra"
    },
    {
      "city": "Morādābād",
      "latitude": 28.8418,
      "longitude": 78.7568,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Kolhāpur",
      "latitude": 16.7000,
      "longitude": 74.2333,
      "state": "Mahārāshtra"
    },
    {
      "city": "Thiruvananthapuram",
      "latitude": 8.5000,
      "longitude": 76.8997,
      "state": "Kerala"
    },
    {
      "city": "Sahāranpur",
      "latitude": 29.9640,
      "longitude": 77.5460,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Warangal",
      "latitude": 17.9756,
      "longitude": 79.6011,
      "state": "Telangana"
    },
    {
      "city": "Salem",
      "latitude": 11.6500,
      "longitude": 78.1667,
      "state": "Tamil Nādu"
    },
    {
      "city": "Mālegaon",
      "latitude": 20.5500,
      "longitude": 74.5500,
      "state": "Mahārāshtra"
    },
    {
      "city": "Kochi",
      "latitude": 9.9667,
      "longitude": 76.2833,
      "state": "Kerala"
    },
    {
      "city": "Gorakhpur",
      "latitude": 26.7611,
      "longitude": 83.3667,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Shimoga",
      "latitude": 13.9304,
      "longitude": 75.5600,
      "state": "Karnātaka"
    },
    {
      "city": "Tiruppūr",
      "latitude": 11.1075,
      "longitude": 77.3398,
      "state": "Tamil Nādu"
    },
    {
      "city": "Guntūr",
      "latitude": 16.3000,
      "longitude": 80.4500,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Raurkela",
      "latitude": 22.2492,
      "longitude": 84.8828,
      "state": "Odisha"
    },
    {
      "city": "Mangalore",
      "latitude": 12.8703,
      "longitude": 74.8806,
      "state": "Karnātaka"
    },
    {
      "city": "Nānded",
      "latitude": 19.1500,
      "longitude": 77.3333,
      "state": "Mahārāshtra"
    },
    {
      "city": "Cuttack",
      "latitude": 20.4500,
      "longitude": 85.8667,
      "state": "Odisha"
    },
    {
      "city": "Chānda",
      "latitude": 19.9500,
      "longitude": 79.3000,
      "state": "Mahārāshtra"
    },
    {
      "city": "Dehra Dūn",
      "latitude": 30.3180,
      "longitude": 78.0290,
      "state": "Uttarakhand"
    },
    {
      "city": "Durgāpur",
      "latitude": 23.5500,
      "longitude": 87.3200,
      "state": "West Bengal"
    },
    {
      "city": "Āsansol",
      "latitude": 23.6833,
      "longitude": 86.9667,
      "state": "West Bengal"
    },
    {
      "city": "Bhāvnagar",
      "latitude": 21.7650,
      "longitude": 72.1369,
      "state": "Gujarāt"
    },
    {
      "city": "Amrāvati",
      "latitude": 20.9333,
      "longitude": 77.7500,
      "state": "Mahārāshtra"
    },
    {
      "city": "Nellore",
      "latitude": 14.4333,
      "longitude": 79.9667,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Ajmer",
      "latitude": 26.4680,
      "longitude": 74.6390,
      "state": "Rājasthān"
    },
    {
      "city": "Tinnevelly",
      "latitude": 8.7289,
      "longitude": 77.7081,
      "state": "Tamil Nādu"
    },
    {
      "city": "Bīkaner",
      "latitude": 28.0181,
      "longitude": 73.3169,
      "state": "Rājasthān"
    },
    {
      "city": "Agartala",
      "latitude": 23.8333,
      "longitude": 91.2667,
      "state": "Tripura"
    },
    {
      "city": "Ujjain",
      "latitude": 23.1828,
      "longitude": 75.7772,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Jhānsi",
      "latitude": 25.4486,
      "longitude": 78.5696,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Ulhāsnagar",
      "latitude": 19.2167,
      "longitude": 73.1500,
      "state": "Mahārāshtra"
    },
    {
      "city": "Davangere",
      "latitude": 14.4667,
      "longitude": 75.9167,
      "state": "Karnātaka"
    },
    {
      "city": "Jammu",
      "latitude": 32.7333,
      "longitude": 74.8500,
      "state": "Jammu and Kashmīr"
    },
    {
      "city": "Belgaum",
      "latitude": 15.8667,
      "longitude": 74.5000,
      "state": "Karnātaka"
    },
    {
      "city": "Gulbarga",
      "latitude": 17.3333,
      "longitude": 76.8333,
      "state": "Karnātaka"
    },
    {
      "city": "Jāmnagar",
      "latitude": 22.4700,
      "longitude": 70.0700,
      "state": "Gujarāt"
    },
    {
      "city": "Dhūlia",
      "latitude": 20.9000,
      "longitude": 74.7833,
      "state": "Mahārāshtra"
    },
    {
      "city": "Gaya",
      "latitude": 24.7500,
      "longitude": 85.0167,
      "state": "Bihār"
    },
    {
      "city": "Jalgaon",
      "latitude": 21.0167,
      "longitude": 75.5667,
      "state": "Mahārāshtra"
    },
    {
      "city": "Kurnool",
      "latitude": 15.8222,
      "longitude": 78.0350,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Udaipur",
      "latitude": 24.5833,
      "longitude": 73.6833,
      "state": "Rājasthān"
    },
    {
      "city": "Bellary",
      "latitude": 15.1500,
      "longitude": 76.9150,
      "state": "Karnātaka"
    },
    {
      "city": "Sāngli",
      "latitude": 16.8667,
      "longitude": 74.5667,
      "state": "Mahārāshtra"
    },
    {
      "city": "Tuticorin",
      "latitude": 8.7833,
      "longitude": 78.1333,
      "state": "Tamil Nādu"
    },
    {
      "city": "Calicut",
      "latitude": 11.2500,
      "longitude": 75.7667,
      "state": "Kerala"
    },
    {
      "city": "Akola",
      "latitude": 20.7333,
      "longitude": 77.0000,
      "state": "Mahārāshtra"
    },
    {
      "city": "Bhāgalpur",
      "latitude": 25.2500,
      "longitude": 87.0167,
      "state": "Bihār"
    },
    {
      "city": "Sīkar",
      "latitude": 27.6119,
      "longitude": 75.1397,
      "state": "Rājasthān"
    },
    {
      "city": "Tumkūr",
      "latitude": 13.3300,
      "longitude": 77.1000,
      "state": "Karnātaka"
    },
    {
      "city": "Quilon",
      "latitude": 8.8853,
      "longitude": 76.5864,
      "state": "Kerala"
    },
    {
      "city": "Muzaffarnagar",
      "latitude": 29.4708,
      "longitude": 77.7033,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Bhīlwāra",
      "latitude": 25.3500,
      "longitude": 74.6333,
      "state": "Rājasthān"
    },
    {
      "city": "Nizāmābād",
      "latitude": 18.6704,
      "longitude": 78.1000,
      "state": "Telangana"
    },
    {
      "city": "Bhātpāra",
      "latitude": 22.8667,
      "longitude": 88.4167,
      "state": "West Bengal"
    },
    {
      "city": "Kākināda",
      "latitude": 16.9333,
      "longitude": 82.2167,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Parbhani",
      "latitude": 19.2704,
      "longitude": 76.7600,
      "state": "Mahārāshtra"
    },
    {
      "city": "Pānihāti",
      "latitude": 22.6900,
      "longitude": 88.3700,
      "state": "West Bengal"
    },
    {
      "city": "Lātūr",
      "latitude": 18.4004,
      "longitude": 76.5700,
      "state": "Mahārāshtra"
    },
    {
      "city": "Rohtak",
      "latitude": 28.9000,
      "longitude": 76.5667,
      "state": "Haryāna"
    },
    {
      "city": "Rājapālaiyam",
      "latitude": 9.4204,
      "longitude": 77.5800,
      "state": "Tamil Nādu"
    },
    {
      "city": "Ahmadnagar",
      "latitude": 19.0833,
      "longitude": 74.7333,
      "state": "Mahārāshtra"
    },
    {
      "city": "Cuddapah",
      "latitude": 14.4667,
      "longitude": 78.8167,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Rājahmundry",
      "latitude": 16.9833,
      "longitude": 81.7833,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Alwar",
      "latitude": 27.5667,
      "longitude": 76.6167,
      "state": "Rājasthān"
    },
    {
      "city": "Muzaffarpur",
      "latitude": 26.1200,
      "longitude": 85.3833,
      "state": "Bihār"
    },
    {
      "city": "Bilāspur",
      "latitude": 22.1500,
      "longitude": 82.0167,
      "state": "Chhattīsgarh"
    },
    {
      "city": "Mathura",
      "latitude": 27.4833,
      "longitude": 77.6833,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Kāmārhāti",
      "latitude": 22.6700,
      "longitude": 88.3700,
      "state": "West Bengal"
    },
    {
      "city": "Patiāla",
      "latitude": 30.3204,
      "longitude": 76.3850,
      "state": "Punjab"
    },
    {
      "city": "Saugor",
      "latitude": 23.8504,
      "longitude": 78.7500,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Bijāpur",
      "latitude": 16.8244,
      "longitude": 75.7154,
      "state": "Karnātaka"
    },
    {
      "city": "Brahmapur",
      "latitude": 19.3200,
      "longitude": 84.8000,
      "state": "Odisha"
    },
    {
      "city": "Shāhjānpur",
      "latitude": 27.8804,
      "longitude": 79.9050,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Trichūr",
      "latitude": 10.5200,
      "longitude": 76.2100,
      "state": "Kerala"
    },
    {
      "city": "Barddhamān",
      "latitude": 23.2500,
      "longitude": 87.8500,
      "state": "West Bengal"
    },
    {
      "city": "Kulti",
      "latitude": 23.7300,
      "longitude": 86.8500,
      "state": "West Bengal"
    },
    {
      "city": "Sambalpur",
      "latitude": 21.4704,
      "longitude": 83.9701,
      "state": "Odisha"
    },
    {
      "city": "Purnea",
      "latitude": 25.7800,
      "longitude": 87.4700,
      "state": "Bihār"
    },
    {
      "city": "Hisar",
      "latitude": 29.1489,
      "longitude": 75.7367,
      "state": "Haryāna"
    },
    {
      "city": "Fīrozābād",
      "latitude": 27.1500,
      "longitude": 78.3949,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Bīdar",
      "latitude": 17.9229,
      "longitude": 77.5175,
      "state": "Karnātaka"
    },
    {
      "city": "Rāmpur",
      "latitude": 28.8154,
      "longitude": 79.0250,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Shiliguri",
      "latitude": 26.7200,
      "longitude": 88.4200,
      "state": "West Bengal"
    },
    {
      "city": "Bāli",
      "latitude": 22.6500,
      "longitude": 88.3400,
      "state": "West Bengal"
    },
    {
      "city": "Pānīpat",
      "latitude": 29.4004,
      "longitude": 76.9700,
      "state": "Haryāna"
    },
    {
      "city": "Karīmnagar",
      "latitude": 18.4333,
      "longitude": 79.1500,
      "state": "Telangana"
    },
    {
      "city": "Bhuj",
      "latitude": 23.2504,
      "longitude": 69.8100,
      "state": "Gujarāt"
    },
    {
      "city": "Ichalkaranji",
      "latitude": 16.7000,
      "longitude": 74.4700,
      "state": "Mahārāshtra"
    },
    {
      "city": "Tirupati",
      "latitude": 13.6500,
      "longitude": 79.4200,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Hospet",
      "latitude": 15.2667,
      "longitude": 76.4000,
      "state": "Karnātaka"
    },
    {
      "city": "Āīzawl",
      "latitude": 23.7104,
      "longitude": 92.7200,
      "state": "Mizoram"
    },
    {
      "city": "Sannai",
      "latitude": 24.1600,
      "longitude": 80.8300,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Bārāsat",
      "latitude": 22.2333,
      "longitude": 88.4500,
      "state": "West Bengal"
    },
    {
      "city": "Ratlām",
      "latitude": 23.3167,
      "longitude": 75.0667,
      "state": "Madhya Pradesh"
    },
    {
      "city": "Handwāra",
      "latitude": 34.4000,
      "longitude": 74.2800,
      "state": "Jammu and Kashmīr"
    },
    {
      "city": "Drug",
      "latitude": 21.1900,
      "longitude": 81.2800,
      "state": "Chhattīsgarh"
    },
    {
      "city": "Imphāl",
      "latitude": 24.8200,
      "longitude": 93.9500,
      "state": "Manipur"
    },
    {
      "city": "Anantapur",
      "latitude": 14.6833,
      "longitude": 77.6000,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Etāwah",
      "latitude": 26.7855,
      "longitude": 79.0150,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Rāichūr",
      "latitude": 16.2104,
      "longitude": 77.3550,
      "state": "Karnātaka"
    },
    {
      "city": "Ongole",
      "latitude": 15.5000,
      "longitude": 80.0500,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Bharatpur",
      "latitude": 27.2172,
      "longitude": 77.4900,
      "state": "Rājasthān"
    },
    {
      "city": "Begusarai",
      "latitude": 25.4200,
      "longitude": 86.1300,
      "state": "Bihār"
    },
    {
      "city": "Sonīpat",
      "latitude": 28.9958,
      "longitude": 77.0114,
      "state": "Haryāna"
    },
    {
      "city": "Rāmgundam",
      "latitude": 18.8000,
      "longitude": 79.4500,
      "state": "Telangana"
    },
    {
      "city": "Hāpur",
      "latitude": 28.7437,
      "longitude": 77.7628,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Uluberiya",
      "latitude": 22.4700,
      "longitude": 88.1100,
      "state": "West Bengal"
    },
    {
      "city": "Porbandar",
      "latitude": 21.6425,
      "longitude": 69.6047,
      "state": "Gujarāt"
    },
    {
      "city": "Pāli",
      "latitude": 25.7725,
      "longitude": 73.3233,
      "state": "Rājasthān"
    },
    {
      "city": "Vizianagaram",
      "latitude": 18.1167,
      "longitude": 83.4167,
      "state": "Andhra Pradesh"
    },
    {
      "city": "Puducherry",
      "latitude": 11.9300,
      "longitude": 79.8300,
      "state": "Puducherry"
    },
    {
      "city": "Karnāl",
      "latitude": 29.6804,
      "longitude": 76.9700,
      "state": "Haryāna"
    },
    {
      "city": "Nāgercoil",
      "latitude": 8.1700,
      "longitude": 77.4300,
      "state": "Tamil Nādu"
    },
    {
      "city": "Tanjore",
      "latitude": 10.8000,
      "longitude": 79.1500,
      "state": "Tamil Nādu"
    },
    {
      "city": "Sambhal",
      "latitude": 28.5800,
      "longitude": 78.5500,
      "state": "Uttar Pradesh"
    },
    {
      "city": "Shimla",
      "latitude": 31.1033,
      "longitude": 77.1722,
      "state": "Himāchal Pradesh"
    },
    {
      "city": "Ghāndīnagar",
      "latitude": 23.2200,
      "longitude": 72.6800,
      "state": "Gujarāt"
    },
    {
      "city": "Shillong",
      "latitude": 25.5744,
      "longitude": 91.8789,
      "state": "Meghālaya"
    },
    {
      "city": "New Delhi",
      "latitude": 28.7000,
      "longitude": 77.2000,
      "state": "Delhi"
    },
    {
      "city": "Port Blair",
      "latitude": 11.6667,
      "longitude": 92.7500,
      "state": "Andaman and Nicobar Islands"
    },
    {
      "city": "Gangtok",
      "latitude": 27.3300,
      "longitude": 88.6200,
      "state": "Sikkim"
    },
    {
      "city": "Kohīma",
      "latitude": 25.6667,
      "longitude": 94.1194,
      "state": "Nāgāland"
    },
    {
      "city": "Itānagar",
      "latitude": 27.1000,
      "longitude": 93.6200,
      "state": "Arunāchal Pradesh"
    },
    {
      "city": "Panaji",
      "latitude": 15.4800,
      "longitude": 73.8300,
      "state": "Goa"
    },
    {
      "city": "Damān",
      "latitude": 20.4170,
      "longitude": 72.8500,
      "state": "Gujarāt"
    },
    {
      "city": "Kavaratti",
      "latitude": 10.5626,
      "longitude": 72.6369,
      "state": "Lakshadweep"
    },
    {
      "city": "Bengaluru",
      "latitude": 12.9716,
      "longitude": 77.5946,
      "state": "Karnātaka"
    }
  ]


  export default cities;