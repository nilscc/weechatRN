/****************************/
/* Weechat colors and style */
/****************************/

/* style options, foreground */
export const cof = {
  separator: { color: "#68b5d4" },
  chat: { color: "#d9d9d9" },
  chat_time: { color: "#f7f7f7" },
  chat_time_delimiters: { color: "#cc843b" },
  chat_prefix_error: { color: "#ffe377" },
  chat_prefix_network: { color: "#fbb1f9" },
  chat_prefix_action: { color: "#f7f7f7" },
  chat_prefix_join: { color: "#cdee69" },
  chat_prefix_quit: { color: "#c75646" },
  chat_prefix_more: { color: "#fbb1f9" },
  chat_prefix_suffix: { color: "#cdee69" },
  chat_buffer: { color: "#f7f7f7" },
  chat_server: { color: "#cc843b" },
  chat_channel: { color: "#f7f7f7" },
  chat_nick: { color: "#77dfd8" },
  chat_nick_self: { color: "#ffffff", fontWeight: "bold" },
  chat_nick_other: { color: "#77dfd8" },
  invalid: {
    /* should never happen */
    color: "#f7f7f7",
    backgroundColor: "transparent"
  },
  chat_host: { color: "#77dfd8" },
  chat_delimiters: { color: "#cdee69" },
  chat_highlight: { color: "#000000", backgroundColor: "#ffcf7f" },
  chat_read_marker: { color: "#fbb1f9" },
  chat_text_found: { color: "#ffe377" },
  chat_value: { color: "#77dfd8" },
  chat_prefix_buffer: { color: "#cc843b" },
  chat_tags: { color: "#c75646" },
  chat_inactive_window: { color: "#5d5d5d" },
  chat_inactive_buffer: { color: "#5d5d5d" },
  chat_prefix_buffer_inactive_buffer: { color: "#5d5d5d" },
  chat_nick_offline: { color: "#5d5d5d" },
  chat_nick_offline_highlight: { color: "#f7f7f7", backgroundColor: "#5d5d5d" },
  chat_nick_prefix: { color: "#cdee69" },
  chat_nick_suffix: { color: "#cdee69" },
  emphasis: { color: "#ffe377", backgroundColor: "#c8a0d1" },
  chat_day_change: { color: "#77dfd8" }
};

/* style options, background */
export const cob = {
  separator: {},
  chat: {},
  chat_time: { color: "#999" },
  chat_time_delimiters: {},
  chat_prefix_error: {},
  chat_prefix_network: {},
  chat_prefix_action: {},
  chat_prefix_join: {},
  chat_prefix_quit: {},
  chat_prefix_more: {},
  chat_prefix_suffix: {},
  chat_buffer: {},
  chat_server: {},
  chat_channel: {},
  chat_nick: {},
  chat_nick_self: {},
  chat_nick_other: {},
  invalid: {},
  chat_host: {},
  chat_delimiters: {},
  chat_highlight: { backgroundColor: "#ffcf7f" },
  chat_read_marker: {},
  chat_text_found: {},
  chat_value: {},
  chat_prefix_buffer: {},
  chat_tags: {},
  chat_inactive_window: {},
  chat_inactive_buffer: {},
  chat_prefix_buffer_inactive_buffer: {},
  chat_nick_offline: {},
  chat_nick_offline_highlight: { backgroundColor: "#5d5d5d" },
  chat_nick_prefix: {},
  chat_nick_suffix: {},
  emphasis: { backgroundColor: "#c8a0d1" },
  chat_day_change: {}
};

/* WeeChat colors, foreground */
export const cwf = {
  default: "#d9d9d9",
  black: "#000000",
  darkgray: "#5d5d5d",
  red: "#c75646",
  lightred: "#e09690",
  green: "#8eb33b",
  lightgreen: "#cdee69",
  brown: "#b27232",
  yellow: "#ffe377",
  blue: "#72b3cc",
  lightblue: "#9cd9f0",
  magenta: "#c8a0d1",
  lightmagenta: "#fbb1f9",
  cyan: "#218693",
  lightcyan: "#77dfd8",
  gray: "#b0b0b0",
  white: "#f7f7f7"
};

/* WeeChat colors, background */
export const cwb = {
  default: "transparent",
  black: "#000000",
  darkgray: "#5d5d5d",
  red: "#c75646",
  lightred: "#e09690",
  green: "#8eb33b",
  lightgreen: "#cdee69",
  brown: "#b27232",
  yellow: "#ffe377",
  blue: "#72b3cc",
  lightblue: "#9cd9f0",
  magenta: "#c8a0d1",
  lightmagenta: "#fbb1f9",
  cyan: "#218693",
  lightcyan: "#77dfd8",
  gray: "#b0b0b0",
  white: "#f7f7f7"
};

