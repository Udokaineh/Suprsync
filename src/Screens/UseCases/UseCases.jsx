import Layout from "../../Component/Layout";
import Main from "./Main";
import Workflow from "./Workflow";


const UseCases = () => {
    return (
        <Layout withHeader={false} withFooter={true}>
            <Main />
            <Workflow />
        </Layout>
    )
}


export default UseCases