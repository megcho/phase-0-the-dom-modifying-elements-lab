// Write your code here!
main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "<h1>YOUR-NAME is the champion</h1>;"


// 1) no longer has DOM node 'main#main'
// 2) has a 'newHeader' variable that points to node 'h1#victory'
// 3) has a 'newHeader' variable that points to node 'h1#victory'
// 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside


