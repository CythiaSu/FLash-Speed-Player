(function(){
"use strict";

var _s=1, SPEEDS=[0.25,0.5,1,2,3,5,10];
window._sp=_s;

function _ss(ns){
  _s=ns; window._sp=ns;
  var sv=document.getElementById("sv");
  if(sv)sv.textContent=ns.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")+"x";
  document.querySelectorAll("#sg .sp").forEach(function(b){
    b.classList.toggle("a",Math.abs(parseFloat(b.dataset.s||"0")-ns)<0.001);
  });
  if(window.electronAPI&&window.electronAPI.setSpeed)window.electronAPI.setSpeed(ns);
}
window._ss=_ss;
window._speedStep=function(d){
  var i=SPEEDS.indexOf(_s);
  if(d<0&&i>0)_ss(SPEEDS[i-1]);
  else if(d>0&&i<SPEEDS.length-1)_ss(SPEEDS[i+1]);
};
window._speedReset=function(){ _ss(1); };
window._onGSpd=function(s){ _ss(s); };

document.addEventListener("click",function(e){
  var t=e.target;
  if(t.id==="spDown")window._speedStep(-1);
  else if(t.id==="spReset")_ss(1);
  else if(t.id==="spUp")window._speedStep(1);
});

})();