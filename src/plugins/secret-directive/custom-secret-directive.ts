const customSecretDirective = {
    mounted(el: any, _: any, vnode: any) {
        vnode.el.dataset.vSecret = true;
        vnode.el.style.display = 'none';
    },

}

export default customSecretDirective