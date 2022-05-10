const Data = (props: any) => {
    return(
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.year}</td>
            <td>{props.data.lang}</td>
            <td><a href={"https://"+props.data.link}>{props.data.link}</a></td>
            <td><span className="statusCell">{props.data.status}</span></td>
            <td>{props.data.dedication} hours</td>
        </tr>
    );
}

const Projects = ({ projectData }: {projectData: any}) => {
    const sum = projectData.reduce((a: any,b: any) => a + (b['dedication']), 0);
    return(
        <div className="projects">
            <table>
                <thead>
                    <tr>
                        <td>Project</td>
                        <td>Year</td>
                        <td>Lang</td>
                        <td>Link</td>
                        <td>Status</td>
                        <td>Dedication</td>
                    </tr>
                </thead>
                <tbody>
                    {projectData.map((data: any) => (<Data key={data.id} data={data} />))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{sum} hours</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Projects;