(function(){
    'use strict';

    angular
        .module('app')
        .controller('Testecontroller', Testecontroller);

    function Testecontroller(){
        var vm = this;

        vm.texto = "";
        vm.resultado = "";        

        vm.alterar = function(){            
            var res = vm.texto;
        
            vm.resultado = res.replace(/[aeou]/ig, 'i');
        }
    }
    
})();