class AppComponent {

    appendUserPage(id){
        let userPage = new UserPageComponent(id);
        this.element.append( userPage.render() );
    }

    showCurrentUserPage(id, name) {
        let userPage = new UserPageComponent(id, name);
        let currentUser = this.element.find('main');
        if (currentUser.length > 0) {
            currentUser.remove();
        }

        this.element.append( userPage.render() );
    }

    getUsersList() {
        userService
            .getAllUsers()
            .then( this.appendUsersList.bind(this) );
    }

    appendUsersList(list){
        let usersList = new UsersListComponent(list);
        usersList.onUserSelected( this.showCurrentUserPage.bind(this) );
        this.element.append( usersList.render() );
    }

    render(){
        this.element = $(`<div></div>`);
        this.getUsersList();
        return this.element;
    }
}

function createApp(){
    let app = new AppComponent();
    $(document.body).append( app.render() );
}

createApp();
