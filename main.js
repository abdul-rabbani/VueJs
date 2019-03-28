const app = new Vue({
    el: "#app",
    data: {
      //editFriend: null,
      comments: [],
    },
    /*methods: {
      deleteFriend(id, i) {
        fetch("http://rest.learncode.academy/api/vue-5/friends/" + id, {
          method: "DELETE"
        })
        .then(() => {
          this.friends.splice(i, 1);
        })
      },
      updateFriend(friend) {
        fetch("http://rest.learncode.academy/api/vue-5/friends/" + friend.id, {
          body: JSON.stringify(friend),
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          this.editFriend = null;
        })
      }
    },*/
    mounted() {
      fetch("http://localhost:9090/getcomments")
        .then(response => response.json())
        .then((data) => {
			console.log(data);
          this.comments = data;
        })
    },
    template: `
    <div>
	
	
       <li v-for="comment, i in comments">
	    {{comment.comments}}
		
        
      </li> 
    </div>
    `,
})


var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Domain Comments!'
  }
})


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})


