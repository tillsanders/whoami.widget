command: "echo $(id -F),$(id -un)",
refreshFrequency: 5000,
render: function (input) {
    window.whoamiWidget = {
        input: input
    };
    return '<div id="whoami-widget"></div>';
},
afterRender: function(domEl) {
    var Vue = require('./node_modules/vue/dist/vue');
    var WhoamiWidget = require('./lib/WhoamiWidget');
    var app = new Vue({
        el: '#whoami-widget',
        template: '<whoami-widget id="whoami-widget" v-bind:input="input"></whoami-widget>',
        data: function() {
            return window.whoamiWidget
        },
        components: {
            WhoamiWidget: WhoamiWidget
        }
    });
},
update: function(input) {
    window.whoamiWidget.input = input;
},
style: '@import "./whoami.widget/lib/style.css"',
