import { Icon } from "@iconify-icon/solid";
import { createComponent, createSignal, type Component } from "solid-js";
import { Show } from "solid-js";
import { Portal } from "solid-js/web";

import { Quote } from "./Quote";

const App: Component = () => {
  const [areTestsEnabled, setAreTestsEnabled] = createSignal(false);

  const toggleTest = () => {
    const test = document.querySelector("#fcc_test_suite_wrapper");
    if (areTestsEnabled()) {
      test?.classList.remove("hidden");
      setAreTestsEnabled(false);
    } else {
      test?.classList.add("hidden");
      setAreTestsEnabled(true);
    }
  };

  toggleTest();

  return (
    <div class="flex justify-center items-center h-full bg-slate-800">
      <div>
        <Quote />
        <div>
          <div class="p-10 m-auto w-[35rem] text-white">
            <span class="block text-2xl text-center">
              freeCodeCamp{" "}
              <Icon icon="simple-icons:freecodecamp" class="align-[-3px]" />
            </span>
            <a
              href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
              class="block mt-2 italic text-center underline underline-offset-8"
              target="_blank"
            >
              Front End Development Libraries Certification
            </a>
            <p class="m-auto mt-8 w-fit">
              <b>Project:</b> Random Quotes Machine <br />
              <b>Author:</b>{" "}
              <a
                href="https://github.com/turtureanu"
                class="underline underline-offset-4"
                target="_blank"
              >
                Mircea-Sebastian Turtureanu
              </a>
            </p>
            <button
              onClick={toggleTest}
              class="block p-2 mx-auto mt-8 text-xl text-black bg-white hover:bg-slate-200 w-fit"
            >
              Toggle certification project tests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
