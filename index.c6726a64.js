var refs={list:document.querySelector(".js-list")};refs.list.addEventListener("click",(function(){var e=event.target;if("BUTTON"===e.nodeName){var t=document.querySelector("#".concat(e.dataset.id));t.classList.add("is-open"),t.addEventListener("click",(function(){"BUTTON"===event.target.nodeName&&t.classList.remove("is-open")}))}}));
//# sourceMappingURL=index.c6726a64.js.map
