import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../stores/example'
import {describe,test,expect,beforeAll,beforeEach,afterEach}from 'vitest';

beforeAll(()=> {
  setActivePinia(createPinia())
})

describe('useExampleStore',()=> {
  let store : ReturnType<typeof useCounterStore>;
  beforeEach(() => {
    store = useCounterStore();
  })
  afterEach(() => {
    store.$reset();
  })
  test("references a store", () => {
    expect(store).toBeDefined();
  });

  // test("has empty Array on init", () => {
  //   expect(store.items).toStrictEqual([]);
  // });

});