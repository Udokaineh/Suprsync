import Questions from "../../Component/Question/Questions";


const FrequentQuestion = () => {

    const questions = [
        "What is SuprSync?",
        "What subscription plans does SuprSync offer?",
        "Can I try SuprSync before committing to a subscription?",
        "Can I get assistance if I encounter any issues with SuprSync?",
        "Does SuprSync offer customization options for businesses with specific needs?",
    ];

    const responses = [
        "SuprSync is a comprehensive workforce management platform designed to streamline operations for businesses of all sizes. It offers features such as employee scheduling, inventory management, task assignment, and AI assistance to optimize productivity and efficiency.",

        "SuprSync offers a range of subscription plans to suit different business needs. Our plans vary in features and pricing, allowing you to choose the one that best fits your requirements. Visit our  Pricing page to view our available plans and their respective features.",

        "Yes! We offer a free trial period for new users to explore SuprSync and test out its features before making a commitment. Simply sign up for an account, and you'll have access to our platform during the trial period.",

        "Absolutely! Our dedicated customer support team is here to assist you with any questions or issues you may have regarding SuprSync. Feel free to reach out to us via email, or contact us on Instagram or Twitter, and we'll be happy to help resolve your concerns promptly.",

        "Yes! We understand that every business is unique, which is why we offer customization options for businesses with specific requirements. Whether you need custom reports, integrations with other tools, or tailored features, our team can work with you to create a solution that meets your needs."
      ];
    

    return (
        <div>
            <Questions questions={questions} responses={responses} />
        </div>
    )
}

export default FrequentQuestion;