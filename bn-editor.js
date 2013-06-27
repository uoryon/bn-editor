function BNeditor(cl, options){
  var tar = document.querySelector(cl);
  var apI = document.createElement('iframe');
  tar.appendChild(apI);

  this.doc = tar.childNodes[0].contentWindow.document;
  this.editorDOM = null;
  this.toolbar = null;
  this.content = null;
  this.funOrder = ["Bold", "Italic", "Underline"];


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
    apD.innerHTML = "<div class='toolbar'></div><div class='content'></div>";
    self.doc.body.appendChild(apD);
    self.doc.designMode = "on";
    //self.editorDOM = apD;
    self.editorDOM = self.doc.querySelector(".container");
    self.toolbar = self.editorDOM.children[0];
    self.content = self.editorDOM.children[1];
    self.content.setAttribute("contenteditable", "true");
    for( prop in options){
      self[prop](options[prop]);
    }
  },
  width: function(wid){
    this.editorDOM.style.width = wid;
  },
  height: function(hei){
    this.editorDOM.style.height = hei;
    this.content.style.height = hei.match(/\d+/)[0] - 2 + "px";
  },
  tool: function(fun){
    var self = this,
        i = 0,
        j = 0;
    for(i = 0; i < self.funOrder.length; i++){
      for(j = 0; j < fun.length; j++){
        if(self.funOrder[i] == fun[j]){
          self[fun[j]]();
        }
      }
    }
  },
  addDom:function(type){
    var self = this;
    self.doc.createElement(type);
    self.content.appendChild();
  },
  Bold:function(){
    var div = document.createElement('input'),
        self = this;
    div.className = "toolicon";
    div.type = "button";
    div.id = "bold";
    div.value = "B";
    self.toolbar.appendChild(div);
    div.addEventListener("click", function(e){
      var oEle = e.target;
      console.log(self.doc.execCommand("bold", false, null));
      if(oEle.classList.contains("toolon")){
        oEle.classList.remove("toolon");
      }
      else{
        oEle.classList.add("toolon");
        //var oB = self.doc.createElement("span");
        //self.content.appendChild(oB);
        //oB.focus();
      }
    }, false);
  },
  Italic:function(){
    var div = document.createElement('input'),
        self = this;
    div.className = "toolicon";
    div.type = "button";
    div.id = "italic";
    div.value = "I";
    self.toolbar.appendChild(div);
    div.addEventListener("click", function(e){
      var oEle = e.target;
      console.log(self.doc.execCommand("italic", false, null));
      if(oEle.classList.contains("toolon")){
        oEle.classList.remove("toolon");
      }
      else{
        oEle.classList.add("toolon");
        //var oB = self.doc.createElement("span");
        //self.content.appendChild(oB);
        //oB.focus();
      }
    }, false);
  },
  Underline:function(){
    var div = document.createElement('input'),
        self = this;
    div.className = "toolicon";
    div.type = "button";
    div.id = "underline";
    div.value = "U";
    self.toolbar.appendChild(div);
    div.addEventListener("click", function(e){
      var oEle = e.target;
      console.log(self.doc.execCommand("underline", false, null));
      if(oEle.classList.contains("toolon")){
        oEle.classList.remove("toolon");
      }
      else{
        oEle.classList.add("toolon");
        //var oB = self.doc.createElement("span");
        //self.content.appendChild(oB);
        //oB.focus();
      }
    }, false);
  
  },
}
