class OaiBrowser {
	static render(params, data) {
		const swb = $('#oai-browser');
		swb.closest('.card').addClass('oai-absolute'); 
		swb.closest('.card-body').css('padding', '0'); 
		swb.closest('.objext').css('height', '100%'); 
		$ui.loadAceEditor(() => {
			const ui = SwaggerUIBundle({ spec: data && data.spec ? data.spec : '', dom_id: '#oai-ui' });
			const ed = ace.edit('oai-editor');
			ed.getSession().setMode('ace/mode/yaml');
			ed.getSession().on('change', () => {
				let spec = ed.getSession().getValue();
				try {
					let json;
					try {
						json = JSON.parse(spec);
					} catch (e1) {
						json = null;
					}
					if (json) {
						spec = jsyaml.dump(json);
						ed.getSession().setValue(spec);
					}
				} catch (e) {
					console.error(e);
				}
				ui.specActions.updateSpec(spec);
			});
			ed.setTheme('ace/theme/' + (data && data.settings && data.settings.theme ? data.settings.theme : 'eclipse'));
			ed.getSession().setValue(data.spec || '');
			ed.focus();
		});
	}
}
