import Layout from "../../Component/Layout";
import Future from "./Future";
import Main from "./Main";
import "./Features.css"

const Features = () => {
    return (
        <Layout withHeader={false} withFooter={true}>
            <Main />
            <Future />
        </Layout>
    )
}

export default Features