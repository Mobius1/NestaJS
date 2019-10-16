const expand = document.getElementById("expand");
const collapse = document.getElementById("collapse");

const instance = new Nestable("#myList");

expand.addEventListener("click", e => {
	instance.expandAll();
});

collapse.addEventListener("click", e => {
	instance.collapseAll();
});