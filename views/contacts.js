define( function () {

    return function () {
        var self   = this;
        var Model  = Backbone.Model.extend({
            defaults : {

            }
        });
        self.model = new Model();

        var View  = Backbone.View.extend({
            el         : "#content",
            model      : self.model,
            initialize : function () {

                this.template = _.template($("#contacts").html());
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