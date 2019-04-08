/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"helloapp/helloapp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});