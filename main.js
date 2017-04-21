require([

    "text!templates.html",
    "views/video_text.js",
    "views/characteristics.js",
    "views/contacts.js"
], function ( Templates, VideoText, Chars, Contacts) {
    var div       = document.createElement('div');
    div.innerHTML = Templates;
    document.body.appendChild(div);
    // views, layouts
    var videoTextView = new VideoText();
    var CharsView= new Chars();

    var MyRouter= Backbone.Router.extend({

        routes     : {
            ""         : "home",
            "home"     : "home",
            "sport"    : "sport",
            "learning" : "learning",
            "multi"    : "multi",
            "chars"    : "chars",
            "contacts" : "contacts"
        },
        initialize : function () {
            Backbone.history.start()
        },
        home       : function () {
            var width=640;
            var height=356;

            videoTextView.model.set(
                {
                    "img": "img/fashion_background.png",
                    "width"    : width,
                    "height"   : height,
                    "playlist" : "playlist=http://1237028780.rsc.cdn77.org/3449f0e0-aea2-bd77-7a5f-a2f2773dee3c/fashion.bin&bgColor=#FFFFFF",
                    "text": "fashion"
                }
            )
        },

        sport    : function () {
            var width=640;
            var height=356;

            videoTextView.model.set(
                {
                    "img": "img/box.jpg",
                    "width"    : width,
                    "height"   : height,
                    "playlist" : "playlist=http://1237028780.rsc.cdn77.org/820ef576-d217-5032-0416-e4525129e2d3/boxing.bin&amp;bgColor=#FFFFFF",
                    "text": "sport"
                }
            )
        },
        learning : function () {
            var width=640;
            var height=356;

            videoTextView.model.set(
                {
                    "img": "img/yoga.jpg",
                    "width"    : width,
                    "height"   : height,
                    "playlist" : "playlist=http://1237028780.rsc.cdn77.org/000000000-0000-0000-0000-000000000004/yoga.bin&amp;bgColor=#FFFFFF",
                    "text": "learning"
                }
            )
        },
        multi    : function () {
            var width=640;
            var height=356;

            videoTextView.model.set(
                {
                    "img": "img/panda.jpg",
                    "width"    : width,
                    "height"   : height,
                    "playlist" : "playlist=http://1237028780.rsc.cdn77.org/7e848e68-c37e-9b51-1896-bf2f06f52fdf/panda.bin&amp;bgColor=#FFFFFF",
                    "text": "multiplication"
                }
            )
        },
        chars    : function () {

            videoTextView.model.destroy();
            $("#content").empty();
            CharsView.view.render();
        },
        contacts : function () {

        }

    });
    var router = new MyRouter();
});