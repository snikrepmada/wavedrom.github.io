(function () {
    'use strict';

    var e, cm, tree, parse;

    parse = require('shift-parser').default;

    e = document.getElementById('input');
    e.value = localStorage.shiftAST || 'function add (a, b) {\n  [x, y] = [a, b];\n}';

    function refresh () {
        var v;
        v = cm.getValue();
        tree = parse(v);
        localStorage.shiftAST = v;
        /* eslint-disable no-console */
        console.log(JSON.stringify(tree, null, 2));
        /* eslint-enable no-console */
    }

    cm = CodeMirror.fromTextArea(
        e,
        {
            mode: 'javascript',
            lineNumbers: true,
            indentUnit: 2,
            tabSize: 2,
            matchBrackets: true,
            autoCloseBrackets: true,
            highlightSelectionMatche: true,
            autofocus: true
        }
    );
    cm.on('change', function () {
        setTimeout(refresh, 750);
    });
    refresh();
})();

/* global console, CodeMirror */
