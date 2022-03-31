import {writable} from 'svelte/stores'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed.'
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed.'
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed.'
  }
])