// bits-ui flyAndScale: https://github.com/huntabyte/bits-ui/blob/e966830792603d54f573ac682fd02b6ede039690/sites/docs/src/lib/utils/transitions.ts
import { cubicOut } from 'svelte/easing';

const defaultFlyAndScaleParams = { y: -8, start: 0.95, duration: 200 };

/** 
 * @param {Element} node
 * @param {Object} params
 */
export const flyAndScale = (node, params) => {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;
  const withDefaults = { ...defaultFlyAndScaleParams, ...params };

  /** 
   * @param {number} valueA 
   * @param {[number, number]} scaleA
   * @param {[number, number]} scaleB
   */
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;

    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;

    return valueB;
  };

  /** @param {{ [key: string]: any; }} style */
  const styleToString = (style) => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str;
      return str + `${key}:${style[key]};`;
    }, '');
  };

  return {
    duration: withDefaults.duration ?? 200,
    delay: 0,
    /** @param {number} t */
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [withDefaults.y, 0]);
      const scale = scaleConversion(t, [0, 1], [withDefaults.start, 1]);

      return styleToString({
        transform: `${transform} translate3d(0, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
