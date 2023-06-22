import { ref as u, inject as a, watch as i, defineComponent as _, onMounted as m } from "vue";
const s = u(!1), n = u([]), f = () => {
  const c = a("custom-secret-quote", "secret"), r = (t) => {
    n.value.push(t);
  }, e = (t) => {
    s.value = t;
  }, o = i(n, (t, d) => {
    if (t.join("") === c) {
      e(!0);
      return;
    }
    t.length > 6 && n.value.shift();
  }, {
    deep: !0
  });
  return i(s, (t, d) => {
    t && (console.log("we are done"), Array.from(document.querySelectorAll("[data-v-secret]")).forEach((l) => {
      l.style.display = "block";
    }), o());
  }), {
    secretEntered: s,
    setSecretEntered: e,
    addKeysEntered: r
  };
}, v = /* @__PURE__ */ _({
  __name: "SecretDirective",
  setup(c) {
    const r = f();
    return m(() => {
      document.addEventListener("keyup", (e) => {
        r.addKeysEntered(e.key);
      });
    }), (e, o) => null;
  }
}), y = {
  mounted(c, r, e) {
    e.el.dataset.vSecret = !0, e.el.style.display = "none";
  }
}, E = {
  install(c, r) {
    c.provide("custom-secret-quote", r.secret || "secret"), c.directive("c-secret", y), c.component("SecretDirective", v);
  }
};
export {
  E as default
};
