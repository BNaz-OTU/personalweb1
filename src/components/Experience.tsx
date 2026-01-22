import React from "react";
import Image from "next/image";
import acf from "../assets/icons/acf.png";
import cot from "../assets/icons/City-of-Toronto.webp";
import toyota from "../assets/icons/toyota.png";
import hp from "../assets/icons/hp.png";

const Experience = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-60" id="experience">
      <h1 className="text-orange-400 text-6xl max-w-[500px] mx-auto font-semibold my-12 mb-20 text-center">
        Work Experience
      </h1>

      <div className="px-6 grid grid-cols-1 gap-14 place-items-center">
        {/* BOX 1 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row justify-between px-4 py-8 content-center">
            <Image
              src={toyota}
              alt="ACF"
              className="w-auto h-[180px] mr-6 rounded-full"
            />

            <div className="flex flex-col pl-6 pr-0 w-full">
              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-4xl font-bold text-white/80">
                  Toyota Canada Inc.
                </h2>
              </div>

              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-sm font-bold italic text-white/80">
                  Cloud Engineer Intern
                </h2>
              </div>

              <div className="pb-1.5">
                <h2 className="text-sm font-bold italic text-white/80">
                  January 2026 - Present
                </h2>
              </div>

              <div className="w-full max-md:hidden">
                <h2 className="text-xs text-white/80">
                  Assist in the provisioning, configuration, and lifecycle
                  management of AWS infrastructure components, including EC2
                  instances, S3 storage, RDS databases, and VPC networking
                  resources.
                  <br />
                  <br />
                  Automate operational workflows by developing and maintaining
                  infrastructure and management scripts using AWS CLI, Python,
                  CloudFormation and Terraform.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row justify-between px-4 py-8 content-center">
            <Image
              src={cot}
              alt="ACF"
              className="w-auto h-[180px] mr-6 rounded-full"
            />

            <div className="flex flex-col pl-6 pr-0 w-full">
              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-4xl font-bold text-white/80">
                  City of Toronto
                </h2>
              </div>

              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-sm font-bold italic text-white/80">
                  Software Engineer Intern
                </h2>
              </div>

              <div className="pb-1.5">
                <h2 className="text-sm font-bold italic text-white/80">
                  September 2025 - December 2025
                </h2>
              </div>

              <div className="w-full max-md:hidden">
                <h2 className="text-xs text-white/80">
                  Utilized Red Hat OpenShift Container Platform and Kubernetes
                  to architect, deploy, and orchestrate containerized
                  applications across on-premises server environments.
                  <br />
                  <br />
                  Implemented a comprehensive monitoring solution using
                  Prometheus and Grafana to collect, visualize, and analyze
                  performance metrics for applications running on the OpenShift
                  Container Platform.
                  <br />
                  <br />
                  Automated the secure management of secrets, keys, and
                  environment variables with HashiCorp Vault and Bash scripting,
                  while orchestrating and monitoring CI/CD pipelines using Jira
                  and GitLab to enforce DevSecOps best practices and security
                  compliance.
                  <br />
                  <br />
                  Configured and administered Apache web servers with SSL
                  certificates to ensure secure operations, while implementing
                  virtual hosting to optimize resource utilization and
                  application management.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row justify-between px-4 py-8 content-center">
            <Image
              src={acf}
              alt="ACF"
              className="w-auto h-[180px] mr-6 rounded-full"
            />

            <div className="flex flex-col pl-6 pr-0 w-full">
              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-4xl font-bold text-white/80">
                  ACF Associates Inc.
                </h2>
              </div>

              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-sm font-bold italic text-white/80">
                  Software Developer Intern
                </h2>
              </div>

              <div className="pb-1.5">
                <h2 className="text-sm font-bold italic text-white/80">
                  January 2025 - Present
                </h2>
              </div>

              <div className="w-full max-md:hidden">
                <h2 className="text-xs text-white/80">
                  Collaborated with cross-functional teams to design, develop,
                  and maintain a performance management software solution.
                  Leveraged React.JS and JavaScript to create dynamic pages for
                  visualizing key metrics. Engineered optimized PostgreSQL
                  queries for legacy data migration, ensuring seamless
                  integration and deployment.
                  <br />
                  <br />
                  Delivered bi-weekly presentations to senior leadership,
                  highlighting new features, status updates, and feedback to
                  improve application features.
                  <br />
                  <br />
                  Developed an expense reporting feature that saved the company
                  thousands of dollars. Utilized React.JS, TypeScript, and CSS
                  for a seamless UI/UX. Engineered the backend with Python,
                  Flask, Pandas, and PostgreSQL to efficiently manage data
                  processing and network requests.
                  <br />
                  <br />
                  Leveraged Microsoft Office tools to create detailed
                  documentation for cross-departmental use, supporting customer
                  onboarding and enhancing internal understanding of the
                  performance management application's features.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* BOX 4 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row justify-between px-4 py-8 content-center">
            <Image
              src={hp}
              alt="ACF"
              className="w-auto h-[180px] mr-6 rounded-full"
            />

            <div className="flex flex-col pl-6 pr-0 w-full">
              <div className="pb-1.5 max-md:pb-10">
                <h2 className="text-4xl font-bold text-white/80">
                  Healthy Planet
                </h2>
              </div>

              <div className="pb-1.5 max-md:pb-10">
                <h2 className="text-sm font-bold italic text-white/80">
                  Supervisor / Sales Associate
                </h2>
              </div>

              <div className="pb-1.5">
                <h2 className="text-sm font-bold italic text-white/80">
                  May 2020 - October 2024
                </h2>
              </div>

              <div className="w-full max-md:hidden">
                <h2 className="text-xs text-white/80">
                  Led my team by promoting collaboration, training new
                  employees, assigning tasks for efficient store maintenance,
                  resolving issues, and setting high customer service standards
                  through example.
                  <br />
                  <br />
                  Diagnosed and resolved both software and hardware issues,
                  minimizing system downtime and enhancing performance to ensure
                  a seamless customer experience and uninterrupted staff
                  workflows, thereby driving improvements in operational
                  efficiency.
                  <br />
                  <br />
                  Enhanced operational efficiency by streamlining product
                  expiration tracking, reducing expired items by 45%, and
                  optimizing shelving methods, saving 60% more time during
                  stocking.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
