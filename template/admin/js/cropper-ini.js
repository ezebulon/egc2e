$(function () {
   /* IMAGE PRINCIPALE : ARTICLE */
   var $previews = $('.preview');
   $('#image2crop').cropper({
      aspectRatio: 4/3,
      viewMode: 1,
      dragMode: 'move',
      autoCropArea: 0.85,
      restore: false,
      guides: false,
      highlight: false,
      cropBoxMovable: false,
      cropBoxResizable: false,

      build: function (e) {
         var $clone = $(this).clone();			            
         $clone.css({
            display: 'block',
            width: '100%',
            minWidth: 0,
            minHeight: 0,
            maxWidth: 'none',
            maxHeight: 'none'
         });

         $previews.css({
            overflow: 'hidden'
         }).html($clone);
      },

      crop: function (e) {
         var imageData = $(this).cropper('getImageData');
         var previewAspectRatio = e.width / e.height;
         
         $previews.each(function () {
            var $preview = $(this);
            var previewWidth = $preview.width();
            var previewHeight = previewWidth / previewAspectRatio;
            var imageScaledRatio = e.width / previewWidth;
            $preview.height(previewHeight).find('img').css({
               width: imageData.naturalWidth / imageScaledRatio,
               height: imageData.naturalHeight / imageScaledRatio,
               marginLeft: -e.x / imageScaledRatio,
               marginTop: -e.y / imageScaledRatio
            });
         });
      }
   }); /* /#image2crop */
});