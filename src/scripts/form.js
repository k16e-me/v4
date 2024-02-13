import { _q, _ql, _encode } from './snips'
import _runToast from './toast'
import _gsap from './gsap'

const
    _toast = _runToast(),
    g = _gsap()

export default function _submit() {
    if (!_q('[data-form-submit]')) return

    const
        button = _q('[data-form-submit]'),
        endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT,
        form = button.parentNode,
        successMsg = _q('[data-form-success-message]').textContent

    form.addEventListener('submit', submit)

    async function submit(e) {
        e.preventDefault()

        const
            form = e.target,
            data = new FormData(form),
            select = _q('#affiliate', form)

        button.classList.add('disabled')

        await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: _encode(Object.fromEntries(data))
        }).then(res => {
            if (res.status === 200) {
                localStorage.removeItem('affiliate')
                form.reset()
                if (select) select.value = 'Recommend for me!'
                window.scrollTo({ top: 0, left: 0 })
                _toast.display(successMsg)
                button.classList.remove('disabled')
            } else {
                _toast.display(`Aw, snap, something broke. Please refresh page and try again.`)
            }
        })
    }
}