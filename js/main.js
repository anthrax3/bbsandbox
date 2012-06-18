require.config({
    paths : {
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore'
    }
});
require( [ 'jquery', 'mods/time-view', 'mods/time-model' ], function( $, TimeView, TimeModel ){
    'use strict';
    var model = new TimeModel();
    var view = new TimeView({ model: model });
});
