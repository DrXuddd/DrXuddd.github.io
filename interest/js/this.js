window.onload = function non() {

    document.getElementById("vido").style.cssText = "display:none;";

}
function open_video() {
    document.getElementById("vido").style.cssText = "display:block;";
    document.getElementById("new").style.cssText = "display:none;";
    document.getElementById("vido").play();
    //��play֮���һ����ʱ�����video��muted����
    
}