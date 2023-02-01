import { setActivePinia, createPinia } from 'pinia'
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from 'vitest'
import { useCounterStore } from '../stores/example'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('useExampleStore', () => {
  let store: ReturnType<typeof useCounterStore>
  beforeEach(() => {
    store = useCounterStore()
  })
  afterEach(() => {
    store.$reset()
  })
  test('references a store', () => {
    expect(store).toBeDefined()
  })

  // test("has empty Array on init", () => {
  //   expect(store.items).toStrictEqual([]);
  // });
})
