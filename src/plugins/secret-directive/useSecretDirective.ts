import { ref, watch } from "vue"

const secretEntered = ref(false)
const secretQuote = 'secret'; // just hardocde it for now
const keysEntered = ref<string[]>([]);
export const useSecretDirective = () => {

    const addKeysEntered = (payload: string) => {
        keysEntered.value.push(payload)
    }
    const setSecretEntered = (payload: boolean) => {
        secretEntered.value = payload
    }

    const unwatch = watch(keysEntered, (val, _) => {
        if (val.join('') === secretQuote) {
            setSecretEntered(true)
            return;
        }
        if (val.length > 6) {
            keysEntered.value.shift()
        }
    }, {
        deep: true
    })

    watch(secretEntered, (val, _) => {
        if (val) {
            console.log("we are done")
            const allNodes = Array.from(document.querySelectorAll('[data-v-secret]'))

            // @ts-expect-error
            allNodes.forEach((x: HTMLElement) => {
                x.style.display = 'block';
            })
            unwatch()
        }
    })

    return {
        secretEntered,
        setSecretEntered,
        addKeysEntered
    }

}
