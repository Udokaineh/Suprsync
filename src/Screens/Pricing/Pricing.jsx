import Layout from "../../Component/Layout"
import Main from "./Main"
import QuickGuide from "../Home/QuickGuide"
import FrequentQuestion from "../Home/FrequentQuestions"
import Feedback from "../Home/Feedback"


const Pricing = () => {
  return (
    <Layout withHeader={false}>
        <Main />
        <QuickGuide />
        <Feedback />
        <FrequentQuestion />
    </Layout>
  )
}

export default Pricing