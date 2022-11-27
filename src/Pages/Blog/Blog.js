import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className=" my-5 text-5xl text-center text-red-900 font-bold ">
        Blog
      </h1>

      <div className="w-1/2 mx-auto my-6">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              We can use URL to store some data e.g. The id of the current item,
              being viewed Filter parameters Pagination offset and limit Sorting
              data Keeping such data in the URL allows users to share deep links
              with others.
              <br />
              <br />
              Web Storage The second option is to store the state in the browser
              via web storage. This is useful when we want to persist state
              between reloads and reboots. Examples include cookies, local
              storage, and IndexedDB. These are native browser technologies.
              <br />
              <br />
              Local State The third option is to use store state locally. It is
              useful when one component needs the state. Examples include a
              toggle button, a form, etc.
              <br />
              <br />
              Lifted State The Fourth option is to define the state in the
              parent component. Often, the same state is used across multiple
              components. In those cases, it is useful to lift the state to a
              common parent.
              <br />
              <br />
              Derived State The fifth option is to compute the new state based
              on the available state and we do not need to declare a state at
              all. If there are existing values that can be composed to give us
              the information we need, then we can calculate that information on
              each render instead of storing it. Some examples include calling .
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto my-6">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto my-6">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system.
              <br />
              We should write unit tests as Well-written unit tests act as
              documentation for your code. Any developer can quickly look at
              your tests and know the purpose of your functions. It simplifies
              the debugging process. Unit testing is an integral part of extreme
              programming.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto my-6">
        <div className="collapse">
          <input type="checkbox" className="peer " />
          <div className="  collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            React vs. Angular vs. Vue?
          </div>
          <div className="  collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              Angular vs React
              <br />
              <br />
              If the choice you’re making is based on Angular vs React alone,
              then you’ll simply need to consider the pros and cons discussed
              for those libraries in this post. But overall, keep in mind that
              both libraries can be used for mobile and web apps, while Angular
              is generally better for more complex apps that are
              enterprise-ready. React often requires extra modules and
              components, which keeps the core library small, but means there’s
              extra work involved when incorporating outside tools. Angular, on
              the other hand, is more of a full-fledged solution that doesn’t
              require extras like React often does, though it does have a
              steeper learning curve for its core compared to React. React is
              more suitable for intermediate to advanced JavaScript developers
              who are familiar with concepts from ES6 and up, while Angular
              favors those same developers who are also familiar with
              TypeScript.
              <br />
              <br />
              React vs Vue
              <br />
              <br />
              The choice between React vs Vue is often debated and it’s not an
              easy one. Vue has a vibrant and ever-growing community and has
              taken over popularity vs. React in many respects. React developers
              are still churning out lots of new components and extras, so
              there’s no sign that React is on the decline either. Vue is
              generally more suited to smaller, less complex apps and is easier
              to learn from scratch compared to React. Vue can be easier to
              integrate into new or existing projects and many feel its use of
              HTML templates along with JSX is an advantage. Overall, Vue might
              be the best choice if you’re a newer developer and not as familiar
              with advanced JavaScript concepts, while React is quite well
              suited for experienced programmers and developers who have worked
              with object-oriented JavaScript, functional JavaScript, and
              similar concepts.
              <br />
              <br />
              Angular vs Vue
              <br />
              <br />
              In most cases, you probably wouldn’t be deciding between only
              Angular and Vue. They are vastly different libraries with very
              different feature sets and learning curves. Vue is the clear
              choice for less experienced developers, and Angular would be
              preferred for those working on larger apps. A large library like
              Angular would require more diligence in keeping up with what’s
              new, while Vue would be less demanding in this regard and the fact
              that the two most recent major releases of Vue are in separate
              repositories helps. It should also be noted that Vue was created
              by a developer who formerly worked on Angular for Google, so
              that’s another thing to keep in mind, though that wouldn’t have a
              huge impact on your decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
