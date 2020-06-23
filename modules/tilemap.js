/*
 Highmaps JS v8.1.2 (2020-06-23)

 Tilemap module

 (c) 2010-2019 Highsoft AS

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/modules/tilemap",["highcharts","highcharts/modules/map"],function(f){d(f);d.Highcharts=f;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function f(e,d,f,v){e.hasOwnProperty(d)||(e[d]=v.apply(null,f))}d=d?d._modules:{};f(d,"modules/tilemap.src.js",[d["parts/Globals.js"],d["parts/Utilities.js"]],function(e,d){function f(a,b,
c){a=a.options;return{xPad:(a.colsize||1)/-b,yPad:(a.rowsize||1)/-c}}"";var v=d.addEvent,h=d.clamp,y=d.extend,x=d.pick;d=d.seriesType;e.tileShapeTypes={hexagon:{alignDataLabel:e.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return f(a,3,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return[["M",b.x2-a,b.y1+a],["L",b.x3+a,b.y1+a],["L",b.x4+1.5*a,b.y2],["L",b.x3+a,b.y3-a],["L",b.x2-a,b.y3-a],["L",b.x1-1.5*a,b.y2],["Z"]]},translate:function(){var a=this.options,
b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,e=(a.colsize||1)/3,f=(a.rowsize||1)/2,n;this.generatePoints();this.points.forEach(function(a){var t=h(Math.floor(b.len-b.translate(a.x-2*e,0,1,0,1)),-b.len,2*b.len),k=h(Math.floor(b.len-b.translate(a.x-e,0,1,0,1)),-b.len,2*b.len),q=h(Math.floor(b.len-b.translate(a.x+e,0,1,0,1)),-b.len,2*b.len),u=h(Math.floor(b.len-b.translate(a.x+2*e,0,1,0,1)),-b.len,2*b.len),r=h(Math.floor(c.translate(a.y-f,0,1,0,1)),-c.len,2*c.len),g=h(Math.floor(c.translate(a.y,0,1,
0,1)),-c.len,2*c.len),l=h(Math.floor(c.translate(a.y+f,0,1,0,1)),-c.len,2*c.len),m=x(a.pointPadding,d),p=m*Math.abs(k-t)/Math.abs(l-g);p=b.reversed?-p:p;var w=b.reversed?-m:m;m=c.reversed?-m:m;a.x%2&&(n=n||Math.round(Math.abs(l-r)/2)*(c.reversed?-1:1),r+=n,g+=n,l+=n);a.plotX=a.clientX=(k+q)/2;a.plotY=g;t+=p+w;k+=w;q-=w;u-=p+w;r-=m;l+=m;a.tileEdges={x1:t,x2:k,x3:q,x4:u,y1:r,y2:g,y3:l};a.shapeType="path";a.shapeArgs={d:[["M",k,r],["L",q,r],["L",u,g],["L",q,l],["L",k,l],["L",t,g],["Z"]]}});this.translateColors()}},
diamond:{alignDataLabel:e.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return f(a,2,2)},haloPath:function(a){if(!a)return[];var b=this.tileEdges;return[["M",b.x2,b.y1+a],["L",b.x3+a,b.y2],["L",b.x2,b.y3-a],["L",b.x1-a,b.y2],["Z"]]},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,e=a.colsize||1,f=(a.rowsize||1)/2,n;this.generatePoints();this.points.forEach(function(a){var p=h(Math.round(b.len-b.translate(a.x-e,0,1,0,0)),-b.len,2*b.len),
k=h(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),q=h(Math.round(b.len-b.translate(a.x+e,0,1,0,0)),-b.len,2*b.len),u=h(Math.round(c.translate(a.y-f,0,1,0,0)),-c.len,2*c.len),r=h(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),g=h(Math.round(c.translate(a.y+f,0,1,0,0)),-c.len,2*c.len),l=x(a.pointPadding,d),m=l*Math.abs(k-p)/Math.abs(g-r);m=b.reversed?-m:m;l=c.reversed?-l:l;a.x%2&&(n=Math.abs(g-u)/2*(c.reversed?-1:1),u+=n,r+=n,g+=n);a.plotX=a.clientX=k;a.plotY=r;p+=m;q-=m;u-=l;g+=
l;a.tileEdges={x1:p,x2:k,x3:q,y1:u,y2:r,y3:g};a.shapeType="path";a.shapeArgs={d:[["M",k,u],["L",q,r],["L",k,g],["L",p,r],["Z"]]}});this.translateColors()}},circle:{alignDataLabel:e.seriesTypes.scatter.prototype.alignDataLabel,getSeriesPadding:function(a){return f(a,2,2)},haloPath:function(a){return e.seriesTypes.scatter.prototype.pointClass.prototype.haloPath.call(this,a+(a&&this.radius))},translate:function(){var a=this.options,b=this.xAxis,c=this.yAxis,d=a.pointPadding||0,e=(a.rowsize||1)/2,f=a.colsize||
1,n,t,v,k,q=!1;this.generatePoints();this.points.forEach(function(a){var p=h(Math.round(b.len-b.translate(a.x,0,1,0,0)),-b.len,2*b.len),g=h(Math.round(c.translate(a.y,0,1,0,0)),-c.len,2*c.len),l=d,m=!1;"undefined"!==typeof a.pointPadding&&(l=a.pointPadding,q=m=!0);if(!k||q)n=Math.abs(h(Math.floor(b.len-b.translate(a.x+f,0,1,0,0)),-b.len,2*b.len)-p),t=Math.abs(h(Math.floor(c.translate(a.y+e,0,1,0,0)),-c.len,2*c.len)-g),v=Math.floor(Math.sqrt(n*n+t*t)/2),k=Math.min(n,v,t)-l,q&&!m&&(q=!1);a.x%2&&(g+=
t*(c.reversed?-1:1));a.plotX=a.clientX=p;a.plotY=g;a.radius=k;a.shapeType="circle";a.shapeArgs={x:p,y:g,r:k}});this.translateColors()}},square:{alignDataLabel:e.seriesTypes.heatmap.prototype.alignDataLabel,translate:e.seriesTypes.heatmap.prototype.translate,getSeriesPadding:function(){},haloPath:e.seriesTypes.heatmap.prototype.pointClass.prototype.haloPath}};v(e.Axis,"afterSetAxisTranslation",function(){if(!this.recomputingForTilemap&&"colorAxis"!==this.coll){var a=this,b=a.series.map(function(b){return b.getSeriesPixelPadding&&
b.getSeriesPixelPadding(a)}).reduce(function(a,b){return(a&&a.padding)>(b&&b.padding)?a:b},void 0)||{padding:0,axisLengthFactor:1},c=Math.round(b.padding*b.axisLengthFactor);b.padding&&(a.len-=c,a.recomputingForTilemap=!0,a.setAxisTranslation(),delete a.recomputingForTilemap,a.minPixelPadding+=b.padding,a.len+=c)}});d("tilemap","heatmap",{marker:null,states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"},{markerAttribs:e.seriesTypes.scatter.prototype.markerAttribs,
pointAttribs:e.seriesTypes.column.prototype.pointAttribs,getSymbol:e.noop,drawPoints:function(){var a=this;e.seriesTypes.column.prototype.drawPoints.call(this);this.points.forEach(function(b){b.graphic&&b.graphic[a.chart.styledMode?"css":"animate"](a.colorAttribs(b))})},setOptions:function(){var a=e.seriesTypes.heatmap.prototype.setOptions.apply(this,Array.prototype.slice.call(arguments));this.tileShape=e.tileShapeTypes[a.tileShape];return a},alignDataLabel:function(){return this.tileShape.alignDataLabel.apply(this,
Array.prototype.slice.call(arguments))},getSeriesPixelPadding:function(a){var b=a.isXAxis,c=this.tileShape.getSeriesPadding(this);if(!c)return{padding:0,axisLengthFactor:1};var d=Math.round(a.translate(b?2*c.xPad:c.yPad,0,1,0,1));a=Math.round(a.translate(b?c.xPad:0,0,1,0,1));return{padding:Math.abs(d-a)||0,axisLengthFactor:b?2:1.1}},translate:function(){return this.tileShape.translate.apply(this,Array.prototype.slice.call(arguments))}},y({haloPath:function(){return this.series.tileShape.haloPath.apply(this,
Array.prototype.slice.call(arguments))}},e.colorPointMixin));""});f(d,"masters/modules/tilemap.src.js",[],function(){})});
//# sourceMappingURL=tilemap.js.map