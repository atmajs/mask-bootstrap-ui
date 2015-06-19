// source /src/umd.es6
/*!
 * Mask Bootstrap UI v0.0.1
 * Part of the Atma.js Project
 * http://atmajs.com/
 *
 * MIT license
 * (c) 2015, 2015 Atma.js and other contributors
 */

"use strict";

(function (root, factory) {
	var _global = typeof global !== "undefined" ? global : window,
	    _mask = _global.mask || _global.atma && _global.atma.mask;

	if (_mask == null) throw Error("MaskJS was not loaded");

	factory(_global, _mask);
})(undefined, function (global, mask, ruta, include, $) {

	var domLib = mask.Compo.config.getDOMLibrary();

	// source ./components/exports.es6
	"use strict";

	mask.define("\n\t// source Button.mask\n\tdefine Button {\n\t\t\n\t\tbutton.btn.@[attr.class || 'btn-default'] style='@attr.style' {\n\t        @if (attr.glyph) {\n\t\t\t\ti.glyphicon.glyphicon-@[attr.glyph];\n\t\t\t}\n\t        @placeholder;\n\t    }\n\t}\n\t// end:source Button.mask\n\t// source Modal.mask\n\tdefine Modal {\n\t\tfunction show () {\n\t\t\tthis.$.modal('show');\n\t\t}\n\t\tfunction hide () {\n\t\t\tthis.$.modal('hide');\n\t\t}\n\t\t\n\t\tslot modalHide () {\n\t\t\tthis.hide();\n\t\t}\n\t\tslot modalShow () {\n\t\t\tthis.show();\n\t\t}\n\t\t\n\t\t.modal.fade\n\t\t\tdata-backdrop='@backdrop.attr.value'\n\t\t\tdata-keyboard='@keyboard.attr.value'\t\t\n\t\t> .modal-dialog > .modal-content {\n\t\t\t\t.modal-header {\n\t\t\t\t\t@header;\n\t\t\t\t\t@else {\n\t\t\t\t\t\t@if (backdrop.attr.value !== 'static') {\n\t\t\t\t\t\t\tbutton.close data-dismiss= modal > span > 'x';\n\t\t\t\t\t\t}\n\t\t\t\t\t\th4 .modal-title > @title;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@body required >\n\t\t\t\t\t.modal-body style='position:relative; height:@attr.height' >\n\t\t\t\t\t\t@placeholder;\n\t\t\t\t\t\t\n\t\t\t\t.modal-footer >\n\t\t\t\t\t@footer;\n\t\t\t\t\t@else {\n\t\t\t\t\t\tButton\n\t\t\t\t\t\t\tdata-dismiss = modal\n\t\t\t\t\t\t\tx-tap = 'modalHide' >\n\t\t\t\t\t\t\t\t'@[ attr.lblCancel || \"Close\"]'\n\t\t\t\t\t\tButton .btn-primary\n\t\t\t\t\t\t\tx-tap = 'modalSubmit' >\n\t\t\t\t\t\t\t\t'@[ attr.lblOk || \"OK\" ]'\n\t\t\t\t\t}\n\t\t\t}\n\t}\n\t// end:source Modal.mask\n\t// source Dropdown.mask\n\tdefine Dropdown as (.dropdown) {\n\t    slot domInsert () {\n\t        this.$.filter('a').dropdown();\n\t    }\n\t\n\t    let Item {\n\t        li class='@[disabled ? \"disabled\"]' role=presentation > \n\t            a .menuitem href='@attr.href' > \n\t                @placeholder;\n\t    }\n\t    \n\t\tlet Header {\n\t        li .dropdown-header > @placeholder;\n\t    }\n\t\t\n\t\tlet Divider {\n\t\t\tli .divider role=separator;\n\t\t}\n\t    \n\t\t\n\t\t@anchor {\n\t\t\ta class='dropdown-toggle @[attr.class]' href='#' data-toggle='dropdown' {\n\t\t\t\t@placeholder;\n\t\t\t\t' ' span .caret;\n\t\t\t}\n\t\t}\n\t\t@button {\n\t\t\tbutton class='btn dropdown-toggle @[attr.class]' data-toggle='dropdown' {\n\t\t\t\t@placeholder;\n\t\t\t\t' ' span .caret;\n\t\t\t}\n\t\t}\n\t    \n\t    \n\t    ul .dropdown-menu role='menu' {        \n\t        @items; \n\t    }\n\t    \n\t}\n\t\n\t// end:source Dropdown.mask\n\t// source Panel.mask\n\tlet Panel {\n\t\t.panel  {\n\t\t\t@header {\n\t\t\t\t.panel-heading > @placeholder;\n\t\t\t}\n\t\t\t@title {\n\t\t\t\t.panel-heading > h3.panel-title > @placeholder;\n\t\t\t}\n\t\t\t.panel-body > @body required;\n\t\t\t\n\t\t\t@footer {\n\t\t\t\t.panel-footer > @placeholder;\n\t\t\t}\n\t\t}\n\t}\n\t// end:source Panel.mask\n");
	//# sourceMappingURL=exports.es6.map
	// end:source ./components/exports.es6
	// source ./attributes/exports.es6
	// source tooltip.es6
	"use strict";

	mask.registerAttrHandler("x-tooltip", function (node, attrValue, model, ctx, tag) {
		domLib(tag).attr("title", attrValue).tooltip();
	});
	//# sourceMappingURL=tooltip.es6.map
	// end:source tooltip.es6
	//# sourceMappingURL=exports.es6.map
	// end:source ./attributes/exports.es6
});
//# sourceMappingURL=umd.es6.map
// end:source /src/umd.es6