let connect = document.getElementsByClassName("btn-connect")[0];
const sidebar = new SideBar({
	autoExecute: true
})

connect.addEventListener("click", function() {
	connect.classList.toggle("close");
});
