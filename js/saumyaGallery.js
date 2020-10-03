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