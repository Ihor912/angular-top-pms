import { Project, Member } from '../common/protocols';


export class ProjectsService {
    public projects: Array<Project> = [
        {
            id: '0',
            name: 'VizLocal',
            type: 'web',
            owner: 'Marian BB',
            members: new Array<Member>()
        },
        {
            id: '1',
            name: 'Elicall',
            type: 'mobile',
            owner: 'Volodia DD',
            members: new Array<Member>()
        },
        {
            id: '2',
            name: 'Divtricks',
            type: 'web',
            owner: 'Volodia DD',
            members: new Array<Member>()
        }
    ];

    public getProject(id: string): Project {
        return this.projects.find(p => p.id === id);
    }
}
