(function( $ ){
// region name.    
var region_list = [
{'name':"Africa"},
{'name':"Antarctica"},
{'name':"Arctic"},
{'name':"Asia"},
{'name':"Central America"},
{'name':"Europe"},
{'name':"Middle East"},
{'name':"North America"},
{'name':"Oceania"},
{'name':"South America"}
];
    
// region with country.
 var region_country_list = 
[{"country_name" : "Afghanistan" , "country_code" : "AF" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Albania" , "country_code" : "AL" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Algeria" , "country_code" : "DZ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "American Samoa" , "country_code" : "AS" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Andorra" , "country_code" : "AD" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Angola" , "country_code" : "AO" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Anguilla" , "country_code" : "AI" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Antarctica" , "country_code" : "AQ" , "region_name" : "Antarctica" , "region_code" : "ANT"},
{"country_name" : "Antigua and Barbuda" , "country_code" : "AG" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Argentina" , "country_code" : "AR" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Armenia" , "country_code" : "AM" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Aruba" , "country_code" : "AW" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Australia" , "country_code" : "AU" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Austria" , "country_code" : "AT" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Azerbaijan" , "country_code" : "AZ" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Bahamas, The" , "country_code" : "BS" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Bahrain" , "country_code" : "BH" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Bangladesh" , "country_code" : "BD" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Barbados" , "country_code" : "BB" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Belarus" , "country_code" : "BY" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Belgium" , "country_code" : "BE" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Belize" , "country_code" : "BZ" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Benin" , "country_code" : "BJ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Bermuda" , "country_code" : "BM" , "region_name" : "North America" , "region_code" : "NAM"},
{"country_name" : "Bhutan" , "country_code" : "BT" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Bolivia" , "country_code" : "BO" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Bonaire" , "country_code" : "BQ" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Bosnia and Herzegovina" , "country_code" : "BA" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Botswana" , "country_code" : "BW" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Bouvet Island" , "country_code" : "BV" , "region_name" : "Antarctica" , "region_code" : "ANT"},
{"country_name" : "Brazil" , "country_code" : "BR" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "British Indian Ocean Territory" , "country_code" : "IO" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "British Virgin Islands" , "country_code" : "VG" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Brunei" , "country_code" : "BN" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Bulgaria" , "country_code" : "BG" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Burkina Faso" , "country_code" : "BF" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Burundi" , "country_code" : "BI" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Cambodia" , "country_code" : "KH" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Cameroon" , "country_code" : "CM" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Canada" , "country_code" : "CA" , "region_name" : "North America" , "region_code" : "NAM"},
{"country_name" : "Cape Verde" , "country_code" : "CV" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Cayman Islands" , "country_code" : "KY" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Central African Republic" , "country_code" : "CF" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Chad" , "country_code" : "TD" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Chile" , "country_code" : "CL" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "China" , "country_code" : "CN" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Christmas Island" , "country_code" : "CX" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Cocos (Keeling) Islands" , "country_code" : "CC" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Colombia" , "country_code" : "CO" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Comoros" , "country_code" : "KM" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Cook Islands" , "country_code" : "CK" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Costa Rica" , "country_code" : "CR" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Cote D'Ivoire" , "country_code" : "CI" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Croatia" , "country_code" : "HR" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Cuba" , "country_code" : "CU" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Curacao" , "country_code" : "CW" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Cyprus" , "country_code" : "CY" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Czech Republic" , "country_code" : "CZ" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Democratic Republic of the Congo" , "country_code" : "CD" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Denmark" , "country_code" : "DK" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Djibouti" , "country_code" : "DJ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Dominica" , "country_code" : "DM" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Dominican Republic" , "country_code" : "DO" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Ecuador" , "country_code" : "EC" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Egypt" , "country_code" : "EG" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "El Salvador" , "country_code" : "SV" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Equatorial Guinea" , "country_code" : "GQ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Eritrea" , "country_code" : "ER" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Estonia" , "country_code" : "EE" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Ethiopia" , "country_code" : "ET" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Falkland Islands" , "country_code" : "FK" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Faroe Islands" , "country_code" : "FO" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Federated States of Micronesia" , "country_code" : "FM" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Fiji" , "country_code" : "FJ" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Finland" , "country_code" : "FI" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "France" , "country_code" : "FR" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "French Guiana" , "country_code" : "GF" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "French Polynesia" , "country_code" : "PF" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "French Southern Territories" , "country_code" : "TF" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Gabon" , "country_code" : "GA" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Gambia, The" , "country_code" : "GM" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Georgia" , "country_code" : "GE" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Germany" , "country_code" : "DE" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Ghana" , "country_code" : "GH" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Gibraltar" , "country_code" : "GI" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Greece" , "country_code" : "GR" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Greenland" , "country_code" : "GL" , "region_name" : "Arctic" , "region_code" : "ARC"},
{"country_name" : "Grenada" , "country_code" : "GD" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Guadeloupe" , "country_code" : "GP" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Guam" , "country_code" : "GU" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Guatemala" , "country_code" : "GT" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Guernsey" , "country_code" : "GG" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Guinea" , "country_code" : "GN" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Guinea-Bissau" , "country_code" : "GW" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Guyana" , "country_code" : "GY" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Haiti" , "country_code" : "HT" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Heard Island and McDonald Islands" , "country_code" : "HM" , "region_name" : "Antarctica" , "region_code" : "ANT"},
{"country_name" : "Honduras" , "country_code" : "HN" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Hong Kong" , "country_code" : "HK" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Hungary" , "country_code" : "HU" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Iceland" , "country_code" : "IS" , "region_name" : "Arctic" , "region_code" : "ARC"},
{"country_name" : "India" , "country_code" : "IN" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Indonesia" , "country_code" : "ID" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Iran" , "country_code" : "IR" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Iraq" , "country_code" : "IQ" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Ireland" , "country_code" : "IE" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Isle of Man" , "country_code" : "IM" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Israel" , "country_code" : "IL" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Italy" , "country_code" : "IT" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Jamaica" , "country_code" : "JM" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Japan" , "country_code" : "JP" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Jersey" , "country_code" : "JE" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Jordan" , "country_code" : "JO" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Kazakhstan" , "country_code" : "KZ" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Kenya" , "country_code" : "KE" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Kiribati" , "country_code" : "KI" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Kosovo" , "country_code" : "XK" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Kuwait" , "country_code" : "KW" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Kyrgyzstan" , "country_code" : "KG" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Laos" , "country_code" : "LA" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Latvia" , "country_code" : "LV" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Lebanon" , "country_code" : "LB" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Lesotho" , "country_code" : "LS" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Liberia" , "country_code" : "LR" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Libya" , "country_code" : "LY" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Liechtenstein" , "country_code" : "LI" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Lithuania" , "country_code" : "LT" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Luxembourg" , "country_code" : "LU" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Macau" , "country_code" : "MO" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Macedonia" , "country_code" : "MK" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Madagascar" , "country_code" : "MG" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Malawi" , "country_code" : "MW" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Malaysia" , "country_code" : "MY" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Maldives" , "country_code" : "MV" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Mali" , "country_code" : "ML" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Malta" , "country_code" : "MT" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Marshall Islands" , "country_code" : "MH" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Martinique" , "country_code" : "MQ" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Mauritania" , "country_code" : "MR" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Mauritius" , "country_code" : "MU" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Mayotte" , "country_code" : "YT" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Mexico" , "country_code" : "MX" , "region_name" : "North America" , "region_code" : "NAM"},
{"country_name" : "Moldova" , "country_code" : "MD" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Monaco" , "country_code" : "MC" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Mongolia" , "country_code" : "MN" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Montenegro" , "country_code" : "ME" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Montserrat" , "country_code" : "MS" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Morocco" , "country_code" : "MA" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Mozambique" , "country_code" : "MZ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Myanmar" , "country_code" : "MM" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Namibia" , "country_code" : "NA" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Nauru" , "country_code" : "NR" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Nepal" , "country_code" : "NP" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Netherlands" , "country_code" : "NL" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "New Caledonia" , "country_code" : "NC" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "New Zealand" , "country_code" : "NZ" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Nicaragua" , "country_code" : "NI" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Niger" , "country_code" : "NE" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Nigeria" , "country_code" : "NG" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Niue" , "country_code" : "NU" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Norfolk Island" , "country_code" : "NF" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "North Korea" , "country_code" : "KP" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Northern Mariana Islands" , "country_code" : "MP" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Norway" , "country_code" : "NO" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Oman" , "country_code" : "OM" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Pakistan" , "country_code" : "PK" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Palau" , "country_code" : "PW" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Palestine" , "country_code" : "PS" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Panama" , "country_code" : "PA" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Papua New Guinea" , "country_code" : "PG" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Paraguay" , "country_code" : "PY" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Peru" , "country_code" : "PE" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Philippines" , "country_code" : "PH" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Pitcairn Islands" , "country_code" : "PN" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Poland" , "country_code" : "PL" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Portugal" , "country_code" : "PT" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Puerto Rico" , "country_code" : "PR" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Qatar" , "country_code" : "QA" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Republic of the Congo" , "country_code" : "CG" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Reunion" , "country_code" : "RE" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Romania" , "country_code" : "RO" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Russia" , "country_code" : "RU" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Rwanda" , "country_code" : "RW" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Saint Barthelemy" , "country_code" : "BL" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Saint Helena" , "country_code" : "SH" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Saint Kitts and Nevis" , "country_code" : "KN" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Saint Lucia" , "country_code" : "LC" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Saint Martin" , "country_code" : "MF" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Saint Pierre and Miquelon" , "country_code" : "PM" , "region_name" : "North America" , "region_code" : "NAM"},
{"country_name" : "Saint Vincent and the Grenadines" , "country_code" : "VC" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Samoa" , "country_code" : "WS" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "San Marino" , "country_code" : "SM" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Sao Tome and Principe" , "country_code" : "ST" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Saudi Arabia" , "country_code" : "SA" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Senegal" , "country_code" : "SN" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Serbia" , "country_code" : "RS" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Seychelles" , "country_code" : "SC" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Sierra Leone" , "country_code" : "SL" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Singapore" , "country_code" : "SG" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Sint Maarten" , "country_code" : "SX" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Slovakia" , "country_code" : "SK" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Slovenia" , "country_code" : "SI" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Solomon Islands" , "country_code" : "SB" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Somalia" , "country_code" : "SO" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "South Africa" , "country_code" : "ZA" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "South Georgia and South Sandwich Islands" , "country_code" : "GS" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "South Korea" , "country_code" : "KR" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "South Sudan" , "country_code" : "SS" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Spain" , "country_code" : "ES" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Spratly Islands" , "country_code" : "SP" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Sri Lanka" , "country_code" : "LK" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Sudan" , "country_code" : "SD" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Suriname" , "country_code" : "SR" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Svalbard And Jan Mayen" , "country_code" : "SJ" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Swaziland" , "country_code" : "SZ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Sweden" , "country_code" : "SE" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Switzerland" , "country_code" : "CH" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Syria" , "country_code" : "SY" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Taiwan" , "country_code" : "TW" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Tajikistan" , "country_code" : "TJ" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Tanzania" , "country_code" : "TZ" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Thailand" , "country_code" : "TH" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Timor-Leste" , "country_code" : "TL" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Togo" , "country_code" : "TG" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Tokelau" , "country_code" : "TK" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Tonga" , "country_code" : "TO" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Trinidad and Tobago" , "country_code" : "TT" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Tunisia" , "country_code" : "TN" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Turkey" , "country_code" : "TR" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Turkmenistan" , "country_code" : "TM" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Turks and Caicos Islands" , "country_code" : "TC" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Tuvalu" , "country_code" : "TV" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Uganda" , "country_code" : "UG" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Ukraine" , "country_code" : "UA" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "United Arab Emirates" , "country_code" : "AE" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "United Kingdom" , "country_code" : "GB" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "United States" , "country_code" : "US" , "region_name" : "North America" , "region_code" : "NAM"},
{"country_name" : "United States Minor Outlying Islands" , "country_code" : "UM" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Uruguay" , "country_code" : "UY" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "US Virgin Islands" , "country_code" : "VI" , "region_name" : "Central America" , "region_code" : "CAC"},
{"country_name" : "Uzbekistan" , "country_code" : "UZ" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Vanuatu" , "country_code" : "VU" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Vatican City" , "country_code" : "VA" , "region_name" : "Europe", "region_code" :"EUR"},
{"country_name" : "Venezuela" , "country_code" : "VE" , "region_name" : "South America" , "region_code" : "SAM"},
{"country_name" : "Vietnam" , "country_code" : "VN" , "region_name" : "Asia" , "region_code" : "ASI"},
{"country_name" : "Wallis and Futuna" , "country_code" : "WF" , "region_name" : "Oceania" , "region_code" : "OCN"},
{"country_name" : "Western Sahara" , "country_code" : "EH" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Yemen" , "country_code" : "YE" , "region_name" : "Middle East" , "region_code" : "MEA"},
{"country_name" : "Zambia" , "country_code" : "ZM" , "region_name" : "Africa" , "region_code" : "AFR"},
{"country_name" : "Zimbabwe" , "country_code" : "ZW" , "region_name" : "Africa" , "region_code" : "AFR"}];

    jQuery(document).ready(function(){
    var region_array = region_list;
        var region ='<option value="">select region</option>';
        for(var i=0; i<region_array.length; i++){
        region +='<option value="'+region_array[i].name+'">'+region_array[i].name+'</option>';
        }
        jQuery('.region-select-box').append(region);
      _append_region_country();
      _dynamic_section();
      _remove_dynamic_section();
      _selected_exist_region();
    });
// region append.
    function _append_region($this){
        var region_array = region_list;
        var region ='<option value="">select region</option>';
        for(var i=0; i<region_array.length; i++){
        region +='<option value="'+region_array[i].name+'">'+region_array[i].name+'</option>';
        }
        $this.find('.region-select-box').append(region);
    }
  
// add-dynamic-section.	
	function _dynamic_section(){
	 	var section ='<div class="col-md-3"><div class="form-group"><label for="region">Region:</label><select class="form-control region-select-box" id="region" name="region[]" required></select></div></div><div class="col-md-3"><div class="form-group"><label for="country">Country:</label><select class="form-control country-select-box" id="country" ><option value="">select country</option></select><input type="hidden" class="country-hidden-input-box" name="country[country][]" value=""/></div></div><div class="col-md-4"><div class="form-group"><label for="url">URL:</label><input type="url" class="form-control" id="url" placeholder="Enter url" name="url[]" required/></div></div><div class="col-md-2" style="width:80px"><div class="form-group"><label for="add" style="color: transparent;">add:</label><button type="button" class="form-control minus"><i class="fa fa-minus"></i></button></div></div>';
       var $r = 1;
	  jQuery(document).on('click','button.add',function(e){
	  	e.preventDefault()
	  	jQuery('div.dynamic-section-outer').append('<div class="row clone-div" id="clone_'+$r+'">'+section+'</div>');
          var $this = jQuery('#clone_'+$r);
	  	_append_region($this);
        $r++;
      // add submit button after visble one row.
        if(!jQuery('form').find('div').hasClass('submit-button')){
        jQuery('form').append('<div class="row submit-button"><div class="col-md-12"><button type="submit" class="btn btn-default" name="submit">Submit</button></div></div>');
        }
	  });
	
	}
// remove-dynamic-section.	
   function _remove_dynamic_section(){
	  jQuery(document).on('click','button.minus',function(e){
	  	e.preventDefault()
	  	 if (confirm("Are you sure?")) {
	  	   jQuery(this).closest('div.clone-div').remove();
	  	 }
	     return false;
	  });
	
	}
// region on change event then country append.
    function _append_region_country(){
        var region_country_array = region_country_list;
        jQuery(document).on('change','.region-select-box',function(e){
            e.preventDefault()
            jQuery(this).closest('div.col-md-3').next().find('.country-select-box').html('');
            var values = jQuery(this).val();
            var region_country ='<option value="">select country</option>';
            var region_country_code =[];
            for(var i=0; i<region_country_array.length; i++){
                if(region_country_array[i].region_name === values){
                      region_country += '<option value="'+region_country_array[i].country_code+'">'+region_country_array[i].country_name+'</option>';
                      region_country_code.push(region_country_array[i].country_code);    
                     
                   
                }
            }
              jQuery(this).closest('div.col-md-3').next().find('.country-select-box').append(region_country);
              jQuery(this).closest('div.col-md-3').next().find('.country-hidden-input-box').val(region_country_code);
        });

         

    }

    
// region on load event then region selected and then country append.
    function _selected_exist_region(){
       var region_country_array = region_country_list;
        jQuery('.region-select-box').each(function(){
           jQuery(this).closest('div.col-md-3').next().find('.country-select-box').html('');
            var values = jQuery(this).data('val');
            jQuery(this).val(values);
            var region_country ='<option value="">select country</option>';
            var region_country_code =[];
            for(var i=0; i<region_country_array.length; i++){
                if(region_country_array[i].region_name === values){
                    
                      region_country += '<option value="'+region_country_array[i].country_code+'">'+region_country_array[i].country_name+'</option>';
                      region_country_code.push(region_country_array[i].country_code);    
                    
                   
                }
            }
              jQuery(this).closest('div.col-md-3').next().find('.country-select-box').append(region_country);
        _selected_exist_country(jQuery(this));
        });
        
    }

// if empty country on change.
  function _empty_country_on_change($val,$this){
    var region_country_array = region_country_list;
    $this.html('');
              var values = $val;
              var region_country ='<option value="">select country</option>';
              var region_country_code =[];
              for(var i=0; i<region_country_array.length; i++){
                  if(region_country_array[i].region_name === values){
                        region_country += '<option value="'+region_country_array[i].country_code+'">'+region_country_array[i].country_name+'</option>';
                        region_country_code.push(region_country_array[i].country_code);    
                       
                     
                  }
              }
                $this.append(region_country);
                $this.next('.country-hidden-input-box').val(region_country_code);
  }

// region on load event then country selected.
    function _selected_exist_country($this){
        $this.closest('div.col-md-3').next().find('.country-select-box').each(function(){
            var values = jQuery(this).data('val');
            if(values !== ''){
            var countes = countElement(values.split(','));
           if(countes === 1){
             jQuery(this).val(values);
           }
          }
        });
        
    }
    
// country on change event.
    jQuery(document).on('change','.country-select-box',function(e){
            e.preventDefault()
          if(jQuery(this).val() !== ''){
           jQuery(this).next('.country-hidden-input-box').val(jQuery(this).val());
          }else{
           var values = jQuery(this).closest('div.col-md-3').prev().find('.region-select-box').val();
            _empty_country_on_change(values,jQuery(this));
          }  
            
    });

// count array value.
function countElement(array) {
    var count = 0;
    $.each(array, function(i,v) { count++; });
    return count;
}

})( jQuery );