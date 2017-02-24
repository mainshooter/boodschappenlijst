function createShopList() {
  var shoplist = getShopList();
  // var shoplistArray = shoplist.split(" ");
  var shoplistArray = shoplist.split(",");
  // Remove the ","
  var content = "";

  for (var i = 0; i < shoplistArray.length; i++) {
    content += shoplistArray[i];
    content += "<br />";
  }

  displayShopList(content);
}
function getShopList() {
  // Get the values
  var shopList = document.getElementById('shoplist').value;
  return(shopList);
}
function displayShopList(content) {
  document.getElementById('list').innerHTML = content;
}
