import type { App, Plugin } from 'vue';
import secretDirective from './SecretDirective.vue';
import customSecretDirective from './custom-secret-directive';
import { PluginOptions } from '../../types';


const secretDirectivePlugin: Plugin = {
    install(app: App, options: PluginOptions) {

        app.provide('custom-secret-quote', options.secret || 'secret');
        app.directive('c-secret', customSecretDirective)
        app.component('SecretDirective', secretDirective)
    }
}

export default secretDirectivePlugin