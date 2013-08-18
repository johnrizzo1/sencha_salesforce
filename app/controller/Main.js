Ext.define( 'BAML.controller.Main', {
  extend : 'Ext.app.Controller',
  views  :
    [
      'BAML.view.Viewport'
    ],
  stores :
    [
      'BAML.store.Companies'
    ],
  init   : function () {
    console.log( 'Main Controller init' );
  }
});