class UsersListComponent {
    constructor(usersList){
        this.usersList = usersList;
    }

    renderUsers(){
       let users = this.usersList
           .map( user => `<li data-user-id="${user.id}" data-user-name="${user.name}">${user.name}</li>` );

       return users.join("");
    }

    onUserClick(e){
        this.onUserCallback(e.target.dataset.userId, e.target.dataset.userName);
    }

    onUserSelected(callback){
        this.onUserCallback = callback;
    }

    render(){
        let $html = $(`
<nav>
    <h3>Users</h3>
    <ul>
        ${ this.renderUsers() }
    </ul>
</nav>
`);

        $html.find("li").on("click", this.onUserClick.bind(this) );

        return $html;
    }
}
