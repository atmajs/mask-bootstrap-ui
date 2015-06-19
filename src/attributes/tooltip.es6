mask.registerAttrHandler('x-tooltip', function (node, attrValue, model, ctx, tag) {	
	domLib(tag)
		.attr('title', attrValue)
		.tooltip();
});