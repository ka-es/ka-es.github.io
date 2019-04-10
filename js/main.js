/* HTML library, this eventually will become a separate repository under
 * lostwire organization on github */

var html = {
	'functions': {
		'add_text': function(value) { this.appendChild(document.createTextNode(value)); },
		'div': function(value) { return this.appendChild(html.assign_common(document.createElement('div'))); },
	},
	'assign_common': function(element) { return Object.assign(element, html.common); },
	'by_id': function(id) { return html.assign_common(document.getElementById(id)); },
}
html.common = {
	'add_text': html.functions.add_text,
	'div': html.functions.div,
}

html.by_id('main').div().add_text('costam')
