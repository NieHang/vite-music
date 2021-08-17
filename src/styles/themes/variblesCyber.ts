import { Varibles } from '@/types'

const varibles: Varibles = {
  ['--body-bgcolor']: '#040305',

  ['--logo-bgcolor']: '#fbe700',

  ['--cell-bgcolor']: '#fbe700',
  ['--cell-font-color']: '#030302',
  ['--cell-line-through-color']: '#1ffcf6',
  ['--cell-group-title-color']: '#010010',
  ['--cell-group-border-radius']: '0',

  ['--linear-gradient-double-missing-corner']:
    'linear-gradient(-135deg, transparent 10px, var(--cell-bgcolor) 0) top right, linear-gradient(45deg, transparent 10px, var(--cell-bgcolor) 0) bottom left',
  ['--linear-gradient-double-missing-corner-background-size']: '50% 100%',

  ['--linear-gradient-transparent-double-missing-corner']:
    'linear-gradient(-135deg, transparent 10px, var(--cell-bgcolor) 0) top right, linear-gradient(45deg, transparent 10px, var(--cell-bgcolor) 0) bottom left',

  ['--badge-bgcolor']: '#010010',
  ['--badge-font-color']: '#fced0a',

  ['--switch-bgcolor']: '#fbe700',

  ['--button-bgcolor']: '#fbe700',
}

export default varibles
