sap.ui.require.preload({"helloapp/helloapp/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","helloapp/helloapp/model/models"],function(e,t,i){"use strict";return e.extend("helloapp.helloapp.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments),this.getRouter().initialize(),this.setModel(i.createDeviceModel(),"device")}})});',"helloapp/helloapp/controller/View1.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("helloapp.helloapp.controller.View1",{onInit:function(){}})});',"helloapp/helloapp/model/models.js":'sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);return i.setDefaultBindingMode("OneWay"),i}}});',"helloapp/helloapp/view/View1.view.xml":'<mvc:View controllerName="helloapp.helloapp.controller.View1" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><Shell id="shell"><App id="app"><pages><Page id="page" title="Devops CI/CD"><content><Label text="Hello CI/CD"/></content></Page></pages></App></Shell></mvc:View>',"helloapp/helloapp/i18n/i18n.properties":"title=Title\nappTitle=helloapp\nappDescription=App Description","helloapp/helloapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"helloapp.helloapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"helloapp.helloapp.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.60.1","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"helloapp.helloapp.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"helloapp.helloapp.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}}}}'},"helloapp/helloapp/Component-preload");