// Copyright 2023 the Deno authors. All rights reserved. MIT license.
export const SITE_NAME = 'Veridata';
export const SITE_DESCRIPTION = 'Validacion de datos KYC para Latinoamerica.';
export const REDIRECT_PATH_AFTER_LOGIN = '/';

/**
 * These are base styles for some elements. This approach is chosen as it avoids more complex alternatives:
 * 1. Writing custom classes in Tailwind CSS (see https://tailwindcss.com/docs/reusing-styles#compared-to-css-abstractions)
 * 2. Writing custom components which offer no additional functionality beyond styling
 */
export const BUTTON_STYLES =
  'px-4 py-2 bg-pink-700 text-white text-lg rounded-lg border-2 border-pink-700 transition duration-300 disabled:(opacity-50 cursor-not-allowed) hover:(bg-transparent text-pink-700)';
export const INPUT_STYLES =
  'px-4 py-2 bg-transparent rounded rounded-lg outline-none w-full border-1 border-gray-500 hover:border-black transition duration-300 disabled:(opacity-50 cursor-not-allowed) dark:(hover:border-white)';
export const SITE_WIDTH_STYLES = 'mx-auto max-w-7xl w-full';
