import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of use - zitranet",
};
const TermsPage = () => {
  const terms = [
    {
      id: 1,
      label: "Acceptance of Terms",
      description: `By accessing or using Our website and services, you acknowledge that you have read,
           understood, and agree to be bound by these Terms of Use, as well as any additional terms,
           conditions, and policies referenced herein or available by hyperlink. These Terms of Use apply
           to all users of the site, including but not limited to visitors, customers, vendors, and partners.`,
    },
    {
      id: 2,
      label: "Changes to Terms",
      description: `Zitranet reserves the right to modify, update, or change these Terms of Use at any time without
                prior notice. Your continued use of our website or services following any changes constitutes
                your acceptance of the new terms. It is your responsibility to check this page periodically for
                updates`,
    },
    {
      id: 3,
      label: " Services and Products",
      description: `Zitranet provides a range of services, including but not limited to chatbot technology,
                    consultation, maintenance, web development, and Salesforce administration. The specific terms
                    and conditions governing the use of each service or product may be outlined in a separate
                    agreement. In case of any conflict between these Terms of Use and the specific service
                    agreement, the service agreement shall prevail.
`,
    },
    {
      id: 4,
      label: "User Obligations",
      description: `As a user of Our services, you agree to:
                Provide accurate and current information when using our services.
                Maintain the confidentiality of any account credentials and accept responsibility for all activities
                that occur under your account.
                Do not use our services for any unlawful or prohibited purposes.
                Refrain from infringing on the intellectual property rights of others.
                Not attempt to gain unauthorized access to our systems or engage in activities that could harm
                or disrupt our services.
           `,
    },
    {
      id: 5,
      label: "Intellectual Property",
      description: `All content, materials, and services provided by Zitranet, including but not limited to text,
                        graphics, logos, images, software, and technology, are the property of Zitranet or its licensors
                        and are protected by applicable intellectual property laws. You may not use, reproduce,
                        distribute, or create derivative works from our content without explicit written permission from
                        Zitranet.
                `,
    },
    {
      id: 6,
      label: "Privacy Policy",
      description: `Your use of Our services is also governed by our Privacy Policy, which outlines how we
                    collect, use, and protect your personal information. By using our services, you consent to the
                    data practices described in our Privacy Policy.
                `,
    },
    {
      id: 7,
      label: "Limitation of Liability",
      description: `To the fullest extent permitted by law, Zitranet shall not be liable for any direct, indirect,
                    incidental, special, consequential, or punitive damages arising out of or related to your use of
                    our services or these Terms of Use. This includes, but is not limited to, damages for loss of
                    profits, goodwill, use, data, or other intangible losses.
                `,
    },
    {
      id: 8,
      label: "Indemnification",
      description: `You agree to indemnify, defend, and hold harmless Zitranet, its affiliates, officers, directors,
           employees, agents, and partners from and against any claims, liabilities, damages, losses, and
           expenses arising out of or related to your use of our services or violation of these Terms of Use.
                `,
    },
    {
      id: 9,
      label: "Termination",
      description: `Zitranet reserves the right to terminate or suspend your access to our services, without notice,
                    for conduct that we believe violates these Terms of Use or is harmful to other users, us, or third
                    parties, or for any other reason in our sole discretion.

                `,
    },
    {
      id: 10,
      label: "Governing Law",
      description: `These Terms of Use are governed by and construed under the laws of Your Jurisdiction,
                        without regard to its conflict of law principles. Any disputes arising out of or related to these
                        Terms of Use or your use of our services shall be resolved in the courts located within Your
                        Jurisdiction.
                `,
    },
    {
      id: 11,
      label: "Entire Agreement",
      description: `These Terms of Use constitute the entire agreement between you and Zitranet concerning your
            use of our services and supersede all prior agreements, understandings, or representations,
            whether written or oral, related to the subject matter herein.
                `,
    },
    {
      id: 12,
      label: "Severability",
      description: `If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining
                provisions shall remain in full force and effect.
                By using Our services, you agree to these Terms of Use and confirm your understanding
                and acceptance of them.
                `,
    },
  ];

  return (
    <main>
      <div className=" px-4 w-full md:w-[80%] lg:w-[55%] mx-auto mt-10 flex flex-col gap-8">
        <div className="flex items-center justify-center flex-col gap-2 md:gap-3">
          <h1 className="text-xl md:text-3xl font-extrabold text-zinc-800 text-center">
            Terms of Use
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-neutral-900 text-center">
            By accessing and using our website, services, and products, you
            agree to comply with and be bound by the following Terms of Use.
            Please read these terms carefully before using our services. If you
            do not agree to these terms, you may not use our services.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          {terms.map((term) => (
            <div key={term.id} className="w-full flex flex-col gap-1">
              <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
                {term.id}. {term.label}
              </h1>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                {term.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="text-sm font-semibold">Last Updated: August 2024</div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
