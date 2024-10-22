import React from "react";
import Privacy_Image from "../assets/privacy_policy.png";
import { List } from "@/layout/UILayout";
import { EarthLock } from "lucide-react";
export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-screen-lg mx-auto space-y-8 pb-10">
      <div className="flex flex-col gap-2">
        <div className="flex w-full">
          <div className="basis-full md:basis-3/4 p-4 md:p-0">
            <h1 className="text-4xl font-semibold text-zinc-800 dark:text-zinc-50">
              Privacy Policy
            </h1>
            <p className="text-md text-zinc-600 dark:text-zinc-400">
              We Value Your Privacy.
            </p>

            <p className="mt-8">
              Welcome to CodeScript.We are committed to protecting your privacy
              and ensuring that your personal information is handled
              responsibly. This Privacy Policy outlines how we collect, use, and
              protect your information.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-green-600">
                The Information We Collect
              </h1>
              <p className="text-md">
                CodeScript collects information by various methods, including
                information actively provided by its users, IT students, and
                information arising from the platform's usage, such as feedback
                or progress on modules.
              </p>
              <p className="text-md">
                The types of personal information we collect includes:
              </p>

              <List
                items={[
                  "Email Address",
                  "Username",
                  "Other relevant information such as logs or session details",
                ]}
              />
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-green-600">
                How We Use This Information
              </h1>

              <p className="text-md">The information is used to:</p>

              <List
                items={[
                  "Provide students with access to learning modules",
                  "Track progress on JavaScript lessons and skills development",
                  "Improve platform features",
                  "Provide technical support",
                ]}
              />
              <p className="text-md">
                The information collected also helps us in monitoring the
                platform for performance, user engagement, and service quality.
                CodeScript may use anonymous data and research purposes to
                better understand the effectiveness of our learning platform.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-green-600">
                Who We Share This Information With
              </h1>
              <p className="text-md">
                CodeScript does not share personal information with third
                parties except as described in this policy. We do not sell user
                information to third parties.
              </p>

              <p>
                However, please note that some learning modules used on this
                platform are sourced from online educational resources, and we
                do not claim ownership over these materials. Any third-party
                resources utilized within the platform retain their respective
                rights and licensing. We only use these modules to enhance the
                educational experience of IT students. By using these modules,
                the platform and its users abide by the copyright and licensing
                obligations set forth by their original owners.
              </p>
            </div>
          </div>

          <div className="hidden basis-1/2 h-[350px] bg-zinc-100 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-[#272727] rounded-[50px] border border-zinc-300 dark:border-zinc-700 md:grid place-items-center">
            <EarthLock
              size={200}
              className="text-zinc-300 dark:text-green-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
