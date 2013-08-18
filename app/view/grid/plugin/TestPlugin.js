Ext.define('BAML.view.grid.plugin.TestPlugin', {
  extend:'Ext.util.Observable',
  alias: 'plugin.view.TestPlugin',
  ptype: 'testplugin',
  init: function() {
    console.log('plugin initialized');
  }
});