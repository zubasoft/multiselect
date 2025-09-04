import { toRefs, watch, nextTick, onMounted, ref, shallowRef } from 'vue'
import toRef from '../utils/toRef'

export default function useScroll (props, context, dep)
{
  const {
    limit, infinite
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const resolveOptions = dep.resolveOptions;
  const options = dep.options;
  const pfo = dep.pfo;
  const eo = dep.eo;
  const moreToFetch = ref(true);

  // ================ DATA ================

  // no export
  const observer = ref(null);

  const infiniteLoader = shallowRef(null);

  const scrollingBox = ref(null);

  // ============== COMPUTED ==============

  const hasMore = toRef(() => {
    return moreToFetch.value;
  })

  // =============== METHODS ==============

  // no export
  /* istanbul ignore next */
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0]

    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;
        scrollingBox.value = parent;

        if(search.value === undefined || search.value === null) {
            search.value = '';
        }

        if(pfo.value && pfo.value.length > offset.value + limit.value) {
            // Do not load again when there are already enough loaded options
            offset.value += limit.value === -1 ? 10 : limit.value

            nextTick(() => {
                parent.scrollTop = scrollTop
            });
            return;
        }

        let result = resolveOptions();

        if(result instanceof Promise) {
            result.then((response) => {
                if(response.length < limit.value) {
                    moreToFetch.value = false;
                }

                offset.value += limit.value === -1 ? 10 : limit.value

                nextTick(() => {
                    parent.scrollTop = scrollTop
                });
            });
        } else {
            offset.value += limit.value === -1 ? 10 : limit.value

            nextTick(() => {
                parent.scrollTop = scrollTop
            });
        }
    }
  }

  const observe = () => {
    /* istanbul ignore else */
    if (isOpen.value && moreToFetch.value) {
      observer.value.observe(infiniteLoader.value)
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect()
    }
  }

  // ============== WATCHERS ==============

  watch(isOpen, () => {
    if (!infinite.value) {
      return
    }

    observe()
  })

  watch(search, () => {
    if (!infinite.value) {
      return
    }

    offset.value = 0;
    moreToFetch.value = true;
    if(scrollingBox.value) {
        scrollingBox.value.scrollTop = 0;
    }

    observe()
  }, { flush: 'post' })

  watch(eo, () => {
    if (!infinite.value) {
      return
    }

    moreToFetch.value = true;

    observe()
  }, { immediate: false, flush: 'post' })

  // ================ HOOKS ===============

  onMounted(() => {
    /* istanbul ignore else */
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver)
    }
  })

  return {
    hasMore,
    infiniteLoader,
  }
}