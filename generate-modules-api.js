'use strict';

/*
[
  {
    "global": "Ember.Application",
    "module": "@ember/application",
    "export": "default",
    "localName": "Application",
    "deprecated": false
  },
  {
    "global": "Ember.ApplicationInstance",
    "module": "@ember/application/instance",
    "export": "default",
    "localName": "ApplicationInstance",
    "deprecated": false
  },
  {
    "global": "Ember.Engine",
    "module": "@ember/engine",
    "export": "default",
    "localName": "Engine",
    "deprecated": false
  },
  {
    "global": "Ember.EngineInstance",
    "module": "@ember/engine/instance",
    "export": "default",
    "localName": "EngineInstance",
    "deprecated": false
  },
*/
const mappings = require('ember-rfc176-data');
let allExports = [
  ['Ember.getOwner', 'ember-utils', 'getOwner'],
  ['Ember.setOwner', 'ember-utils', 'setOwner'],
  ['Ember.assign', 'ember-utils'],
  ['Ember.GUID_KEY', 'ember-utils'],
  ['Ember.uuid', 'ember-utils'],
  ['Ember.generateGuid', 'ember-utils'],
  ['Ember.guidFor', 'ember-utils'],
  ['Ember.inspect', 'ember-utils'],
  ['Ember.makeArray', 'ember-utils'],
  ['Ember.canInvoke', 'ember-utils'],
  ['Ember.tryInvoke', 'ember-utils'],
  ['Ember.wrap', 'ember-utils'],
  ['Ember.NAME_KEY', 'ember-utils'],
  ['Ember.Registry', 'container', 'Registry'],
  ['Ember.Container', 'container', 'Container'],
  ['Ember.deprecateFunc', 'ember-debug'],
  ['Ember.deprecate', 'ember-debug'],
  ['Ember.assert', 'ember-debug'],
  ['Ember.warn', 'ember-debug'],
  ['Ember.debug', 'ember-debug'],
  ['Ember.runInDebug', 'ember-debug'],
  ['Ember.Debug.registerDeprecationHandler', 'ember-debug', 'registerDeprecationHandler'],
  ['Ember.Debug.registerWarnHandler', 'ember-debug', 'registerWarnHandler'],
  ['Ember.Error', 'ember-debug'],
  ['Ember.computed', 'ember-metal', '_globalsComputed'],
  ['Ember.computed.alias', 'ember-metal', 'alias'],
  ['Ember.ComputedProperty', 'ember-metal'],
  ['Ember.cacheFor', 'ember-metal', 'getCachedValueFor'],
  ['Ember.merge', 'ember-metal'],
  ['Ember.instrument', 'ember-metal'],
  ['Ember.subscribe', 'ember-metal', 'instrumentationSubscribe'],
  ['Ember.Instrumentation.instrument', 'ember-metal', 'instrument'],
  ['Ember.Instrumentation.subscribe', 'ember-metal', 'instrumentationSubscribe'],
  ['Ember.Instrumentation.unsubscribe', 'ember-metal', 'instrumentationUnsubscribe'],
  ['Ember.Instrumentation.reset', 'ember-metal', 'instrumentationReset'],
  ['Ember.FEATURES', 'ember/features'],
  ['Ember.FEATURES.isEnabled', 'ember-debug', 'isFeatureEnabled'],
  ['Ember.meta', 'ember-metal'],
  ['Ember.get', 'ember-metal'],
  ['Ember.set', 'ember-metal'],
  ['Ember._getPath', 'ember-metal'],
  ['Ember.getWithDefault', 'ember-metal'],
  ['Ember.trySet', 'ember-metal'],
  ['Ember._Cache', 'ember-metal', 'Cache'],
  ['Ember.on', 'ember-metal'],
  ['Ember.addListener', 'ember-metal'],
  ['Ember.removeListener', 'ember-metal'],
  ['Ember.sendEvent', 'ember-metal'],
  ['Ember.hasListeners', 'ember-metal'],
  ['Ember.isNone', 'ember-metal'],
  ['Ember.isEmpty', 'ember-metal'],
  ['Ember.isBlank', 'ember-metal'],
  ['Ember.isPresent', 'ember-metal'],
  ['Ember._Backburner', 'backburner', 'default'],
  ['Ember.run', 'ember-metal', '_globalsRun'],
  ['Ember.run.backburner', 'ember-metal', 'backburner'],
  ['Ember.run.begin', 'ember-metal', 'begin'],
  ['Ember.run.bind', 'ember-metal', 'bind'],
  ['Ember.run.cancel', 'ember-metal', 'cancel'],
  ['Ember.run.debounce', 'ember-metal', 'debounce'],
  ['Ember.run.end', 'ember-metal', 'end'],
  ['Ember.run.hasScheduledTimers', 'ember-metal', 'hasScheduledTimers'],
  ['Ember.run.join', 'ember-metal', 'join'],
  ['Ember.run.later', 'ember-metal', 'later'],
  ['Ember.run.next', 'ember-metal', 'next'],
  ['Ember.run.once', 'ember-metal', 'once'],
  ['Ember.run.schedule', 'ember-metal', 'schedule'],
  ['Ember.run.scheduleOnce', 'ember-metal', 'scheduleOnce'],
  ['Ember.run.throttle', 'ember-metal', 'throttle'],
  ['Ember.propertyWillChange', 'ember-metal'],
  ['Ember.propertyDidChange', 'ember-metal'],
  ['Ember.notifyPropertyChange', 'ember-metal'],
  ['Ember.overrideChains', 'ember-metal'],
  ['Ember.beginPropertyChanges', 'ember-metal'],
  ['Ember.endPropertyChanges', 'ember-metal'],
  ['Ember.changeProperties', 'ember-metal'],
  ['Ember.defineProperty', 'ember-metal'],
  ['Ember.watchKey', 'ember-metal'],
  ['Ember.unwatchKey', 'ember-metal'],
  ['Ember.removeChainWatcher', 'ember-metal'],
  ['Ember._ChainNode', 'ember-metal', 'ChainNode'],
  ['Ember.finishChains', 'ember-metal'],
  ['Ember.watchPath', 'ember-metal'],
  ['Ember.unwatchPath', 'ember-metal'],
  ['Ember.watch', 'ember-metal'],
  ['Ember.isWatching', 'ember-metal'],
  ['Ember.unwatch', 'ember-metal'],
  ['Ember.destroy', 'ember-metal', 'deleteMeta'],
  ['Ember.libraries', 'ember-metal'],
  ['Ember.OrderedSet', 'ember-metal'],
  ['Ember.Map', 'ember-metal'],
  ['Ember.MapWithDefault', 'ember-metal'],
  ['Ember.getProperties', 'ember-metal'],
  ['Ember.setProperties', 'ember-metal'],
  ['Ember.expandProperties', 'ember-metal'],
  ['Ember.addObserver', 'ember-metal'],
  ['Ember.removeObserver', 'ember-metal'],
  ['Ember.aliasMethod', 'ember-metal'],
  ['Ember.observer', 'ember-metal'],
  ['Ember.mixin', 'ember-metal'],
  ['Ember.Mixin', 'ember-metal'],
  ['Ember.Logger', 'ember-console', 'default'],
  ['Ember.$', 'ember-views', 'jQuery'],
  ['Ember.ViewUtils.isSimpleClick', 'ember-views', 'isSimpleClick'],
  ['Ember.ViewUtils.getViewElement', 'ember-views', 'getViewElement'],
  ['Ember.ViewUtils.getViewBounds', 'ember-views', 'getViewBounds'],
  ['Ember.ViewUtils.getViewClientRects', 'ember-views', 'getViewClientRects'],
  ['Ember.ViewUtils.getViewBoundingClientRect', 'ember-views', 'getViewBoundingClientRect'],
  ['Ember.ViewUtils.getRootViews', 'ember-views', 'getRootViews'],
  ['Ember.ViewUtils.getChildViews', 'ember-views', 'getChildViews'],
  ['Ember.ViewUtils.isSerializationFirstNode', 'ember-glimmer', 'isSerializationFirstNode'],
  ['Ember.TextSupport', 'ember-views'],
  ['Ember.ComponentLookup', 'ember-views'],
  ['Ember.EventDispatcher', 'ember-views'],
  ['Ember.Component', 'ember-glimmer', 'Component'],
  ['Ember.Helper', 'ember-glimmer', 'Helper'],
  ['Ember.Helper.helper', 'ember-glimmer', 'helper'],
  ['Ember.Checkbox', 'ember-glimmer', 'Checkbox'],
  ['Ember.LinkComponent', 'ember-glimmer', 'LinkComponent'],
  ['Ember.TextArea', 'ember-glimmer', 'TextArea'],
  ['Ember.TextField', 'ember-glimmer', 'TextField'],
  ['Ember.TEMPLATES', 'ember-glimmer', { get: 'getTemplates', set: 'setTemplates' }],
  ['Ember.Handlebars.template', 'ember-glimmer', 'template'],
  ['Ember.HTMLBars.template', 'ember-glimmer', 'template'],
  ['Ember.Handlebars.Utils.escapeExpression', 'ember-glimmer', 'escapeExpression'],
  ['Ember.String.htmlSafe', 'ember-glimmer', 'htmlSafe'],
  ['Ember._setComponentManager', 'ember-glimmer', 'componentManager'],
  ['Ember.A', 'ember-runtime'],
  ['Ember._RegistryProxyMixin', 'ember-runtime', 'RegistryProxyMixin'],
  ['Ember._ContainerProxyMixin', 'ember-runtime', 'ContainerProxyMixin'],
  ['Ember.Object', 'ember-runtime'],
  ['Ember.String', 'ember-runtime'],
  ['Ember.compare', 'ember-runtime'],
  ['Ember.copy', 'ember-runtime'],
  ['Ember.isEqual', 'ember-runtime'],
  ['Ember.inject', 'ember-runtime'],
  ['Ember.Array', 'ember-runtime'],
  ['Ember.Comparable', 'ember-runtime'],
  ['Ember.Namespace', 'ember-runtime'],
  ['Ember.Enumerable', 'ember-runtime'],
  ['Ember.ArrayProxy', 'ember-runtime'],
  ['Ember.ObjectProxy', 'ember-runtime'],
  ['Ember.ActionHandler', 'ember-runtime'],
  ['Ember.CoreObject', 'ember-runtime'],
  ['Ember.NativeArray', 'ember-runtime'],
  ['Ember.Copyable', 'ember-runtime'],
  ['Ember.MutableEnumerable', 'ember-runtime'],
  ['Ember.MutableArray', 'ember-runtime'],
  ['Ember.TargetActionSupport', 'ember-runtime'],
  ['Ember.Evented', 'ember-runtime'],
  ['Ember.PromiseProxyMixin', 'ember-runtime'],
  ['Ember.Observable', 'ember-runtime'],
  ['Ember.typeOf', 'ember-runtime'],
  ['Ember.isArray', 'ember-runtime'],
  ['Ember.Object', 'ember-runtime'],
  ['Ember.onLoad', 'ember-runtime'],
  ['Ember.runLoadHooks', 'ember-runtime'],
  ['Ember.Controller', 'ember-runtime'],
  ['Ember.ControllerMixin', 'ember-runtime'],
  ['Ember.Service', 'ember-runtime'],
  ['Ember._ProxyMixin', 'ember-runtime'],
  ['Ember.RSVP', 'ember-runtime'],
  ['Ember.computed.empty', 'ember-runtime', 'empty'],
  ['Ember.computed.notEmpty', 'ember-runtime', 'notEmpty'],
  ['Ember.computed.none', 'ember-runtime', 'none'],
  ['Ember.computed.not', 'ember-runtime', 'not'],
  ['Ember.computed.bool', 'ember-runtime', 'bool'],
  ['Ember.computed.match', 'ember-runtime', 'match'],
  ['Ember.computed.equal', 'ember-runtime', 'equal'],
  ['Ember.computed.gt', 'ember-runtime', 'gt'],
  ['Ember.computed.gte', 'ember-runtime', 'gte'],
  ['Ember.computed.lt', 'ember-runtime', 'lt'],
  ['Ember.computed.lte', 'ember-runtime', 'lte'],
  ['Ember.computed.oneWay', 'ember-runtime', 'oneWay'],
  ['Ember.computed.reads', 'ember-runtime', 'oneWay'],
  ['Ember.computed.readOnly', 'ember-runtime', 'readOnly'],
  ['Ember.computed.deprecatingAlias', 'ember-runtime', 'deprecatingAlias'],
  ['Ember.computed.and', 'ember-runtime', 'and'],
  ['Ember.computed.or', 'ember-runtime', 'or'],
  ['Ember.computed.sum', 'ember-runtime', 'sum'],
  ['Ember.computed.min', 'ember-runtime', 'min'],
  ['Ember.computed.max', 'ember-runtime', 'max'],
  ['Ember.computed.map', 'ember-runtime', 'map'],
  ['Ember.computed.sort', 'ember-runtime', 'sort'],
  ['Ember.computed.setDiff', 'ember-runtime', 'setDiff'],
  ['Ember.computed.mapBy', 'ember-runtime', 'mapBy'],
  ['Ember.computed.filter', 'ember-runtime', 'filter'],
  ['Ember.computed.filterBy', 'ember-runtime', 'filterBy'],
  ['Ember.computed.uniq', 'ember-runtime', 'uniq'],
  ['Ember.computed.uniqBy', 'ember-runtime', 'uniqBy'],
  ['Ember.computed.union', 'ember-runtime', 'union'],
  ['Ember.computed.intersect', 'ember-runtime', 'intersect'],
  ['Ember.computed.collect', 'ember-runtime', 'collect'],
  ['Ember.Location', 'ember-routing'],
  ['Ember.AutoLocation', 'ember-routing'],
  ['Ember.HashLocation', 'ember-routing'],
  ['Ember.HistoryLocation', 'ember-routing'],
  ['Ember.NoneLocation', 'ember-routing'],
  ['Ember.controllerFor', 'ember-routing'],
  ['Ember.generateControllerFactory', 'ember-routing'],
  ['Ember.generateController', 'ember-routing'],
  ['Ember.RouterDSL', 'ember-routing'],
  ['Ember.Router', 'ember-routing'],
  ['Ember.Route', 'ember-routing'],
  ['Ember.Application', 'ember-application'],
  ['Ember.ApplicationInstance', 'ember-application'],
  ['Ember.Engine', 'ember-application'],
  ['Ember.EngineInstance', 'ember-application'],
  ['Ember.Resolver', 'ember-application'],
  ['Ember.DefaultResolver', 'ember-application', 'Resolver'],
  ['Ember.DataAdapter', 'ember-extension-support'],
  ['Ember.ContainerDebugAdapter', 'ember-extension-support'],
];
const fs = require('fs-extra');
const path = require('path');

let moduleNames = new Set(mappings.filter(m => !m.deprecated).map(m => m.module));

moduleNames.forEach(moduleName => {
  let contents = '';
  mappings.filter(m => m.module === moduleName).forEach(m => {
    let exportForGlobal = allExports.find(e => e[0] === m.global);

    if (!exportForGlobal) {
      console.log('could not find: ' + m.global);

      if (m.export === 'default') {
        contents += `// TODO: export default ${m.global};\n`;
      } else {
        contents += `// TODO: export const ${m.export} = ${m.global};\n`;
      }
    } else {
      let exportName = exportForGlobal[2] || exportForGlobal[0].slice(6);

      if (m.export === 'default') {
        contents += `export { ${exportName} as default } from '${exportForGlobal[1]}';\n`;
      } else if (m.export === exportName) {
        contents += `export { ${exportName} } from '${exportForGlobal[1]}';\n`;
      } else {
        contents += `export { ${exportName} as ${m.export} } from '${exportForGlobal[1]}';\n`;
      }
    }
  });
  let modulePath = path.join(__dirname, 'packages', moduleName);

  fs.outputFileSync(modulePath + '.js', contents);
});
