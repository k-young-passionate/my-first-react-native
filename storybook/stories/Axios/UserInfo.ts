class UserInfoType {
    id: string;
    name: string;
    job: string;
    hobby: Array<string>;
    
    constructor(
        id: string,
        name: string,
        job: string,
        hobby: Array<string>,
    ) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.hobby = hobby;
    }
}

export default UserInfoType