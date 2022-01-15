/** Wonderplugin Audio Player Plugin Pro Version
 * Copyright 2019 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://www.wonderplugin.com
 * Version 9.9 
 */
var WONDERPLUGIN_AUDIO_SKIN_OPTIONS={darkbox:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-48-48-1.png",showinfo:true,imageheight:100,skin:"DarkBox",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:48,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",
stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-24-24-0.png",playpauseimagewidth:48,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:48,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:48,
showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-48-48-1.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:true,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:72,noncontinous:false,tracklistbackgroundimage:"",
showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true},bar:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"Bar",loopimage:"loop-24-24-0.png",
loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-24-24-0.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-24-24-0.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,
stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true},barwithplaylist:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",
prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"BarwithPlaylist",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-24-24-0.png",playpauseimagewidth:24,
loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-24-24-0.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,
showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:true,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true},bartitle:{skinsfoldername:"",
titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"BarTitle",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",
stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:420,showtitleinbar:true,showloop:true,volumeimage:"volume-24-24-0.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:24,
showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-24-24-0.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",
showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true},barwhite:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-1.png",showinfo:false,imageheight:100,skin:"BarWhite",
loopimage:"loop-24-24-2.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-24-24-2.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-1.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-1.png",playpauseimage:"playpause-24-24-1.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,
stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,tracklistbarbgcolor:"#aaa",tracklistthumbcolor:"#333"},barwhitewithplaylist:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,
random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-1.png",showinfo:false,imageheight:100,skin:"BarWhitewithPlaylist",loopimage:"loop-24-24-2.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,
showtitleinbar:false,showloop:true,volumeimage:"volume-24-24-2.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-1.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-1.png",playpauseimage:"playpause-24-24-1.png",
showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:true,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",
showvolume:true,fullwidth:false,loop:1,preloadaudio:true,tracklistbarbgcolor:"#aaa",tracklistthumbcolor:"#333"},barwhitetitle:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-1.png",showinfo:false,imageheight:100,skin:"BarWhiteTitle",loopimage:"loop-24-24-2.png",loopimagewidth:24,
showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:420,showtitleinbar:true,showloop:true,volumeimage:"volume-24-24-2.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-1.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-1.png",playpauseimage:"playpause-24-24-1.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,
stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,tracklistbarbgcolor:"#aaa",tracklistthumbcolor:"#333"},jukebox:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:true,random:false,
titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-0.png",showinfo:true,imageheight:100,skin:"Jukebox",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,
showloop:true,volumeimage:"volume-24-24-0.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-24-24-0.png",showprevnext:true,
backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:true,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,
loop:1,preloadaudio:true},whitebox:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:36,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-36-36-0.png",showinfo:true,imageheight:120,skin:"White Box",loopimage:"loop-36-36-0.png",loopimagewidth:36,showstop:false,prevnextimageheight:36,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",
stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-36-36-0.png",playpauseimagewidth:36,loopimageheight:36,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:36,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:36,
showbackgroundimage:false,imagewidth:120,stopimage:"stop-36-36-0.png",playpauseimage:"playpause-36-36-0.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:true,stopimageheight:36,volumeimageheight:36,stopimagewidth:36,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",
showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,progressinbar:false},whiteboxlive:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:36,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-36-36-0.png",showinfo:true,imageheight:120,
skin:"White Box Live",loopimage:"loop-36-36-0.png",loopimagewidth:36,showstop:false,prevnextimageheight:36,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:false,volumeimage:"volume-36-36-0.png",playpauseimagewidth:36,loopimageheight:36,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
prevnextimagewidth:36,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:36,showbackgroundimage:false,imagewidth:120,stopimage:"stop-36-36-0.png",playpauseimage:"playpause-36-36-1.png",showprevnext:false,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:36,volumeimageheight:36,
stopimagewidth:36,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,progressinbar:true,showliveplayedlist:true},greybox:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:36,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",
height:600,loadingformat:"Loading...",prevnextimage:"prevnext-36-36-0.png",showinfo:true,imageheight:120,skin:"Grey Box",loopimage:"loop-36-36-0.png",loopimagewidth:36,showstop:false,prevnextimageheight:36,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-36-36-0.png",
playpauseimagewidth:36,loopimageheight:36,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:36,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:36,showbackgroundimage:false,imagewidth:120,stopimage:"stop-36-36-0.png",playpauseimage:"playpause-36-36-0.png",showprevnext:true,backgroundimage:"",autoplay:false,
volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:true,stopimageheight:36,volumeimageheight:36,stopimagewidth:36,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,
progressinbar:false,tracklistbarbgcolor:"#555"},greyboxlive:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:36,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-36-36-0.png",showinfo:true,imageheight:120,skin:"Grey Box Live",loopimage:"loop-36-36-0.png",loopimagewidth:36,showstop:false,prevnextimageheight:36,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",
stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:false,volumeimage:"volume-36-36-0.png",playpauseimagewidth:36,loopimageheight:36,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:36,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:36,
showbackgroundimage:false,imagewidth:120,stopimage:"stop-36-36-0.png",playpauseimage:"playpause-36-36-1.png",showprevnext:false,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:36,volumeimageheight:36,stopimagewidth:36,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",
showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,progressinbar:true,tracklistbarbgcolor:"#555",showliveplayedlist:true},lightbox:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:300,loadingformat:"Loading...",prevnextimage:"prevnext-48-48-1.png",
showinfo:true,imageheight:180,skin:"LightBox",loopimage:"loop-24-24-2.png",loopimagewidth:24,showstop:false,prevnextimageheight:48,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:true,width:300,showtitleinbar:false,showloop:true,volumeimage:"volume-24-24-2.png",playpauseimagewidth:48,loopimageheight:24,tracklistitem:10,
tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:48,tracklistarrowimage:"tracklistarrow-48-16-1.png",playpauseimageheight:48,showbackgroundimage:false,imagewidth:300,stopimage:"stop-48-48-0.png",playpauseimage:"playpause-48-48-1.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,
titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"fixed",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:48,volumeimageheight:24,stopimagewidth:48,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true,tracklistbarbgcolor:"#aaa",tracklistthumbcolor:"#333"},musicbox:{skinsfoldername:"",
titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:true,titleinbarwidth:80,showprogress:true,random:false,titleformat:"%TITLE%",height:164,loadingformat:"Loading...",prevnextimage:"prevnext-48-48-0.png",showinfo:true,imageheight:100,skin:"MusicBox",loopimage:"loop-24-24-1.png",loopimagewidth:24,showstop:false,prevnextimageheight:48,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",
stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:300,showtitleinbar:false,showloop:false,volumeimage:"volume-24-24-1.png",playpauseimagewidth:48,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:48,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:48,
showbackgroundimage:false,imagewidth:100,stopimage:"stop-48-48-0.png",playpauseimage:"playpause-48-48-0.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:true,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"fixed",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:48,volumeimageheight:24,stopimagewidth:48,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",
showbarbackgroundimage:false,showimage:true,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:true,fullwidth:false,loop:1,preloadaudio:true},threebuttons:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-2.png",showinfo:false,imageheight:100,skin:"Three Buttons",
loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:24,showtitleinbar:false,showloop:false,volumeimage:"volume-24-24-0.png",playpauseimagewidth:24,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-24-24-2.png",showprevnext:true,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,
stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:false,fullwidth:false,loop:1,preloadaudio:true},button24:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",
prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"Button24",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:24,showtitleinbar:false,showloop:false,volumeimage:"volume-24-24-0.png",playpauseimagewidth:24,
loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:24,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-24-24-2.png",showprevnext:false,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,
showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:false,fullwidth:false,loop:1,preloadaudio:true},button48:{skinsfoldername:"",
titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"Button48",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",
stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:48,showtitleinbar:false,showloop:false,volumeimage:"volume-24-24-0.png",playpauseimagewidth:48,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:48,
showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-48-48-1.png",showprevnext:false,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",
showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:48,timeformat:"%CURRENT% / %DURATION%",showvolume:false,fullwidth:false,loop:1,preloadaudio:true},buttonblue:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"ButtonBlue",
loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:48,showtitleinbar:false,showloop:false,volumeimage:"volume-24-24-0.png",playpauseimagewidth:48,loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:48,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-48-48-2.png",showprevnext:false,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,
stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:16,timeformat:"%CURRENT% / %DURATION%",showvolume:false,fullwidth:false,loop:1,preloadaudio:true},blueplaystop:{skinsfoldername:"",titleinbarwidthmode:"fixed",timeformatlive:"%CURRENT% / LIVE",volumeimagewidth:24,barbackgroundimage:"",showtime:false,titleinbarwidth:80,showprogress:false,random:false,titleformat:"%TITLE%",height:600,loadingformat:"Loading...",
prevnextimage:"prevnext-24-24-0.png",showinfo:false,imageheight:100,skin:"BluePlayStop",loopimage:"loop-24-24-0.png",loopimagewidth:24,showstop:false,prevnextimageheight:24,infoformat:"<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>",stopotherplayers:true,showloading:false,forcefirefoxflash:false,showvolumebar:true,imagefullwidth:false,width:48,showtitleinbar:false,showloop:false,volumeimage:"volume-24-24-0.png",playpauseimagewidth:48,
loopimageheight:24,tracklistitem:10,tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",prevnextimagewidth:24,tracklistarrowimage:"tracklistarrow-48-16-0.png",playpauseimageheight:48,showbackgroundimage:false,imagewidth:100,stopimage:"stop-24-24-0.png",playpauseimage:"playpause-48-48-3.png",showprevnext:false,backgroundimage:"",autoplay:false,volumebarpadding:8,progressheight:8,
showtracklistbackgroundimage:false,titleinbarscroll:true,showtitle:false,defaultvolume:-1,tracklistarrowimageheight:16,heightmode:"auto",titleinbarformat:"%TITLE%",showtracklist:false,stopimageheight:24,volumeimageheight:24,stopimagewidth:24,volumebarheight:80,noncontinous:false,tracklistbackgroundimage:"",showbarbackgroundimage:false,showimage:false,tracklistarrowimagewidth:16,timeformat:"%CURRENT% / %DURATION%",showvolume:false,fullwidth:false,loop:1,preloadaudio:true,stoponpausebutton:true}};
var WONDERAUDIO_NEWOPTIONS=["darkbox","jukebox","barwithplaylist","barwhitewithplaylist","whitebox","greybox"];
for(var i=0;i<WONDERAUDIO_NEWOPTIONS.length;i++){var skin=WONDERAUDIO_NEWOPTIONS[i];WONDERPLUGIN_AUDIO_SKIN_OPTIONS[skin+"withdownload"]={};for(var key in WONDERPLUGIN_AUDIO_SKIN_OPTIONS[skin])WONDERPLUGIN_AUDIO_SKIN_OPTIONS[skin+"withdownload"][key]=WONDERPLUGIN_AUDIO_SKIN_OPTIONS[skin][key];WONDERPLUGIN_AUDIO_SKIN_OPTIONS[skin+"withdownload"]["infoformat"]="<div class='amazingaudioplayer-info-share'>%DOWNLOADBUTTON% %SHAREBUTTON%</div>\n<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>\n<div class='amazingaudioplayer-info-description'>%INFO%</div>";WONDERPLUGIN_AUDIO_SKIN_OPTIONS[skin+
"withdownload"]["tracklistitemformat"]="<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DOWNLOADBUTTON% %SHAREBUTTON%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>"};
