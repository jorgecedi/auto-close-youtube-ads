if(typeof checkForCloseAndSkipButtons === 'undefined'){

    var checkForCloseAndSkipButtons = () => {
        // Class names of the ad's close elements
        let class_names_to_look_for = [
            "videoAdUiSkipButton",
            "iv-promo-close",
            "close-padding",
            "annotation-close-button"
        ];
        for( i = 0; i < class_names_to_look_for.length; i++){
            // Search for all elements with those class names
            let class_names_array = document.getElementsByClassName(class_names_to_look_for[i]);
            if( class_names_array.length > 0 ){
                try{
                    // Try to click the close button
                    class_names_array[0].click();
                }catch(e){
                    console.log(e);
                }
            }
        }
    }

    if( typeof auto_skip_interval === 'undefined'){
        var auto_skip_interval = setInterval('checkForCloseAndSkipButtons()', 500);
    }
}
