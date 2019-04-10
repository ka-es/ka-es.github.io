/* HTML library, this eventually will become a separate repository under
 * lostwire organization on github */

var html = {
	'functions': {
		'add_text': function(value) { this.appendChild(document.createTextNode(value)); },
		'div': function(value) { return this.appendChild(html.assign_common(document.createElement('div'))); },
	},
	'elements': {
		'a': function(href, label=null) {
			var output = html.create_element('a');
			output.setAttribute('href', href);
			if (label) {
				output.add_text(label);
			}
			return output;
		},
	},
	'attribs': {
		set: function(obj, name, value) {
			if (obj.hasOwnProperty(name)) {
				obj[name] = value;
			} else {
				obj.setAttribute(name, value);
			}
		},
		get: function(obj, name) {
			if (obj.hasOwnProperty(name)) {
				return obj[name].bind(obj);
			}
			return obj.getAttribute(name);
		},
	},
	'assign_common': function(element) { return Object.assign(element, html.common); },
	'get_classes': function(element) {
		var output = element.getAttribute('class');
		return output ? output.split(' ') : new Array();
	},
	'add_class': function(str) {
		var el_cls = html.get_classes(this);
		var in_cls = str.split(' ');
		for (var i=0; i<in_cls.length; i++) {
			if (el_cls.indexOf(in_cls[i]) != null) {
				el_cls.push(in_cls[i]);
			}
		}
		this.setAttribute('class', el_cls.join(' '));
	},
	'create_element': function(name) {
		var output = html.assign_common(document.createElement(name));
		if (this) { this.appendChild(output); }
		return output;
	},
	'remove_class': function(str) {
		var el_cls = html.get_classes(this);
		var in_cls = str.split(' ');
		for (var i=0; i<in_cls.length; i++) {
			var idx = el_cls.indexOf(in_cls[i]);
			if (idx != null) {
				el_cls.splice(idx, 1)
			}
		}
		this.setAttribute('class', el_cls.join(' '));
	},
	'by_id': function(id) { return html.assign_common(document.getElementById(id)); },
}
html.common = {
	'add_text': html.functions.add_text,
	'div': html.functions.div,
	'add_class': html.add_class,
	'remove_class': html.remove_class,
	'create_element': html.create_element,
}
