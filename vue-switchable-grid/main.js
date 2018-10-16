let app = new Vue({

    el: "#app",

    data: {
        show: 'grid',
        apiRequest: new XMLHttpRequest(),
        searchTerm: '',
        submittedSearch:'',
        cats: {},
        gifs: {},
      /*  height: '100px',
        width: '100px', */




    },

    computed: {

        showGrid: function () {
            return this.show == 'grid';
        },

        showList: function () {
            return this.show == 'list';
        },

        computedWidth: function () {
          return this.width;
        },

        computedHeight: function () {
          return this.height;
        }
    },

  /*  created: function () {

        // Format a url
        let url = 'http://api.giphy.com/v1/gifs/search?q=' + this.searchterm + '&api_key=k1nTqjTDJVC7jlB5Xi36w8FkNFyJ6Gpr&limit=20'


        // Fetch from the url
        this.apiRequest.onload = this.onSuccess;
        this.apiRequest.onerror = this.onError;
        this.apiRequest.open('get', url, true);
        //this.apiRequest.setRequestHeader('x-api-key', 'k1nTqjTDJVC7jlB5Xi36w8FkNFyJ6Gpr');
        this.apiRequest.send();

    }, */

    methods: {

        pickGrid: function () {
            this.pickView('grid');
        },

        pickList: function () {
            this.pickView('list');
        },

        pickView: function (style) {
            this.show = style;
        },

        submit: function () {
          this.searchTerm=this.submittedSearch;
          // Format a url
          let url = 'http://api.giphy.com/v1/gifs/search?&q='+ this.searchTerm + '&api_key=k1nTqjTDJVC7jlB5Xi36w8FkNFyJ6Gpr&limit=20';


          // Fetch from the url
          this.apiRequest.onload = this.onSuccess;
          this.apiRequest.onerror = this.onError;
          this.apiRequest.open('get', url, true);
          //this.apiRequest.setRequestHeader('x-api-key', 'k1nTqjTDJVC7jlB5Xi36w8FkNFyJ6Gpr');
          this.apiRequest.send();
        },

        onError: function () {
            console.log("oops!");
        },

        onSuccess: function () {

            if (this.apiRequest.status == "200") {
                this.cats = (JSON.parse(this.apiRequest.responseText)).data;

            }
          //}
            else {
                this.onError();
            }


      },

    /*  changeSize: function () {

          if (this.width == '100px' && this.height== '100px') {
            this.width == '200px';
            this.height == '200px';
            return;
          }
          else {
            this.width=='100px';
            this.height=='100px';
            return;
          }
      } */

    }

});
