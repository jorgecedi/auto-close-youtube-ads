// Wait for a change in any tab and check if it is a youtube video
// If true, then inject the code in that specific tab

chrome.tabs.onUpdated.addListener(function(t, c, s){
    if( s.status == "complete" && s.url.startsWith("https://www.youtube.com/watch") ){
        chrome.tabs.executeScript(t, {
            file: 'inject.js'
        });
    }
});

