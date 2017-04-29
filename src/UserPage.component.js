class UserPageComponent {
    constructor(userId, userName){
        this.userId = userId;
        this.userName = userName;
    }

    getUser() {
        userService
            .getUser(this.userId)
            .then( this.showUserDetails.bind(this) );
    }

    appendUserDetails(user){
        let userComponent = new UserDetailsComponent(user);
        this.element.append( userComponent.render() );
    }

    showUserDetails(user) {
        let userComponent = new UserDetailsComponent(user);
        postService
            .getUserPosts(this.userId)
            .then( this.showUserPosts.bind(this) );
        this.element.append( userComponent.render() );
    }

    showUserPosts(list) {
        let postsList = new PostsListComponent(list, this.userName);
        this.element.append( postsList.render() );
    }

    render(){
        this.element = $(`<main></main>`);
        this.getUser();
        return this.element;
    }
}
