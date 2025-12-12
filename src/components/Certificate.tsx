import React from "react";
import Image from "next/image";
import harvard from "../assets/icons/harvard.png";
import microsoft from "../assets/icons/microsoft.png";
import aws_prac from "../assets/icons/aws-certified-cloud-practitioner.png";
import aws_soln from "../assets/icons/aws-certified-solutions-architect-associate copy.png";

const Certificate = () => {
  return (
    // <h1 className="text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center">
    //   Certificates
    // </h1>

    <div className="max-w-[1200px] mx-auto mt-60">
      <h1 className="text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12 mb-20 text-center">
        Certificates
      </h1>

      {/* <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-300">Me</span>
      </h1> */}

      <div className="px-6 grid grid-cols-1 gap-8 place-items-center">
        {/* BOX 5 */}
        <a
          href="https://www.credly.com/badges/86e63b84-98cb-4037-8c7d-0683dcdea4b6/public_url"
          target="_blank"
        >
          <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row justify-between px-6 py-8 content-center">
              <Image
                src={aws_soln}
                alt="book"
                className="w-auto h-[130px] mr-6"
              />

              <div className="flex flex-col px-6 w-full">
                <div className="pb-2">
                  <h2 className="text-4xl font-bold text-white/80">
                    AWS Certified Solutions Architect - Associate
                  </h2>
                </div>

                <div className="pb-2 max-sm:hidden">
                  <h2 className="text-lg font-bold italic text-white/80">
                    Amazon Web Services
                  </h2>
                </div>

                <div className="w-[90%] max-md:hidden">
                  <h2 className="text-xs font-bold text-white/80">
                    Demonstrated strong proficiency in designing secure,
                    scalable, and cost-efficient cloud architectures. Gained
                    hands-on knowledge of key AWS services including EC2, S3,
                    RDS, DynamoDB, Lambda, API Gateway, VPC, IAM,
                    CloudFormation, CloudWatch, and ELB. Developed the ability
                    to architect highly available, fault-tolerant, and resilient
                    solutions aligned with the AWS Well-Architected Framework.
                    Strengthened expertise in selecting appropriate AWS
                    services, implementing security best practices, optimizing
                    performance, and applying effective cost-management
                    strategies across cloud environments.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* BOX 4 */}
        <a
          href="https://certificates.cs50.io/e93a5b9e-81e5-4adf-bd07-ca25215364a6.pdf?size=letter"
          target="_blank"
        >
          <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row justify-between px-6 py-8 content-center">
              <Image
                src={harvard}
                alt="book"
                className="w-auto h-[130px] mr-6"
              />

              <div className="flex flex-col px-6 w-full">
                <div className="pb-2">
                  <h2 className="text-4xl font-bold text-white/80">
                    CS50AI Introduction to Artificial Intelligence with Python
                  </h2>
                </div>

                <div className="pb-2 max-sm:hidden">
                  <h2 className="text-lg font-bold italic text-white/80">
                    Harvard University
                  </h2>
                </div>

                <div className="w-[90%] max-md:hidden">
                  <h2 className="text-xs font-bold text-white/80">
                    Completed the CS50AI: Introduction to Artificial
                    Intelligence with Python certification, demonstrating a
                    strong foundational understanding of modern AI concepts and
                    their practical implementation. Gained hands-on experience
                    with key technologies and techniques including search
                    algorithms, constraint satisfaction, machine learning,
                    neural networks, reinforcement learning, natural language
                    processing, and Bayesian inference using Python and
                    libraries such as scikit-learn, TensorFlow, and NumPy.
                    Developed the ability to build intelligent systems capable
                    of classification, optimization, decision-making, and
                    language understanding. Strengthened skills in designing,
                    training, evaluating, and refining AI models while applying
                    theoretical principles to real-world problem-solving.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* BOX 3 */}
        <a
          href="https://www.credly.com/badges/11abc807-9c46-45e6-abcc-cf06001c1650/public_url"
          target="_blank"
        >
          <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row justify-between px-6 py-8 content-center">
              <Image
                src={aws_prac}
                alt="book"
                className="w-auto h-[130px] mr-6"
              />

              <div className="flex flex-col px-6 w-full">
                <div className="pb-2">
                  <h2 className="text-4xl font-bold text-white/80">
                    AWS Certified Cloud Practitioner
                  </h2>
                </div>

                <div className="pb-2 max-sm:hidden">
                  <h2 className="text-lg font-bold italic text-white/80">
                    Amazon Web Services
                  </h2>
                </div>

                <div className="w-[90%] max-md:hidden">
                  <h2 className="text-xs font-bold text-white/80">
                    Obtained the AWS Certified Cloud Practitioner certification,
                    demonstrating a strong foundational understanding of AWS
                    cloud concepts, global infrastructure, and core service
                    offerings. Gained knowledge of essential AWS technologies
                    including EC2, S3, RDS, DynamoDB, Lambda, CloudFront, IAM,
                    VPC, CloudWatch, and Billing & Cost Management. Developed
                    proficiency in identifying appropriate AWS services for
                    basic use cases, understanding security and compliance
                    principles, and navigating the shared responsibility model.
                    Strengthened skills in cost optimization, architectural best
                    practices, and interpreting AWS pricing models,
                    service-level agreements, and support plans.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* BOX 2 */}
        <a
          href="https://learn.microsoft.com/en-ca/users/bilalnazar-5518/credentials/7426f209553b1886?ref=https%3A%2F%2Fwww.google.com%2F"
          target="_blank"
        >
          <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row justify-between px-6 py-8 content-center">
              <Image
                src={microsoft}
                alt="book"
                className="w-auto h-[130px] mr-6"
              />

              <div className="flex flex-col px-6 w-full">
                <div className="pb-2">
                  <h2 className="text-4xl font-bold text-white/80">
                    Microsoft Certified: Azure Fundamentals
                  </h2>
                </div>

                <div className="pb-2 max-sm:hidden">
                  <h2 className="text-lg font-bold italic text-white/80">
                    Microsoft
                  </h2>
                </div>

                <div className="w-[90%] max-md:hidden">
                  <h2 className="text-xs font-bold text-white/80">
                    Gained a solid understanding of core cloud concepts and
                    foundational Azure services. Gained hands-on knowledge of
                    key Azure technologies including Azure Virtual Machines,
                    Azure Storage, Azure SQL Database, Azure Functions, Azure
                    App Service, Azure Active Directory (Azure AD), Virtual
                    Networks, Resource Manager (ARM), and Monitor. Developed the
                    ability to design basic cloud solutions with an emphasis on
                    security, governance, compliance, and identity management.
                    Strengthened understanding of cloud pricing, service-level
                    agreements, shared responsibility models, and
                    cost-management strategies within the Azure ecosystem.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* BOX 1 */}
        <a
          href="https://certificates.cs50.io/20ebbcce-1723-4e74-846c-242e16a228d2.pdf?size=letter"
          target="_blank"
        >
          <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row justify-between px-6 py-8 content-center">
              <Image
                src={harvard}
                alt="book"
                className="w-auto h-[130px] mr-6"
              />

              <div className="flex flex-col px-6 w-full">
                <div className="pb-2">
                  <h2 className="text-4xl font-bold text-white/80">
                    CS50P Introduction to Programming with Python
                  </h2>
                </div>

                <div className="pb-2 max-sm:hidden">
                  <h2 className="text-lg font-bold italic text-white/80">
                    Harvard University
                  </h2>
                </div>

                <div className="w-[90%] max-md:hidden">
                  <h2 className="text-xs font-bold text-white/80">
                    Developed a strong foundation in Python and a comprehensive
                    understanding of key coding concepts. My proficiency
                    includes implementing handling exceptions, and writing unit
                    tests, leveraging third-party libraries, validating and
                    extracting data using regular expressions, modeling
                    real-world entities through object-oriented programming and
                    performing file operations.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Certificate;
