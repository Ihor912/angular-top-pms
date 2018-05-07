export interface Project {
    id: string;
    name: string;
    type: string;
    owner: string;
    members: Array<Member>;
}

export interface Member {
    name: string;
}
