import { Project, Member } from '../common/protocols';


export class ProjectsService {
    public projects: Array<Project> = [
        {
            id: 0,
            name: 'VizLocal',
            type: 'web',
            owner: 'Marian BB',
            members: new Array<Member>()
        },
        {
            id: 1,
            name: 'Elicall',
            type: 'mobile',
            owner: 'Volodia DD',
            members: new Array<Member>()
        },
        {
            id: 2,
            name: 'Divtricks',
            type: 'web',
            owner: 'Volodia DD',
            members: new Array<Member>()
        }
    ];

    someFunction() {
        for (let index = 0; index < this.projects.length; index++) {
            const project = this.projects[index];
            console.log(project.name);
        }

        this.projects.forEach(project => console.log(project.name));




        const name = this.projects.find(project => project.id === 1);
        console.log(name);

        const projects = this.projects.filter(project => project.name === 'Vasyl');
        const projectNames = projects.map(project => project.name);


        const galimyName = this.getProject(1);
        console.log(galimyName);
    }

    getProject(id) {
        for (let index = 0; index < this.projects.length; index++) {
            const project = this.projects[index];
            if (project.id === 1) {
                return project.name;
            }
        }
    }
}
