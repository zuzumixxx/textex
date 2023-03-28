
console.log("inject inbox js");

window.onload = ()=>{
  const tabChild = document.querySelector("[tabindex=\"-1\"]");
  console.log(tabChild);

  if(tabChild){
    const tabParent = tabChild.parentNode;
    tabParent.parentElement.style.setProperty('--revamp-nav-bottom-toolbar-height', '1px');
    tabParent.style.display = "none"
  }
}


