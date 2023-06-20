const customSecretDirective = {
    mounted(_: any, __: any, vnode: any) {
        vnode.el.dataset.vSecret = true;
        vnode.el.style.display = 'none';
    },

}

export default customSecretDirective