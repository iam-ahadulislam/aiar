function sendMail() {

    let parms = {
        name: document.getElementById("contact-name").value, // Added `.value` here
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("subject").value,
        phone: document.getElementById("contact-phone").value,
        message: document.getElementById("contact-message").value,
    };

    emailjs.send("service_hah3n0w", "template_2sclhwt", parms)
    .then(function(response) {
        alert("Email Sent!!");
    })
    .catch(function(error) {
        alert("Failed to send email: " + error);
    });
}


const COUNTRY_CODES = {
    'AF': 'Afghanistan', 'AL': 'Albania', 'DZ': 'Algeria', 'AS': 'American Samoa', 'AD': 'Andorra',
    'AO': 'Angola', 'AI': 'Anguilla', 'AQ': 'Antarctica', 'AG': 'Antigua and Barbuda', 'AR': 'Argentina',
    'AM': 'Armenia', 'AW': 'Aruba', 'AU': 'Australia', 'AT': 'Austria', 'AZ': 'Azerbaijan',
    'BS': 'Bahamas', 'BH': 'Bahrain', 'BD': 'Bangladesh', 'BB': 'Barbados', 'BY': 'Belarus',
    'BE': 'Belgium', 'BZ': 'Belize', 'BJ': 'Benin', 'BM': 'Bermuda', 'BT': 'Bhutan',
    'BO': 'Bolivia', 'BA': 'Bosnia and Herzegovina', 'BW': 'Botswana', 'BV': 'Bouvet Island', 'BR': 'Brazil',
    'IO': 'British Indian Ocean Territory', 'BN': 'Brunei Darussalam', 'BG': 'Bulgaria', 'BF': 'Burkina Faso', 'BI': 'Burundi',
    'KH': 'Cambodia', 'CM': 'Cameroon', 'CA': 'Canada', 'CV': 'Cape Verde', 'KY': 'Cayman Islands',
    'CF': 'Central African Republic', 'TD': 'Chad', 'CL': 'Chile', 'CN': 'China', 'CX': 'Christmas Island',
    'CC': 'Cocos (Keeling) Islands', 'CO': 'Colombia', 'KM': 'Comoros', 'CG': 'Congo', 'CD': 'Congo, Democratic Republic',
    'CK': 'Cook Islands', 'CR': 'Costa Rica', 'CI': 'Cote D\'Ivoire', 'HR': 'Croatia', 'CU': 'Cuba',
    'CY': 'Cyprus', 'CZ': 'Czech Republic', 'DK': 'Denmark', 'DJ': 'Djibouti', 'DM': 'Dominica',
    'DO': 'Dominican Republic', 'EC': 'Ecuador', 'EG': 'Egypt', 'SV': 'El Salvador', 'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea', 'EE': 'Estonia', 'ET': 'Ethiopia', 'FK': 'Falkland Islands (Malvinas)', 'FO': 'Faroe Islands',
    'FJ': 'Fiji', 'FI': 'Finland', 'FR': 'France', 'GF': 'French Guiana', 'PF': 'French Polynesia',
    'TF': 'French Southern Territories', 'GA': 'Gabon', 'GM': 'Gambia', 'GE': 'Georgia', 'DE': 'Germany',
    'GH': 'Ghana', 'GI': 'Gibraltar', 'GR': 'Greece', 'GL': 'Greenland', 'GD': 'Grenada',
    'GP': 'Guadeloupe', 'GU': 'Guam', 'GT': 'Guatemala', 'GN': 'Guinea', 'GW': 'Guinea-Bissau',
    'GY': 'Guyana', 'HT': 'Haiti', 'HM': 'Heard and McDonald Islands', 'HN': 'Honduras', 'HK': 'Hong Kong',
    'HU': 'Hungary', 'IS': 'Iceland', 'IN': 'India', 'ID': 'Indonesia', 'IR': 'Iran',
    'IQ': 'Iraq', 'IE': 'Ireland', 'IL': 'Israel', 'IT': 'Italy', 'JM': 'Jamaica',
    'JP': 'Japan', 'JO': 'Jordan', 'KZ': 'Kazakhstan', 'KE': 'Kenya', 'KI': 'Kiribati',
    'KP': 'Korea, North', 'KR': 'Korea, South', 'KW': 'Kuwait', 'KG': 'Kyrgyzstan', 'LA': 'Laos',
    'LV': 'Latvia', 'LB': 'Lebanon', 'LS': 'Lesotho', 'LR': 'Liberia', 'LY': 'Libya',
    'LI': 'Liechtenstein', 'LT': 'Lithuania', 'LU': 'Luxembourg', 'MO': 'Macao', 'MK': 'Macedonia',
    'MG': 'Madagascar', 'MW': 'Malawi', 'MY': 'Malaysia', 'MV': 'Maldives', 'ML': 'Mali',
    'MT': 'Malta', 'MH': 'Marshall Islands', 'MQ': 'Martinique', 'MR': 'Mauritania', 'MU': 'Mauritius',
    'YT': 'Mayotte', 'MX': 'Mexico', 'FM': 'Micronesia', 'MD': 'Moldova', 'MC': 'Monaco',
    'MN': 'Mongolia', 'MS': 'Montserrat', 'MA': 'Morocco', 'MZ': 'Mozambique', 'MM': 'Myanmar',
    'NA': 'Namibia', 'NR': 'Nauru', 'NP': 'Nepal', 'NL': 'Netherlands', 'AN': 'Netherlands Antilles',
    'NC': 'New Caledonia', 'NZ': 'New Zealand', 'NI': 'Nicaragua', 'NE': 'Niger', 'NG': 'Nigeria',
    'NU': 'Niue', 'NF': 'Norfolk Island', 'MP': 'Northern Mariana Islands', 'NO': 'Norway', 'OM': 'Oman',
    'PK': 'Pakistan', 'PW': 'Palau', 'PS': 'Palestine', 'PA': 'Panama', 'PG': 'Papua New Guinea',
    'PY': 'Paraguay', 'PE': 'Peru', 'PH': 'Philippines', 'PN': 'Pitcairn', 'PL': 'Poland',
    'PT': 'Portugal', 'PR': 'Puerto Rico', 'QA': 'Qatar', 'RE': 'Reunion', 'RO': 'Romania',
    'RU': 'Russian Federation', 'RW': 'Rwanda', 'SH': 'Saint Helena', 'KN': 'Saint Kitts and Nevis', 'LC': 'Saint Lucia',
    'PM': 'Saint Pierre and Miquelon', 'VC': 'Saint Vincent and the Grenadines', 'WS': 'Samoa', 'SM': 'San Marino', 'ST': 'Sao Tome and Principe',
    'SA': 'Saudi Arabia', 'SN': 'Senegal', 'SC': 'Seychelles', 'SL': 'Sierra Leone', 'SG': 'Singapore',
    'SK': 'Slovakia', 'SI': 'Slovenia', 'SB': 'Solomon Islands', 'SO': 'Somalia', 'ZA': 'South Africa',
    'GS': 'South Georgia and the South Sandwich Islands', 'ES': 'Spain', 'LK': 'Sri Lanka', 'SD': 'Sudan', 'SR': 'Suriname',
    'SJ': 'Svalbard and Jan Mayen', 'SZ': 'Swaziland', 'SE': 'Sweden', 'CH': 'Switzerland', 'SY': 'Syrian Arab Republic',
    'TW': 'Taiwan', 'TJ': 'Tajikistan', 'TZ': 'Tanzania', 'TH': 'Thailand', 'TL': 'Timor-Leste',
    'TG': 'Togo', 'TK': 'Tokelau', 'TO': 'Tonga', 'TT': 'Trinidad and Tobago', 'TN': 'Tunisia',
    'TR': 'Turkey', 'TM': 'Turkmenistan', 'TC': 'Turks and Caicos Islands', 'TV': 'Tuvalu', 'UG': 'Uganda',
    'UA': 'Ukraine', 'AE': 'United Arab Emirates', 'GB': 'United Kingdom', 'US': 'United States', 'UM': 'US Minor Outlying Islands',
    'UY': 'Uruguay', 'UZ': 'Uzbekistan', 'VU': 'Vanuatu', 'VA': 'Vatican City', 'VE': 'Venezuela',
    'VN': 'Vietnam', 'VG': 'Virgin Islands, British', 'VI': 'Virgin Islands, U.S.', 'WF': 'Wallis and Futuna', 'EH': 'Western Sahara',
    'YE': 'Yemen', 'ZM': 'Zambia', 'ZW': 'Zimbabwe'
};

