(this["webpackJsonpreact-movie-db"]=this["webpackJsonpreact-movie-db"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),o=a.n(r),c=(a(14),a(1)),s=a(2),l=a(4),m=a(3),v=a(5),h=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"viewMovie",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){return i.a.createElement("div",{className:"movieRows",key:this.props.movie.id},i.a.createElement("div",{className:"app-img"},i.a.createElement("img",{alt:"movie-poster",width:"120",src:this.props.movie.poster_src})),i.a.createElement("div",{className:"movie-description"},i.a.createElement("div",{className:"movie-title"},i.a.createElement("h3",null,this.props.movie.title)),i.a.createElement("div",{className:"movie-overview"},i.a.createElement("p",null,this.props.movie.overview)),i.a.createElement("div",{className:"movie-view"},i.a.createElement("input",{type:"button",className:"viewbtn",onClick:this.viewMovie.bind(this),value:"view"}))))}}]),t}(i.a.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Error"))}}]),t}(i.a.Component),p=a(8),u=a.n(p),f=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a.performSearch("avengers"),a}return Object(v.a)(t,e),Object(s.a)(t,[{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=0923e7ab9e9ecdc6bfa29590587c12d7&query="+e;u.a.ajax({url:a,success:function(e){var a=e.results,n=[];if(e.results.length<1){console.log("error");var r=i.a.createElement(d,null);t.setState({movieRows:r})}else a.forEach((function(e){e.poster_src="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=i.a.createElement(h,{key:e.id,movie:e},i.a.createElement("div",{class:"Parent"}));n.push(t)}));t.setState({movieRows:n})},error:function(e,t,a){}})}},{key:"serachChangeHandler",value:function(e){console.log(e.target.value);var t=e.target.value;this.performSearch(t)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App bodyDiv"},i.a.createElement("div",{className:"titleBar"},i.a.createElement("span",{className:"app-icon"},i.a.createElement("img",{alt:"app-icon",width:"50",src:"cinema.svg"})),i.a.createElement("span",{className:"app-title"},i.a.createElement("h1",null,"Movie-DB Search"))),i.a.createElement("div",{className:"container"},i.a.createElement("input",{style:{fontSize:20,fontWeight:"bold",display:"block",width:"50%",paddingTop:8,paddingBottom:8,paddingLeft:11,margin:"auto",marginTop:5,outline:0},onChange:this.serachChangeHandler.bind(this),placeholder:"Search Your Movie"}),this.state.movieRows),i.a.createElement("div",{class:"contact"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"footer"},i.a.createElement("img",{width:"100",src:"https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/79148294_2203364699763580_1501455854409351168_n.jpg?_nc_cat=105&_nc_ohc=TQl4eqTHNWUAQlcUdh8klM4LamKnnzfay8xh2VobfoB9D3a5hxmUddVTw&_nc_ht=scontent-ort2-1.xx&oh=68289771fe4bf26c391f2d4fdf97fd7f&oe=5E6E69DF",alt:"Profile"}),i.a.createElement("p",{class:"credit"},"Designed and developed by Ashok"),i.a.createElement("p",{class:"license"},"Hosted in Github Pages. Code is licensed under",i.a.createElement("b",null," MIT")," and available at ",i.a.createElement("a",{href:"https://github.com/AshokWeber",target:"_blank"},"Github")),i.a.createElement("div",{class:"copy"},"\xa9 2019 Ashok Gurusamy")))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.2c56c73f.chunk.js.map