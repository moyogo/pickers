globals.showTranslit =  ''

function localInitialise () {

	}



var _h = {
'E01': ['E20', 'E24', 'E20'],
'E02': ['E0A', 'E0B', 'E03'],
'E04': ['E14', 'E28', 'E15', 'E05'],
'E06': ['E11', 'E21'],
'E08': ['E27', 'E25'],
'E0A': ['E02', 'E0B', 'E03'],
'E0C': ['E13', 'E0D'],
'E15': ['E05', 'E04', 'E14'],
'E0F': ['E0E'],
'E10': ['E23', 'E18'],
'E11': ['E06'],
'E16': ['E24', 'E20', 'E01', 'E26'],
'E17': ['E11'],
'E18': ['E23', 'E10'],
'E1B': ['E1A', 'E29'],
'E1C': ['E1E', 'E1D', 'E1F', 'E2C'],
'E1E': ['E1C', 'E1D', 'E1F', 'E2C'],
'E20': ['E16', 'E24', 'E01', 'E26'],
'E1A': ['E1B', 'E29'],
'E0E': ['E0F', 'E24', 'E26'],
'E14': ['E04', 'E28', 'E15'],
'E0B': ['E0A', 'E02', 'E03'],
'E28': ['E04', 'E14', 'E15'],
'E29': ['E1A'],
'E2A': ['E25', 'E09'],
'E1F': ['E1D', 'E1C', 'E1E', 'E2C'],
'E1D': ['E1F', 'E1C', 'E1E', 'E2C'],
'E2B': ['E17', 'E19'],
'E2E': ['E2D'],
'E25': ['E2A', 'E2FE25E2F'],
'E2C': ['E1D', 'E1F', 'E1C', 'E1E'],
'E23': ['E18', 'E10'],
'E0D': ['E13', 'E0C'],
'E27': ['E08', 'E07'],
'E2D': ['E2E'],
'E19': ['E21', 'E2B'],
'E13': ['E0C', 'E0D'],
'E21': ['E19', 'E17', 'E2B'],
'E07': ['E27'],
'E24': ['E26', 'E20', 'E16', 'E01'],
'E2F': ['E5A'],
'E5A': ['E2F'],
'E32': ['E45', 'E33'],
'E45': ['E32', 'E33'],
'E33': ['E32', 'E45', 'E4D'],
'E4D': ['E33'],
'E2FE25E2F': ['E2A', 'E25'],
'E05': ['E15'],
'E03': ['E02', 'E0B', 'E0A'],
'E26': ['E24', 'E20', 'E01', 'E16'],

end: {}
}



var keyboarddef = [
"§|1 ᩕ ᪁ ᪑|2 ᩏ ᪂ ᪒|3 ᩑ ᪃ ᪓|4 ᨽ ᪄ ᪔|5 ᨳ ᪅ ᪕|6 ᩩ ᩪ ᩐ|7 ᩧ ᪆ ᪖|8 ᨣ ᪇ ᪗|9 ᨲ ᪈ ᪘|0 ᨧ ᪉ ᪙|- ᨡ ᪀ ᪐|= ᨩ ᩛ",
"q ᪧ ᩭ|w ᪩ ᩲ|e ᩣᩴ ᩻|r ᨻ ᨰ ᩚ|t ᨵ ᩡ ᩹|y ᩫ ᩴ ᩸|u ᩦ ᩳ ᩷|i ᩁ ᨱ ᩺|o ᨶ ᪫ ᪪|p ᨿ ᨬ|[ ᨷ ᨮ|] ᩃ ᩓ ᩖ",
"a ᨼ ᩀ|s ᩉ ᨥ|d ᨠ ᨭ|f ᨯ ᩰ ᩒ|g ᩮ ᨫ|h ᩢ ᩶|j ᩠ ᩵ ᩆ|k ᩣ ᩤ ᩇ|l ᩈ ᩔ ᩞ|; ᩅ ᨪ|' ᨦ ᪨ ᩙ|\\ ᨤ ᩘ",
"`|z ᨹ (|x ᨸ )|c ᩯ ᨨ|v ᩋ ᩌ ᩬ|b ᩥ ᩿ ᩍ|n ᩨ ᩼ ᩎ|m ᨴ ?|, ᨾ ᩗ ᩜ|. ᩱ ᩊ ᩄ|/ ᨺ ᩖ ᩂ"
]



function toggleSubjoined (node) {
    // displays or hides the subjoined keys
    var sjs = document.querySelectorAll('.sj')
    console.log(sjs.length)
    if (sjs[0].style.display !== 'inline-block') {
        for (let i=0;i<sjs.length;i++) sjs[i].style.display = 'inline-block'
        node.classList.toggle('subjoined')
        document.getElementById('consonantGrid').style.width = '16em'
        }
    else {
        for (let i=0;i<sjs.length;i++) sjs[i].style.display = 'none'
        node.classList.toggle('subjoined')
        document.getElementById('consonantGrid').style.width = '12em'
        }
    }




