"use strict";function initMap(){var e={zoom:11,center:new google.maps.LatLng({lat:51.51,lng:-.12}),mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.TOP_CENTER}},o=document.getElementById("map");map=new google.maps.Map(o,e),window.mapBounds=new google.maps.LatLngBounds,ko.bindingHandlers.googlemap={init:function(e,o,a,n,t){o()},update:function(e,o,a,n,t){var s=o();s.places().forEach(function(e){var o=new google.maps.LatLng(e.position());e.marker=new google.maps.Marker({position:o,map:map,animation:google.maps.Animation.DROP,parent:e}),e.marker.addListener("click",function(){map.setCenter(this.getPosition()),n.markerAnimate(this),n.getInfo(this)});var a=window.mapBounds;a.extend(new google.maps.LatLng(e.position())),map.fitBounds(a),map.setCenter(a.getCenter())}),window.addEventListener("resize",function(e){map.fitBounds(mapBounds),n.closeMoreInfo(),n.infoWin.close()})}};var a=function(){var e=document.getElementById("off-btn"),o=document.getElementById("off-body"),a=document.getElementById("off-nav");e.addEventListener("click",function(e){a.classList.toggle("off-shift"),o.classList.toggle("off-shift")},!1)};a(),ko.applyBindings(new MyViewModel)}var data={auth:{client_id:"COIOBSSXMC4DBNB22N0WZ1WC3W0PXOFMC1NJW5PN1BL0FINU",client_secret:"QKFUWS0PWNBAKMHNDGTPYUT0CAQIM2TJGJIHWSMH4Q5YORRH"},locations:[{name:"British Museum",lat:51.519459,lng:-.126931,id:"4ac518d2f964a5203da720e3"},{name:"Madame Tussauds",lat:51.5229,lng:-.1548,id:"4ac518cef964a520fca520e3"},{name:"Buckingham Palace",lat:51.501476,lng:-.140634,id:"4abe4502f964a520558c20e3"},{name:"Stratford picture house",lat:51.54303859900249,lng:.001206887404320114,id:"4b310ca6f964a52002ff24e3"},{name:"The Cow",lat:51.519200629510514,lng:-.1954983152188697,id:"4ac518bdf964a520dfa220e3"},{name:"London Zoo",lat:51.535645144168825,lng:-.15573978424072266,id:"4ac51183f964a52048a020e3"},{name:"Royal Botanic Gardens",lat:51.477747968798816,lng:-.296630859375,id:"4ac518cef964a52002a620e3"},{name:"The Courtauld Gallery",lat:51.51157280958188,lng:-.1176735793118728,id:"4ac518d2f964a5203fa720e3"},{name:"Royal Observatory",lat:51.4771332098067,lng:-.0007510185241699219,id:"4ac518cef964a5203aa620e3"},{name:"Hyde park",lat:51.507460346127864,lng:-.16213417053222656,id:"4ac518d2f964a52026a720e3"}]},map,Place=function(e){var o=this;o.lat=ko.observable(e.lat),o.lng=ko.observable(e.lng),o.id=ko.observable(e.id),o.position=ko.computed(function(){return{lat:o.lat(),lng:o.lng()}}),o.name=ko.observable(e.name),o.photoLink=ko.observable(),o.address=ko.observable(),o.ratingColor=ko.observable(),o.rating=ko.observable(),o.desc=ko.observable(),o.facebook=ko.observable(),o.twitter=ko.observable(),o.phone=ko.observable(),o.phoneTel=ko.observable(),o.statusL=ko.observable(),o.url=ko.observable(),o.formatedUrl=ko.observable()},MyViewModel=function(){var e=this;e.places=ko.observableArray(),e.search=ko.observable(""),e.displayInfo=ko.observable(""),e.infoWin=new google.maps.InfoWindow,e.currentPlace=ko.observable(),e.currentPlaceNotEmpty=ko.observable(!1),data.locations.forEach(function(o){e.places().push(new Place(o))}),e.searchInput=ko.computed(function(){var o=this.search().toLowerCase();return o?ko.utils.arrayFilter(e.places(),function(e){var a=-1!==e.name().toLowerCase().indexOf(o);return a?e.marker.setVisible(!0):e.marker.setVisible(!1),a}):(e.places()[0].marker&&e.places().forEach(function(e){e.marker.setVisible(!0)}),e.places())},e),e.markerAnimate=function(e){null!==e.getAnimation()?e.setAnimation(null):e.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){e.setAnimation(null)},1500)},e.locClick=function(o){e.markerAnimate(o.marker),map.setCenter(o.marker.getPosition()),e.getInfo(o.marker),e.openInfoWindow()};var o=$("#more-info"),a=$("#close-info");e.closeOpenMoreInfo=function(){o.hasClass("slide-out")&&a.hasClass("closeOpen")?(o.removeClass("slide-out"),a.removeClass("closeOpen")):(o.addClass("slide-out"),a.addClass("closeOpen"))},e.openInfoWindow=function(){o.hasClass("slide-out")||a.hasClass("closeOpen")||(o.addClass("slide-out"),a.addClass("closeOpen"))},e.closeMoreInfo=function(){o.hasClass("slide-out")&&a.hasClass("closeOpen")&&(o.removeClass("slide-out"),a.removeClass("closeOpen"))},e.getInfo=function(o){var a=o.parent,n=data.auth.client_id,t=data.auth.client_secret,s="https://api.foursquare.com/v2/venues/"+a.id()+"?client_id="+n+"&client_secret="+t+"&v=20160501";$.ajax({dataType:"json",url:s,cache:!0,success:function(o){e.processInfo(o,a),e.infoWin.setContent('<h4 class="marker-info">'+a.name()+"</h4>"),e.infoWin.open(map,a.marker),e.openInfoWindow()},error:function(){var o='<h2 class="error-msg">Ooops, something went wrong!</h2><p>Please reload a page or check your internet conection</p>';e.infoWin.setContent(o),e.infoWin.open(map,a.marker)}})},e.processInfo=function(o,a){var n=o.response.venue;if(n.bestPhoto&&a.photoLink(n.bestPhoto.prefix+"400x300"+n.bestPhoto.suffix),n.location.formattedAddress&&a.address(n.location.formattedAddress),n.rating&&n.ratingColor){var t="background: #"+n.ratingColor;a.ratingColor(t),a.rating(n.rating)}if(n.description&&a.desc(o.response.venue.description),n.contact.facebook?(a.facebook("http://facebook.com/"+n.contact.facebook),a.facebookExists=ko.observable(!0)):a.facebookExists=ko.observable(!1),n.contact.twitter?(a.twitter(n.contact.twitter),a.twitterExists=ko.observable(!0)):a.twitterExists=ko.observable(!1),n.contact.phone?(a.phone(n.contact.phone),a.phoneTel("tel:"+n.contact.phone),a.phoneExists=ko.observable(!0)):a.phoneExists=ko.observable(!1),n.url){var s=n.url,r=s.replace("http://","");a.formatedUrl(r),a.url(n.url)}e.currentPlace(a),e.currentPlaceNotEmpty(!0)}};