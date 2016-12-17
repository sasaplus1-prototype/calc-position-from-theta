(function(){
  'use strict';

  var vm = {};

  vm.x = ko.observable(300);
  vm.y = ko.observable(300);

  vm.theta = ko.observable(0);
  vm.l = ko.observable(1);

  vm.satelliteY = ko.pureComputed(function() {
    var y = parseFloat(ko.unwrap(this.y)),
        l = parseFloat(ko.unwrap(this.l)),
        theta = parseFloat(ko.unwrap(this.theta));

    return l * Math.sin(Math.PI * theta / 180) * 100 + y;
  }, vm);
  vm.satelliteX = ko.pureComputed(function() {
    var x = parseFloat(ko.unwrap(this.x)),
        l = parseFloat(ko.unwrap(this.l)),
        theta = parseFloat(ko.unwrap(this.theta));

    return l * Math.cos(Math.PI * theta / 180) * 100 + x;
  }, vm);

  ko.applyBindings(vm);

}());
