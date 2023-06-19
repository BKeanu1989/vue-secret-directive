import type { App, Plugin } from 'vue';
import secretDirective from './SecretDirective.vue';
import customSecretDirective from './custom-secret-directive';

const secretDirectivePlugin: Plugin = {
    install(app: App, options: any) {

        app.provide('test-secret', 'secrt');
        app.directive('c-secret', customSecretDirective)
        app.component('SecretDirective', secretDirective)
    }
}

export default secretDirectivePlugin