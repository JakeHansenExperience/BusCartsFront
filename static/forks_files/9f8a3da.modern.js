(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1322:function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return F}));var r=n(7),o=n(11),d=(n(47),n(214),n(1066)),c=n.n(d),l=n(22),f=n.n(l),m=n(1323),h=n.n(m),x=n(1774),y=n(24);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D=(e,t)=>new Promise(((n,r)=>{var o="Invalid file",d=new FileReader;d.readAsDataURL(e),d.onload=function(e){var d={},image=new Image;image.src=e.target.result,image.onload=function(){d.height=this.height,d.width=this.width,t&&(t.minHeight>d.height||t.minWidth>d.width)&&r(new Error("Minimum required dimensions are ".concat(t.minWidth,"x").concat(t.minHeight))),t&&(t.maxHeight<d.height||t.maxWidth<d.width)&&r(new Error("Maximum allowed dimensions are ".concat(t.maxWidth,"x").concat(t.maxHeight))),x.a.getData(image,(function(){var data=v(v({},this),d);n(data)}))||r(new Error(o))},image.onerror=()=>{r(new Error(o))}},d.onerror=()=>{r(new Error(o))}})),S=e=>{var title=null,t=null,n=null,r=[];if("iptcdata"in e?(title="headline"in e.iptcdata?e.iptcdata.headline:null,t="caption"in e.iptcdata?e.iptcdata.caption:null,n=e.exifdata&&"ImageDescription"in e.exifdata?e.exifdata.ImageDescription:null,"keywords"in e.iptcdata&&(r=e.iptcdata.keywords),title||(title=t,t=n)):title=e.exifdata&&"ImageDescription"in e.exifdata?e.exifdata.ImageDescription:null,"xmpdata"in e){try{title=e.xmpdata["x:xmpmeta"]["rdf:RDF"]["rdf:Description"]["dc:title0"]["rdf:Alt"]["rdf:li"]["#text"]}catch(e){}try{t=e.xmpdata["x:xmpmeta"]["rdf:RDF"]["rdf:Description"]["dc:description"]["rdf:Alt"]["rdf:li"]["#text"]}catch(e){}try{r=e.xmpdata["x:xmpmeta"]["rdf:RDF"]["rdf:Description"]["dc:subject"]["rdf:Bag"]["rdf:li"].map((i=>i["#text"]))}catch(e){}}return title||(title=t||n),{title:title,description:t,tags:r.map((i=>i.trim()))}},F=function(){var e=Object(r.a)((function*(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},meta={size:e.size},o={};if(r.exif){var d=yield D(e,r.validations);meta=v(v({},meta),{},{height:d.height,width:d.width,image:d.exifdata.image,exif:d.exifdata.exif,gps:d.exifdata.gps}),o=S(d)}var l=Object(y.b)("/api/v2/iconscout-files/{asset}",v({asset:t},r.query)),m=yield f()(l),x=m.data.response,w=x.filename?x.filename:h()(),F=c.a.extname(e.name),U=c.a.basename(e.name,F),I="".concat(x.starts_with).concat(w).concat(F.toLocaleLowerCase()),data=new FormData;return"private"!==x.acl&&data.append("acl",x.acl),data.append("policy",x.policy),data.append("AWSAccessKeyId",x.s3.key),data.append("signature",x.signature),data.append("Content-type",e.type),data.append("success_action_status","201"),data.append("key",I),data.append("file",e),yield f()("".concat(x.s3.endpoint,"/").concat(x.s3.bucket),{method:"post",data:data,withCredentials:!1,onUploadProgress:n}),v({name:U,blob:I,url:"".concat(x.s3.endpoint,"/").concat(x.s3.bucket,"/").concat(I),meta_data:meta},o)}));return function(t,n,r){return e.apply(this,arguments)}}()},1774:function(e,t,n){"use strict";(function(e,r){n(27),n(498),n(42),n(1275),n(1102),n(29),n(1103),n(1104),n(1105),n(1106),n(1107);var o=!1,d=e,c=function e(t){return t instanceof e?t:this instanceof e?void(this.EXIFwrapped=t):new e(t)};"undefined"!=typeof exports?(r.exports&&(exports=r.exports=c),exports.EXIF=c):d.EXIF=c;var l=c.Tags={40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34855:"ISO",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41492:"SubjectLocation",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41990:"SceneCaptureType",42033:"SerialNumber",42034:"LensInfo",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber"},f=c.TiffTags={256:"Width",257:"Height",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",274:"Orientation",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},m=c.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",10:"GPSMeasureMode",11:"GPSDOP"};c.IFD1Tags={256:"ImageWidth",257:"ImageHeight",274:"Orientation"},c.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function h(img){return!!img.exifdata}function x(img,e){function t(t){var data=y(t);img.exifdata=data||{};var n=function(e){var t=new DataView(e);o;if(255!=t.getUint8(0)||216!=t.getUint8(1))return!1;var n=2,r=e.byteLength,d=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;n<r;){if(d(t,n)){var c=t.getUint8(n+7);return c%2!=0&&(c+=1),0===c&&(c=4),v(e,n+8+c,t.getUint16(n+6+c))}n++}}(t);img.iptcdata=n||{};var r=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);o;if(255!=t.getUint8(0)||216!=t.getUint8(1))return!1;var n=2,r=e.byteLength,d=new DOMParser;for(;n<r-4;){if("http"==F(t,n,4)){var c=n-1,l=t.getUint16(n-2)-1,f=F(t,c,l),m=f.indexOf("xmpmeta>")+8,h=(f=f.substring(f.indexOf("<x:xmpmeta"),m)).indexOf("x:xmpmeta")+10;return f=f.slice(0,h)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+f.slice(h),P(d.parseFromString(f,"text/xml"))}n++}}(t);img.xmpdata=r||{},e&&e.call(img)}if(img.src)if(/^data\:/i.test(img.src))t(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,o=new ArrayBuffer(r),view=new Uint8Array(o),i=0;i<r;i++)view[i]=n.charCodeAt(i);return o}(img.src));else if(/^blob\:/i.test(img.src)){(r=new FileReader).onload=function(e){t(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(img.src,(function(e){r.readAsArrayBuffer(e)}))}else{var n=new XMLHttpRequest;n.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";t(n.response),n=null},n.open("GET",img.src,!0),n.responseType="arraybuffer",n.send(null)}else if(self.FileReader&&(img instanceof self.Blob||img instanceof self.File)){var r;(r=new FileReader).onload=function(e){t(e.target.result)},r.readAsArrayBuffer(img)}}function y(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1))return!1;for(var n=2,r=e.byteLength;n<r;){if(255!=t.getUint8(n))return!1;if(225==t.getUint8(n+1))return U(t,n+4,t.getUint16(n+2));n+=2+t.getUint16(n+2)}}var w={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function v(e,t,n){for(var r,o,d,c,l=new DataView(e),data={},f=t;f<t+n;)28===l.getUint8(f)&&2===l.getUint8(f+1)&&(c=l.getUint8(f+2))in w&&((d=l.getInt16(f+3))+5,o=w[c],r=F(l,f+5,d),data.hasOwnProperty(o)?data[o]instanceof Array?data[o].push(r):data[o]=[data[o],r]:data[o]=r),f++;return data}function D(e,t,n,r,o){var d,i,c=e.getUint16(n,!o),l={};for(i=0;i<c;i++)d=n+12*i+2,l[r[e.getUint16(d,!o)]]=S(e,d,t,n,o);return l}function S(e,t,n,r,o){var d,c,l,f,m,h,x=e.getUint16(t+2,!o),y=e.getUint32(t+4,!o),w=e.getUint32(t+8,!o)+n;switch(x){case 1:case 7:if(1==y)return e.getUint8(t+8,!o);for(d=y>4?w:t+8,c=[],f=0;f<y;f++)c[f]=e.getUint8(d+f);return c;case 2:return F(e,d=y>4?w:t+8,y-1);case 3:if(1==y)return e.getUint16(t+8,!o);for(d=y>2?w:t+8,c=[],f=0;f<y;f++)c[f]=e.getUint16(d+2*f,!o);return c;case 4:if(1==y)return e.getUint32(t+8,!o);for(c=[],f=0;f<y;f++)c[f]=e.getUint32(w+4*f,!o);return c;case 5:if(1==y)return m=e.getUint32(w,!o),h=e.getUint32(w+4,!o),(l=new Number(m/h)).numerator=m,l.denominator=h,l;for(c=[],f=0;f<y;f++)m=e.getUint32(w+8*f,!o),h=e.getUint32(w+4+8*f,!o),c[f]=new Number(m/h),c[f].numerator=m,c[f].denominator=h;return c;case 9:if(1==y)return e.getInt32(t+8,!o);for(c=[],f=0;f<y;f++)c[f]=e.getInt32(w+4*f,!o);return c;case 10:if(1==y)return e.getInt32(w,!o)/e.getInt32(w+4,!o);for(c=[],f=0;f<y;f++)c[f]=e.getInt32(w+8*f,!o)/e.getInt32(w+4+8*f,!o);return c}}function F(e,t,n){for(var r="",o=t;o<t+n;o++)r+=String.fromCharCode(e.getUint8(o));return r}function U(e,t){if("Exif"!=F(e,t,4))return!1;var n,r={image:{},exif:{},gps:{}},o=t+6;if(18761==e.getUint16(o))n=!1;else{if(19789!=e.getUint16(o))return!1;n=!0}if(42!=e.getUint16(o+2,!n))return!1;var d=e.getUint32(o+4,!n);return!(d<8)&&(r.image=D(e,o,o+d,f,n),delete r.image[void 0],r.image.ExifIFDPointer&&(r.exif=D(e,o,o+r.image.ExifIFDPointer,l,n),delete r.exif[void 0]),r.image.GPSInfoIFDPointer&&(r.gps=D(e,o,o+r.image.GPSInfoIFDPointer,m,n),delete r.gps[void 0]),r)}function I(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var o=e.childNodes.item(i),d=o.nodeName;if(null==t[d])t[d]=I(o);else{if(null==t[d].push){var c=t[d];t[d]=[],t[d].push(c)}t[d].push(I(o))}}return t}function P(e){try{var t={};if(e.children.length>0)for(var i=0;i<e.children.length;i++){var n=e.children.item(i),r=n.attributes;for(var o in r){var d=r[o],c=d.nodeName,l=d.nodeValue;void 0!==c&&(t[c]=l)}var f=n.nodeName;if(void 0===t[f])t[f]=I(n);else{if(void 0===t[f].push){var m=t[f];t[f]=[],t[f].push(m)}t[f].push(I(n))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}c.enableXmp=function(){c.isXmpEnabled=!0},c.disableXmp=function(){c.isXmpEnabled=!1},c.getData=function(img,e){return!((self.Image&&img instanceof self.Image||self.HTMLImageElement&&img instanceof self.HTMLImageElement)&&!img.complete)&&(h(img)?e&&e.call(img):x(img,e),!0)},c.getTag=function(img,e){if(h(img))return img.exifdata[e]},c.getIptcTag=function(img,e){if(h(img))return img.iptcdata[e]},c.getAllTags=function(img){if(!h(img))return{};var a,data=img.exifdata,e={};for(a in data)data.hasOwnProperty(a)&&(e[a]=data[a]);return e},c.getAllIptcTags=function(img){if(!h(img))return{};var a,data=img.iptcdata,e={};for(a in data)data.hasOwnProperty(a)&&(e[a]=data[a]);return e},c.pretty=function(img){if(!h(img))return"";var a,data=img.exifdata,e="";for(a in data)data.hasOwnProperty(a)&&("object"==typeof data[a]?data[a]instanceof Number?e+=a+" : "+data[a]+" ["+data[a].numerator+"/"+data[a].denominator+"]\r\n":e+=a+" : ["+data[a].length+" values]\r\n":e+=a+" : "+data[a]+"\r\n");return e},c.readFromBinaryFile=function(e){return y(e)},"function"==typeof define&&n(1324)&&define("exif-js",[],(function(){return c})),t.a=c}).call(this,n(51),n(129)(e))}}]);
//# sourceMappingURL=9f8a3da.modern.js.map