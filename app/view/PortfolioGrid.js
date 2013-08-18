Ext.define( 'BAML.view.PortfolioGrid', {
  extend   : 'Ext.ux.LiveSearchGridPanel',
  requires :
    [
      'BAML.store.Companies',
      'BAML.model.Company',
      'Ext.grid.plugin.RowExpander',
      'BAML.view.grid.plugin.HeaderFilters',
      'Ext.grid.RowNumberer'
      //,
      //'BAML.view.grid.plugin.GridFilterRow',
      //'BAML.view.grid.plugin.TestPlugin'
    ],

  alias : 'widget.PortfolioGrid',
  store : 'Companies',

  columns      :
    [
      {xtype : 'rownumberer'},
      {
        text      : "Company",
        flex      : 1,
        dataIndex : 'company',
        filter    : {xtype : 'textfield', filterName : 'Company'}
      },
      {text : "Price", renderer : Ext.util.Format.usMoney, dataIndex : 'price'},
      {text : "Change", dataIndex : 'change'},
      {text : "% Change", dataIndex : 'pctChange'},
      {text : "Last Updated", renderer : Ext.util.Format.dateRenderer( 'm/d/Y' ), dataIndex : 'lastChange'}
    ],
//    features: [
//      {
//        ftype: 'filters',
//        autoReload: 'false',
//
//        filters: [{
//          type: 'string',
//          dataIndex: 'company'
//        }]
//      }
//    ],
  bodyPadding  : 0,
  plugins      :
    [
      {
        ptype      : 'rowexpander',
        rowBodyTpl : new Ext.XTemplate( '<p><b>Company:</b> {company}</p>',
                                        '<p><b>Change:</b> {change:this.formatChange}</p><br>',
                                        '<p><b>Summary:</b> {desc}</p>', {
            formatChange : function ( v ) {
              var color = v >= 0 ? 'green' : 'red';
              return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney( v ) + '</span>';
            }
          } )
      }
//      ,
//      {
//        type : 'TestPlugin'
//      }
    ],
  collapsible  : true,
  animCollapse : false,
  iconCls      : 'icon-grid',
  columnLines  : false,
  viewConfig   : {
    stripeRows : true
  },
//  bbar: [
//    {
//      text: "Reload",
//      handler: function() {
//        this.store.load();
//      }
//    }
//  ],
  init         : function () {
    console.log('PortfolioGrid intialized');
    //this.plugins.push( new BAML.view.grid.plugin.HeaderFilters() );
    //this.plugins.push( new Ext.ux.grid.FilterRow({refilterOnStoreUpdate: true}));
  }
} );
