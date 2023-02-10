package com.simplicite.extobjects.SwaggerTools;

import org.json.JSONObject;

import com.simplicite.util.AppLog;
import com.simplicite.util.tools.HTMLTool;
import com.simplicite.util.tools.JSONTool;
import com.simplicite.util.tools.Parameters;

/**
 * Swagger browser
 */
public class SwgBrowser extends com.simplicite.webapp.web.ResponsiveExternalObject {
	private static final long serialVersionUID = 1L;

	@Override
	public String[] getJSIncludes() {
		return HTMLTool.swaggerUIJS(true);
	}

	@Override
	public String[] getCSSIncludes() {
		return HTMLTool.swaggerUICSS();
	}

	@Override
	public JSONObject getData(Parameters params) {
		JSONObject data = new JSONObject().put("settings", new JSONObject().put("theme", getGrant().getHome().getCodeEditorTheme()));
		//data.put("spec", "# Paste a Swagger or OpenAPI schema here");
		return data;
	}
}
