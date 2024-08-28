import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy - zitranet",
};

const PrivacyPage = () => {
  return (
    <main>
      <div className=" px-4 w-full md:w-[80%] lg:w-[55%] mx-auto mt-10 flex flex-col gap-8">
        <div className="flex items-center justify-center flex-col gap-2 md:gap-3">
          <h1 className="text-xl md:text-3xl font-extrabold text-zinc-800 text-center">
            Cookies Policy
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-neutral-900 text-center">
            This Cookies Policy explains how Zitranet uses cookies and similar
            tracking technologies on our website. By using our website, you
            agree to the use of cookies as outlined in this policy. If you do
            not agree with our use of cookies, you should adjust your browser
            settings or refrain from using our website.
          </p>
        </div>
        <div className=" w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              1. What are Cookies?
            </h1>
            <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
              Cookies are small text files that are placed on your computer,
              smartphone, or other device when you visit a website. They are
              widely used to enhance your browsing experience, remember your
              preferences, and provide insights to improve our website's
              performance and functionality.
            </p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              2. Types of Cookies We Use
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Essential Cookies: These cookies are necessary for the proper
                functioning of our website. They enable you to navigate our site
                and use its features, such as accessing secure areas.
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Performance Cookies: These cookies collect information about how
                visitors use our website, such as which pages are visited most
                often. This data helps us improve the website&apos;s performance
                and user experience.
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Functionality Cookies: These cookies allow our website to
                remember choices you make (such as your username, language, or
                region) and provide enhanced, more personalized features.
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Targeting/Advertising Cookies: These cookies are used to deliver
                content that is more relevant to you and your interests. They
                may also be used to limit the number of times you see an
                advertisement and measure the effectiveness of advertising
                campaigns.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              3. How We Use Cookies
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                We use cookies to:
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Enhance Website Functionality: Improve the user experience by
                remembering your preferences and settings.
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Analyze Website Traffic: Monitor how visitors interact with our
                website to identify trends and optimize performance.
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
                Personalize Content and Ads: Provide customized content and
                advertisements based on your browsing history and preferences.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              4. Third-Party Cookies
            </h1>
            <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
              In addition to our cookies, we may also use third-party cookies
              provided by trusted partners to track your usage, provide
              advertisements, and improve website functionality. These
              third-party cookies are subject to the respective privacy policies
              of these external services.
            </p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              5. Managing and Disabling Cookies
            </h1>
            <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
              You have the option to manage or disable cookies through your
              browser settings. Most browsers allow you to refuse cookies,
              delete cookies, or alert you when a cookie is being stored on your
              device. However, please note that disabling cookies may affect
              your ability to use certain features of our website.
            </p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              6. Consent to Use of Cookies
            </h1>
            <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
              By continuing to use our website, you consent to our use of
              cookies as described in this policy. If you do not consent to our
              use of cookies, you must either disable cookies in your browser
              settings or refrain from using our website.
            </p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-xl font-extrabold md:text-2xl text-zinc-800">
              7. Updates to This Cookies Policy
            </h1>
            <p className="text-[14px] md:text-[15px] font-medium text-neutral-900">
              We may update this Cookies Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We encourage you to review this policy
              periodically to stay informed about our use of cookies.
            </p>
          </div>
        </div>
        <div className="text-sm font-semibold">Last Updated: August 2024</div>
      </div>
    </main>
  );
};

export default PrivacyPage;
