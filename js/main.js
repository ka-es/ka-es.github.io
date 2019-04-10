/* HTML library, this eventually will become a separate repository under
 * lostwire organization on github */

var html = {
	'functions': {
		'add_text': function(value) {
			this.appendChild(document.createTextNode(value))
			
		}
	}}
html.common = {
	'add_text': html.functions.add_text,
}
function div() {
	return Object.assign(document.createElement('div'), html.common)
}

d = div()
d.add_text('some text')
