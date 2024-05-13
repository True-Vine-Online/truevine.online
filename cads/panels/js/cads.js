/* 
Deliver content for Truevine Online's partners with CADS (Cloud Advert1sement Delivery System)! 

To update or launch an entry, simply update the JS below!
When adding an entry, make sure to update the "adIds" array to include its name/id!
adIds are by the following format: CLIENT#_POST#
*/

function loadRdAd(){
    var adIds = Array('0001_001', '0001_002', '0001_003');
    var adId = adIds[Math.floor(Math.random()*adIds.length)];
    console.log(adId)


    /* CADS entry begin */
    if (adId=='0001_001'){
        /* IMG for the CADS entry (Use root directory paths "./" or direct "https") */
        document.getElementById("CADimg").src = './img/jump_cads_1.png'

        /* CADS Content Headline */
        document.getElementById("CADheader").innerHTML = ""
        
        /* CADS Content Body Copy */
        document.getElementById("CADbody").innerHTML = ""
        
        /* CADS Content Link (Must be same link!) */
        document.getElementById("CADa").href = "https://jumpincamps.com"
        document.getElementById("CADa2").href = "https://jumpincamps.com"
    }
    /* End */

    /* CADS entry begin */
    if (adId=='0001_002'){
        document.getElementById("CADimg").src = './img/jump_cads_2.png'
        document.getElementById("CADheader").innerHTML = ""
        document.getElementById("CADbody").innerHTML = ""
        document.getElementById("CADa").href = "https://jumpincamps.com"
        document.getElementById("CADa2").href = "https://jumpincamps.com"
    }
    /* End */

    /* CADS entry begin */
    if (adId=='0001_003'){
        document.getElementById("CADimg").src = './img/jump_cads_3.png'
        document.getElementById("CADheader").innerHTML = ""
        document.getElementById("CADbody").innerHTML = ""
        document.getElementById("CADa").href = "https://jumpincamps.com"
        document.getElementById("CADa2").href = "https://jumpincamps.com"
    }
    /* End */
}



function loadAd_0001_001(){

    document.getElementById("0001_001").innerHTML = '<div class="cads-card"><div class="cads-media"><a href="https://www.wavedm.net/" target="_blank" id="imglink1" class="uk-link-muted"><img width="100%" src="./img/wdm.png" alt="Wave Digital Ministries Network"></a></div><div class="cads-body"><h5 class="cads-heading"><span>Wave Digital Ministries</span></h5><p class="cads-copy">We are merging ministry & technology.</p><a class="cads-a" href="https://www.wavedm.net/" target="_blank" id="adlink1" class="uk-link-muted">Learn more</a> | <a class="cads-a" id="reportlink" href="" target="_blank" class="uk-link-muted">Report ad</a></div></div>'
}