template: '<div @click="toggle">User: {{ output }}</div>',
props: {
    input: {
        type: String,
        require: true,
    }
},
data: function() {
    return {
        style: 'simple',
    }
},
computed: {
    output: function() {
        if(this.style === 'human') {
            return this.input.substr(0, this.input.indexOf(','));
        } else if (this.style === 'simple') {
            return this.input.substr(this.input.indexOf(',') + 1);
        }
    }
},
methods: {
    toggle: function() {
        this.style = this.style === 'simple' ? 'human' : 'simple'
    }
}
