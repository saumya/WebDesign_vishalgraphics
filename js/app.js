//console.log('application init');
//
// Application Entry
$( function(){
    //console.log('ready!')

    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    })

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