function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire366e;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire366e=r);var i=r("7Y9D8");const l=document.querySelector("form"),u=l.querySelector('input[name="delay"]'),a=l.querySelector('input[name="step"]'),s=l.querySelector('input[name="amount"]');function d(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.querySelector("button").addEventListener("click",(t=>{t.preventDefault();const n=Number(s.value);let o=Number(u.value);for(let t=0;t<n;t++)d(t,o).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),o+=Number(a.value);l.reset()}));
//# sourceMappingURL=03-promises.8a420f6c.js.map
