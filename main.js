menu_list_array = ["Chicken Tandoori pizza",
    "Veg Pizza",
    "Paneer Tikka Pizza",
    "Pepporoni Pizza",
    "(Dont mind the spelling mistake)",
    "Rest type in suggestion box"];
function getmenu() {
    var htmldata = "";
    for (var i = 0; i < menu_list_array; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
};
function add_item() { 
    var htmldata; 
    var imgtags = '<img id="im1" src="images/pizzaImg.png"/>' 
    var item = document.getElementById("add_item").value; 
    menu_list_array.sort(); htmldata = "" 
    for (var i = 0; i < menu_list_array.length; i++) 
    { 
        htmldata = htmldata + imgtags + menu_list_array[i] + '<br>'; } 
        document.getElementById("display_addedmenu").innerHTML = htmldata; } 
        function add_top() { var item = document.getElementById("add_item").value; 
        menu_list_array.push(item); add_item(); }