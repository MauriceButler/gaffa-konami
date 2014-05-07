var Gaffa = require('gaffa'),
    Konami = require('konami-js'),
    behaviours = [];

new Konami(function(){
    for (var i = 0; i < behaviours.length; i++) {
        behaviours[i].triggerActions('trigger');
    }
});

function KonamiBehaviour(){}

KonamiBehaviour = Gaffa.createSpec(KonamiBehaviour, Gaffa.Behaviour);
KonamiBehaviour.prototype._type = 'konami';
KonamiBehaviour.prototype.bind = function(){
    behaviours.push(this);
    this.constructor.__super__.prototype.bind.call(this);
};
KonamiBehaviour.prototype.unbind = function(){
    behaviours.splice(behaviours.indexOf(this), 1);
    this.constructor.__super__.prototype.unbind.call(this);
};

module.exports = KonamiBehaviour;