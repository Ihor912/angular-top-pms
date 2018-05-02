import { Project, Member } from '../common/protocols';


export class ProjectsService {
    public projects: Array<Project> = [
        {
            name: 'VizLocal',
            type: 'web',
            owner: 'Marian BB',
            members: new Array<Member>()
        },
        {
            name: 'Elicall',
            type: 'mobile',
            owner: 'Volodia DD',
            members: new Array<Member>()
        },
        {
            name: 'Divtricks',
            type: 'web',
            owner: 'Volodia DD',
            members: new Array<Member>()
        }
    ];
}
