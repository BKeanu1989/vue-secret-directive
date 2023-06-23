import { ref as i, inject as a, watch as u, defineComponent as _, onMounted as m } from "vue";
const n = i(!1), s = i([]), v = () => {
  const r = a("custom-secret-quote", "secret"), c = (t) => {
    s.value.push(t);
  }, e = (t) => {
    n.value = t;
  }, o = u(s, (t, d) => {
    if (t.join("") === r) {
      e(!0);
      return;
    }
    t.length > 6 && s.value.shift();
  }, {
    deep: !0
  });
  return u(n, (t, d) => {
    t && (console.log("we are done"), Array.from(document.querySelectorAll("[data-v-secret]")).forEach((l) => {
      l.style.display = "block";
    }), o());
  }), {
    secretEntered: n,
    setSecretEntered: e,
    addKeysEntered: c
  };
}, f = /* @__PURE__ */ _({
  __name: "SecretDirective",
  setup(r) {
    const c = v();
    return m(() => {
      document.addEventListener("keyup", (e) => {
        c.addKeysEntered(e.key);
      });
    }), (e, o) => null;
  }
}), y = {
  mounted(r, c, e) {
    e.el.dataset.vSecret = !0, e.el.style.display = "none";
  }
}, E = (r) => (c) => ({
  name: "vue3-secret-directive",
  onInitialized: (e) => {
    e.provide("custom-secret-quote", r.secret || "secret"), e.directive("c-secret", y), e.component("SecretDirective", f);
  }
});
export {
  E as default
};