// --- Helper Function to convert Country Code to Flag Emoji---
function countryCodeToFlag(countryCode) {
    if (!countryCode) return '';
    const OFFSET = 127397; 
    
    return countryCode
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(char.charCodeAt(0) + OFFSET))
        .join('');
}



async function getIPLocation() {
    const ipDisplayElement = document.getElementById('ip-address-display');
    const countryDisplayElement = document.getElementById('country-display');
    
    ipDisplayElement.textContent = "Loading IP...";
    countryDisplayElement.textContent = "Loading Country...";
    
    try {
        const response = await fetch('https://ipinfo.io/json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.ip && data.country) {
            ipDisplayElement.textContent = data.ip;
            
            // Look up the full name, falling back to the code if not found
            const countryCode = data.country.toUpperCase();
            const countryName = COUNTRY_CODES[countryCode] || countryCode;
            
            // Generate the flag emoji
            const flagEmoji = countryCodeToFlag(countryCode);
            
            // Display Flag + Full Name + Code
            countryDisplayElement.textContent = `${flagEmoji} ${countryName} (${countryCode})`; 
        } else {
            console.error('IPinfo returned incomplete data:', data);
            ipDisplayElement.textContent = 'Data Missing';
            countryDisplayElement.textContent = 'Data Missing';
        }
        
    } catch (error) {
        console.error('Failed to fetch IP/Location:', error);
        ipDisplayElement.textContent = 'API Blocked/Failed';
        countryDisplayElement.textContent = 'API Blocked/Failed';
    }
}


