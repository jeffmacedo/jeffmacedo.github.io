define( function () {

    return function () {

        var self   = this;
        var Model  = Backbone.Model.extend({
            defaults : {
                "width"    : "600",
                "height"   : "400",
                "video"    : "./video/AMmultiscreens.NEW.swf.download",
                "playlist" : "playlist=http://1237028780.rsc.cdn77.org/7e848e68-c37e-9b51-1896-bf2f06f52fdf/panda.bin&amp;bgColor=#FFFFFF",
                "text"     : "bla-bla-bla"
            }
        });
        self.model = new Model();

        var View  = Backbone.View.extend({
            el         : "#menu",
            model      : self.model,
            initialize : function () {

                this.template = _.template($("#menu").html());
                this.render();
            },
            render     : function () {
                var json = this.model.toJSON();
                var view = this.template(json);
                this.$el.html(view);
            }

        });
        self.view = new View();

    }





});