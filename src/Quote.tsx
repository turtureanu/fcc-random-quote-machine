import { createSignal, type Component } from "solid-js";
import quotes from "./quotes.json";

import { Icon } from "@iconify-icon/solid";

const getQuoteNumber = () => Math.floor(Math.random() * quotes.length);
const getBackgroundClass = () => `bg-${Math.floor(Math.random() * 9) + 1}`;

export const Quote: Component = () => {
  const [quoteBody, setQuoteBody] = createSignal(quotes[getQuoteNumber()]);
  const [bgClass, setBgClass] = createSignal(getBackgroundClass());
  const [isVisible, setIsVisible] = createSignal(true);

  const changeQuote = () => {
    setIsVisible(false);
    setBgClass(getBackgroundClass);
    setTimeout(() => {
      setQuoteBody(quotes[getQuoteNumber()]);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div class={`p-10 m-10 rounded-lg ${bgClass()}`}>
      <div
        id="quote-box"
        class={`transition-opacity ${
          isVisible() ? "opacity-1" : "opacity-0"
        } w-5/6 md:w-[45rem]`}
      >
        <div>
          <div class="flex">
            <Icon
              icon="cil:double-quote-sans-left"
              class="self-start mr-2 text-4xl"
            />
            <p id="text" class="my-4 text-3xl leading-8 font-600">
              {quoteBody().quote}
            </p>
          </div>
          <p id="author" class="my-4 w-full text-xl italic text-center">
            {quoteBody().author}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              '"' + quoteBody().quote + '"' + " - " + quoteBody().author
            )}&url=${encodeURIComponent(
              "https://fcc-random-quotes-machine.netlify.app/"
            )}`}
            id="tweet-quote"
          >
            <Icon icon="mdi:twitter" class="flex items-center text-3xl" />
          </a>
          <button
            id="new-quote"
            class="text-lg underline underline-offset-8 hover:text-slate-600"
            onClick={changeQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};
