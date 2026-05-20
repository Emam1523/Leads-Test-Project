import {
  quill_default
} from "./chunk-27JB4S5Y.js";
import {
  __async,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-ZNC4SKHB.js";

// node_modules/quill-table-up/dist/index.js
var t = { container: `table-up-container`, tableCaption: `table-up-caption`, tableWrapper: `table-up`, tableMain: `table-up-main`, tableColgroup: `table-up-colgroup`, tableCol: `table-up-col`, tableHead: `table-up-head`, tableBody: `table-up-body`, tableFoot: `table-up-foot`, tableRow: `table-up-row`, tableCell: `table-up-cell`, tableCellInner: `table-up-cell-inner` };
var n = { colMinWidthPre: 5, colMinWidthPx: 40, colDefaultWidth: 100, rowMinHeightPx: 36 };
var r = { AFTER_TABLE_RESIZE: `after-table-resize`, TABLE_SELECTION_DRAG_START: `table-selection-drag-start`, TABLE_SELECTION_DRAG_END: `table-selection-drag-end`, TABLE_SELECTION_CHANGE: `table-selection-change`, TABLE_SELECTION_DISPLAY_CHANGE: `table-selection-display-change` };
var i = { moduleName: `table-up`, tableSelectionName: `table-selection` };
var a = [[`rgb(255, 255, 255)`, `rgb(0, 0, 0)`, `rgb(72, 83, 104)`, `rgb(41, 114, 244)`, `rgb(0, 163, 245)`, `rgb(49, 155, 98)`, `rgb(222, 60, 54)`, `rgb(248, 136, 37)`, `rgb(245, 196, 0)`, `rgb(153, 56, 215)`], [`rgb(242, 242, 242)`, `rgb(127, 127, 127)`, `rgb(243, 245, 247)`, `rgb(229, 239, 255)`, `rgb(229, 246, 255)`, `rgb(234, 250, 241)`, `rgb(254, 233, 232)`, `rgb(254, 243, 235)`, `rgb(254, 249, 227)`, `rgb(253, 235, 255)`], [`rgb(216, 216, 216)`, `rgb(89, 89, 89)`, `rgb(197, 202, 211)`, `rgb(199, 220, 255)`, `rgb(199, 236, 255)`, `rgb(195, 234, 213)`, `rgb(255, 201, 199)`, `rgb(255, 220, 196)`, `rgb(255, 238, 173)`, `rgb(242, 199, 255)`], [`rgb(191, 191, 191)`, `rgb(63, 63, 63)`, `rgb(128, 139, 158)`, `rgb(153, 190, 255)`, `rgb(153, 221, 255)`, `rgb(152, 215, 182)`, `rgb(255, 156, 153)`, `rgb(255, 186, 132)`, `rgb(255, 226, 112)`, `rgb(213, 142, 255)`], [`rgb(165, 165, 165)`, `rgb(38, 38, 38)`, `rgb(53, 59, 69)`, `rgb(20, 80, 184)`, `rgb(18, 116, 165)`, `rgb(39, 124, 79)`, `rgb(158, 30, 26)`, `rgb(184, 96, 20)`, `rgb(163, 130, 0)`, `rgb(94, 34, 129)`], [`rgb(147, 147, 147)`, `rgb(13, 13, 13)`, `rgb(36, 39, 46)`, `rgb(12, 48, 110)`, `rgb(10, 65, 92)`, `rgb(24, 78, 50)`, `rgb(88, 17, 14)`, `rgb(92, 48, 10)`, `rgb(102, 82, 0)`, `rgb(59, 21, 81)`]];
var o = /* @__PURE__ */ new Set([t.tableCellInner]);
var s = (e3) => o.has(e3.statics.blotName);
function c(e3) {
  return e3?.parent ? s(e3.parent) ? true : c(e3.parent) : false;
}
function l(e3, t2 = `table-up`) {
  let n2 = t2 ? `${t2}-` : ``;
  return { b: () => `${n2}${e3}`, be: (t3) => t3 ? `${n2}${e3}__${t3}` : ``, bm: (t3) => t3 ? `${n2}${e3}--${t3}` : ``, bem: (t3, r3) => t3 && r3 ? `${n2}${e3}__${t3}--${r3}` : ``, ns: (e4) => e4 ? `${n2}${e4}` : ``, bs: (t3) => t3 ? `${n2}${e3}-${t3}` : ``, cv: (e4) => e4 ? `--${n2}${e4}` : ``, is: (e4) => `is-${e4}` };
}
function u(e3, t2) {
  let n2 = e3.parent;
  for (; n2 && n2.statics.blotName !== t2 && n2 !== e3.scroll; ) n2 = n2.parent;
  if (n2 === e3.scroll) throw Error(`${e3.statics.blotName} must be a child of ${t2}`);
  return n2;
}
function d(e3, t2) {
  let n2 = Array(t2.length), r3 = new Map(t2.map((e4, t3) => [e4, t3])), i2 = e3.parent;
  for (; i2 && i2 !== e3.scroll && r3.size !== 0; ) {
    if (r3.has(i2.statics.blotName)) {
      let e4 = r3.get(i2.statics.blotName);
      n2[e4] = i2, r3.delete(i2.statics.blotName);
    }
    i2 = i2.parent;
  }
  if (r3.size > 0) throw Error(`${e3.statics.blotName} must be a child of ${Array.from(r3.keys()).join(`, `)}`);
  return n2;
}
function f(e3) {
  let t2 = /* @__PURE__ */ new Map(), n2 = e3;
  for (; n2 && n2.statics.blotName !== `scroll`; ) t2.set(n2.statics.blotName, n2), n2 = n2.parent;
  return t2;
}
function p(e3, t2) {
  let n2 = [], r3 = e3.children.iterator(), i2 = null;
  for (; i2 = r3(); ) i2 instanceof t2 && n2.push(i2);
  return n2;
}
function m(e3, t2, n2) {
  for (let r3 of Object.getOwnPropertyNames(t2)) n2?.test(r3) || Object.defineProperty(e3, r3, Object.getOwnPropertyDescriptor(t2, r3));
  return e3;
}
function h(e3, t2) {
  let n2 = class extends e3 {
  };
  for (let e4 of t2) m(n2.prototype, e4.prototype, /^constructor$/);
  return n2;
}
function g(e3, t2) {
  return e3.prototype && e3.prototype instanceof t2;
}
function _(e3, t2) {
  return e3 = Math.min(t2, Math.max(0, Number.parseFloat(`${e3}`))), Math.abs(e3 - t2) < 1e-6 ? 1 : e3 % t2 / Number.parseFloat(t2);
}
function v(e3) {
  return { h: Math.min(360, Math.max(0, e3.h)), s: Math.min(100, Math.max(0, e3.s)), b: Math.min(100, Math.max(0, e3.b)), a: Math.min(1, Math.max(0, e3.a)) };
}
function y(e3) {
  return e3 = e3.startsWith(`#`) ? e3.slice(1) : e3, { r: Number.parseInt(e3.slice(0, 2), 16), g: Number.parseInt(e3.slice(2, 4), 16), b: Number.parseInt(e3.slice(4, 6), 16), a: Number((Number.parseInt(e3.slice(6, 8) || `ff`, 16) / 255).toFixed(2)) };
}
function b(e3) {
  let { r: t2, g: n2, b: r3, a: i2 } = e3;
  t2 = _(t2, 255), n2 = _(n2, 255), r3 = _(r3, 255);
  let a2 = Math.max(t2, n2, r3), o2 = Math.min(t2, n2, r3), s2, c2 = a2, l2 = a2 - o2, u2 = a2 === 0 ? 0 : l2 / a2;
  if (a2 === o2) s2 = 0;
  else {
    switch (a2) {
      case t2:
        s2 = (n2 - r3) / l2 + (n2 < r3 ? 6 : 0);
        break;
      case n2:
        s2 = (r3 - t2) / l2 + 2;
        break;
      case r3:
        s2 = (t2 - n2) / l2 + 4;
        break;
    }
    s2 /= 6;
  }
  return { h: s2 * 360, s: u2 * 100, b: c2 * 100, a: i2 };
}
function ee(e3) {
  let { h: t2, s: n2, b: r3, a: i2 } = e3;
  t2 = _(t2, 360) * 6, n2 = _(n2, 100), r3 = _(r3, 100);
  let a2 = Math.floor(t2), o2 = t2 - a2, s2 = r3 * (1 - n2), c2 = r3 * (1 - o2 * n2), l2 = r3 * (1 - (1 - o2) * n2), u2 = a2 % 6, d2 = [r3, c2, s2, s2, l2, r3][u2], f2 = [l2, r3, r3, c2, s2, s2][u2], p2 = [s2, s2, l2, r3, r3, c2][u2];
  return { r: Math.round(d2 * 255), g: Math.round(f2 * 255), b: Math.round(p2 * 255), a: i2 };
}
function te(e3) {
  let t2 = [e3.r.toString(16), e3.g.toString(16), e3.b.toString(16), Math.round(e3.a * 255).toString(16)];
  for (let e4 in t2) t2[e4].length === 1 && (t2[e4] = `0${t2[e4]}`);
  return t2.join(``);
}
var x = (e3) => te(ee(e3));
var S = (e3) => typeof e3 == `function`;
var C = Array.isArray;
var w = (e3) => typeof e3 == `string`;
var ne = (e3) => typeof e3 == `number`;
var re = (e3) => typeof e3 == `object` && !!e3;
var ie = (e3) => e3 === void 0;
var ae = (e3) => !Number.isNaN(e3) && Number(e3) > 0;
var oe = (e3) => C(e3) ? e3 : [e3];
function se(e3) {
  let { type: t2 = `default`, content: n2 } = e3 || {}, r3 = l(`button`), i2 = document.createElement(`button`);
  return i2.classList.add(r3.b(), t2), n2 && (w(n2) ? i2.textContent = n2 : i2.appendChild(n2)), i2;
}
function ce(e3 = {}) {
  let t2 = b(y(e3.color || `#ff0000`)), n2 = l(`color-picker`), r3 = document.createElement(`div`);
  r3.classList.add(n2.b());
  let i2 = document.createElement(`div`);
  i2.classList.add(n2.be(`content`));
  let a2 = document.createElement(`div`);
  a2.classList.add(n2.be(`selector`));
  let o2 = document.createElement(`div`);
  o2.classList.add(n2.be(`background`)), a2.appendChild(o2);
  let s2 = document.createElement(`div`);
  s2.classList.add(n2.be(`background-handle`)), o2.appendChild(s2);
  let c2 = document.createElement(`div`);
  c2.classList.add(n2.be(`alpha`));
  let u2 = document.createElement(`div`);
  u2.classList.add(n2.be(`alpha-bg`));
  let d2 = document.createElement(`div`);
  d2.classList.add(n2.be(`alpha-handle`)), c2.appendChild(u2), c2.appendChild(d2);
  let f2 = document.createElement(`div`);
  f2.classList.add(n2.be(`hue`));
  let p2 = document.createElement(`div`);
  p2.classList.add(n2.be(`hue-handle`)), f2.appendChild(p2);
  let m2 = document.createElement(`div`);
  m2.classList.add(n2.be(`action`));
  let [h2, g2, _2, S2] = [`r`, `g`, `b`, `a`].map((e4) => {
    let r4 = document.createElement(`div`);
    r4.classList.add(n2.be(`action-item`), e4);
    let i3 = document.createElement(`label`);
    i3.textContent = e4.toUpperCase();
    let a3 = document.createElement(`input`);
    return a3.classList.add(n2.be(`input`)), a3.addEventListener(`input`, () => {
      a3.value = a3.value.replaceAll(/[^0-9]/g, ``);
    }), a3.addEventListener(`change`, () => {
      let n3 = Math.round(Number(a3.value));
      e4 === `a` && (n3 /= 100), ue2(v(b(Object.assign({}, ee(t2), { [e4]: n3 })))), le2();
    }), r4.appendChild(i3), r4.appendChild(a3), m2.appendChild(r4), a3;
  });
  i2.appendChild(f2), i2.appendChild(a2), i2.appendChild(c2), r3.appendChild(i2), r3.appendChild(m2);
  let C2 = false, w2 = false, ne2 = false;
  function re2() {
    let e4 = x(t2);
    for (let [t3, n3] of [h2, g2, _2].entries()) n3.value = String(Number.parseInt(e4[t3 * 2] + e4[t3 * 2 + 1], 16));
    S2.value = String((t2.a * 100).toFixed(0));
  }
  function ie2() {
    Object.assign(s2.style, { left: `${Math.floor(230 * t2.s / 100)}px`, top: `${Math.floor(150 * (100 - t2.b) / 100)}px` });
  }
  function ae2() {
    a2.style.backgroundColor = `#${te(ee({ h: t2.h, s: 100, b: 100, a: 1 }))}`;
  }
  function oe2() {
    p2.style.top = `${Math.floor(150 - 150 * t2.h / 360)}px`;
  }
  function se2() {
    d2.style.left = `${t2.a * 100}%`;
  }
  function ce2() {
    let { r: e4, g: n3, b: r4 } = ee(t2);
    u2.style.background = `linear-gradient(to right, rgba(${e4}, ${n3}, ${r4}, 0) 0%, rgba(${e4}, ${n3}, ${r4}, 1) 100%)`;
  }
  function le2() {
    ie2(), ae2(), oe2(), se2(), ce2(), re2();
  }
  function ue2(n3) {
    t2 = v(Object.assign({}, t2, n3)), re2(), e3.onChange && e3.onChange(`#${x(t2)}`);
  }
  function de2(e4) {
    let t3 = a2.getBoundingClientRect(), n3 = t3.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), r4 = t3.left + document.body.scrollLeft;
    ue2({ s: Math.floor(100 * Math.max(0, Math.min(230, e4.pageX - r4)) / 230), b: Math.floor(100 * (150 - Math.max(0, Math.min(150, e4.pageY - n3))) / 150) }), le2();
  }
  function fe2(e4) {
    let t3 = f2.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    ue2({ h: Math.floor(360 * (150 - Math.max(0, Math.min(150, e4.pageY - t3))) / 150) }), le2();
  }
  function pe2(e4) {
    let { pageX: t3 } = e4, n3 = c2.getBoundingClientRect(), r4 = t3 - n3.left;
    r4 = Math.max(10 / 2, r4), r4 = Math.min(r4, n3.width - 10 / 2), ue2({ a: Math.round((r4 - 10 / 2) / (n3.width - 10) * 100) / 100 }), le2();
  }
  function T2(e4) {
    C2 && (e4.preventDefault(), de2(e4)), w2 && (e4.preventDefault(), fe2(e4)), ne2 && (e4.preventDefault(), pe2(e4));
  }
  function me2() {
    document.removeEventListener(`mousemove`, T2), document.removeEventListener(`mouseup`, me2), C2 = false;
  }
  function E2(e4) {
    document.addEventListener(`mousemove`, T2), document.addEventListener(`mouseup`, me2), C2 = true, de2(e4);
  }
  a2.addEventListener(`mousedown`, E2);
  function he2() {
    document.removeEventListener(`mousemove`, T2), document.removeEventListener(`mouseup`, he2), w2 = false;
  }
  function ge2(e4) {
    document.addEventListener(`mousemove`, T2), document.addEventListener(`mouseup`, he2), w2 = true, fe2(e4);
  }
  f2.addEventListener(`mousedown`, ge2);
  function D2() {
    document.removeEventListener(`mousemove`, T2), document.removeEventListener(`mouseup`, D2), ne2 = false;
  }
  function _e2(e4) {
    document.addEventListener(`mousemove`, T2), document.addEventListener(`mouseup`, D2), ne2 = true, pe2(e4);
  }
  return c2.addEventListener(`mousedown`, _e2), le2(), r3;
}
var le = 8e3;
function ue({ child: e3, target: t2 = document.body, beforeClose: n2 = () => {
} } = {}) {
  let r3 = l(`dialog`), i2 = t2, a2 = document.createElement(`div`);
  a2.classList.add(r3.b()), a2.style.zIndex = String(le);
  let o2 = document.createElement(`div`);
  if (o2.classList.add(r3.be(`overlay`)), a2.appendChild(o2), e3) {
    let t3 = document.createElement(`div`);
    t3.classList.add(r3.be(`content`)), t3.appendChild(e3), o2.appendChild(t3), t3.addEventListener(`click`, (e4) => {
      e4.stopPropagation();
    });
  }
  let s2 = getComputedStyle(i2).overflow;
  i2.style.overflow = `hidden`, i2.appendChild(a2);
  let c2 = () => {
    n2(), a2.remove(), i2.style.overflow = s2;
  };
  return a2.addEventListener(`click`, c2), le += 1, { dialog: a2, close: c2 };
}
function de(_0) {
  return __async(this, arguments, function* ({ message: e3, confirm: t2, cancel: n2 }) {
    return new Promise((r3) => {
      let i2 = document.createElement(`div`);
      Object.assign(i2.style, { padding: `8px 12px`, fontSize: `14px`, lineHeight: `1.5` });
      let a2 = document.createElement(`p`);
      a2.textContent = e3;
      let o2 = document.createElement(`div`);
      Object.assign(o2.style, { display: `flex`, justifyContent: `flex-end`, gap: `6px` });
      let s2 = se({ content: n2 }), c2 = se({ type: `confirm`, content: t2 });
      o2.appendChild(s2), o2.appendChild(c2), i2.appendChild(a2), i2.appendChild(o2);
      let { close: l2 } = ue({ child: i2 });
      s2.addEventListener(`click`, () => {
        r3(false), l2();
      }), c2.addEventListener(`click`, () => {
        r3(true), l2();
      });
    });
  });
}
function fe(e3, t2) {
  let n2 = l(`input`);
  t2.type ||= `text`, t2.value ||= ``;
  let r3 = document.createElement(`div`);
  if (r3.classList.add(n2.be(`item`)), e3) {
    let t3 = document.createElement(`span`);
    t3.classList.add(n2.be(`label`)), t3.textContent = e3, r3.appendChild(t3);
  }
  let i2 = document.createElement(`div`);
  i2.classList.add(n2.be(`input`));
  let a2 = document.createElement(`input`);
  for (let e4 in t2) a2.setAttribute(e4, t2[e4]);
  return (t2.max || t2.min) && a2.addEventListener(`blur`, () => {
    t2.max && t2.max <= Number(a2.value) && (a2.value = String(t2.max)), t2.min && t2.min >= Number(a2.value) && (a2.value = String(t2.min));
  }), i2.appendChild(a2), r3.appendChild(i2), a2.addEventListener(`focus`, () => {
    i2.classList.add(`focus`);
  }), a2.addEventListener(`blur`, () => {
    i2.classList.remove(`focus`);
  }), { item: r3, input: a2, errorTip: (e4) => {
    let t3;
    return i2.classList.contains(`error`) ? t3 = i2.querySelector(`.${n2.be(`error-tip`)}`) : (t3 = document.createElement(`span`), t3.classList.add(n2.be(`error-tip`)), i2.appendChild(t3)), t3.textContent = e4, i2.classList.add(`error`), { removeError: () => {
      i2.classList.remove(`error`), t3.remove();
    } };
  } };
}
function pe() {
  return __async(this, arguments, function* (e3 = {}) {
    let t2 = l(`creator`), n2 = document.createElement(`div`);
    n2.classList.add(t2.b());
    let r3 = document.createElement(`div`);
    r3.classList.add(t2.be(`input`));
    let { item: i2, input: a2, errorTip: o2 } = fe(e3.rowText || `Row`, { type: `number`, value: String(e3.row || ``), max: 99 }), { item: s2, input: c2, errorTip: u2 } = fe(e3.colText || `Column`, { type: `number`, value: String(e3.col || ``), max: 99 });
    r3.appendChild(i2), r3.appendChild(s2), n2.appendChild(r3);
    let d2 = document.createElement(`div`);
    d2.classList.add(t2.be(`control`));
    let f2 = se({ type: `confirm`, content: e3.confirmText || `Confirm` }), p2 = se({ type: `default`, content: e3.cancelText || `Cancel` });
    d2.appendChild(f2), d2.appendChild(p2), n2.appendChild(d2);
    let m2 = (t3 = Number(a2.value), n3 = Number(c2.value)) => {
      if (Number.isNaN(t3) || t3 <= 0) {
        o2(e3.notPositiveNumberError || `Please enter a positive integer`);
        return;
      }
      if (Number.isNaN(n3) || n3 <= 0) {
        u2(e3.notPositiveNumberError || `Please enter a positive integer`);
        return;
      }
      return { row: t3, col: n3 };
    }, h2 = (e4) => {
      e4.key === `Escape` && (close(), document.removeEventListener(`keydown`, h2));
    };
    return new Promise((e4, t3) => {
      let { close: r4 } = ue({ child: n2, beforeClose: t3 });
      a2.focus();
      for (let t4 of [a2, c2]) t4.addEventListener(`keydown`, (t5) => {
        if (t5.key === `Enter`) {
          let t6 = m2();
          t6 && (e4(t6), r4());
        }
      });
      f2.addEventListener(`click`, () => {
        let t4 = m2();
        t4 && (e4(t4), r4());
      }), document.addEventListener(`keydown`, h2), p2.addEventListener(`click`, r4);
    }).finally(() => {
      document.removeEventListener(`keydown`, h2);
    });
  });
}
function T(e3 = {}) {
  let t2 = l(`select-box`), n2 = document.createElement(`div`);
  n2.classList.add(t2.b());
  let r3 = document.createElement(`div`);
  r3.classList.add(t2.be(`block`));
  for (let n3 = 0; n3 < (e3.row || 8); n3++) for (let i3 = 0; i3 < (e3.col || 8); i3++) {
    let e4 = document.createElement(`div`);
    e4.classList.add(t2.be(`item`)), e4.dataset.row = String(n3 + 1), e4.dataset.col = String(i3 + 1), r3.appendChild(e4);
  }
  let i2 = () => {
    let { row: e4, col: t3 } = n2.dataset;
    for (let e5 of Array.from(r3.querySelectorAll(`.active`))) e5.classList.remove(`active`);
    if (!e4 || !t3) return;
    let i3 = Array.from(r3.children);
    for (let n3 of i3) {
      let { row: r4, col: i4 } = n3.dataset;
      if (r4 > e4 && i4 > t3) return;
      n3.classList.toggle(`active`, r4 <= e4 && i4 <= t3);
    }
  };
  if (r3.addEventListener(`mousemove`, (e4) => {
    if (!e4.target) return;
    let { row: t3, col: r4 } = e4.target.dataset;
    !t3 || !r4 || (n2.dataset.row = t3, n2.dataset.col = r4, i2());
  }), r3.addEventListener(`mouseleave`, () => {
    n2.removeAttribute(`data-row`), n2.removeAttribute(`data-col`), i2();
  }), r3.addEventListener(`click`, () => {
    let { row: t3, col: r4 } = n2.dataset;
    !t3 || !r4 || e3.onSelect?.(Number(t3), Number(r4));
  }), n2.appendChild(r3), e3.customBtn) {
    let r4 = e3.texts || {}, i3 = document.createElement(`div`);
    i3.classList.add(t2.be(`custom`)), i3.textContent = r4.customBtnText || `Custom`, i3.addEventListener(`click`, () => __async(null, null, function* () {
      let t3 = yield pe(r4);
      t3 && e3.onSelect?.(t3.row, t3.col);
    })), n2.appendChild(i3);
  }
  return n2;
}
var me = Math.min;
var E = Math.max;
var he = Math.round;
var ge = Math.floor;
var D = (e3) => ({ x: e3, y: e3 });
var _e = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
var ve = { start: `end`, end: `start` };
function ye(e3, t2, n2) {
  return E(e3, me(t2, n2));
}
function be(e3, t2) {
  return typeof e3 == `function` ? e3(t2) : e3;
}
function O(e3) {
  return e3.split(`-`)[0];
}
function xe(e3) {
  return e3.split(`-`)[1];
}
function Se(e3) {
  return e3 === `x` ? `y` : `x`;
}
function Ce(e3) {
  return e3 === `y` ? `height` : `width`;
}
var we = /* @__PURE__ */ new Set([`top`, `bottom`]);
function k(e3) {
  return we.has(O(e3)) ? `y` : `x`;
}
function Te(e3) {
  return Se(k(e3));
}
function Ee(e3, t2, n2) {
  n2 === void 0 && (n2 = false);
  let r3 = xe(e3), i2 = Te(e3), a2 = Ce(i2), o2 = i2 === `x` ? r3 === (n2 ? `end` : `start`) ? `right` : `left` : r3 === `start` ? `bottom` : `top`;
  return t2.reference[a2] > t2.floating[a2] && (o2 = Fe(o2)), [o2, Fe(o2)];
}
function De(e3) {
  let t2 = Fe(e3);
  return [Oe(e3), t2, Oe(t2)];
}
function Oe(e3) {
  return e3.replace(/start|end/g, (e4) => ve[e4]);
}
var ke = [`left`, `right`];
var Ae = [`right`, `left`];
var je = [`top`, `bottom`];
var Me = [`bottom`, `top`];
function Ne(e3, t2, n2) {
  switch (e3) {
    case `top`:
    case `bottom`:
      return n2 ? t2 ? Ae : ke : t2 ? ke : Ae;
    case `left`:
    case `right`:
      return t2 ? je : Me;
    default:
      return [];
  }
}
function Pe(e3, t2, n2, r3) {
  let i2 = xe(e3), a2 = Ne(O(e3), n2 === `start`, r3);
  return i2 && (a2 = a2.map((e4) => e4 + `-` + i2), t2 && (a2 = a2.concat(a2.map(Oe)))), a2;
}
function Fe(e3) {
  return e3.replace(/left|right|bottom|top/g, (e4) => _e[e4]);
}
function Ie(e3) {
  return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, e3);
}
function Le(e3) {
  return typeof e3 == `number` ? { top: e3, right: e3, bottom: e3, left: e3 } : Ie(e3);
}
function Re(e3) {
  let { x: t2, y: n2, width: r3, height: i2 } = e3;
  return { width: r3, height: i2, top: n2, left: t2, right: t2 + r3, bottom: n2 + i2, x: t2, y: n2 };
}
function ze(e3, t2, n2) {
  let { reference: r3, floating: i2 } = e3, a2 = k(t2), o2 = Te(t2), s2 = Ce(o2), c2 = O(t2), l2 = a2 === `y`, u2 = r3.x + r3.width / 2 - i2.width / 2, d2 = r3.y + r3.height / 2 - i2.height / 2, f2 = r3[s2] / 2 - i2[s2] / 2, p2;
  switch (c2) {
    case `top`:
      p2 = { x: u2, y: r3.y - i2.height };
      break;
    case `bottom`:
      p2 = { x: u2, y: r3.y + r3.height };
      break;
    case `right`:
      p2 = { x: r3.x + r3.width, y: d2 };
      break;
    case `left`:
      p2 = { x: r3.x - i2.width, y: d2 };
      break;
    default:
      p2 = { x: r3.x, y: r3.y };
  }
  switch (xe(t2)) {
    case `start`:
      p2[o2] -= f2 * (n2 && l2 ? -1 : 1);
      break;
    case `end`:
      p2[o2] += f2 * (n2 && l2 ? -1 : 1);
      break;
  }
  return p2;
}
var Be = (e3, t2, n2) => __async(null, null, function* () {
  let { placement: r3 = `bottom`, strategy: i2 = `absolute`, middleware: a2 = [], platform: o2 } = n2, s2 = a2.filter(Boolean), c2 = yield o2.isRTL == null ? void 0 : o2.isRTL(t2), l2 = yield o2.getElementRects({ reference: e3, floating: t2, strategy: i2 }), { x: u2, y: d2 } = ze(l2, r3, c2), f2 = r3, p2 = {}, m2 = 0;
  for (let n3 = 0; n3 < s2.length; n3++) {
    let { name: a3, fn: h2 } = s2[n3], { x: g2, y: _2, data: v2, reset: y2 } = yield h2({ x: u2, y: d2, initialPlacement: r3, placement: f2, strategy: i2, middlewareData: p2, rects: l2, platform: o2, elements: { reference: e3, floating: t2 } });
    u2 = g2 ?? u2, d2 = _2 ?? d2, p2 = __spreadProps(__spreadValues({}, p2), { [a3]: __spreadValues(__spreadValues({}, p2[a3]), v2) }), y2 && m2 <= 50 && (m2++, typeof y2 == `object` && (y2.placement && (f2 = y2.placement), y2.rects && (l2 = y2.rects === true ? yield o2.getElementRects({ reference: e3, floating: t2, strategy: i2 }) : y2.rects), { x: u2, y: d2 } = ze(l2, f2, c2)), n3 = -1);
  }
  return { x: u2, y: d2, placement: f2, strategy: i2, middlewareData: p2 };
});
function Ve(e3, t2) {
  return __async(this, null, function* () {
    t2 === void 0 && (t2 = {});
    let { x: n2, y: r3, platform: i2, rects: a2, elements: o2, strategy: s2 } = e3, { boundary: c2 = `clippingAncestors`, rootBoundary: l2 = `viewport`, elementContext: u2 = `floating`, altBoundary: d2 = false, padding: f2 = 0 } = be(t2, e3), p2 = Le(f2), m2 = o2[d2 ? u2 === `floating` ? `reference` : `floating` : u2], h2 = Re(yield i2.getClippingRect({ element: (yield i2.isElement == null ? void 0 : i2.isElement(m2)) ?? true ? m2 : m2.contextElement || (yield i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(o2.floating)), boundary: c2, rootBoundary: l2, strategy: s2 })), g2 = u2 === `floating` ? { x: n2, y: r3, width: a2.floating.width, height: a2.floating.height } : a2.reference, _2 = yield i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(o2.floating), v2 = (yield i2.isElement == null ? void 0 : i2.isElement(_2)) && (yield i2.getScale == null ? void 0 : i2.getScale(_2)) || { x: 1, y: 1 }, y2 = Re(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o2, rect: g2, offsetParent: _2, strategy: s2 }) : g2);
    return { top: (h2.top - y2.top + p2.top) / v2.y, bottom: (y2.bottom - h2.bottom + p2.bottom) / v2.y, left: (h2.left - y2.left + p2.left) / v2.x, right: (y2.right - h2.right + p2.right) / v2.x };
  });
}
var He = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: `flip`, options: e3, fn(t2) {
    return __async(this, null, function* () {
      var n2;
      let { placement: r3, middlewareData: i2, rects: a2, initialPlacement: o2, platform: s2, elements: c2 } = t2, _a2 = be(e3, t2), { mainAxis: l2 = true, crossAxis: u2 = true, fallbackPlacements: d2, fallbackStrategy: f2 = `bestFit`, fallbackAxisSideDirection: p2 = `none`, flipAlignment: m2 = true } = _a2, h2 = __objRest(_a2, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]);
      if ((n2 = i2.arrow) != null && n2.alignmentOffset) return {};
      let g2 = O(r3), _2 = k(o2), v2 = O(o2) === o2, y2 = yield s2.isRTL == null ? void 0 : s2.isRTL(c2.floating), b2 = d2 || (v2 || !m2 ? [Fe(o2)] : De(o2)), ee2 = p2 !== `none`;
      !d2 && ee2 && b2.push(...Pe(o2, m2, p2, y2));
      let te2 = [o2, ...b2], x2 = yield Ve(t2, h2), S2 = [], C2 = i2.flip?.overflows || [];
      if (l2 && S2.push(x2[g2]), u2) {
        let e4 = Ee(r3, a2, y2);
        S2.push(x2[e4[0]], x2[e4[1]]);
      }
      if (C2 = [...C2, { placement: r3, overflows: S2 }], !S2.every((e4) => e4 <= 0)) {
        let e4 = (i2.flip?.index || 0) + 1, t3 = te2[e4];
        if (t3 && (!(u2 === `alignment` && _2 !== k(t3)) || C2.every((e5) => k(e5.placement) === _2 ? e5.overflows[0] > 0 : true))) return { data: { index: e4, overflows: C2 }, reset: { placement: t3 } };
        let n3 = C2.filter((e5) => e5.overflows[0] <= 0).sort((e5, t4) => e5.overflows[1] - t4.overflows[1])[0]?.placement;
        if (!n3) switch (f2) {
          case `bestFit`: {
            let e5 = C2.filter((e6) => {
              if (ee2) {
                let t4 = k(e6.placement);
                return t4 === _2 || t4 === `y`;
              }
              return true;
            }).map((e6) => [e6.placement, e6.overflows.filter((e7) => e7 > 0).reduce((e7, t4) => e7 + t4, 0)]).sort((e6, t4) => e6[1] - t4[1])[0]?.[0];
            e5 && (n3 = e5);
            break;
          }
          case `initialPlacement`:
            n3 = o2;
            break;
        }
        if (r3 !== n3) return { reset: { placement: n3 } };
      }
      return {};
    });
  } };
};
var Ue = /* @__PURE__ */ new Set([`left`, `top`]);
function We(e3, t2) {
  return __async(this, null, function* () {
    let { placement: n2, platform: r3, elements: i2 } = e3, a2 = yield r3.isRTL == null ? void 0 : r3.isRTL(i2.floating), o2 = O(n2), s2 = xe(n2), c2 = k(n2) === `y`, l2 = Ue.has(o2) ? -1 : 1, u2 = a2 && c2 ? -1 : 1, d2 = be(t2, e3), { mainAxis: f2, crossAxis: p2, alignmentAxis: m2 } = typeof d2 == `number` ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: d2.mainAxis || 0, crossAxis: d2.crossAxis || 0, alignmentAxis: d2.alignmentAxis };
    return s2 && typeof m2 == `number` && (p2 = s2 === `end` ? m2 * -1 : m2), c2 ? { x: p2 * u2, y: f2 * l2 } : { x: f2 * l2, y: p2 * u2 };
  });
}
var Ge = function(e3) {
  return e3 === void 0 && (e3 = 0), { name: `offset`, options: e3, fn(t2) {
    return __async(this, null, function* () {
      var n2;
      let { x: r3, y: i2, placement: a2, middlewareData: o2 } = t2, s2 = yield We(t2, e3);
      return a2 === o2.offset?.placement && (n2 = o2.arrow) != null && n2.alignmentOffset ? {} : { x: r3 + s2.x, y: i2 + s2.y, data: __spreadProps(__spreadValues({}, s2), { placement: a2 }) };
    });
  } };
};
var Ke = function(e3) {
  return e3 === void 0 && (e3 = {}), { name: `shift`, options: e3, fn(t2) {
    return __async(this, null, function* () {
      let { x: n2, y: r3, placement: i2 } = t2, _a2 = be(e3, t2), { mainAxis: a2 = true, crossAxis: o2 = false, limiter: s2 = { fn: (e4) => {
        let { x: t3, y: n3 } = e4;
        return { x: t3, y: n3 };
      } } } = _a2, c2 = __objRest(_a2, ["mainAxis", "crossAxis", "limiter"]), l2 = { x: n2, y: r3 }, u2 = yield Ve(t2, c2), d2 = k(O(i2)), f2 = Se(d2), p2 = l2[f2], m2 = l2[d2];
      if (a2) {
        let e4 = f2 === `y` ? `top` : `left`, t3 = f2 === `y` ? `bottom` : `right`, n3 = p2 + u2[e4], r4 = p2 - u2[t3];
        p2 = ye(n3, p2, r4);
      }
      if (o2) {
        let e4 = d2 === `y` ? `top` : `left`, t3 = d2 === `y` ? `bottom` : `right`, n3 = m2 + u2[e4], r4 = m2 - u2[t3];
        m2 = ye(n3, m2, r4);
      }
      let h2 = s2.fn(__spreadProps(__spreadValues({}, t2), { [f2]: p2, [d2]: m2 }));
      return __spreadProps(__spreadValues({}, h2), { data: { x: h2.x - n2, y: h2.y - r3, enabled: { [f2]: a2, [d2]: o2 } } });
    });
  } };
};
var qe = function(e3) {
  return e3 === void 0 && (e3 = {}), { options: e3, fn(t2) {
    let { x: n2, y: r3, placement: i2, rects: a2, middlewareData: o2 } = t2, { offset: s2 = 0, mainAxis: c2 = true, crossAxis: l2 = true } = be(e3, t2), u2 = { x: n2, y: r3 }, d2 = k(i2), f2 = Se(d2), p2 = u2[f2], m2 = u2[d2], h2 = be(s2, t2), g2 = typeof h2 == `number` ? { mainAxis: h2, crossAxis: 0 } : __spreadValues({ mainAxis: 0, crossAxis: 0 }, h2);
    if (c2) {
      let e4 = f2 === `y` ? `height` : `width`, t3 = a2.reference[f2] - a2.floating[e4] + g2.mainAxis, n3 = a2.reference[f2] + a2.reference[e4] - g2.mainAxis;
      p2 < t3 ? p2 = t3 : p2 > n3 && (p2 = n3);
    }
    if (l2) {
      let e4 = f2 === `y` ? `width` : `height`, t3 = Ue.has(O(i2)), n3 = a2.reference[d2] - a2.floating[e4] + (t3 && o2.offset?.[d2] || 0) + (t3 ? 0 : g2.crossAxis), r4 = a2.reference[d2] + a2.reference[e4] + (t3 ? 0 : o2.offset?.[d2] || 0) - (t3 ? g2.crossAxis : 0);
      m2 < n3 ? m2 = n3 : m2 > r4 && (m2 = r4);
    }
    return { [f2]: p2, [d2]: m2 };
  } };
};
function Je() {
  return typeof window < `u`;
}
function Ye(e3) {
  return Xe(e3) ? (e3.nodeName || ``).toLowerCase() : `#document`;
}
function A(e3) {
  var t2;
  return (e3 == null || (t2 = e3.ownerDocument) == null ? void 0 : t2.defaultView) || window;
}
function j(e3) {
  return ((Xe(e3) ? e3.ownerDocument : e3.document) || window.document)?.documentElement;
}
function Xe(e3) {
  return Je() ? e3 instanceof Node || e3 instanceof A(e3).Node : false;
}
function M(e3) {
  return Je() ? e3 instanceof Element || e3 instanceof A(e3).Element : false;
}
function N(e3) {
  return Je() ? e3 instanceof HTMLElement || e3 instanceof A(e3).HTMLElement : false;
}
function Ze(e3) {
  return !Je() || typeof ShadowRoot > `u` ? false : e3 instanceof ShadowRoot || e3 instanceof A(e3).ShadowRoot;
}
var Qe = /* @__PURE__ */ new Set([`inline`, `contents`]);
function $e(e3) {
  let { overflow: t2, overflowX: n2, overflowY: r3, display: i2 } = P(e3);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + r3 + n2) && !Qe.has(i2);
}
var et = /* @__PURE__ */ new Set([`table`, `td`, `th`]);
function tt(e3) {
  return et.has(Ye(e3));
}
var nt = [`:popover-open`, `:modal`];
function rt(e3) {
  return nt.some((t2) => {
    try {
      return e3.matches(t2);
    } catch {
      return false;
    }
  });
}
var it = [`transform`, `translate`, `scale`, `rotate`, `perspective`];
var at = [`transform`, `translate`, `scale`, `rotate`, `perspective`, `filter`];
var ot = [`paint`, `layout`, `strict`, `content`];
function st(e3) {
  let t2 = lt(), n2 = M(e3) ? P(e3) : e3;
  return it.some((e4) => n2[e4] ? n2[e4] !== `none` : false) || (n2.containerType ? n2.containerType !== `normal` : false) || !t2 && (n2.backdropFilter ? n2.backdropFilter !== `none` : false) || !t2 && (n2.filter ? n2.filter !== `none` : false) || at.some((e4) => (n2.willChange || ``).includes(e4)) || ot.some((e4) => (n2.contain || ``).includes(e4));
}
function ct(e3) {
  let t2 = F(e3);
  for (; N(t2) && !dt(t2); ) {
    if (st(t2)) return t2;
    if (rt(t2)) return null;
    t2 = F(t2);
  }
  return null;
}
function lt() {
  return typeof CSS > `u` || !CSS.supports ? false : CSS.supports(`-webkit-backdrop-filter`, `none`);
}
var ut = /* @__PURE__ */ new Set([`html`, `body`, `#document`]);
function dt(e3) {
  return ut.has(Ye(e3));
}
function P(e3) {
  return A(e3).getComputedStyle(e3);
}
function ft(e3) {
  return M(e3) ? { scrollLeft: e3.scrollLeft, scrollTop: e3.scrollTop } : { scrollLeft: e3.scrollX, scrollTop: e3.scrollY };
}
function F(e3) {
  if (Ye(e3) === `html`) return e3;
  let t2 = e3.assignedSlot || e3.parentNode || Ze(e3) && e3.host || j(e3);
  return Ze(t2) ? t2.host : t2;
}
function pt(e3) {
  let t2 = F(e3);
  return dt(t2) ? e3.ownerDocument ? e3.ownerDocument.body : e3.body : N(t2) && $e(t2) ? t2 : pt(t2);
}
function mt(e3, t2, n2) {
  t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = true);
  let r3 = pt(e3), i2 = r3 === e3.ownerDocument?.body, a2 = A(r3);
  if (i2) {
    let e4 = ht(a2);
    return t2.concat(a2, a2.visualViewport || [], $e(r3) ? r3 : [], e4 && n2 ? mt(e4) : []);
  }
  return t2.concat(r3, mt(r3, [], n2));
}
function ht(e3) {
  return e3.parent && Object.getPrototypeOf(e3.parent) ? e3.frameElement : null;
}
function gt(e3) {
  let t2 = P(e3), n2 = parseFloat(t2.width) || 0, r3 = parseFloat(t2.height) || 0, i2 = N(e3), a2 = i2 ? e3.offsetWidth : n2, o2 = i2 ? e3.offsetHeight : r3, s2 = he(n2) !== a2 || he(r3) !== o2;
  return s2 && (n2 = a2, r3 = o2), { width: n2, height: r3, $: s2 };
}
function _t(e3) {
  return M(e3) ? e3 : e3.contextElement;
}
function vt(e3) {
  let t2 = _t(e3);
  if (!N(t2)) return D(1);
  let n2 = t2.getBoundingClientRect(), { width: r3, height: i2, $: a2 } = gt(t2), o2 = (a2 ? he(n2.width) : n2.width) / r3, s2 = (a2 ? he(n2.height) : n2.height) / i2;
  return (!o2 || !Number.isFinite(o2)) && (o2 = 1), (!s2 || !Number.isFinite(s2)) && (s2 = 1), { x: o2, y: s2 };
}
var yt = D(0);
function bt(e3) {
  let t2 = A(e3);
  return !lt() || !t2.visualViewport ? yt : { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop };
}
function xt(e3, t2, n2) {
  return t2 === void 0 && (t2 = false), !n2 || t2 && n2 !== A(e3) ? false : t2;
}
function St(e3, t2, n2, r3) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  let i2 = e3.getBoundingClientRect(), a2 = _t(e3), o2 = D(1);
  t2 && (r3 ? M(r3) && (o2 = vt(r3)) : o2 = vt(e3));
  let s2 = xt(a2, n2, r3) ? bt(a2) : D(0), c2 = (i2.left + s2.x) / o2.x, l2 = (i2.top + s2.y) / o2.y, u2 = i2.width / o2.x, d2 = i2.height / o2.y;
  if (a2) {
    let e4 = A(a2), t3 = r3 && M(r3) ? A(r3) : r3, n3 = e4, i3 = ht(n3);
    for (; i3 && r3 && t3 !== n3; ) {
      let e5 = vt(i3), t4 = i3.getBoundingClientRect(), r4 = P(i3), a3 = t4.left + (i3.clientLeft + parseFloat(r4.paddingLeft)) * e5.x, o3 = t4.top + (i3.clientTop + parseFloat(r4.paddingTop)) * e5.y;
      c2 *= e5.x, l2 *= e5.y, u2 *= e5.x, d2 *= e5.y, c2 += a3, l2 += o3, n3 = A(i3), i3 = ht(n3);
    }
  }
  return Re({ width: u2, height: d2, x: c2, y: l2 });
}
function Ct(e3, t2) {
  let n2 = ft(e3).scrollLeft;
  return t2 ? t2.left + n2 : St(j(e3)).left + n2;
}
function wt(e3, t2) {
  let n2 = e3.getBoundingClientRect();
  return { x: n2.left + t2.scrollLeft - Ct(e3, n2), y: n2.top + t2.scrollTop };
}
function Tt(e3) {
  let { elements: t2, rect: n2, offsetParent: r3, strategy: i2 } = e3, a2 = i2 === `fixed`, o2 = j(r3), s2 = t2 ? rt(t2.floating) : false;
  if (r3 === o2 || s2 && a2) return n2;
  let c2 = { scrollLeft: 0, scrollTop: 0 }, l2 = D(1), u2 = D(0), d2 = N(r3);
  if ((d2 || !d2 && !a2) && ((Ye(r3) !== `body` || $e(o2)) && (c2 = ft(r3)), N(r3))) {
    let e4 = St(r3);
    l2 = vt(r3), u2.x = e4.x + r3.clientLeft, u2.y = e4.y + r3.clientTop;
  }
  let f2 = o2 && !d2 && !a2 ? wt(o2, c2) : D(0);
  return { width: n2.width * l2.x, height: n2.height * l2.y, x: n2.x * l2.x - c2.scrollLeft * l2.x + u2.x + f2.x, y: n2.y * l2.y - c2.scrollTop * l2.y + u2.y + f2.y };
}
function Et(e3) {
  return Array.from(e3.getClientRects());
}
function Dt(e3) {
  let t2 = j(e3), n2 = ft(e3), r3 = e3.ownerDocument.body, i2 = E(t2.scrollWidth, t2.clientWidth, r3.scrollWidth, r3.clientWidth), a2 = E(t2.scrollHeight, t2.clientHeight, r3.scrollHeight, r3.clientHeight), o2 = -n2.scrollLeft + Ct(e3), s2 = -n2.scrollTop;
  return P(r3).direction === `rtl` && (o2 += E(t2.clientWidth, r3.clientWidth) - i2), { width: i2, height: a2, x: o2, y: s2 };
}
function Ot(e3, t2) {
  let n2 = A(e3), r3 = j(e3), i2 = n2.visualViewport, a2 = r3.clientWidth, o2 = r3.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    let e4 = lt();
    (!e4 || e4 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  let l2 = Ct(r3);
  if (l2 <= 0) {
    let e4 = r3.ownerDocument, t3 = e4.body, n3 = getComputedStyle(t3), i3 = e4.compatMode === `CSS1Compat` && parseFloat(n3.marginLeft) + parseFloat(n3.marginRight) || 0, o3 = Math.abs(r3.clientWidth - t3.clientWidth - i3);
    o3 <= 25 && (a2 -= o3);
  } else l2 <= 25 && (a2 += l2);
  return { width: a2, height: o2, x: s2, y: c2 };
}
var kt = /* @__PURE__ */ new Set([`absolute`, `fixed`]);
function At(e3, t2) {
  let n2 = St(e3, true, t2 === `fixed`), r3 = n2.top + e3.clientTop, i2 = n2.left + e3.clientLeft, a2 = N(e3) ? vt(e3) : D(1);
  return { width: e3.clientWidth * a2.x, height: e3.clientHeight * a2.y, x: i2 * a2.x, y: r3 * a2.y };
}
function jt(e3, t2, n2) {
  let r3;
  if (t2 === `viewport`) r3 = Ot(e3, n2);
  else if (t2 === `document`) r3 = Dt(j(e3));
  else if (M(t2)) r3 = At(t2, n2);
  else {
    let n3 = bt(e3);
    r3 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
  }
  return Re(r3);
}
function Mt(e3, t2) {
  let n2 = F(e3);
  return n2 === t2 || !M(n2) || dt(n2) ? false : P(n2).position === `fixed` || Mt(n2, t2);
}
function Nt(e3, t2) {
  let n2 = t2.get(e3);
  if (n2) return n2;
  let r3 = mt(e3, [], false).filter((e4) => M(e4) && Ye(e4) !== `body`), i2 = null, a2 = P(e3).position === `fixed`, o2 = a2 ? F(e3) : e3;
  for (; M(o2) && !dt(o2); ) {
    let t3 = P(o2), n3 = st(o2);
    !n3 && t3.position === `fixed` && (i2 = null), (a2 ? !n3 && !i2 : !n3 && t3.position === `static` && i2 && kt.has(i2.position) || $e(o2) && !n3 && Mt(e3, o2)) ? r3 = r3.filter((e4) => e4 !== o2) : i2 = t3, o2 = F(o2);
  }
  return t2.set(e3, r3), r3;
}
function Pt(e3) {
  let { element: t2, boundary: n2, rootBoundary: r3, strategy: i2 } = e3, a2 = [...n2 === `clippingAncestors` ? rt(t2) ? [] : Nt(t2, this._c) : [].concat(n2), r3], o2 = a2[0], s2 = a2.reduce((e4, n3) => {
    let r4 = jt(t2, n3, i2);
    return e4.top = E(r4.top, e4.top), e4.right = me(r4.right, e4.right), e4.bottom = me(r4.bottom, e4.bottom), e4.left = E(r4.left, e4.left), e4;
  }, jt(t2, o2, i2));
  return { width: s2.right - s2.left, height: s2.bottom - s2.top, x: s2.left, y: s2.top };
}
function Ft(e3) {
  let { width: t2, height: n2 } = gt(e3);
  return { width: t2, height: n2 };
}
function It(e3, t2, n2) {
  let r3 = N(t2), i2 = j(t2), a2 = n2 === `fixed`, o2 = St(e3, true, a2, t2), s2 = { scrollLeft: 0, scrollTop: 0 }, c2 = D(0);
  function l2() {
    c2.x = Ct(i2);
  }
  if (r3 || !r3 && !a2) if ((Ye(t2) !== `body` || $e(i2)) && (s2 = ft(t2)), r3) {
    let e4 = St(t2, true, a2, t2);
    c2.x = e4.x + t2.clientLeft, c2.y = e4.y + t2.clientTop;
  } else i2 && l2();
  a2 && !r3 && i2 && l2();
  let u2 = i2 && !r3 && !a2 ? wt(i2, s2) : D(0);
  return { x: o2.left + s2.scrollLeft - c2.x - u2.x, y: o2.top + s2.scrollTop - c2.y - u2.y, width: o2.width, height: o2.height };
}
function Lt(e3) {
  return P(e3).position === `static`;
}
function Rt(e3, t2) {
  if (!N(e3) || P(e3).position === `fixed`) return null;
  if (t2) return t2(e3);
  let n2 = e3.offsetParent;
  return j(e3) === n2 && (n2 = n2.ownerDocument.body), n2;
}
function zt(e3, t2) {
  let n2 = A(e3);
  if (rt(e3)) return n2;
  if (!N(e3)) {
    let t3 = F(e3);
    for (; t3 && !dt(t3); ) {
      if (M(t3) && !Lt(t3)) return t3;
      t3 = F(t3);
    }
    return n2;
  }
  let r3 = Rt(e3, t2);
  for (; r3 && tt(r3) && Lt(r3); ) r3 = Rt(r3, t2);
  return r3 && dt(r3) && Lt(r3) && !st(r3) ? n2 : r3 || ct(e3) || n2;
}
var Bt = function(e3) {
  return __async(this, null, function* () {
    let t2 = this.getOffsetParent || zt, n2 = this.getDimensions, r3 = yield n2(e3.floating);
    return { reference: It(e3.reference, yield t2(e3.floating), e3.strategy), floating: { x: 0, y: 0, width: r3.width, height: r3.height } };
  });
};
function Vt(e3) {
  return P(e3).direction === `rtl`;
}
var Ht = { convertOffsetParentRelativeRectToViewportRelativeRect: Tt, getDocumentElement: j, getClippingRect: Pt, getOffsetParent: zt, getElementRects: Bt, getClientRects: Et, getDimensions: Ft, getScale: vt, isElement: M, isRTL: Vt };
function Ut(e3, t2) {
  return e3.x === t2.x && e3.y === t2.y && e3.width === t2.width && e3.height === t2.height;
}
function Wt(e3, t2) {
  let n2 = null, r3, i2 = j(e3);
  function a2() {
    var e4;
    clearTimeout(r3), (e4 = n2) == null || e4.disconnect(), n2 = null;
  }
  function o2(s2, c2) {
    s2 === void 0 && (s2 = false), c2 === void 0 && (c2 = 1), a2();
    let l2 = e3.getBoundingClientRect(), { left: u2, top: d2, width: f2, height: p2 } = l2;
    if (s2 || t2(), !f2 || !p2) return;
    let m2 = ge(d2), h2 = ge(i2.clientWidth - (u2 + f2)), g2 = ge(i2.clientHeight - (d2 + p2)), _2 = ge(u2), v2 = { rootMargin: -m2 + `px ` + -h2 + `px ` + -g2 + `px ` + -_2 + `px`, threshold: E(0, me(1, c2)) || 1 }, y2 = true;
    function b2(t3) {
      let n3 = t3[0].intersectionRatio;
      if (n3 !== c2) {
        if (!y2) return o2();
        n3 ? o2(false, n3) : r3 = setTimeout(() => {
          o2(false, 1e-7);
        }, 1e3);
      }
      n3 === 1 && !Ut(l2, e3.getBoundingClientRect()) && o2(), y2 = false;
    }
    try {
      n2 = new IntersectionObserver(b2, __spreadProps(__spreadValues({}, v2), { root: i2.ownerDocument }));
    } catch {
      n2 = new IntersectionObserver(b2, v2);
    }
    n2.observe(e3);
  }
  return o2(true), a2;
}
function Gt(e3, t2, n2, r3) {
  r3 === void 0 && (r3 = {});
  let { ancestorScroll: i2 = true, ancestorResize: a2 = true, elementResize: o2 = typeof ResizeObserver == `function`, layoutShift: s2 = typeof IntersectionObserver == `function`, animationFrame: c2 = false } = r3, l2 = _t(e3), u2 = i2 || a2 ? [...l2 ? mt(l2) : [], ...mt(t2)] : [];
  u2.forEach((e4) => {
    i2 && e4.addEventListener(`scroll`, n2, { passive: true }), a2 && e4.addEventListener(`resize`, n2);
  });
  let d2 = l2 && s2 ? Wt(l2, n2) : null, f2 = -1, p2 = null;
  o2 && (p2 = new ResizeObserver((e4) => {
    let [r4] = e4;
    r4 && r4.target === l2 && p2 && (p2.unobserve(t2), cancelAnimationFrame(f2), f2 = requestAnimationFrame(() => {
      var e5;
      (e5 = p2) == null || e5.observe(t2);
    })), n2();
  }), l2 && !c2 && p2.observe(l2), p2.observe(t2));
  let m2, h2 = c2 ? St(e3) : null;
  c2 && g2();
  function g2() {
    let t3 = St(e3);
    h2 && !Ut(h2, t3) && n2(), h2 = t3, m2 = requestAnimationFrame(g2);
  }
  return n2(), () => {
    var e4;
    u2.forEach((e5) => {
      i2 && e5.removeEventListener(`scroll`, n2), a2 && e5.removeEventListener(`resize`, n2);
    }), d2?.(), (e4 = p2) == null || e4.disconnect(), p2 = null, c2 && cancelAnimationFrame(m2);
  };
}
var Kt = Ge;
var qt = Ke;
var Jt = He;
var Yt = qe;
var Xt = (e3, t2, n2) => {
  let r3 = /* @__PURE__ */ new Map(), i2 = __spreadValues({ platform: Ht }, n2), a2 = __spreadProps(__spreadValues({}, i2.platform), { _c: r3 });
  return Be(e3, t2, __spreadProps(__spreadValues({}, i2), { platform: a2 }));
};
function Zt(e3, t2, n2, r3, i2) {
  return i2 && clearTimeout(i2), e3.addEventListener(`transitionend`, n2, r3), setTimeout(() => {
    n2();
  }, t2);
}
function Qt(e3, t2 = {}) {
  let { msg: n2 = ``, delay: r3 = 150, content: i2, direction: a2 = `bottom`, type: o2 = `hover`, container: s2, onOpen: c2, onClose: u2, closed: d2, onDestroy: f2 } = t2, p2 = l(`tooltip`);
  if (n2 || i2) {
    let t3 = s2 || document.body, l2 = document.createElement(`div`);
    l2.classList.add(p2.b(), `hidden`, `transparent`), i2 ? l2.appendChild(i2) : n2 && (l2.textContent = n2);
    let m2, h2, g2, _2 = () => {
      g2 && g2(), Xt(e3, l2, { placement: a2, middleware: [Jt(), qt({ limiter: Yt() }), Kt(4)] }).then(({ x: e4, y: t4 }) => {
        Object.assign(l2.style, { left: `${e4}px`, top: `${t4}px` });
      });
    }, v2 = () => {
      l2.classList.add(`hidden`), t3.contains(l2) && t3.removeChild(l2), g2 && g2(), d2 && d2();
    }, y2 = (n3 = false) => {
      h2 && clearTimeout(h2), m2 = setTimeout(() => {
        if (c2) {
          let e4 = c2(n3);
          if (!n3 && e4) return;
        }
        t3.appendChild(l2), l2.removeEventListener(`transitionend`, v2), l2.classList.remove(`hidden`), g2 = Gt(e3, l2, _2), l2.classList.remove(`transparent`);
      }, r3);
    }, b2 = (e4 = false) => {
      m2 && clearTimeout(m2), h2 = setTimeout(() => {
        if (u2) {
          let t4 = u2(e4);
          if (!e4 && t4) return;
        }
        Zt(l2, 150, v2, { once: true }), l2.classList.add(`transparent`);
      }, r3);
    }, { prepare: ee2, show: te2, hide: x2, destroy: S2 } = { hover: () => {
      let t4 = [e3, l2], n3 = b2.bind(void 0, false), r4 = y2.bind(void 0, false);
      return { prepare: () => {
        for (let e4 of t4) e4.addEventListener(`mouseenter`, r4), e4.addEventListener(`mouseleave`, n3);
      }, show: y2, hide: b2, destroy: () => {
        for (let e4 of t4) e4.removeEventListener(`mouseenter`, r4), e4.removeEventListener(`mouseleave`, n3);
      } };
    }, click: () => {
      let t4 = (e4) => {
        e4.stopPropagation(), b2(false);
      }, n3 = (e4) => {
        e4.stopPropagation(), y2(), document.removeEventListener(`click`, t4), document.addEventListener(`click`, t4, { once: true });
      };
      return { prepare: () => {
        l2.addEventListener(`click`, (e4) => e4.stopPropagation()), e3.addEventListener(`click`, n3);
      }, show: y2, hide: (e4 = false) => {
        b2(e4), document.removeEventListener(`click`, t4);
      }, destroy: () => {
        e3.removeEventListener(`click`, n3), document.removeEventListener(`click`, t4);
      } };
    } }[o2]();
    return ee2(), { show: te2, hide: x2, destroy: () => {
      x2(true), f2 && f2(), S2(), g2 && g2(), l2.remove();
    } };
  }
  return null;
}
function $t(e3, t2 = {}) {
  let { axis: n2 = `both`, onMove: r3 = () => {
  }, onStart: i2 = () => {
  }, onEnd: a2 = () => {
  }, buttons: o2 = [0], container: s2, draggingElement: c2 = document, exact: l2 = true } = t2, u2 = { x: 0, y: 0 }, d2, f2 = { x: 0, y: 0 };
  function p2(t3) {
    if (!d2) return;
    let r4 = e3.getBoundingClientRect(), { x: i3, y: a3 } = u2;
    (n2 === `x` || n2 === `both`) && (i3 = t3.clientX - d2.x, s2 && (i3 = Math.min(Math.max(0, i3), s2.scrollWidth - r4.width))), (n2 === `y` || n2 === `both`) && (a3 = t3.clientY - d2.y, s2 && (a3 = Math.min(Math.max(0, a3), s2.scrollHeight - r4.height))), u2 = { x: i3, y: a3 };
  }
  function m2(t3) {
    if (!o2.includes(t3.button) || l2 && t3.target !== e3) return;
    c2.addEventListener(`pointerup`, g2), c2.addEventListener(`pointermove`, h2);
    let n3 = s2?.getBoundingClientRect?.(), r4 = e3.getBoundingClientRect(), a3 = { x: t3.clientX - (s2 ? r4.left - n3.left + s2.scrollLeft : r4.left), y: t3.clientY - (s2 ? r4.top - n3.top + s2.scrollTop : r4.top) };
    f2 = { x: t3.clientX, y: t3.clientY }, i2({ position: u2, startPosition: a3, movePosition: { x: t3.clientX - f2.x, y: t3.clientY - f2.y } }, t3) !== false && (d2 = a3, u2 = a3);
  }
  function h2(e4) {
    d2 && (p2(e4), r3({ position: u2, startPosition: d2, movePosition: { x: e4.clientX - f2.x, y: e4.clientY - f2.y } }, e4));
  }
  function g2(e4) {
    c2.removeEventListener(`pointermove`, h2), c2.removeEventListener(`pointerup`, g2), p2(e4), a2({ position: u2, startPosition: d2, movePosition: { x: e4.clientX - f2.x, y: e4.clientY - f2.y } }, e4), d2 = void 0, f2 = { x: 0, y: 0 }, u2 = { x: 0, y: 0 };
  }
  return c2.addEventListener(`pointerdown`, m2), { stop: () => {
    c2.removeEventListener(`pointerdown`, m2);
  } };
}
function en(e3, t2, n2 = 0, r3 = true) {
  let { x: i2, y: a2, x1: o2, y1: s2 } = e3, { x: c2, y: l2, x1: u2, y1: d2 } = t2, f2, p2;
  return r3 ? (f2 = o2 < c2 + n2 || i2 - n2 > u2, p2 = s2 < l2 + n2 || a2 - n2 > d2) : (f2 = o2 <= c2 + n2 || i2 - n2 >= u2, p2 = s2 <= l2 + n2 || a2 - n2 >= d2), !(f2 || p2);
}
function tn(e3, t2) {
  let n2 = t2.getBoundingClientRect();
  return { x: e3.x - n2.x - t2.scrollLeft, y: e3.y - n2.y - t2.scrollTop, x1: e3.x - n2.x - t2.scrollLeft + e3.width, y1: e3.y - n2.y - t2.scrollTop + e3.height, width: e3.width, height: e3.height };
}
function nn(e3) {
  let { left: t2, top: n2, width: r3, height: i2 } = e3, { clientWidth: a2, clientHeight: o2 } = document.documentElement, s2 = false, c2 = false;
  return t2 + r3 > a2 ? (t2 = a2 - r3 - 8, s2 = true) : t2 < 0 && (t2 = 8, s2 = true), n2 + i2 > o2 ? (n2 = o2 - i2 - 8, c2 = true) : n2 < 0 && (n2 = 8, c2 = true), { left: t2, top: n2, leftLimited: s2, topLimited: c2 };
}
function rn(e3, t2 = {}) {
  let n2 = Symbol(`ignoreFirstBind`), r3 = /* @__PURE__ */ new Set(), i2 = new ResizeObserver((r4) => {
    t2.ignoreFirstBind && r4.some((e4) => {
      let t3 = e4.target, r5 = t3[n2];
      return t3[n2] = true, !r5;
    }) || e3(r4);
  }), a2 = i2.observe.bind(i2);
  i2.observe = (e4, t3) => {
    r3.add(e4), a2(e4, t3);
  };
  let o2 = i2.unobserve;
  i2.unobserve = (e4) => {
    r3.has(e4) && (r3.delete(e4), e4[n2] = void 0), o2.call(i2, e4);
  };
  let s2 = i2.disconnect;
  return i2.disconnect = () => {
    for (let e4 of r3.values()) e4[n2] = void 0;
    s2.call(i2);
  }, i2;
}
function I(e3, t2) {
  e3.addEventListener(`scroll`, t2), this.scrollHandler.push([e3, t2]);
}
function an(e3, t2) {
  for (let n2 = 0; n2 < this.scrollHandler.length; n2++) {
    let [r3, i2] = this.scrollHandler[n2];
    if (r3 === e3 && i2 === t2) {
      this.scrollHandler.splice(n2, 1);
      break;
    }
  }
}
function L() {
  for (let [e3, t2] of this.scrollHandler) e3.removeEventListener(`scroll`, t2);
  this.scrollHandler = [];
}
function on(e3) {
  return { y: e3.scrollTop, x: e3.scrollLeft };
}
function sn({ target: e3 = document.body } = {}) {
  let t2 = document.createElement(`div`);
  Object.assign(t2.style, { visibility: `hidden`, width: `100px`, height: `100%`, overflow: `auto`, position: `absolute`, top: `-9999px` }), e3.appendChild(t2);
  let n2 = t2.offsetWidth;
  t2.style.overflow = `scroll`;
  let r3 = document.createElement(`div`);
  r3.style.width = `100%`, t2.appendChild(r3);
  let i2 = r3.offsetWidth;
  return t2.parentNode?.removeChild(t2), n2 - i2;
}
var cn = class {
  mouseY = 0;
  mouseX = 0;
  animationId = null;
  constructor(e3 = 50, t2 = 20, n2 = 20) {
    this.scrollThresholdX = e3, this.scrollThresholdY = t2, this.maxScrollSpeed = n2;
  }
  checkMinY(e3) {
    return this.mouseY < e3.top + this.scrollThresholdY;
  }
  checkMaxY(e3) {
    return this.mouseY > e3.bottom - this.scrollThresholdY;
  }
  checkMinX(e3) {
    return this.mouseX < e3.left + this.scrollThresholdX;
  }
  checkMaxX(e3) {
    return this.mouseX > e3.right - this.scrollThresholdX;
  }
  start(e3, t2) {
    let n2 = e3.getBoundingClientRect(), r3 = () => {
      let i2 = false, a2 = 0, o2 = 0;
      if (this.checkMinY(n2)) {
        let t3 = n2.top + this.scrollThresholdY - this.mouseY, r4 = Math.min(t3 / this.scrollThresholdY * this.maxScrollSpeed, this.maxScrollSpeed);
        e3.scrollTop -= r4, o2 = -1 * r4, i2 = true;
      } else if (this.checkMaxY(n2)) {
        let t3 = this.mouseY - (n2.bottom - this.scrollThresholdY), r4 = Math.min(t3 / this.scrollThresholdY * this.maxScrollSpeed, this.maxScrollSpeed);
        e3.scrollTop += r4, o2 = r4, i2 = true;
      }
      if (this.checkMinX(n2)) {
        let t3 = n2.left + this.scrollThresholdX - this.mouseX, r4 = Math.min(t3 / this.scrollThresholdX * this.maxScrollSpeed, this.maxScrollSpeed);
        e3.scrollLeft -= r4, a2 = -1 * r4, i2 = true;
      } else if (this.checkMaxX(n2)) {
        let t3 = this.mouseX - (n2.right - this.scrollThresholdX), r4 = Math.min(t3 / this.scrollThresholdX * this.maxScrollSpeed, this.maxScrollSpeed);
        e3.scrollLeft += r4, a2 = r4, i2 = true;
      }
      i2 && t2 && t2(a2, o2), this.animationId = requestAnimationFrame(r3);
    };
    this.animationId = requestAnimationFrame(r3);
  }
  updateMousePosition(e3, t2) {
    this.mouseX = e3, this.mouseY = t2;
  }
  stop() {
    this.animationId !== null && (cancelAnimationFrame(this.animationId), this.animationId = null);
  }
};
function ln(e3) {
  return e3.replaceAll(/([A-Z])/g, ` $1`).trim().split(` `).join(`-`).toLowerCase();
}
function un(e3) {
  return e3.replaceAll(/-(\w)/g, (e4, t2) => t2.toUpperCase());
}
function dn(e3) {
  let t2 = {};
  if (!e3.style.cssText) return t2;
  let n2 = e3.style.cssText.split(`;`).filter((e4) => e4.trim());
  for (let e4 of n2) {
    let n3 = e4.indexOf(`:`);
    if (n3 === -1) continue;
    let r3 = e4.slice(0, n3).trim();
    t2[r3] = e4.slice(n3 + 1).trim();
  }
  return t2;
}
function fn(e3) {
  let t2 = {}, n2 = e3.trim().split(`;`);
  for (let e4 of n2) {
    let n3 = e4.trim();
    if (!n3) continue;
    let r3 = n3.indexOf(`:`);
    if (r3 === -1) continue;
    let i2 = n3.slice(0, Math.max(0, r3)).trim(), a2 = n3.slice(Math.max(0, r3 + 1)).trim();
    t2[un(i2)] = a2;
  }
  return t2;
}
function pn(e3) {
  return Object.entries(e3).map(([e4, t2]) => `${ln(e4)}: ${t2};`).join(` `);
}
var R = () => Math.random().toString(36).slice(2);
function mn(e3, t2) {
  let n2;
  return function(...r3) {
    n2 && clearTimeout(n2), n2 = setTimeout(() => {
      e3.apply(this, r3);
    }, t2);
  };
}
var hn = quill_default.import(`parchment`);
var gn = quill_default.import(`blots/container`);
var _n = quill_default.import(`blots/block`);
var vn = quill_default.import(`blots/block/embed`);
var z = class e extends gn {
  static tagName;
  static blotName = t.container;
  static scope = hn.Scope.BLOCK_BLOT;
  static allowedChildren = [_n, vn, gn];
  static requiredContainer;
  static defaultChild;
  static allowAttrs = /* @__PURE__ */ new Set();
  static allowDataAttrs = /* @__PURE__ */ new Set();
  static allowDataAttrsChangeHandler = {};
  static create(e3) {
    let t2 = document.createElement(this.tagName);
    return this.className && t2.classList.add(this.className), t2;
  }
  setFormatValue(e3, t2) {
    if (this.statics.allowAttrs.has(e3) || this.statics.allowDataAttrs.has(e3)) {
      let n2 = e3;
      this.statics.allowDataAttrs.has(e3) && (n2 = `data-${e3}`), t2 ? this.domNode.setAttribute(n2, t2) : this.domNode.removeAttribute(n2);
      let r3 = this.statics.allowDataAttrsChangeHandler[e3];
      r3 && S(this[r3]) && this[r3](t2);
    }
  }
  optimize(e3) {
    if (this.children.length === 0) if (this.statics.defaultChild != null) {
      let e4 = this.scroll.create(this.statics.defaultChild.blotName);
      this.appendChild(e4);
    } else this.remove();
    this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
  enforceAllowedChildren() {
    this.children.forEach((t2) => {
      this.statics.allowedChildren.some((e3) => t2 instanceof e3) || (t2.statics.scope === hn.Scope.BLOCK_BLOT ? (t2.parent instanceof e ? (t2.next != null && t2.parent.splitAfter(t2), t2.prev != null && t2.parent.splitAfter(t2.prev)) : (t2.next != null && this.splitAfter(t2), t2.prev != null && this.splitAfter(t2.prev)), t2.parent.unwrap()) : t2 instanceof hn.ParentBlot ? t2.unwrap() : t2.remove());
    });
  }
};
var B = (e3) => ae(e3) ? e3 : 1;
function yn(e3, t2) {
  return Object.keys(e3).every((n2) => JSON.stringify(e3[n2]) === JSON.stringify(t2[n2]));
}
var bn = quill_default.import(`parchment`);
var xn = quill_default.import(`blots/block`);
var Sn = quill_default.import(`blots/block/embed`);
var Cn = quill_default.import(`blots/container`);
var wn = class extends xn {
  replaceWith(e3, n2) {
    let r3 = w(e3) ? this.scroll.create(e3, n2) : e3;
    if (r3 instanceof bn.ParentBlot) if (r3.statics.blotName === t.tableCellInner) {
      let e4 = null;
      try {
        if (e4 = u(this, t.tableCellInner), yn(e4.formats(), r3.formats())) return e4;
      } catch {
      }
      if (e4) e4.insertBefore(r3, this), r3.appendChild(this), e4.children.length === 0 && e4.remove();
      else {
        let e5 = this, t2 = e5;
        for (; e5.parent !== this.scroll && e5.parent instanceof Cn; ) t2 = e5, e5 = e5.parent;
        e5 === this.scroll && (e5 = t2);
        let n3 = this.offset(e5), i2 = this.length(), a2 = e5.isolate(n3, i2);
        a2?.parent && a2.parent.insertBefore(r3, a2.next), r3.appendChild(this);
      }
      return r3;
    } else this.moveChildren(r3);
    return this.parent !== null && (this.parent.insertBefore(r3, this.next), this.remove()), this.attributes.copy(r3), r3;
  }
  format(e3, n2) {
    if (e3 === t.tableCellInner && this.parent.statics.blotName === e3 && !n2) {
      if (this.prev && this.prev instanceof Sn) return;
      try {
        u(this, t.tableCellInner).unwrap();
      } catch {
        console.error(`unwrap TableCellInner error`);
      }
    } else super.format(e3, n2);
  }
};
var Tn = quill_default.import(`blots/block/embed`);
var En = class extends Tn {
  delta() {
    let e3 = super.delta(), n2 = Dn(this);
    return n2[t.tableCellInner] && e3.insert(`
`, { [t.tableCellInner]: n2[t.tableCellInner] }), e3;
  }
  length() {
    return Dn(this)[t.tableCellInner] ? super.length() + 1 : super.length();
  }
  formatAt(e3, n2, r3, i2) {
    if (r3 === t.tableCellInner) try {
      let e4 = u(this, t.tableCellInner), n3 = this.scroll.create(t.tableCellInner, i2);
      e4.insertBefore(n3, this), n3.appendChild(this), e4.length() === 0 && e4.remove();
    } catch {
    }
    else this.format(r3, i2);
  }
};
function Dn(e3, t2 = {}, n2 = true) {
  return e3 == null || (`formats` in e3 && typeof e3.formats == `function` && (t2 = __spreadValues(__spreadValues({}, t2), e3.formats()), n2 && delete t2[`code-token`]), e3.parent == null || e3.parent.statics.blotName === `scroll` || e3.parent.statics.scope !== e3.statics.scope) ? t2 : Dn(e3.parent, t2, n2);
}
var V = class extends z {
  static blotName = t.tableBody;
  static tagName = `tbody`;
  static create(e3) {
    let t2 = super.create();
    return t2.dataset.tableId = e3, t2;
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  checkMerge() {
    let e3 = this.next;
    return e3 !== null && e3.statics.blotName === this.statics.blotName && e3.tableId === this.tableId;
  }
  optimize(e3) {
    let n2 = this.parent;
    if (n2 !== null && n2.statics.blotName !== t.tableMain) {
      let { tableId: e4 } = this;
      this.wrap(t.tableMain, { tableId: e4 });
    }
    super.optimize(e3);
  }
  convertBody(e3) {
    let t2 = this.descendants(H);
    for (let n2 of t2) n2.wrapTag = e3;
  }
  getRows() {
    return Array.from(this.domNode.querySelectorAll(`tr`)).map((e3) => this.scroll.find(e3)).filter(Boolean);
  }
};
var On = quill_default.import(`blots/block`);
var kn = quill_default.import(`blots/block/embed`);
var H = class extends z {
  static blotName = t.tableCellInner;
  static tagName = `div`;
  static className = `ql-table-cell-inner`;
  static allowDataAttrs = /* @__PURE__ */ new Set([`table-id`, `row-id`, `col-id`, `rowspan`, `colspan`, `empty-row`, `wrap-tag`]);
  static defaultChild = On;
  static allowStyle = /* @__PURE__ */ new Set([`background-color`, `border`, `height`]);
  static isAllowStyle(e3) {
    let t2 = un(e3);
    for (let e4 of this.allowStyle) if (t2.startsWith(un(e4))) return true;
    return false;
  }
  static create(e3) {
    let { tableId: t2, rowId: n2, colId: r3, rowspan: i2, colspan: a2, style: o2, emptyRow: s2, tag: c2 = `td`, wrapTag: l2 = `tbody` } = e3, u2 = super.create();
    u2.dataset.tableId = t2, u2.dataset.rowId = n2, u2.dataset.colId = r3, u2.dataset.rowspan = String(B(i2)), u2.dataset.colspan = String(B(a2)), u2.dataset.tag = c2, u2.dataset.wrapTag = l2, o2 && (u2.dataset.style = o2);
    try {
      s2 && (u2.dataset.emptyRow = JSON.stringify(s2));
    } catch {
    }
    return u2;
  }
  static formats(e3) {
    let { tableId: t2, rowId: n2, colId: r3, rowspan: i2, colspan: a2, style: o2, emptyRow: s2, tag: c2 = `td`, wrapTag: l2 = `tbody` } = e3.dataset, u2 = { tableId: String(t2), rowId: String(n2), colId: String(r3), rowspan: Number(B(i2)), colspan: Number(B(a2)), tag: c2, wrapTag: l2 };
    o2 && (u2.style = o2);
    try {
      s2 && (u2.emptyRow = JSON.parse(s2));
    } catch {
    }
    return u2;
  }
  constructor(e3, t2, n2) {
    super(e3, t2), t2.setAttribute(`contenteditable`, String(e3.isEnabled()));
  }
  setFormatValue(e3, n2, r3 = false) {
    if (r3) {
      if (!this.statics.isAllowStyle(e3)) return;
    } else super.setFormatValue(e3, n2);
    this.parent && this.parent.statics.blotName === t.tableCell && this.parent.setFormatValue(e3, n2), this.clearCache();
  }
  clearCache() {
    let e3 = this.descendants(On, 0);
    for (let t2 of e3) t2.cache = {};
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  get rowId() {
    return this.domNode.dataset.rowId;
  }
  set rowId(e3) {
    this.setFormatValue(`row-id`, e3);
  }
  get colId() {
    return this.domNode.dataset.colId;
  }
  set colId(e3) {
    this.setFormatValue(`col-id`, e3);
  }
  get rowspan() {
    return Number(this.domNode.dataset.rowspan);
  }
  set rowspan(e3) {
    this.setFormatValue(`rowspan`, e3);
  }
  get colspan() {
    return Number(this.domNode.dataset.colspan);
  }
  set colspan(e3) {
    this.setFormatValue(`colspan`, e3);
  }
  get emptyRow() {
    try {
      return JSON.parse(this.domNode.dataset.emptyRow);
    } catch {
      return [];
    }
  }
  set emptyRow(e3) {
    if (this.emptyRow.toString() !== e3.toString()) try {
      e3.length > 0 ? this.setFormatValue(`empty-row`, JSON.stringify(e3), false) : this.setFormatValue(`empty-row`, null, false);
    } catch {
      this.setFormatValue(`empty-row`, null, false);
    }
  }
  set wrapTag(e3) {
    this.setFormatValue(`wrap-tag`, e3);
  }
  get wrapTag() {
    return this.domNode.dataset.wrapTag || `tbody`;
  }
  getColumnIndex() {
    return u(this, t.tableMain).getColIds().indexOf(this.colId);
  }
  getRowIndex() {
    return u(this, t.tableMain).getRowIds().indexOf(this.rowId);
  }
  getTableBody() {
    let e3 = this.parent;
    for (; e3 && !(e3 instanceof V) && e3 !== this.scroll; ) e3 = e3.parent;
    return e3 === this.scroll ? null : e3;
  }
  getTableRow() {
    try {
      return u(this, t.tableRow);
    } catch {
      return null;
    }
  }
  setStyleByString(e3) {
    let t2 = fn(e3);
    for (let [e4, n2] of Object.entries(t2)) this.setFormatValue(e4, n2, true);
  }
  convertTableCell() {
    this.parent.statics.blotName === t.tableCell && (this.parent.convertTableCell(), this.clearCache());
  }
  formatAt(e3, t2, n2, r3) {
    if (this.children.length === 0) {
      let e4 = this.scroll.create(this.statics.defaultChild.blotName);
      this.appendChild(e4), t2 += e4.length();
    }
    super.formatAt(e3, t2, n2, r3), r3?.style && this.setStyleByString(r3.style);
  }
  insertAt(e3, t2, n2) {
    let [r3] = this.children.find(e3);
    if (!r3 && this.statics.defaultChild) {
      let e4 = this.scroll.create(this.statics.defaultChild.blotName || `block`);
      this.appendChild(e4);
    }
    super.insertAt(e3, t2, n2), (n2 == null ? this.scroll.create(`text`, t2) : this.scroll.create(t2, n2)) instanceof kn && r3 && r3.length() <= 1 && r3.remove();
  }
  formats() {
    let e3 = this.statics.formats(this.domNode);
    return { [this.statics.blotName]: e3 };
  }
  checkMerge() {
    let { colId: e3, rowId: t2, colspan: n2, rowspan: r3 } = this, i2 = this.next;
    return i2 !== null && i2.statics.blotName === this.statics.blotName && i2.rowId === t2 && i2.colId === e3 && i2.colspan === n2 && i2.rowspan === r3;
  }
  optimize() {
    let e3 = this.parent, n2 = this.statics.formats(this.domNode);
    if (this.prev && this.prev instanceof kn) {
      let e4 = this.prev;
      if (this.insertBefore(e4, this.children.head), this.length() <= 1) {
        let t2 = this.scroll.create(`block`);
        this.insertBefore(t2, e4.next);
      }
    }
    let r3 = e3 !== null && e3.statics.blotName !== t.tableCell;
    if (r3 && (this.wrap(t.tableCell, n2), this.children.length === 0)) {
      let e4 = this.scroll.create(this.statics.defaultChild.blotName);
      this.appendChild(e4);
    }
    this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove()), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0 ? this.remove() : this.domNode.dataset.style && r3 && e3.domNode.style.cssText !== this.domNode.dataset.style && this.setStyleByString(this.domNode.dataset.style);
  }
  insertBefore(e3, n2) {
    if (e3.statics.blotName === this.statics.blotName) {
      let r3 = e3, i2 = this.statics.formats(r3.domNode), a2 = this.statics.formats(this.domNode);
      if (yn(a2, i2)) {
        let e4 = this.split(n2 ? n2.offset() : 0);
        return this.parent.insertBefore(r3, e4);
      } else {
        let [e4, o2] = d(this, [t.tableRow, t.tableCell]), s2 = o2;
        if (n2) {
          let r4 = n2.offset(), i3 = this.length();
          if (r4 !== 0 && r4 < i3) {
            let n3 = this.split(r4).wrap(t.tableCell, a2);
            e4.insertBefore(n3, o2.next), s2 = n3;
          }
        }
        if (this.tableId !== r3.tableId) {
          let e5 = u(this, t.tableWrapper), n3 = this.offset(e5), i3 = e5.split(n3);
          return e5.parent.insertBefore(r3, i3);
        }
        if (this.rowId !== r3.rowId) {
          let a3 = e4, o3 = n2;
          if (o3) {
            let t2 = o3.offset(e4);
            a3 = e4.split(t2);
          }
          let s3 = this.scroll.create(t.tableRow, i2), c2 = this.scroll.create(t.tableCell, i2);
          return c2.appendChild(r3), s3.appendChild(c2), e4.parent.insertBefore(s3, a3);
        }
        return e4.insertBefore(r3.wrap(t.tableCell, i2), s2);
      }
    } else if (e3.statics.blotName === t.tableCol) {
      try {
        let n3 = u(this, t.tableBody), r3 = this.offset(n3), i2 = n3.split(r3);
        n3.parent.insertBefore(e3, i2), e3.optimize({});
      } catch {
        console.warn(`TableCellInner not in TableBody`);
      }
      return;
    }
    super.insertBefore(e3, n2);
  }
};
var An = quill_default.import(`parchment`);
var jn = quill_default.import(`blots/scroll`);
var Mn = class extends jn {
  enable(n2 = true) {
    let r3 = quill_default.import(`formats/${t.tableCellInner}`), i2 = this.domNode.querySelectorAll(`.${r3.className}`);
    for (let e3 of Array.from(i2)) e3.setAttribute(`contenteditable`, String(!!n2));
    let a2 = quill_default.import(`formats/${t.tableCaption}`), o2 = this.domNode.querySelectorAll(`.${a2.className}`);
    for (let e3 of Array.from(o2)) e3.setAttribute(`contenteditable`, String(!!n2));
    super.enable(n2);
  }
  createBlock(e3, n2) {
    let r3, i2 = {};
    if (e3[t.tableCellInner]) r3 = t.tableCellInner;
    else for (let [t2, n3] of Object.entries(e3)) this.query(t2, An.Scope.BLOCK & An.Scope.BLOT) == null ? i2[t2] = n3 : r3 = t2;
    r3 === t.tableCellInner && (i2 = __spreadValues({}, e3), delete i2[r3]);
    let a2 = this.create(r3 || this.statics.defaultChild.blotName, r3 ? e3[r3] : void 0);
    this.insertBefore(a2, n2 || void 0);
    let o2 = a2.length();
    a2 instanceof H && o2 === 0 && (o2 += 1);
    for (let [e4, t2] of Object.entries(i2)) a2.formatAt(0, o2, e4, t2);
    return a2;
  }
};
var Nn = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE -->
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M7 3v18m3-15L7 3L4 6m16 12l-3 3l-3-3m3 3V3"
  />
</svg>
`;
var Pn = quill_default.import(`parchment`);
var Fn = quill_default.import(`blots/inline`);
var In = quill_default.import(`blots/text`);
var Ln = class extends wn {
  static blotName = t.tableCaption;
  static tagName = `caption`;
  static className = `ql-table-caption`;
  static allowedChildren = [Fn, In];
  static create(e3) {
    let { tableId: t2 } = e3, n2 = super.create();
    return n2.dataset.tableId = t2, e3.side === `bottom` && (n2.style.captionSide = `bottom`), n2;
  }
  static formats(e3) {
    let { tableId: t2 } = e3.dataset;
    return { tableId: t2, side: e3.style.captionSide === `bottom` ? `bottom` : `top` };
  }
  constructor(e3, t2, n2) {
    super(e3, t2), t2.setAttribute(`contenteditable`, String(e3.isEnabled())), this.attachUI(this.createUI()), this.domNode.addEventListener(`mouseenter`, () => {
      this.scroll.isEnabled() && (this.uiNode.style.display = `flex`);
    }), this.domNode.addEventListener(`mouseleave`, () => {
      this.scroll.isEnabled() && (this.uiNode.style.display = `none`);
    }), this.uiNode.style.display = `none`;
  }
  createUI() {
    let e3 = document.createElement(`i`);
    return e3.classList.add(`ql-table-caption--switch`), e3.innerHTML = Nn, e3.addEventListener(`click`, () => {
      this.scroll.isEnabled() && (this.side = this.side === `top` ? `bottom` : `top`);
    }), e3;
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  set side(e3) {
    this.domNode.style.captionSide = e3 === `bottom` ? `bottom` : `top`;
  }
  get side() {
    return this.domNode.style.captionSide === `bottom` ? `bottom` : `top`;
  }
  format(e3, t2) {
    (!this.scroll.query(e3, Pn.Scope.BLOCK_BLOT) || e3 === this.statics.blotName) && super.format(e3, t2);
  }
  checkMerge() {
    let e3 = this.next;
    return e3 !== null && e3.statics.blotName === this.statics.blotName && e3.tableId === this.tableId;
  }
  optimize(e3) {
    let n2 = this.parent;
    if (n2 !== null && n2.statics.blotName !== t.tableMain) {
      let { tableId: e4 } = this;
      this.wrap(t.tableMain, { tableId: e4 });
    }
    this.children.length === 0 ? this.remove() : (super.optimize(e3), this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove()));
  }
};
var U = class e2 extends z {
  static blotName = t.tableRow;
  static tagName = `tr`;
  static className = `ql-table-row`;
  static allowDataAttrs = /* @__PURE__ */ new Set([`table-id`, `row-id`, `wrap-tag`]);
  static allowDataAttrsChangeHandler = { "wrap-tag": `wrapParentTag` };
  static create(e3) {
    let { tableId: t2, rowId: n2, wrapTag: r3 = `tbody` } = e3, i2 = super.create();
    return i2.dataset.tableId = t2, i2.dataset.rowId = n2, i2.dataset.wrapTag = r3, i2;
  }
  get rowId() {
    return this.domNode.dataset.rowId;
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  get wrapTag() {
    return this.domNode.dataset.wrapTag || `tbody`;
  }
  setHeight(e3) {
    this.foreachCellInner((t2) => {
      t2.setFormatValue(`height`, e3, true);
    });
  }
  getCellByColId(e3, n2) {
    let r3 = u(this, t.tableMain).getColIds(), i2 = r3.indexOf(e3), a2 = this.children.iterator(), o2 = null;
    for (; o2 = a2(); ) {
      if (o2.colId === e3) return o2;
      let t2 = r3.indexOf(o2.colId);
      if (t2 < i2 && t2 + o2.colspan > i2) return o2;
    }
    return this[n2] && this[n2].statics.blotName === t.tableRow ? this[n2].getCellByColId(e3, n2) : null;
  }
  insertCell(e3, n2) {
    let r3 = [], i2 = this.children.iterator(), a2 = 0, o2;
    for (; (o2 = i2()) && (a2 += o2.colspan, !(a2 > e3)); ) if (o2.rowspan !== 1) for (let e4 = 0; e4 < o2.rowspan - 1; e4++) r3[e4] = (r3[e4] || 0) + o2.colspan;
    if (o2 && a2 - o2.colspan < e3) {
      let e4 = o2.getCellInner();
      e4.colspan += 1, o2.rowspan !== 1 && (r3.skipRowNum = o2.rowspan - 1);
    } else {
      let e4 = this.scroll.create(t.tableCell, n2), r4 = this.scroll.create(t.tableCellInner, n2), i3 = this.scroll.create(`block`);
      i3.appendChild(this.scroll.create(`break`)), r4.appendChild(i3), e4.appendChild(r4), this.insertBefore(e4, o2);
    }
    return r3;
  }
  getCellByColumIndex(e3) {
    let t2 = [], n2 = null, r3 = 0;
    if (e3 < 0) return [n2, r3, t2];
    let i2 = this.children.iterator();
    for (; n2 = i2(); ) {
      if (r3 += n2.colspan, n2.rowspan !== 1) for (let e4 = 0; e4 < n2.rowspan - 1; e4++) t2[e4] = (t2[e4] || 0) + n2.colspan;
      if (r3 > e3) break;
    }
    return [n2, r3, t2];
  }
  removeCell(e3) {
    if (e3 < 0) return [];
    let n2 = this.getCellByColumIndex(e3), [r3, i2] = n2, a2 = n2[2];
    if (!r3) return a2;
    if (i2 - r3.colspan < e3 || r3.colspan > 1) {
      let [n3] = r3.descendants(H);
      if (r3.colspan !== 1 && e3 === i2 - r3.colspan) {
        let e4 = u(this, t.tableMain).getColIds();
        n3.colId = e4[e4.indexOf(n3.colId) + 1];
      }
      r3.rowspan !== 1 && (a2.skipRowNum = r3.rowspan - 1), --n3.colspan;
    } else r3.remove();
    return a2;
  }
  foreachCellInner(e3) {
    let t2 = this.children.iterator(), n2 = 0, r3;
    for (; r3 = t2(); ) {
      let [t3] = r3.descendants(H);
      if (t3 && e3(t3, n2++)) break;
    }
  }
  checkMerge() {
    let e3 = this.next;
    return e3 !== null && e3.statics.blotName === this.statics.blotName && e3.rowId === this.rowId;
  }
  wrapParentTag() {
    let e3 = { thead: t.tableHead, tbody: t.tableBody, tfoot: t.tableFoot }, n2 = this.parent;
    if (n2 !== null && n2.statics.blotName !== e3[this.wrapTag]) if (Object.values(e3).includes(n2.statics.blotName)) {
      let t2 = this.offset(this.parent), n3 = this.parent.split(t2);
      n3 && n3.length() <= 0 && n3.remove();
      let r3 = this.parent.splitAfter(this);
      r3 && r3.length() <= 0 && r3.remove(), this.parent.replaceWith(e3[this.wrapTag], this.tableId);
    } else this.wrap(e3[this.wrapTag], this.tableId);
  }
  optimize(e3) {
    this.wrapParentTag(), this.enforceAllowedChildren(), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
  remove() {
    super.remove(), this.next && this.next instanceof e2 && this.next.length() <= 0 && this.next.remove();
  }
};
var W = class extends z {
  static blotName = t.tableCell;
  static tagName = `td`;
  static className = `ql-table-cell`;
  static allowAttrs = /* @__PURE__ */ new Set([`rowspan`, `colspan`]);
  static allowDataAttrs = /* @__PURE__ */ new Set([`table-id`, `row-id`, `col-id`, `empty-row`, `wrap-tag`]);
  static allowStyle = /* @__PURE__ */ new Set([`background-color`, `border`, `height`]);
  static isAllowStyle(e3) {
    let t2 = un(e3);
    for (let e4 of this.allowStyle) if (t2.startsWith(un(e4))) return true;
    return false;
  }
  static create(e3) {
    let { tableId: t2, rowId: n2, colId: r3, rowspan: i2, colspan: a2, style: o2, emptyRow: s2, tag: c2 = `td`, wrapTag: l2 = `tbody` } = e3, u2 = document.createElement(c2);
    u2.classList.add(...oe(this.className)), u2.dataset.tableId = t2, u2.dataset.rowId = n2, u2.dataset.colId = r3, u2.dataset.wrapTag = l2, u2.setAttribute(`rowspan`, String(B(i2))), u2.setAttribute(`colspan`, String(B(a2))), o2 && (u2.style.cssText = o2);
    try {
      s2 && (u2.dataset.emptyRow = JSON.stringify(s2));
    } catch {
    }
    return u2;
  }
  static formats(e3) {
    let { tableId: t2, rowId: n2, colId: r3, emptyRow: i2, wrapTag: a2 = `tbody` } = e3.dataset, o2 = Number(e3.getAttribute(`rowspan`)), s2 = Number(e3.getAttribute(`colspan`)), c2 = { tableId: t2, rowId: n2, colId: r3, rowspan: B(o2), colspan: B(s2), tag: e3.tagName.toLowerCase(), wrapTag: a2 }, l2 = dn(e3), u2 = Object.entries(l2).filter(([, e4]) => ![`initial`, `inherit`].includes(e4));
    u2.length > 0 && (c2.style = u2.map(([e4, t3]) => `${e4}: ${t3}`).join(`;`));
    try {
      i2 && (c2.emptyRow = JSON.parse(i2));
    } catch {
    }
    return c2;
  }
  isChildHeadTableCellInner() {
    let e3 = this.children.head;
    return e3 && e3.statics.blotName === t.tableCellInner;
  }
  setFormatValue(e3, n2) {
    if (this.statics.allowAttrs.has(e3) || this.statics.allowDataAttrs.has(e3)) {
      let t2 = e3;
      this.statics.allowDataAttrs.has(e3) && (t2 = `data-${e3}`), n2 ? this.domNode.setAttribute(t2, n2) : this.domNode.removeAttribute(t2);
    } else this.statics.isAllowStyle(e3) && (Object.assign(this.domNode.style, { [e3]: n2 }), e3.startsWith(`border`) && this.setStyleBoder(e3, n2));
    let r3 = this.children.head;
    this.isChildHeadTableCellInner() && this.domNode.style.cssText && this.domNode.style.cssText !== r3.domNode.dataset.style && (r3.domNode.dataset.style = this.domNode.style.cssText), this.parent && this.parent.statics.blotName === t.tableRow && this.parent.setFormatValue(e3, n2);
  }
  setStyleBoder(e3, t2) {
    let n2 = t2 || null;
    if (!(![`left`, `right`, `top`, `bottom`].some((t3) => e3.includes(t3)) && e3.startsWith(`border-`))) return;
    let r3 = this.getNearByCell(`left`).map((e4) => e4.descendant(H, 0)[0]).filter(Boolean);
    for (let t3 of r3) t3.setFormatValue(e3.replace(`border-`, `border-right-`), n2, true);
    let i2 = this.getNearByCell(`top`).map((e4) => e4.descendant(H, 0)[0]).filter(Boolean);
    for (let t3 of i2) t3.setFormatValue(e3.replace(`border-`, `border-bottom-`), n2, true);
  }
  getNearByCell(e3) {
    let n2 = [];
    try {
      let e4 = u(this, t.tableMain);
      n2.push(...e4.getColIds());
    } catch (e4) {
      console.error(`Cell is not in table! ${e4}`);
    }
    if (n2.length === 0) return [];
    if (e3 === `left`) {
      let e4 = /* @__PURE__ */ new Set(), t2 = this.parent;
      for (let r3 = 0; r3 < this.rowspan && t2 instanceof U; r3++) {
        let r4 = t2.children.iterator(), i2 = null;
        for (; i2 = r4(); ) {
          let t3 = n2.indexOf(i2.colId) + i2.colspan;
          this.colId === n2[t3] && e4.add(i2);
        }
        t2 = t2.next;
      }
      return Array.from(e4);
    } else if (e3 === `top`) {
      if (!(this.parent instanceof U) || !this.parent.prev) return [];
      let e4 = /* @__PURE__ */ new Set(), t2 = this.getColumnIndex(), r3 = t2 + this.colspan, i2 = new Set(n2.filter((e5, n3) => n3 >= t2 && n3 < r3)), a2 = 1, o2 = this.parent.prev;
      for (; o2; ) {
        let t3 = false, r4 = o2.children.iterator(), s2 = null, c2 = 0;
        for (; s2 = r4(); ) i2.has(s2.colId) && s2.rowspan >= a2 && (e4.add(s2), i2.delete(s2.colId)), c2 += s2.colspan, s2.rowspan >= a2 && (t3 = true);
        if (!t3 && c2 === n2.length) break;
        o2 = o2.prev, a2 += 1;
      }
      return Array.from(e4);
    }
    return [];
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  get rowId() {
    return this.domNode.dataset.rowId;
  }
  get colId() {
    return this.domNode.dataset.colId;
  }
  get rowspan() {
    return Number(this.domNode.getAttribute(`rowspan`));
  }
  get colspan() {
    return Number(this.domNode.getAttribute(`colspan`));
  }
  get emptyRow() {
    try {
      return JSON.parse(this.domNode.dataset.emptyRow);
    } catch {
      return [];
    }
  }
  get wrapTag() {
    return this.domNode.dataset.wrapTag || `tbody`;
  }
  getColumnIndex() {
    return u(this, t.tableMain).getColIds().indexOf(this.colId);
  }
  getCellInner() {
    return this.children.head;
  }
  convertTableCell() {
    let e3 = this.statics.formats(this.domNode), n2 = e3.tag === `td` ? `th` : `td`, r3 = this.children.head;
    this.isChildHeadTableCellInner() && r3.domNode.dataset.tag !== n2 && (r3.domNode.dataset.tag = n2), this.replaceWith(t.tableCell, __spreadProps(__spreadValues({}, e3), { tag: n2 }));
  }
  checkMerge() {
    let { colId: e3, rowId: t2, colspan: n2, rowspan: r3 } = this, i2 = this.next;
    return i2 !== null && i2.statics.blotName === this.statics.blotName && i2.rowId === t2 && i2.colId === e3 && i2.colspan === n2 && i2.rowspan === r3;
  }
  optimize(e3) {
    let { tableId: n2, rowId: r3, wrapTag: i2 } = this;
    if (this.parent !== null && this.parent.statics.blotName !== t.tableRow && this.wrap(t.tableRow, { tableId: n2, rowId: r3, wrapTag: i2 }), this.parent.statics.blotName === t.tableRow && this.parent.wrapTag !== i2 && this.parent.setFormatValue(`wrap-tag`, i2), this.emptyRow.length > 0) {
      let e4 = this.parent.parent;
      if (e4 instanceof V) {
        let r4 = this.parent.next;
        for (let a2 of this.emptyRow) {
          let o2 = this.scroll.create(t.tableRow, { tableId: n2, rowId: a2, wrapTag: i2 });
          e4.insertBefore(o2, r4), r4 = o2.next;
        }
      }
    }
    super.optimize(e3);
  }
};
var Rn = quill_default.import(`blots/block/embed`);
var G = class extends Rn {
  static blotName = t.tableCol;
  static tagName = `col`;
  static validWidth(e3, t2) {
    let r3 = Number.parseFloat(String(e3));
    return Number.isNaN(r3) && (r3 = n[t2 ? `colMinWidthPre` : `colMinWidthPx`]), `${r3}${t2 ? `%` : `px`}`;
  }
  static create(e3) {
    let { width: t2, tableId: n2, colId: r3, full: i2, align: a2 } = e3, o2 = super.create();
    return o2.setAttribute(`width`, this.validWidth(t2, !!i2)), i2 && (o2.dataset.full = String(i2)), a2 && a2 !== `left` && (o2.dataset.align = a2), o2.dataset.tableId = n2, o2.dataset.colId = r3, o2;
  }
  static value(e3) {
    let { tableId: t2, colId: r3 } = e3.dataset, i2 = e3.getAttribute(`width`) || String(n.colDefaultWidth), a2 = e3.dataset.align, o2 = Object.hasOwn(e3.dataset, `full`), s2 = { tableId: String(t2), colId: String(r3), full: o2, width: Number.parseFloat(i2) };
    return a2 && (s2.align = a2), s2;
  }
  get width() {
    let e3 = this.domNode.getAttribute(`width`);
    if (!e3) {
      if (e3 = this.domNode.getBoundingClientRect().width, this.full) {
        let t2 = this.domNode.closest(`table`);
        return t2 ? e3 / 100 * t2.getBoundingClientRect().width : n[this.full ? `colMinWidthPre` : `colMinWidthPx`];
      }
      return e3;
    }
    return Number.parseFloat(String(e3));
  }
  set width(e3) {
    let t2 = Number.parseFloat(String(e3));
    Number.isNaN(t2) && (t2 = n[this.full ? `colMinWidthPre` : `colMinWidthPx`]), this.domNode.setAttribute(`width`, this.statics.validWidth(t2, !!this.full));
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  get colId() {
    return this.domNode.dataset.colId;
  }
  get full() {
    return Object.hasOwn(this.domNode.dataset, `full`);
  }
  set full(e3) {
    e3 ? this.domNode.dataset.full = `true` : this.domNode.removeAttribute(`data-full`);
  }
  get align() {
    return this.domNode.dataset.align || ``;
  }
  set align(e3) {
    e3 === `right` || e3 === `center` ? this.domNode.dataset.align = e3 : this.domNode.removeAttribute(`data-align`);
  }
  checkMerge() {
    let e3 = this.next, { tableId: t2, colId: n2 } = this;
    return e3 !== null && e3.statics.blotName === this.statics.blotName && e3.tableId === t2 && e3.colId === n2;
  }
  optimize(e3) {
    let n2 = this.parent;
    if (n2 != null && n2.statics.blotName !== t.tableColgroup) {
      let e4 = this.statics.value(this.domNode);
      this.wrap(t.tableColgroup, e4);
    }
    let r3 = u(this, t.tableColgroup);
    r3.align = this.align, this.next != null && this.checkMerge() && this.next.remove(), super.optimize(e3);
    try {
      let e4 = u(this, t.tableColgroup), n3 = true;
      e4.children.forEach((e5) => {
        n3 &&= e5.full;
      }), e4.full = n3;
    } catch {
    }
  }
  insertAt(e3, n2, r3) {
    if (r3 != null) {
      if (n2 === this.statics.blotName && r3.tableId !== this.tableId) try {
        let e4 = u(this, t.tableWrapper), i2 = e4.split(this.offset(e4)), a2 = this.scroll.create(n2, r3);
        i2.parent.insertBefore(a2, i2);
      } catch {
        console.warn(`TableCol not in TableColgroup`);
      }
      else super.insertAt(e3, n2, r3);
      return;
    }
    try {
      let e4 = u(this, t.tableWrapper), r4 = e4.split(this.offset(e4)), i2 = n2.split(`
`), a2 = i2.pop(), o2 = i2.map((e5) => {
        let t2 = this.scroll.create(`block`);
        return t2.insertAt(0, e5), t2;
      });
      for (let e5 of o2) r4.parent.insertBefore(e5, r4);
      a2 && r4.parent.insertBefore(this.scroll.create(`text`, a2), r4);
    } catch {
      console.warn(`TableCol not in TableColgroup`);
    }
  }
};
var K = class extends z {
  static blotName = t.tableMain;
  static tagName = `table`;
  static className = `ql-table`;
  static create(e3) {
    let t2 = super.create(), { tableId: n2, full: r3, align: i2 } = e3;
    return t2.dataset.tableId = n2, i2 === `right` || i2 === `center` ? t2.dataset.align = i2 : t2.removeAttribute(`date-align`), r3 && (t2.dataset.full = String(r3)), t2.setAttribute(`cellpadding`, `0`), t2.setAttribute(`cellspacing`, `0`), t2;
  }
  constructor(e3, t2, n2) {
    super(e3, t2), this.scroll = e3, this.updateAlign();
  }
  colWidthFillTable() {
    if (this.full) {
      Object.assign(this.domNode.style, { width: null });
      return;
    }
    let e3 = this.getCols();
    if (!e3) return;
    let t2 = e3.reduce((e4, t3) => t3.width + e4, 0);
    if (!(t2 === 0 || Number.isNaN(t2))) return this.domNode.style.width = `${t2}px`, t2;
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  get full() {
    return Object.hasOwn(this.domNode.dataset, `full`);
  }
  set full(e3) {
    e3 ? this.domNode.dataset.full = `true` : this.domNode.removeAttribute(`data-full`), this.colWidthFillTable();
  }
  get align() {
    return this.domNode.dataset.align || ``;
  }
  set align(e3) {
    e3 === `right` || e3 === `center` ? this.domNode.dataset.align = e3 : this.domNode.removeAttribute(`data-align`), this.updateAlign();
  }
  setFull() {
    if (this.full) return;
    let e3 = this.getCols();
    if (e3.length === 0) return;
    let t2 = Math.floor(this.domNode.getBoundingClientRect().width);
    for (let n2 of e3) {
      let e4 = n2.width / t2 * 100;
      n2.full = true, n2.width = e4;
    }
  }
  cancelFull() {
    if (!this.full) return;
    let e3 = this.getCols();
    if (e3.length === 0) return;
    let t2 = Math.floor(this.domNode.getBoundingClientRect().width);
    for (let r3 of e3) r3.full = false, r3.width = Math.max(r3.width / 100 * t2, n.colMinWidthPx);
  }
  updateAlign() {
    let e3 = this.align, t2 = { marginLeft: null, marginRight: null };
    switch (e3) {
      case `center`:
        t2.marginLeft = `auto`, t2.marginRight = `auto`;
        break;
      case ``:
      case `left`:
        t2.marginRight = `auto`;
        break;
      case `right`:
        t2.marginLeft = `auto`;
        break;
      default:
        break;
    }
    Object.assign(this.domNode.style, t2);
  }
  getBodys() {
    return Array.from(this.domNode.querySelectorAll(`thead, tbody, tfoot`)).map((e3) => this.scroll.find(e3)).filter(Boolean);
  }
  getRows() {
    return Array.from(this.domNode.querySelectorAll(`tr`)).map((e3) => this.scroll.find(e3)).filter(Boolean);
  }
  getRowIds() {
    return this.getRows().map((e3) => e3.rowId);
  }
  getCols() {
    return this.descendants(G);
  }
  getColIds() {
    return this.getCols().map((e3) => e3.colId);
  }
  checkMerge() {
    let e3 = this.next;
    return e3 !== null && e3.statics.blotName === this.statics.blotName && e3.domNode.dataset.tableId === this.tableId;
  }
  optimize(e3) {
    let n2 = this.parent;
    n2 !== null && n2.statics.blotName !== t.tableWrapper && this.wrap(t.tableWrapper, this.tableId), super.optimize(e3), this.mergeRow();
  }
  mergeRow() {
    if (!this.parent) return;
    let e3 = this.getRows(), t2 = {};
    for (let n2 of e3) t2[n2.rowId] || (t2[n2.rowId] = []), t2[n2.rowId].push(n2);
    for (let e4 of Object.values(t2)) for (let t3 = 1; t3 < e4.length; t3++) {
      let n2 = e4[t3];
      n2.moveChildren(e4[0]), n2.remove();
    }
  }
  checkEmptyCol(e3) {
    if (e3) {
      let e4 = this.getRows().length, t2 = this.getCols(), n2 = this.descendants(H);
      for (let r3 of n2) if (r3.colspan > 1 && r3.rowspan >= e4) {
        let e5 = t2.findIndex((e6) => e6.colId === r3.colId), n3 = t2[e5];
        for (let i2 = e5 + 1; i2 < e5 + r3.colspan; i2++) t2[i2].remove(), n3.width += t2[i2].width;
        r3.colspan = 1;
      }
    }
  }
  checkEmptyRow(e3) {
    let n2 = this.getRows(), r3 = new Set(n2.map((e4) => e4.rowId));
    for (let i2 = n2.length - 1; i2 >= 0; i2--) {
      let a2 = n2[i2];
      if (e3) {
        if (a2.children.length === 0) {
          for (let e4 = 1, t2 = i2 - 1; t2 >= 0; t2--, e4++) n2[t2].foreachCellInner((t3) => {
            if (t3.rowspan > e4) {
              --t3.rowspan;
              let e5 = new Set(t3.emptyRow);
              e5.delete(a2.rowId), t3.emptyRow = Array.from(e5);
            }
          });
          a2.remove();
        }
      } else {
        if (a2.children.length === 0 && a2.prev) {
          let e4 = a2.prev;
          for (; e4?.children.length === 0; ) e4 = e4.prev;
          e4.foreachCellInner((e5) => {
            let t2 = new Set(e5.emptyRow);
            t2.has(a2.rowId) || (e5.emptyRow = [a2.rowId, ...t2]);
          });
        }
        a2.foreachCellInner((e4) => {
          for (let n3 of e4.emptyRow) r3.has(n3) || a2.parent.insertBefore(this.scroll.create(t.tableRow, { tableId: this.tableId, rowId: n3 }), a2.next);
        });
      }
    }
  }
  sortMergeChildren() {
    let e3 = { [t.tableCaption]: [], [t.tableColgroup]: [], [t.tableHead]: [], [t.tableBody]: [], [t.tableFoot]: [] };
    this.children.forEach((t2) => {
      e3[t2.statics.blotName] && e3[t2.statics.blotName].push(t2);
    });
    for (let t2 of Object.values(e3)) for (let e4 = 1; e4 < t2.length; e4++) t2[e4].moveChildren(t2[0]);
    let n2 = e3[t.tableCaption][0], r3 = e3[t.tableColgroup][0], i2 = e3[t.tableHead][0], a2 = e3[t.tableBody][0], o2 = e3[t.tableFoot][0], s2 = n2 && this.children.head !== n2, c2 = r3 && n2 && n2.next !== r3, l2 = r3 && !n2 && this.children.head !== r3, u2 = i2 && !a2 && !o2 && this.children.tail !== i2, d2 = a2 && i2 && a2.prev !== i2, f2 = a2 && !o2 && this.children.tail !== a2, p2 = a2 && o2 && a2.next !== o2, m2 = o2 && this.children.tail !== o2;
    if (s2 || c2 || l2 || u2 || d2 || f2 || p2 || m2) {
      let e4 = this.clone();
      n2 && e4.appendChild(n2), r3 && e4.appendChild(r3), i2 && e4.appendChild(i2), a2 && e4.appendChild(a2), o2 && e4.appendChild(o2), this.children.forEach((e5) => e5.remove()), e4.moveChildren(this);
    }
  }
  insertRow(e3) {
    let n2 = this.getColIds(), r3 = this.descendants(U), i2 = new Set(n2), a2 = 0;
    for (let t2 of r3) {
      if (a2 === e3) break;
      t2.foreachCellInner((t3) => {
        if (a2 + t3.rowspan > e3 && (t3.rowspan += 1, i2.delete(t3.colId), t3.colspan !== 1)) {
          let e4 = n2.indexOf(t3.colId);
          for (let r4 = 0; r4 < t3.colspan - 1; r4++) i2.delete(n2[e4 + r4 + 1]);
        }
      }), a2 += 1;
    }
    let o2 = this.tableId, s2 = R(), c2 = this.scroll.create(t.tableRow, { tableId: o2, rowId: s2 });
    for (let e4 of i2) {
      let n3 = this.scroll.create(`break`).wrap(`block`).wrap(t.tableCellInner, { tableId: o2, rowId: s2, colId: e4, rowspan: 1, colspan: 1 }).wrap(t.tableCell, { tableId: o2, rowId: s2, colId: e4, rowspan: 1, colspan: 1 });
      c2.appendChild(n3);
    }
    let l2 = r3[e3] || null;
    l2 ? l2.parent.insertBefore(c2, l2) : r3[r3.length - 1].parent.appendChild(c2);
  }
};
var q = class extends z {
  static blotName = t.tableColgroup;
  static tagName = `colgroup`;
  static create(e3) {
    let t2 = super.create();
    return t2.dataset.tableId = e3.tableId, e3.full && (t2.dataset.full = String(e3.full)), e3.align && e3.align !== `left` && (t2.dataset.align = e3.align), t2.setAttribute(`contenteditable`, `false`), t2;
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  get full() {
    return Object.hasOwn(this.domNode.dataset, `full`);
  }
  set full(e3) {
    e3 ? this.domNode.dataset.full = `true` : this.domNode.removeAttribute(`data-full`), this.parent && this.parent instanceof K && (this.parent.full = e3);
  }
  get align() {
    return this.domNode.dataset.align || ``;
  }
  set align(e3) {
    e3 === `right` || e3 === `center` ? this.domNode.dataset.align = e3 : this.domNode.removeAttribute(`data-align`);
  }
  findCol(e3) {
    let t2 = this.children.iterator(), n2 = 0, r3;
    for (; (r3 = t2()) && n2 !== e3; ) n2++;
    return r3;
  }
  insertColByIndex(e3, r3) {
    let i2 = this.parent;
    if (!(i2 instanceof K)) throw TypeError(`TableColgroupFormat should be child of TableFormat`);
    let a2 = this.findCol(e3), o2 = this.scroll.create(t.tableCol, r3);
    if (i2.full) {
      let e4 = this.children.iterator(), t2;
      for (; t2 = e4(); ) if (t2.width - o2.width >= n.colMinWidthPre) {
        t2.width -= o2.width;
        break;
      }
    }
    this.insertBefore(o2, a2);
  }
  removeColByIndex(e3) {
    let t2 = this.parent;
    if (!(t2 instanceof K)) throw TypeError(`TableColgroupFormat should be child of TableMainFormat`);
    let n2 = this.findCol(e3);
    n2 && (t2.full && (n2.next ? n2.next.width += n2.width : n2.prev && (n2.prev.width += n2.width)), n2.remove(), t2.colWidthFillTable());
  }
  checkMerge() {
    let e3 = this.next, t2 = this.parent;
    return t2 instanceof K && !t2.full && t2.colWidthFillTable(), e3 !== null && e3.statics.blotName === this.statics.blotName && e3.tableId === this.tableId;
  }
  optimize(e3) {
    let n2 = this.parent, { tableId: r3, full: i2, align: a2 } = this;
    n2 != null && n2.statics.blotName !== t.tableMain && this.wrap(t.tableMain, { tableId: r3, full: i2, align: a2 });
    let o2 = u(this, t.tableMain);
    o2.align = a2, super.optimize(e3);
  }
};
var zn = class extends V {
  static blotName = t.tableFoot;
  static tagName = `tfoot`;
};
var Bn = class extends V {
  static blotName = t.tableHead;
  static tagName = `thead`;
};
var Vn = quill_default.import(`parchment`);
var J = class extends z {
  static blotName = t.tableWrapper;
  static tagName = `div`;
  static className = `ql-table-wrapper`;
  static create(e3) {
    let t2 = super.create();
    return t2.dataset.tableId = e3, t2.addEventListener(`dragstart`, (e4) => {
      e4.preventDefault(), e4.stopPropagation();
    }, true), t2.addEventListener(`drop`, (e4) => {
      e4.preventDefault();
    }), t2.addEventListener(`dragover`, (e4) => {
      e4.preventDefault(), e4.dataTransfer.dropEffect = `none`;
    }), t2.setAttribute(`contenteditable`, `false`), t2;
  }
  constructor(t2, n2, r3) {
    super(t2, n2), this.scroll = t2, this.scroll.emitter.on(quill_default.events.TEXT_CHANGE, this.insertLineAround);
  }
  get tableId() {
    return this.domNode.dataset.tableId;
  }
  checkMerge() {
    let e3 = this.next;
    return e3 !== null && e3.statics.blotName === this.statics.blotName && e3.tableId === this.tableId;
  }
  optimize(e3) {
    if (this.length() === 0) {
      this.remove();
      return;
    }
    super.optimize(e3);
  }
  deleteAt(e3, t2) {
    super.deleteAt(e3, t2);
    let n2 = this.descendants(V), r3 = this.descendants(q);
    n2.length === 0 && r3.length === 0 && this.remove();
  }
  remove() {
    super.remove(), this.scroll.emitter.off(quill_default.events.TEXT_CHANGE, this.insertLineAround);
  }
  isBlockLine(e3) {
    return e3 instanceof Vn.BlockBlot || (/* @__PURE__ */ new Set([`list-container`, `code-block-container`])).has(e3.statics.blotName);
  }
  insertLineAround = () => {
    (!this.prev || !this.isBlockLine(this.prev)) && this.parent.insertBefore(this.scroll.create(`block`), this), (!this.next || !this.isBlockLine(this.next)) && this.parent.insertBefore(this.scroll.create(`block`), this.next);
  };
};
function Y(e3) {
  let n2 = /* @__PURE__ */ new Set([t.tableHead, t.tableBody, t.tableFoot]), r3 = e3.children.iterator(), i2 = null, a2 = {};
  for (; i2 = r3(); ) n2.has(i2.statics.blotName) && (a2[i2.statics.blotName] = i2);
  if (Object.values(a2).length <= 0) return { rect: null, head: null, body: null, foot: null };
  let o2 = Object.values(a2).reduce((e4, t2) => {
    let n3 = t2.domNode.getBoundingClientRect();
    return __spreadProps(__spreadValues({}, e4), { top: Math.min(e4.top, n3.top), bottom: Math.max(e4.bottom, n3.bottom), left: Math.min(e4.left, n3.left), right: Math.max(e4.right, n3.right) });
  }, { top: 1 / 0, bottom: 0, left: 1 / 0, right: 0, width: 0, height: 0, x: 1 / 0, y: 1 / 0 });
  return o2.width = o2.right - o2.left, o2.height = o2.bottom - o2.top, o2.x = o2.left, o2.y = o2.top, { rect: o2, head: a2[t.tableHead] || null, body: a2[t.tableBody] || null, foot: a2[t.tableFoot] || null };
}
var Hn = class {
  table;
  constructor(e3, t2) {
    this.tableModule = e3, this.quill = t2, this.quill.root.addEventListener(`mousedown`, this.tableSelectHandler.bind(this));
  }
  tableSelectHandler(e3) {
    let t2 = e3.composedPath();
    if (e3.button !== 0 || !t2 || t2.length <= 0) return;
    let n2 = t2.find((e4) => e4.tagName && e4.tagName.toUpperCase() === `TABLE`);
    this.setSelectionTable(n2);
  }
  setSelectionTable(e3) {
    this.table !== e3 && (this.hide(), this.table = e3, this.table && this.show(), this.update());
  }
  hide() {
  }
  show() {
  }
  update() {
  }
};
var Un = class extends Hn {
  static moduleName = `table-align`;
  tableBlot;
  tableWrapperBlot;
  alignBox;
  cleanup;
  bem = l(`align`);
  resizeObserver;
  constructor(t2, n2, r3) {
    super(t2, n2), this.tableModule = t2, this.quill = n2, this.alignBox = this.buildTools(), this.hide(), this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange);
  }
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && (this.table && !this.quill.root.contains(this.table) ? this.setSelectionTable(void 0) : this.update());
  };
  buildTools() {
    let t2 = this.tableModule.addContainer(this.bem.b()), n2 = quill_default.import(`ui/icons`), r3 = { left: n2.align[``], center: n2.align.center, right: n2.align.right };
    for (let [e3, n3] of Object.entries(r3)) {
      let r4 = document.createElement(`span`);
      r4.dataset.align = e3, r4.classList.add(this.bem.be(`item`)), r4.innerHTML = `<i class="icon">${n3}</i>`, r4.addEventListener(`click`, this.handleAlignItemClick.bind(this)), t2.appendChild(r4);
    }
    return t2;
  }
  handleAlignItemClick(e3) {
    let t2 = e3.currentTarget;
    if (!t2) return;
    let n2 = t2.dataset.align;
    n2 && this.tableBlot && this.setTableAlign(this.tableBlot, n2);
  }
  setTableAlign(e3, t2) {
    let n2 = e3.getCols();
    for (let e4 of n2) e4.align = t2;
  }
  show() {
    !this.table || !this.alignBox || (this.tableBlot = quill_default.find(this.table), this.tableWrapperBlot = this.tableBlot.parent, this.alignBox.classList.remove(this.bem.is(`hidden`)), this.resizeObserver = rn(() => this.update(), { ignoreFirstBind: true }), this.resizeObserver.observe(this.table), this.cleanup && this.cleanup(), this.cleanup = Gt(this.tableWrapperBlot.domNode, this.alignBox, () => this.update()));
  }
  hide() {
    this.tableBlot = void 0, this.tableWrapperBlot = void 0, this.alignBox && this.alignBox.classList.add(this.bem.is(`hidden`)), this.cleanup &&= (this.cleanup(), void 0);
  }
  update() {
    if (!(!this.alignBox || !this.tableBlot || !this.tableWrapperBlot)) {
      if (!this.table || this.tableBlot.full || this.tableBlot.domNode.offsetWidth >= this.quill.root.offsetWidth) {
        this.hide();
        return;
      }
      Xt(this.tableWrapperBlot.domNode, this.alignBox, { placement: `top`, middleware: [Jt(), qt({ limiter: Yt() }), Kt(16)] }).then(({ x: e3, y: t2 }) => {
        Object.assign(this.alignBox.style, { left: `${e3}px`, top: `${t2}px` });
      });
    }
  }
  destroy() {
    this.hide(), this.resizeObserver &&= (this.resizeObserver.disconnect(), void 0), this.quill.off(quill_default.events.TEXT_CHANGE, this.updateWhenTextChange), this.alignBox &&= (this.alignBox.remove(), null);
  }
};
var Wn = quill_default.import(`delta`);
function Gn(e3, t2, n2) {
  let { rows: r3, cols: i2 } = Kn(t2), { rows: a2, cols: o2, cells: s2 } = qn(n2);
  r3 === a2 && i2 === o2 ? Yn(t2, s2, e3) : Qn(e3, t2, s2);
}
function Kn(e3) {
  return e3.length === 0 ? { rows: 0, cols: 0 } : Jn(Xn(e3));
}
function qn(e3) {
  var _a;
  let n2 = /* @__PURE__ */ new Map();
  for (let r4 of e3) {
    let e4 = r4.attributes;
    if (!e4) continue;
    let i2 = e4[t.tableCellInner];
    if (!i2) continue;
    let a2 = `${i2.rowId}-${i2.colId}`;
    if (!n2.has(a2)) {
      let e5 = { rowId: i2.rowId, colId: i2.colId, rowspan: i2.rowspan || 1, colspan: i2.colspan || 1, deltaOps: [] };
      i2.emptyRow && i2.emptyRow.length > 0 && (e5.emptyRow = i2.emptyRow), n2.set(a2, e5);
    }
    let o2 = n2.get(a2), _b = e4, { [_a = t.tableCellInner]: s2 } = _b, c2 = __objRest(_b, [__restKey(_a)]);
    o2.deltaOps.push({ insert: r4.insert, attributes: __spreadValues({}, c2) });
  }
  let r3 = Array.from(n2.values());
  return __spreadProps(__spreadValues({}, Jn(Xn(r3))), { cells: r3 });
}
function Jn(e3) {
  let t2 = 1 / 0, n2 = -1 / 0, r3 = 1 / 0, i2 = -1 / 0;
  for (let a2 of e3) {
    let { cell: e4, rowIndex: o2, colIndex: s2 } = a2, c2 = e4.colspan || 1, l2 = e4.rowspan || 1;
    t2 = Math.min(t2, o2), n2 = Math.max(n2, o2 + l2 - 1), r3 = Math.min(r3, s2), i2 = Math.max(i2, s2 + c2 - 1);
  }
  return { rows: Math.max(n2 - t2 + 1, 0), cols: Math.max(i2 - r3 + 1, 0) };
}
function Yn(e3, t2, n2) {
  let r3 = Xn(e3), i2 = Xn(t2), a2 = /* @__PURE__ */ new Map();
  for (let e4 of i2) a2.set(`${e4.rowIndex}-${e4.colIndex}`, e4.cell);
  let o2 = [], s2 = /* @__PURE__ */ new Set();
  for (let e4 of r3) {
    let t3 = e4.cell;
    if (!t3.domNode.isConnected || s2.has(t3)) continue;
    let r4 = a2.get(`${e4.rowIndex}-${e4.colIndex}`);
    if (r4) {
      let e5 = $n(n2, t3, r4.deltaOps, { rowspan: r4.rowspan, colspan: r4.colspan, emptyRow: r4.emptyRow });
      o2.push(e5), s2.add(t3);
    }
  }
  er(n2, o2);
}
function Xn(e3) {
  let t2 = [], n2 = Zn(e3), r3 = -1, i2 = /* @__PURE__ */ new Map();
  for (let [e4, a2] of n2.entries()) {
    i2.has(e4) || (r3 += 1, i2.set(e4, r3));
    let n3 = 0;
    for (let o2 of a2) {
      t2.push({ cell: o2, rowIndex: i2.get(e4), colIndex: n3 }), n3 += o2.colspan || 1;
      let a3 = o2.emptyRow || [];
      for (let e5 of a3) i2.has(e5) || (r3 += 1, i2.set(e5, r3));
    }
  }
  return t2;
}
function Zn(e3) {
  let t2 = /* @__PURE__ */ new Map();
  for (let n2 of e3) t2.has(n2.rowId) || t2.set(n2.rowId, []), t2.get(n2.rowId).push(n2);
  return t2;
}
function Qn(e3, t2, n2) {
  let r3 = Zn(n2), i2 = Array.from(r3.values()), a2 = Kn(t2).cols, o2 = [];
  for (let n3 = 0; n3 < t2.length; n3++) {
    let r4 = t2[n3], s2 = Math.floor(n3 / a2), c2 = n3 % a2, l2 = i2[s2 % i2.length], u2 = l2[c2 % l2.length], d2 = $n(e3, r4, u2.deltaOps);
    o2.push(d2);
  }
  er(e3, o2);
}
function $n(e3, t2, n2, r3) {
  let { rowspan: i2 = 1, colspan: a2 = 1, emptyRow: o2 } = r3 || {};
  r3 && (t2.rowspan = i2, t2.colspan = a2, o2 && o2.length > 0 && (t2.emptyRow = o2));
  let s2 = t2.formats(), c2 = new Wn();
  for (let e4 of n2) c2.insert(e4.insert, __spreadValues(__spreadValues({}, e4.attributes), s2));
  return { offset: t2.offset(e3.quill.scroll), length: t2.length(), insertDelta: c2, cell: t2, rowspan: i2, colspan: a2, emptyRow: o2 };
}
function er(t2, n2) {
  if (n2.length === 0) return;
  n2.sort((e3, t3) => e3.offset - t3.offset);
  let r3 = new Wn();
  for (let e3 = 0; e3 < n2.length; e3++) {
    let t3 = n2[e3], i2 = t3.offset;
    if (e3 !== 0) {
      let r4 = n2[e3 - 1];
      i2 = t3.offset - r4.offset - r4.length;
    }
    r3 = r3.retain(i2).concat(t3.insertDelta).delete(t3.length);
  }
  for (let e3 of n2) tr(t2, e3);
  t2.quill.updateContents(r3, quill_default.sources.USER);
}
function tr(e3, n2) {
  let { cell: r3, rowspan: i2 = 1, colspan: a2 = 1 } = n2;
  if (i2 === 1 && a2 === 1) return;
  let o2 = u(r3, t.tableMain);
  if (!o2) return;
  let s2 = r3.getTableRow();
  if (!s2) return;
  let c2 = o2.descendants(H), l2 = o2.getRows(), d2 = l2.indexOf(s2), f2 = r3.getColumnIndex(), p2 = [];
  for (let e4 of c2) {
    if (e4 === r3) continue;
    let t2 = e4.getTableRow();
    if (!t2) continue;
    let n3 = l2.indexOf(t2), o3 = e4.getColumnIndex(), s3 = n3 >= d2 && n3 < d2 + i2, c3 = o3 >= f2 && o3 < f2 + a2;
    s3 && c3 && p2.push(e4);
  }
  let m2 = e3.talbeModule.options.autoMergeCell;
  for (let e4 of p2) if (e4.domNode.isConnected) {
    let t2 = e4.getTableRow();
    e4.remove(), !m2 && t2 && t2.length() <= 0 && t2.remove();
  }
}
var nr = quill_default.import(`delta`);
var rr = quill_default.import(`modules/clipboard`);
function ir(e3) {
  let t2 = Number.parseFloat(e3.getAttribute(`width`));
  if (Number.isNaN(t2)) {
    let n2 = e3.style.width;
    t2 = n2 ? Number.parseFloat(n2) : e3.offsetWidth;
  }
  return t2 || n.colDefaultWidth;
}
function ar(e3, t2) {
  let r3 = Array(t2).fill(n.colDefaultWidth), i2 = Array.from(e3.querySelectorAll(`tr`));
  for (let e4 of i2) {
    let n2 = Array.from(e4.querySelectorAll(`td`)), i3 = 0;
    for (let e5 of n2) {
      let n3 = e5.colSpan || 1;
      if (i3 < t2) {
        let t3 = ir(e5);
        for (let e6 = 0; e6 < n3; e6++) r3[i3 + e6] = t3 / n3;
      } else break;
      i3 += n3;
    }
  }
  return r3;
}
var or = class extends rr {
  tableId = R();
  rowId = R();
  colIds = [];
  rowspanCount = [];
  cellCount = 0;
  colCount = 0;
  constructor(e3, t2) {
    super(e3, t2), this.quill = e3, this.addMatcher(`table`, this.matchTable.bind(this)), this.addMatcher(`thead`, this.matchThead.bind(this)), this.addMatcher(`tbody`, this.matchTbody.bind(this)), this.addMatcher(`tfoot`, this.matchTfoot.bind(this)), this.addMatcher(`colgroup`, this.matchColgroup.bind(this)), this.addMatcher(`col`, this.matchCol.bind(this)), this.addMatcher(`tr`, this.matchTr.bind(this)), this.addMatcher(`td`, this.matchTd.bind(this)), this.addMatcher(`th`, this.matchTd.bind(this)), this.addMatcher(`caption`, this.matchCaption.bind(this)), this.addMatcher(Node.ELEMENT_NODE, this.matchTdAttributor.bind(this));
  }
  getStyleBackgroundColor(e3, n2) {
    let r3 = e3.style.backgroundColor;
    if (r3) {
      for (let e4 of n2.ops) if (e4.attributes?.[t.tableCellInner]) {
        let _a = e4.attributes[t.tableCellInner], { style: n3 } = _a, i2 = __objRest(_a, ["style"]), a2 = fn(n3 || ``);
        a2.backgroundColor || (a2.backgroundColor = r3, e4.attributes[t.tableCellInner] = __spreadProps(__spreadValues({}, i2), { style: pn(a2) }));
      }
    }
  }
  matchTable(e3, n2) {
    var _a;
    if (n2.ops.length === 0) return n2;
    let r3 = [], i2 = [], a2 = -1;
    for (let e4 = 0; e4 < n2.ops.length; e4++) {
      let { attributes: o3, insert: s3 } = n2.ops[e4];
      if (!re(s3) && (!o3 || !o3[t.tableCellInner] && !o3[t.tableCaption])) {
        n2.ops.splice(e4, 1), --e4;
        continue;
      }
      let _b = o3 || {}, { table: c2, [_a = t.tableCell]: l2 } = _b, u2 = __objRest(_b, ["table", __restKey(_a)]), d2 = re(s3) && s3[t.tableCol];
      d2 ? i2.push({ insert: s3 }) : r3.push({ attributes: u2, insert: s3 }), !u2?.[t.tableCellInner] && !u2?.[t.tableCaption] && !d2 && w(s3) && s3.trim().length > 0 && (a2 = e4);
    }
    let o2 = ar(e3, this.colIds.length).reduce((e4, n3, r4) => (i2[r4] ? e4.push(i2[r4]) : e4.push({ insert: { [t.tableCol]: { tableId: this.tableId, colId: this.colIds[r4], width: n3, full: false } } }), e4), []);
    r3.splice(a2 + 1, 0, ...o2);
    let s2 = new nr(r3);
    return this.getStyleBackgroundColor(e3, s2), this.tableId = R(), this.colIds = [], this.rowspanCount = [], this.cellCount = 0, this.colCount = 0, s2;
  }
  matchTbody(e3, n2) {
    this.getStyleBackgroundColor(e3, n2);
    let r3 = [];
    for (let e4 = n2.ops.length - 1; e4 >= 0; e4--) {
      let i2 = n2.ops[e4];
      if (i2.attributes?.[t.tableCellInner]) {
        if (i2.attributes) {
          let e5 = i2.attributes[t.tableCellInner];
          e5.rowspan === 1 ? r3 = [] : r3.length > 0 && (e5.emptyRow ||= [], r3.length > e5.emptyRow.length && e5.emptyRow.push(...r3.slice(e5.emptyRow.length - r3.length)));
        }
      } else {
        r3 = [];
        let e5 = i2.insert ? w(i2.insert) ? i2.insert.split(`
`).length - 1 : 1 : 0;
        for (let t2 = 0; t2 < e5; t2++) r3.push(R());
      }
    }
    return this.rowspanCount = [], n2;
  }
  matchThead(e3, n2) {
    let r3 = this.matchTbody(e3, n2);
    for (let e4 of r3.ops) if (e4.attributes?.[t.tableCellInner]) {
      let n3 = e4.attributes[t.tableCellInner];
      n3.wrapTag = `thead`;
    }
    return r3;
  }
  matchTfoot(e3, n2) {
    let r3 = this.matchTbody(e3, n2);
    for (let e4 of r3.ops) if (e4.attributes?.[t.tableCellInner]) {
      let n3 = e4.attributes[t.tableCellInner];
      n3.wrapTag = `tfoot`;
    }
    return r3;
  }
  matchColgroup(e3, n2) {
    let r3 = [];
    for (let e4 of n2.ops) e4 && re(e4.insert) && e4.insert[t.tableCol] && r3.push(e4);
    return new nr(r3);
  }
  matchCol(e3, n2) {
    let r3 = Number(e3.getAttribute(`span`) || 1);
    Number.isNaN(r3) && (r3 = 1);
    let i2 = new nr();
    for (let n3 = 0; n3 < r3; n3++) this.colIds[this.colCount] = R(), i2.insert({ [t.tableCol]: Object.assign(G.value(e3), { tableId: this.tableId, colId: this.colIds[this.colCount] }) }), this.colCount += 1;
    return i2;
  }
  matchTr(e3, t2) {
    this.rowId = R(), this.cellCount = 0;
    for (let [e4, t3] of this.rowspanCount.entries()) t3.rowspan > 0 && --t3.rowspan, t3.rowspan <= 0 && (this.rowspanCount[e4] = { rowspan: 0, colspan: 0 });
    return this.getStyleBackgroundColor(e3, t2), t2.ops.length === 0 ? new nr([{ insert: `
` }]) : t2;
  }
  matchTd(e3, n2) {
    var _b;
    let r3 = e3, i2 = W.formats(r3);
    if (!this.colIds[this.cellCount] || !this.rowspanCount[this.cellCount]) for (let e4 = this.cellCount; e4 >= 0; e4--) this.colIds[e4] || (this.colIds[e4] = R()), this.rowspanCount[e4] || (this.rowspanCount[e4] = { rowspan: 0, colspan: 0 });
    for (let e4 = this.cellCount; e4 < this.rowspanCount.length; e4++) {
      let { rowspan: t2, colspan: n3 } = this.rowspanCount[e4];
      if (t2 === 0) break;
      this.cellCount += n3;
    }
    i2.rowspan > 1 && (this.rowspanCount[this.cellCount] = { rowspan: i2.rowspan, colspan: i2.colspan });
    let a2 = this.colIds[this.cellCount];
    this.cellCount += i2.colspan;
    let o2 = Object.assign(i2, { tableId: this.tableId, rowId: this.rowId, colId: a2 });
    r3.style.border === `none` && (o2.style = o2.style.replaceAll(/border-(top|right|bottom|left)-style:none;?/g, ``));
    let s2 = [];
    for (let e4 of n2.ops) {
      let _a = e4, { attributes: n3 = {} } = _a, r4 = __objRest(_a, ["attributes"]), _c = n3, { [_b = t.tableCell]: i3 } = _c, a3 = __objRest(_c, [__restKey(_b)]);
      s2.push(__spreadProps(__spreadValues({}, r4), { attributes: __spreadProps(__spreadValues({}, a3), { [t.tableCellInner]: o2 }) }));
    }
    return (s2.length <= 0 || !w(s2[s2.length - 1].insert) || !s2[s2.length - 1].insert.endsWith(`
`)) && s2.push({ insert: `
`, attributes: { [t.tableCellInner]: o2 } }), new nr(s2);
  }
  matchTdAttributor(e3, n2) {
    if (e3.tagName.toLocaleLowerCase() === `td`) {
      let e4 = [];
      for (let r3 of n2.ops) {
        let _a = r3, { attributes: n3 } = _a, i2 = __objRest(_a, ["attributes"]), a2 = n3?.[t.tableCellInner];
        if (n3 && a2?.style) {
          let _b = n3, { background: t2 } = _b, r4 = __objRest(_b, ["background"]), o2 = document.createElement(`div`);
          o2.style.background = t2;
          let s2 = document.createElement(`div`);
          if (s2.style.cssText = a2.style, o2.style.background === s2.style.backgroundColor) {
            e4.push(__spreadProps(__spreadValues({}, i2), { attributes: __spreadValues({}, r4) }));
            continue;
          }
        }
        e4.push(r3);
      }
      return new nr(e4);
    }
    return n2;
  }
  convert({ html: e3, text: n2 }, r3 = {}) {
    let i2 = super.convert({ html: e3, text: n2 }, r3);
    if (r3[t.tableCellInner]) for (let e4 of i2.ops) {
      if (re(e4.insert) && e4.insert[t.tableCol]) {
        e4.insert = ``;
        continue;
      }
      e4.attributes ||= {}, e4.attributes[t.tableCellInner] = r3[t.tableCellInner];
    }
    return i2;
  }
  matchCaption(e3, n2) {
    for (let e4 of n2.ops) {
      let { attributes: n3 } = e4;
      n3?.[t.tableCaption] && (n3[t.tableCaption].tableId = this.tableId, e4.attributes = n3);
    }
    return n2;
  }
};
var sr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE -->
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6m-10 6H3m18 0h-7m-8-3l-3 3l3 3m12-6l3 3l-3 3"
  />
</svg>
`;
var cr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="m4 8l4-4m6 0L4 14m0 6L20 4m0 6L10 20m10-4l-4 4"
  />
</svg>
`;
var lr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="m12.01 16l-.01.011M12.01 12l-.01.011M12.01 8l-.01.011M8.01 12l-.01.011M16.01 12l-.01.011M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"
  />
</svg>
`;
var ur = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
  <path
    fill="currentColor"
    d="M11 21V9H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-2h6v-4h-6zm0-6h6V9h-6zM5 7h14V5H5zM3 22v-2h2.55q-1.2-.575-1.937-1.7t-.738-2.55q0-1.975 1.388-3.363T7.625 11v2q-1.125 0-1.937.8t-.813 1.95q0 .975.6 1.725t1.525.95V16h2v6z"
  />
</svg>
`;
var dr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
  <g fill="currentColor">
    <path d="M216 40v128h-48V88H88V40Z" opacity=".2" />
    <path
      d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"
    />
  </g>
</svg>
`;
var fr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
  <path
    fill="currentColor"
    d="m19.05 13.733l-1-1.733l-10.122 5.846l-.997-.576a3 3 0 0 0 .667-.769A3 3 0 1 0 3.5 17.599L5.928 19L3.5 20.402a3.034 3.034 0 1 0 3.44.323l.988-.57L14.59 24l1-1.73L9.928 19zM4.034 15.26a1 1 0 1 1 .466.607a1 1 0 0 1-.466-.607M5 22a1 1 0 1 1-.865 1.5A1 1 0 0 1 5 22m12 4h4v2h-4zm-7 0h4v2h-4z"
  />
  <path fill="currentColor" d="M28 28h-4v-2h4V4H7v4H5V4a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2" />
</svg>
`;
var pr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm11.94 5.5h2v-4h2v4h2l-3 3z"
  />
</svg>
`;
var mr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm14.44 2v2h4v2h-4v2l-3-3z"
  />
</svg>
`;
var hr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm15.44 8v-2h-4v-2h4v-2l3 3z"
  />
</svg>
`;
var gr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm17.94 4.5h-2v4h-2v-4h-2l3-3z"
  />
</svg>
`;
var _r = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M5 10H3V4h8v2H5zm14 8h-6v2h8v-6h-2zM5 18v-4H3v6h8v-2zM21 4h-8v2h6v4h2zM8 13v2l3-3l-3-3v2H3v2zm8-2V9l-3 3l3 3v-2h5v-2z"
  />
</svg>
`;
var vr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M4 2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 8v4h7v-4zm0 6v4h7v-4zM4 4v4h7V4zm13.59 8L15 9.41L16.41 8L19 10.59L21.59 8L23 9.41L20.41 12L23 14.59L21.59 16L19 13.41L16.41 16L15 14.59z"
  />
</svg>
`;
var yr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M9.41 13L12 15.59L14.59 13L16 14.41L13.41 17L16 19.59L14.59 21L12 18.41L9.41 21L8 19.59L10.59 17L8 14.41zM22 9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM4 9h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4z"
  />
</svg>
`;
var br = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.13l1.42 1.42L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.13l-1.42-1.42L17.59 18zM4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4z"
  />
</svg>
`;
var xr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M19 14h2v6H3v-6h2v4h14zM3 4v6h2V6h14v4h2V4zm8 7v2H8v2l-3-3l3-3v2zm5 0V9l3 3l-3 3v-2h-3v-2z"
  />
</svg>
`;
var Sr = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <!-- Icon from TDesign Icons by TDesign - https://github.com/Tencent/tdesign-icons/blob/main/LICENSE -->
  <path fill="currentColor" d="M21 10v12h-2V12H5v10H3V10zm0-8v6H3V2zm-2 2H5v2h14z" />
</svg>
`;
var Cr = `color-selector`;
function wr(e3, t2, n2 = false) {
  return __async(this, null, function* () {
    let r3 = e3.getTextByCell(t2), i2 = e3.getHTMLByCell(t2, n2), a2 = new ClipboardItem({ "text/plain": new Blob([r3], { type: `text/plain` }), "text/html": new Blob([i2], { type: `text/html` }) });
    yield navigator.clipboard.write([a2]);
  });
}
var X = { Break: { name: `break` }, CopyCell: { name: `CopyCell`, tip: `Copy cell`, icon: dr, handle(e3, t2) {
  wr.call(this, e3, t2, false);
} }, CutCell: { name: `CutCell`, tip: `Cut cell`, icon: fr, handle(e3, t2) {
  wr.call(this, e3, t2, true);
} }, InsertTop: { name: `InsertTop`, icon: gr, tip: `Insert row above`, handle(e3, t2) {
  e3.appendRow(t2, false);
} }, InsertRight: { name: `InsertRight`, icon: hr, tip: `Insert column right`, handle(e3, t2) {
  e3.appendCol(t2, true);
} }, InsertBottom: { name: `InsertBottom`, icon: pr, tip: `Insert row below`, handle(e3, t2) {
  e3.appendRow(t2, true);
} }, InsertLeft: { name: `InsertLeft`, icon: mr, tip: `Insert column Left`, handle(e3, t2) {
  e3.appendCol(t2, false);
} }, MergeCell: { name: `MergeCell`, icon: _r, tip: `Merge Cell`, handle(e3, t2) {
  e3.mergeCells(t2);
} }, SplitCell: { name: `SplitCell`, icon: xr, tip: `Split Cell`, handle(e3, t2) {
  e3.splitCell(t2);
} }, DeleteRow: { name: `DeleteRow`, icon: yr, tip: `Delete Row`, handle(e3, t2) {
  e3.removeRow(t2);
} }, DeleteColumn: { name: `DeleteColumn`, icon: vr, tip: `Delete Column`, handle(e3, t2) {
  e3.removeCol(t2);
} }, DeleteTable: { name: `DeleteTable`, icon: br, tip: `Delete table`, handle(e3, t2) {
  e3.deleteTable(t2);
} }, BackgroundColor: { name: `BackgroundColor`, icon: cr, isColorChoose: true, tip: `Set background color`, key: `background-color`, handle(e3, t2, n2) {
  e3.setCellAttrs(t2, `background-color`, n2, true);
} }, BorderColor: { name: `BorderColor`, icon: lr, isColorChoose: true, tip: `Set border color`, key: `border-color`, handle(e3, t2, n2) {
  e3.setCellAttrs(t2, `border-color`, n2, true);
} }, SwitchWidth: { name: `SwitchWidth`, icon: sr, tip: `Switch table width`, handle() {
  if (!this.table) return;
  let t2 = quill_default.find(this.table);
  t2 && (t2.full ? t2.cancelFull() : t2.setFull());
} }, InsertCaption: { name: `InsertCaption`, icon: Sr, tip: `Insert table caption`, handle() {
  if (!this.table) return;
  let n2 = quill_default.find(this.table);
  if (!n2) return;
  let r3 = this.quill.scroll.create(`text`, `Table Caption`).wrap(t.tableCaption, { tableId: n2.tableId });
  n2.insertBefore(r3, n2.children.head);
} }, ToggleTdBetweenTh: { name: `ToggleTdBetweenTh`, icon: ur, tip: `Toggle td between th`, handle(e3, t2) {
  for (let e4 of t2) e4.convertTableCell();
} }, ConvertTothead: { name: `ConvertTothead`, icon: ur, tip: `Convert to thead`, handle(t2, n2) {
  if (!this.table) return;
  let r3 = quill_default.find(this.table);
  r3 && t2.convertTableBodyByCells(r3, n2, `thead`);
} }, ConvertTotfoot: { name: `ConvertTotfoot`, icon: ur, tip: `Convert to tfoot`, handle(t2, n2) {
  if (!this.table) return;
  let r3 = quill_default.find(this.table);
  r3 && t2.convertTableBodyByCells(r3, n2, `tfoot`);
} } };
var Tr = l(`color-map`);
var Z = { selectWrapper: Tr.b(), used: Tr.bm(`used`), item: Tr.be(`item`), btn: Tr.be(`btn`), map: Tr.be(`content`), mapRow: Tr.be(`content-row`) };
var Er = class extends Hn {
  static moduleName = `table-menu`;
  usedColors = /* @__PURE__ */ new Set();
  options;
  menu = null;
  isMenuDisplay = false;
  isColorPicking = false;
  tooltipItem = [];
  activeTooltip = null;
  bem = l(`menu`);
  colorItemClass = `color-${R()}`;
  colorChooseTooltipOption = { direction: `top` };
  constructor(t2, n2, i2) {
    super(t2, n2), this.tableModule = t2, this.quill = n2, this.options = this.resolveOptions(i2);
    try {
      let e3 = localStorage.getItem(this.options.localstorageKey) || `[]`, t3 = JSON.parse(e3);
      C(t3) || (t3 = []), t3.slice(-10).map((e4) => this.usedColors.add(e4));
    } catch {
    }
    this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange), this.quill.on(r.TABLE_SELECTION_DRAG_START, this.hideWhenSelectionDragStart);
  }
  updateUsedColor = mn((e3) => {
    if (!e3) return;
    if (this.usedColors.add(e3), this.usedColors.size > 10) {
      let e4 = Array.from(this.usedColors).slice(-10);
      this.usedColors.clear(), e4.map((e5) => this.usedColors.add(e5));
    }
    localStorage.setItem(this.options.localstorageKey, JSON.stringify(Array.from(this.usedColors)));
    let t2 = Array.from(document.querySelectorAll(`.${this.colorItemClass}.${Z.used}`));
    for (let n2 of t2) {
      let t3 = document.createElement(`div`);
      t3.classList.add(Z.item), t3.style.backgroundColor = String(e3), Array.from(n2.querySelectorAll(`.${Z.item}[style*="background-color: ${t3.style.backgroundColor}"]`)).length <= 0 && n2.appendChild(t3);
      let r3 = Array.from(n2.querySelectorAll(`.${Z.item}`)).slice(0, -10);
      for (let e4 of r3) e4.remove();
    }
  }, 1e3);
  hideWhenSelectionDragStart = () => {
    this.hide();
  };
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && this.isMenuDisplay && this.update();
  };
  resolveOptions(e3) {
    return Object.assign({ tipText: true, tools: [X.InsertTop, X.InsertRight, X.InsertBottom, X.InsertLeft, X.Break, X.MergeCell, X.SplitCell, X.Break, X.DeleteRow, X.DeleteColumn, X.DeleteTable, X.Break, X.BackgroundColor, X.BorderColor], localstorageKey: `__table-bg-used-color`, defaultColorMap: a }, e3);
  }
  buildTools() {
    let e3 = document.createElement(`div`);
    e3.classList.add(this.bem.b()), Object.assign(e3.style, { display: `flex` });
    for (let t2 of this.options.tools) {
      let { name: n2, icon: r3, handle: i2, isColorChoose: a2, key: o2, tip: s2 = `` } = t2, c2 = document.createElement(`span`);
      if (c2.classList.add(this.bem.be(`item`)), n2 === `break`) c2.classList.add(this.bem.is(`break`));
      else {
        let e4 = document.createElement(`i`);
        if (e4.classList.add(`icon`), S(r3) ? e4.appendChild(r3(this.tableModule)) : e4.innerHTML = r3, c2.appendChild(e4), a2 && o2) {
          let e5 = this.createColorChoose(c2, { name: n2, icon: r3, handle: i2, isColorChoose: a2, key: o2, tip: s2 });
          this.tooltipItem.push(e5), c2.classList.add(Cr);
        } else S(i2) && c2.addEventListener(`click`, (e5) => {
          this.quill.focus(), i2.call(this, this.tableModule, this.getSelectedTds(), e5);
        }, false);
        let t3 = this.tableModule.options.texts[n2] || s2;
        this.options.tipText && t3 && s2 && this.createTipText(c2, t3);
      }
      e3.appendChild(c2);
    }
    return e3;
  }
  createColorChoose(e3, { handle: t2, key: n2 }) {
    let r3 = document.createElement(`div`);
    if (r3.classList.add(Z.selectWrapper), this.options.defaultColorMap.length > 0) {
      let e4 = document.createElement(`div`);
      e4.classList.add(Z.map);
      for (let t3 of this.options.defaultColorMap) {
        let n3 = document.createElement(`div`);
        n3.classList.add(Z.mapRow);
        for (let e5 of t3) {
          let t4 = document.createElement(`div`);
          t4.classList.add(Z.item), t4.style.backgroundColor = e5, n3.appendChild(t4);
        }
        e4.appendChild(n3);
      }
      r3.appendChild(e4);
    }
    let a2 = document.createElement(`div`);
    a2.classList.add(Z.mapRow), Object.assign(a2.style, { marginTop: `4px` });
    let o2 = document.createElement(`div`);
    o2.classList.add(Z.btn, `transparent`), o2.textContent = this.tableModule.options.texts.transparent, o2.addEventListener(`click`, () => {
      t2.call(this, this.tableModule, this.getSelectedTds(), `transparent`);
    });
    let s2 = document.createElement(`div`);
    s2.classList.add(Z.btn, `clear`), s2.textContent = this.tableModule.options.texts.clear, s2.addEventListener(`click`, () => {
      t2.call(this, this.tableModule, this.getSelectedTds(), null);
    });
    let c2 = document.createElement(`div`);
    c2.classList.add(Z.btn, `custom`), c2.textContent = this.tableModule.options.texts.custom;
    let l2 = ce({ onChange: (e4) => {
      t2.call(this, this.tableModule, this.getSelectedTds(), e4), this.updateUsedColor(e4);
    } }), { hide: u2, destroy: d2 } = Qt(c2, { direction: `right`, type: `click`, content: l2, container: c2 });
    a2.appendChild(o2), a2.appendChild(s2), a2.appendChild(c2), r3.appendChild(a2);
    let f2 = document.createElement(`div`);
    f2.classList.add(Z.used, this.colorItemClass);
    for (let e4 of this.usedColors) {
      let t3 = document.createElement(`div`);
      t3.classList.add(Z.item), t3.style.backgroundColor = e4, f2.appendChild(t3);
    }
    r3.appendChild(f2), r3.addEventListener(`click`, (e4) => {
      e4.stopPropagation(), u2();
      let t3 = e4.target, r4 = t3.style.backgroundColor, i2 = this.getSelectedTds();
      if (t3 && r4 && i2.length > 0) {
        if (this.tableModule.setCellAttrs(i2, n2, r4, true), !t3.closest(`.${Z.item}`)) return;
        this.updateUsedColor(r4);
      }
    });
    let p2 = Qt(e3, __spreadProps(__spreadValues({}, this.colorChooseTooltipOption), { type: `click`, content: r3, container: this.quill.container, onOpen: () => {
      let e4 = this.tableModule.getModule(i.tableSelectionName);
      return this.isMenuDisplay && e4 && e4.hideDisplay(), this.setActiveTooltip(p2), false;
    }, onClose: () => {
      let e4 = this.tableModule.getModule(i.tableSelectionName);
      return this.isMenuDisplay && e4 && (e4.updateWithSelectedTds(), e4.showDisplay()), r3.contains(l2) && u2(), this.activeTooltip === p2 && (this.activeTooltip = null), false;
    }, onDestroy: () => {
      d2(), this.activeTooltip === p2 && (this.activeTooltip = null);
    } }));
    return p2.isColorPick = true, p2;
  }
  setActiveTooltip(e3) {
    this.activeTooltip && this.activeTooltip !== e3 && this.activeTooltip.hide(true), this.activeTooltip = e3;
  }
  getSelectedTds() {
    return this.tableModule.getModule(i.tableSelectionName)?.selectedTds || [];
  }
  createTipText(e3, t2) {
    let n2 = Qt(e3, { msg: t2, container: this.quill.container });
    n2 && this.tooltipItem.push(n2);
  }
  show() {
    this.table && (this.menu && this.hide(), this.menu = this.buildTools());
  }
  update() {
    this.table && !this.quill.root.contains(this.table) && this.setSelectionTable(void 0);
  }
  hide() {
    this.menu &&= (this.menu.remove(), null);
    for (let e3 of this.tooltipItem) e3.hide(true);
    this.isMenuDisplay = false;
  }
  destroy() {
    this.quill.off(quill_default.events.TEXT_CHANGE, this.updateWhenTextChange), this.quill.off(r.TABLE_SELECTION_DRAG_START, this.hideWhenSelectionDragStart), this.activeTooltip = null;
    for (let e3 of this.tooltipItem) e3.destroy();
    this.tooltipItem = [], this.hide();
  }
};
var Dr = class extends Er {
  static moduleName = `table-menu-contextmenu`;
  scrollHandler = [];
  constructor(e3, t2, n2) {
    super(e3, t2, n2), this.tableModule = e3, this.quill = t2, this.quill.root.addEventListener(`contextmenu`, this.listenContextmenu), this.quill.on(r.TABLE_SELECTION_CHANGE, this.tableSelectioChange), this.quill.on(r.TABLE_SELECTION_DISPLAY_CHANGE, this.tableSelectioChange);
  }
  tableSelectioChange = (e3) => {
    e3.selectedTds.length <= 0 && this.hide();
  };
  listenContextmenu = (e3) => {
    e3.preventDefault();
    let t2 = e3.composedPath();
    if (!t2 || t2.length <= 0) return;
    let n2 = t2.find((e4) => e4.tagName && e4.tagName.toUpperCase() === `TABLE` && e4.classList.contains(`ql-table`)), r3 = this.tableModule.getModule(i.tableSelectionName);
    if (n2 && r3?.selectedTds?.length) {
      this.menu ||= this.buildTools(), this.isMenuDisplay = true, this.update({ x: e3.clientX, y: e3.clientY });
      let t3 = () => {
        this.hide(), L.call(this);
      };
      I.call(this, this.quill.root, t3), document.addEventListener(`click`, t3, { once: true });
    } else this.hide();
  };
  buildTools() {
    let e3 = super.buildTools();
    e3.classList.add(this.bem.is(`contextmenu`));
    let t2 = e3.getElementsByClassName(Cr);
    for (let e4 of Array.from(t2)) e4.addEventListener(`click`, (e5) => e5.stopPropagation());
    return this.quill.container.appendChild(e3), e3;
  }
  createTipText(e3, t2) {
    let n2 = document.createElement(`span`);
    n2.textContent = t2, e3.appendChild(n2);
  }
  show() {
  }
  update(e3) {
    super.update();
    let t2 = this.tableModule.getModule(i.tableSelectionName);
    if (!this.table || !this.isMenuDisplay || !this.menu) {
      this.hide();
      return;
    }
    if (!e3 || !t2?.isDisplaySelection) return;
    let n2 = this.quill.container.getBoundingClientRect();
    Object.assign(this.menu.style, { left: `${e3.x - n2.x}px`, top: `${e3.y - n2.y}px` });
    let r3 = this.menu.getBoundingClientRect(), { left: a2, top: o2 } = nn(r3), s2 = r3.left - a2, c2 = r3.top - o2;
    Object.assign(this.menu.style, { left: `${e3.x - n2.x - s2}px`, top: `${e3.y - n2.y - c2}px` });
  }
  destroy() {
    this.quill.root.removeEventListener(`contextmenu`, this.listenContextmenu), super.destroy(), this.quill.off(r.TABLE_SELECTION_CHANGE, this.tableSelectioChange), this.quill.off(r.TABLE_SELECTION_DISPLAY_CHANGE, this.tableSelectioChange);
  }
};
var Or = class extends Er {
  static moduleName = `table-menu-select`;
  constructor(e3, t2, n2) {
    super(e3, t2, n2), this.tableModule = e3, this.quill = t2, this.quill.on(r.TABLE_SELECTION_DRAG_START, this.tableSelectionDragStart), this.quill.on(r.TABLE_SELECTION_DRAG_END, this.tableSelectionDragEnd), this.quill.on(r.TABLE_SELECTION_CHANGE, this.tableSelectioChange), this.quill.on(r.TABLE_SELECTION_DISPLAY_CHANGE, this.tableSelectionDisplayChange);
  }
  tableSelectionDragStart = () => {
    this.hide();
  };
  tableSelectionDragEnd = (e3) => {
    e3.selectedTds.length > 0 && this.show();
  };
  tableSelectioChange = (e3, t2) => {
    t2.length <= 0 && this.hide();
  };
  tableSelectionDisplayChange = (e3) => {
    e3.dragging || this.update();
  };
  buildTools() {
    let e3 = super.buildTools();
    return this.tableModule.addContainer(e3), e3;
  }
  show() {
    super.show(), this.update();
  }
  update() {
    if (super.update(), !this.menu && this.table) {
      this.show();
      return;
    }
    let e3 = this.getSelectedTds();
    if (!this.menu || !this.table || e3.length === 0) {
      (this.menu || !this.table) && (this.isMenuDisplay = false, this.menu?.classList.add(this.bem.is(`hidden`)), this.hide());
      return;
    }
    this.isMenuDisplay = true, this.menu.classList.remove(this.bem.is(`hidden`));
    let t2 = this.tableModule.getModule(i.tableSelectionName);
    t2?.isDisplaySelection && Xt(t2.cellSelect, this.menu, { placement: `bottom`, middleware: [Jt(), qt({ limiter: Yt() }), Kt(20)] }).then(({ x: e4, y: t3 }) => {
      this.menu && Object.assign(this.menu.style, { left: `${e4}px`, top: `${t3}px` });
    });
  }
  destroy() {
    super.destroy(), this.quill.off(r.TABLE_SELECTION_DRAG_START, this.tableSelectionDragStart), this.quill.off(r.TABLE_SELECTION_DRAG_END, this.tableSelectionDragEnd);
  }
};
var kr = (e3) => !e3.full && e3.align === `right`;
function Ar(e3, t2) {
  if (t2 < 0 || t2 >= e3.length) return null;
  let n2 = e3[0].domNode.getBoundingClientRect().left;
  for (let r4 = 0; r4 < t2; r4++) {
    let t3 = e3[r4].domNode.getBoundingClientRect();
    n2 += t3.width;
  }
  let r3 = e3[t2].domNode.getBoundingClientRect().width;
  return { left: n2, right: n2 + r3, width: r3 };
}
function jr(e3, t2, n2) {
  if (e3) {
    let e4 = t2.getCols().map((e5) => e5.colId), r3 = /* @__PURE__ */ new Set(), i2 = new Map(e4.map((e5) => [e5, 0])), a2 = /* @__PURE__ */ new Set();
    for (let t3 of n2) {
      r3.add(t3.colId);
      let n3 = e4.indexOf(t3.colId);
      if (n3 !== -1) {
        for (let r4 = n3; r4 < n3 + t3.colspan && r4 < e4.length; r4++) {
          a2.add(r4);
          let n4 = e4[r4];
          i2.set(n4, (i2.get(n4) || 0) + t3.rowspan);
        }
        a2.add(Math.min(n3 + t3.colspan, e4.length));
      }
    }
    let o2 = t2.getRows()?.length || 0;
    for (let [e5, t3] of i2.entries()) t3 >= o2 && r3.delete(e5);
    return { cellIndex: a2, isSpan: r3.size <= 0 };
  } else {
    let e4 = t2.getRows().map((e5) => e5.rowId), r3 = /* @__PURE__ */ new Set(), i2 = new Map(e4.map((e5) => [e5, 0])), a2 = /* @__PURE__ */ new Set();
    for (let t3 of n2) {
      r3.add(t3.rowId);
      let n3 = e4.indexOf(t3.rowId);
      if (n3 !== -1) {
        for (let r4 = n3; r4 < n3 + t3.rowspan && r4 < e4.length; r4++) {
          a2.add(r4);
          let n4 = e4[r4];
          i2.set(n4, (i2.get(n4) || 0) + t3.colspan);
        }
        a2.add(Math.min(n3 + t3.rowspan, e4.length));
      }
    }
    let o2 = t2.getCols()?.length || 0;
    for (let [e5, t3] of i2.entries()) t3 >= o2 && r3.delete(e5);
    return { cellIndex: a2, isSpan: r3.size <= 0 };
  }
}
var Mr = class {
  maxRange = 1 / 0;
  minRange = -1 / 0;
  startValue = 0;
  dragBreak = null;
  tableModule;
  isX = false;
  constructor(e3, t2) {
    this.tableModule = e3, this.isX = t2;
  }
  createBreak() {
    this.dragBreak && this.dragBreak.remove();
    let e3 = l(`drag`);
    this.dragBreak = this.tableModule.addContainer(e3.be(`line`)), this.dragBreak.classList.add(e3.is(this.isX ? `col` : `row`));
  }
  getOffsetFromStart(e3) {
    let t2 = 0;
    if (!e3) return t2;
    let { rect: n2 } = Y(e3);
    return n2 && (t2 = n2[this.isX ? `x` : `y`] - this.startValue), t2;
  }
  limitRange(e3, t2, n2 = true) {
    let r3 = 0;
    return n2 && (r3 = this.getOffsetFromStart(e3)), Math.min(this.maxRange + r3, Math.max(t2, this.minRange + r3));
  }
};
var Nr = class extends Hn {
  tableBlot;
  dragging = false;
  colIndex = -1;
  rowIndex = -1;
  dragXCommon;
  dragYCommon;
  constructor(e3, t2) {
    super(e3, t2), this.tableModule = e3, this.quill = t2, this.dragXCommon = new Mr(e3, true), this.dragYCommon = new Mr(e3, false);
  }
  findDragColIndex(e3) {
    return -1;
  }
  calculateColDragRangeByFull() {
    if (!this.tableBlot) return;
    let { rect: e3 } = Y(this.tableBlot);
    if (!e3) return;
    let t2 = this.tableBlot.getCols();
    if (this.colIndex = this.findDragColIndex(t2), this.colIndex === -1) return;
    let r3 = Ar(t2, this.colIndex), i2 = n.colMinWidthPre / 100 * e3.width, a2 = e3.right;
    t2[this.colIndex + 1] && (a2 = Math.max(Ar(t2, this.colIndex + 1).right - i2, r3.left + i2));
    let o2 = r3.left + i2;
    this.dragXCommon.minRange = o2, this.dragXCommon.maxRange = a2;
  }
  calculateColDragRangeByFixed() {
    if (!this.tableBlot) return;
    let e3 = this.tableBlot.getCols();
    if (this.colIndex = this.findDragColIndex(e3), this.colIndex === -1) return;
    let t2 = Ar(e3, this.colIndex);
    this.dragXCommon.minRange = kr(this.tableBlot) ? t2.right - n.colMinWidthPx : t2.left + n.colMinWidthPx, this.dragXCommon.maxRange = 1 / 0;
  }
  calculateColDragRange() {
    this.tableBlot && (this.tableBlot.full ? this.calculateColDragRangeByFull() : this.calculateColDragRangeByFixed());
  }
  updateTableCol(e3) {
    return __async(this, null, function* () {
      if (!this.tableBlot || this.colIndex === -1) return;
      let t2 = this.dragXCommon.limitRange(this.tableBlot, e3, true), i2 = this.tableBlot.getCols(), a2 = Ar(i2, this.colIndex), o2 = t2 - a2.left;
      kr(this.tableBlot) && (o2 = a2.right - t2);
      let s2 = this.tableBlot.full, c2 = false, l2 = [];
      if (s2) {
        let { rect: e4 } = Y(this.tableBlot), t3 = e4.width, r3 = o2 / t3 * 100, a3 = i2[this.colIndex].width;
        if (r3 < a3) {
          if (r3 = Math.max(n.colMinWidthPre, r3), i2[this.colIndex + 1] || i2[this.colIndex - 1]) {
            let e5 = i2[this.colIndex + 1] ? this.colIndex + 1 : this.colIndex - 1;
            l2.push({ index: e5, width: i2[e5].width + a3 - r3 });
          } else r3 = 100;
          c2 = true, l2.push({ index: this.colIndex, width: r3 });
        } else if (i2[this.colIndex + 1]) {
          let e5 = a3 + i2[this.colIndex + 1].width;
          r3 = Math.min(e5 - n.colMinWidthPre, r3), c2 = true, l2.push({ index: this.colIndex, width: r3 }, { index: this.colIndex + 1, width: e5 - r3 });
        }
      } else this.tableBlot.domNode.style.width = `${Number.parseFloat(this.tableBlot.domNode.style.width) - i2[this.colIndex].domNode.getBoundingClientRect().width + o2}px`, c2 = true, l2.push({ index: this.colIndex, width: o2 });
      if (c2) {
        let e4 = this.tableBlot.domNode.getBoundingClientRect().width;
        if (s2) {
          let t3 = 0, n2 = new Set(l2.map(({ index: e5, width: n3 }) => (t3 += n3, e5)));
          for (let [e5, r3] of i2.entries()) n2.has(e5) || (t3 += r3.width);
          if (t3 > 100) {
            if (!(yield de({ message: this.tableModule.options.texts.perWidthInsufficient, confirm: this.tableModule.options.texts.confirmText, cancel: this.tableModule.options.texts.cancelText }))) return;
            this.tableBlot.cancelFull(), s2 = false;
            for (let [t4, n3] of l2.entries()) {
              let { width: r3, index: i3 } = n3;
              l2[t4] = { index: i3, width: r3 / 100 * e4 };
            }
          }
        }
        for (let { index: e5, width: t3 } of l2) {
          let n2 = Number.parseFloat(t3.toFixed(3));
          i2[e5].width = `${n2}${s2 ? `%` : `px`}`;
        }
        this.quill.emitter.emit(r.AFTER_TABLE_RESIZE);
      }
    });
  }
  findDragRowIndex(e3) {
    return -1;
  }
  calculateRowDragRange() {
    if (!this.tableBlot) return;
    let e3 = this.tableBlot.getRows();
    if (this.rowIndex = this.findDragRowIndex(e3), this.rowIndex === -1) return;
    let t2 = e3[this.rowIndex].domNode.getBoundingClientRect();
    this.dragYCommon.minRange = t2.y + n.rowMinHeightPx, this.dragYCommon.maxRange = 1 / 0;
  }
  updateTableRow(e3) {
    if (!this.tableBlot || this.rowIndex === -1) return;
    let t2 = this.dragYCommon.limitRange(this.tableBlot, e3, true), n2 = this.tableBlot.getRows(), i2 = t2 - n2[this.rowIndex].domNode.getBoundingClientRect().top;
    n2[this.rowIndex].setHeight(`${i2}px`), this.quill.emitter.emit(r.AFTER_TABLE_RESIZE);
  }
  removeBreak() {
    this.dragXCommon.dragBreak && (this.dragXCommon.dragBreak.remove(), this.dragXCommon.dragBreak = null), this.dragYCommon.dragBreak && (this.dragYCommon.dragBreak.remove(), this.dragYCommon.dragBreak = null);
  }
};
var Q = quill_default.import(`delta`);
var Pr = class extends cn {
  minusY = 0;
  minusX = 0;
  checkMinY(e3) {
    return this.mouseY + this.minusY < e3.top + this.scrollThresholdY;
  }
  checkMinX(e3) {
    return this.mouseX + this.minusX < e3.left + this.scrollThresholdX;
  }
};
var Fr = class {
  startPosition = [];
  selectedIndex = /* @__PURE__ */ new Set();
  moveToIndex = -1;
  tableModule;
  tableBlot;
  dragCommon;
  options;
  get isDragX() {
    return this.options.isDragX;
  }
  constructor(e3, t2, n2, r3) {
    this.tableModule = e3, this.tableBlot = t2, this.dragCommon = n2, this.options = r3;
  }
  onStart(e3, t2, n2) {
    let r3 = this.tableModule.getModule(i.tableSelectionName);
    if (!r3?.boundary || !this.tableBlot) return false;
    let { isSpan: a2, cellIndex: o2 } = jr(this.isDragX, this.tableBlot, r3.selectedTds);
    if (!a2) return false;
    let { rect: s2 } = Y(this.tableBlot);
    if (!s2) return false;
    t2.preventDefault(), this.dragCommon.startValue = this.isDragX ? s2.x : s2.y, this.selectedIndex = o2, n2?.(this), this.recalculateStartPosition();
  }
  onMove(e3, t2, n2) {
    this.moveToIndex = this.findTheMovedToIndex(t2), n2?.(this);
  }
  onEnd(e3, t2, n2) {
    n2?.(this), this.moveToIndex = -1, this.selectedIndex = /* @__PURE__ */ new Set();
  }
  recalculateStartPosition() {
    if (this.isDragX) {
      if (this.startPosition = [], !this.tableBlot) return;
      let e3 = this.tableBlot.getCols(), t2 = e3[0].domNode.getBoundingClientRect().left;
      for (let n2 = 0; n2 < e3.length; n2++) {
        let r3 = e3[n2].domNode.getBoundingClientRect();
        this.startPosition.push({ size: r3.width, position: t2, index: n2 }), t2 += r3.width;
      }
    } else {
      if (this.startPosition = [], !this.tableBlot) return;
      this.startPosition = this.tableBlot.getRows().map((e3, t2) => {
        let n2 = e3.domNode.getBoundingClientRect();
        return { size: n2.height, position: n2.top, index: t2 };
      });
    }
  }
  findTheMovedToIndex(e3) {
    let t2 = this.dragCommon.getOffsetFromStart(this.tableBlot), n2 = this.startPosition.find(({ position: n3, size: r3 }) => (this.isDragX ? e3.clientX : e3.clientY) < n3 + r3 / 2 + t2)?.index;
    return (ie(n2) || n2 < 0) && (n2 = this.startPosition.length), n2 = Math.max(0, Math.min(n2, this.startPosition.length)), this.selectedIndex.has(n2) || this.options.allowMoveToIndex && !this.options.allowMoveToIndex(n2) ? -1 : n2;
  }
  updateTableStructure(e3, t2) {
    let n2 = new Q();
    if (!this.tableBlot || this.moveToIndex < 0) return n2;
    let r3 = this.tableModule.getModule(i.tableSelectionName);
    if (!r3) return n2;
    if (this.isDragX) {
      let i2 = this.tableBlot.getCols(), a2 = i2.length - 1, o2 = this.moveToIndex > a2, s2 = new Set(r3.selectedTds.map((e4) => e4.colId)), c2 = i2.filter((e4) => s2.has(e4.colId)).map((t3) => {
        let n3 = t3.length(), r4 = t3.offset(t3.scroll);
        return { offset: r4, delta: e3.slice(r4, r4 + n3), length: n3 };
      }), l2 = i2[Math.min(a2, this.moveToIndex)], u2 = l2.offset(l2.scroll) + (o2 ? l2.length() : 0), d2 = c2.reduce((e4, t3) => (e4 = e4.concat(t3.delta), e4), new Q().retain(u2)), f2 = c2.reduce((e4, t3, n3) => {
        let r4 = c2[n3 - 1], i3 = r4 ? r4.offset + r4.length : 0;
        return e4 = e4.retain(t3.offset - i3).delete(t3.length), e4;
      }, new Q()), p2 = t2 ? f2.compose(d2) : d2.compose(f2), m2 = r3.selectedTds.map((t3) => {
        let n3 = t3.length(), r4 = t3.offset(t3.scroll);
        return { offset: r4, delta: e3.slice(r4, r4 + n3), length: n3, rowId: t3.rowId };
      }), { delta: h2, insertDeltaInfo: g2 } = m2.reduce(({ delta: e4, insertDeltaInfo: n3 }, r4, i3) => {
        let a3 = m2[i3 - 1], o3 = a3 ? a3.offset + a3.length : 0, s3 = 0;
        return i3 !== 0 && !t2 && (s3 = a3.rowId === r4.rowId ? 0 : n3[a3.rowId]?.length()), e4 = e4.retain(r4.offset - o3 + s3).delete(r4.length), n3[r4.rowId] || (n3[r4.rowId] = new Q()), n3[r4.rowId] = n3[r4.rowId].concat(r4.delta), { delta: e4, insertDeltaInfo: n3 };
      }, { delta: new Q(), insertDeltaInfo: {} }), _2 = this.tableBlot.getRows(), { delta: v2 } = _2.reduce(({ delta: e4, offset: n3 }, r4, i3) => {
        let s3 = r4.getCellByColumIndex(Math.min(a2, this.moveToIndex))[0];
        if (!s3) return { delta: e4, offset: n3 };
        let c3 = s3.offset(s3.scroll) + (o2 ? s3.length() : 0), l3 = c3 - n3;
        if (i3 !== 0 && t2) {
          let e5 = g2[_2[i3 - 1].rowId];
          e5 && (l3 -= e5.length());
        }
        return e4.retain(l3), g2[s3.rowId] && (e4 = e4.concat(g2[s3.rowId])), { delta: e4, offset: c3 };
      }, { delta: new Q(), offset: 0 }), y2 = t2 ? h2.compose(v2) : v2.compose(h2);
      n2 = p2.compose(y2);
    } else {
      let i2 = this.tableBlot.getRows(), a2 = i2.length - 1, o2 = this.moveToIndex > a2, s2 = i2[Math.min(a2, this.moveToIndex)], c2 = Array.from(r3.selectedTds.reduce((e4, t3) => e4.add(t3.getTableRow()), /* @__PURE__ */ new Set())).filter(Boolean), l2 = 0, { delta: u2, start: d2, end: f2 } = c2.reduce(({ delta: e4, start: t3, end: n3 }, r4) => {
        let i3 = r4.offset(r4.scroll), a3 = r4.length();
        return e4.retain(i3 - l2).delete(a3), l2 = i3 + a3, { delta: e4, start: Math.min(t3, i3), end: Math.max(n3, i3 + a3) };
      }, { delta: new Q(), start: 1 / 0, end: 0 }), p2 = s2.offset(s2.scroll) + (o2 ? s2.length() : 0), m2 = new Q().retain(p2).concat(e3.slice(d2, f2));
      n2 = t2 ? u2.compose(m2) : m2.compose(u2);
    }
    return n2;
  }
};
var Ir = class extends Nr {
  static moduleName = `table-resize-box`;
  options;
  root;
  tableWrapperBlot;
  resizeObserver;
  rowHeadWrapper = null;
  colHeadWrapper = null;
  corner = null;
  scrollHandler = [];
  lastHeaderSelect = null;
  bem = l(`resize-box`);
  draggingColIndex = -1;
  draggingRowIndex = -1;
  stopColDrag = [];
  stopRowDrag = [];
  dragWrapper = null;
  dragPlaceholder = null;
  markIndicator = null;
  dragTip = null;
  stopColMoveDrag = [];
  stopRowMoveDrag = [];
  autoScroller = null;
  updateContentDraggingPosition;
  cellSpanIndex = /* @__PURE__ */ new Set();
  dragPlaceholderStartPosition = { x: 0, y: 0 };
  constructor(t2, n2, i2) {
    super(t2, n2), this.tableModule = t2, this.quill = n2, this.options = this.resolveOptions(i2), this.updateContentDraggingPosition = () => this.updateContentDraggerPosition(null), this.root = this.tableModule.addContainer(this.bem.b()), this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange), this.quill.on(r.TABLE_SELECTION_CHANGE, this.updateWrapperHead);
  }
  resolveOptions(e3) {
    return Object.assign({ size: 16, draggable: true }, e3);
  }
  updateWrapperHead = () => {
    if (!this.options.draggable) return;
    let e3 = this.tableModule.getModule(i.tableSelectionName);
    if (!e3 || !this.tableBlot) return;
    let { isSpan: t2, cellIndex: n2 } = jr(true, this.tableBlot, e3.selectedTds), { isSpan: r3, cellIndex: a2 } = jr(false, this.tableBlot, e3.selectedTds);
    if (t2) {
      let e4 = Array.from(this.root.getElementsByClassName(this.bem.be(`col-header`)));
      for (let t3 of e4) t3.classList.remove(this.bem.is(`selected`));
      if (!r3) for (let t3 of Array.from(n2).slice(0, -1)) e4[t3].classList.add(this.bem.is(`selected`));
    }
    if (r3) {
      let e4 = Array.from(this.root.getElementsByClassName(this.bem.be(`row-header`))), n3 = [];
      for (let t3 of e4) t3.classList.remove(this.bem.is(`selected`)), n3[Number(t3.dataset.index)] = t3;
      if (!t2) for (let e5 of Array.from(a2).slice(0, -1)) n3[e5] && n3[e5].classList.add(this.bem.is(`selected`));
    }
  };
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && (this.table && !this.quill.root.contains(this.table) ? this.setSelectionTable(void 0) : this.update());
  };
  setSelectionTable(t2) {
    if (this.table !== t2) {
      if (this.hide(), this.table = t2, this.table) {
        let t3 = quill_default.find(this.table);
        t3 && (this.tableBlot = t3, this.tableWrapperBlot = this.tableBlot.parent), this.show();
      }
      this.update();
    }
  }
  handleResizerHeaderClick(e3, t2, n2) {
    if (!this.table) return;
    let { clientX: r3, clientY: a2 } = n2, o2 = this.table.getBoundingClientRect();
    n2.shiftKey || (this.lastHeaderSelect = null);
    let s2 = [{ x: e3 ? o2.left : r3, y: e3 ? a2 : o2.top }, { x: e3 ? o2.right : r3, y: e3 ? a2 : o2.bottom }];
    if (this.lastHeaderSelect) {
      let t3, n3;
      if (this.lastHeaderSelect.isX) {
        let e4 = Array.from(this.root.getElementsByClassName(this.bem.be(`row-header`)))[this.lastHeaderSelect.index].getBoundingClientRect();
        t3 = Math.min(e4.left, o2.left), n3 = e4.top + e4.height / 2;
      } else {
        let e4 = Array.from(this.root.getElementsByClassName(this.bem.be(`col-header`)))[this.lastHeaderSelect.index].getBoundingClientRect();
        t3 = e4.left + e4.width / 2, n3 = Math.min(e4.top, o2.top);
      }
      this.lastHeaderSelect.isX === e3 ? e3 ? (s2[0].y = Math.min(s2[0].y, n3), s2[1].y = Math.max(s2[1].y, n3)) : (s2[0].x = Math.min(s2[0].x, t3), s2[1].x = Math.max(s2[1].x, t3)) : (s2[1] = { x: Math.max(s2[0].x, t3), y: Math.max(s2[0].y, n3) }, s2[0] = { x: Math.min(s2[0].x, t3), y: Math.min(s2[0].y, n3) });
    } else this.lastHeaderSelect = { isX: e3, index: t2 };
    let c2 = this.tableModule.getModule(i.tableSelectionName);
    c2 && (c2.table = this.table, c2.setSelectedTds(c2.computeSelectedTds(...s2)), c2.show());
  }
  findDragColIndex() {
    return this.draggingColIndex;
  }
  findDragRowIndex() {
    return this.draggingRowIndex;
  }
  updateContentDraggerPosition(e3) {
    if (!e3 || !this.dragWrapper || !this.markIndicator || !this.tableBlot || !this.tableWrapperBlot) return;
    let { rect: t2 } = Y(this.tableBlot);
    if (!t2 || e3.moveToIndex < 0) return;
    let n2 = this.tableWrapperBlot.domNode.getBoundingClientRect(), r3 = this.quill.root.getBoundingClientRect();
    Object.assign(this.dragWrapper.style, { top: `${Math.max(t2.y, n2.y) - r3.y}px`, left: `${Math.max(t2.x, n2.x) - r3.x}px` });
    let { position: i2 } = e3.startPosition[e3.moveToIndex] || {}, a2 = this.dragXCommon.getOffsetFromStart(this.tableBlot), o2 = this.dragYCommon.getOffsetFromStart(this.tableBlot), s2 = e3.isDragX ? { top: `${Math.max(t2.y, n2.y) - r3.y}px`, left: `${i2 - r3.left + a2}px` } : { top: `${i2 - r3.top + o2}px`, left: `${Math.max(t2.x, n2.x) - r3.x}px` };
    Object.assign(this.markIndicator.style, s2);
  }
  createContentDragger(e3, t2, n2) {
    if (!this.tableBlot) return;
    let r3 = this.tableModule.getModule(i.tableSelectionName);
    if (!r3 || !this.tableWrapperBlot) return;
    r3.updateWithSelectedTds();
    let a2 = r3.boundary.width, o2 = r3.boundary.height, s2 = this.quill.root.getBoundingClientRect(), c2 = this.tableWrapperBlot.domNode.getBoundingClientRect(), u2 = l(`drag`);
    this.dragWrapper = this.tableModule.addContainer(u2.b());
    let d2 = c2.x - s2.x, f2 = c2.y - s2.y;
    Object.assign(this.dragWrapper.style, { left: `${d2}px`, top: `${f2}px`, width: `${c2.width}px`, height: `${c2.height}px` }), this.dragPlaceholder = document.createElement(`div`), this.dragPlaceholder.classList.add(u2.be(`placeholder`), u2.is(`hidden`)), this.dragWrapper.appendChild(this.dragPlaceholder), this.dragPlaceholderStartPosition = { x: t2 ? r3.boundary.x - d2 : 0, y: t2 ? 0 : r3.boundary.y - f2 }, Object.assign(this.dragPlaceholder.style, { left: `${this.dragPlaceholderStartPosition.x}px`, top: `${this.dragPlaceholderStartPosition.y}px`, width: `${a2}px`, height: `${o2}px` }), this.markIndicator = this.tableModule.addContainer(u2.be(`indicator`));
    let p2 = t2 ? { top: `${f2}px`, height: `${Math.min(r3.boundary.height, c2.height)}px` } : { left: `${d2}px`, width: `${Math.min(r3.boundary.width, c2.width)}px` };
    Object.assign(this.markIndicator.style, p2), this.updateContentDraggingPosition = () => this.updateContentDraggerPosition(n2), I.call(this, this.quill.root, this.updateContentDraggingPosition), I.call(this, this.tableWrapperBlot.domNode, this.updateContentDraggingPosition), this.dragTip = this.tableModule.addContainer(u2.be(`tip`));
    let m2 = document.createElement(`div`);
    m2.classList.add(u2.be(`tip-content`)), this.dragTip.appendChild(m2), t2 ? (this.dragXCommon.minRange = 0, this.dragXCommon.maxRange = c2.width - a2) : (this.dragYCommon.minRange = 0, this.dragYCommon.maxRange = c2.height - o2);
  }
  bindColEvents() {
    if (!this.tableWrapperBlot) return;
    let e3 = Array.from(this.root.getElementsByClassName(this.bem.be(`col-header`))), t2 = Array.from(this.root.getElementsByClassName(this.bem.be(`col-separator`)));
    if (I.call(this, this.tableWrapperBlot.domNode, () => {
      this.colHeadWrapper.scrollLeft = this.tableWrapperBlot.domNode.scrollLeft;
    }), this.stopColMoveDrag.length > 0) {
      for (let e4 of this.stopColMoveDrag) e4();
      this.stopColMoveDrag = [];
    }
    let n2 = new Fr(this.tableModule, this.tableBlot, this.dragXCommon, { isDragX: true, allowMoveToIndex: (e4) => this.allowMoveToIndex(e4) });
    for (let [t3, r3] of e3.entries()) if (r3.addEventListener(`click`, this.handleResizerHeaderClick.bind(this, false, t3)), this.options.draggable) {
      let { stop: e4 } = $t(r3, this.dragHeadOptions(true, { index: t3, dragHelper: n2 }));
      this.stopColMoveDrag.push(e4);
    }
    if (this.stopColDrag.length > 0) {
      for (let e4 of this.stopColDrag) e4();
      this.stopColDrag = [];
    }
    for (let [e4, n3] of t2.entries()) {
      let { stop: t3 } = $t(n3, { axis: `x`, onStart: (t4, n4) => {
        if (this.dragging = true, this.draggingColIndex = e4, this.calculateColDragRange(), this.dragXCommon.createBreak(), !this.tableBlot) return;
        let r3 = this.tableBlot.domNode.parentElement.getBoundingClientRect(), { rect: i2 } = Y(this.tableBlot);
        if (!i2) return;
        this.dragXCommon.startValue = i2.x;
        let a2 = this.quill.root.getBoundingClientRect();
        Object.assign(this.dragXCommon.dragBreak.style, { top: `${Math.max(r3.y, i2.y) - a2.y}px`, left: `${n4.clientX - a2.x}px`, height: `${Math.min(r3.height, i2.height)}px` });
      }, onMove: ({ position: e5 }) => {
        if (!this.dragXCommon.dragBreak) return;
        let t4 = this.dragXCommon.limitRange(this.tableBlot, e5.x, true), n4 = this.quill.root.getBoundingClientRect();
        this.dragXCommon.dragBreak.style.left = `${t4 - n4.x}px`;
      }, onEnd: ({ position: e5 }) => {
        this.dragging = false, this.updateTableCol(e5.x), this.removeBreak();
      } });
      this.stopColDrag.push(t3), n3.addEventListener(`dragstart`, (e5) => e5.preventDefault());
    }
  }
  bindRowEvents() {
    let e3 = Array.from(this.root.getElementsByClassName(this.bem.be(`row-header`))), t2 = Array.from(this.root.getElementsByClassName(this.bem.be(`row-separator`)));
    if (I.call(this, this.tableWrapperBlot.domNode, () => {
      this.rowHeadWrapper.scrollTop = this.tableWrapperBlot.domNode.scrollTop;
    }), this.stopRowMoveDrag.length > 0) {
      for (let e4 of this.stopRowMoveDrag) e4();
      this.stopRowMoveDrag = [];
    }
    let n2 = new Fr(this.tableModule, this.tableBlot, this.dragYCommon, { isDragX: false, allowMoveToIndex: (e4) => this.allowMoveToIndex(e4) });
    for (let [t3, r3] of e3.entries()) {
      let e4 = Number(r3.dataset.index || t3);
      if (r3.addEventListener(`click`, this.handleResizerHeaderClick.bind(this, true, t3)), this.options.draggable) {
        let { stop: t4 } = $t(r3, this.dragHeadOptions(false, { index: e4, dragHelper: n2 }));
        this.stopRowMoveDrag.push(t4);
      }
    }
    if (this.stopRowDrag.length > 0) {
      for (let e4 of this.stopRowDrag) e4();
      this.stopRowDrag = [];
    }
    for (let [e4, n3] of t2.entries()) {
      let { stop: t3 } = $t(n3, { axis: `y`, onStart: (t4, n4) => {
        if (this.dragging = true, this.draggingRowIndex = e4, this.calculateRowDragRange(), this.dragYCommon.createBreak(), !this.tableBlot) return;
        let r3 = this.tableBlot.domNode.parentElement.getBoundingClientRect(), { rect: i2 } = Y(this.tableBlot);
        if (!i2) return;
        this.dragYCommon.startValue = i2.y;
        let a2 = this.quill.root.getBoundingClientRect();
        Object.assign(this.dragYCommon.dragBreak.style, { top: `${n4.clientY - a2.y}px`, left: `${Math.max(r3.x, i2.x) - a2.x}px`, width: `${Math.min(r3.width, i2.width)}px` });
      }, onMove: ({ position: e5 }) => {
        if (!this.dragYCommon.dragBreak || !this.table) return;
        let t4 = this.dragYCommon.limitRange(this.tableBlot, e5.y, true), n4 = this.quill.root.getBoundingClientRect();
        this.dragYCommon.dragBreak.style.top = `${t4 - n4.y}px`;
      }, onEnd: ({ position: e5 }) => {
        this.dragging = false, this.updateTableRow(e5.y), this.removeBreak();
      } });
      this.stopRowDrag.push(t3), n3.addEventListener(`dragstart`, (e5) => e5.preventDefault());
    }
  }
  allowMoveToIndex(e3) {
    return !this.cellSpanIndex.has(e3);
  }
  recordCellSpan(e3) {
    let t2 = /* @__PURE__ */ new Set();
    if (!this.tableBlot) return t2;
    let n2 = this.tableBlot.descendants(H), r3 = e3 ? this.tableBlot.getColIds() : this.tableBlot.getRowIds(), i2 = e3 ? `colspan` : `rowspan`;
    for (let a2 of n2) {
      if (a2[i2] <= 1) continue;
      let n3 = r3.indexOf(e3 ? a2.colId : a2.rowId);
      if (n3 !== -1) for (let e4 = n3 + 1; e4 < n3 + a2[i2] && e4 < r3.length; e4++) t2.add(e4);
    }
    return t2;
  }
  dragHeadOptions(e3, t2) {
    let { dragHelper: n2, index: r3 } = t2;
    return { axis: e3 ? `x` : `y`, onStart: (t3, i2) => {
      let a2 = false;
      return n2.onStart(t3, i2, () => {
        if (!this.tableBlot) return;
        let t4 = (e3 ? this.tableBlot.getCols() : this.tableBlot.getRows()).length;
        if (n2.selectedIndex.size > t4) {
          a2 = false;
          return;
        }
        let o2 = new Set(Array.from(n2.selectedIndex).slice(0, -1));
        if (a2 = o2.has(r3), !o2.has(r3)) {
          a2 = false;
          return;
        }
        this.dragging = true, e3 ? this.draggingColIndex = r3 : this.draggingRowIndex = r3, this.createContentDragger(i2, e3, n2), this.cellSpanIndex = this.recordCellSpan(e3), this.tableWrapperBlot && (this.autoScroller = new Pr(50, 40), this.autoScroller.minusY = this.options.size, this.autoScroller.minusX = this.options.size, this.autoScroller.updateMousePosition(i2.clientX, i2.clientY), this.autoScroller.start(this.tableWrapperBlot.domNode));
      }), a2;
    }, onMove: (t3, r4) => {
      n2.onMove(t3, r4, (n3) => {
        let { movePosition: i2 } = t3;
        if (this.autoScroller?.updateMousePosition(r4.clientX, r4.clientY), !this.dragPlaceholder || !this.markIndicator || !this.dragTip || !this.tableWrapperBlot) return;
        this.dragPlaceholder.classList.remove(this.bem.is(`hidden`));
        let a2 = n3.dragCommon.limitRange(this.tableBlot, this.dragPlaceholderStartPosition[e3 ? `x` : `y`] + i2[e3 ? `x` : `y`], false);
        if (this.dragPlaceholder.style[e3 ? `left` : `top`] = `${a2}px`, Object.assign(this.dragTip.style, { left: `${r4.clientX - 10}px`, top: `${r4.clientY - 10}px` }), n3.moveToIndex < 0) {
          Object.assign(this.markIndicator.style, { opacity: `0` });
          return;
        }
        let o2 = this.quill.root.getBoundingClientRect(), s2 = n3.moveToIndex >= n3.startPosition.length, c2 = n3.startPosition[s2 ? n3.moveToIndex - 1 : n3.moveToIndex], l2 = c2.position + (s2 ? c2.size : 0), u2 = n3.dragCommon.getOffsetFromStart(this.tableBlot);
        Object.assign(this.markIndicator.style, { opacity: `1`, [e3 ? `left` : `top`]: `${l2 - (e3 ? o2.left : o2.top) + u2}px` });
      });
    }, onEnd: (t3, r4) => {
      n2.onEnd(t3, r4, (t4) => {
        let n3 = t4.updateTableStructure(this.quill.getContents(), (e3 ? this.draggingColIndex : this.draggingRowIndex) > t4.moveToIndex);
        this.quill.updateContents(n3), this.dragging = false, this.cellSpanIndex = /* @__PURE__ */ new Set(), this.autoScroller?.stop(), an.call(this, this.quill.root, this.updateContentDraggingPosition), an.call(this, this.tableWrapperBlot.domNode, this.updateContentDraggingPosition), this.dragWrapper &&= (this.dragWrapper.remove(), null), this.markIndicator &&= (this.markIndicator.remove(), null), this.dragTip &&= (this.dragTip.remove(), null);
      });
    } };
  }
  update() {
    if (!this.tableBlot || !this.tableWrapperBlot) return;
    let { rect: e3 } = Y(this.tableBlot);
    if (!e3) return;
    this.root.innerHTML = ``;
    let t2 = this.tableBlot.getCols(), n2 = this.tableBlot.getRows(), r3 = this.tableWrapperBlot.domNode.getBoundingClientRect(), a2 = this.quill.root.getBoundingClientRect();
    if (Object.assign(this.root.style, { top: `${Math.max(e3.y, r3.y) - a2.y}px`, left: `${Math.max(e3.x, r3.x) - a2.x}px` }), t2.length > 0 && n2.length > 0 && (this.corner = document.createElement(`div`), this.corner.classList.add(this.bem.be(`corner`)), Object.assign(this.corner.style, { width: `${this.options.size}px`, height: `${this.options.size}px` }), this.corner.addEventListener(`click`, () => {
      let e4 = this.tableModule.getModule(i.tableSelectionName);
      e4 && this.tableBlot && (e4.setSelectedTds(this.tableBlot.descendants(H)), e4.show(), e4.updateWithSelectedTds());
    }), this.root.appendChild(this.corner)), t2.length > 0) {
      let n3 = ``;
      for (let r4 of t2) {
        let t3 = r4.domNode.getBoundingClientRect().width;
        t3 === 0 && (t3 = Number.parseInt(r4.domNode.getAttribute(`width`), 10)), n3 += `<div class="${this.bem.be(`col-header`)}" style="width: ${t3}px">
          <div class="${this.bem.be(`col-separator`)}" style="height: ${e3.height + this.options.size - 3}px"></div>
        </div>`;
      }
      let i2 = document.createElement(`div`);
      i2.classList.add(this.bem.be(`col`));
      let a3 = document.createElement(`div`);
      a3.classList.add(this.bem.be(`col-wrapper`)), Object.assign(i2.style, { transform: `translateY(-${this.options.size}px)`, maxWidth: `${r3.width}px`, height: `${this.options.size}px` }), Object.assign(a3.style, { width: `${e3.width}px` }), a3.innerHTML = n3, i2.appendChild(a3), this.root.appendChild(i2), i2.scrollLeft = this.tableWrapperBlot.domNode.scrollLeft, this.colHeadWrapper = i2, this.bindColEvents();
    }
    if (n2.length > 0) {
      let t3 = ``;
      for (let r4 = 0; r4 < n2.length; r4++) {
        let i3 = r4, a4 = n2[r4], o3 = a4.domNode.getBoundingClientRect().height;
        if (a4.children.length === 1 && (a4.children.head?.emptyRow.length || 0) > 0) {
          let e4 = a4.children.head.emptyRow.length;
          for (let t4 = r4 + 1; t4 < n2.length && t4 <= r4 + e4; t4++) {
            let e5 = n2[t4];
            o3 += e5.domNode.getBoundingClientRect().height;
          }
          r4 += e4;
        }
        t3 += `<div class="${this.bem.be(`row-header`)}" data-index="${i3}" style="height: ${o3}px">
          <div class="${this.bem.be(`row-separator`)}" style="width: ${e3.width + this.options.size - 3}px"></div>
        </div>`;
      }
      let i2 = document.createElement(`div`);
      i2.classList.add(this.bem.be(`row`));
      let a3 = document.createElement(`div`);
      a3.classList.add(this.bem.be(`row-wrapper`)), Object.assign(i2.style, { transform: `translateX(-${this.options.size}px)`, width: `${this.options.size}px`, maxHeight: `${r3.height}px` }), Object.assign(a3.style, { height: `${e3.height}px` }), a3.innerHTML = t3, i2.appendChild(a3), this.root.appendChild(i2), i2.scrollTop = this.tableWrapperBlot.domNode.scrollTop, this.rowHeadWrapper = i2, this.bindRowEvents();
    }
    let [o2] = p(this.tableBlot, Ln), s2 = !o2 || o2?.side !== `top`;
    s2 ? this.root.classList.remove(this.bem.is(`caption-bottom`)) : this.root.classList.add(this.bem.is(`caption-bottom`));
    let c2 = -1 * this.options.size, l2 = -1 * this.options.size;
    kr(this.tableBlot) ? (this.root.classList.add(this.bem.is(`align-right`)), c2 = Math.min(r3.width, e3.width), l2 = Math.min(r3.width, e3.width)) : this.root.classList.remove(this.bem.is(`align-right`)), this.corner && Object.assign(this.corner.style, { transform: `translateY(${-1 * this.options.size}px) translateX(${c2}px)`, top: `${s2 ? 0 : e3.height + this.options.size}px` }), this.rowHeadWrapper && Object.assign(this.rowHeadWrapper.style, { transform: `translateX(${l2}px)`, maxHeight: `${r3.height}px` }), this.colHeadWrapper && Object.assign(this.colHeadWrapper.style, { top: `${s2 ? 0 : e3.height + this.options.size}px`, maxWidth: `${r3.width}px` });
  }
  show() {
    !this.table || !this.tableBlot || (this.root.classList.remove(this.bem.is(`hidden`)), this.resizeObserver = rn(() => this.update(), { ignoreFirstBind: true }), this.resizeObserver.observe(this.table), this.update(), I.call(this, this.quill.root, () => {
      this.update();
    }));
  }
  hide() {
    this.root.classList.add(this.bem.is(`hidden`)), this.resizeObserver &&= (this.resizeObserver.disconnect(), void 0);
  }
  destroy() {
    this.hide(), L.call(this), this.quill.off(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange);
    for (let [e3, t2] of this.scrollHandler) e3.removeEventListener(`scroll`, t2);
    this.root.remove();
  }
};
var Lr = class extends Nr {
  static moduleName = `table-resize-line`;
  colResizer;
  rowResizer;
  currentTableCell;
  tableCellBlot;
  bem = l(`resize-line`);
  stopColDrag;
  stopRowDrag;
  scrollHandler = [];
  constructor(t2, n2) {
    super(t2, n2), this.tableModule = t2, this.quill = n2, this.colResizer = this.tableModule.addContainer(this.bem.be(`col`)), this.rowResizer = this.tableModule.addContainer(this.bem.be(`row`)), this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange);
  }
  setSelectionTable(e3) {
    this.table !== e3 && (this.hide(), this.table = e3, this.table && this.show());
  }
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && (this.table && !this.quill.root.contains(this.table) ? this.setSelectionTable(void 0) : this.update());
  };
  findTableCell(e3) {
    for (let t2 of e3.composedPath()) {
      if (t2 instanceof HTMLElement && [`TD`, `TH`].includes(t2.tagName)) return t2;
      if (t2 === document.body) return null;
    }
    return null;
  }
  pointermoveHandler = (n2) => {
    if (this.dragging || this.tableModule.getModule(i.tableSelectionName)?.dragging) return;
    let r3 = this.findTableCell(n2);
    if (!r3) return this.hide();
    let a2 = quill_default.find(r3);
    a2 && this.currentTableCell !== r3 && (this.show(), this.currentTableCell = r3, this.tableCellBlot = a2, this.tableBlot = u(a2, t.tableMain), this.tableBlot.getCols().length > 0 && this.updateColResizer(), this.updateRowResizer(), I.call(this, this.quill.root, () => {
      this.dragging || this.hideResizer();
    }));
  };
  findDragColIndex(e3) {
    return this.tableCellBlot ? e3.findIndex((e4) => e4.colId === this.tableCellBlot.colId) : -1;
  }
  updateColResizer() {
    if (!this.tableBlot || !this.tableCellBlot || !this.colResizer) return;
    this.colResizer.remove();
    let { rect: e3 } = Y(this.tableBlot);
    if (!e3) return;
    this.colResizer = this.tableModule.addContainer(this.bem.be(`col`));
    let t2 = this.tableCellBlot.domNode.getBoundingClientRect(), n2 = this.quill.root.getBoundingClientRect(), r3 = t2.right - n2.x;
    kr(this.tableBlot) && (r3 = t2.left - n2.x), Object.assign(this.colResizer.style, { top: `${e3.y - n2.y}px`, left: `${r3}px`, height: `${e3.height}px` });
    let { stop: i2 } = $t(this.colResizer, { axis: `x`, onStart: (e4, t3) => {
      if (this.dragging = true, this.calculateColDragRange(), this.dragXCommon.createBreak(), !this.tableBlot) return;
      let n3 = this.tableBlot.domNode.parentElement.getBoundingClientRect(), { rect: r4 } = Y(this.tableBlot);
      if (!r4) return;
      this.dragXCommon.startValue = r4.x;
      let i3 = this.quill.root.getBoundingClientRect();
      Object.assign(this.dragXCommon.dragBreak.style, { top: `${Math.max(n3.y, r4.y) - i3.y}px`, left: `${t3.clientX - i3.x}px`, height: `${Math.min(n3.height, r4.height)}px` });
    }, onMove: ({ position: e4 }) => {
      if (!this.dragXCommon.dragBreak) return;
      let t3 = this.dragXCommon.limitRange(this.tableBlot, e4.x, true), n3 = this.quill.root.getBoundingClientRect();
      this.dragXCommon.dragBreak.style.left = `${t3 - n3.x}px`;
    }, onEnd: ({ position: e4 }) => {
      if (this.dragging = false, this.colResizer) {
        let t3 = this.dragXCommon.limitRange(this.tableBlot, e4.x, true), n3 = this.quill.root.getBoundingClientRect();
        this.colResizer.style.left = `${t3 - n3.x}px`;
      }
      this.updateTableCol(e4.x), this.removeBreak();
    } });
    this.stopColDrag && this.stopColDrag(), this.stopColDrag = i2, this.colResizer.addEventListener(`dragstart`, (e4) => e4.preventDefault());
  }
  findDragRowIndex(e3) {
    if (!this.tableCellBlot) return -1;
    let t2 = this.tableCellBlot.parent;
    return t2 instanceof U ? e3.indexOf(t2) : -1;
  }
  updateRowResizer() {
    if (!this.tableBlot || !this.tableCellBlot || !this.rowResizer) return;
    let e3 = this.tableCellBlot;
    this.rowResizer.remove();
    let { rect: t2 } = Y(this.tableBlot);
    if (!t2) return;
    this.rowResizer = this.tableModule.addContainer(this.bem.be(`row`));
    let n2 = e3.domNode.getBoundingClientRect(), r3 = this.quill.root.getBoundingClientRect();
    Object.assign(this.rowResizer.style, { top: `${n2.bottom - r3.y}px`, left: `${t2.x - r3.x}px`, width: `${t2.width}px` });
    let { stop: i2 } = $t(this.rowResizer, { axis: `y`, onStart: (e4, t3) => {
      if (this.dragging = true, this.calculateRowDragRange(), this.dragYCommon.createBreak(), !this.tableBlot) return;
      let n3 = this.tableBlot.domNode.parentElement.getBoundingClientRect(), { rect: r4 } = Y(this.tableBlot);
      if (!r4) return;
      this.dragYCommon.startValue = r4.y;
      let i3 = this.quill.root.getBoundingClientRect();
      Object.assign(this.dragYCommon.dragBreak.style, { top: `${t3.clientY - i3.y}px`, left: `${Math.max(n3.x, r4.x) - i3.x}px`, width: `${Math.min(n3.width, r4.width)}px` });
    }, onMove: ({ position: e4 }) => {
      if (!this.dragYCommon.dragBreak || !this.table) return;
      let t3 = this.dragYCommon.limitRange(this.tableBlot, e4.y, true), n3 = this.quill.root.getBoundingClientRect();
      this.dragYCommon.dragBreak.style.top = `${t3 - n3.y}px`;
    }, onEnd: ({ position: e4 }) => {
      if (this.dragging = false, this.rowResizer) {
        let t3 = this.dragYCommon.limitRange(this.tableBlot, e4.y, true), n3 = this.quill.root.getBoundingClientRect();
        this.rowResizer.style.left = `${t3 - n3.y}px`;
      }
      this.updateTableRow(e4.y), this.removeBreak();
    } });
    this.stopRowDrag && this.stopRowDrag(), this.stopRowDrag = i2, this.rowResizer.addEventListener(`dragstart`, (e4) => e4.preventDefault());
  }
  show() {
    !this.table || !this.rowResizer || !this.colResizer || (this.rowResizer.classList.remove(this.bem.is(`hidden`)), this.colResizer.classList.remove(this.bem.is(`hidden`)), this.table.addEventListener(`pointermove`, this.pointermoveHandler));
  }
  hideResizer() {
    !this.rowResizer || !this.colResizer || (this.rowResizer.classList.add(this.bem.is(`hidden`)), this.colResizer.classList.add(this.bem.is(`hidden`)));
  }
  hide() {
    this.currentTableCell = void 0, L.call(this), this.hideResizer(), this.table && this.table.removeEventListener(`pointermove`, this.pointermoveHandler);
  }
  destroy() {
    this.colResizer &&= (this.colResizer.remove(), void 0), this.rowResizer &&= (this.rowResizer.remove(), void 0), this.quill.off(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange);
  }
};
var Rr = class extends Hn {
  static moduleName = `table-resize-scale`;
  scrollHandler = [];
  tableMainBlot;
  tableWrapperBlot;
  bem = l(`scale`);
  options;
  root;
  block;
  resizeobserver = new ResizeObserver(() => this.update());
  constructor(t2, n2, r3) {
    super(t2, n2), this.tableModule = t2, this.quill = n2, this.options = this.resolveOptions(r3), this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange);
  }
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && (this.table && !this.quill.root.contains(this.table) ? this.setSelectionTable(void 0) : this.update());
  };
  resolveOptions(e3) {
    return Object.assign({ blockSize: 12, offset: 6 }, e3);
  }
  buildResizer() {
    if (!this.tableMainBlot || !this.tableWrapperBlot) return;
    this.root = this.tableModule.addContainer(this.bem.b()), this.block = document.createElement(`div`), this.block.classList.add(this.bem.be(`block`)), Object.assign(this.block.style, { width: `${this.options.blockSize}px`, height: `${this.options.blockSize}px` }), this.root.appendChild(this.block);
    let e3 = [], t2 = [];
    $t(this.block, { onStart: () => {
      this.tableMainBlot && (e3 = this.tableMainBlot.getCols().map((e4) => ({ blot: e4, width: Math.floor(e4.width) })), t2 = this.tableMainBlot.getRows().map((e4) => ({ blot: e4, height: Math.floor(e4.domNode.getBoundingClientRect().height) })));
    }, onMove: ({ movePosition: r3 }) => {
      if (!this.tableMainBlot) return;
      let i2 = kr(this.tableMainBlot) ? -1 : 1, a2 = r3.x * i2, o2 = r3.y, s2 = Math.floor(a2 / e3.length), c2 = Math.floor(o2 / t2.length);
      for (let { blot: t3, width: r4 } of e3) t3.width = Math.max(r4 + s2, n.colMinWidthPx);
      for (let { blot: e4, height: r4 } of t2) e4.setHeight(`${Math.max(r4 + c2, n.rowMinHeightPx)}px`);
    }, onEnd: () => {
      e3 = [], t2 = [];
    } }), this.block.addEventListener(`dragstart`, (e4) => e4.preventDefault());
  }
  update() {
    if (!this.block || !this.root || !this.tableMainBlot || !this.tableWrapperBlot) return;
    if (this.tableMainBlot.full) {
      this.hide();
      return;
    }
    let { rect: e3 } = Y(this.tableMainBlot);
    if (!e3) return;
    let t2 = this.tableWrapperBlot.domNode.getBoundingClientRect(), n2 = this.quill.root.getBoundingClientRect(), { scrollTop: r3, scrollLeft: i2 } = this.tableWrapperBlot.domNode, a2 = this.options.blockSize * 2 + this.options.offset, o2 = Math.min(e3.width, t2.width) + a2, s2 = Math.min(e3.height, t2.height) + a2;
    Object.assign(this.root.style, { width: `${o2}px`, height: `${s2}px`, left: `${Math.max(e3.x, t2.x) - n2.x - this.options.blockSize}px`, top: `${Math.max(e3.y, t2.y) - n2.y - this.options.blockSize}px` });
    let c2 = { left: `${e3.width + a2 - i2}px`, top: `${s2 - r3}px` };
    kr(this.tableMainBlot) ? (this.root.classList.add(this.bem.is(`align-right`)), c2.left = `${this.options.blockSize + -1 * i2}px`) : this.root.classList.remove(this.bem.is(`align-right`)), Object.assign(this.block.style, c2);
  }
  show() {
    this.table && (this.tableMainBlot = quill_default.find(this.table), this.tableMainBlot && !this.tableMainBlot.full && (this.tableWrapperBlot = this.tableMainBlot.parent, this.resizeobserver.observe(this.tableMainBlot.domNode), I.call(this, this.quill.root, () => this.update()), I.call(this, this.tableWrapperBlot.domNode, () => this.update())), this.buildResizer());
  }
  hide() {
    this.tableMainBlot = void 0, this.tableWrapperBlot = void 0, this.root && (this.root.remove(), this.root = void 0, this.block = void 0), L.call(this);
  }
  destroy() {
    this.hide(), this.quill.off(quill_default.events.TEXT_CHANGE, this.updateWhenTextChange), this.resizeobserver.disconnect();
  }
};
var zr = { size: `height`, offset: `offsetHeight`, scrollDirection: `scrollTop`, scrollSize: `scrollHeight`, axis: `y`, direction: `top`, client: `clientY` };
var Br = { size: `width`, offset: `offsetWidth`, scrollDirection: `scrollLeft`, scrollSize: `scrollWidth`, axis: `x`, direction: `left`, client: `clientX` };
var Vr = class {
  minSize = 20;
  gap = 4;
  move = 0;
  cursorDown = false;
  cursorLeave = false;
  ratioY = 1;
  ratioX = 1;
  sizeWidth = ``;
  sizeHeight = ``;
  size = ``;
  bem = l(`scrollbar`);
  tableMainBlot;
  ob;
  container;
  scrollbar;
  thumb = document.createElement(`div`);
  scrollHandler = [];
  propertyMap;
  thumbState = { x: 0, y: 0 };
  get isVertical() {
    return this.options.isVertical;
  }
  constructor(t2, n2, r3) {
    this.quill = t2, this.table = n2, this.options = r3, this.tableMainBlot = quill_default.find(this.table), this.container = n2.parentElement, this.propertyMap = this.isVertical ? zr : Br, this.calculateSize(), this.ob = new ResizeObserver(() => this.update()), this.ob.observe(n2), this.scrollbar = this.createScrollbar(), this.setScrollbarPosition(), I.call(this, this.quill.root, () => this.setScrollbarPosition()), this.showScrollbar();
  }
  update() {
    this.calculateSize(), this.setScrollbarPosition();
  }
  setScrollbarPosition() {
    let { rect: e3, head: t2, body: n2, foot: r3 } = Y(this.tableMainBlot), i2 = t2 || n2 || r3;
    if (!i2 || !e3) return;
    let { scrollLeft: a2, scrollTop: o2, offsetLeft: s2, offsetTop: c2 } = this.quill.root, { offsetLeft: l2, offsetTop: u2 } = this.container, { offsetLeft: d2, offsetTop: f2 } = i2.domNode, { width: p2, height: m2 } = this.container.getBoundingClientRect(), h2 = l2 + d2 - s2, g2 = u2 + f2 - c2;
    this.isVertical ? h2 += Math.min(p2, e3.width) : g2 += Math.min(m2, e3.height), this.tableMainBlot && this.tableMainBlot.align !== `left` && (h2 += this.table.offsetLeft - l2), Object.assign(this.scrollbar.style, { [this.propertyMap.size]: `${this.isVertical ? Math.min(m2, e3.height) : p2}px`, transform: `translate(${h2 - a2}px, ${g2 - o2}px)` }), this.containerScrollHandler(this.container);
  }
  calculateSize() {
    let e3 = this.container.offsetHeight - this.gap, t2 = this.container.offsetWidth - this.gap, n2 = e3 ** 2 / this.container.scrollHeight, r3 = t2 ** 2 / this.container.scrollWidth, i2 = Math.max(n2, this.minSize), a2 = Math.max(r3, this.minSize);
    this.ratioY = n2 / (e3 - n2) / (i2 / (e3 - i2)), this.ratioX = r3 / (t2 - r3) / (a2 / (t2 - a2)), this.sizeWidth = a2 + this.gap < t2 ? `${a2}px` : ``, this.sizeHeight = i2 + this.gap < e3 ? `${i2}px` : ``, this.size = this.isVertical ? this.sizeHeight : this.sizeWidth;
  }
  createScrollbar() {
    let e3 = document.createElement(`div`);
    e3.classList.add(this.bem.b(), this.isVertical ? this.bem.is(`vertical`) : this.bem.is(`horizontal`), this.bem.is(`transparent`)), Object.assign(e3.style, { display: `none` }), this.thumb.classList.add(this.bem.be(`thumb`));
    let t2 = null, n2 = (e4) => {
      if (this.cursorDown === false) return;
      let t3 = this.thumbState[this.propertyMap.axis];
      if (!t3) return;
      let n3 = this.scrollbar[this.propertyMap.offset] ** 2 / this.container[this.propertyMap.scrollSize] / (this.isVertical ? this.ratioY : this.ratioX) / this.thumb[this.propertyMap.offset], r4 = ((this.scrollbar.getBoundingClientRect()[this.propertyMap.direction] - e4[this.propertyMap.client]) * -1 - (this.thumb[this.propertyMap.offset] - t3)) * 100 * n3 / this.scrollbar[this.propertyMap.offset];
      this.container[this.propertyMap.scrollDirection] = r4 * this.container[this.propertyMap.scrollSize] / 100;
    }, r3 = () => {
      this.thumbState[this.propertyMap.axis] = 0, this.cursorDown = false, document.removeEventListener(`mousemove`, n2), document.removeEventListener(`mouseup`, r3), this.cursorLeave && this.hideScrollbar(), document.onselectstart = t2;
    }, i2 = (e4) => {
      e4.stopImmediatePropagation(), this.cursorDown = true, document.addEventListener(`mousemove`, n2), document.addEventListener(`mouseup`, r3), t2 = document.onselectstart, document.onselectstart = () => false;
    };
    this.thumb.addEventListener(`mousedown`, (e4) => {
      if (e4.stopPropagation(), e4.ctrlKey || [1, 2].includes(e4.button)) return;
      window.getSelection()?.removeAllRanges(), i2(e4);
      let t3 = e4.currentTarget;
      t3 && (this.thumbState[this.propertyMap.axis] = t3[this.propertyMap.offset] - (e4[this.propertyMap.client] - t3.getBoundingClientRect()[this.propertyMap.direction]));
    });
    let a2 = [this.table, e3];
    for (let e4 of a2) e4.addEventListener(`mouseenter`, this.showScrollbar), e4.addEventListener(`mouseleave`, this.hideScrollbar);
    return I.call(this, this.container, () => {
      this.containerScrollHandler(this.container);
    }), e3.appendChild(this.thumb), e3;
  }
  containerScrollHandler(e3) {
    let t2 = e3[this.propertyMap.offset] - this.gap;
    this.move = e3[this.propertyMap.scrollDirection] * 100 / t2 * (this.isVertical ? this.ratioY : this.ratioX), Object.assign(this.thumb.style, { [this.propertyMap.size]: this.size, transform: `translate${this.propertyMap.axis.toUpperCase()}(${this.move}%)` });
  }
  showScrollbar = mn(() => {
    this.cursorLeave = false, this.scrollbar.removeEventListener(`transitionend`, this.hideScrollbarTransitionend), this.scrollbar.style.display = this.size ? `block` : `none`, requestAnimationFrame(() => {
      this.scrollbar.classList.remove(this.bem.is(`transparent`));
    });
  }, 200);
  hideScrollbar = mn(() => {
    this.cursorLeave = true, !this.cursorDown && (this.scrollbar.removeEventListener(`transitionend`, this.hideScrollbarTransitionend), this.scrollbar.addEventListener(`transitionend`, this.hideScrollbarTransitionend, { once: true }), this.scrollbar.classList.add(this.bem.is(`transparent`)));
  }, 200);
  hideScrollbarTransitionend = () => {
    this.scrollbar.style.display = this.cursorDown && this.size ? `block` : `none`;
  };
  destroy() {
    this.ob.disconnect(), L.call(this), this.table.removeEventListener(`mouseenter`, this.showScrollbar), this.table.removeEventListener(`mouseleave`, this.hideScrollbar);
  }
};
var Hr = class extends Hn {
  static moduleName = `table-scrollbar`;
  scrollbarContainer;
  scrollbar = [];
  bem = l(`scrollbar`);
  constructor(t2, n2, r3) {
    super(t2, n2), this.tableModule = t2, this.quill = n2;
    let i2 = l(`scrollbar`);
    this.quill.container.classList.add(i2.bm(`virtual`)), this.scrollbarContainer = this.tableModule.addContainer(this.bem.be(`container`)), this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange);
  }
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && (this.table && !this.quill.root.contains(this.table) ? this.setSelectionTable(void 0) : this.update());
  };
  hide() {
    for (let e3 of this.scrollbar) e3.destroy();
    this.scrollbar = [], this.scrollbarContainer.innerHTML = ``;
  }
  show() {
    if (this.table) {
      this.scrollbar = [new Vr(this.quill, this.table, { isVertical: true }), new Vr(this.quill, this.table, { isVertical: false })];
      for (let e3 of this.scrollbar) this.scrollbarContainer.appendChild(e3.scrollbar), e3.showScrollbar();
    }
  }
  update() {
    if (this.table) {
      this.scrollbar.length <= 0 && this.show();
      for (let e3 of this.scrollbar) e3.calculateSize(), e3.setScrollbarPosition();
    } else this.scrollbar.length > 0 && this.hide();
  }
  destroy() {
    this.hide(), this.scrollbarContainer.remove(), this.quill.off(quill_default.events.TEXT_CHANGE, this.updateWhenTextChange);
  }
};
var Ur = class extends Hn {
  static moduleName = i.tableSelectionName;
  options;
  boundary = null;
  scrollRecordEls = [];
  startScrollRecordPosition = [];
  selectedTableScrollX = 0;
  selectedTableScrollY = 0;
  selectedEditorScrollX = 0;
  selectedEditorScrollY = 0;
  selectedTds = [];
  cellSelectWrap;
  cellSelect;
  scrollHandler = [];
  resizeObserver;
  isDisplaySelection = false;
  bem = l(`selection`);
  autoScroller;
  lastSelection = { anchorNode: null, anchorOffset: 0, focusNode: null, focusOffset: 0 };
  _dragging = false;
  set dragging(e3) {
    this._dragging !== e3 && (this._dragging = e3, this.quill.emitter.emit(e3 ? r.TABLE_SELECTION_DRAG_START : r.TABLE_SELECTION_DRAG_END, this));
  }
  get dragging() {
    return this._dragging;
  }
  constructor(t2, n2, i2 = {}) {
    super(t2, n2), this.tableModule = t2, this.quill = n2, this.options = this.resolveOptions(i2), this.scrollRecordEls = [this.quill.root, document.documentElement], this.cellSelectWrap = t2.addContainer(this.bem.b()), this.cellSelect = this.helpLinesInitial(), this.resizeObserver = rn(this.updateAfterEvent, { ignoreFirstBind: true }), this.resizeObserver.observe(this.quill.root), document.addEventListener(`paste`, this.handlePaste), this.quill.emitter.listenDOM(`selectionchange`, document, this.selectionChangeHandler.bind(this)), this.quill.on(r.AFTER_TABLE_RESIZE, this.updateAfterEvent), this.quill.on(quill_default.events.SELECTION_CHANGE, this.quillSelectionChangeHandler), this.quill.on(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange), this.autoScroller = new cn(50, 40), this.hide();
  }
  handlePaste = (e3) => {
    if (!(document.activeElement && this.quill.root.contains(document.activeElement)) || this.quill.getSelection()) return;
    let n2 = e3.clipboardData;
    if (!n2) return;
    e3.preventDefault();
    let r3 = this.selectedTds;
    if (r3.length <= 0) return;
    let i2 = n2.getData(`text/html`), a2 = this.quill.clipboard.convert({ html: i2 }).ops.filter((e4) => e4.attributes?.[t.tableCellInner]);
    a2.length !== 0 && Gn({ quill: this.quill, talbeModule: this.tableModule }, r3, a2);
  };
  keyboardHandler = (e3) => __async(this, null, function* () {
    if (e3.ctrlKey) switch (e3.key) {
      case `c`:
      case `x`:
        yield wr(this.tableModule, this.selectedTds, e3.key === `x`);
        break;
    }
    else (e3.key === `Backspace` || e3.key === `Delete`) && this.removeCellBySelectedTds();
  });
  updateWhenTextChange = (t2) => {
    t2 === quill_default.events.TEXT_CHANGE && (this.table && !this.quill.root.contains(this.table) ? this.setSelectionTable(void 0) : this.updateAfterEvent());
  };
  updateAfterEvent = () => {
    for (let e3 of this.selectedTds) if (!e3.domNode.isConnected) {
      this.selectedTds = [];
      break;
    }
    this.updateWithSelectedTds();
  };
  removeCellBySelectedTds() {
    let t2 = this.quill.getSelection(), n2 = document.activeElement;
    if (!(t2 || !this.quill.root.contains(n2))) {
      if (this.table) {
        let t3 = quill_default.find(this.table), n3 = t3.descendants(H);
        if (this.selectedTds.length === n3.length) {
          t3.remove();
          return;
        }
      }
      for (let e3 of this.selectedTds) {
        let t3 = e3.clone();
        t3.appendChild(e3.scroll.create(`block`)), e3.parent.insertBefore(t3, e3), e3.remove();
      }
    }
  }
  setSelectedTds(e3) {
    let t2 = new Set(this.selectedTds), n2 = this.selectedTds.length === e3.length && e3.every((e4) => t2.has(e4));
    this.selectedTds = e3, n2 || this.quill.emitter.emit(r.TABLE_SELECTION_CHANGE, this, this.selectedTds);
  }
  quillSelectionChangeHandler = (n2, r3, i2) => {
    if (i2 !== quill_default.sources.API && n2 && !this.quill.composition.isComposing && this.selectedTds.length > 0) {
      let e3 = this.quill.getFormat(n2), [r4] = this.quill.getLine(n2.index), i3 = !!e3[t.tableCellInner] && !!r4, a2 = r4 && this.selectedTds.some((e4) => e4.domNode.contains(r4.domNode));
      if (i3 && !a2) try {
        let e4 = u(r4, t.tableCellInner);
        this.setSelectedTds([e4]), this.updateWithSelectedTds();
      } catch {
      }
      else i3 && a2 || this.hide();
    }
  };
  setSelectionData(e3, t2) {
    let { anchorNode: n2, anchorOffset: r3, focusNode: i2, focusOffset: a2 } = t2;
    if (!n2 || !i2) return;
    let o2 = document.createRange(), s2 = this.selectionDirectionUp(t2);
    s2 ? (o2.setStart(n2, r3), o2.setEnd(n2, r3)) : (o2.setStart(n2, r3), o2.setEnd(i2, a2)), e3.removeAllRanges(), e3.addRange(o2), s2 && e3.extend(i2, a2);
  }
  selectionDirectionUp(e3) {
    let { anchorNode: t2, anchorOffset: n2, focusNode: r3, focusOffset: i2 } = e3;
    if (!t2 || !r3) return false;
    if (t2 === r3) return n2 > i2;
    let a2 = t2.compareDocumentPosition(r3);
    return a2 & Node.DOCUMENT_POSITION_CONTAINS || a2 & Node.DOCUMENT_POSITION_CONTAINED_BY ? (a2 & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 : (a2 & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
  }
  resolveOptions(e3) {
    return Object.assign({ selectColor: `#0589f340` }, e3);
  }
  selectionChangeHandler() {
    let n2 = window.getSelection();
    if (!n2) return;
    let { anchorNode: r3, focusNode: i2, anchorOffset: a2, focusOffset: o2 } = n2;
    if (!r3 || !i2) return;
    let s2 = quill_default.find(r3), c2 = quill_default.find(i2);
    if (!s2 || !c2 || s2.scroll !== this.quill.scroll || c2.scroll !== this.quill.scroll) return;
    let l2 = f(s2), u2 = f(c2), d2 = l2.has(t.tableColgroup), p2 = u2.has(t.tableColgroup);
    if (d2 || p2) {
      let e3 = r3, s3 = a2, c3 = i2, f2 = o2;
      if (d2) {
        let n3 = l2.get(t.tableWrapper).descendants(H);
        n3.length > 0 && (e3 = n3[0].domNode, s3 = 0);
      }
      if (p2) {
        let e4 = u2.get(t.tableWrapper).descendants(H);
        e4.length > 0 && (c3 = e4[0].domNode, f2 = 0);
      }
      this.setSelectionData(n2, { anchorNode: e3, anchorOffset: s3, focusNode: c3, focusOffset: f2 });
      return;
    }
    let m2 = l2.has(t.tableCellInner), h2 = u2.has(t.tableCellInner), g2 = m2 && h2;
    if (g2) {
      let e3 = l2.get(t.tableCellInner), n3 = u2.get(t.tableCellInner);
      g2 &&= e3 !== n3;
    }
    if (m2 && h2 && g2 || !m2 && h2 || !h2 && m2) {
      this.setSelectionData(n2, this.lastSelection), this.selectedTds.length > 0 && this.hide();
      return;
    }
    this.lastSelection = { anchorNode: r3, anchorOffset: a2, focusNode: i2, focusOffset: o2 };
  }
  helpLinesInitial() {
    this.cellSelectWrap.style.setProperty(`--select-color`, this.options.selectColor);
    let e3 = document.createElement(`div`);
    return e3.classList.add(this.bem.be(`line`)), this.cellSelectWrap.appendChild(e3), e3;
  }
  computeSelectedTds(t2, n2) {
    if (!this.table) return [];
    let r3 = quill_default.find(this.table);
    if (!r3) return [];
    let i2 = new Set(r3.descendants(W).map((e3, t3) => (e3.index = t3, e3))), a2 = this.getScrollPositionDiff(), { rect: o2 } = Y(r3);
    if (!o2) return [];
    let s2 = t2.x + a2.x, c2 = t2.y + a2.y, l2 = { x: Math.max(o2.left, Math.min(n2.x, s2)), y: Math.max(o2.top, Math.min(n2.y, c2)), x1: Math.min(o2.right, Math.max(n2.x, s2)), y1: Math.min(o2.bottom, Math.max(n2.y, c2)) }, u2 = /* @__PURE__ */ new Set(), d2 = true;
    for (; d2; ) {
      d2 = false;
      for (let e3 of i2) {
        e3.__rect ||= e3.domNode.getBoundingClientRect();
        let { x: t3, y: n3, right: r4, bottom: a3 } = e3.__rect;
        if (en({ x: Math.floor(l2.x), y: Math.floor(l2.y), x1: Math.floor(l2.x1), y1: Math.floor(l2.y1) }, { x: Math.floor(t3), y: Math.floor(n3), x1: Math.floor(r4), y1: Math.floor(a3) }, 0, u2.size === 0)) {
          u2.add(e3), i2.delete(e3), l2 = { x: Math.min(l2.x, t3), y: Math.min(l2.y, n3), x1: Math.max(l2.x1, r4), y1: Math.max(l2.y1, a3) }, d2 = true;
          break;
        }
      }
    }
    for (let e3 of [...u2, ...i2]) delete e3.__rect;
    return this.boundary = tn(__spreadProps(__spreadValues({}, l2), { width: l2.x1 - l2.x, height: l2.y1 - l2.y }), this.quill.root), Array.from(u2).toSorted((e3, t3) => e3.index - t3.index).map((e3) => (delete e3.index, e3.getCellInner()));
  }
  getScrollPositionDiff() {
    let { x: e3, y: t2 } = this.getTableViewScroll(), { x: n2, y: r3 } = on(this.quill.root);
    return this.selectedTableScrollX = e3, this.selectedTableScrollY = t2, this.selectedEditorScrollX = n2, this.selectedEditorScrollY = r3, this.startScrollRecordPosition.reduce((e4, { x: t3, y: n3 }, r4) => {
      let { x: i2, y: a2 } = on(this.scrollRecordEls[r4]);
      return e4.x += t3 - i2, e4.y += n3 - a2, e4;
    }, { x: 0, y: 0 });
  }
  recordScrollPosition() {
    this.clearRecordScrollPosition();
    for (let e3 of this.scrollRecordEls) this.startScrollRecordPosition.push(on(e3));
  }
  clearRecordScrollPosition() {
    this.startScrollRecordPosition = [];
  }
  tableSelectHandler(t2) {
    let { button: n2, target: r3, clientX: i2, clientY: a2 } = t2, o2 = r3.closest(`table`), s2 = r3.closest(`caption`);
    if (n2 !== 0 || !o2 || s2) return;
    this.setSelectionTable(o2);
    let c2 = o2.dataset.tableId, l2 = { x: i2, y: a2 };
    this.recordScrollPosition(), this.setSelectedTds(this.computeSelectedTds(l2, l2)), this.show();
    let u2 = (e3) => {
      this.dragging = true;
      let { button: t3, target: n3, clientX: r4, clientY: i3 } = e3, a3 = n3.closest(`.ql-table`), o3 = n3.closest(`caption`);
      if (t3 !== 0 || o3 || !a3 || a3.dataset.tableId !== c2) return;
      let s3 = { x: r4, y: i3 };
      this.setSelectedTds(this.computeSelectedTds(l2, s3)), this.selectedTds.length > 1 && this.quill.blur(), this.update(), this.autoScroller.updateMousePosition(r4, i3);
    }, d2 = () => {
      document.body.removeEventListener(`mousemove`, u2, false), document.body.removeEventListener(`mouseup`, d2, false), this.autoScroller.stop(), this.dragging = false, this.clearRecordScrollPosition();
    };
    document.body.addEventListener(`mousemove`, u2, false), document.body.addEventListener(`mouseup`, d2, false);
    let f2 = quill_default.find(o2);
    if (!f2) return;
    let p2 = f2.parent.domNode;
    this.autoScroller.updateMousePosition(i2, a2), this.autoScroller.start(p2);
  }
  updateWithSelectedTds() {
    if (this.selectedTds.length <= 0) {
      this.hide();
      return;
    }
    let e3 = { x: 1 / 0, y: 1 / 0 }, t2 = { x: -1 / 0, y: -1 / 0 };
    for (let n2 of this.selectedTds) {
      let r3 = n2.domNode.getBoundingClientRect();
      e3.x = Math.min(e3.x, r3.left), e3.y = Math.min(e3.y, r3.top), t2.x = Math.max(t2.x, r3.right), t2.y = Math.max(t2.y, r3.bottom);
    }
    this.setSelectedTds(this.computeSelectedTds(e3, t2)), this.selectedTds.length > 0 ? this.update() : this.hide();
  }
  update() {
    if (!this.table) {
      this.hide();
      return;
    }
    if (this.selectedTds.length === 0 || !this.boundary) return;
    let { x: e3, y: t2 } = on(this.quill.root), { x: n2, y: i2 } = this.getTableViewScroll(), a2 = this.table.parentElement.getBoundingClientRect(), o2 = this.quill.root.getBoundingClientRect(), s2 = a2.x - o2.x, c2 = a2.y - o2.y;
    Object.assign(this.cellSelect.style, { left: `${this.selectedEditorScrollX * 2 - e3 + this.boundary.x + this.selectedTableScrollX - n2 - s2}px`, top: `${this.selectedEditorScrollY * 2 - t2 + this.boundary.y + this.selectedTableScrollY - i2 - c2}px`, width: `${this.boundary.width}px`, height: `${this.boundary.height}px` }), Object.assign(this.cellSelectWrap.style, { left: `${s2}px`, top: `${c2}px`, width: `${a2.width}px`, height: `${a2.height}px` }), this.quill.emitter.emit(r.TABLE_SELECTION_DISPLAY_CHANGE, this);
  }
  getTableViewScroll() {
    return this.table ? on(this.table.parentElement) : { x: 0, y: 0 };
  }
  setSelectionTable(e3) {
    this.table !== e3 && (this.table = e3, this.table ? this.scrollRecordEls.push(this.table.parentElement) : this.scrollRecordEls.pop());
  }
  showDisplay() {
    Object.assign(this.cellSelectWrap.style, { display: `block` }), this.isDisplaySelection = true, this.table && this.resizeObserver.observe(this.table);
  }
  show() {
    this.table && (L.call(this), this.showDisplay(), this.update(), this.quill.root.addEventListener(`keydown`, this.keyboardHandler), I.call(this, this.quill.root, () => {
      this.update();
    }), I.call(this, this.table.parentElement, () => {
      this.update();
    }));
  }
  hideDisplay() {
    Object.assign(this.cellSelectWrap.style, { display: `none` }), this.isDisplaySelection = false, this.table && this.resizeObserver.unobserve(this.table);
  }
  hide() {
    L.call(this), this.quill.root.removeEventListener(`keydown`, this.keyboardHandler), this.hideDisplay(), this.boundary = null, this.setSelectedTds([]), this.setSelectionTable(void 0);
  }
  destroy() {
    this.resizeObserver.disconnect(), this.hide(), this.cellSelectWrap.remove(), L.call(this), document.removeEventListener(`paste`, this.handlePaste), this.quill.off(r.AFTER_TABLE_RESIZE, this.updateAfterEvent), this.quill.off(quill_default.events.EDITOR_CHANGE, this.updateWhenTextChange), this.quill.off(quill_default.events.SELECTION_CHANGE, this.quillSelectionChangeHandler);
  }
};
var Wr = quill_default.import(`parchment`);
var $ = quill_default.import(`delta`);
var Gr = quill_default.import(`ui/icons`);
var Kr = quill_default.import(`blots/break`);
var qr = quill_default.import(`blots/block`);
var Jr = quill_default.import(`blots/block/embed`);
function Yr(e3, { tableId: n2, rowId: r3, colId: i2 }) {
  let a2 = { tableId: n2, rowId: r3, colId: i2, colspan: 1, rowspan: 1 }, o2 = e3.create(t.tableCell, a2), s2 = e3.create(t.tableCellInner, a2), c2 = e3.create(`block`);
  return c2.appendChild(e3.create(`break`)), s2.appendChild(c2), o2.appendChild(s2), o2;
}
function Xr(e3) {
  o.delete(t.tableCellInner), Object.assign(t, e3.blotName || {}), Object.assign(n, e3.tableUpSize || {}), Object.assign(r, e3.tableUpEvent || {}), Object.assign(i, e3.tableUpInternal || {}), $r.moduleName = i.moduleName, $r.toolName = t.tableWrapper, z.blotName = t.container, Ln.blotName = t.tableCaption, J.blotName = t.tableWrapper, K.blotName = t.tableMain, q.blotName = t.tableColgroup, G.blotName = t.tableCol, Bn.blotName = t.tableHead, V.blotName = t.tableBody, zn.blotName = t.tableFoot, U.blotName = t.tableRow, W.blotName = t.tableCell, H.blotName = t.tableCellInner, o.add(t.tableCellInner);
}
function Zr(t2, n2) {
  return T({ onSelect: (r3, i2) => {
    t2.insertTable(r3, i2, quill_default.sources.USER), n2 && n2.close();
  }, customBtn: t2.options.customBtn, texts: t2.options.texts });
}
function Qr(n2) {
  return { bindInHead: false, key: n2 ? `ArrowUp` : `ArrowDown`, collapsed: true, format: [t.tableCellInner], handler(r3, i2) {
    let a2 = n2 ? `prev` : `next`, o2 = n2 ? `tail` : `head`;
    if (i2.line[a2]) return true;
    let s2 = this.quill.selection.getBounds(r3.index), c2 = i2.line.domNode.getBoundingClientRect();
    if (!s2 || !c2) return true;
    if (n2) {
      if (s2.top - c2.top > 3) return true;
    } else if (c2.bottom - s2.bottom > 3) return true;
    let l2, u2, f2, p2;
    try {
      [l2, u2, f2, p2] = d(i2.line, [t.tableWrapper, t.tableMain, t.tableRow, t.tableCell]);
    } catch {
      return true;
    }
    let m2 = u2.getColIds(), h2 = l2.descendants(Ln, 0)[0], g2;
    if (h2) {
      let e3 = window.getComputedStyle(h2.domNode);
      g2 = a2 === `next` && e3.captionSide === `bottom` ? h2 : a2 === `next` ? l2.next : h2;
    } else g2 = l2[a2];
    if (i2.line[a2] || !g2) return true;
    let _2 = f2[a2];
    if (_2) {
      let t2 = m2.indexOf(p2.colId), n3 = _2.getCellByColId(m2[t2], a2);
      if (!n3) return true;
      let r4 = n3.children[o2];
      r4.children && (r4 = r4.children[o2]);
      let s3 = r4.offset(this.quill.scroll) + Math.min(i2.offset, r4.length() - 1);
      this.quill.setSelection(s3, 0, quill_default.sources.USER);
    } else {
      let t2 = g2.offset(this.quill.scroll) + (n2 ? g2.length() - 1 : 0);
      this.quill.setSelection(t2, 0, quill_default.sources.USER);
    }
    return false;
  } };
}
var $r = class r2 {
  static moduleName = i.moduleName;
  static toolName = t.tableWrapper;
  static keyboradHandler = { "forbid remove table by backspace": { bindInHead: true, key: `Backspace`, collapsed: true, offset: 0, handler(e3, n2) {
    let r3 = this.quill.getLine(e3.index)[0];
    return r3.prev instanceof J ? (r3.prev.remove(), false) : !(n2.format[t.tableCellInner] && r3.offset(u(r3, t.tableCellInner)) === 0);
  } }, "forbid remove table by delete": { bindInHead: true, key: `Delete`, collapsed: true, handler(e3, n2) {
    let r3 = this.quill.getLine(e3.index), i2 = r3[0], a2 = r3[1];
    return !((i2.next instanceof J || i2.next instanceof G) && a2 === i2.length() - 1 || n2.format[t.tableCellInner] && i2 === u(i2, t.tableCellInner).children.tail && a2 === i2.length() - 1);
  } }, "table up": Qr(true), "table down": Qr(false), "table caption break": { bindInHead: true, key: `Enter`, shiftKey: null, format: [t.tableCaption], handler(e3, t2) {
    return false;
  } } };
  static register() {
    J.allowedChildren = [K], K.allowedChildren = [q, Ln, Bn, V, zn], K.requiredContainer = J, Ln.requiredContainer = K, q.allowedChildren = [G], q.requiredContainer = K, Bn.allowedChildren = [U], Bn.requiredContainer = K, V.allowedChildren = [U], V.requiredContainer = K, zn.allowedChildren = [U], zn.requiredContainer = K, U.allowedChildren = [W], W.allowedChildren = [H, Kr], W.requiredContainer = U, H.requiredContainer = W;
    let n2 = /* @__PURE__ */ new Set([`table`]), r3 = Object.entries(quill_default.imports).filter(([e3, t2]) => {
      let r4 = e3.split(`formats/`)[1];
      return e3.startsWith(`formats/`) && !n2.has(r4) && (g(t2, qr) || g(t2, Jr));
    }).reduce((e3, [t2, n3]) => {
      let r4 = g(n3, Jr) ? En : wn;
      return e3[t2] = class extends h(n3, [r4]) {
        static register() {
        }
      }, e3;
    }, {});
    quill_default.register(__spreadProps(__spreadValues({ "blots/scroll": Mn, "blots/block": wn, "blots/block/embed": En }, r3), { [`blots/${t.container}`]: z, [`formats/${t.tableCell}`]: W, [`formats/${t.tableCellInner}`]: H, [`formats/${t.tableRow}`]: U, [`formats/${t.tableHead}`]: Bn, [`formats/${t.tableBody}`]: V, [`formats/${t.tableFoot}`]: zn, [`formats/${t.tableCol}`]: G, [`formats/${t.tableColgroup}`]: q, [`formats/${t.tableCaption}`]: Ln, [`formats/${t.tableMain}`]: K, [`formats/${t.tableWrapper}`]: J, "modules/clipboard": or }), true);
  }
  quill;
  options;
  toolBox;
  fixTableByLisenter = mn(this.balanceTables, 100);
  selector;
  resizeOb;
  modules = {};
  get statics() {
    return this.constructor;
  }
  constructor(e3, t2) {
    this.quill = e3, this.options = this.resolveOptions(t2 || {}), this.toolBox = this.initialContainer();
    let n2 = this.quill.getModule(`toolbar`);
    if (n2 && this.quill.theme.pickers) {
      let [, e4] = (n2.controls || []).find(([e5]) => e5 === this.statics.toolName) || [];
      if (e4 && e4.tagName.toLocaleLowerCase() === `select`) {
        let t3 = this.quill.theme.pickers.find((t4) => t4.select === e4);
        t3 && (t3.label.innerHTML = this.options.icon, this.buildCustomSelect(this.options.customSelect, t3), t3.label.addEventListener(`mousedown`, () => {
          if (!this.selector || !t3) return;
          let { leftLimited: e5 } = nn(this.selector.getBoundingClientRect());
          if (e5) {
            let e6 = t3.label.getBoundingClientRect();
            Object.assign(t3.options.style, { transform: `translateX(calc(-100% + ${e6.width}px))` });
          } else Object.assign(t3.options.style, { transform: void 0 });
        }));
      }
    }
    let i2 = this.quill.getModule(`keyboard`);
    for (let e4 of Object.values(r2.keyboradHandler)) e4.bindInHead ? i2.bindings[e4.key].unshift(e4) : i2.addBinding(e4.key, e4);
    this.initModules(), this.quillHack(), this.listenBalanceCells();
  }
  initialContainer() {
    let e3 = l(`toolbox`), t2 = this.quill.addContainer(e3.b());
    return this.resizeOb = new ResizeObserver(() => {
      let e4 = this.quill.root.getBoundingClientRect(), { offsetLeft: n2, offsetTop: r3 } = this.quill.root;
      Object.assign(t2.style, { top: `${r3}px`, left: `${n2}px`, width: `${e4.width}px`, height: `${e4.height}px` });
    }), this.resizeOb.observe(this.quill.root), t2;
  }
  addContainer(e3) {
    if (w(e3)) {
      let t2 = document.createElement(`div`);
      for (let n2 of e3.split(` `)) t2.classList.add(n2);
      return this.toolBox.appendChild(t2), t2;
    } else return this.toolBox.appendChild(e3), e3;
  }
  resolveOptions(e3) {
    return Object.assign({ customBtn: false, texts: this.resolveTexts(e3.texts || {}), full: false, fullSwitch: true, icon: Gr.table, autoMergeCell: true, modules: [] }, e3);
  }
  resolveTexts(e3) {
    return Object.assign({ fullCheckboxText: `Insert full width table`, customBtnText: `Custom`, confirmText: `Confirm`, cancelText: `Cancel`, rowText: `Row`, colText: `Column`, notPositiveNumberError: `Please enter a positive integer`, custom: `Custom`, clear: `Clear`, transparent: `Transparent`, perWidthInsufficient: `The percentage width is insufficient. To complete the operation, the table needs to be converted to a fixed width. Do you want to continue?`, CopyCell: `Copy cell`, CutCell: `Cut cell`, InsertTop: `Insert row above`, InsertRight: `Insert column right`, InsertBottom: `Insert row below`, InsertLeft: `Insert column Left`, MergeCell: `Merge Cell`, SplitCell: `Split Cell`, DeleteRow: `Delete Row`, DeleteColumn: `Delete Column`, DeleteTable: `Delete table`, BackgroundColor: `Set background color`, BorderColor: `Set border color` }, e3);
  }
  initModules() {
    for (let e3 of this.options.modules) this.modules[e3.module.moduleName] = new e3.module(this, this.quill, e3.options);
  }
  getModule(e3) {
    return this.modules[e3];
  }
  quillHack() {
    let n2 = this.quill.getSemanticHTML;
    this.quill.getSemanticHTML = (r4 = 0, i2) => {
      let a3 = n2.call(this.quill, r4, i2), o2 = quill_default.import(`formats/${t.tableWrapper}`), s2 = new DOMParser().parseFromString(a3, `text/html`);
      for (let e3 of Array.from(s2.querySelectorAll(`.${o2.className} caption[contenteditable], .${o2.className} .${W.className} > [contenteditable]`))) e3.removeAttribute(`contenteditable`);
      return s2.body.innerHTML;
    };
    let r3 = this.quill.format;
    this.quill.format = function(n3, a3, o2 = quill_default.sources.API) {
      if (!(this.scroll.query(n3).prototype instanceof Wr.EmbedBlot)) {
        let e3 = this.getModule(i.moduleName), s2 = this.getSelection(true), c2 = this.getFormat(s2), l2 = e3.getModule(i.tableSelectionName);
        if (!c2[t.tableCellInner] || s2.length > 0 || e3 && l2 && l2.selectedTds.length <= 1) return r3.call(this, n3, a3, o2);
        if (e3 && l2 && l2.selectedTds.length > 0) {
          let e4 = l2.selectedTds, t2 = false, r4 = [];
          for (let i3 of e4) {
            let e5 = i3.offset(this.scroll), o3 = i3.length();
            r4.push({ index: e5, length: o3 }), this.getFormat(e5, o3)[n3] !== a3 && (t2 = true);
          }
          let i2 = t2 ? a3 : false, s3 = new $();
          for (let [e5, { index: t3, length: a4 }] of r4.entries()) {
            let o3 = e5 === 0 ? 0 : r4[e5 - 1].index + r4[e5 - 1].length;
            s3.retain(t3 - o3).retain(a4, { [n3]: i2 });
          }
          let c3 = this.updateContents(s3, o2);
          return this.blur(), c3;
        }
      }
      return r3.call(this, n3, a3, o2);
    };
    let a2 = this.quill.theme.modules.toolbar;
    if (a2) {
      let n3 = a2.handlers?.clean;
      if (n3) {
        let r4 = (e3, n4, r5 = () => ``) => {
          let i2 = this.quill.getText(e3, n4), [a3, o2] = this.quill.getLine(e3 + n4), s2 = 0, c2 = new $();
          a3 != null && (s2 = a3.length() - o2, c2 = a3.delta().slice(o2, o2 + s2 - 1).insert(`
`));
          let l2 = this.quill.getContents(e3, n4 + s2), u2 = l2.diff(new $().insert(i2).concat(c2)), d2 = 0;
          return new $(u2.ops.map((e4) => {
            var _b;
            let _a = e4, { attributes: n5 } = _a, i3 = __objRest(_a, ["attributes"]);
            if (e4.insert ? d2 -= w(e4.insert) ? e4.insert.length : 1 : e4.retain ? d2 += ne(e4.retain) ? e4.retain : 1 : e4.delete && (d2 += e4.delete), n5) {
              let _c = n5, { [_b = t.tableCellInner]: e5 } = _c, a4 = __objRest(_c, [__restKey(_b)]);
              if (r5) {
                let e6 = l2.slice(d2 - 1, d2).ops[0];
                if (e6?.attributes?.[t.tableCellInner]) {
                  let _d = e6.attributes[t.tableCellInner], { style: n6 } = _d, o3 = __objRest(_d, ["style"]), s3 = r5(n6);
                  return s3 ? __spreadProps(__spreadValues({}, i3), { attributes: __spreadProps(__spreadValues({}, a4), { [t.tableCellInner]: __spreadValues({ style: s3 }, o3) }) }) : __spreadProps(__spreadValues({}, i3), { attributes: __spreadProps(__spreadValues({}, a4), { [t.tableCellInner]: o3 }) });
                }
              }
              return __spreadProps(__spreadValues({}, i3), { attributes: __spreadValues({}, a4) });
            }
            return e4;
          }));
        };
        a2.handlers.clean = function(a3) {
          let o2 = this.quill.getModule(i.moduleName), s2 = this.quill.getSelection();
          if (s2 && s2.length > 0 && this.quill.getFormat(s2)[t.tableCellInner]) {
            let t2 = r4(s2.index, s2.length, false), n4 = new $().retain(s2.index).concat(t2);
            this.quill.updateContents(n4, quill_default.sources.USER);
            return;
          }
          let c2 = o2.getModule(i.tableSelectionName);
          if (o2 && c2 && c2.selectedTds.length > 0 && c2.table) {
            let t2 = quill_default.find(c2.table);
            if (!t2) {
              console.warn(`TableMainFormat not found`);
              return;
            }
            let n4 = c2.selectedTds, i2 = /* @__PURE__ */ new Set(), a4 = [];
            for (let e3 of n4) if (e3.parent instanceof W) {
              for (let t3 of e3.parent.getNearByCell(`top`)) i2.has(t3) || (i2.add(t3), a4.push({ td: t3, cleanBorder: `bottom` }));
              for (let t3 of e3.parent.getNearByCell(`left`)) i2.has(t3) || (i2.add(t3), a4.push({ td: t3, cleanBorder: `right` }));
              i2.add(e3.parent), a4.push({ td: e3.parent, cleanBorder: true });
            }
            let o3 = t2.descendants(W), s3 = new Map(o3.map((e3, t3) => [e3, t3]));
            a4.sort((e3, t3) => s3.get(e3.td) - s3.get(t3.td));
            let l2 = new $(), u2 = 0;
            for (let { td: e3, cleanBorder: t3 } of a4) {
              let n5 = e3.getCellInner().offset(this.quill.scroll), i3 = e3.getCellInner().length(), a5 = r4(n5, i3 - 1, (e4) => {
                if (!e4 || t3 === true) return ``;
                let n6 = fn(e4);
                return pn(Object.keys(n6).filter((e5) => !e5.startsWith(un(`border-${t3}`))).reduce((e5, t4) => (e5[t4] = n6[t4], e5), {}));
              }), o4 = new $().retain(n5 - u2).concat(a5);
              l2 = l2.concat(o4), u2 = n5 + i3;
            }
            this.quill.updateContents(l2, quill_default.sources.USER), n4.length > 1 && this.quill.blur();
            return;
          }
          return n3.call(this, a3);
        };
      }
    }
  }
  buildCustomSelect(e3, t2) {
    return __async(this, null, function* () {
      if (!e3 || !S(e3)) return;
      let n2 = document.createElement(`div`);
      if (n2.classList.add(`ql-custom-select`), this.selector = yield e3(this, t2), n2.appendChild(this.selector), this.options.fullSwitch) {
        let e4 = l(`creator`), t3 = document.createElement(`label`);
        t3.classList.add(e4.be(`checkbox`));
        let r3 = document.createElement(`input`);
        r3.type = `checkbox`, r3.checked = this.options.full, r3.addEventListener(`change`, () => {
          this.options.full = r3.checked;
        });
        let i2 = document.createElement(`span`);
        i2.textContent = this.options.texts.fullCheckboxText, t3.appendChild(r3), t3.appendChild(i2), n2.appendChild(t3);
      }
      t2.options.innerHTML = ``, t2.options.appendChild(n2);
    });
  }
  setCellAttrs(e3, t2, n2, r3 = false) {
    if (e3.length !== 0) for (let i2 of e3) i2.setFormatValue(t2, n2, r3);
  }
  getTextByCell(e3) {
    let t2 = ``;
    for (let n2 of e3) {
      let e4 = n2.offset(this.quill.scroll), r3 = n2.length();
      for (let n3 of this.quill.getContents(e4, r3).ops) w(n3.insert) && (t2 += n3.insert);
    }
    return t2;
  }
  getHTMLByCell(e3, n2 = false) {
    if (e3.length === 0) return ``;
    let r3 = null;
    try {
      for (let n3 of e3) {
        let e4 = u(n3, t.tableMain);
        if (r3 ||= e4, e4 !== r3) return console.error(`tableMain is not same`), ``;
      }
    } catch {
      return console.error(`tds must be in same tableMain`), ``;
    }
    if (!r3) return ``;
    let i2 = this.quill.getIndex(r3), a2 = r3.length(), o2 = this.quill.getSemanticHTML(i2, a2), s2 = new DOMParser().parseFromString(o2, `text/html`), c2 = Array.from(s2.querySelectorAll(`col`)), l2 = c2.map((e4) => e4.dataset.colId), d2 = [], f2 = /* @__PURE__ */ new Set(), p2 = /* @__PURE__ */ new Set();
    for (let t2 of e3) {
      f2.add(t2.colId);
      let e4 = t2.colId, n3 = l2.indexOf(e4);
      for (let e5 = 0; e5 < t2.colspan; e5++) f2.add(l2[n3 + e5]);
      p2.add(`${t2.rowId}-${t2.colId}`);
    }
    for (let e4 = 0; e4 < c2.length; e4++) {
      let t2 = c2[e4];
      f2.has(t2.dataset.colId) ? d2.push(t2.getAttribute(`width`)) : (t2.remove(), c2.splice(e4--, 1));
    }
    let m2 = 0, h2 = null;
    for (let e4 of Array.from(s2.querySelectorAll(`td, th`))) if (p2.has(`${e4.dataset.rowId}-${e4.dataset.colId}`)) h2 !== e4.dataset.rowId && (m2 += 1, h2 = e4.dataset.rowId);
    else {
      let t2 = e4.parentElement;
      e4.remove(), t2 && t2.children.length <= 0 && t2.remove();
    }
    let g2 = c2.map((e4) => G.value(e4));
    if (r3.full) {
      let e4 = g2.reduce((e5, t2) => t2.width + e5, 0);
      for (let [t2, n3] of g2.entries()) n3.width = Math.round(n3.width / e4 * 100), c2[t2].setAttribute(`width`, `${n3.width}%`);
    } else {
      let e4 = 0;
      for (let t3 of g2) e4 += t3.width;
      let t2 = s2.querySelector(`table`);
      t2.style.width = `${e4}px`;
    }
    if (n2) {
      let t2 = r3.getRows();
      if (m2 === t2.length) this.removeCol(e3);
      else for (let t3 of e3) t3.domNode.innerHTML = `<p><br></p>`;
    }
    return s2.body.innerHTML;
  }
  insertTable(r3, i2, a2 = quill_default.sources.API) {
    if (r3 >= 30 || i2 >= 30) throw Error(`Both rows and columns must be less than 30.`);
    this.quill.focus();
    let o2 = this.quill.getSelection();
    if (o2 == null) return;
    let [s2] = this.quill.getLeaf(o2.index);
    if (!s2) return;
    if (c(s2)) throw Error(`Not supported ${s2.statics.blotName} insert into table.`);
    let l2 = R(), u2 = Array(i2).fill(0).map(() => R()), d2 = this.calculateTableCellBorderWidth(), f2 = getComputedStyle(this.quill.root), p2 = Number.parseInt(f2.paddingLeft), m2 = Number.parseInt(f2.paddingRight), h2 = this.quill.root.scrollHeight > this.quill.root.clientHeight ? sn({ target: this.quill.root }) : 0, g2 = Number.parseInt(f2.width) - p2 - m2 - d2 - h2, _2 = this.options.full ? `${Math.max(1 / i2 * 100, n.colMinWidthPre)}%` : `${Math.max(Math.floor(g2 / i2), n.colMinWidthPx)}px`, v2 = [{ retain: o2.index }], y2 = this.quill.getContents(o2.index, 1), [, b2] = this.quill.getLine(o2.index);
    y2.ops[0].insert !== `
` && b2 !== 0 && v2.push({ insert: `
` });
    for (let e3 = 0; e3 < i2; e3++) v2.push({ insert: { [t.tableCol]: { width: _2, tableId: l2, colId: u2[e3], full: this.options.full } } });
    for (let e3 = 0; e3 < r3; e3++) {
      let e4 = R();
      for (let n2 = 0; n2 < i2; n2++) v2.push({ insert: `
`, attributes: { [t.tableCellInner]: { tableId: l2, rowId: e4, colId: u2[n2], rowspan: 1, colspan: 1 } } });
    }
    this.quill.updateContents(new $(v2), a2), this.quill.setSelection(o2.index + i2, quill_default.sources.SILENT), this.quill.focus();
  }
  calculateTableCellBorderWidth() {
    let e3 = `
      <table class="${K.className}">
        <tbody>
          <tr>
            <td class="${W.className}"></td>
          </tr>
        </tbody>
      </table>
    `, t2 = document.createElement(`div`);
    t2.className = J.className, t2.innerHTML = e3, t2.style.position = `absolute`, t2.style.left = `-9999px`, t2.style.top = `-9999px`, t2.style.visibility = `hidden`, this.quill.root.appendChild(t2);
    let n2 = window.getComputedStyle(t2.querySelector(`td`)), r3 = Number.parseFloat(n2.borderWidth) || 0;
    return this.quill.root.removeChild(t2), r3;
  }
  fixUnusuaDeletelTable(e3) {
    let t2 = e3.getColIds();
    if (t2.length === 0) {
      e3.remove();
      return;
    }
    let n2 = e3.getBodys(), r3 = e3.tableId;
    for (let e4 of n2) {
      let n3 = e4.getRows();
      if (n3.length === 0) {
        e4.remove();
        continue;
      }
      let i2 = Array(n3.length).fill(0).map(() => Array(t2.length).fill(false));
      for (let [e5, a2] of n3.entries()) {
        let o2 = 0, s2 = 0, c2 = i2[e5], l2 = a2.descendants(W);
        for (; s2 < t2.length; ) {
          if (c2[s2]) {
            s2 += 1;
            continue;
          }
          let u2 = l2[o2];
          if (!u2 || u2.colId !== t2[s2]) a2.insertBefore(Yr(this.quill.scroll, { tableId: r3, colId: t2[s2], rowId: a2.rowId }), u2);
          else {
            e5 + u2.rowspan - 1 >= n3.length && (u2.getCellInner().rowspan = n3.length - e5);
            let { colspan: t3, rowspan: r4 } = u2;
            if (t3 > 1) for (let e6 = 1; e6 < t3; e6++) c2[s2 + e6] = true;
            if (r4 > 1) for (let n4 = e5 + 1; n4 < e5 + r4; n4++) for (let e6 = 0; e6 < t3; e6++) i2[n4][s2 + e6] = true;
            o2 += 1;
          }
          s2 += 1;
        }
        if (o2 < l2.length) for (let e6 = o2; e6 < l2.length; e6++) l2[e6].remove();
      }
    }
  }
  balanceTables() {
    for (let e3 of this.quill.scroll.descendants(K)) e3.checkEmptyCol(this.options.autoMergeCell), e3.checkEmptyRow(this.options.autoMergeCell), this.fixUnusuaDeletelTable(e3);
  }
  listenBalanceCells() {
    this.quill.on(quill_default.events.SCROLL_OPTIMIZE, (t2) => {
      t2.some((e3) => [`TD`, `TR`, `TBODY`, `TABLE`].includes(e3.target.tagName) ? (this.fixTableByLisenter(), true) : false);
      for (let n2 of t2) {
        let t3 = n2.target;
        if (t3.tagName === `TABLE`) {
          let n3 = quill_default.find(t3);
          if (n3) {
            n3.sortMergeChildren();
            break;
          }
        }
      }
    });
  }
  deleteTable(e3) {
    e3.length !== 0 && u(e3[0], t.tableMain)?.remove();
  }
  appendRow(e3, n2) {
    if (e3.length <= 0) return;
    let r3 = e3[n2 ? e3.length - 1 : 0], [i2, a2] = d(r3, [t.tableMain, t.tableRow]), o2 = i2.getRows().indexOf(a2) + (n2 ? r3.rowspan : 0);
    i2.insertRow(o2);
  }
  appendCol(e3, n2) {
    if (e3.length <= 0) return;
    let [r3] = e3.reduce((e4, t2) => {
      let r4 = t2.getColumnIndex();
      return (!n2 && r4 <= e4[1] || n2 && r4 >= e4[1]) && (e4 = [t2, r4]), e4;
    }, [e3[0], e3[0].getColumnIndex()]), i2 = r3.getColumnIndex() + (n2 ? r3.colspan : 0), a2 = u(r3, t.tableMain), o2 = a2.tableId, s2 = R(), [c2] = a2.descendants(q);
    c2 && c2.insertColByIndex(i2, { tableId: o2, colId: s2, width: a2.full ? 6 : 160, full: a2.full });
    let l2 = a2.getRows(), d2 = [], f2 = 0;
    for (let e4 of Object.values(l2)) {
      let t2 = d2.shift() || 0;
      if (f2 > 0) {
        --f2;
        continue;
      }
      let n3 = e4.insertCell(i2 - t2, { tableId: o2, rowId: e4.rowId, colId: s2, rowspan: 1, colspan: 1 });
      n3.skipRowNum && (f2 += n3.skipRowNum);
      for (let [e5, t3] of n3.entries()) d2[e5] = (d2[e5] || 0) + t3;
    }
  }
  fixTableByRemove(e3) {
    if (!this.options.autoMergeCell) return;
    let t2 = e3.getRows(), n2 = e3.getCols(), r3 = n2.reduce((e4, t3) => (e4[t3.colId] = 0, e4), {}), i2 = t2.toReversed(), a2 = [];
    for (let [e4, n3] of i2.entries()) {
      let i3 = t2.length - e4 - 1;
      n3.children.length <= 0 ? a2.push(i3) : n3.foreachCellInner((e5) => {
        let t3 = a2.reduce((t4, n4) => e5.rowspan + i3 > n4 ? t4 + 1 : t4, 0);
        e5.rowspan -= t3, r3[e5.colId] += 1;
      });
    }
    let o2 = 0;
    for (let e4 of Object.values(r3)) if (e4 === 0) {
      let e5 = [], n3 = 0;
      for (let r4 of Object.values(t2)) {
        let t3 = e5.shift() || 0, i3 = [];
        n3 > 0 ? (i3 = r4.getCellByColumIndex(o2 - t3)[2], --n3) : (i3 = r4.removeCell(o2 - t3), i3.skipRowNum && (n3 += i3.skipRowNum));
        for (let [t4, n4] of i3.entries()) e5[t4] = (e5[t4] || 0) + n4;
      }
    } else o2 += 1;
    for (let e4 of n2) r3[e4.colId] === 0 && (e4.prev ? e4.prev.width += e4.width : e4.next && (e4.next.width += e4.width), e4.remove());
  }
  removeRow(e3) {
    if (e3.length <= 0) return;
    let n2 = e3[0], r3 = u(n2, t.tableMain), i2 = r3.getRows(), a2 = i2.length, o2 = -1;
    for (let n3 of e3) {
      let e4 = u(n3, t.tableRow), r4 = i2.indexOf(e4);
      r4 < a2 && (a2 = r4), r4 + n3.rowspan > o2 && (o2 = r4 + n3.rowspan);
    }
    let s2 = {};
    for (let e4 = a2; e4 < Math.min(i2.length, o2); e4++) {
      let t2 = i2[e4];
      t2.foreachCellInner((t3) => {
        t3.rowspan + e4 > o2 && (s2[t3.colId] = { rowspan: t3.rowspan + e4 - o2, colspan: t3.colspan, colIndex: t3.getColumnIndex() }), t3.parent.remove();
      }), t2.length() === 0 && t2.remove();
    }
    if (i2[o2]) {
      let e4 = i2[o2], t2 = r3.tableId;
      for (let [n3, { colIndex: r4, colspan: i3, rowspan: a3 }] of Object.entries(s2)) e4.insertCell(r4, { tableId: t2, rowId: e4.rowId, colId: n3, colspan: i3, rowspan: a3 });
    }
    this.fixTableByRemove(r3);
  }
  removeCol(e3) {
    if (e3.length <= 0) return;
    let n2 = e3[0], r3 = u(n2, t.tableMain), i2 = {};
    for (let t2 of e3) i2[t2.rowId] || (i2[t2.rowId] = 0), i2[t2.rowId] += t2.colspan;
    let a2 = Math.max(...Object.values(i2)), o2 = n2.getColumnIndex(), s2 = r3.descendants(U);
    for (let e4 = 0; e4 < a2; e4++) {
      let e5 = [], t2 = 0;
      for (let n3 of Object.values(s2)) {
        let r4 = e5.shift() || 0;
        if (t2 > 0) {
          --t2;
          continue;
        }
        let i3 = n3.removeCell(o2 - r4);
        i3.skipRowNum && (t2 += i3.skipRowNum);
        for (let [t3, n4] of i3.entries()) e5[t3] = (e5[t3] || 0) + n4;
      }
    }
    let [c2] = r3.descendants(q);
    if (c2) for (let e4 = 0; e4 < a2; e4++) c2.removeColByIndex(o2);
    this.fixTableByRemove(r3);
  }
  mergeCells(n2) {
    if (n2.length <= 1) return;
    let r3 = n2[0], i2 = r3.getTableBody(), a2 = r3.getTableRow();
    if (!i2 || !a2) return;
    for (let e3 = 1; e3 < n2.length; e3++) {
      let t2 = n2[e3], r4 = t2.getTableBody();
      if (r4 && r4 !== i2) {
        let e4 = t2.getTableRow();
        e4 && (a2.parent.insertBefore(e4, a2.next), a2 = e4);
      }
    }
    i2.convertBody(r3.wrapTag);
    let o2 = n2.reduce((e3, t2, n3) => {
      let r4 = t2.colId;
      e3[0][r4] || (e3[0][r4] = 0), e3[0][r4] += t2.rowspan;
      let i3 = t2.rowId;
      return e3[1][i3] || (e3[1][i3] = 0), e3[1][i3] += t2.colspan, n3 !== 0 && (t2.length() > 1 && t2.moveChildren(e3[2]), t2.parent.remove()), e3;
    }, [{}, {}, r3]), s2 = Math.max(...Object.values(o2[0])), c2 = Math.max(...Object.values(o2[1])), l2 = o2[2];
    l2.colspan = c2, l2.rowspan = s2;
    let d2 = this.quill.getIndex(l2);
    this.quill.setSelection({ index: d2, length: 0 }, quill_default.sources.SILENT);
    let f2 = u(l2, t.tableMain);
    this.fixTableByRemove(f2);
  }
  splitCell(e3) {
    if (e3.length !== 1) return;
    let n2 = e3[0];
    if (n2.colspan === 1 && n2.rowspan === 1) return;
    let [r3, i2] = d(n2, [t.tableMain, t.tableRow]), a2 = r3.getRows(), o2 = r3.tableId, s2 = n2.getColumnIndex(), c2 = r3.getColIds().slice(s2, s2 + n2.colspan).toReversed(), _a = n2.formats()[t.tableCellInner], { emptyRow: l2 } = _a, u2 = __objRest(_a, ["emptyRow"]), f2 = a2.indexOf(i2);
    if (f2 === -1) return;
    let p2 = a2[f2], m2 = n2.rowspan;
    for (n2.colspan = 1, n2.rowspan = 1; p2 && m2 > 0; ) {
      for (let e4 of c2) p2 === i2 && e4 === n2.colId || p2.insertCell(s2 + (p2 === i2 ? 1 : 0), __spreadProps(__spreadValues({}, u2), { tableId: o2, rowId: p2.rowId, colId: e4, rowspan: 1, colspan: 1 }));
      --m2, f2 += 1, p2 = a2[f2];
    }
  }
  convertTableBodyByCells(e3, t2, n2) {
    let r3, i2, a2 = e3.getRows();
    for (let e4 of t2) {
      let t3 = e4.getTableRow();
      if (!t3) continue;
      let n3 = a2.indexOf(t3);
      ie(r3) && (r3 = n3), ie(i2) && (i2 = n3), n3 < r3 ? (i2 = r3, r3 = n3) : n3 > i2 && (i2 = n3);
    }
    if (ie(r3) || ie(i2)) {
      console.warn(`TableRow not found`);
      return;
    }
    let o2 = a2[r3], s2 = a2[i2];
    e3.split(s2.offset(e3) + s2.length());
    let c2 = e3.split(o2.offset(e3)), l2 = c2.getRows(), [u2] = c2.getBodys(), d2 = u2.clone();
    c2.appendChild(d2);
    for (let e4 of l2) e4.length() > 0 && d2.appendChild(e4);
    d2.convertBody(n2), u2.remove();
  }
};
var ei = $r;
export {
  En as BlockEmbedOverride,
  wn as BlockOverride,
  z as ContainerFormat,
  Mn as ScrollOverride,
  Vr as Scrollbar,
  Un as TableAlign,
  V as TableBodyFormat,
  Ln as TableCaptionFormat,
  W as TableCellFormat,
  H as TableCellInnerFormat,
  or as TableClipboard,
  G as TableColFormat,
  q as TableColgroupFormat,
  Hn as TableDomSelector,
  zn as TableFootFormat,
  Bn as TableHeadFormat,
  K as TableMainFormat,
  Er as TableMenuCommon,
  Dr as TableMenuContextmenu,
  Or as TableMenuSelect,
  Ir as TableResizeBox,
  Nr as TableResizeCommon,
  Mr as TableResizeCommonHelper,
  Lr as TableResizeLine,
  Rr as TableResizeScale,
  U as TableRowFormat,
  Ur as TableSelection,
  $r as TableUp,
  Hr as TableVirtualScrollbar,
  J as TableWrapperFormat,
  er as applyCellUpdates,
  t as blotName,
  ce as createColorPicker,
  T as createSelectBox,
  Qt as createTooltip,
  ei as default,
  Zr as defaultCustomSelect,
  u as findParentBlot,
  d as findParentBlots,
  Xn as getCellPositions,
  Ar as getColRect,
  Jn as getCountByPosition,
  Kn as getTableCellStructure,
  Y as getTableMainRect,
  Zn as groupCellByRow,
  jr as isCellsSpan,
  kr as isTableAlignRight,
  qn as parsePasteDelta,
  Gn as pasteCells,
  Qn as pasteWithLoop,
  Yn as pasteWithStructure,
  $n as prepareCellUpdate,
  R as randomId,
  tr as removeOverlappingCells,
  X as tableMenuTools,
  r as tableUpEvent,
  i as tableUpInternal,
  n as tableUpSize,
  Xr as updateTableConstants
};
//# sourceMappingURL=quill-table-up.js.map
