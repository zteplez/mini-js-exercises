const historyBtn = document.querySelector("#history");
const visionBtn = document.querySelector("#vision");
const goalsBtn = document.querySelector("#goals");

const buttons = [historyBtn, visionBtn, goalsBtn];

historyBtn.addEventListener("click", () => {
    clearButtons();
    historyBtn.classList.add("active");
    document.querySelector(".text").innerText = "II. Dünya Savaşı, 1939'dan 1945'e kadar süren küresel savaştır. Savaşa dönemin büyük güçleri ve dünya ülkelerinin büyük çoğunluğu katıldı, Müttefikler ve Mihver olmak üzere iki karşıt askerî ittifak kuruldu. 30'dan fazla ülkeden gelen 100 milyondan fazla personelin doğrudan katıldığı bu topyekûn savaşta, savaşın büyük tarafları tüm ekonomik, endüstriyel ve bilimsel kapasitelerini savaş için seferber ettiler. 70 ila 85 milyon ölümle sonuçlanan II. Dünya Savaşı, insanlık tarihindeki en ölümcül savaştı ve savaş boyunca askerî personelden daha çok sivil kayıp verildi. Milyonlarca insan soykırımdan (Holokost gibi), planlanmış açlık ölümlerinden, katliamlardan ve hastalıklardan öldü. Tanklar, zırhlı araçlar, savaş uçakları, stratejik bombardımanlar, uçak gemileri, radar ve sonar, nükleer silahların geliştirilmesi ve roketler gibi birçok savaş teknolojisi savaşta önemli rol oynadı."
});

visionBtn.addEventListener("click", () => {
    clearButtons();
    visionBtn.classList.add("active");
    document.querySelector(".text").innerText = "“My people are going to learn the principles of democracy the dictates of truth and the teachings of science. Superstition must go. Let them worship as they will, every man can follow his own conscience provided it does not interfere with sane reason or bid him act against the liberty of his fellow men.”"
});

goalsBtn.addEventListener("click", () => {
    clearButtons();
    goalsBtn.classList.add("active");
    document.querySelector(".text").innerText = "“Heroes who shed their blood and lost their lives! You are now lying in the soil of a friendly country. Therefore rest in peace. There is no difference between the Johnnies and Mehmets to us where they lie side by side here in this country of ours. You, the mothers, who sent their sons from far away countries wipe away your tears; your sons are now lying in our bosom and are in peace. After having lost their lives on this land they have become our sons as well.";
});

function clearButtons() {
    buttons.forEach(element => {
        element.classList.remove("active");
    });
}
