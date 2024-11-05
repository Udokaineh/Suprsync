import Layout from "../../Component/Layout";
import Main from "./Main";
import FrequentQuestion from "../Home/FrequentQuestions";


const ContactUs = () => {
    return (
        <Layout withFooter={false}>
            <Main />
            <FrequentQuestion />
        </Layout>
    )
}


export default ContactUs;