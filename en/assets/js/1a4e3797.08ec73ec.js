"use strict";(self.webpackChunk_envronment_docs=self.webpackChunk_envronment_docs||[]).push([[138],{6120:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var s=r(758),a=r(7897),n=r(6993),c=r(6467),l=r(397),o=r(3176);const u=["zero","one","two","few","many","other"];function h(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=m();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var p=r(3526),g=r(5557),x=r(5620),f=r(1946);const y=function(){const e=(0,x.A)(),t=(0,g.W6)(),r=(0,g.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(f.Hg)&&f.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var C=r(8710),S=r(3807),j=r(4527),v=r(5847),A=r(2812),w=r(7448),R=r(6269);const I={searchContextInput:"searchContextInput_pRzD",searchQueryInput:"searchQueryInput_HxgA",searchResultItem:"searchResultItem_Wa3s",searchResultItemPath:"searchResultItemPath_pqLz",searchResultItemSummary:"searchResultItemSummary_ssSx",searchQueryColumn:"searchQueryColumn_ofYP",searchContextColumn:"searchContextColumn__U7k"};var P=r(3699),_=r(6070);function b(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=d(),{searchValue:n,searchContext:l,searchVersion:u,updateSearchPath:h,updateSearchContext:i}=y(),[m,g]=(0,s.useState)(n),[x,S]=(0,s.useState)(),j=`${e}${u}`,v=(0,s.useMemo)((()=>m?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,s.useEffect)((()=>{h(m),m?(async()=>{const e=await(0,C.w)(j,l,m,100);S(e)})():S(void 0)}),[m,j,l]);const A=(0,s.useCallback)((e=>{g(e.target.value)}),[]);(0,s.useEffect)((()=>{n&&n!==m&&g(n)}),[n]);const[R,b]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{!async function(){(!Array.isArray(f.Hg)||l||f.dz)&&await(0,C.k)(j,l),b(!0)}()}),[l,j]),(0,_.jsxs)(s.Fragment,{children:[(0,_.jsxs)(c.A,{children:[(0,_.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,_.jsx)("title",{children:v})]}),(0,_.jsxs)("div",{className:"container margin-vert--lg",children:[(0,_.jsx)("h1",{children:v}),(0,_.jsxs)("div",{className:"row",children:[(0,_.jsx)("div",{className:(0,p.A)("col",{[I.searchQueryColumn]:Array.isArray(f.Hg),"col--9":Array.isArray(f.Hg),"col--12":!Array.isArray(f.Hg)}),children:(0,_.jsx)("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:A,value:m,autoComplete:"off",autoFocus:!0})}),Array.isArray(f.Hg)?(0,_.jsx)("div",{className:(0,p.A)("col","col--3","padding-left--none",I.searchContextColumn),children:(0,_.jsxs)("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value),children:[f.dz&&(0,_.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),f.Hg.map((e=>{const{label:r,path:s}=(0,P.p)(e,t);return(0,_.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!R&&m&&(0,_.jsx)("div",{children:(0,_.jsx)(w.A,{})}),x&&(x.length>0?(0,_.jsx)("p",{children:r(x.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:x.length}))}):(0,_.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,_.jsx)("section",{children:x&&x.map((e=>(0,_.jsx)(T,{searchResult:e},e.document.i)))})]})]})}function T(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=r===S.i.Title,o=r===S.i.Keywords,u=r===S.i.Description,h=u||o,i=c||h,m=r===S.i.Content,d=(c?t.b:s.b).slice(),p=m||h?t.s:t.t;i||d.push(s.t);let g="";if(f.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);g=`?${e.toString()}`}return(0,_.jsxs)("article",{className:I.searchResultItem,children:[(0,_.jsx)("h2",{children:(0,_.jsx)(l.A,{to:t.u+g+(t.h||""),dangerouslySetInnerHTML:{__html:m||h?(0,j.Z)(p,a):(0,v.C)(p,(0,A.g)(n,"t"),a,100)}})}),d.length>0&&(0,_.jsx)("p",{className:I.searchResultItemPath,children:(0,R.$)(d)}),(m||u)&&(0,_.jsx)("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,v.C)(t.t,(0,A.g)(n,"t"),a,100)}})]})}const $=function(){return(0,_.jsx)(n.A,{children:(0,_.jsx)(b,{})})}}}]);