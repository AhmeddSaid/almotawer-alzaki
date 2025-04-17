"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --neutral--600: #6e7a91;
        --neutral--800: #1f3154;
        --accent--primary-1: #4187ff;
        --secondary--color-4: #ff5f55;
        --neutral--200: #f7f8fc;
        --neutral--300: #eff2f6;
        --general--shadow-01: rgba(20, 20, 43, .06);
        --neutral--100: white;
        --general--shadow-02: rgba(20, 20, 43, .08);
        --neutral--700: #384763;
        --secondary--color-1: #ffc32a;
        --secondary--color-2: #ffbfc7;
        --secondary--color-3: #77e36e;
        --neutral--500: #a0aabd;
        --neutral--400: #dce1eb;
        --system--green-400: #11845b;
        --system--blue-400: #086cd9;
        --system--blue-300: #1d88fe;
        --system--blue-200: #8fc3ff;
        --system--blue-100: #eaf4ff;
        --system--green-300: #05c168;
        --system--green-200: #7fdca4;
        --system--green-100: #def2e6;
        --system--red-400: #dc2b2b;
        --system--300: #ff5a65;
        --system--red-200: #ffbec2;
        --system--red-100: #ffeff0;
        --system--orange-400: #d5691b;
        --system--orange-300: #ff9e2c;
        --system--orange-200: #ffd19b;
        --system--orange-100: #fff3e4;
        --general--shadow-03: rgba(20, 20, 43, .1);
        --general--shadow-04: rgba(20, 20, 43, .14);
        --general--shadow-05: rgba(20, 20, 43, .16);
        --general--shadow-06: rgba(20, 20, 43, .24);
        --button-shadow--color-01: rgba(58, 81, 255, .06);
        --button-shadow--color-2: rgba(58, 81, 255, .06);
        --button-shadow--color-03: rgba(58, 81, 255, .08);
        --button-shadow--white-01: rgba(20, 20, 43, .04);
        --button-shadow--white-02: rgba(20, 20, 43, .06);
        --button-shadow--white-03: rgba(20, 20, 43, .1);
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-style: normal;
        vertical-align: middle;
        line-height: 1.5;
        font-weight: 400;
        font-family: var(--poppins-font), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
    }

    main, article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    a {
        text-decoration: none;
        display: inline-block;
    }


    body {
        height: 100%;
        min-width: 320px;


    }


    ol, ul, li {
        list-style: none;
    }


    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    [hidden] {
        display: none;
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        //-webkit-appearance: none;
        //margin: 0;
    }


    ::-webkit-scrollbar {
        //width: 8px;
    }


    ::-webkit-scrollbar-track {
        //box-shadow: inset 0 0 4px grey;
        //border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb {
        //background: lightgray;
        //border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb:hover {
        //background: gray;
    }


    input[type=number] {
        -moz-appearance: textfield;
    }


    svg {
        transition: all 0.3s ease-in-out;
    }


    .displayNone {
        display: none;
        transition: all 0.3s ease-in-out;
    }

    .positionRelative {
        position: relative;
    }

    .positionFixed {
        position: fixed;
        top: 0;
        left: 0;
    }


    .rotate {
        transform: rotate(180deg);
        transition: all 0.3s ease-in-out;
    }
    
    
    .z1{
        position: relative;
        z-index: 1;
    }


    .z-1{
        z-index: -1;
    }


    body {
        --neutral--600: #6e7a91;
        --neutral--800: #1f3154;
        --accent--primary-1: #4187ff;
        --secondary--color-4: #ff5f55;
        --neutral--200: #f7f8fc;
        --neutral--300: #eff2f6;
        --general--shadow-01: rgba(20, 20, 43, .06);
        --neutral--100: white;
        --general--shadow-02: rgba(20, 20, 43, .08);
        --neutral--700: #384763;
        --secondary--color-1: #ffc32a;
        --secondary--color-2: #ffbfc7;
        --secondary--color-3: #77e36e;
        --neutral--500: #a0aabd;
        --neutral--400: #dce1eb;
        --system--green-400: #11845b;
        --system--blue-400: #086cd9;
        --system--blue-300: #1d88fe;
        --system--blue-200: #8fc3ff;
        --system--blue-100: #eaf4ff;
        --system--green-300: #05c168;
        --system--green-200: #7fdca4;
        --system--green-100: #def2e6;
        --system--red-400: #dc2b2b;
        --system--300: #ff5a65;
        --system--red-200: #ffbec2;
        --system--red-100: #ffeff0;
        --system--orange-400: #d5691b;
        --system--orange-300: #ff9e2c;
        --system--orange-200: #ffd19b;
        --system--orange-100: #fff3e4;
        --general--shadow-03: rgba(20, 20, 43, .1);
        --general--shadow-04: rgba(20, 20, 43, .14);
        --general--shadow-05: rgba(20, 20, 43, .16);
        --general--shadow-06: rgba(20, 20, 43, .24);
        --button-shadow--color-01: rgba(58, 81, 255, .06);
        --button-shadow--color-2: rgba(58, 81, 255, .06);
        --button-shadow--color-03: rgba(58, 81, 255, .08);
        --button-shadow--white-01: rgba(20, 20, 43, .04);
        --button-shadow--white-02: rgba(20, 20, 43, .06);
        --button-shadow--white-03: rgba(20, 20, 43, .1);
    }

`;
