function filterTags() {
    var hash = window.location.hash;
    if (!hash || hash.indexOf("!tags:") < 0) {
        return;
    } else {
        var taggedElements = document.getElementsByClassName('tagged');
        if (hash.indexOf("!tags:") == (hash.length - 6)) {
            showTaggedElements(taggedElements);
            return;
        }
        var hashValue = hash.substring(7);
        for (var i = 0; i < taggedElements.length; i++) {
            taggedElements[i].style.display = 'none';
        }
        var tagsOnElements = document.getElementsByClassName('tags-on');
        for (var i = 0; i < tagsOnElements.length; i++) {
            tagsOnElements[i].classList.remove("tags-on");
        }
        var tags = hashValue.split(",");
        for (var i = 0; i < tags.length; i++) {
            var thisTaggedElements = document.getElementsByClassName('tag-' + tags[i]);
            showTaggedElements(thisTaggedElements);
        }
    }
}

function toggleTag(element) {
    var hash = window.location.hash;
    for (var i = 0; i < element.classList.length; i++) {
        var classValue = element.classList[i];
        if (classValue.indexOf("tag-") == 0) {
            var tag = classValue.substring(4);
            var hashArray = hash.split(",");
            if (hashArray.indexOf(tag) >= 0) {
                hashArray.splice(hashArray.indexOf(tag), 1);
            } else {
                hashArray.push(tag);
            }
            hash = hashArray.join();
        }
    }
    if (hash.indexOf("!tags:") < 0) {
        hash = "#!tags:" + hash;
    };
    window.location.hash = hash;
    element.classList.toggle("tags-on");
    filterTags();
}

function showTaggedElements(taggedElements) {
    for (var i = 0; i < taggedElements.length; i++) {
        taggedElements[i].style.display = 'block';
        taggedElements[i].classList.add("tags-on");
    }
}
