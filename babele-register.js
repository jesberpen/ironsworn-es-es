Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'ironsworn-es-es',
			lang: 'es',
			dir: 'compendium'
		}); 
  } // END if(typeof Babele  
});
