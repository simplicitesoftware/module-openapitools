var SwgBrowser = (() => {
	function render(params, data) {
		console.log(params, data);
		const swb = $('#swg-browser');
		swb.closest('.card').addClass('swg-absolute'); 
		swb.closest('.card-body').css('padding', '0'); 
		swb.closest('.objext').css('height', '100%'); 
		$ui.loadAceEditor(() => {
			const ui = SwaggerUIBundle({ spec: data && data.spec ? data.spec : '', dom_id: '#swg-ui' });
			const ed = ace.edit('swg-editor');
			ed.getSession().setMode('ace/mode/yaml');
			ed.getSession().on('change', () => { ui.specActions.updateSpec(ed.getSession().getValue()); });
			ed.setTheme('ace/theme/' + (data && data.settings && data.settings.theme ? data.settings.theme : 'eclipse'));
			ed.getSession().setValue(data.spec || '');
			ed.focus();
		});
	}

	return { render: render };
})();
