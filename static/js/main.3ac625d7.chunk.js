(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(n,t,e){},76:function(n,t,e){"use strict";e.r(t);var a,i,o=e(0),r=e.n(o),c=e(6),s=e.n(c),p=(e(31),e(15)),l=e(7),d=e(8),g=e(10),u=e(9),h=e(11),x=(e(32),e(3)),b=e(4),m=b.a.div(a||(a=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),f=b.a.h3(i||(i=Object(x.a)(["\n  margin: auto;\n  font-size: large;\n  text-transform: uppercase;\n  color: #d44343;\n"]))),j=e(14),O=e.n(j);O.a.defaults.baseURL="https://pixabay.com/api/";var w,v,y,k,D,S,M,C,z=function(n,t){return O.a.get("?key=".concat("22579903-23cd6d72a32c76f3810c95a65","&q=").concat(n,"&page=").concat(t,"&").concat("image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.data}))},q=b.a.header(w||(w=Object(x.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),L=b.a.form(v||(v=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),R=b.a.button(y||(y=Object(x.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),U=b.a.span(k||(k=Object(x.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),I=b.a.input(D||(D=Object(x.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),E=e(1),F=function(n){return Object(E.jsx)(q,{children:Object(E.jsxs)(L,{onSubmit:function(t){t.preventDefault(),""!==t.target[1].value.trim()?(n.onSubmit(t.target[1].value.toLowerCase()),t.target[1].value=""):h.b.error("\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u043e\u0432\u043e")},children:[Object(E.jsx)(R,{type:"submit",children:Object(E.jsx)(U,{children:"Search"})}),Object(E.jsx)(I,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},K=b.a.ul(S||(S=Object(x.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),A=e(2),J=e.n(A),N=b.a.div(M||(M=Object(x.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),T=b.a.img(C||(C=Object(x.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),_=function(n){var t=n.image,e=n.largeImageURL,a=n.tags;return Object(E.jsx)(N,{children:Object(E.jsx)(T,{src:t,alt:a,"data-largeimg":e})})};_.prototype={image:J.a.string.isRequired,largeImageURL:J.a.string.isRequired,tags:J.a.string.isRequired};var B,H,W,G=_,P=function(n){var t=n.images,e=n.onClick;return Object(E.jsx)(K,{onClick:e,children:t.map((function(n){var t=n.id,e=n.largeImageURL,a=n.webformatURL,i=n.tags;return Object(E.jsx)("li",{children:Object(E.jsx)(G,{image:a,tags:i,largeImageURL:e})},t)}))})},Q=e(25),V=e.n(Q),X=function(){return Object(E.jsx)("div",{style:{margin:"auto"},children:Object(E.jsx)(V.a,{type:"Circles",color:"green",height:100,width:100,timeout:3e3})})},Y=b.a.button(B||(B=Object(x.a)(["\n  padding: 8px 16px;\n  margin: auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),Z=function(n){var t=n.onClick;return Object(E.jsx)(Y,{type:"button",onClick:t,children:"Load more"})};Z.prototype={onClick:J.a.func.isRequired};var $=b.a.div(H||(H=Object(x.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200; ;\n"]))),nn=b.a.div(W||(W=Object(x.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),tn=function(n){Object(g.a)(e,n);var t=Object(u.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).hendelKeyDown=function(t){"Escape"===t.code&&n.props.showModal()},n.hideModal=function(t){t.currentTarget===t.target&&n.props.showModal()},n}return Object(d.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendelKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendelKeyDown)}},{key:"render",value:function(){return Object(E.jsx)($,{onClick:this.hideModal,children:Object(E.jsx)(nn,{children:Object(E.jsx)("img",{src:this.props.props,alt:""})})})}}]),e}(o.Component),en=function(n){Object(g.a)(e,n);var t=Object(u.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={query:null,imgData:null,loading:!1,error:null,page:1,isOpenModal:!1,largeimg:""},n.submitForm=function(t){n.setState({query:t})},n.fetchData=function(){n.setState({loading:!0});var t=n.state,e=t.query,a=t.page;z(e,a).then((function(t){n.setState((function(n){return{page:n.page+1,imgData:n.imgData?[].concat(Object(p.a)(n.imgData),Object(p.a)(t.hits)):t.hits,loading:!1}}))})).catch((function(t){n.setState({error:t})}))},n.getNewImg=function(){n.fetchData()},n.togleModalShow=function(t){n.state.isOpenModal||n.setState({largeimg:t.target.dataset.largeimg}),n.setState((function(n){return{isOpenModal:!n.isOpenModal}}))},n}return Object(d.a)(e,[{key:"componentDidUpdate",value:function(n,t){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.query!==this.state.query&&(this.setState({imgData:null,page:1}),this.fetchData())}},{key:"render",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=n.imgData,e=n.loading,a=n.error;return Object(E.jsxs)(m,{children:[Object(E.jsx)(F,{onSubmit:this.submitForm}),a&&Object(E.jsx)(f,{children:a.message}),t&&0===t.length&&Object(E.jsx)(f,{children:"\u041f\u043e \u0442\u0430\u043a\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!!!"}),!t&&e&&Object(E.jsx)(X,{}),t&&t.length>0&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(P,{images:this.state.imgData,onClick:this.togleModalShow}),this.state.isOpenModal&&Object(E.jsx)(tn,{showModal:this.togleModalShow,props:this.state.largeimg}),e?Object(E.jsx)(X,{}):Object(E.jsx)(Z,{onClick:this.getNewImg})]}),Object(E.jsx)(h.a,{autoClose:3e3})]})}}]),e}(o.Component);s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(en,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.3ac625d7.chunk.js.map