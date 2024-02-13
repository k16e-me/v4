import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _overlay = atom(false),
    _sheet = atom(false),
    _products = atom([]),
    _productsNew = atom([]),
    _affiliates = atom([]),
    _affiliate = persistentAtom('affiliate', '')

export function _setOverlay() { _overlay.set(true) }
export function _setSheet() { _sheet.set(true) }

export function _addProducts(item) { _products.set(item) }
export function _addProductsNew(item) { _productsNew.set(item) }
export function _addAffiliates(item) { _affiliates.set(item) }
export function _addAffiliate(item) { _affiliate.set(item) }

export function _unsetOverlay() { _overlay.set(false) }
export function _unsetSheet() { _sheet.set(false) }