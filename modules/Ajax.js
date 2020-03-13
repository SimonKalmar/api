'use strict';

let Ajax = {
    init() {
        this.ajaxobj = false;
        try {
            this.ajaxobj = new XMLHttpRequest();
        } catch(err) {
            window.alert(err.message + " Get yourself a browser ;)");
        }
    },

    getFile(filename, callback) {
        try {
            this.ajaxobj.addEventListener('load', function(ev) {
                callback(ev);
            });
            this.ajaxobj.open("GET", filename);
            this.ajaxobj.send("");
        } catch(err) {
            window.alert(err.message + 'WTF');
        }
    }
}

export {Ajax};
