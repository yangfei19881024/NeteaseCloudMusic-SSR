webpackJsonp([1],{687:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return{_hot:e.homeHot.server_hot}}function u(e){return{ACTIONS:(0,E.bindActionCreators)(O.default,e)}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(37),s=l(r),o=a(1),c=l(o),f=a(3),d=l(f),i=a(2),m=l(i),p=a(4),h=l(p),_=a(0),v=l(_),E=a(72),N=a(139),y=a(6),k=l(y),g=a(43),b=(a(73),a(74)),M=a(691),w=a(260),A=l(w),C=a(261),O=l(C);a(697);var H=function(e){function t(e){(0,c.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.state={},a}return(0,h.default)(t,e),(0,m.default)(t,null,[{key:"loadData",value:function(e){if(e&&e.store)return e.store.dispatch(O.default.hot_fetch());this.props.ACTIONS.hot_fetch()}}]),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.ACTIONS;!e._hot.tracks.length&&t.hot_fetch()}},{key:"render",value:function(){var e=this.props._hot;return v.default.createElement("section",{className:"i-hot"},v.default.createElement("div",{className:"hot-banner"},v.default.createElement("div",{className:"hot-zindex"},v.default.createElement("div",{className:"hot-banner-icon"}),v.default.createElement("p",{className:"hot-update"},"更新日期:5月24日"))),v.default.createElement("ul",{className:"hot-list"},e.hot_Already?e.tracks.map(function(e,t){var a=e.al||{},l=a.id,n=a.name;return v.default.createElement("li",{className:"li-row-item hot-item",key:l},v.default.createElement(g.Link,{className:"li-row-link"},v.default.createElement("p",{className:(0,k.default)("num",{"num-cred":t<3})},A.default.n(t+1)),v.default.createElement("div",{className:"li-row-flex"},v.default.createElement("h5",{className:"name"},n," ",e.alia[0]&&v.default.createElement("span",{className:"sgalia"},"(",e.alia[0]||"",")")),v.default.createElement("p",{className:"brief"},e.copyright?null:v.default.createElement(b.Svg,{hash:"svg-hot"}),A.default.songArtists(e.ar,e.name))),v.default.createElement("p",{className:"li-row-play-icon"},v.default.createElement(b.Svg,{hash:"svg-play"}))))}):v.default.createElement(M.HomeList,null)))}}]),t}(_.Component);t.default=(0,N.connect)(n,u)(H),e.exports=t.default},691:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeList=t.Homeremd=void 0;var n=a(692),u=l(n),r=a(694),s=l(r);t.Homeremd=u.default,t.HomeList=s.default},692:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(259),u=l(n),r=a(37),s=l(r),o=a(1),c=l(o),f=a(2),d=l(f),i=a(3),m=l(i),p=a(4),h=l(p),_=a(0),v=l(_);a(693);var E=function(e){function t(){return(0,c.default)(this,t),(0,m.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.len,t=void 0===e?6:e,a=(0,u.default)(new Array(t),function(e,t){return t+1});return v.default.createElement("ul",{className:"recommend-skeleton"},a.map(function(e,t){return v.default.createElement("li",{className:"sk-item",key:t+"skeleton"},v.default.createElement("p",{className:"square"}),v.default.createElement("p",{className:"line"}))}))}}]),t}(_.Component);t.default=E,e.exports=t.default},693:function(e,t){},694:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(259),u=l(n),r=a(37),s=l(r),o=a(1),c=l(o),f=a(2),d=l(f),i=a(3),m=l(i),p=a(4),h=l(p),_=a(0),v=l(_);a(695);var E=function(e){function t(){return(0,c.default)(this,t),(0,m.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.len,t=void 0===e?6:e,a=(0,u.default)(new Array(t),function(e,t){return t+1});return v.default.createElement("ul",{className:"list-song-skeleton"},a.map(function(e,t){return v.default.createElement("li",{className:"sk-song-item",key:t+"skeleton"},v.default.createElement("p",{className:"row"}),v.default.createElement("p",{className:"play"}))}))}}]),t}(_.Component);t.default=E,e.exports=t.default},695:function(e,t){},697:function(e,t){}});