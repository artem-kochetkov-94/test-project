export function getAbortable() {
  let controller: AbortController

  return {
    fetch: (url: string, opts = {}) => {
      controller = new AbortController()

      return fetch(
        url,
        Object.assign({}, opts, {
          signal: controller.signal,
        }),
      )
    },
    abort: () => controller.abort(),
  }
}
