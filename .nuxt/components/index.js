export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Analytics } from '../../components/analytics.vue'
export { default as Birthdays } from '../../components/birthdays.vue'
export { default as BusCart } from '../../components/busCart.vue'
export { default as CreateBirthdayInput } from '../../components/createBirthdayInput.vue'
export { default as StatusBusCart } from '../../components/statusBusCart.vue'
export { default as Test } from '../../components/test.vue'
export { default as PartsBottomBin } from '../../components/parts/BottomBin.vue'
export { default as PartsBottomShelf } from '../../components/parts/BottomShelf.vue'
export { default as PartsCart } from '../../components/parts/Cart.vue'
export { default as PartsLinens } from '../../components/parts/Linens.vue'
export { default as PartsLiquids } from '../../components/parts/Liquids.vue'
export { default as PartsSecondShelf } from '../../components/parts/SecondShelf.vue'
export { default as PartsSilverware } from '../../components/parts/Silverware.vue'
export { default as PartsTopBin } from '../../components/parts/TopBin.vue'
export { default as PartsTowels } from '../../components/parts/Towels.vue'
export { default as PartsTrash } from '../../components/parts/Trash.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
