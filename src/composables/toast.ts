// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'vue3-toastify'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'vue3-toastify/dist/index.css'

export default function useToast() {

    const success = (msg: string) => {
        toast.success(msg, {
            autoClose: 1000,
        }); // ToastOptions
    }
    const error = (msg: string) => {
        toast.error(msg, {
            autoClose: 1000,
        }); // ToastOptions
    }
    return { success, error };
}

