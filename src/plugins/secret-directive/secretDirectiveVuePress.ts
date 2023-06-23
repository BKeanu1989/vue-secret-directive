import type { App } from 'vue';
import secretDirective from './SecretDirective.vue';
import customSecretDirective from './custom-secret-directive';
import { PluginOptions } from '../../types';

const vuePressPlugin = (options: PluginOptions) => {
    // return (app: App) => {
    return (_: any) => {
        return {
            name: 'vue3-secret-directive',
            onInitialized: (app: App) => {
                app.provide('custom-secret-quote', options.secret ?? 'secret');
                app.directive('c-secret', customSecretDirective)
                app.component('SecretDirective', secretDirective)

            }
        }
    }
}

// export default {
//     onInitialized: (app: App) => {
//         app.provide('custom-secret-quote', options.secret || 'secret');
//         app.directive('c-secret', customSecretDirective)
//         app.component('SecretDirective', secretDirective)

//     };
// }

export default vuePressPlugin;