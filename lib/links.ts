/**
 * Attributes for every link that opens in a new tab. `noopener` stops the
 * opened page from reaching back through `window.opener`; `noreferrer` also
 * withholds the referring URL.
 */
export const newTab = { target: "_blank", rel: "noreferrer noopener" } as const;
