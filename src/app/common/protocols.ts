export interface Project {
    id: string;
    name: string;
    type: string;
    owner: string;
    members: Array<Member>;
    taskId: string;
}

export interface Member {
    name: string;
}

export interface Task {
    id: string;
    type: string;
    name: string;
}
