/**
 * One more jQuery plugin to load content qhen you scrolls
 * @param {Object}   params   [All options of the plugin]
 * params.direction = Direction to Scroll
 * params.threshold = Threshold in px to do the callback
 */
(function ($) {

    $.fn.loadwhenscroll = function (params, callback) {
        // Default options
        var options = {
           direction : 'down',
           threshold : 500,
        };

        // Save this jquery object
        var $this = $(this);

        // Extend default options with custom options
        options = $.extend($.fn.loadwhenscroll.dafaults, options, params);

        // Switch direction
        var scrollDirection,scrollInfo;
        switch(options.direction){
            case "down":
                scrollDirection = "scrollTop";
                scrollInfo = "scrollHeight";
            break;
            case "right":
                scrollDirection = "scrollLeft";
                scrollInfo = "scrollWidth";
            break;
        }

        var methods = {
            initialize : function(){
                 methods.listenScroll();
            },

            listenScroll : function(){
                $this.on("scroll",function() {
                    var scr = $this[scrollDirection]();
                    var size = $this[0][scrollInfo];

                    console.log("scr: "+scr+" size: "+size+" rest: "+ (size-options.threshold) );

                    if(scr >= size-options.threshold){
                        methods.callback();
                    }
                });
            },

            callback : function() {
                // Do the calback if necessary
                if (callback) {
                    callback.call($this);
                } else if (typeof params == "function") {
                    params.call($this);
                }
            }

        }

        methods.initialize();
    };
}(jQuery));