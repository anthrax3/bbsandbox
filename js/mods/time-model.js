define( [ 'jquery', 'underscore', 'libs/backbone', 'libs/handlebars' ], function( $, _, Backbone, Handlebars ){
    'use strict';

    var TimeModel = Backbone.Model.extend({
        getTime: function(){
            var now = new Date();

            return {
                hrs: now.getHours(),
                mins: now.getMinutes(),
                secs: now.getSeconds(),
                ms: now.getMilliseconds()
            };
        },
        initialize: function(){
            var self = this,
                now = new Date();

            self.set( self.getTime() );

            setInterval(function(){
                self.set( self.getTime() );
            }, 30 );
        }
    });

    // public api /////////////////////////////////////////////////////////////
    return TimeModel;
});
