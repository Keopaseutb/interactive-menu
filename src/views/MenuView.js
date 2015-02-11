define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var StripView = require('views/StripView');

    function MenuView() {
        View.apply(this, arguments);

        _createStripViews.call(this);
    }

    MenuView.prototype = Object.create(View.prototype);
    MenuView.prototype.constructor = MenuView;

    MenuView.DEFAULT_OPTIONS = {
        stripData: {}
    };

    function _createStripViews(){
        var stripView = new StripView();
        var stripModifier = new StateModifier({
            transform: Transform.translate(0, 200, 0)
        });

        this.add(stripModifier).add(stripView);
    }

    module.exports = MenuView;
});
