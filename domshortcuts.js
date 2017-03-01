
/// FOR HELP:::::
window.onload=()=>{window.root=document.body;}
function dop(n){
    let x='';
    for(let i=0;i<n;i++){
        x+='<p>'+i+'</p>';
    }
    return x;
}
/// END FOR HELP:::::

Element.parseHTML=function (some,forceArray){
  if(some instanceof Element) return some;
  let docp=document.createElement( 'div' );
  if(typeof some == 'string') {
    if(some.trim()[0]=='<'){
      docp.innerHTML=some;
      doc=docp.children;
      if(forceArray) return doc;
      return (doc.length==1)?doc[0]:doc;
    }else{
      docp.textContent=some;
      let doc = docp.firstChild;
      if(forceArray) return [doc];
      return doc;
    }
  }
  docp.innerHTML='<![CDATA['+JSON.stringify(some)+']]>';
  if(forceArray) return [docp.firstChild];
  return docp.firstChild;
}

Element.prototype.select=function(qs){ return this.querySelector(qs) };
Element.prototype.selects=function(qs){ return this.querySelectorAll(qs) };
Element.prototype.parent=function(){ return this.parentNode };
Element.prototype.prev=function(){ return this.previousSibling };
Element.prototype.next=function(){ return this.nextSibling };

Element.prototype.prependx=function(elem,dontParse){
  if(!dontParse) elem=this.constructor.parseHTML(elem,true);
  let elemx=elem.length;
  let first=this.firstChild;
  if(first===null)this.appendChild(elem[0]);
  for(let i=0;i<elemx;i++){
    this.insertBefore(elem[0],this.firstChild);
  }
  return this.firstChild;
}
Element.prototype.appendx=function(elem,dontParse){
  if(!dontParse)elem=this.constructor.parseHTML(elem,true);
  let elemx=elem.length;
  for(let i=0;i<elemx;i++){
    this.appendChild(elem[0]);
  }
  return this.lastChild;
}
Element.prototype.addBefore=function(elem,dontParse){
  if(!dontParse)elem=this.constructor.parseHTML(elem,true);
  let parent=this.parentNode;
  let elemx=elem.length;
  for(let i=0;i<elemx;i++){
    parent.insertBefore(elem[0],this);
  }
  return this.previousSibling;
}
Element.prototype.addAfter=function(elem,dontParse){
  if(!dontParse)elem=this.constructor.parseHTML(elem,true);
  let next = this.nextSibling;
  let parent=this.parentNode;
  if(next===null){
    parent.appendChild(elem[0]);
    next = this.nextSibling;
  }
  let elemx=elem.length;
  for(let i=0;i<elemx;i++){
    parent.insertBefore(elem[0],next);
  }
  return this.nextSibling;
}
Element.prototype.remove=function(){
  this.parentNode.removeChild(this);
  return this;
}


Element.prototype.on=function(what,callback){
  return this.addEventListener(what,callback);
}
Element.prototype.off=function(what,callback){
  this.removeEventListener(what,callback);
  return this;
}
