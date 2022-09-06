const quotes = [
    {
        quote: "Passion kept one fully in the present, so that time became a series of mutually exclusive 'nows.'",
        author: "Sue Halpern",
    },
    {
        quote: "To win without risk is to triumph without glory.",
        author: "Pierre Corneille",
    },
    {
        quote: "Be wary of the man who urges an action in which he himself incurs no risk.",
        author: "Joaquin Setanti",
    },
    {
        quote: "He who finds diamonds must grapple in mud and mire because diamonds are not found in polished stones. They are made.",
        author: "Henry B.Wilson",
    },
    {
        quote: "Great deeds are usually wrought at great risks.",
        author: "Herodotus",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const idx = Math.floor(Math.random()*quotes.length);
quote.innerHTML = quotes[idx].quote;
author.innerHTML = `[${quotes[idx].author}]`;