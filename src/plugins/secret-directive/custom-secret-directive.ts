const customSecretDirective = {
    mounted(el: any, binding: any, vnode: any, prevVnode: any) {
        vnode.el.dataset.vSecret = true;
        vnode.el.style.display = 'none';
    },

}

export default customSecretDirective