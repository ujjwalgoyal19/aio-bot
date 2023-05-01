"use strict";

/**
 * @param buttonForGPT: The button for GPT-3.
 * @param buttonForBard: The button for bard.
 * @param buttonForBing: The button for bing.
 * @param frameForGPT: The iframe for GPT-3.
 * @param frameForBard: The iframe for bard.
 * @param frameForBing: The iframe for bing.
 * @param removeButtonActive: Function to remove the button-active class.
 * @param removeBotActive: Function to remove the bot-active class.
 * *******************************************************************************
 * On click of the button, we remove the button-active class from the button and the bot-active class from the iframe.
 * Then we add the button-active class to the button that was clicked and the bot-active class to the iframe that has
 * the same name as the button.
 */

// * The buttons for AI Bots
const gpt = document.getElementById("gpt");
const bard = document.getElementById("bard");
const bing = document.getElementById("bing");

// * The iframes for AI Bots.
const botGPT = document.getElementById("bot-gpt");
const botBard = document.getElementById("bot-bard");
const botBing = document.getElementById("bot-bing");

// * Functions to manage CSS-Classes.
const removeButtonActive = () => {
  const buttonActive = document.getElementsByClassName("button-active");
  buttonActive.item(0).classList.remove("button-active");
};

const removeBotActive = () => {
  const botActive = document.getElementsByClassName("bot-active");
  botActive.item(0).classList.remove("bot-active");
};

// * On click of the button, we remove the button-active class from the button and the bot-active class from the iframe.
// * Then we add the button-active class to the button that was clicked and the bot-active class to the iframe that has
// * the same name as the button.
gpt.onclick = () => {
  removeButtonActive();
  removeBotActive();
  gpt.classList.add("button-active");
  botGPT.classList.add("bot-active");
};

bard.onclick = () => {
  removeButtonActive();
  removeBotActive();
  bard.classList.add("button-active");
  botBard.classList.add("bot-active");
};

bing.onclick = () => {
  removeButtonActive();
  removeBotActive();
  bing.classList.add("button-active");
  botBing.classList.add("bot-active");
};
