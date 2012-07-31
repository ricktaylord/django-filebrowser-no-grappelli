function FileSubmit(FileURL, ThumbURL, FileType, CropURL) {
    
    // var input_id=window.name.split("___").join(".");
    var input_id=window.name.replace(/____/g,'-').split("___").join(".");
    var preview_id = 'image_' + input_id;
    var link_id = 'link_' + input_id;
    var help_id = 'help_' + input_id;
    var crop_id = 'crop_' + input_id;
    input = opener.document.getElementById(input_id);
    preview = opener.document.getElementById(preview_id);
    link = opener.document.getElementById(link_id);
    help = opener.document.getElementById(help_id);
    crop = $("#"+crop_id, opener.document);
    // set new value for input field
    input.value = FileURL;
    
    if (ThumbURL && FileType != "") {
        // selected file is an image and thumbnail is available:
        // display the preview-image (thumbnail)
        // also add crop tool
       
        // link.setAttribute("href", FileURL);
        
        // link.setAttribute("target", "_blank");
        preview.setAttribute("src", ThumbURL);
        crop.html("Crop this image ...");
        crop.attr("href","javascript:FileBrowser.show('"+input_id+"','"+CropURL+"');");
        console.debug(crop);
        var handle = function() { FileBrowser.show(input_id, CropURL); return false; };
        crop.click(handle);
        help.setAttribute("style", "display:block");
    } else {
        // hide preview elements
        link.setAttribute("href", "");
        link.setAttribute("target", "");
        preview.setAttribute("src", "");
        help.setAttribute("style", "display:none");
    }
    //this.close();
}

