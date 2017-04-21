define(function () {

    return function () {
        var self     = this;
        var char     = Backbone.Model.extend({
            defaults : {
                "charImg"  : "img/cams.png",
                "charText" : "Количество камер от – 3 до 32"
            }
        });
        var charList = Backbone.Collection.extend({
            model : char
        });

        self.model = new char();

        var charView = Backbone.View.extend({

            model      : self.model,
            initialize : function () {

                this.template = _.template($("#charBlock").html());
                this.render();
            },
            render     : function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }

        });

        var View = Backbone.View.extend({
            el     : "#content",
            render : function () {
                this.collection.each(function (char) {
                    var view = new charView({model : char});
                    this.$el.append(view.render().el);
                }, this);
                return this;
            }


        });

        var charList = new charList([
                {
                    "charImg"  : "img/cams.png",
                    "charText" : "Количество камер от – 3 до 32"
                },
                {
                    "charImg"  : "img/cam_settings.png",
                    "charText" : "Поддерживаемые камеры – от дешевых веб-камер до профессиональных студийных"
                },
                {
                    "charImg"  : "img/focus.png",
                    "charText" : "Автоматическая калибровка и выравнивание картинок"
                },
                {
                    "charImg"  : "img/fon_delete.png",
                    "charText" : "Возможность автоматического распознавания и удаления фона (опционально)"
                },
                {
                    "charImg"  : "img/sync.png",
                    "charText" : "Идеальная автоматическая синхронизация видеодорожек по звуку"
                }, {
                    "charImg"  : "img/cloud.png",
                    "charText" : "Облачная инфраструктура для хранения, управления и трансляции видео по всему миру"
                },
                {
                    "charImg"  : "img/rotation.png",
                    "charText" : "Конечный пользователь сам контролирует и управляет видеороликом в реальном времени (поворот, зум, перемещение)"
                },
                {
                    "charImg"  : "img/visual_comments.png",
                    "charText" : "Инструменты визуальных комментариев"
                },
                {
                    "charImg"  : "img/www.png",
                    "charText" : "Простая интеграция в любой веб-сайт"
                }, {
                    "charImg"  : "img/user.png",
                    "charText" : "Клиентский плейер построен на базе стандартных видео-кодеков. Таким образом, клиент взаимодействует с видео в любом веб-браузере без необходимости установки какого-либо дополнительного программного обеспечения, плагинов, кодеков и т.д."
                },
                {
                    "charImg"  : "img/devices.png",
                    "charText" : "Работа плейера на всех основных устройствах. Плейеры – Flash, HTML5, iOs, Android, PC, MAC."
                },
                {
                    "charImg"  : "img/share.png",
                    "charText" : "Работа в социальных сетях"
                }
            ]
        );

        self.view = new View({collection : charList});

    }

});