import { customRef } from 'vue';

// 自定义ref
export default function(value, delay = 300) {
  let timer = null;

  //收集依赖和触发依赖
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    }
  })
}
