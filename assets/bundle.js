(()=>{var e={406:(e,t,o)=>{const{gaussianPDF:a}=o(958);e.exports={drawChart:function(e=-5.1,t=5.1,o=0,n=1,r=-1/0,l="chart"){const s=new google.visualization.AreaChart(document.getElementById(l)),i=new google.visualization.DataTable;i.addColumn("number","X Value"),i.addColumn("number","Y Value"),i.addColumn({type:"boolean",role:"scope"}),i.addColumn({type:"string",role:"style"}),i.addRows(function(e,t,o,n,r){const l=[];let s=0;for(let i=e;i<=t;i+=.01*n)l[s]=new Array(4),l[s][0]=i,l[s][1]=a(o,n,i),l[s][2]=!(i>r),l[s][3]="opacity: 1; + stroke-color: #000",s++;return l}(e,t,o,n,r)),s.draw(i,{legend:"none",enableInteractivity:!1,hAxis:{baselineColor:"transparent"},vAxis:{baselineColor:"#999"},areaOpacity:0,height:350})}}},958:e=>{function t(e,t,o){let a;return function(e){if(!e)throw"Assertion failed"}(t>0),a=(o-e)/t,a}function o(e,o,a){let n=t(e,o,a);return Math.exp(-(n**2)/2)/Math.sqrt(2*Math.PI)}e.exports={gaussianCDF:function(e,a,n){let r,l,s,i=1,u=0;s=t(e,a,n),r=o(e,a,n);for(let e=1;e<=300;e+=2)i*=e,u+=s**e/i;return l=.5+r*u,l},gaussianPDF:o,zScore:t}},204:(e,t,o)=>{"use strict";o.r(t)}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,o),r.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o(204);const{drawChart:e}=o(406),{gaussianCDF:t}=o(958);google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(e),window.addEventListener("load",(function(){const o=$("#mean-input"),a=$("#stddev-input"),n=$("#x-input"),r=$("#input-form"),l=$("#prob");r.on("submit",(r=>{r.preventDefault();const s=parseFloat(o.val()),i=parseFloat(a.val()),u=s+5*i+.1,d=s-5*i+.1,c=parseFloat(n.val()),p=c>u?1:c<d?0:t(s,i,c),g=MathJax.tex2svg(`P(X \\ge x) = ${p.toFixed(6)}`);l.html(g),e(d,u,s,i,c)}))}))})()})();