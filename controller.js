function loadContacts() {
$.get('contact.mst', function(template) {
    $.getJSON(
        'http://private-1da0e-magiceightball.apiary-mock.com/contact', 
        {}, 
        function(json, textStatus) {
            var data = {"contact":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function hashAction(){
    var numberPattern = /notes-\d+/g;
    var noteId = location.hash.match( numberPattern );
    if (noteId) {
        loadNoteById(noteId);
        return;
    }
    switch(location.hash) {
        case '#home':
          $("#body").text("");
        break;
        case '#about':
          $("#body").text("Created for people who want to leave their decision making up to fate.")
        break;
        case '#contact':
          loadContacts();
        break;
        default:
          location.hash = "";
      }
}

$(function(){
    //$("#body").text("");
    $.get('navigation.mst', function(template) {
        var data = {"title":"TEST TITLE", 
        "nav":[
        {"title":"Home", "href":"home"},
        {"title":"About", "href": "about"},
        {"title":"Contact", "href": "contact"}
        ]
        };
    var rendered = Mustache.render(template,data);
    $('#navigation').html(rendered);
    });
    window.onhashchange = function(){
      hashAction();
    };
  hashAction();
});