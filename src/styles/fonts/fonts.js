import praxisRegularWoff from "./b3526b81-4872-4add-8efd-d7f71ea6f3c5.woff";
import praxisRegularWoff2 from "./594d3104-d6fb-436d-82f8-673ff673916a.woff2";

import praxisBoldWoff from "./183211a3-b133-4057-a720-1ad5b4474ef0.woff";
import praxisBoldWoff2 from "./0a5bce63-9f97-4c66-a6a1-23f49cd4837c.woff2";

const fonts = `
  @font-face {
    font-family: Praxis;
    font-weight: normal;
    src: url('${praxisRegularWoff2}') format('woff2');
    src: url('${praxisRegularWoff}') format('woff');
  }
  @font-face {
    font-family: Praxis;
    font-weight: bold;
    src: url('${praxisBoldWoff2}') format('woff2');
    src: url('${praxisBoldWoff}') format('woff');
  }
`;

export default fonts;

/*
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 7=g.b;4 2=3.p(\'r\');2.9=\'a/5\';2.c=\'d\';2.e=(\'6:\'==3.u.h?\'6:\':\'i:\')+\'//j.k.l/t/1.5?m=n&o=\'+7;(3.8(\'q\')[0]||3.8(\'s\')[0]).f(2);',31,31,'||mtiTracking|document|var|css|https|projectId|getElementsByTagName|type|text|MTIProjectId|rel|stylesheet|href|appendChild|window|protocol|http|fast|fonts|net|apiType|css|projectid|createElement|head|link|body||location'.split('|'),0,{}))

var MTIProjectId='1d7d8c3c-4371-48a0-9313-afe2f5f4fc6d';
 (function() {
        var mtiTracking = document.createElement('script');
        mtiTracking.type='text/javascript';
        mtiTracking.async='true';
         mtiTracking.src='mtiFontTrackingCode.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
   })();

 */
