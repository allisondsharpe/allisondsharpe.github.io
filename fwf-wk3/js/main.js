(function($) {

    var itemView = Backbone.View.extend({ // this is the view for our demo
        el: $('body'), // the "el" element is where the "event" takes place,
        //without el, events wouldn't work
        events: { // "events" method triggers the DOM and enables the demo button to work
            'click button#demoBtn': 'newItem'
        },

        initialize: function(){
            _.bindAll(this, 'render', 'newItem'); //_.bindAll method is used as a callback to
            //events and can be used to refer to "this" method more easily

            this.counter = 0; // this is where new numbers will be added,
            // when a new list item is added, the number will increase by one,
            // ex: list item 1, list item 2, etc.
            this.render(); // returns view and calls to the "el" element
        },

        // newItem in click event above
        newItem: function(){
            this.counter++;
            $('ul', this.el).append("<li>List item " +this.counter+ " </li>");
            //this is what we will see in the browser: "List item + number starting from 1"
            // each item will be displayed in numerical order
        }
    });

    var view = new itemView();

})(jQuery);

