function localtranscribe (direction, str) {
	
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'toDeva') { return toDeva(str) }
	}
		
		
function toTranslit (str) {
	str += '  '

str = str.toUpperCase()

str = str.replace(/\u13A0/g, "a")
str = str.replace(/\u13A1/g, "e")
str = str.replace(/\u13A2/g, "i")
str = str.replace(/\u13A3/g, "o")
str = str.replace(/\u13A4/g, "u")
str = str.replace(/\u13A5/g, "v")
str = str.replace(/\u13A6/g, "ga")
str = str.replace(/\u13A7/g, "ka")
str = str.replace(/\u13A8/g, "ge")
str = str.replace(/\u13A9/g, "gi")
str = str.replace(/\u13AA/g, "go")
str = str.replace(/\u13AB/g, "gu")
str = str.replace(/\u13AC/g, "gv")
str = str.replace(/\u13AD/g, "ha")
str = str.replace(/\u13AE/g, "he")
str = str.replace(/\u13AF/g, "hi")
str = str.replace(/\u13B0/g, "ho")
str = str.replace(/\u13B1/g, "hu")
str = str.replace(/\u13B2/g, "hv")
str = str.replace(/\u13B3/g, "la")
str = str.replace(/\u13B4/g, "le")
str = str.replace(/\u13B5/g, "li")
str = str.replace(/\u13B6/g, "lo")
str = str.replace(/\u13B7/g, "lu")
str = str.replace(/\u13B8/g, "lv")
str = str.replace(/\u13B9/g, "ma")
str = str.replace(/\u13BA/g, "me")
str = str.replace(/\u13BB/g, "mi")
str = str.replace(/\u13BC/g, "mo")
str = str.replace(/\u13BD/g, "mu")
str = str.replace(/\u13F5/g, "mv")
str = str.replace(/\u13BE/g, "na")
str = str.replace(/\u13BF/g, "hna")
str = str.replace(/\u13C0/g, "nah")
str = str.replace(/\u13C1/g, "ne")
str = str.replace(/\u13C2/g, "ni")
str = str.replace(/\u13C3/g, "no")
str = str.replace(/\u13C4/g, "nu")
str = str.replace(/\u13C5/g, "nv")
str = str.replace(/\u13C6/g, "qa")
str = str.replace(/\u13C7/g, "qe")
str = str.replace(/\u13C8/g, "qi")
str = str.replace(/\u13C9/g, "qo")
str = str.replace(/\u13CA/g, "qu")
str = str.replace(/\u13CB/g, "qv")
str = str.replace(/\u13CD/g, "s")
str = str.replace(/\u13CC/g, "sa")
str = str.replace(/\u13CE/g, "se")
str = str.replace(/\u13CF/g, "si")
str = str.replace(/\u13D0/g, "so")
str = str.replace(/\u13D1/g, "su")
str = str.replace(/\u13D2/g, "sv")
str = str.replace(/\u13D3/g, "da")
str = str.replace(/\u13D4/g, "ta")
str = str.replace(/\u13D5/g, "de")
str = str.replace(/\u13D6/g, "te")
str = str.replace(/\u13D7/g, "di")
str = str.replace(/\u13D8/g, "ti")
str = str.replace(/\u13D9/g, "do")
str = str.replace(/\u13DA/g, "du")
str = str.replace(/\u13DB/g, "dv")
str = str.replace(/\u13DC/g, "dla")
str = str.replace(/\u13DD/g, "tla")
str = str.replace(/\u13DE/g, "dle")
str = str.replace(/\u13DF/g, "dli")
str = str.replace(/\u13E0/g, "dlo")
str = str.replace(/\u13E1/g, "dlu")
str = str.replace(/\u13E2/g, "dlv")
str = str.replace(/\u13E3/g, "tsa")
str = str.replace(/\u13E4/g, "tse")
str = str.replace(/\u13E5/g, "tsi")
str = str.replace(/\u13E6/g, "tso")
str = str.replace(/\u13E7/g, "tsu")
str = str.replace(/\u13E8/g, "tsv")
str = str.replace(/\u13E9/g, "wa")
str = str.replace(/\u13EA/g, "we")
str = str.replace(/\u13EB/g, "wi")
str = str.replace(/\u13EC/g, "wo")
str = str.replace(/\u13ED/g, "wu")
str = str.replace(/\u13EE/g, "wv")
str = str.replace(/\u13EF/g, "ya")
str = str.replace(/\u13F0/g, "ye")
str = str.replace(/\u13F1/g, "yi")
str = str.replace(/\u13F2/g, "yo")
str = str.replace(/\u13F3/g, "yu")
str = str.replace(/\u13F4/g, "yv")



console.log(str)
	return str.trim()
	}



function toDeva (str) {
	}

