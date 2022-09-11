(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{4394:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(4045),e=c(959),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},g=c(7980),h=function(a,b){return e.createElement(g.Z,(0,d.Z)((0,d.Z)({},a),{},{ref:b,icon:f}))};h.displayName="DownOutlined";var i=e.forwardRef(h)},1690:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(4045),e=c(959),f={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},g=c(7980),h=function(a,b){return e.createElement(g.Z,(0,d.Z)((0,d.Z)({},a),{},{ref:b,icon:f}))};h.displayName="LoadingOutlined";var i=e.forwardRef(h)},7176:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(959),e=d.createContext(!1),f=function(a){var b=a.children,c=a.disabled,f=d.useContext(e);return d.createElement(e.Provider,{value:c||f},b)};b.Z=e},8403:function(a,b,c){"use strict";c.d(b,{q:function(){return f}});var d=c(959),e=d.createContext(void 0),f=function(a){var b=a.children,c=a.size;return d.createElement(e.Consumer,null,function(a){return d.createElement(e.Provider,{value:c||a},b)})};b.Z=e},3690:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(2081),e=c(7642),f=c(3287),g=c(2595),h=c(4374),i=c(959),j=c(1199),k=c(9959),l=k.Z,m=function(a){(0,g.Z)(c,a);var b=(0,h.Z)(c);function c(){return(0,e.Z)(this,c),b.apply(this,arguments)}return(0,f.Z)(c,[{key:"getLocale",value:function(){var a=this.props,b=a.componentName,c=a.defaultLocale||l[null!=b?b:"global"],e=this.context,f=b&&e?e[b]:{};return(0,d.Z)((0,d.Z)({},c instanceof Function?c():c),f||{})}},{key:"getLocaleCode",value:function(){var a=this.context,b=a&&a.locale;return a&&a.exist&&!b?l.locale:b}},{key:"render",value:function(){return this.props.children(this.getLocale(),this.getLocaleCode(),this.context)}}]),c}(i.Component);m.defaultProps={componentName:"global"},m.contextType=j.Z},1199:function(a,b,c){"use strict";var d=(0,c(959).createContext)(void 0);b.Z=d},9959:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(1727),e=c(2081),f={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},g={lang:(0,e.Z)({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}),timePickerLocale:(0,e.Z)({},f)},h="${label} is not a valid ${type}",i={locale:"en",Pagination:d.Z,DatePicker:g,TimePicker:f,Calendar:g,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:h,method:h,array:h,object:h,number:h,date:h,boolean:h,integer:h,float:h,regexp:h,email:h,url:h,hex:h},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}}},5675:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explain",function(){return c(4262)}])},4262:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return Z}});var d=c(1527),e=c(2269),f=c(8619),g=c(2081),h=c(4045),i=c(959),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},k=c(7980),l=function(a,b){return i.createElement(k.Z,(0,h.Z)((0,h.Z)({},a),{},{ref:b,icon:j}))};l.displayName="ArrowLeftOutlined";var m=i.forwardRef(l),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=function(a,b){return i.createElement(k.Z,(0,h.Z)((0,h.Z)({},a),{},{ref:b,icon:n}))};o.displayName="ArrowRightOutlined";var p=i.forwardRef(o),q=c(9803),r=c.n(q),s=c(8133),t=c(6928),u=c(8541),v=c(6298),w=c(4191),x=c(1283),y=c(8666),z=c(7701),A=c(4394),B=c(4106),C=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},D=function(a){var b,c,d=a.prefixCls,e=a.separator,f=void 0===e?"/":e,h=a.children,j=a.overlay,k=a.dropdownProps,l=C(a,["prefixCls","separator","children","overlay","dropdownProps"]),m=i.useContext(x.E_),n=m.getPrefixCls,o=n("breadcrumb",d);return(b=(c=b="href"in l?i.createElement("a",(0,g.Z)({className:"".concat(o,"-link")},l),h):i.createElement("span",(0,g.Z)({className:"".concat(o,"-link")},l),h),j?i.createElement(B.Z,(0,g.Z)({overlay:j,placement:"bottom"},k),i.createElement("span",{className:"".concat(o,"-overlay-link")},c,i.createElement(A.Z,null))):c),h)?i.createElement("li",null,b,f&&i.createElement("span",{className:"".concat(o,"-separator")},f)):null};D.__ANT_BREADCRUMB_ITEM=!0;var E=D,F=function(a){var b=a.children,c=(0,i.useContext(x.E_).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(c,"-separator")},b||"/")};F.__ANT_BREADCRUMB_SEPARATOR=!0;var G=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function H(a,b,c,d){var e=c.indexOf(a)===c.length-1,f=function(a,b){if(!a.breadcrumbName)return null;var c=Object.keys(b).join("|");return a.breadcrumbName.replace(RegExp(":(".concat(c,")"),"g"),function(a,c){return b[c]||a})}(a,b);return e?i.createElement("span",null,f):i.createElement("a",{href:"#/".concat(d.join("/"))},f)}var I=function(a,b){return a=(a||"").replace(/^\//,""),Object.keys(b).forEach(function(c){a=a.replace(":".concat(c),b[c])}),a},J=function(a,b,c){var d=(0,v.Z)(a),e=I(b||"",c);return e&&d.push(e),d},K=function(a){var b,c=a.prefixCls,d=a.separator,f=void 0===d?"/":d,h=a.style,j=a.className,k=a.routes,l=a.children,m=a.itemRender,n=void 0===m?H:m,o=a.params,p=void 0===o?{}:o,q=G(a,["prefixCls","separator","style","className","routes","children","itemRender","params"]),s=i.useContext(x.E_),t=s.getPrefixCls,u=s.direction,v=t("breadcrumb",c);if(k&&k.length>0){var A=[];b=k.map(function(a){var b,c=I(a.path,p);return c&&A.push(c),a.children&&a.children.length&&(b=i.createElement(y.Z,{items:a.children.map(function(a){return{key:a.path||a.breadcrumbName,label:n(a,p,k,J(A,a.path,p))}})})),i.createElement(E,{overlay:b,separator:f,key:c||a.breadcrumbName},n(a,p,k,A))})}else l&&(b=(0,w.Z)(l).map(function(a,b){return a?(0,z.Tm)(a,{separator:f,key:b}):a}));var B=r()(v,(0,e.Z)({},"".concat(v,"-rtl"),"rtl"===u),j);return i.createElement("nav",(0,g.Z)({className:B,style:h},q),i.createElement("ol",null,b))};K.Item=E,K.Separator=F;var L=K,M=c(3690),N=c(171),O=c(404),P=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c},Q={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},R=i.forwardRef(function(a,b){var c=function(a){a.keyCode===O.Z.ENTER&&a.preventDefault()},d=function(b){var c=b.keyCode,d=a.onClick;c===O.Z.ENTER&&d&&d()},e=a.style,f=a.noStyle,h=a.disabled,j=P(a,["style","noStyle","disabled"]),k={};return f||(k=(0,g.Z)({},Q)),h&&(k.pointerEvents="none"),k=(0,g.Z)((0,g.Z)({},k),e),i.createElement("div",(0,g.Z)({role:"button",tabIndex:0,ref:b},j,{onKeyDown:c,onKeyUp:d,style:k}))}),S=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==a.backIcon?a.backIcon:"rtl"===b?i.createElement(p,null):i.createElement(m,null)},T=function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:"ltr",d=b.title,e=b.avatar,f=b.subTitle,h=b.tags,j=b.extra,k=b.onBack,l="".concat(a,"-heading"),m=d||f||h||j;if(!m)return null;var n,o,p,q=S(b,c),r=(n=a,o=q,p=k,o&&p?i.createElement(M.Z,{componentName:"PageHeader"},function(a){var b=a.back;return i.createElement("div",{className:"".concat(n,"-back")},i.createElement(R,{onClick:function(a){null==p||p(a)},className:"".concat(n,"-back-button"),"aria-label":b},o))}):null);return i.createElement("div",{className:l},(r||e||m)&&i.createElement("div",{className:"".concat(l,"-left")},r,e&&i.createElement(u.C,(0,g.Z)({},e)),d&&i.createElement("span",{className:"".concat(l,"-title"),title:"string"==typeof d?d:void 0},d),f&&i.createElement("span",{className:"".concat(l,"-sub-title"),title:"string"==typeof f?f:void 0},f),h&&i.createElement("span",{className:"".concat(l,"-tags")},h)),j&&i.createElement("span",{className:"".concat(l,"-extra")},i.createElement(N.Z,null,j)))},U=function(a){var b=(0,t.Z)(!1),c=(0,f.Z)(b,2),d=c[0],h=c[1],j=function(a){h(a.width<768,!0)};return i.createElement(x.C,null,function(b){var c,f,h=b.getPrefixCls,k=b.pageHeader,l=b.direction,m=a.prefixCls,n=a.style,o=a.footer,p=a.children,q=a.breadcrumb,t=a.breadcrumbRender,u=a.className,v=!0;"ghost"in a?v=a.ghost:k&&"ghost"in k&&(v=k.ghost);var w,x,y,z,A=h("page-header",m),B=function(){if(null==q?void 0:q.routes){var a;return a=q,i.createElement(L,(0,g.Z)({},a))}return null}(),C=null!==(f=null==t?void 0:t(a,B))&& void 0!==f?f:B,D=q&&"props"in q?q:C,E=r()(A,u,(c={"has-breadcrumb":!!D,"has-footer":!!o},(0,e.Z)(c,"".concat(A,"-ghost"),v),(0,e.Z)(c,"".concat(A,"-rtl"),"rtl"===l),(0,e.Z)(c,"".concat(A,"-compact"),d),c));return i.createElement(s.Z,{onResize:j},i.createElement("div",{className:E,style:n},D,T(A,a,l),p&&(w=A,x=p,i.createElement("div",{className:"".concat(w,"-content")},x)),(y=A,(z=o)?i.createElement("div",{className:"".concat(y,"-footer")},z):null)))})},V=c(1303),W=c(8878),X=c.n(W),Y=function(){var a,b,c=(0,V.useRouter)(),e=new Map([["disclaimer","\n      第一条访问者在从事与本网站相关的所有行为(包括但不限于访问浏览、利用、转载、宣传介绍)时，必须以善意且谨慎的态度行事;访问者不得故意或者过失的损害或者弱化本网站的各类合法权利与利益，不得利用本网站以任何方式直接或者间接的从事违反中国法律、国际公约以及社会公德的行为，且访问者应当恪守下述承诺：\n\n      　　1、传输和利用信息符合中国法律、国际公约的规定、符合公序良俗;\n      \n      　　2、不将本网站以及与之相关的网络服务用作非法用途以及非正当用途;\n      \n      　　3、不干扰和扰乱本网站以及与之相关的网络服务;\n      \n      　　4、遵守与本网站以及与之相关的网络服务的协议、规定、程序和惯例等。\n      \n      　　5、不将网站作为商业等其他盈利用途。\n      \n      　　第二条本网站郑重提醒访问者：请在转载、上载或者下载有关作品时务必尊重该作品的版权、著作权;如果您发现有您未署名的作品，请立即和我们联系，我们会在第一时间加上您的署名或作相关处理。\n      \n      　　第三条除我们另有明确说明或者中国法律有强制性规定外，本网站用户原创的作品，本网站及作者共同享有版权，其他网站及传统媒体如需使用，须取得本网站的书面授权，未经授权严禁转载或用于其它商业用途。\n      \n      　　第四条本网站内容仅代表作者本人的观点，不代表本网站的观点和看法，与本网站立场无关，相关责任作者自负。\n      \n      　　第五条本网站有权将在本网站内发表的作品用于其他用途，包括网站、电子杂志等，作品有附带版权声明者除外。\n      \n      　　第六条未经常本网站和作者共同同意，其他任何机构不得以任何形式侵犯其作品著作权，包括但不限于：擅自复制、链接、非法使用或转载，或以任何方式建立作品镜像。\n      \n      　　第七条本网站所刊载的各类形式(包括但不仅限于文字、图片、图表)的作品仅供参考使用，并不代表本网站同意其说法或描述，仅为提供更多信息，也不构成任何投资建议。对于访问者根据本网站提供的信息所做出的一切行为，除非另有明确的书面承诺文件，否则本网站不承担任何形式的责任。\n      \n      　　第八条当本网站以链接形式推荐其他网站内容时，本网站并不对这些网站或资源的可用性负责，且不保证从这些网站获取的任何内容、产品、服务或其他材料的真实性、合法性，对于任何因使用或信赖从此类网站或资源上获取的内容、产品、服务或其他材料而造成(或声称造成)的任何直接或间接损失，本网站均不承担任何责任。\n      \n      　　第九条访问者在本网站注册时提供的一些个人资料，本网站除您本人同意及第十条规定外不会将用户的任何资料以任何方式泄露给任何一方。\n      \n      　　第十条当政府部门、司法机关等依照法定程序要求本网站披露个人资料时，本网站将根据执法单位之要求或为公共安全之目的提供个人资料。在此情况下之任何披露，本网站均得免责。\n      \n      　　第十一条由于用户将个人密码告知他人或与他人共享注册账户，由此导致的任何个人资料泄露，本网站不负任何责任。\n      \n      　　第十二条本网站有部分内容来自互联网，如无意中侵犯了哪个媒体、公司、企业或个人等的知识产权，请来邮箱告之，本网站将在规定时间内给予删除等相关处理，若有涉及版权费等问题，请及联系我们联系，快速解决。\n      \n      　　第十二条以上声明内容的最终解释权归网站所有。\n  ",],]);return(0,d.jsx)("div",{className:X().explain,children:(0,d.jsxs)("div",{className:"content-width",children:[(0,d.jsx)(U,{className:X().pageHeader,title:(null===(a=c.query)|| void 0===a?void 0:a.title)||"说明",onBack:function(){return c.back()},ghost:!1}),(0,d.jsx)("p",{className:X().explainContent,children:"string"==typeof(null===(b=c.query)|| void 0===b?void 0:b.type)&&e.get(c.query.type)})]})})},Z=Y},8878:function(a){a.exports={explain:"Explain_explain__mFfXo",pageHeader:"Explain_pageHeader__dAGog",explainContent:"Explain_explainContent__Aht91"}},1727:function(a,b){"use strict";b.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}}},function(a){a.O(0,[106,774,888,179],function(){var b;return a(a.s=5675)}),_N_E=a.O()}])