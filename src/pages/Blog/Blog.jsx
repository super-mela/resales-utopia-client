import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";

const Blog = () => {
  return (
    <div>
      <TopBanner>Blog</TopBanner>
      <div className="bg-fixed  bg-no-repeat bg-cover min-h-[100vh] text-neutral font-urbanist bg-center">
        <div className="backdrop-blur-sm bg-white/60">
          <div className="flex flex-col gap-5  p-10">
            <article className="mt-3">
              <h3 className="font-bold text-2xl">
                What are the different ways to manage a state in a React
                application?
              </h3>
              <p className="font-medium pl-5">
                Wherefrom the state originates is an important thing to consider
                and can be classified into: Client-side state: Any data that is
                generated and consumed on the client-side like UI state can be
                put into this category. The general rule of thumb while managing
                this sort of state is to see how far the components consuming it
                are in the component tree. We will talk about this sort of
                classification a bit later. A good practice to follow if you are
                unsure of managing this is start with local state and you if
                other components need it too, you can start lifting the state up
                the tree. Note: Never put UI state in the cache. Server-side
                state: This is not be confused by the state that is managed
                between the server and the database. This state is essentially
                any data that is requested by the client from the server via
                REST/GraphQL APIs. This kind of data is not originated in the
                client and hence requires special treatment. We would not like
                to re-fetch this data from the server continuously and would
                like to cache it. Now if you are an expert you can certainly do
                it yourself with Redux/Mobx/Recoil and your own caching
                mechanism. But there are libraries out there that are better
                suited for this job, like ReactQuery/SWR if you are using REST,
                or Apollo if you are using GraphQL. These libraries are
                specialized to handle these kinds of state and optimally caches
                it.
              </p>
            </article>
            <article>
              <h3 className="font-bold text-2xl">
                How does prototypical inheritance work?
              </h3>
              <p className="font-medium pl-5">
                JavaScript is a prototype-based, Object Oriented programming
                language. After the ES6 updates, JavaScript allowed for
                “prototypal inheritance”, meaning that objects and methods can
                be shared, extended, and copied. Sharing amid objects makes for
                easy inheritance of structure (data fields), behavior (functions
                / methods), and state (data values). JavaScript is the most
                common of the prototype-capable languages, and its capabilities
                are relatively unique. When used appropriately, prototypical
                inheritance in JavaScript is a powerful tool that can save hours
                of coding. Today, we want to get you acquainted with prototypal
                inheritance in JavaScript to get you up to date with the ES6
                capabilities.
              </p>

              <br />
            </article>

            <article>
              <h3 className="font-bold text-2xl">
                What is a unit test? Why should we write unit tests?
              </h3>
              <p className="font-medium mt-2 pl-5">
                Unit Testing is a type of software testing where individual
                units or components of a software are tested. The purpose is to
                validate that each unit of the software code performs as
                expected. Unit Testing is done during the development (coding
                phase) of an application by the developers. Unit Tests isolate a
                section of code and verify its correctness. A unit may be an
                individual function, method, procedure, module, or object. In
                SDLC, STLC, V Model, Unit testing is first level of testing done
                before integration testing. Unit testing is a WhiteBox testing
                technique that is usually performed by the developer. Though, in
                a practical world due to time crunch or reluctance of developers
                to tests, QA engineers also do unit testing.
              </p>
            </article>
            <article>
              <h3 className="font-bold text-2xl">
                How does NodeJS handle multiple requests at the same time?
              </h3>
              <p className="font-medium mt-2 pl-5">
                If the choice you’re making is based on Angular vs React alone,
                then you’ll simply need to consider the pros and cons discussed
                for those libraries in this post. But overall, keep in mind that
                both libraries can be used for mobile and web apps, while
                Angular is generally better for more complex apps that are
                enterprise-ready. React often requires extra modules and
                components, which keeps the core library small, but means
                there’s extra work involved when incorporating outside tools.
                Angular, on the other hand, is more of a full-fledged solution
                that doesn’t require extras like React often does, though it
                does have a steeper learning curve for its core compared to
                React. React is more suitable for intermediate to advanced
                JavaScript developers who are familiar with concepts from ES6
                and up, while Angular favors those same developers who are also
                familiar with TypeScript. <br />
                The choice between React vs Vue is often debated and it’s not an
                easy one. Vue has a vibrant and ever-growing community and has
                taken over popularity vs. React in many respects. React
                developers are still churning out lots of new components and
                extras, so there’s no sign that React is on the decline either.
                Vue is generally more suited to smaller, less complex apps and
                is easier to learn from scratch compared to React. Vue can be
                easier to integrate into new or existing projects and many feel
                its use of HTML templates along with JSX is an advantage.
                Overall, Vue might be the best choice if you’re a newer
                developer and not as familiar with advanced JavaScript concepts,
                while React is quite well suited for experienced programmers and
                developers who have worked with object-oriented JavaScript,
                functional JavaScript, and similar concepts.
                <br />
                In most cases, you probably wouldn’t be deciding between only
                Angular and Vue. They are vastly different libraries with very
                different feature sets and learning curves. Vue is the clear
                choice for less experienced developers, and Angular would be
                preferred for those working on larger apps. A large library like
                Angular would require more diligence in keeping up with what’s
                new, while Vue would be less demanding in this regard and the
                fact that the two most recent major releases of Vue are in
                separate repositories helps. It should also be noted that Vue
                was created by a developer who formerly worked on Angular for
                Google, so that’s another thing to keep in mind, though that
                wouldn’t have a huge impact on your decision.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
