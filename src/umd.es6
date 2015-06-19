(function(root, factory){
	var _global = typeof global !== 'undefined' ? global : window,
		_mask = _global.mask || (_global.atma && _global.atma.mask); 
	
	if (_mask == null) 
		throw Error('MaskJS was not loaded');
	
	factory(_global, _mask);
	
}(this, function(global, mask, ruta, include, $){
	
	var domLib = mask.Compo.config.getDOMLibrary();
	
	// import ./components/exports.es6
	// import ./attributes/exports.es6
	
}));
