function BNeditor(cl, options){
  var tar = document.querySelector(cl);
  var apI = document.createElement('iframe');
  tar.appendChild(apI);
  this.doc = tar.childNodes[0].contentWindow.document;
  this.editorDOM = null;
  this.toolbar = null;
  this.content = null;
  this.init(options);
}

BNeditor.prototype = {
  init:function(options){
    var self = this;

    //添加样式表
    var apC = document.createElement('link');
    apC.rel = 'stylesheet';
    apC.type = 'text/css';
    apC.href = './bn-editor.css';
    self.doc.head.appendChild(apC);
    apC = document.createElement('link');
    apC.rel = 'stylesheet';
    apC.type = 'text/css';
    apC.href = './reset.css';
    self.doc.head.appendChild(apC);

    //使可以编辑
    var apD = document.createElement('div');
    apD.className = "container";
    apD.contentEditable = "true";
    apD.innerHTML = "<div class='toolbar'></div><div class='content'></div>";
    self.doc.body.appendChild(apD);
    //self.editorDOM = apD;
    self.editorDOM = self.doc.querySelector(".container");
    self.toolbar = self.editorDOM.children[0];
    self.content = self.editorDOM.children[1];

    for( prop in options){
      self[prop](options[prop]);
    }
  },
  width: function(wid){
    this.editorDOM.style.width = wid;
  },
  height: function(hei){
    this.editorDOM.style.height = hei;
  },
  tool: function(fun){
    var self = this,
        i = 0;
    for(i = 0; i < fun.length; i++){
      self[add];
    }
  },
  bold:function(){
    var div = document.createElement('div');
    div.className = "toolicon";
    div.id = "bold";
    self.toolbar.appendChild(div);
    div.addEventListener("click", function(e){
      console.log("true");
    }, false);
  },
  italic:function(){
  },
  underline:function(){
  },
}
