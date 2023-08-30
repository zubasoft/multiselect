import { ref, toRefs, computed, nextTick } from 'vue'

export default function useMultiselect (props, context, dep)
{
  const { searchable, disabled, clearOnBlur } = toRefs(props)

  // ============ DEPENDENCIES ============

  const input = dep.input
  const open = dep.open
  const close = dep.close
  const clearSearch = dep.clearSearch
  const initSearch = dep.initSearch
  const isOpen = dep.isOpen

  // ================ DATA ================

  const multiselect = ref(null)
  
  const wrapper = ref(null)

  const keyboardFocusHelper = ref(null)

  const tags = ref(null)

  const isActive = ref(false)

  const mouseClicked = ref(false)

  // ============== COMPUTED ==============

  const tabindex = computed(() => {
    return searchable.value || disabled.value ? -1 : 0
  })

  // =============== METHODS ==============

  const blur = () => {
    if (searchable.value) {
      input.value.blur()
    }

    wrapper.value.blur()
  }

  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus()
    }
  }

  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return
    }

    isActive.value = true

    if (shouldOpen) {
      open()
    }
  }

  const deactivate = () => {
    isActive.value = false

    setTimeout(() => {
      if (!isActive.value) {
        close()

        if (clearOnBlur.value) {
          clearSearch()
        }
      }
    }, 1)
  }

  const handleFocusIn = (e) => {
    if ((e.target.closest('[data-tags]') && e.target.nodeName !== 'INPUT') || e.target.closest('[data-clear]')) {
      return
    }

    /* Commented out because always opening is not accessible:
       https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/
       Just leaved it there in case we want it again somewhere

    if(mouseClicked.value === false && searchable.value && !e.target?.classList.contains('multiselect-keyboard-focus-helper')) {
      // Always open the multiselect when searchable (act like an autocomplete)
      activate(true)
    } else {*/
      activate(mouseClicked.value)
    //}

    if(searchable.value && e.target.nodeName === 'INPUT') {
      // Set search value to the actual selected value
      initSearch(e)
    }
  }

  const handleFocusOut = () => {
    deactivate()
  }

  const handleCaretClick = () => {
    deactivate()
    blur()
  }

  /* istanbul ignore next */
  const handleMousedown = (e) => {
    mouseClicked.value = true

    if (isOpen.value && (e.target.isEqualNode(wrapper.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate()
      }, 0)
    } else if (document.activeElement.isEqualNode(wrapper.value) && !isOpen.value) {
      activate()    
    }

    setTimeout(() => {
      mouseClicked.value = false
    }, 0)
  }

  return {
    multiselect,
    wrapper,
    keyboardFocusHelper,
    tags,
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown,
  }
}