/* extended colors, foreground */
export const cef = {
  "0": "#000000" /* 000 Black */,
  "1": "#c0656e" /* 001 DarkRed */,
  "2": "#00cd00" /* 002 DarkGreen */,
  "3": "#fc7f00" /* 003 Orange */,
  "4": "#81a1c1" /* 004 DarkBlue */,
  "5": "#cd00cd" /* 005 DarkMagenta */,
  "6": "#00cdcd" /* 006 DarkCyan */,
  "7": "#e5e5e5" /* 007 LightGrey */,
  "8": "#7f7f7f" /* 008 DarkGrey */,
  "9": "#ff0000" /* 009 LightRed */,
  "10": "#00ff00" /* 010 LightGreen */,
  "11": "#ffff00" /* 011 LightYellow */,
  "12": "#5c5cff" /* 012 LightBlue */,
  "13": "#ff00ff" /* 013 LightMagenta */,
  "14": "#00ffff" /* 014 LightCyan */,
  "15": "#ffffff" /* 015 White */,
  "16": "#000000" /* 016 Grey0 */,
  "17": "#00005f" /* 017 NavyBlue */,
  "18": "#000087" /* 018 DarkBlue */,
  "19": "#0000af" /* 019 Blue3 */,
  "20": "#0000d7" /* 020 Blue3 */,
  "21": "#0000ff" /* 021 Blue1 */,
  "22": "#005f00" /* 022 DarkGreen */,
  "23": "#005f5f" /* 023 DeepSkyBlue4 */,
  "24": "#005f87" /* 024 DeepSkyBlue4 */,
  "25": "#005faf" /* 025 DeepSkyBlue4 */,
  "26": "#005fd7" /* 026 DodgerBlue3 */,
  "27": "#005fff" /* 027 DodgerBlue2 */,
  "28": "#008700" /* 028 Green4 */,
  "29": "#00875f" /* 029 SpringGreen4 */,
  "30": "#008787" /* 030 Turquoise4 */,
  "31": "#0087af" /* 031 DeepSkyBlue3 */,
  "32": "#0087d7" /* 032 DeepSkyBlue3 */,
  "33": "#0087ff" /* 033 DodgerBlue1 */,
  "34": "#00af00" /* 034 Green3 */,
  "35": "#00af5f" /* 035 SpringGreen3 */,
  "36": "#00af87" /* 036 DarkCyan */,
  "37": "#00afaf" /* 037 LightSeaGreen */,
  "38": "#00afd7" /* 038 DeepSkyBlue2 */,
  "39": "#00afff" /* 039 DeepSkyBlue1 */,
  "40": "#00d700" /* 040 Green3 */,
  "41": "#00d75f" /* 041 SpringGreen3 */,
  "42": "#00d787" /* 042 SpringGreen2 */,
  "43": "#00d7af" /* 043 Cyan3 */,
  "44": "#00d7d7" /* 044 DarkTurquoise */,
  "45": "#00d7ff" /* 045 Turquoise2 */,
  "46": "#00ff00" /* 046 Green1 */,
  "47": "#00ff5f" /* 047 SpringGreen2 */,
  "48": "#00ff87" /* 048 SpringGreen1 */,
  "49": "#00ffaf" /* 049 MediumSpringGreen */,
  "50": "#00ffd7" /* 050 Cyan2 */,
  "51": "#00ffff" /* 051 Cyan1 */,
  "52": "#5f0000" /* 052 DarkRed */,
  "53": "#5f005f" /* 053 DeepPink4 */,
  "54": "#5f0087" /* 054 Purple4 */,
  "55": "#5f00af" /* 055 Purple4 */,
  "56": "#5f00d7" /* 056 Purple3 */,
  "57": "#5f00ff" /* 057 BlueViolet */,
  "58": "#5f5f00" /* 058 Orange4 */,
  "59": "#5f5f5f" /* 059 Grey37 */,
  "60": "#5f5f87" /* 060 MediumPurple4 */,
  "61": "#5f5faf" /* 061 SlateBlue3 */,
  "62": "#5f5fd7" /* 062 SlateBlue3 */,
  "63": "#5f5fff" /* 063 RoyalBlue1 */,
  "64": "#5f8700" /* 064 Chartreuse4 */,
  "65": "#5f875f" /* 065 DarkSeaGreen4 */,
  "66": "#5f8787" /* 066 PaleTurquoise4 */,
  "67": "#5f87af" /* 067 SteelBlue */,
  "68": "#5f87d7" /* 068 SteelBlue3 */,
  "69": "#5f87ff" /* 069 CornflowerBlue */,
  "70": "#5faf00" /* 070 Chartreuse3 */,
  "71": "#5faf5f" /* 071 DarkSeaGreen4 */,
  "72": "#5faf87" /* 072 CadetBlue */,
  "73": "#5fafaf" /* 073 CadetBlue */,
  "74": "#5fafd7" /* 074 SkyBlue3 */,
  "75": "#5fafff" /* 075 SteelBlue1 */,
  "76": "#5fd700" /* 076 Chartreuse3 */,
  "77": "#5fd75f" /* 077 PaleGreen3 */,
  "78": "#5fd787" /* 078 SeaGreen3 */,
  "79": "#5fd7af" /* 079 Aquamarine3 */,
  "80": "#5fd7d7" /* 080 MediumTurquoise */,
  "81": "#5fd7ff" /* 081 SteelBlue1 */,
  "82": "#5fff00" /* 082 Chartreuse2 */,
  "83": "#5fff5f" /* 083 SeaGreen2 */,
  "84": "#5fff87" /* 084 SeaGreen1 */,
  "85": "#5fffaf" /* 085 SeaGreen1 */,
  "86": "#5fffd7" /* 086 Aquamarine1 */,
  "87": "#5fffff" /* 087 DarkSlateGray2 */,
  "88": "#870000" /* 088 DarkRed */,
  "89": "#87005f" /* 089 DeepPink4 */,
  "90": "#870087" /* 090 DarkMagenta */,
  "91": "#8700af" /* 091 DarkMagenta */,
  "92": "#8700d7" /* 092 DarkViolet */,
  "93": "#8700ff" /* 093 Purple */,
  "94": "#875f00" /* 094 Orange4 */,
  "95": "#875f5f" /* 095 LightPink4 */,
  "96": "#875f87" /* 096 Plum4 */,
  "97": "#875faf" /* 097 MediumPurple3 */,
  "98": "#875fd7" /* 098 MediumPurple3 */,
  "99": "#875fff" /* 099 SlateBlue1 */,
  "100": "#878700" /* 100 Yellow4 */,
  "101": "#87875f" /* 101 Wheat4 */,
  "102": "#878787" /* 102 Grey53 */,
  "103": "#8787af" /* 103 LightSlateGrey */,
  "104": "#8787d7" /* 104 MediumPurple */,
  "105": "#8787ff" /* 105 LightSlateBlue */,
  "106": "#87af00" /* 106 Yellow4 */,
  "107": "#87af5f" /* 107 DarkOliveGreen3 */,
  "108": "#87af87" /* 108 DarkSeaGreen */,
  "109": "#87afaf" /* 109 LightSkyBlue3 */,
  "110": "#87afd7" /* 110 LightSkyBlue3 */,
  "111": "#87afff" /* 111 SkyBlue2 */,
  "112": "#87d700" /* 112 Chartreuse2 */,
  "113": "#87d75f" /* 113 DarkOliveGreen3 */,
  "114": "#87d787" /* 114 PaleGreen3 */,
  "115": "#87d7af" /* 115 DarkSeaGreen3 */,
  "116": "#87d7d7" /* 116 DarkSlateGray3 */,
  "117": "#87d7ff" /* 117 SkyBlue1 */,
  "118": "#87ff00" /* 118 Chartreuse1 */,
  "119": "#87ff5f" /* 119 LightGreen */,
  "120": "#87ff87" /* 120 LightGreen */,
  "121": "#87ffaf" /* 121 PaleGreen1 */,
  "122": "#87ffd7" /* 122 Aquamarine1 */,
  "123": "#87ffff" /* 123 DarkSlateGray1 */,
  "124": "#af0000" /* 124 Red3 */,
  "125": "#af005f" /* 125 DeepPink4 */,
  "126": "#af0087" /* 126 MediumVioletRed */,
  "127": "#af00af" /* 127 Magenta3 */,
  "128": "#af00d7" /* 128 DarkViolet */,
  "129": "#af00ff" /* 129 Purple */,
  "130": "#af5f00" /* 130 DarkOrange3 */,
  "131": "#af5f5f" /* 131 IndianRed */,
  "132": "#af5f87" /* 132 HotPink3 */,
  "133": "#af5faf" /* 133 MediumOrchid3 */,
  "134": "#af5fd7" /* 134 MediumOrchid */,
  "135": "#af5fff" /* 135 MediumPurple2 */,
  "136": "#af8700" /* 136 DarkGoldenrod */,
  "137": "#af875f" /* 137 LightSalmon3 */,
  "138": "#af8787" /* 138 RosyBrown */,
  "139": "#af87af" /* 139 Grey63 */,
  "140": "#af87d7" /* 140 MediumPurple2 */,
  "141": "#af87ff" /* 141 MediumPurple1 */,
  "142": "#afaf00" /* 142 Gold3 */,
  "143": "#afaf5f" /* 143 DarkKhaki */,
  "144": "#afaf87" /* 144 NavajoWhite3 */,
  "145": "#afafaf" /* 145 Grey69 */,
  "146": "#afafd7" /* 146 LightSteelBlue3 */,
  "147": "#afafff" /* 147 LightSteelBlue */,
  "148": "#afd700" /* 148 Yellow3 */,
  "149": "#afd75f" /* 149 DarkOliveGreen3 */,
  "150": "#afd787" /* 150 DarkSeaGreen3 */,
  "151": "#afd7af" /* 151 DarkSeaGreen2 */,
  "152": "#afd7d7" /* 152 LightCyan3 */,
  "153": "#afd7ff" /* 153 LightSkyBlue1 */,
  "154": "#afff00" /* 154 GreenYellow */,
  "155": "#afff5f" /* 155 DarkOliveGreen2 */,
  "156": "#afff87" /* 156 PaleGreen1 */,
  "157": "#afffaf" /* 157 DarkSeaGreen2 */,
  "158": "#afffd7" /* 158 DarkSeaGreen1 */,
  "159": "#afffff" /* 159 PaleTurquoise1 */,
  "160": "#d70000" /* 160 Red3 */,
  "161": "#d7005f" /* 161 DeepPink3 */,
  "162": "#d70087" /* 162 DeepPink3 */,
  "163": "#d700af" /* 163 Magenta3 */,
  "164": "#d700d7" /* 164 Magenta3 */,
  "165": "#d700ff" /* 165 Magenta2 */,
  "166": "#d75f00" /* 166 DarkOrange3 */,
  "167": "#d75f5f" /* 167 IndianRed */,
  "168": "#d75f87" /* 168 HotPink3 */,
  "169": "#d75faf" /* 169 HotPink2 */,
  "170": "#d75fd7" /* 170 Orchid */,
  "171": "#d75fff" /* 171 MediumOrchid1 */,
  "172": "#d78700" /* 172 Orange3 */,
  "173": "#d7875f" /* 173 LightSalmon3 */,
  "174": "#d78787" /* 174 LightPink3 */,
  "175": "#d787af" /* 175 Pink3 */,
  "176": "#d787d7" /* 176 Plum3 */,
  "177": "#d787ff" /* 177 Violet */,
  "178": "#d7af00" /* 178 Gold3 */,
  "179": "#d7af5f" /* 179 LightGoldenrod3 */,
  "180": "#d7af87" /* 180 Tan */,
  "181": "#d7afaf" /* 181 MistyRose3 */,
  "182": "#d7afd7" /* 182 Thistle3 */,
  "183": "#d7afff" /* 183 Plum2 */,
  "184": "#d7d700" /* 184 Yellow3 */,
  "185": "#d7d75f" /* 185 Khaki3 */,
  "186": "#d7d787" /* 186 LightGoldenrod2 */,
  "187": "#d7d7af" /* 187 LightYellow3 */,
  "188": "#d7d7d7" /* 188 Grey84 */,
  "189": "#d7d7ff" /* 189 LightSteelBlue1 */,
  "190": "#d7ff00" /* 190 Yellow2 */,
  "191": "#d7ff5f" /* 191 DarkOliveGreen1 */,
  "192": "#d7ff87" /* 192 DarkOliveGreen1 */,
  "193": "#d7ffaf" /* 193 DarkSeaGreen1 */,
  "194": "#d7ffd7" /* 194 Honeydew2 */,
  "195": "#d7ffff" /* 195 LightCyan1 */,
  "196": "#ff0000" /* 196 Red1 */,
  "197": "#ff005f" /* 197 DeepPink2 */,
  "198": "#ff0087" /* 198 DeepPink1 */,
  "199": "#ff00af" /* 199 DeepPink1 */,
  "200": "#ff00d7" /* 200 Magenta2 */,
  "201": "#ff00ff" /* 201 Magenta1 */,
  "202": "#ff5f00" /* 202 OrangeRed1 */,
  "203": "#ff5f5f" /* 203 IndianRed1 */,
  "204": "#ff5f87" /* 204 IndianRed1 */,
  "205": "#ff5faf" /* 205 HotPink */,
  "206": "#ff5fd7" /* 206 HotPink */,
  "207": "#ff5fff" /* 207 MediumOrchid1 */,
  "208": "#ff8700" /* 208 DarkOrange */,
  "209": "#ff875f" /* 209 Salmon1 */,
  "210": "#ff8787" /* 210 LightCoral */,
  "211": "#ff87af" /* 211 PaleVioletRed1 */,
  "212": "#ff87d7" /* 212 Orchid2 */,
  "213": "#ff87ff" /* 213 Orchid1 */,
  "214": "#ffaf00" /* 214 Orange1 */,
  "215": "#ffaf5f" /* 215 SandyBrown */,
  "216": "#ffaf87" /* 216 LightSalmon1 */,
  "217": "#ffafaf" /* 217 LightPink1 */,
  "218": "#ffafd7" /* 218 Pink1 */,
  "219": "#ffafff" /* 219 Plum1 */,
  "220": "#ffd700" /* 220 Gold1 */,
  "221": "#ffd75f" /* 221 LightGoldenrod2 */,
  "222": "#ffd787" /* 222 LightGoldenrod2 */,
  "223": "#ffd7af" /* 223 NavajoWhite1 */,
  "224": "#ffd7d7" /* 224 MistyRose1 */,
  "225": "#ffd7ff" /* 225 Thistle1 */,
  "226": "#ffff00" /* 226 Yellow1 */,
  "227": "#ffff5f" /* 227 LightGoldenrod1 */,
  "228": "#ffff87" /* 228 Khaki1 */,
  "229": "#ffffaf" /* 229 Wheat1 */,
  "230": "#ffffd7" /* 230 Cornsilk1 */,
  "231": "#ffffff" /* 231 Grey100 */,
  "232": "#080808" /* 232 Grey3 */,
  "233": "#121212" /* 233 Grey7 */,
  "234": "#1c1c1c" /* 234 Grey11 */,
  "235": "#262626" /* 235 Grey15 */,
  "236": "#303030" /* 236 Grey19 */,
  "237": "#3a3a3a" /* 237 Grey23 */,
  "238": "#444444" /* 238 Grey27 */,
  "239": "#4e4e4e" /* 239 Grey30 */,
  "240": "#585858" /* 240 Grey35 */,
  "241": "#626262" /* 241 Grey39 */,
  "242": "#6c6c6c" /* 242 Grey42 */,
  "243": "#767676" /* 243 Grey46 */,
  "244": "#808080" /* 244 Grey50 */,
  "245": "#8a8a8a" /* 245 Grey54 */,
  "246": "#949494" /* 246 Grey58 */,
  "247": "#9e9e9e" /* 247 Grey62 */,
  "248": "#a8a8a8" /* 248 Grey66 */,
  "249": "#b2b2b2" /* 249 Grey70 */,
  "250": "#bcbcbc" /* 250 Grey74 */,
  "251": "#c6c6c6" /* 251 Grey78 */,
  "252": "#d0d0d0" /* 252 Grey82 */,
  "253": "#dadada" /* 253 Grey85 */,
  "254": "#e4e4e4" /* 254 Grey89 */,
  "255": "#eeeeee" /* 255 Grey93 */
};
/* extended colors, background */
export const ceb = {
  "0": "#000000" /* 000 Black */,
  "1": "#c0656e" /* 001 DarkRed */,
  "2": "#00cd00" /* 002 DarkGreen */,
  "3": "#fc7f00" /* 003 Orange */,
  "4": "#81a1c1" /* 004 DarkBlue */,
  "5": "#cd00cd" /* 005 DarkMagenta */,
  "6": "#00cdcd" /* 006 DarkCyan */,
  "7": "#e5e5e5" /* 007 LightGrey */,
  "8": "#7f7f7f" /* 008 DarkGrey */,
  "9": "#ff0000" /* 009 LightRed */,
  "10": "#00ff00" /* 010 LightGreen */,
  "11": "#ffff00" /* 011 LightYellow */,
  "12": "#5c5cff" /* 012 LightBlue */,
  "13": "#ff00ff" /* 013 LightMagenta */,
  "14": "#00ffff" /* 014 LightCyan */,
  "15": "#ffffff" /* 015 White */,
  "16": "#000000" /* 016 Grey0 */,
  "17": "#00005f" /* 017 NavyBlue */,
  "18": "#000087" /* 018 DarkBlue */,
  "19": "#0000af" /* 019 Blue3 */,
  "20": "#0000d7" /* 020 Blue3 */,
  "21": "#0000ff" /* 021 Blue1 */,
  "22": "#005f00" /* 022 DarkGreen */,
  "23": "#005f5f" /* 023 DeepSkyBlue4 */,
  "24": "#005f87" /* 024 DeepSkyBlue4 */,
  "25": "#005faf" /* 025 DeepSkyBlue4 */,
  "26": "#005fd7" /* 026 DodgerBlue3 */,
  "27": "#005fff" /* 027 DodgerBlue2 */,
  "28": "#008700" /* 028 Green4 */,
  "29": "#00875f" /* 029 SpringGreen4 */,
  "30": "#008787" /* 030 Turquoise4 */,
  "31": "#0087af" /* 031 DeepSkyBlue3 */,
  "32": "#0087d7" /* 032 DeepSkyBlue3 */,
  "33": "#0087ff" /* 033 DodgerBlue1 */,
  "34": "#00af00" /* 034 Green3 */,
  "35": "#00af5f" /* 035 SpringGreen3 */,
  "36": "#00af87" /* 036 DarkCyan */,
  "37": "#00afaf" /* 037 LightSeaGreen */,
  "38": "#00afd7" /* 038 DeepSkyBlue2 */,
  "39": "#00afff" /* 039 DeepSkyBlue1 */,
  "40": "#00d700" /* 040 Green3 */,
  "41": "#00d75f" /* 041 SpringGreen3 */,
  "42": "#00d787" /* 042 SpringGreen2 */,
  "43": "#00d7af" /* 043 Cyan3 */,
  "44": "#00d7d7" /* 044 DarkTurquoise */,
  "45": "#00d7ff" /* 045 Turquoise2 */,
  "46": "#00ff00" /* 046 Green1 */,
  "47": "#00ff5f" /* 047 SpringGreen2 */,
  "48": "#00ff87" /* 048 SpringGreen1 */,
  "49": "#00ffaf" /* 049 MediumSpringGreen */,
  "50": "#00ffd7" /* 050 Cyan2 */,
  "51": "#00ffff" /* 051 Cyan1 */,
  "52": "#5f0000" /* 052 DarkRed */,
  "53": "#5f005f" /* 053 DeepPink4 */,
  "54": "#5f0087" /* 054 Purple4 */,
  "55": "#5f00af" /* 055 Purple4 */,
  "56": "#5f00d7" /* 056 Purple3 */,
  "57": "#5f00ff" /* 057 BlueViolet */,
  "58": "#5f5f00" /* 058 Orange4 */,
  "59": "#5f5f5f" /* 059 Grey37 */,
  "60": "#5f5f87" /* 060 MediumPurple4 */,
  "61": "#5f5faf" /* 061 SlateBlue3 */,
  "62": "#5f5fd7" /* 062 SlateBlue3 */,
  "63": "#5f5fff" /* 063 RoyalBlue1 */,
  "64": "#5f8700" /* 064 Chartreuse4 */,
  "65": "#5f875f" /* 065 DarkSeaGreen4 */,
  "66": "#5f8787" /* 066 PaleTurquoise4 */,
  "67": "#5f87af" /* 067 SteelBlue */,
  "68": "#5f87d7" /* 068 SteelBlue3 */,
  "69": "#5f87ff" /* 069 CornflowerBlue */,
  "70": "#5faf00" /* 070 Chartreuse3 */,
  "71": "#5faf5f" /* 071 DarkSeaGreen4 */,
  "72": "#5faf87" /* 072 CadetBlue */,
  "73": "#5fafaf" /* 073 CadetBlue */,
  "74": "#5fafd7" /* 074 SkyBlue3 */,
  "75": "#5fafff" /* 075 SteelBlue1 */,
  "76": "#5fd700" /* 076 Chartreuse3 */,
  "77": "#5fd75f" /* 077 PaleGreen3 */,
  "78": "#5fd787" /* 078 SeaGreen3 */,
  "79": "#5fd7af" /* 079 Aquamarine3 */,
  "80": "#5fd7d7" /* 080 MediumTurquoise */,
  "81": "#5fd7ff" /* 081 SteelBlue1 */,
  "82": "#5fff00" /* 082 Chartreuse2 */,
  "83": "#5fff5f" /* 083 SeaGreen2 */,
  "84": "#5fff87" /* 084 SeaGreen1 */,
  "85": "#5fffaf" /* 085 SeaGreen1 */,
  "86": "#5fffd7" /* 086 Aquamarine1 */,
  "87": "#5fffff" /* 087 DarkSlateGray2 */,
  "88": "#870000" /* 088 DarkRed */,
  "89": "#87005f" /* 089 DeepPink4 */,
  "90": "#870087" /* 090 DarkMagenta */,
  "91": "#8700af" /* 091 DarkMagenta */,
  "92": "#8700d7" /* 092 DarkViolet */,
  "93": "#8700ff" /* 093 Purple */,
  "94": "#875f00" /* 094 Orange4 */,
  "95": "#875f5f" /* 095 LightPink4 */,
  "96": "#875f87" /* 096 Plum4 */,
  "97": "#875faf" /* 097 MediumPurple3 */,
  "98": "#875fd7" /* 098 MediumPurple3 */,
  "99": "#875fff" /* 099 SlateBlue1 */,
  "100": "#878700" /* 100 Yellow4 */,
  "101": "#87875f" /* 101 Wheat4 */,
  "102": "#878787" /* 102 Grey53 */,
  "103": "#8787af" /* 103 LightSlateGrey */,
  "104": "#8787d7" /* 104 MediumPurple */,
  "105": "#8787ff" /* 105 LightSlateBlue */,
  "106": "#87af00" /* 106 Yellow4 */,
  "107": "#87af5f" /* 107 DarkOliveGreen3 */,
  "108": "#87af87" /* 108 DarkSeaGreen */,
  "109": "#87afaf" /* 109 LightSkyBlue3 */,
  "110": "#87afd7" /* 110 LightSkyBlue3 */,
  "111": "#87afff" /* 111 SkyBlue2 */,
  "112": "#87d700" /* 112 Chartreuse2 */,
  "113": "#87d75f" /* 113 DarkOliveGreen3 */,
  "114": "#87d787" /* 114 PaleGreen3 */,
  "115": "#87d7af" /* 115 DarkSeaGreen3 */,
  "116": "#87d7d7" /* 116 DarkSlateGray3 */,
  "117": "#87d7ff" /* 117 SkyBlue1 */,
  "118": "#87ff00" /* 118 Chartreuse1 */,
  "119": "#87ff5f" /* 119 LightGreen */,
  "120": "#87ff87" /* 120 LightGreen */,
  "121": "#87ffaf" /* 121 PaleGreen1 */,
  "122": "#87ffd7" /* 122 Aquamarine1 */,
  "123": "#87ffff" /* 123 DarkSlateGray1 */,
  "124": "#af0000" /* 124 Red3 */,
  "125": "#af005f" /* 125 DeepPink4 */,
  "126": "#af0087" /* 126 MediumVioletRed */,
  "127": "#af00af" /* 127 Magenta3 */,
  "128": "#af00d7" /* 128 DarkViolet */,
  "129": "#af00ff" /* 129 Purple */,
  "130": "#af5f00" /* 130 DarkOrange3 */,
  "131": "#af5f5f" /* 131 IndianRed */,
  "132": "#af5f87" /* 132 HotPink3 */,
  "133": "#af5faf" /* 133 MediumOrchid3 */,
  "134": "#af5fd7" /* 134 MediumOrchid */,
  "135": "#af5fff" /* 135 MediumPurple2 */,
  "136": "#af8700" /* 136 DarkGoldenrod */,
  "137": "#af875f" /* 137 LightSalmon3 */,
  "138": "#af8787" /* 138 RosyBrown */,
  "139": "#af87af" /* 139 Grey63 */,
  "140": "#af87d7" /* 140 MediumPurple2 */,
  "141": "#af87ff" /* 141 MediumPurple1 */,
  "142": "#afaf00" /* 142 Gold3 */,
  "143": "#afaf5f" /* 143 DarkKhaki */,
  "144": "#afaf87" /* 144 NavajoWhite3 */,
  "145": "#afafaf" /* 145 Grey69 */,
  "146": "#afafd7" /* 146 LightSteelBlue3 */,
  "147": "#afafff" /* 147 LightSteelBlue */,
  "148": "#afd700" /* 148 Yellow3 */,
  "149": "#afd75f" /* 149 DarkOliveGreen3 */,
  "150": "#afd787" /* 150 DarkSeaGreen3 */,
  "151": "#afd7af" /* 151 DarkSeaGreen2 */,
  "152": "#afd7d7" /* 152 LightCyan3 */,
  "153": "#afd7ff" /* 153 LightSkyBlue1 */,
  "154": "#afff00" /* 154 GreenYellow */,
  "155": "#afff5f" /* 155 DarkOliveGreen2 */,
  "156": "#afff87" /* 156 PaleGreen1 */,
  "157": "#afffaf" /* 157 DarkSeaGreen2 */,
  "158": "#afffd7" /* 158 DarkSeaGreen1 */,
  "159": "#afffff" /* 159 PaleTurquoise1 */,
  "160": "#d70000" /* 160 Red3 */,
  "161": "#d7005f" /* 161 DeepPink3 */,
  "162": "#d70087" /* 162 DeepPink3 */,
  "163": "#d700af" /* 163 Magenta3 */,
  "164": "#d700d7" /* 164 Magenta3 */,
  "165": "#d700ff" /* 165 Magenta2 */,
  "166": "#d75f00" /* 166 DarkOrange3 */,
  "167": "#d75f5f" /* 167 IndianRed */,
  "168": "#d75f87" /* 168 HotPink3 */,
  "169": "#d75faf" /* 169 HotPink2 */,
  "170": "#d75fd7" /* 170 Orchid */,
  "171": "#d75fff" /* 171 MediumOrchid1 */,
  "172": "#d78700" /* 172 Orange3 */,
  "173": "#d7875f" /* 173 LightSalmon3 */,
  "174": "#d78787" /* 174 LightPink3 */,
  "175": "#d787af" /* 175 Pink3 */,
  "176": "#d787d7" /* 176 Plum3 */,
  "177": "#d787ff" /* 177 Violet */,
  "178": "#d7af00" /* 178 Gold3 */,
  "179": "#d7af5f" /* 179 LightGoldenrod3 */,
  "180": "#d7af87" /* 180 Tan */,
  "181": "#d7afaf" /* 181 MistyRose3 */,
  "182": "#d7afd7" /* 182 Thistle3 */,
  "183": "#d7afff" /* 183 Plum2 */,
  "184": "#d7d700" /* 184 Yellow3 */,
  "185": "#d7d75f" /* 185 Khaki3 */,
  "186": "#d7d787" /* 186 LightGoldenrod2 */,
  "187": "#d7d7af" /* 187 LightYellow3 */,
  "188": "#d7d7d7" /* 188 Grey84 */,
  "189": "#d7d7ff" /* 189 LightSteelBlue1 */,
  "190": "#d7ff00" /* 190 Yellow2 */,
  "191": "#d7ff5f" /* 191 DarkOliveGreen1 */,
  "192": "#d7ff87" /* 192 DarkOliveGreen1 */,
  "193": "#d7ffaf" /* 193 DarkSeaGreen1 */,
  "194": "#d7ffd7" /* 194 Honeydew2 */,
  "195": "#d7ffff" /* 195 LightCyan1 */,
  "196": "#ff0000" /* 196 Red1 */,
  "197": "#ff005f" /* 197 DeepPink2 */,
  "198": "#ff0087" /* 198 DeepPink1 */,
  "199": "#ff00af" /* 199 DeepPink1 */,
  "200": "#ff00d7" /* 200 Magenta2 */,
  "201": "#ff00ff" /* 201 Magenta1 */,
  "202": "#ff5f00" /* 202 OrangeRed1 */,
  "203": "#ff5f5f" /* 203 IndianRed1 */,
  "204": "#ff5f87" /* 204 IndianRed1 */,
  "205": "#ff5faf" /* 205 HotPink */,
  "206": "#ff5fd7" /* 206 HotPink */,
  "207": "#ff5fff" /* 207 MediumOrchid1 */,
  "208": "#ff8700" /* 208 DarkOrange */,
  "209": "#ff875f" /* 209 Salmon1 */,
  "210": "#ff8787" /* 210 LightCoral */,
  "211": "#ff87af" /* 211 PaleVioletRed1 */,
  "212": "#ff87d7" /* 212 Orchid2 */,
  "213": "#ff87ff" /* 213 Orchid1 */,
  "214": "#ffaf00" /* 214 Orange1 */,
  "215": "#ffaf5f" /* 215 SandyBrown */,
  "216": "#ffaf87" /* 216 LightSalmon1 */,
  "217": "#ffafaf" /* 217 LightPink1 */,
  "218": "#ffafd7" /* 218 Pink1 */,
  "219": "#ffafff" /* 219 Plum1 */,
  "220": "#ffd700" /* 220 Gold1 */,
  "221": "#ffd75f" /* 221 LightGoldenrod2 */,
  "222": "#ffd787" /* 222 LightGoldenrod2 */,
  "223": "#ffd7af" /* 223 NavajoWhite1 */,
  "224": "#ffd7d7" /* 224 MistyRose1 */,
  "225": "#ffd7ff" /* 225 Thistle1 */,
  "226": "#ffff00" /* 226 Yellow1 */,
  "227": "#ffff5f" /* 227 LightGoldenrod1 */,
  "228": "#ffff87" /* 228 Khaki1 */,
  "229": "#ffffaf" /* 229 Wheat1 */,
  "230": "#ffffd7" /* 230 Cornsilk1 */,
  "231": "#ffffff" /* 231 Grey100 */,
  "232": "#080808" /* 232 Grey3 */,
  "233": "#121212" /* 233 Grey7 */,
  "234": "#1c1c1c" /* 234 Grey11 */,
  "235": "#262626" /* 235 Grey15 */,
  "236": "#303030" /* 236 Grey19 */,
  "237": "#3a3a3a" /* 237 Grey23 */,
  "238": "#444444" /* 238 Grey27 */,
  "239": "#4e4e4e" /* 239 Grey30 */,
  "240": "#585858" /* 240 Grey35 */,
  "241": "#626262" /* 241 Grey39 */,
  "242": "#6c6c6c" /* 242 Grey42 */,
  "243": "#767676" /* 243 Grey46 */,
  "244": "#808080" /* 244 Grey50 */,
  "245": "#8a8a8a" /* 245 Grey54 */,
  "246": "#949494" /* 246 Grey58 */,
  "247": "#9e9e9e" /* 247 Grey62 */,
  "248": "#a8a8a8" /* 248 Grey66 */,
  "249": "#b2b2b2" /* 249 Grey70 */,
  "250": "#bcbcbc" /* 250 Grey74 */,
  "251": "#c6c6c6" /* 251 Grey78 */,
  "252": "#d0d0d0" /* 252 Grey82 */,
  "253": "#dadada" /* 253 Grey85 */,
  "254": "#e4e4e4" /* 254 Grey89 */,
  "255": "#eeeeee" /* 255 Grey93 */
};
