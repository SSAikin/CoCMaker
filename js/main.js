const connect = document.getElementsByClassName("btn-connect")[0];
const tabSmall = document.getElementsByClassName("tab-small")[0];
const sheetResume = document.getElementsByClassName("sheet-resume")[0];
const campaingContent = document.getElementsByClassName("campaing-content")[0];
const sidebar = new SideBar({
	autoExecute: true
})

connect.addEventListener("click", function() {
	connect.classList.toggle("close");
});

tabSmall.addEventListener("click", function() {
	tabSmall.classList.toggle("selected");
	sheetResume.classList.toggle("open");
	campaingContent.classList.toggle("shrink");
});
