'use strict';

function executeScripts (container, done) {
  if (!container) {
    return;
  }

  done = done || function () {};
  var scripts = [];

  var nodes = container.childNodes;
  for (var i = 0; nodes[i]; i++) {
    if (isScriptTag(nodes[i])) {
      scripts.push(nodes[i]);
      if (nodes[i].parentNode) {
        nodes[i].parentNode.removeChild(nodes[i]);
      }
    }
  }

  var head = document.getElementsByTagName('head')[0] || document.documentElement;
  load();

  function load () {
    if (scripts.length === 0) {
      done();
      return;
    }

    var script = scripts.shift();
    var data = script.text || script.textContent || script.innerHTML || '';
    var scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.appendChild(document.createTextNode(data));

    if (script.src) {
      scriptEl.onload = load;
      scriptEl.src = script.src;
      head.insertBefore(scriptEl, head.firstChild);
    } else {
      head.insertBefore(scriptEl, head.firstChild);
      load();
    }
  }
}

function isScriptTag (node) {
  return (node.nodeName && node.nodeName.toLowerCase() === 'script');
}

module.exports = executeScripts;
