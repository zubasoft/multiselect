import { toRefs, getCurrentInstance } from 'vue'
import isNullish from './../utils/isNullish'

export default function useData (props, context, dep)
{
  const { object, valueProp, mode, options} = toRefs(props)

  const $this = getCurrentInstance().proxy

  // ============ DEPENDENCIES ============

  const iv = dep.iv
  const updateSearchAtSelection = dep.updateSearchAtSelection

  // =============== METHODS ==============

  const update = (val, triggerInput = true) => {
    if(mode.value === 'single') {
      updateSearchAtSelection(val);
    } else {
      if(Array.isArray(val)) {
        val = val.map((v) => {
          if(typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
            return options._object.options.filter((o) => { return o[valueProp.value].toString() === v.toString() })[0];
          }

          return v;
        });
      }
    }

    // Setting object(s) as internal value
    iv.value = makeInternal(val)

    // Setting object(s) or plain value as external 
    // value based on `option` setting
    const externalVal = makeExternal(val)

    context.emit('change', externalVal, $this)

    if (triggerInput) {
      context.emit('input', externalVal)
      context.emit('update:modelValue', externalVal)
    }
  } 

  // no export
  const makeExternal = (val) => {
    // If external value should be object
    // no transformation is required
    if (object.value) {
      return val
    }

    // No need to transform if empty value
    if (isNullish(val)) {
      return val
    }

    // If external should be plain transform
    // value object to plain values
    return !Array.isArray(val) ? val[valueProp.value] : val.map(v => v[valueProp.value])
  }

  // no export
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === 'single' ? {} : []
    }

    return val
  }

  return {
    update,
  }
}