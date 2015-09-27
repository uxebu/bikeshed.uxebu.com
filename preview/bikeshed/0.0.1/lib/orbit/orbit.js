;(function() {'use strict';
  var module$orbit$bikeshed_api = {}, BikeshedApi$$module$orbit$bikeshed_api = {classes:{Shape:["arcBy", "arcTo", "lineTo", "moveTo"], filter:"Blur,Brightness,ColorMatrix,Contrast,DropShadow,Grayscale,HueRotate,Invert,Opacity,Saturate,Sepia".split(","), Bitmap:["onload"]}, methods:{Shape:"arc,circle,ellipse,rect,polygon,star".split(","), filter:"blur,brightness,colorMatrix,contrast,dropShadow,grayscale,hueRotate,invert,saturate,sepia".split(",")}, constants:{colors:"aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,transparent,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen".split(","), 
  easing:"linear,quadIn,quadOut,quadInOut,cubicIn,cubicOut,cubicInOut,quartIn,quartOut,quartInOut,quintIn,quintOut,quintInOut,sineIn,sineOut,sineInOut,expoIn,expoOut,expoInOut,circIn,circOut,circInOut,backIn,backOut,backInOut,elasticIn,elasticOut,elasticInOut,bounceIn,bounceOut,bounceInOut".split(","), attrKeys:"easing,fillColor,fillGradient,filters,fontFamily,fontSize\u2122,lineColor,lineWidth,rotation,scale,textFillColor,textLineColor,x,y".split(",")}};
  module$orbit$bikeshed_api.module$exports = BikeshedApi$$module$orbit$bikeshed_api;
  module$orbit$bikeshed_api.module$exports && (module$orbit$bikeshed_api = module$orbit$bikeshed_api.module$exports);
  var module$orbit$auto_completer = {}, BikeshedApi$$module$orbit$auto_completer = module$orbit$bikeshed_api, AutoCompleter$$module$orbit$auto_completer = {complete:function(a) {
    var a = this.getDetails(a), b = null;
    if(a) {
      var c = a.objectName, d = a.methodName;
      a.isClass ? BikeshedApi$$module$orbit$auto_completer.classes.hasOwnProperty(c) && (b = this.completeClass(c, d)) : BikeshedApi$$module$orbit$auto_completer.methods.hasOwnProperty(c) && (b = this.completeMethod(c, d))
    }
    return b ? b : ""
  }, completeMethod:function(a, b) {
    var c = BikeshedApi$$module$orbit$auto_completer.methods[a];
    if(!b) {
      return c[0]
    }
    for(var d = 0, e = c.length;d < e;d++) {
      if(0 === c[d].indexOf(b)) {
        return c[d].substr(b.length)
      }
    }
  }, completeClass:function(a, b) {
    var c = BikeshedApi$$module$orbit$auto_completer.classes[a];
    if(!b) {
      return c[0]
    }
    for(var d = 0, e = c.length;d < e;d++) {
      if(0 === c[d].indexOf(b)) {
        return c[d].substr(b.length)
      }
    }
  }, getDetails:function(a) {
    var b = a.match(/(new\s+)?[a-zA-Z.][a-zA-Z0-9.]+$/);
    if(b) {
      var c = b[0], a = c.split(".").slice(-1)[0], c = c.substr(0, c.length - a.length - 1);
      (b = !!b[1]) && (c = c.replace(/^new\s+/, ""));
      return{objectName:c, methodName:a, isClass:b}
    }
    return null
  }};
  module$orbit$auto_completer.module$exports = AutoCompleter$$module$orbit$auto_completer;
  module$orbit$auto_completer.module$exports && (module$orbit$auto_completer = module$orbit$auto_completer.module$exports);
  var module$orbit$event_emitter = {}, EventEmitter$$module$orbit$event_emitter = window.ace.require("ace/lib/event_emitter"), Klass$$module$orbit$event_emitter = EventEmitter$$module$orbit$event_emitter.EventEmitter;
  Klass$$module$orbit$event_emitter.emit = Klass$$module$orbit$event_emitter._emit;
  module$orbit$event_emitter.module$exports = Klass$$module$orbit$event_emitter;
  module$orbit$event_emitter.module$exports && (module$orbit$event_emitter = module$orbit$event_emitter.module$exports);
  var module$orbit$player = {}, EventEmitter$$module$orbit$player = module$orbit$event_emitter, mixin$$module$orbit$player = function(a, b) {
    var c, d, e = arguments.length;
    for(c = 1;c < e;c += 1) {
      for(d in b = arguments[c] || {}, b) {
        a[d] = b[d]
      }
    }
    return a
  };
  function Player$$module$orbit$player(a, b) {
    var c = a.elementId, d = a.bikeshed, e = a.submovieLoaderUrl;
    this.baseUrl = a.baseUrl;
    this.options = mixin$$module$orbit$player({}, this.defaultOptions, b);
    c = document.getElementById(c);
    c.innerHTML = "";
    this.movie = d.run(c, e, this.options);
    console.log("Player running using " + env + " environment.")
  }
  Player$$module$orbit$player.prototype = mixin$$module$orbit$player({movie:null, defaultOptions:{framerate:25, height:0, noCache:!0, width:0}, load:function(a) {
    "string" !== typeof a && (a = "");
    var b = this.movie;
    if(b.isRunnerListening) {
      b.sendMessage({type:"baseUrl", baseUrl:this.baseUrl}), b.sendMessage({type:"code", code:a}), this.play(), this.emit("load")
    }else {
      var c = this;
      setTimeout(function() {
        c.load(a)
      }, 125)
    }
  }, pause:function() {
    this.movie.post("freeze");
    this.isPlaying = !1
  }, play:function() {
    this.movie.post("unfreeze");
    this.isPlaying = !0
  }}, EventEmitter$$module$orbit$player);
  module$orbit$player.module$exports = Player$$module$orbit$player;
  module$orbit$player.module$exports && (module$orbit$player = module$orbit$player.module$exports);
  var module$orbit$util = {module$exports:{byId:function(a) {
    return document.getElementById(a)
  }, jsonp:function(a, b) {
    var c = document.createElement("script");
    c.setAttribute("src", a + "?callback=" + b);
    document.getElementsByTagName("head")[0].appendChild(c)
  }, mixin:function(a, b) {
    for(var c, d = 0, e = arguments.length;++d < e;) {
      for(c in b = arguments[d] || {}, b) {
        a[c] = b[c]
      }
    }
    return a
  }, renderDropdown:function(a, b, c) {
    var d = '<select id="' + b + '">', e;
    for(e in a) {
      b = a[e], d += '<optgroup label="' + e + '">', b.forEach(function(a) {
        var b = "";
        0 <= a.indexOf(c) && (b = ' selected="' + c + '" ');
        d += ["<option", b, ">", a, "</option>"].join("")
      }), d += "</optgroup>"
    }
    return d += "</select>"
  }, xhrGet:function(a, b) {
    var c = new XMLHttpRequest;
    c.open("GET", a);
    c.send("");
    c.onload = function() {
      c = null;
      b(this.responseText)
    }
  }}};
  module$orbit$util.module$exports && (module$orbit$util = module$orbit$util.module$exports);
  var module$orbit$examples_backend = {}, util$$module$orbit$examples_backend = module$orbit$util, EventEmitter$$module$orbit$examples_backend = module$orbit$event_emitter;
  function resolve$$module$orbit$examples_backend(a) {
    var b = document.createElement("a");
    b.href = a;
    return b.href
  }
  var selectNodeId$$module$orbit$examples_backend = "examplesFilepicker";
  function ExamplesBackend$$module$orbit$examples_backend(a, b) {
    b = b || {};
    this.baseUrl = b.baseUrl || "";
    var c = this, d = document.createElement("script");
    d.src = this.baseUrl + "/movie_list.js";
    d.onload = function() {
      c.init(a)
    };
    document.getElementsByTagName("head")[0].appendChild(d)
  }
  var proto$$module$orbit$examples_backend = ExamplesBackend$$module$orbit$examples_backend.prototype = {init:function(a) {
    var b = util$$module$orbit$examples_backend.renderDropdown(movieList, selectNodeId$$module$orbit$examples_backend);
    util$$module$orbit$examples_backend.byId(a).innerHTML = b;
    var c = this;
    util$$module$orbit$examples_backend.byId(selectNodeId$$module$orbit$examples_backend).onchange = function(a) {
      c.loadFile(a)
    }
  }, loadFile:function(a) {
    var b = a.target && a.target.value || a, a = resolve$$module$orbit$examples_backend(this.baseUrl + "/" + b), c = this;
    util$$module$orbit$examples_backend.xhrGet(a, function(a) {
      c.emit("update", {filename:b, sourceCode:a})
    })
  }};
  util$$module$orbit$examples_backend.mixin(proto$$module$orbit$examples_backend, EventEmitter$$module$orbit$examples_backend);
  module$orbit$examples_backend.module$exports = ExamplesBackend$$module$orbit$examples_backend;
  module$orbit$examples_backend.module$exports && (module$orbit$examples_backend = module$orbit$examples_backend.module$exports);
  var module$orbit$url_backend = {}, EventEmitter$$module$orbit$url_backend = module$orbit$event_emitter, util$$module$orbit$url_backend = module$orbit$util, UrlBackend$$module$orbit$url_backend = function() {
    var a = this, b = this.load();
    b && setTimeout(function() {
      a.emit("startup", b)
    }, 16)
  }, proto$$module$orbit$url_backend = UrlBackend$$module$orbit$url_backend.prototype = {save:function(a) {
    location.hash = encodeURIComponent(a)
  }, load:function() {
    var a = location.hash && location.hash.slice(1);
    try {
      return decodeURIComponent(a)
    }catch(b) {
      return a
    }
  }};
  util$$module$orbit$url_backend.mixin(proto$$module$orbit$url_backend, EventEmitter$$module$orbit$url_backend);
  module$orbit$url_backend.module$exports = UrlBackend$$module$orbit$url_backend;
  module$orbit$url_backend.module$exports && (module$orbit$url_backend = module$orbit$url_backend.module$exports);
  var module$orbit$value_modifier = {}, BikeshedApi$$module$orbit$value_modifier = module$orbit$bikeshed_api, ValueModifier$$module$orbit$value_modifier = {increase:function(a) {
    return"" === a ? a : -1 != BikeshedApi$$module$orbit$value_modifier.methods.Shape.indexOf(a) ? this._getNextInArray(BikeshedApi$$module$orbit$value_modifier.methods.Shape, a) : -1 != BikeshedApi$$module$orbit$value_modifier.constants.colors.indexOf(a) ? this._getNextInArray(BikeshedApi$$module$orbit$value_modifier.constants.colors, a) : -1 != BikeshedApi$$module$orbit$value_modifier.constants.easing.indexOf(a) ? this._getNextInArray(BikeshedApi$$module$orbit$value_modifier.constants.easing, a) : 
    -1 != BikeshedApi$$module$orbit$value_modifier.constants.attrKeys.indexOf(a) ? this._getNextInArray(BikeshedApi$$module$orbit$value_modifier.constants.attrKeys, a) : -1 != BikeshedApi$$module$orbit$value_modifier.methods.filter.indexOf(a) ? this._getNextInArray(BikeshedApi$$module$orbit$value_modifier.methods.filter, a) : -1 != BikeshedApi$$module$orbit$value_modifier.classes.filter.indexOf(a) ? this._getNextInArray(BikeshedApi$$module$orbit$value_modifier.classes.filter, a) : isNaN(a) ? a : 
    (parseInt(a) + 1) % 10
  }, decrease:function(a) {
    if("" === a) {
      return a
    }
    if(-1 != BikeshedApi$$module$orbit$value_modifier.methods.Shape.indexOf(a)) {
      return this._getPreviousInArray(BikeshedApi$$module$orbit$value_modifier.methods.Shape, a)
    }
    if(-1 != BikeshedApi$$module$orbit$value_modifier.constants.colors.indexOf(a)) {
      return this._getPreviousInArray(BikeshedApi$$module$orbit$value_modifier.constants.colors, a)
    }
    if(-1 != BikeshedApi$$module$orbit$value_modifier.constants.easing.indexOf(a)) {
      return this._getPreviousInArray(BikeshedApi$$module$orbit$value_modifier.constants.easing, a)
    }
    if(-1 != BikeshedApi$$module$orbit$value_modifier.constants.attrKeys.indexOf(a)) {
      return this._getPreviousInArray(BikeshedApi$$module$orbit$value_modifier.constants.attrKeys, a)
    }
    if(-1 != BikeshedApi$$module$orbit$value_modifier.methods.filter.indexOf(a)) {
      return this._getPreviousInArray(BikeshedApi$$module$orbit$value_modifier.methods.filter, a)
    }
    if(-1 != BikeshedApi$$module$orbit$value_modifier.classes.filter.indexOf(a)) {
      return this._getPreviousInArray(BikeshedApi$$module$orbit$value_modifier.classes.filter, a)
    }
    if(isNaN(a)) {
      return a
    }
    a = parseInt(a) - 1;
    return-1 == a ? 9 : a
  }, _getPreviousInArray:function(a, b) {
    return a[(a.indexOf(b) - 1 + a.length) % a.length]
  }, _getNextInArray:function(a, b) {
    return a[(a.indexOf(b) + 1) % a.length]
  }};
  module$orbit$value_modifier.module$exports = ValueModifier$$module$orbit$value_modifier;
  module$orbit$value_modifier.module$exports && (module$orbit$value_modifier = module$orbit$value_modifier.module$exports);
  var module$orbit$editor_extension = {}, ValueModifier$$module$orbit$editor_extension = module$orbit$value_modifier, AutoCompleter$$module$orbit$editor_extension = module$orbit$auto_completer, range$$module$orbit$editor_extension = window.ace.require("ace/range"), Range$$module$orbit$editor_extension = range$$module$orbit$editor_extension.Range, shortcuts$$module$orbit$editor_extension = [{bindKey:{win:"Alt-Up", mac:"Option-Up", sender:"editor"}, methodName:"increaseValue"}, {bindKey:{win:"Alt-Down", 
  mac:"Option-Down", sender:"editor"}, methodName:"decreaseValue"}, {bindKey:{win:"Alt-Right", mac:"Option-Right", sender:"editor"}, methodName:"autoComplete"}];
  function EditorExtension$$module$orbit$editor_extension(a) {
    this.editor = a
  }
  EditorExtension$$module$orbit$editor_extension.prototype = {connectKeyboardShortcuts:function() {
    shortcuts$$module$orbit$editor_extension.forEach(this.connectKeyboardShortcut.bind(this))
  }, connectKeyboardShortcut:function(a) {
    this.editor.commands.addCommand({name:a.methodName, bindKey:a.bindKey, exec:this[a.methodName].bind(this)})
  }, _modifyValue:function(a) {
    var b = this.editor.getCursorPosition(), c = this.editor.getSession(), d = c.getWordRange(b.row, b.column), e = c.getTextRange(d);
    isNaN(parseFloat(e)) ? c.replace(d, "" + ValueModifier$$module$orbit$editor_extension[a](e)) : (d = c.getLine(b.row).substr(b.column, 1), e = new Range$$module$orbit$editor_extension(b.row, b.column, b.row, b.column + 1), c.replace(e, "" + ValueModifier$$module$orbit$editor_extension[a](d)));
    this.editor.moveCursorTo(b.row, b.column)
  }, increaseValue:function() {
    this._modifyValue("increase")
  }, decreaseValue:function() {
    this._modifyValue("decrease")
  }, autoComplete:function() {
    var a = this.editor.getCursorPosition(), b = this.editor.getSession(), c = b.getLine(a.row);
    a.column == c.length && (c = AutoCompleter$$module$orbit$editor_extension.complete(c.substr(0, a.column)), b.insert(a, c))
  }};
  module$orbit$editor_extension.module$exports = EditorExtension$$module$orbit$editor_extension;
  module$orbit$editor_extension.module$exports && (module$orbit$editor_extension = module$orbit$editor_extension.module$exports);
  var module$orbit$editor = {}, EventEmitter$$module$orbit$editor = module$orbit$event_emitter, util$$module$orbit$editor = module$orbit$util, EditorExtension$$module$orbit$editor = module$orbit$editor_extension, EXAMPLE$$module$orbit$editor = '\n\nShape.rect(100,100,100,100)\n  .addTo(stage)\n  .attr({fillColor:"red"});';
  function Editor$$module$orbit$editor(a) {
    this.editor = window.ace.edit(a);
    this.setEditorContent(EXAMPLE$$module$orbit$editor);
    this.editor.getSession().setMode("ace/mode/javascript");
    this.editor.getSession().setTabSize(2);
    this.editor.getSession().setUseSoftTabs(!0);
    (new EditorExtension$$module$orbit$editor(this.editor)).connectKeyboardShortcuts();
    var b = this;
    this.content = "";
    this.contentChangeTimer = null;
    this.editor.getSession().on("change", function() {
      clearTimeout(b.contentChangeTimer);
      var a = b.editor.getSession().getValue();
      a !== b.content && (b.content = a, b.contentChangeTimer = setTimeout(function() {
        b.emit("update", b.editor.getSession().getValue())
      }, 500))
    })
  }
  var proto$$module$orbit$editor = Editor$$module$orbit$editor.prototype = {content:"", contentChangeTimer:null, load:function(a) {
    this.setEditorContent(a)
  }, setEditorContent:function(a) {
    this.editor.getSession().setValue(a)
  }, onContentChange:function() {
    for(var a = 0;a < this.backends.length;a++) {
      this.backends[a].save(this.content)
    }
    player.update(this.content)
  }, loadContent:function() {
    for(var a, b = 0;b < this.backends.length;b++) {
      if(a = this.backends[b].load()) {
        return a
      }
    }
    return EXAMPLE$$module$orbit$editor
  }, restoreSession:function() {
    var a = this.loadContent();
    a && this.setEditorContent(a)
  }};
  util$$module$orbit$editor.mixin(proto$$module$orbit$editor, EventEmitter$$module$orbit$editor);
  module$orbit$editor.module$exports = Editor$$module$orbit$editor;
  module$orbit$editor.module$exports && (module$orbit$editor = module$orbit$editor.module$exports);
  var module$cheatsheet$sheet = {};
  function toArray$$module$cheatsheet$sheet(a) {
    return[].slice.call(a)
  }
  function escapeHtml$$module$cheatsheet$sheet(a) {
    return a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }
  var domHelpers$$module$cheatsheet$sheet = {hide:function(a) {
    a.style.display = "none"
  }, show:function(a) {
    a.style.display = "block"
  }, getPreviousNode:function(a, b) {
    for(b = b.toLowerCase();a = a.previousSibling;) {
      if(a.nodeName.toLowerCase() === b) {
        return a
      }
    }
    return null
  }}, sheet$$module$cheatsheet$sheet = {options:{showCodeOnly:!1, showH1:!0}, init:function(a, b) {
    this.container = a;
    this.content = b;
    this.container.innerHTML = this.parseHTMLFromMarkdown(b);
    this.nodes = toArray$$module$cheatsheet$sheet(this.container.children);
    toArray$$module$cheatsheet$sheet(this.container.querySelectorAll("pre")).forEach(function(a) {
      a.dataset.actualInnerHtml = a.textContent
    })
  }, parseHTMLFromMarkdown:function(a) {
    return marked.parser(marked.lexer(a))
  }, filter:function(a, b) {
    var c = [], d = [], e = this;
    this.findCodeNodesWithString(a).forEach(function(a) {
      c.push(a);
      e.options.showCodeOnly || c.push(domHelpers$$module$cheatsheet$sheet.getPreviousNode(a, "p"));
      c.push(domHelpers$$module$cheatsheet$sheet.getPreviousNode(a, "h3"));
      c.push(domHelpers$$module$cheatsheet$sheet.getPreviousNode(a, "h2"));
      e.options.showH1 && c.push(domHelpers$$module$cheatsheet$sheet.getPreviousNode(a, "h1"));
      d.push(a)
    });
    var f = !!c.length;
    b && !f && (this.removeMarks(), this.nodes.forEach(domHelpers$$module$cheatsheet$sheet.show));
    if(f) {
      this.removeMarks();
      for(var f = 0, g = d.length;f < g;f++) {
        e.markInNode(d[f], a)
      }
      this.nodes.forEach(domHelpers$$module$cheatsheet$sheet.hide);
      c.forEach(domHelpers$$module$cheatsheet$sheet.show)
    }
  }, removeMarks:function() {
    toArray$$module$cheatsheet$sheet(this.container.querySelectorAll("pre")).forEach(function(a) {
      a.innerHTML = a.dataset.actualInnerHtml
    })
  }, findCodeNodesWithString:function(a) {
    var b = this.container.querySelectorAll("pre"), c = this;
    return toArray$$module$cheatsheet$sheet(b).filter(function(b) {
      return c.isInNode(a, b)
    })
  }, isInNode:function(a, b) {
    return-1 < b.dataset.actualInnerHtml.toLowerCase().indexOf(a.toLowerCase())
  }, markSearchString:function(a, b) {
    if(!b) {
      return a
    }
    var c = a, d = b.toLowerCase(), e = a.toLowerCase(), f = e.indexOf(d);
    -1 != f && (c = escapeHtml$$module$cheatsheet$sheet(a.substr(0, f)) + "<mark>" + escapeHtml$$module$cheatsheet$sheet(a.substr(f, b.length)) + "</mark>", c = -1 < e.substr(f + b.length).indexOf(d) ? c + this.markSearchString(a.substr(f + b.length), b) : c + escapeHtml$$module$cheatsheet$sheet(a.substr(f + b.length)));
    return c
  }, markInNode:function(a, b) {
    a.innerHTML = this.markSearchString(a.dataset.actualInnerHtml, b)
  }};
  module$cheatsheet$sheet.module$exports = sheet$$module$cheatsheet$sheet;
  module$cheatsheet$sheet.module$exports && (module$cheatsheet$sheet = module$cheatsheet$sheet.module$exports);
  var module$cheatsheet$util = {}, httpRequest$$module$cheatsheet$util, onSuccess$$module$cheatsheet$util;
  function makeRequest$$module$cheatsheet$util(a, b) {
    onSuccess$$module$cheatsheet$util = b;
    if(window.XMLHttpRequest) {
      httpRequest$$module$cheatsheet$util = new XMLHttpRequest
    }else {
      if(window.ActiveXObject) {
        try {
          httpRequest$$module$cheatsheet$util = new ActiveXObject("Msxml2.XMLHTTP")
        }catch(c) {
          try {
            httpRequest$$module$cheatsheet$util = new ActiveXObject("Microsoft.XMLHTTP")
          }catch(d) {
          }
        }
      }
    }
    if(!httpRequest$$module$cheatsheet$util) {
      return alert("Giving up :( Cannot create an XMLHTTP instance"), !1
    }
    httpRequest$$module$cheatsheet$util.onreadystatechange = alertContents$$module$cheatsheet$util;
    httpRequest$$module$cheatsheet$util.open("GET", a);
    httpRequest$$module$cheatsheet$util.send()
  }
  function alertContents$$module$cheatsheet$util() {
    4 === httpRequest$$module$cheatsheet$util.readyState && (200 === httpRequest$$module$cheatsheet$util.status ? onSuccess$$module$cheatsheet$util(httpRequest$$module$cheatsheet$util.responseText) : alert("There was a problem with the request."))
  }
  module$cheatsheet$util.module$exports = {xhr:makeRequest$$module$cheatsheet$util};
  module$cheatsheet$util.module$exports && (module$cheatsheet$util = module$cheatsheet$util.module$exports);
  var module$orbit$orbit = {}, Editor$$module$orbit$orbit = module$orbit$editor, Player$$module$orbit$orbit = module$orbit$player, UrlBackend$$module$orbit$orbit = module$orbit$url_backend, ExamplesBackend$$module$orbit$orbit = module$orbit$examples_backend, util$$module$orbit$orbit = module$cheatsheet$util, sheet$$module$orbit$orbit = module$cheatsheet$sheet, Orbit$$module$orbit$orbit = window.Orbit = function(a, b) {
    var c = this.editor = new Editor$$module$orbit$orbit(a.elementId), d = new Player$$module$orbit$orbit(b, b.bikeshedOptions), e = new UrlBackend$$module$orbit$orbit, f = new ExamplesBackend$$module$orbit$orbit("fileContainer", b.exampleBackendOptions);
    c.on("update", function(a) {
      d.load(a);
      e.save(a)
    });
    e.on("startup", function(a) {
      /^.*\.js$/i.test(a) ? f.loadFile(a) : c.load(a)
    });
    f.on("update", function(a) {
      c.load(a.sourceCode)
    });
    var g = document.getElementById("play-pause");
    d.on("load", function() {
      g.checked = !0
    });
    g.onchange = function() {
      d[this.checked ? "play" : "pause"]()
    };
    util$$module$orbit$orbit.xhr("./cheatsheet/cheatsheet.md", function(a) {
      sheet$$module$orbit$orbit.init(document.getElementById("cheatsheet-content"), a);
      sheet$$module$orbit$orbit.options.showH1 = !1
    });
    var j = "";
    setInterval(function() {
      if(c) {
        var a = c.editor.getCursorPosition(), b = c.editor.getSession(), a = b.getWordRange(a.row, a.column), b = b.getTextRange(a), a = b == parseInt(b);
        /\w/.test(b) && j != b && !a && sheet$$module$orbit$orbit.filter(j = b)
      }
    }, 500);
    var i = document.querySelector("#cheatsheet-open"), h = document.querySelector("#cheatsheet-close"), k = document.querySelector("#editorNode"), l = document.querySelector("#cheatsheet");
    h.style.display = "none";
    i.onclick = function() {
      k.style.height = "50%";
      l.style.display = "block";
      i.style.display = "none";
      h.style.display = "block";
      c.editor.resize()
    };
    h.onclick = function() {
      k.style.height = "100%";
      l.style.display = "none";
      h.style.display = "none";
      i.style.display = "block";
      c.editor.resize()
    }
  };
  module$orbit$orbit.module$exports = Orbit$$module$orbit$orbit;
  module$orbit$orbit.module$exports && (module$orbit$orbit = module$orbit$orbit.module$exports)
})();

