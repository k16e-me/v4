import Swup from 'swup'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import _active from '@scripts/utils/active'
import _words from '@scripts/words'
import { _body, _q, _ql } from '@scripts/utils/snips'
import _zaps from '@scripts/zaps'
import _backbar from '@scripts/utils/backbar'
import { _fullres } from './lib/fullres'
import { _accordion } from './lib/accordion'

const swup = new Swup({
    containers: ['#swup', '#page-title'],
    animationSelector: '[class*="swup-"]',
    animateHistoryBrowsing: true,
    plugins: [
        new SwupProgressPlugin({ className: 'swup-progress-bar', delay: 150, finishAnimation: false }),
        new SwupHeadPlugin(),
    ],
})

document.addEventListener('DOMContentLoaded', () => {
    once()
    init()
})
swup.hooks.on('page:view', () => {
    init()
    _ql('[data-entry]').map(x => x.classList.remove('invisible'))
})

function init() {
    _active()
    _words()
    _backbar()
    _fullres()
    _accordion()
}

function once() {
    _zaps()
}