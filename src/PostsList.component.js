class PostsListComponent {
    constructor(postsList, userName){
        this.postsList = postsList;
        this.userName = userName;
    }

    renderPosts(){
       let posts = this.postsList
           .map( post => `<li data-posts-id="${post.id}"><h2>${post.id}) ${post.title}</h2><p>${post.body}</p></li>` );

       return posts.join("");
    }

    onUserClick(e){
        this.onUserCallback(e.target.dataset.postId);
    }

    onUserSelected(callback){
        this.onUserCallback = callback;
    }

    render(){
        let $html = $(`
<section>
    <div class="wrapper">
        <div class="seperator"></div>
        <h2>Posts for ${ this.userName }</h2>
        <ul class="scrollbar">
            ${ this.renderPosts() }
        </ul>
    </div>
</section>
`);

        return $html;
    }
}
