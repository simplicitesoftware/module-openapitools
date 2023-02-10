var OaiBrowser = (() => {
	function render(params, data) {
		const swb = $('#oai-browser');
		swb.closest('.card').addClass('oai-absolute'); 
		swb.closest('.card-body').css('padding', '0'); 
		swb.closest('.objext').css('height', '100%'); 
		$ui.loadAceEditor(() => {
			const ui = SwaggerUIBundle({ spec: data && data.spec ? data.spec : '', dom_id: '#oai-ui' });
			const ed = ace.edit('oai-editor');
			ed.getSession().setMode('ace/mode/yaml');
			ed.getSession().on('change', () => { ui.specActions.updateSpec(ed.getSession().getValue()); });
			ed.setTheme('ace/theme/' + (data && data.settings && data.settings.theme ? data.settings.theme : 'eclipse'));
			ed.getSession().setValue(data.spec || '');
			ed.focus();
		});
	}

	return { render: render };
})();
