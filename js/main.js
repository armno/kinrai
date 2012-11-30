(function($) {

    var Recipe = Backbone.Model.extend({
        defaults : function() {
            return {
                name : "",
                menu : ""
            }
        }
    });

    var RecipeList = Backbone.Collection.extend({
        model : Recipe
    });


    var kang = new Recipe({
        name : "ArmNo",
        menu : "Kang Kai"
    });

    var recipes = new RecipeList([kang]);

    console.log(recipes.toJSON()); 

    
})(jQuery);
