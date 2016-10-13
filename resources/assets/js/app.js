//Opció 1: require No usar en navegadors Normals, node.js sí. Funciona si compil·lem.
//Opció 2: import No usar en navegador normal o node.js, ECS6 sí.
//L'elixir el farà compatible.
//Un fitxer javascript, 1 mòdul.
//var jquery = require('jquery');
//var $ = require('jquery');
//Per usar els 2 alhora.
//var underscoe = require('underscore');
//var _ = require('underscore');
window.$ = window.jQuery = require('jquery');

window._ = window._underscore = require('underscore');
require('bootstrap-sass');

    $(document).ready(function(){
        $("#msgid").html("hello world!");
    });