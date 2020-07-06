$(function() {
var doc = (info) => document.write(info);
var tag = (query) => document.querySelector(query);
var debug = (test_code) => {
	tag("section.debugging-area").removeChild(tag("div.debugging-area-info"));
	tag("section.debugging-area").removeChild(tag("div.debugging-area-label"));
	let debug_element = document.createElement(typeof test_code() == "object" ? test_code()[0] : test_code());
	debug_element.className = "debug_element";
 	typeof test_code() == "object" ? debug_element.textContent = test_code()[1] : debug_element.textContent = "";
	tag("section.debugging-area").appendChild(debug_element);
};
var dailyPhrase= {
"books": { //total 73 books
"oldTestament": [
"ഉൽപ്പത്തി","പുറപ്പാട്","ലേവ്യർ","സംഖ്യ","നിയമാവർത്തനം","ജോഷ്വ","ന്യായാധിപന്മാർ","റൂത്ത്","1 സാമുവേൽ","2 സാമുവേൽ","1 രാജാക്കന്മാർ","2 രാജാക്കന്മാർ","1 ദിനവൃത്താന്തം","2 ദിനവൃത്താന്തം","എസ്രാ","നെഹമിയ","തോബിത്","യൂദിത്ത്‌","എസ്‌തേർ","1 മക്കബായർ","2 മക്കബായർ","ജോബ്","സങ്കീർത്തനം","സുഭാഷിതങ്ങൾ","സഭാപ്രസംഗകൻ","ഉത്തമഗീതം","ജ്ഞാനം","പ്രഭാഷകൻ","ഏശയ്യ","ജറെമിയ","വിലാപങ്ങൾ","ബാറൂക്ക്","എസെക്കിയേൽ","ദാനിയേൽ","ഹോസിയ","ജോയേൽ","ആമോസ്","ഒബാദിയ","യോനാ","മിക്ക","നാഹും","ഹബകൂക്","സെഫാനിയ","ഹഗ്ഗായി","സഖറിയ","മലാഖി"
], //46 books
"newTestament": [
"മത്തായി","മർക്കോസ്","ലൂക്ക","യോഹന്നാൻ","അപ്പ. പ്രവർത്തനങ്ങൾ","റോമാ","1 കൊറിന്തോസ്","2 കൊറിന്തോസ്","ഗലാത്തിയ","എഫേസോസ്","ഫിലിപ്പി","കൊളൊസോസ്","1 തേസലോനിക്ക","2 തേസലോനിക്ക","1 തിമോത്തെയോസ്","2 തിമോത്തെയോസ്","തീത്തോസ്","ഫിലെമോൻ","ഹെബ്രായർ","യാക്കോബ്","1 പത്രോസ്","2 പത്രോസ്","1 യോഹന്നാൻ","2 യോഹന്നാൻ","3 യോഹന്നാൻ","യൂദാസ്","വെളിപാട്"
] //27 books
	},
"chapters": {
"oldTestament": [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,14,16,21,16,15,42,150,31,12,8,19,51,66,52,5,6,48,14,14,3,9,1,4,7,3,3,3,2,14,4],
"newTestament": [28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22]
	},
"verses": {
"oldTestament": [
//Genesis
[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],
//Exodus
[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],
//Leviticus
[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],
//Numbers
[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,22,31,40,16,54,42,56,29,34,13],
//Deuteronomy
[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],
//Joshua
[18,24,17,24,15,27,26,35,27,43,23,9,33,15,63,10,18,28,51,9,45,34,16,33],
//Judges
[36,23,31,24,31,40,25,34,57,18,40,15,25,20,20,31,13,31,30,48,25],
//Ruth
[22,23,18,22],
//1 Samuel
[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,28,22,44,25,12,25,11,31,13],
//2 Samuel
[27,32,39,12,25,23,29,18,13,19,27,31,38,33,37,23,29,33,43,26,22,51,39,25],
//1 Kings
[53,46,28,34,18,38,51,66,27,29,43,33,34,31,34,34,24,46,21,43,29,53],
//2 Kings
[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],
//1 Chronicles
[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],
//2 Chronicles
[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],
//Esra
[11,70,13,24,17,22,28,36,15,44],
//Nehemiah
[11,20,32,23,19,19,73,18,38,39,36,47,31],
//Tobith
[22,14,17,21,21,17,17,21,6,12,19,22,18,15],
//Judith
[16,28,10,15,24,21,32,36,14,23,23,20,20,19,14,25],
//Esther
[12,6,22,23,13,7,15,17,18,19,2,15,14,14,10,12,24,17,32,13,1],
//1 Maccabees
[64,70,60,61,68,63,50,32,73,89,74,53,53,49,41,24],
//2 Maccabees
[36,32,40,50,27,31,42,36,29,38,38,45,26,46,39],
//Job
[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,17,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],
//Psalms
[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],
//Proverbs
[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],
//Ecclesiastes
[18,26,22,16,20,12,29,17,18,20,10,14],
//Song of Songs
[17,17,11,16,16,13,13,14],
//Wisdom
[16,24,19,20,23,25,30,21,19,21,26,27,19,31,19,29,21,25,22],
//Sirach
[30,18,31,31,15,37,36,19,18,31,34,18,26,27,20,30,32,33,30,32,28,27,28,34,26,29,30,26,28,25,31,24,33,31,26,26,31,34,35,30,23,25,33,23,26,20,25,25,16,29,30],
//Isaiah
[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],
//Geramiah
[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],
//Lamentations
[22,22,66,22,22],
//Baruch
[21,35,37,37,9,73],
//Ezekiel
[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,27,23,29,48,26,20,27,31,25,24,23,35],
//Daniel
[21,49,30,37,31,28,28,27,27,21,45,13,64,42],
//Hosea
[11,23,5,19,15,11,16,14,17,15,12,14,16,9],
//Joel
[20,32,21],
//Amos
[15,16,15,13,27,14,17,14,15],
//Obadiah
[21],
//Jonah
[17,10,10,11],
//Micah
[16,13,12,13,15,16,20],
//Nahum
[15,13,19],
//Habakkuk
[17,20,19],
//Zephaniah
[18,15,20],
//Haggai
[15,23],
//Zachariah
[21,13,10,14,11,15,14,23,17,12,17,14,9,21],
//Malachi
[14,17,18,6]
],
"newTestament": [
//Matthew
[25,23,17,25,48,34,28,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],
//Mark
[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],
//Luke
[80,52,38,44,39,49,50,55,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],
//John
[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],
//Acts of Apostles
[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
//Romans
[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],
//1 Corinthians
[31,16,23,21,13,20,40,13,27,33,34,31,13,39,58,24],
//2 Corinthians
[24,17,18,18,21,18,16,24,15,18,33,21,14],
//Galatians
[24,21,29,31,26,18],
//Ephesians
[23,22,21,32,33,24],
//Philippians
[30,30,21,23],
//Colossians
[29,23,26,18],
//1 Thessalonians
[10,20,13,18,28],
//2 Thessalonians
[12,17,18],
//1 Timothy
[20,15,16,16,25,21],
//2 Timothy
[18,26,17,22],
//Titus
[16,15,15],
//Philemon
[25],
//Hebrews
[14,18,19,16,14,20,28,12,28,39,40,29,25],
//James
[27,26,18,17,20],
//1 Peter
[25,25,22,19,14],
//2 Peter
[21,22,18],
//1 John
[10,29,24,21,21],
//2 John
[13],
//3 John
[15],
//Jude
[25],
//Revelation
[20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,24,21,15,27,21]
]
	}
}
//doc(dailyPhrase.verses.oldTestament[0].length);
function random(m,n) {
let randomNumber = m + Math.floor((n-m+1)*Math.random());
return randomNumber;
}
function range(initial,final,step=1,final_inclusive=true) {
	let arr = new Array();
	if(typeof initial ==="number" && typeof final ==="number" && typeof step ==="number" &&  typeof final_inclusive ==="boolean") {
			for(let i=0; final_inclusive ? initial <= final : initial < final; i++) {
				arr[i]=initial;
				initial=initial+step;
				}
		return arr;
		}
	else { return new Error("Invalid Parameters"); }
}
function randomPhrase() {
let oldTestBookVersesLen = (function() {
	let arr = new Array();
	for(let j of dailyPhrase.verses.oldTestament)
		arr.push(j.length);
	return arr;
	})();
let newTestBookVersesLen = (function() {
	let arr = new Array();
	for(let j of dailyPhrase.verses.newTestament)
		arr.push(j.length);
	return arr;
	})();

let oldTestamentBookVerses = (function() {
let arr = new Array();
	for(let i of dailyPhrase.verses.oldTestament) {
		for(let s of i)
			arr.push(s);
		}
return arr;
})();

let newTestamentBookVerses =
(function() {
let arr = new Array();
	for(let i of dailyPhrase.verses.newTestament) {
		for(let s of i)
			arr.push(s);
		}
return arr;
})();

let bookVersesOfBible = oldTestamentBookVerses.concat(newTestamentBookVerses);

let theVerse = random(0,bookVersesOfBible.length-1);

if(theVerse < oldTestamentBookVerses.length) {
	$("div.circle-abbr").textContent = "OT";
	}
else {
	$("div.circle-abbr").textContent = "NT";
	}
try {
(function() {
	let a = 0;
	let i = theVerse;
	if(theVerse > oldTestBookVersesLen[0]) {
	while(i >= 0 ) {
	i = i - oldTestBookVersesLen[a];
	a++; }
	}
	if(theVerse < oldTestamentBookVerses.length) {
	if(theVerse > oldTestBookVersesLen[0]) {
	let currBookVers = dailyPhrase.verses.oldTestament[a-1];
let regex = new RegExp(`${bookVersesOfBible[theVerse]}+`);
let cbv = new Array();
//cbv:- currentBookVerseArray
let indx, d = 0;
for(let c = 0; c < currBookVers.length; c++) {
	indx = currBookVers[c] + "";
	if(indx.match(regex)) {
		cbv[d] = c;
		d++;
		}
	}
let chapterIndex = cbv[random(0,cbv.length-1)];

	$("div.thePhrase").textContent = `${dailyPhrase.books.oldTestament[a-1]} ${chapterIndex + 1} : ${random(1,bookVersesOfBible[theVerse])}`;
	}
	else {
	let currBookVers = dailyPhrase.verses.oldTestament[a];
let regex = new RegExp(`${bookVersesOfBible[theVerse]}+`);
let cbv = new Array();
let indx, d = 0;
for(let c = 0; c < currBookVers.length; c++) {
	indx = currBookVers[c] + "";
	if(indx.match(regex)) {
		cbv[d] = c;
		d++;
		}
	}
let chapterIndex = cbv[random(0,cbv.length-1)];

	$("div.thePhrase").textContent = `${dailyPhrase.books.oldTestament[0]} ${chapterIndex + 1} : ${random(1,bookVersesOfBible[theVerse])}`;
	}
}
})();
} catch(e) { doc(e); }
if(theVerse >= oldTestamentBookVerses.length) { 
(function() {
	theVerseMod = theVerse - oldTestamentBookVerses.length;
let a=0;
let i = theVerseMod;
	while(i >= 0) {
	i = i - newTestBookVersesLen[a];
	a++;
	}
	let currBookVers = dailyPhrase.verses.newTestament[a-1];
let regex = new RegExp(`${bookVersesOfBible[theVerse]}+`);
let cbv = new Array();
let indx, d = 0;
for(let c = 0; c < currBookVers.length; c++) {
	indx = currBookVers[c] + "";
	if(indx.match(regex)) {
		cbv[d] = c;
		d++;
		}
	}
let chapterIndex = cbv[random(0,cbv.length-1)];

	$("div.thePhrase").textContent = `${dailyPhrase.books.newTestament[a-1]} ${chapterIndex + 1} : ${random(1,bookVersesOfBible[theVerse])}`;
		})();
	}
}//randomPhrase
randomPhrase();
function $(query=null,event=null,action=null) {
	let tag = (query) => query != null ? document.querySelector(query) : new Error("no Query!");
	if(query != null && event == null && action == null) 
	return tag(query);
	else if(query !=null && event != null && action != null)
		tag(query).addEventListener(event,action);
	else if(query != null && event != null && action == null)
		return new Error("action for the event "+ event +" is not provided");
	else if(query != null && event == null && action != null)
		tag(query).addEventListener("load",action);
	else return new Error("something went wrong!");
	}
$("div.getAnotherPhrase","click",function() {
	$("div.getAnotherPhrase").setAttribute("class","getAnotherPhrase active");
setTimeout(function() {
		$("div.getAnotherPhrase").setAttribute("class","getAnotherPhrase passive");
},200);
		randomPhrase();
});
});