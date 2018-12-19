function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'reverse') { return reverse(str) }
	}
		
		


function transliterate (str) {
	// transcribes ethiopic text into a transliteration
    // works on the main Ethiopic block only
    
        	
		
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	
	// handle syllables that have -oa rather than -wa
	//str = str.replace('ḳwa','ḳao')
	//str = str.replace('ḫwa','ḫao')
	//str = str.replace('kwa','kao')
	//str = str.replace('wwa','wao')
	//str = str.replace('ywa','yao')
	//str = str.replace('gwa','gao')
	//str = str.replace('ṣ́wa','ṣ́ao')
	
str = str.replace(/ሀ/g, "hä")
str = str.replace(/ሁ/g, "hu")
str = str.replace(/ሂ/g, "hi")
str = str.replace(/ሃ/g, "ha")
str = str.replace(/ሄ/g, "he")
str = str.replace(/ህ/g, "hə")
str = str.replace(/ሆ/g, "ho")
str = str.replace(/ሇ/g, "hoa")
str = str.replace(/ለ/g, "lä")
str = str.replace(/ሉ/g, "lu")
str = str.replace(/ሊ/g, "li")
str = str.replace(/ላ/g, "la")
str = str.replace(/ሌ/g, "le")
str = str.replace(/ል/g, "lə")
str = str.replace(/ሎ/g, "lo")
str = str.replace(/ሏ/g, "lwa")
str = str.replace(/ⶀ/g, "loa")
str = str.replace(/ሐ/g, "ḥä")
str = str.replace(/ሑ/g, "ḥu")
str = str.replace(/ሒ/g, "ḥi")
str = str.replace(/ሓ/g, "ḥa")
str = str.replace(/ሔ/g, "ḥe")
str = str.replace(/ሕ/g, "ḥə")
str = str.replace(/ሖ/g, "ḥo")
str = str.replace(/ሗ/g, "ḥwa")
str = str.replace(/መ/g, "mä")
str = str.replace(/ሙ/g, "mu")
str = str.replace(/ሚ/g, "mi")
str = str.replace(/ማ/g, "ma")
str = str.replace(/ሜ/g, "me")
str = str.replace(/ም/g, "mə")
str = str.replace(/ሞ/g, "mo")
str = str.replace(/ሟ/g, "mwa")
str = str.replace(/ⶁ/g, "moa")
str = str.replace(/ፙ/g, "mya")
str = str.replace(/ᎀ/g, "mʷä")
str = str.replace(/ᎁ/g, "mʷi")
str = str.replace(/ᎂ/g, "mʷe")
str = str.replace(/ᎃ/g, "mʷə")
str = str.replace(/ሠ/g, "śä")
str = str.replace(/ሡ/g, "śu")
str = str.replace(/ሢ/g, "śi")
str = str.replace(/ሣ/g, "śa")
str = str.replace(/ሤ/g, "śe")
str = str.replace(/ሥ/g, "śə")
str = str.replace(/ሦ/g, "śo")
str = str.replace(/ሧ/g, "śwa")
str = str.replace(/ረ/g, "rä")
str = str.replace(/ሩ/g, "ru")
str = str.replace(/ሪ/g, "ri")
str = str.replace(/ራ/g, "ra")
str = str.replace(/ሬ/g, "re")
str = str.replace(/ር/g, "rə")
str = str.replace(/ሮ/g, "ro")
str = str.replace(/ሯ/g, "rwa")
str = str.replace(/ⶂ/g, "roa")
str = str.replace(/ፘ/g, "rya")
str = str.replace(/ሰ/g, "sä")
str = str.replace(/ሱ/g, "su")
str = str.replace(/ሲ/g, "si")
str = str.replace(/ሳ/g, "sa")
str = str.replace(/ሴ/g, "se")
str = str.replace(/ስ/g, "sə")
str = str.replace(/ሶ/g, "so")
str = str.replace(/ሷ/g, "swa")
str = str.replace(/ⶃ/g, "soa")
str = str.replace(/ሸ/g, "šä")
str = str.replace(/ሹ/g, "šu")
str = str.replace(/ሺ/g, "ši")
str = str.replace(/ሻ/g, "ša")
str = str.replace(/ሼ/g, "še")
str = str.replace(/ሽ/g, "šə")
str = str.replace(/ሾ/g, "šo")
str = str.replace(/ሿ/g, "šwa")
str = str.replace(/ⶄ/g, "šoa")

str = str.replace(/ቀ/g, "ḳä")
str = str.replace(/ቁ/g, "ḳu")
str = str.replace(/ቂ/g, "ḳi")
str = str.replace(/ቃ/g, "ḳa")
str = str.replace(/ቄ/g, "ḳe")
str = str.replace(/ቅ/g, "ḳə")
str = str.replace(/ቆ/g, "ḳo")
str = str.replace(/ቇ/g, "ḳoa")
str = str.replace(/ቈ/g, "ḳʷä")
str = str.replace(/ቊ/g, "ḳʷi")
str = str.replace(/ቋ/g, "ḳʷa")
str = str.replace(/ቌ/g, "ḳʷe")
str = str.replace(/ቍ/g, "ḳʷə")
str = str.replace(/ቐ/g, "ḳʰä")
str = str.replace(/ቑ/g, "ḳʰu")
str = str.replace(/ቒ/g, "ḳʰi")
str = str.replace(/ቓ/g, "ḳʰa")
str = str.replace(/ቔ/g, "ḳʰe")
str = str.replace(/ቕ/g, "ḳʰə")
str = str.replace(/ቖ/g, "ḳʰo")
str = str.replace(/ቘ/g, "ḳʰʷä")
str = str.replace(/ቚ/g, "ḳʰʷi")
str = str.replace(/ቛ/g, "ḳʰʷa")
str = str.replace(/ቜ/g, "ḳʰʷe")
str = str.replace(/ቝ/g, "ḳʰʷə")

str = str.replace(/በ/g, "bä")
str = str.replace(/ቡ/g, "bu")
str = str.replace(/ቢ/g, "bi")
str = str.replace(/ባ/g, "ba")
str = str.replace(/ቤ/g, "be")
str = str.replace(/ብ/g, "bə")
str = str.replace(/ቦ/g, "bo")
str = str.replace(/ቧ/g, "bwa")
str = str.replace(/ⶅ/g, "boa")
str = str.replace(/ᎄ/g, "bʷä")
str = str.replace(/ᎅ/g, "bʷi")
str = str.replace(/ᎆ/g, "bʷe")
str = str.replace(/ᎇ/g, "bʷə")
str = str.replace(/ቨ/g, "vä")
str = str.replace(/ቩ/g, "vu")
str = str.replace(/ቪ/g, "vi")
str = str.replace(/ቫ/g, "va")
str = str.replace(/ቬ/g, "ve")
str = str.replace(/ቭ/g, "və")
str = str.replace(/ቮ/g, "vo")
str = str.replace(/ቯ/g, "vwa")
str = str.replace(/ተ/g, "tä")
str = str.replace(/ቱ/g, "tu")
str = str.replace(/ቲ/g, "ti")
str = str.replace(/ታ/g, "ta")
str = str.replace(/ቴ/g, "te")
str = str.replace(/ት/g, "tə")
str = str.replace(/ቶ/g, "to")
str = str.replace(/ቷ/g, "twa")
str = str.replace(/ⶆ/g, "toa")
str = str.replace(/ቸ/g, "čä")
str = str.replace(/ቹ/g, "ču")
str = str.replace(/ቺ/g, "či")
str = str.replace(/ቻ/g, "ča")
str = str.replace(/ቼ/g, "če")
str = str.replace(/ች/g, "čə")
str = str.replace(/ቾ/g, "čo")
str = str.replace(/ቿ/g, "čwa")
str = str.replace(/ⶇ/g, "čoa")

str = str.replace(/ኀ/g, "ḫä")
str = str.replace(/ኁ/g, "ḫu")
str = str.replace(/ኂ/g, "ḫi")
str = str.replace(/ኃ/g, "ḫa")
str = str.replace(/ኄ/g, "ḫe")
str = str.replace(/ኅ/g, "ḫə")
str = str.replace(/ኆ/g, "ḫo")
str = str.replace(/ኇ/g, "ḫoa")
str = str.replace(/ኈ/g, "ḫʷä")
str = str.replace(/ኊ/g, "ḫʷi")
str = str.replace(/ኋ/g, "ḫʷa")
str = str.replace(/ኌ/g, "ḫʷe")
str = str.replace(/ኍ/g, "ḫʷə")
str = str.replace(/ነ/g, "nä")
str = str.replace(/ኑ/g, "nu")
str = str.replace(/ኒ/g, "ni")
str = str.replace(/ና/g, "na")
str = str.replace(/ኔ/g, "ne")
str = str.replace(/ን/g, "nə")
str = str.replace(/ኖ/g, "no")
str = str.replace(/ኗ/g, "nwa")
str = str.replace(/ⶈ/g, "noa")
str = str.replace(/ኘ/g, "ñä")
str = str.replace(/ኙ/g, "ñu")
str = str.replace(/ኚ/g, "ñi")
str = str.replace(/ኛ/g, "ña")
str = str.replace(/ኜ/g, "ñe")
str = str.replace(/ኝ/g, "ñə")
str = str.replace(/ኞ/g, "ño")
str = str.replace(/ኟ/g, "ñwa")
str = str.replace(/ⶉ/g, "ñoa")
str = str.replace(/አ/g, "ʾä")
str = str.replace(/ኡ/g, "ʾu")
str = str.replace(/ኢ/g, "ʾi")
str = str.replace(/ኣ/g, "ʾa")
str = str.replace(/ኤ/g, "ʾe")
str = str.replace(/እ/g, "ʾə")
str = str.replace(/ኦ/g, "ʾo")
str = str.replace(/ኧ/g, "ʾwa")
str = str.replace(/ⶊ/g, "ʾoa")
str = str.replace(/ከ/g, "kä")
str = str.replace(/ኩ/g, "ku")
str = str.replace(/ኪ/g, "ki")
str = str.replace(/ካ/g, "ka")
str = str.replace(/ኬ/g, "ke")
str = str.replace(/ክ/g, "kə")
str = str.replace(/ኮ/g, "ko")
str = str.replace(/ኯ/g, "koa")
str = str.replace(/ኰ/g, "kʷä")
str = str.replace(/ኲ/g, "kʷi")
str = str.replace(/ኳ/g, "kʷa")
str = str.replace(/ኴ/g, "kʷe")
str = str.replace(/ኵ/g, "kʷə")

str = str.replace(/ኸ/g, "xä")
str = str.replace(/ኹ/g, "xu")
str = str.replace(/ኺ/g, "xi")
str = str.replace(/ኻ/g, "xa")
str = str.replace(/ኼ/g, "xe")
str = str.replace(/ኽ/g, "xə")
str = str.replace(/ኾ/g, "xo")
str = str.replace(/ዀ/g, "xʷä")
str = str.replace(/ዂ/g, "xʷi")
str = str.replace(/ዃ/g, "xʷa")
str = str.replace(/ዄ/g, "xʷe")
str = str.replace(/ዅ/g, "xʷə")

str = str.replace(/ወ/g, "wä")
str = str.replace(/ዉ/g, "wu")
str = str.replace(/ዊ/g, "wi")
str = str.replace(/ዋ/g, "wa")
str = str.replace(/ዌ/g, "we")
str = str.replace(/ው/g, "wə")
str = str.replace(/ዎ/g, "wo")
str = str.replace(/ዏ/g, "woa")
str = str.replace(/ዐ/g, "ʿä")
str = str.replace(/ዑ/g, "ʿu")
str = str.replace(/ዒ/g, "ʿi")
str = str.replace(/ዓ/g, "ʿa")
str = str.replace(/ዔ/g, "ʿe")
str = str.replace(/ዕ/g, "ʿə")
str = str.replace(/ዖ/g, "ʿo")
str = str.replace(/ዘ/g, "zä")
str = str.replace(/ዙ/g, "zu")
str = str.replace(/ዚ/g, "zi")
str = str.replace(/ዛ/g, "za")
str = str.replace(/ዜ/g, "ze")
str = str.replace(/ዝ/g, "zə")
str = str.replace(/ዞ/g, "zo")
str = str.replace(/ዟ/g, "zwa")
str = str.replace(/ዠ/g, "žä")
str = str.replace(/ዡ/g, "žu")
str = str.replace(/ዢ/g, "ži")
str = str.replace(/ዣ/g, "ža")
str = str.replace(/ዤ/g, "že")
str = str.replace(/ዥ/g, "žə")
str = str.replace(/ዦ/g, "žo")
str = str.replace(/ዧ/g, "žwa")
str = str.replace(/ⶋ/g, "žoa")

str = str.replace(/የ/g, "yä")
str = str.replace(/ዩ/g, "yu")
str = str.replace(/ዪ/g, "yi")
str = str.replace(/ያ/g, "ya")
str = str.replace(/ዬ/g, "ye")
str = str.replace(/ይ/g, "yə")
str = str.replace(/ዮ/g, "yo")
str = str.replace(/ዯ/g, "yoa")
str = str.replace(/ደ/g, "dä")
str = str.replace(/ዱ/g, "du")
str = str.replace(/ዲ/g, "di")
str = str.replace(/ዳ/g, "da")
str = str.replace(/ዴ/g, "de")
str = str.replace(/ድ/g, "də")
str = str.replace(/ዶ/g, "do")
str = str.replace(/ዷ/g, "dwa")
str = str.replace(/ⶌ/g, "doa")

str = str.replace(/ዿ/g, "wa")
str = str.replace(/ⶍ/g, "oa")

str = str.replace(/ጀ/g, "ǧä")
str = str.replace(/ጁ/g, "ǧu")
str = str.replace(/ጂ/g, "ǧi")
str = str.replace(/ጃ/g, "ǧa")
str = str.replace(/ጄ/g, "ǧe")
str = str.replace(/ጅ/g, "ǧə")
str = str.replace(/ጆ/g, "ǧo")
str = str.replace(/ጇ/g, "ǧwa")
str = str.replace(/ⶎ/g, "ǧoa")
str = str.replace(/ገ/g, "gä")
str = str.replace(/ጉ/g, "gu")
str = str.replace(/ጊ/g, "gi")
str = str.replace(/ጋ/g, "ga")
str = str.replace(/ጌ/g, "ge")
str = str.replace(/ግ/g, "gə")
str = str.replace(/ጎ/g, "go")
str = str.replace(/ጏ/g, "goa")
str = str.replace(/ጐ/g, "gʷä")
str = str.replace(/ጒ/g, "gʷu")
str = str.replace(/ጓ/g, "gʷa")
str = str.replace(/ጔ/g, "gʷe")
str = str.replace(/ጕ/g, "gʷə")

str = str.replace(/ጘ/g, "ŋä")
str = str.replace(/ጙ/g, "ŋu")
str = str.replace(/ጚ/g, "ŋi")
str = str.replace(/ጛ/g, "ŋa")
str = str.replace(/ጜ/g, "ŋe")
str = str.replace(/ጝ/g, "ŋə")
str = str.replace(/ጞ/g, "ŋo")
str = str.replace(/ጟ/g, "ŋwa")
str = str.replace(/ⶓ/g, "ŋʷä")
str = str.replace(/ⶔ/g, "ŋʷi")
str = str.replace(/ⶕ/g, "ŋʷe")
str = str.replace(/ⶖ/g, "ŋʷə")
str = str.replace(/ጠ/g, "ṭä")
str = str.replace(/ጡ/g, "ṭu")
str = str.replace(/ጢ/g, "ṭi")
str = str.replace(/ጣ/g, "ṭa")
str = str.replace(/ጤ/g, "ṭe")
str = str.replace(/ጥ/g, "ṭə")
str = str.replace(/ጦ/g, "ṭo")
str = str.replace(/ጧ/g, "ṭwa")
str = str.replace(/ⶏ/g, "ṭoa")
str = str.replace(/ጨ/g, "č̣ä")
str = str.replace(/ጩ/g, "č̣u")
str = str.replace(/ጪ/g, "č̣i")
str = str.replace(/ጫ/g, "č̣a")
str = str.replace(/ጬ/g, "č̣e")
str = str.replace(/ጭ/g, "č̣ə")
str = str.replace(/ጮ/g, "č̣o")
str = str.replace(/ጯ/g, "č̣wa")
str = str.replace(/ⶐ/g, "č̣oa")

str = str.replace(/ጰ/g, "p̣ä")
str = str.replace(/ጱ/g, "p̣u")
str = str.replace(/ጲ/g, "p̣i")
str = str.replace(/ጳ/g, "p̣a")
str = str.replace(/ጴ/g, "p̣e")
str = str.replace(/ጵ/g, "p̣ə")
str = str.replace(/ጶ/g, "p̣o")
str = str.replace(/ጷ/g, "p̣wa")
str = str.replace(/ⶑ/g, "p̣oa")
str = str.replace(/ጸ/g, "ṣä")
str = str.replace(/ጹ/g, "ṣu")
str = str.replace(/ጺ/g, "ṣi")
str = str.replace(/ጻ/g, "ṣa")
str = str.replace(/ጼ/g, "ṣe")
str = str.replace(/ጽ/g, "ṣə")
str = str.replace(/ጾ/g, "ṣo")
str = str.replace(/ጿ/g, "ṣwa")

str = str.replace(/ፀ/g, "ṣ́ä")
str = str.replace(/ፁ/g, "ṣ́u")
str = str.replace(/ፂ/g, "ṣ́i")
str = str.replace(/ፃ/g, "ṣ́a")
str = str.replace(/ፄ/g, "ṣ́e")
str = str.replace(/ፅ/g, "ṣ́ə")
str = str.replace(/ፆ/g, "ṣ́o")
str = str.replace(/ፇ/g, "ṣ́oa")
str = str.replace(/ፈ/g, "fä")
str = str.replace(/ፉ/g, "fu")
str = str.replace(/ፊ/g, "fi")
str = str.replace(/ፋ/g, "fa")
str = str.replace(/ፌ/g, "fe")
str = str.replace(/ፍ/g, "fə")
str = str.replace(/ፎ/g, "fo")
str = str.replace(/ፏ/g, "fwa")
str = str.replace(/ፚ/g, "fya")
str = str.replace(/ᎈ/g, "fʷä")
str = str.replace(/ᎉ/g, "fʷi")
str = str.replace(/ᎊ/g, "fʷe")
str = str.replace(/ᎋ/g, "fʷə")
str = str.replace(/ፐ/g, "pä")
str = str.replace(/ፑ/g, "pu")
str = str.replace(/ፒ/g, "pi")
str = str.replace(/ፓ/g, "pa")
str = str.replace(/ፔ/g, "pe")
str = str.replace(/ፕ/g, "pə")
str = str.replace(/ፖ/g, "po")
str = str.replace(/ፗ/g, "pwa")
str = str.replace(/ⶒ/g, "poa")
str = str.replace(/ᎌ/g, "pʷä")
str = str.replace(/ᎍ/g, "pʷi")
str = str.replace(/ᎎ/g, "pʷe")
str = str.replace(/ᎏ/g, "pʷə")

	
	// punctuation
	str = str.replace(/፡/g,' ') // wordspace 
	str = str.replace(/።/g,'. ') // wordspace 
	str = str.replace(/፣/g,', ') // wordspace 
	str = str.replace(/፤/g,'; ') // wordspace 
	str = str.replace(/፥/g,': ') // wordspace 
	str = str.replace(/፦/g,': ') // wordspace 
	str = str.replace(/፧/g,'? ') // wordspace 
	str = str.replace(/፨/g,'–—') // wordspace 


    // numbers
	str = str.replace(/፩/g,'1') 
	str = str.replace(/፪/g,'2') 
	str = str.replace(/፫/g,'3') 
	str = str.replace(/፬/g,'4') 
	str = str.replace(/፭/g,'5') 
	str = str.replace(/፮/g,'6')
	str = str.replace(/፯/g,'7')
	str = str.replace(/፰/g,'8')
	str = str.replace(/፱/g,'9')
	str = str.replace(/۰/g,'0')
	
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}
		
		


