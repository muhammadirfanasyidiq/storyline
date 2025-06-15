window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script2 = function()
{
  var audio = document.getElementById('bgSongku');
audio.src="bgmusik.mp3";
audio.load();
audio.play();
audio.volume=0.9;
}

window.Script3 = function()
{
  var player = GetPlayer();
var total = player.GetVar("total");
var persen = player.GetVar("persen");

total = player.GetVar("a1") + player.GetVar("a2") + player.GetVar("a3") + player.GetVar("a4") + player.GetVar("a5") + player.GetVar("a6") + player.GetVar("a7") + player.GetVar("a8") + player.GetVar("a9") + player.GetVar("a10");
persen = total / 100 * 100;

player.SetVar("total", total);
player.SetVar("persen", persen);

}

window.Script4 = function()
{
  var player = GetPlayer();

fetch("https://script.google.com/macros/s/AKfycbw1kpTM4zQzqi-R_71jUcUC1VttTik6EJDTJglnbCGWh6TMP2gnNMAgkr3XnQ0cLFSdrw/exec", { // Ganti dengan URL Web App milikmu
  method: "POST",
  body: JSON.stringify({
    nama: player.GetVar("nama"),
    kelas: player.GetVar("kelas"),
    a1: player.GetVar("a1"),
    a2: player.GetVar("a2"),
    a3: player.GetVar("a3"),
    a4: player.GetVar("a4"),
    a5: player.GetVar("a5"),
    a6: player.GetVar("a6"),
    a7: player.GetVar("a7"),
    a8: player.GetVar("a8"),
    a9: player.GetVar("a9"),
    a10: player.GetVar("a10"),
    total: player.GetVar("total"),
    persen: player.GetVar("persen")
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.text())
.then(data => alert("✅ Laporan berhasil dikirim ke Google Sheet dan email guru."))
.catch(err => alert("❌ Gagal mengirim laporan: " + err));

}

};
