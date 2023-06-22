import { ref as u, inject as a, watch as i, defineComponent as m, onMounted as _ } from "vue";
const s = u(!1), n = u([]), v = () => {
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
}, f = /* @__PURE__ */ m({
  __name: "SecretDirective",
  setup(c) {
    const r = v();
    return _(() => {
      document.addEventListener("keyup", (e) => {
        r.addKeysEntered(e.key);
      });
    }), (e, o) => null;
  }
}), y = {
  mounted(c, r, e) {
    e.el.dataset.vSecret = !0, e.el.style.display = "none";
  }
}, h = {
  install(c, r) {
    c.provide("custom-secret-quote", r.secret || "secret"), c.directive("c-secret", y), c.component("SecretDirective", f);
  }
};
export {
  f as SecretDirectiveComponent,
  h as default
};
