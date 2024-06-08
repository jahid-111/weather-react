const countriesData = [
  { location: "Afghanistan", latitude: "33.93911", longitude: "67.709953" },
  { location: "Armenia", latitude: "40.069099", longitude: "45.038189" },
  { location: "Azerbaijan", latitude: "40.143105", longitude: "47.576927" },
  { location: "Bahrain", latitude: "26.0667", longitude: "50.5577" },
  { location: "Bangladesh", latitude: "23.685", longitude: "90.3563" },
  { location: "Bhutan", latitude: "27.5142", longitude: "90.4336" },
  { location: "Brunei", latitude: "4.5353", longitude: "114.7277" },
  { location: "Cambodia", latitude: "12.5657", longitude: "104.991" },
  { location: "China", latitude: "35.8617", longitude: "104.1954" },
  { location: "Georgia", latitude: "42.3154", longitude: "43.3569" },
  { location: "India", latitude: "20.5937", longitude: "78.9629" },
  { location: "Indonesia", latitude: "-0.7893", longitude: "113.9213" },
  { location: "Iran", latitude: "32.4279", longitude: "53.688" },
  { location: "Iraq", latitude: "33.2232", longitude: "43.6793" },
  { location: "Israel", latitude: "31.046051", longitude: "34.851612" },
  { location: "Japan", latitude: "36.204824", longitude: "138.252924" },
  { location: "Jordan", latitude: "30.585164", longitude: "36.238414" },
  { location: "Kazakhstan", latitude: "48.019573", longitude: "66.923684" },
  { location: "Kuwait", latitude: "29.31166", longitude: "47.481766" },
  { location: "Kyrgyzstan", latitude: "41.20438", longitude: "74.766098" },
  { location: "Laos", latitude: "19.85627", longitude: "102.495496" },
  { location: "Lebanon", latitude: "33.854721", longitude: "35.862285" },
  { location: "Malaysia", latitude: "4.210484", longitude: "101.975766" },
  { location: "Maldives", latitude: "3.202778", longitude: "73.22068" },
  { location: "Mongolia", latitude: "46.862496", longitude: "103.846656" },
  {
    location: "Myanmar (Burma)",
    latitude: "21.916221",
    longitude: "95.955974",
  },
  { location: "Nepal", latitude: "28.394857", longitude: "84.124008" },
  { location: "North Korea", latitude: "40.339852", longitude: "127.510093" },
  { location: "Oman", latitude: "21.512583", longitude: "55.923255" },
  { location: "Pakistan", latitude: "30.375321", longitude: "69.345116" },
  { location: "Palestine", latitude: "31.952162", longitude: "35.233154" },
  { location: "Philippines", latitude: "12.879721", longitude: "121.774017" },
  { location: "Qatar", latitude: "25.354826", longitude: "51.183884" },
  { location: "Saudi Arabia", latitude: "23.885942", longitude: "45.079162" },
  { location: "Singapore", latitude: "1.352083", longitude: "103.819836" },
  { location: "South Korea", latitude: "35.907757", longitude: "127.766922" },
  { location: "Sri Lanka", latitude: "7.873054", longitude: "80.771797" },
  { location: "Syria", latitude: "34.802075", longitude: "38.996815" },
  { location: "Tajikistan", latitude: "38.861034", longitude: "71.276093" },
  { location: "Thailand", latitude: "15.870032", longitude: "100.992541" },
  { location: "Timor-Leste", latitude: "-8.874217", longitude: "125.727539" },
  { location: "Turkmenistan", latitude: "38.969719", longitude: "59.556278" },
  {
    location: "United Arab Emirates",
    latitude: "23.424076",
    longitude: "53.847818",
  },
  { location: "Jeddah", latitude: "21.7646819", longitude: "39.1231357" },
  { location: "Uzbekistan", latitude: "41.377491", longitude: "64.585262" },
  { location: "Vietnam", latitude: "14.058324", longitude: "108.277199" },
  { location: "Yemen", latitude: "15.552727", longitude: "48.516388" },

  // Anoter Data

  /*DHAKA*/ { location: "Dhaka", latitude: "23.8103", longitude: "90.4125" },
  { location: "Faridpur", latitude: "23.6070", longitude: "89.8420" },
  { location: "Gazipur", latitude: "23.9999", longitude: "90.4203" },
  { location: "Gopalganj", latitude: "23.0056", longitude: "89.8266" },
  { location: "Kishoreganj", latitude: "24.4449", longitude: "90.7766" },
  { location: "Madaripur", latitude: "23.1641", longitude: "90.1890" },
  { location: "Manikganj", latitude: "23.8531", longitude: "90.0047" },
  { location: "Munshiganj", latitude: "23.5422", longitude: "90.5305" },
  { location: "Narayanganj", latitude: "23.6337", longitude: "90.4960" },
  { location: "Narsingdi", latitude: "23.9230", longitude: "90.7183" },
  { location: "Rajbari", latitude: "23.7576", longitude: "89.6440" },
  { location: "Shariatpur", latitude: "23.2423", longitude: "90.4348" },
  { location: "Tangail", latitude: "24.2513", longitude: "89.9163" },
  /*CHITTAGONG */ {
    location: "Chittagong",
    latitude: "22.3569",
    longitude: "91.7832",
  },
  {
    location: "Bandarban",
    latitude: "22.1953",
    longitude: "92.2184",
  },
  { location: "Brahmanbaria", latitude: "23.9571", longitude: "91.1117" },
  { location: "Chandpur", latitude: "23.2333", longitude: "90.6633" },
  { location: "Chattogram", latitude: "22.3569", longitude: "91.7832" },
  { location: "Cumilla", latitude: "23.4607", longitude: "91.1809" },
  { location: "Cox's Bazar", latitude: "21.4272", longitude: "92.0058" },
  { location: "Feni", latitude: "23.0159", longitude: "91.3960" },
  { location: "Khagrachari", latitude: "23.1193", longitude: "91.9840" },
  { location: "Lakshmipur", latitude: "22.9467", longitude: "90.8307" },
  { location: "Noakhali", latitude: "22.8696", longitude: "91.0995" },
  { location: "Rangamati", latitude: "22.7324", longitude: "92.2985" },
  { location: "Khulna", latitude: "22.8456", longitude: "89.5403" },
  { location: "Rajshahi", latitude: "24.3636", longitude: "88.6241" },
  { location: "Sylhet", latitude: "24.8949", longitude: "91.8687" },
  { location: "Barisal", latitude: "22.7010", longitude: "90.3535" },
  { location: "Rangpur", latitude: "25.7439", longitude: "89.2752" },
  { location: "Mymensingh", latitude: "24.7471", longitude: "90.4203" },
];

function getLocations() {
  return countriesData;
}

function getLocationByName(location) {
  if (!location) return null;
  const filtered = countriesData.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const dedfaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return dedfaultLocation;
  }
}

export { getLocationByName, getLocations };
