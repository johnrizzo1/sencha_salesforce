Ext.define( 'BAML.view.Viewport', {
  extend   : 'Ext.container.Viewport',
  requires :
    [
      'Ext.tab.Panel',
      'Ext.layout.container.Border',
      'BAML.view.PortfolioGrid'
    ],

  layout : {
    type : 'border'
  },

  items :
    [
      {
        region : 'center',
        xtype  : 'tabpanel',
        activeTab: 1,
        items  :
          [
            {
              title : 'Dashboard'
            },
            {
              title : 'Portfolio',
              xtype : 'PortfolioGrid'
            },
            {
              title : 'Closed Deals'
            },
            {
              title : 'Mandated Deals'
            },
            {
              title : 'Pitched/Prospecting Deals'
            }
          ]
      }
    ]
} );