function getDeviceAndBrowser() {
    const userAgent = navigator.userAgent;

    // A. Device Type Detection
    let deviceType = "Desktop";
    if (/(Tablet|iPad|android(?!.*mobile))/i.test(userAgent)) {
        deviceType = "Tablet";
    } else if (/(Mobile|iPhone|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop)/i.test(userAgent)) {
        deviceType = "Mobile";
    }

    // B. OS Detection
    let os = "Unknown OS";
    if (/(Windows)/i.test(userAgent)) os = "Windows";
    else if (/(Macintosh|Mac OS X)/i.test(userAgent)) os = "macOS";
    else if (/(iPhone|iPad|iPod)/i.test(userAgent)) os = "iOS";
    else if (/(Android)/i.test(userAgent)) os = "Android";
    else if (/(Linux)/i.test(userAgent)) os = "Linux";

    // C. Browser Detection
    let browser = "Unknown Browser";
    if (/(MSIE|Trident)/i.test(userAgent)) {
        browser = "Internet Explorer";
    } else if (/(Edg)/i.test(userAgent)) {
        browser = "Microsoft Edge";
    } else if (/(Chrome)/i.test(userAgent)) {
        browser = "Chrome";
    } else if (/(Firefox)/i.test(userAgent)) {
         browser = "Firefox";
    } else if (/(Safari)/i.test(userAgent) && !/(Chrome)/i.test(userAgent)) {
        browser = "Safari";
    } else if (/(Opera|OPR)/i.test(userAgent)) {
        browser = "Opera";
    }

    // D. Update HTML Elements
    document.getElementById('device-type-display').textContent = deviceType;
    document.getElementById('os-display').textContent = os;
    document.getElementById('browser-display').textContent = browser;
}


function initialize() {
    // 1. Get the public IP address, Country, and Flag
    getIPLocation();
    
    // 2. Get the device/browser information
    getDeviceAndBrowser();
}

// Run the initialization when the page has fully loaded
window.onload = initialize;
