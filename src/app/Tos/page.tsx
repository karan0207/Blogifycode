import Bounded from "@/components/Bounded";
import React from "react";

const page = () => {
  return (
    <Bounded>
      <div className=" absolute -z-10  w-full max-w-xl bg-blue-400/20 filter blur-xl" />

      <div className="mt-16 flex flex-col items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12 text-lg lg:text-sm">
        <div>
          <h1 className="text-3xl mb-4">Terms and Conditions</h1>
          <div className="mb-2">
            <p>1. Introduction</p>
            <p>
              By using Blogify you confirm your acceptance of, and agree to be
              bound by, these terms and conditions.
            </p>
          </div>
          <div className="mb-2">
            <p>2. Agreement to Terms and Conditions</p>
            <p>
              This Agreement takes effect on the date on which you first use the
              Blogify application.
            </p>
          </div>

          <div className="mb-2">
            <p>3. Unlimited Access Software License with Termination Rights</p>
            <p className="mb-1">
              The Blogify Software License facilitates the acquisition of
              Blogify software through a single purchase, granting users
              unrestricted and perpetual access to its comprehensive
              functionalities. Tailored for independent creators, entrepreneurs,
              and small businesses, Blogify empowers users to create compelling
              web pages and online portfolios.
            </p>
            <p className="mb-1">
              This license entails a straightforward and flexible arrangement,
              exempting users from recurring fees or subscriptions. However, it
              is important to acknowledge that the licensor retains the right to
              terminate the license without conditions or prerequisites. This
              termination provision enables the licensor to exercise control
              over software distribution and utilization.
            </p>
            <p>
              Opting for the Blogify Software License enables users to enjoy
              the benefits of the software while recognizing the licensor's
              unrestricted termination rights, which provide adaptability and
              address potential unforeseen circumstances.
            </p>
          </div>

          <div className="mb-2">
            <p>4. Refunds</p>
            <p>
              Due to the nature of digital products, the  Blogify boilerplate
              cannot be refunded or exchanged once access is granted.
            </p>
          </div>

          <div className="mb-2">
            <p>5. Disclaimer</p>
            <p>
              It is not warranted that Blogify will meet your requirements or
              that its operation will be uninterrupted or error free. All
              express and implied warranties or conditions not stated in this
              Agreement (including without limitation, loss of profits, loss or
              corruption of data, business interruption or loss of contracts),
              so far as such exclusion or disclaimer is permitted under the
              applicable law are excluded and expressly disclaimed. This
              Agreement does not affect your statutory rights.
            </p>
          </div>

          <div className="mb-2">
            <p>6. Warranties and Limitation of Liability</p>
            <p>
            Blogify does not give any warranty, guarantee or other term as to
              the quality, fitness for purpose or otherwise of the software.
              Blogify shall not be liable to you by reason of any representation
              (unless fraudulent), or any implied warranty, condition or other
              term, or any duty at common law, for any loss of profit or any
              indirect, special or consequential loss, damage, costs, expenses
              or other claims (whether caused by Blogify's negligence or the
              negligence of its servants or agents or otherwise) which arise out
              of or in connection with the provision of any goods or services by
              Blogify. Blogify shall not be liable or deemed to be in breach
              of contract by reason of any delay in performing, or failure to
              perform, any of its obligations if the delay or failure was due to
              any cause beyond its reasonable control. Notwithstanding contrary
              clauses in this Agreement, in the event that Blogify are deemed
              liable to you for breach of this Agreement, you agree that
              Blogify's liability is limited to the amount actually paid by you
              for your services or software, which amount calculated in reliance
              upon this clause. You hereby release Blogify from any and all
              obligations, liabilities and claims in excess of this limitation.
            </p>
          </div>

          <div className="mb-2">
            <p>7. Responsibilities</p>
            <p>
            Blogify is not responsible for what the user does with the
              user-generated content.
            </p>
          </div>

          <div className="mb-2">
            <p>8. General Terms and Law</p>
            <p>
              This Agreement is governed by the laws of India. You
              acknowledge that no joint venture, partnership, employment, or
              agency relationship exists between you and Blogify as a result of
              your use of these services. You agree not to hold yourself out as
              a representative, agent or employee of Blogify. You agree that
              Blogify will not be liable by reason of any representation, act
              or omission to act by you.
            </p>
          </div>

          <p>Last updated: 14 April 2024.</p>
        </div>
      </div>
    </Bounded>
  );
};

export default page;
