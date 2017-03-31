var timeToken=null;
var xhr=null;
var flash_guid=null;

function getMovie() {
    var M$ =  navigator.appName.indexOf("Microsoft")!=-1
    return (M$ ? window : document)["AMplayer"]
}

function activateBeta(){
    $(".jcarousel-wrapper").slideDown("fast");
    getMarkups(null);
}
function init_flash(guid){
    flash_guid=guid;
}

window.onload=function() {
    $('.jcarousel').jcarousel();
    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });
    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

}

function gotoSketch(data){
    getMovie().gotoFrame(data);
}
function pauseVideo(){
    getMovie().pause();
}
function resetMarkups(){
    $(".jcarousel-wrapper").slideUp("fast");
    $('.jcarousel ul>li').remove();
    $('.jcarousel').jcarousel('reload');
    if (xhr != null){
        xhr.abort();
    }

}

function getMarkups(timeStamp){
    var data = {
        guid_video:scetch_guid,
        time_token:timeStamp,
        token:flash_guid
    }
    xhr=$.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: "http://54.208.253.218/GetAllMarkupVideo",
        success: onSucces,
        error:onError,
        dataType: "json"
    });
}
function onSucces(response){
    timeToken=response.data.time_token;
    markups=response.data.ListMarkup;
    var element;
    markups.forEach(function(element) {
        a=$("<a data-lightbox='sketch-set' href='"+element["UrlMarkup"]+"' rel='"+element["GuidMarkup"]+"'</a>");
        img=$("<img src='"+element["UrlMarkup"]+"'/>");
        $('.jcarousel ul').append(jQuery('<li>').width(100).append($(a).append($(img))));
        $('.jcarousel').jcarousel('reload');
        AMlightbox.album.push({
            link: element["UrlMarkup"],
            title:undefined,
            sketch:element["GuidMarkup"]
        });
        AMlightbox.updateNav();
    });
    getMarkups(timeToken)
}
function onError(e){
    getMarkups(timeToken)
}