function reverse (str) {
    // works on the main Ethiopic block only
    
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	
	// handle syllables that have -oa rather than -wa
	//str = str.replace('ḳwa','ḳao')
	//str = str.replace('ḫwa','ḫao')
	//str = str.replace('kwa','kao')
	//str = str.replace('wwa','wao')
	//str = str.replace('ywa','yao')
	//str = str.replace('gwa','gao')
	//str = str.replace('ṣ́wa','ṣ́ao')
	
	str = str.replace(/0/g, "۰")
	str = str.replace(/9/g, "፱")
	str = str.replace(/8/g, "፰")
	str = str.replace(/7/g, "፯")
	str = str.replace(/6/g, "፮")
	str = str.replace(/5/g, "፭") 
	str = str.replace(/4/g, "፬") 
	str = str.replace(/3/g, "፫") 
	str = str.replace(/2/g, "፪") 
	str = str.replace(/1/g, "፩") 
    // numbers


	str = str.replace(/–—/g, "፨") // wordspace 
	str = str.replace(/\? /g, "፧") // wordspace 
	str = str.replace(/: /g, "፦") // wordspace 
	str = str.replace(/: /g, "፥") // wordspace 
	str = str.replace(/; /g, "፤") // wordspace 
	str = str.replace(/, /g, "፣") // wordspace 
	str = str.replace(/\. /g, "።") // wordspace 
	str = str.replace(/ /g, "፡") // wordspace 
	// punctuation
	

str = str.replace(/pʷə/g, "ᎏ")
str = str.replace(/pʷe/g, "ᎎ")
str = str.replace(/pʷi/g, "ᎍ")
str = str.replace(/pʷä/g, "ᎌ")
str = str.replace(/poa/g, "ⶒ")
str = str.replace(/pwa/g, "ፗ")
str = str.replace(/po/g, "ፖ")
str = str.replace(/pə/g, "ፕ")
str = str.replace(/pe/g, "ፔ")
str = str.replace(/pa/g, "ፓ")
str = str.replace(/pi/g, "ፒ")
str = str.replace(/pu/g, "ፑ")
str = str.replace(/pä/g, "ፐ")

str = str.replace(/fʷə/g, "ᎋ")
str = str.replace(/fʷe/g, "ᎊ")
str = str.replace(/fʷi/g, "ᎉ")
str = str.replace(/fʷä/g, "ᎈ")
str = str.replace(/fya/g, "ፚ")
str = str.replace(/fwa/g, "ፏ")
str = str.replace(/fo/g, "ፎ")
str = str.replace(/fə/g, "ፍ")
str = str.replace(/fe/g, "ፌ")
str = str.replace(/fa/g, "ፋ")
str = str.replace(/fi/g, "ፊ")
str = str.replace(/fu/g, "ፉ")
str = str.replace(/fä/g, "ፈ")

str = str.replace(/ṣ́oa/g, "ፇ")
str = str.replace(/ṣ́o/g, "ፆ")
str = str.replace(/ṣ́ə/g, "ፅ")
str = str.replace(/ṣ́e/g, "ፄ")
str = str.replace(/ṣ́a/g, "ፃ")
str = str.replace(/ṣ́i/g, "ፂ")
str = str.replace(/ṣ́u/g, "ፁ")
str = str.replace(/ṣ́ä/g, "ፀ")

str = str.replace(/ṣwa/g, "ጿ")
str = str.replace(/ṣo/g, "ጾ")
str = str.replace(/ṣə/g, "ጽ")
str = str.replace(/ṣe/g, "ጼ")
str = str.replace(/ṣa/g, "ጻ")
str = str.replace(/ṣi/g, "ጺ")
str = str.replace(/ṣu/g, "ጹ")
str = str.replace(/ṣä/g, "ጸ")

str = str.replace(/p̣oa/g, "ⶑ")
str = str.replace(/p̣wa/g, "ጷ")
str = str.replace(/p̣o/g, "ጶ")
str = str.replace(/p̣ə/g, "ጵ")
str = str.replace(/p̣e/g, "ጴ")
str = str.replace(/p̣a/g, "ጳ")
str = str.replace(/p̣i/g, "ጲ")
str = str.replace(/p̣u/g, "ጱ")
str = str.replace(/p̣ä/g, "ጰ")

str = str.replace(/č̣oa/g, "ⶐ")
str = str.replace(/č̣wa/g, "ጯ")
str = str.replace(/č̣o/g, "ጮ")
str = str.replace(/č̣ə/g, "ጭ")
str = str.replace(/č̣e/g, "ጬ")
str = str.replace(/č̣a/g, "ጫ")
str = str.replace(/č̣i/g, "ጪ")
str = str.replace(/č̣u/g, "ጩ")
str = str.replace(/č̣ä/g, "ጨ")

str = str.replace(/ṭoa/g, "ⶏ")
str = str.replace(/ṭwa/g, "ጧ")
str = str.replace(/ṭo/g, "ጦ")
str = str.replace(/ṭə/g, "ጥ")
str = str.replace(/ṭe/g, "ጤ")
str = str.replace(/ṭa/g, "ጣ")
str = str.replace(/ṭi/g, "ጢ")
str = str.replace(/ṭu/g, "ጡ")
str = str.replace(/ṭä/g, "ጠ")

str = str.replace(/ŋʷə/g, "ⶖ")
str = str.replace(/ŋʷe/g, "ⶕ")
str = str.replace(/ŋʷi/g, "ⶔ")
str = str.replace(/ŋʷä/g, "ⶓ")
str = str.replace(/ŋwa/g, "ጟ")
str = str.replace(/ŋo/g, "ጞ")
str = str.replace(/ŋə/g, "ጝ")
str = str.replace(/ŋe/g, "ጜ")
str = str.replace(/ŋa/g, "ጛ")
str = str.replace(/ŋi/g, "ጚ")
str = str.replace(/ŋu/g, "ጙ")
str = str.replace(/ŋä/g, "ጘ")

str = str.replace(/gʷə/g, "ጕ")
str = str.replace(/gʷe/g, "ጔ")
str = str.replace(/gʷa/g, "ጓ")
str = str.replace(/gʷu/g, "ጒ")
str = str.replace(/gʷä/g, "ጐ")
str = str.replace(/goa/g, "ጏ")
str = str.replace(/go/g, "ጎ")
str = str.replace(/gə/g, "ግ")
str = str.replace(/ge/g, "ጌ")
str = str.replace(/ga/g, "ጋ")
str = str.replace(/gi/g, "ጊ")
str = str.replace(/gu/g, "ጉ")
str = str.replace(/gä/g, "ገ")
str = str.replace(/ǧoa/g, "ⶎ")
str = str.replace(/ǧwa/g, "ጇ")
str = str.replace(/ǧo/g, "ጆ")
str = str.replace(/ǧə/g, "ጅ")
str = str.replace(/ǧe/g, "ጄ")
str = str.replace(/ǧa/g, "ጃ")
str = str.replace(/ǧi/g, "ጂ")
str = str.replace(/ǧu/g, "ጁ")
str = str.replace(/ǧä/g, "ጀ")

str = str.replace(/doa/g, "ⶌ")
str = str.replace(/dwa/g, "ዷ")
str = str.replace(/do/g, "ዶ")
str = str.replace(/də/g, "ድ")
str = str.replace(/de/g, "ዴ")
str = str.replace(/da/g, "ዳ")
str = str.replace(/di/g, "ዲ")
str = str.replace(/du/g, "ዱ")
str = str.replace(/dä/g, "ደ")

str = str.replace(/yoa/g, "ዯ")
str = str.replace(/yo/g, "ዮ")
str = str.replace(/yə/g, "ይ")
str = str.replace(/ye/g, "ዬ")
str = str.replace(/ya/g, "ያ")
str = str.replace(/yi/g, "ዪ")
str = str.replace(/yu/g, "ዩ")
str = str.replace(/yä/g, "የ")

str = str.replace(/žoa/g, "ⶋ")
str = str.replace(/žwa/g, "ዧ")
str = str.replace(/žo/g, "ዦ")
str = str.replace(/žə/g, "ዥ")
str = str.replace(/že/g, "ዤ")
str = str.replace(/ža/g, "ዣ")
str = str.replace(/ži/g, "ዢ")
str = str.replace(/žu/g, "ዡ")
str = str.replace(/žä/g, "ዠ")

str = str.replace(/zwa/g, "ዟ")
str = str.replace(/zo/g, "ዞ")
str = str.replace(/zə/g, "ዝ")
str = str.replace(/ze/g, "ዜ")
str = str.replace(/za/g, "ዛ")
str = str.replace(/zi/g, "ዚ")
str = str.replace(/zu/g, "ዙ")
str = str.replace(/zä/g, "ዘ")

str = str.replace(/woa/g, "ዏ")
str = str.replace(/wo/g, "ዎ")
str = str.replace(/wə/g, "ው")
str = str.replace(/we/g, "ዌ")
str = str.replace(/wa/g, "ዋ")
str = str.replace(/wi/g, "ዊ")
str = str.replace(/wu/g, "ዉ")
str = str.replace(/wä/g, "ወ")

str = str.replace(/xʷə/g, "ዅ")
str = str.replace(/xʷe/g, "ዄ")
str = str.replace(/xʷa/g, "ዃ")
str = str.replace(/xʷi/g, "ዂ")
str = str.replace(/xʷä/g, "ዀ")

str = str.replace(/xo/g, "ኾ")
str = str.replace(/xə/g, "ኽ")
str = str.replace(/xe/g, "ኼ")
str = str.replace(/xa/g, "ኻ")
str = str.replace(/xi/g, "ኺ")
str = str.replace(/xu/g, "ኹ")
str = str.replace(/xä/g, "ኸ")

str = str.replace(/kʷə/g, "ኵ")
str = str.replace(/kʷe/g, "ኴ")
str = str.replace(/kʷa/g, "ኳ")
str = str.replace(/kʷi/g, "ኲ")
str = str.replace(/kʷä/g, "ኰ")
str = str.replace(/koa/g, "ኯ")
str = str.replace(/ko/g, "ኮ")
str = str.replace(/kə/g, "ክ")
str = str.replace(/ke/g, "ኬ")
str = str.replace(/ka/g, "ካ")
str = str.replace(/ki/g, "ኪ")
str = str.replace(/ku/g, "ኩ")
str = str.replace(/kä/g, "ከ")

str = str.replace(/ʾoa/g, "ⶊ")
str = str.replace(/ʾwa/g, "ኧ")
str = str.replace(/ʾo/g, "ኦ")
str = str.replace(/ʾə/g, "እ")
str = str.replace(/ʾe/g, "ኤ")
str = str.replace(/ʾa/g, "ኣ")
str = str.replace(/ʾi/g, "ኢ")
str = str.replace(/ʾu/g, "ኡ")
str = str.replace(/ʾä/g, "አ")

str = str.replace(/ʿo/g, "ዖ")
str = str.replace(/ʿə/g, "ዕ")
str = str.replace(/ʿe/g, "ዔ")
str = str.replace(/ʿa/g, "ዓ")
str = str.replace(/ʿi/g, "ዒ")
str = str.replace(/ʿu/g, "ዑ")
str = str.replace(/ʿä/g, "ዐ")


str = str.replace(/ñoa/g, "ⶉ")
str = str.replace(/ñwa/g, "ኟ")
str = str.replace(/ño/g, "ኞ")
str = str.replace(/ñə/g, "ኝ")
str = str.replace(/ñe/g, "ኜ")
str = str.replace(/ña/g, "ኛ")
str = str.replace(/ñi/g, "ኚ")
str = str.replace(/ñu/g, "ኙ")
str = str.replace(/ñä/g, "ኘ")
str = str.replace(/noa/g, "ⶈ")
str = str.replace(/nwa/g, "ኗ")
str = str.replace(/no/g, "ኖ")
str = str.replace(/nə/g, "ን")
str = str.replace(/ne/g, "ኔ")
str = str.replace(/na/g, "ና")
str = str.replace(/ni/g, "ኒ")
str = str.replace(/nu/g, "ኑ")
str = str.replace(/nä/g, "ነ")

str = str.replace(/ḫʷə/g, "ኍ")
str = str.replace(/ḫʷe/g, "ኌ")
str = str.replace(/ḫʷa/g, "ኋ")
str = str.replace(/ḫʷi/g, "ኊ")
str = str.replace(/ḫʷä/g, "ኈ")
str = str.replace(/ḫoa/g, "ኇ")
str = str.replace(/ḫo/g, "ኆ")
str = str.replace(/ḫə/g, "ኅ")
str = str.replace(/ḫe/g, "ኄ")
str = str.replace(/ḫa/g, "ኃ")
str = str.replace(/ḫi/g, "ኂ")
str = str.replace(/ḫu/g, "ኁ")
str = str.replace(/ḫä/g, "ኀ")

str = str.replace(/čoa/g, "ⶇ")
str = str.replace(/čwa/g, "ቿ")
str = str.replace(/čo/g, "ቾ")
str = str.replace(/čə/g, "ች")
str = str.replace(/če/g, "ቼ")
str = str.replace(/ča/g, "ቻ")
str = str.replace(/či/g, "ቺ")
str = str.replace(/ču/g, "ቹ")
str = str.replace(/čä/g, "ቸ")

str = str.replace(/toa/g, "ⶆ")
str = str.replace(/twa/g, "ቷ")
str = str.replace(/to/g, "ቶ")
str = str.replace(/tə/g, "ት")
str = str.replace(/te/g, "ቴ")
str = str.replace(/ta/g, "ታ")
str = str.replace(/ti/g, "ቲ")
str = str.replace(/tu/g, "ቱ")
str = str.replace(/tä/g, "ተ")

str = str.replace(/vwa/g, "ቯ")
str = str.replace(/vo/g, "ቮ")
str = str.replace(/və/g, "ቭ")
str = str.replace(/ve/g, "ቬ")
str = str.replace(/va/g, "ቫ")
str = str.replace(/vi/g, "ቪ")
str = str.replace(/vu/g, "ቩ")
str = str.replace(/vä/g, "ቨ")

str = str.replace(/bʷə/g, "ᎇ")
str = str.replace(/bʷe/g, "ᎆ")
str = str.replace(/bʷi/g, "ᎅ")
str = str.replace(/bʷä/g, "ᎄ")
str = str.replace(/boa/g, "ⶅ")
str = str.replace(/bwa/g, "ቧ")
str = str.replace(/bo/g, "ቦ")
str = str.replace(/bə/g, "ብ")
str = str.replace(/be/g, "ቤ")
str = str.replace(/ba/g, "ባ")
str = str.replace(/bi/g, "ቢ")
str = str.replace(/bu/g, "ቡ")
str = str.replace(/bä/g, "በ")

str = str.replace(/ḳʰʷə/g, "ቝ")
str = str.replace(/ḳʰʷe/g, "ቜ")
str = str.replace(/ḳʰʷa/g, "ቛ")
str = str.replace(/ḳʰʷi/g, "ቚ")
str = str.replace(/ḳʰʷä/g, "ቘ")
str = str.replace(/ḳʰo/g, "ቖ")
str = str.replace(/ḳʰə/g, "ቕ")
str = str.replace(/ḳʰe/g, "ቔ")
str = str.replace(/ḳʰa/g, "ቓ")
str = str.replace(/ḳʰi/g, "ቒ")
str = str.replace(/ḳʰu/g, "ቑ")
str = str.replace(/ḳʰä/g, "ቐ")
str = str.replace(/ḳʷə/g, "ቍ")
str = str.replace(/ḳʷe/g, "ቌ")
str = str.replace(/ḳʷa/g, "ቋ")
str = str.replace(/ḳʷi/g, "ቊ")
str = str.replace(/ḳʷä/g, "ቈ")
str = str.replace(/ḳoa/g, "ቇ")
str = str.replace(/ḳo/g, "ቆ")
str = str.replace(/ḳə/g, "ቅ")
str = str.replace(/ḳe/g, "ቄ")
str = str.replace(/ḳa/g, "ቃ")
str = str.replace(/ḳi/g, "ቂ")
str = str.replace(/ḳu/g, "ቁ")
str = str.replace(/ḳä/g, "ቀ")

str = str.replace(/šoa/g, "ⶄ")
str = str.replace(/šwa/g, "ሿ")
str = str.replace(/šo/g, "ሾ")
str = str.replace(/šə/g, "ሽ")
str = str.replace(/še/g, "ሼ")
str = str.replace(/ša/g, "ሻ")
str = str.replace(/ši/g, "ሺ")
str = str.replace(/šu/g, "ሹ")
str = str.replace(/šä/g, "ሸ")
str = str.replace(/soa/g, "ⶃ")
str = str.replace(/swa/g, "ሷ")
str = str.replace(/so/g, "ሶ")
str = str.replace(/sə/g, "ስ")
str = str.replace(/se/g, "ሴ")
str = str.replace(/sa/g, "ሳ")
str = str.replace(/si/g, "ሲ")
str = str.replace(/su/g, "ሱ")
str = str.replace(/sä/g, "ሰ")

str = str.replace(/rya/g, "ፘ")
str = str.replace(/roa/g, "ⶂ")
str = str.replace(/rwa/g, "ሯ")
str = str.replace(/ro/g, "ሮ")
str = str.replace(/rə/g, "ር")
str = str.replace(/re/g, "ሬ")
str = str.replace(/ra/g, "ራ")
str = str.replace(/ri/g, "ሪ")
str = str.replace(/ru/g, "ሩ")
str = str.replace(/rä/g, "ረ")

str = str.replace(/śwa/g, "ሧ")
str = str.replace(/śo/g, "ሦ")
str = str.replace(/śə/g, "ሥ")
str = str.replace(/śe/g, "ሤ")
str = str.replace(/śa/g, "ሣ")
str = str.replace(/śi/g, "ሢ")
str = str.replace(/śu/g, "ሡ")
str = str.replace(/śä/g, "ሠ")

str = str.replace(/mʷə/g, "ᎃ")
str = str.replace(/mʷe/g, "ᎂ")
str = str.replace(/mʷi/g, "ᎁ")
str = str.replace(/mʷä/g, "ᎀ")
str = str.replace(/mya/g, "ፙ")
str = str.replace(/moa/g, "ⶁ")
str = str.replace(/mwa/g, "ሟ")
str = str.replace(/mo/g, "ሞ")
str = str.replace(/mə/g, "ም")
str = str.replace(/me/g, "ሜ")
str = str.replace(/ma/g, "ማ")
str = str.replace(/mi/g, "ሚ")
str = str.replace(/mu/g, "ሙ")
str = str.replace(/mä/g, "መ")

str = str.replace(/ḥwa/g, "ሗ")
str = str.replace(/ḥo/g, "ሖ")
str = str.replace(/ḥə/g, "ሕ")
str = str.replace(/ḥe/g, "ሔ")
str = str.replace(/ḥa/g, "ሓ")
str = str.replace(/ḥi/g, "ሒ")
str = str.replace(/ḥu/g, "ሑ")
str = str.replace(/ḥä/g, "ሐ")

str = str.replace(/loa/g, "ⶀ")
str = str.replace(/lwa/g, "ሏ")
str = str.replace(/lo/g, "ሎ")
str = str.replace(/lə/g, "ል")
str = str.replace(/le/g, "ሌ")
str = str.replace(/la/g, "ላ")
str = str.replace(/li/g, "ሊ")
str = str.replace(/lu/g, "ሉ")
str = str.replace(/lä/g, "ለ")

str = str.replace(/hoa/g, "ሇ")
str = str.replace(/ho/g, "ሆ")
str = str.replace(/hə/g, "ህ")
str = str.replace(/he/g, "ሄ")
str = str.replace(/ha/g, "ሃ")
str = str.replace(/hi/g, "ሂ")
str = str.replace(/hu/g, "ሁ")
str = str.replace(/hä/g, "ሀ")

str = str.replace(/oa/g, "ⶍ")
str = str.replace(/wa/g, "ዿ")


	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}
		

