define( [ 'jquery', 'underscore', 'libs/backbone', 'libs/handlebars' ], function( $, _, Backbone, Handlebars ){
    'use strict';

    var TimeView = Backbone.View.extend({
        tagName: 'div',
        id: 'js-time',
        className: 'time',
        tmpl: Handlebars.compile( '<span>{{hrs}}:{{mins}}:{{secs}}.{{ms}}</span>' ),
        events: {
            'click #js-time': 'hide'
        },
        initialize: function() {
            $( 'body' ).append( this.el );
            this.model.on( 'change', this.render, this );
        },
        render: function(){
            $( this.el ).html( this.tmpl( this.model.toJSON() ) );
            return this;
        },
        hide: function(){
            $( this.el ).fadeOut();
        }
    });

    // public api /////////////////////////////////////////////////////////////
    return TimeView;
});
