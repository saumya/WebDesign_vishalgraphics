//console.log('application init');
//
// Gallery Functionality Object
const SaumyaGallery = function(config){
    
    let galleryIntervalId;
    let isPlaying = false;
    let gallerycounter = 0;

    return {
        init: function(){
            //console.log('init')

           
            let changeGalleryImage = function(){
                //console.log('changeGalleryImage : isPlaying', isPlaying);
                //console.log('changeGalleryImage : gallerycounter', gallerycounter);

                $(config.divId).fadeOut( config.transitionTime , function(){
                    $(config.divId)[0].src = config.galleryImagePaths[gallerycounter];
                });
                $(config.divId).fadeIn( config.transitionTime );
                
                gallerycounter ++;
                if( gallerycounter >= config.galleryImagePaths.length ){
                    gallerycounter = 0;
                }

                // setting the size
                //$('#gallary_img').height('800');
            }
            //let galleryTimer = setInterval(changeGalleryImage, config.time);
            galleryIntervalId = setInterval(changeGalleryImage, config.time);
            //console.log('galleryIntervalId', galleryIntervalId)
            return this;
        },
        play: function(){
            //console.log('play : isPlaying', isPlaying);
            
            if(isPlaying){
                // Do Nothing
            }else{
                isPlaying = true;
                this.init();
            }
        },
        pause: function(){
            //console.log('pause : isPlaying', isPlaying);
            //console.log('pause : gallerycounter', gallerycounter);
            //console.log('pause : galleryIntervalId', galleryIntervalId)
            
            clearInterval(galleryIntervalId);
            isPlaying = false;
        }
    }
}
// Remove the above code and load the library .js file
// check and run
// Application Entry
$( function(){
    //console.log('ready!')

    // Gallery Configuration
    const galleryImagePaths = [ 'img/gallery/gallery_1.jpg', 
                                'img/gallery/gallery_4.jpg',
                                'img/gallery/gallery_5.jpg',
                                'img/gallery/gallery_6.jpg',
                                'img/gallery/gallery_7.jpg'   ];
    //
    const configObj = { divId:'#gallary_img', 
                        time: 2000, 
                        galleryImagePaths: galleryImagePaths, 
                        transitionTime:2000 
                    };
    // initialising the Gallery Object
    // SaumyaGallery(configObj);
    const gallery = SaumyaGallery(configObj);
    gallery.play();
    
    $('#btnPause').on('click', function(){ gallery.pause() })
    $('#btnPlay').on('click', function(){ gallery.play() })

})