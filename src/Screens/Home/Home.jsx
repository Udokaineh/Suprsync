import Layout from "../../Component/Layout"
import FrequentQuestion from "./FrequentQuestions"
import Main from "./Main"
import OrgGrowth from "./OrgGrowth"
import Feature from "./Feature"
import QuickGuide from "./QuickGuide"
import AIEra from "./AIEra"
import Feedback from "./Feedback"
import MobileExp from "./MobileExp"
import Plan from "./Plan"
import "./Home.css"


const Home = () => {
  return (
    <Layout withHeader={false} withFooter={true}>
      <div>
        <Main />
        <OrgGrowth />
        <Feature />
        <AIEra />
        <QuickGuide />
        <Feedback />
        <MobileExp />
        <Plan />
        <FrequentQuestion />
      </div>
    </Layout>
  )
}

export default Home