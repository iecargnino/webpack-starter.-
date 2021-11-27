(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{k:()=>m});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var n,r,a;return n=e,a=[{key:"fromJson",value:function(t){var n=t.id,r=t.tarea,a=t.completado,o=t.creado,i=new e(r);return i.id=n,i.completado=a,i.creado=o,i}}],(r=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&t(n.prototype,r),a&&t(n,a),e}();function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,o;return t=e,(o=[{key:"nuevoToDo",value:function(e){this.all.push(e),this.guardarLocalStorage()}},{key:"eliminarToDo",value:function(e){this.all=this.all.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}(this.all);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.id==e){a.completado=!a.completado,this.guardarLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.all=this.all.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.all))}},{key:"cargarLocalStorage",value:function(){this.all=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.all=this.all.map(n.fromJson)}}])&&a(t.prototype,o),e}();function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector(".todo-list"),c=document.querySelector(".new-todo"),u=document.querySelector(".clear-completed"),s=document.querySelector(".filters"),d=document.querySelectorAll(".filtro"),f=function(e){var t='\n        <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n            <div class="view">\n                <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n                <label>").concat(e.tarea,'</label>\n                <button class="destroy"></button>\n            </div>\n            <input class="edit" value="Create a TodoMVC template">\n        </li>'),n=document.createElement("div");return n.innerHTML=t,l.append(n.firstElementChild),n.firstElementChild};c.addEventListener("keyup",(function(e){if(13===e.keyCode&&c.value.length>0){var t=new n(c.value);m.nuevoToDo(t),f(t),c.value=""}})),l.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,a=r.getAttribute("data-id");t.includes("input")?(m.marcarCompletado(n.id),r.classList.toggle("completed")):t.includes("button")&&(m.eliminarToDo(a),l.removeChild(r))})),u.addEventListener("click",(function(){m.eliminarCompletados();for(var e=l.children.length-1;e>=0;e--){var t=l.children[e];t.classList.contains("completed")&&l.removeChild(t)}})),s.addEventListener("click",(function(e){var t=e.target.text;if(t){d.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}(l.children);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.classList.remove("hidden");var o=a.classList.contains("completed");switch(t){case"Pendientes":o&&a.classList.add("hidden");break;case"Completados":o||a.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var m=new o;m.all.forEach(f)})();