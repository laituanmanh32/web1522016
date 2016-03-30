$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
        // $('.bababa').css("top:100px");
    );
});

//search
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});



  $(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 

});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});




function shareOnWeb(nameWebShare) {
    <!-- All Web Share -->
        var webShare = {
            
            twitter         : "http://twitter.com/intent/tweet?url=[u]&text=[t]",
            googlebookmarks : "https://www.google.com/bookmarks/mark?op=add&bkmk=[u]&title=[t]" ,   
            linkedin        : "http://www.linkedin.com/shareArticle?mini=true&url=[u]&title=[t]",
            blogger         : "http://www.blogger.com/blog_this.pyra?t=&u=[u]&n=[t]",
            facebook        : "http://www.facebook.com/sharer.php?u=[u]&t=[t]"
        
        };
        
        var url = webShare[nameWebShare];<!--get url of webShare -->
        
        if(url==null) alert("Name Web Share ERROR");<!-- nameWebShare don't have in webShare -->
        
        url = url.replace("[u]",encodeURIComponent(window.location.href));<!-- insert url current in url web Share -->
        url = url.replace("[t]",document.title);<!-- insert title in url web Share -->
        
        var styleWebShare =  "toolbar=yes, scrollbars=yes, resizable=yes, top=[t], left=[l], width=[w], height=[h]"; <!-- created location and size of Web share -->
        
        var top = screen.height/4;
        var left = screen.width/4;
        var width = screen.width/2;
        var height = screen.height/2;
        
        styleWebShare = styleWebShare.replace("[t]",top);
        styleWebShare = styleWebShare.replace("[l]",left);
        styleWebShare = styleWebShare.replace("[w]",width);
        styleWebShare = styleWebShare.replace("[h]",height);
        
        window.open(url,'',styleWebShare);<!--show new tab share-->
        
    }
