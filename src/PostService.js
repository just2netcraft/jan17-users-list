class PostService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts?userId=";
    }

    getUserPosts(userId){
        return $.get(this.url + userId);
    }

}

const postService = new PostService();
