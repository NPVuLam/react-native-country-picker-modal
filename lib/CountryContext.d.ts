import * as React from 'react';
import { TranslationLanguageCode } from './types';
import { getEmojiFlagAsync, getImageFlagAsync, getCountryNameAsync, getCountriesAsync, getLetters, getCountryCallingCodeAsync, getCountryCurrencyAsync, getCountryInfoAsync, search } from './CountryService';
export interface CountryContextParam {
    translation?: TranslationLanguageCode;
    getCountryNameAsync: typeof getCountryNameAsync;
    getImageFlagAsync: typeof getImageFlagAsync;
    getEmojiFlagAsync: typeof getEmojiFlagAsync;
    getCountriesAsync: typeof getCountriesAsync;
    getLetters: typeof getLetters;
    getCountryCallingCodeAsync: typeof getCountryCallingCodeAsync;
    getCountryCurrencyAsync: typeof getCountryCurrencyAsync;
    search: typeof search;
    getCountryInfoAsync: typeof getCountryInfoAsync;
}
export declare const DEFAULT_COUNTRY_CONTEXT: {
    translation: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr";
    getCountryNameAsync: (countryCode?: "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX", translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr") => Promise<string>;
    getImageFlagAsync: (countryCode?: "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX") => Promise<string>;
    getEmojiFlagAsync: (countryCode?: "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX") => Promise<string>;
    getCountriesAsync: (flagType: import("./types").FlagType, translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr", region?: "Africa" | "Americas" | "Antarctic" | "Asia" | "Europe" | "Oceania" | undefined, subregion?: "Southern Asia" | "Southern Europe" | "Northern Africa" | "Polynesia" | "Middle Africa" | "Caribbean" | "South America" | "Western Asia" | "Australia and New Zealand" | "Western Europe" | "Eastern Europe" | "Central America" | "Western Africa" | "North America" | "Southern Africa" | "Eastern Africa" | "South-Eastern Asia" | "Eastern Asia" | "Northern Europe" | "Melanesia" | "Micronesia" | "Central Asia" | "Central Europe" | undefined, countryCodes?: ("AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX")[] | undefined, excludeCountries?: ("AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX")[] | undefined, preferredCountries?: ("AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX")[] | undefined, withAlphaFilter?: boolean | undefined) => Promise<import("./types").Country[]>;
    getCountryCallingCodeAsync: (countryCode: "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX") => Promise<string>;
    getCountryCurrencyAsync: (countryCode: "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX") => Promise<string>;
    search: (filter?: string, data?: import("./types").Country[], options?: import("fuse.js").FuseOptions<import("./types").Country>) => import("./types").Country[];
    getLetters: (countries: import("./types").Country[]) => string[];
    getCountryInfoAsync: ({ countryCode, translation, }: {
        countryCode: "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "VG" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "BQ" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CK" | "CR" | "HR" | "CU" | "CW" | "CY" | "CZ" | "CD" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "HN" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "CI" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "XK" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "KP" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "CG" | "RO" | "RU" | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "KR" | "SS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SE" | "CH" | "SY" | "ST" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "VI" | "UY" | "UZ" | "VU" | "VA" | "VE" | "VN" | "WF" | "EH" | "YE" | "ZM" | "ZW" | "KI" | "HK" | "AX";
        translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr" | undefined;
    }) => Promise<import("./CountryService").CountryInfo>;
};
export declare const CountryContext: React.Context<CountryContextParam>;
export declare const useContext: () => CountryContextParam;
export declare const CountryProvider: React.Provider<CountryContextParam>, CountryConsumer: React.Consumer<CountryContextParam>;
