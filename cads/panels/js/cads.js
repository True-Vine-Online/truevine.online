function loadRdAd(){
    var adIds = Array('0001_001', '0001_002', '0001_003');
    var adId = adIds[Math.floor(Math.random()*adIds.length)];
    console.log(adId)

    if (adId=='0001_001'){
        document.getElementById("CADheader").innerHTML = "Wave Digital Ministries (Test Ad 1)"
        document.getElementById("CADbody").innerHTML = "We are merging ministry & technology."
        document.getElementById("CADa").href = "https://www.wavedm.net/"
        document.getElementById("CADa2").href = "https://www.wavedm.net/"
    }

    if (adId=='0001_002'){
        document.getElementById("CADheader").innerHTML = "Wave Digital Ministries (Test Ad 2)"
        document.getElementById("CADbody").innerHTML = "We are merging ministry & technology."
        document.getElementById("CADa").href = "https://www.wavedm.net/"
        document.getElementById("CADa2").href = "https://www.wavedm.net/"
    }

    if (adId=='0001_003'){
        document.getElementById("CADheader").innerHTML = "Wave Digital Ministries (Test Ad 3)"
        document.getElementById("CADbody").innerHTML = "We are merging ministry & technology."
        document.getElementById("CADa").href = "https://www.wavedm.net/"
        document.getElementById("CADa2").href = "https://www.wavedm.net/"
    }
}



function loadAd_0001_001(){

    document.getElementById("0001_001").innerHTML = '<div class="cads-card"><div class="cads-media"><a href="https://www.wavedm.net/" target="_blank" id="imglink1" class="uk-link-muted"><img width="100%" src="./img/wdm.png" alt="Wave Digital Ministries Network"></a></div><div class="cads-body"><h5 class="cads-heading"><span>Wave Digital Ministries</span></h5><p class="cads-copy">We are merging ministry & technology.</p><a class="cads-a" href="https://www.wavedm.net/" target="_blank" id="adlink1" class="uk-link-muted">Learn more</a> | <a class="cads-a" id="reportlink" href="" target="_blank" class="uk-link-muted">Report ad</a></div></div>'
}