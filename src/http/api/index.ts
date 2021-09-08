import { ApiType } from '@/types'
import homeApis from './home'
import loginApis from './login'
import userApis from './user'

export const Api: ApiType = {
  loginApis,
  userApis,
  homeApis,
}
