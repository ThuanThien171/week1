/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify';
import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import AccountIcon from '@/components/Icon/accountIcon.vue';
import CartIcon from '@/components/Icon/cartIcon.vue';
import ThreeLine from '@/components/Icon/threeLine.vue'
import KiraIcon from '@/components/Icon/kiraIcon.vue';
import EmailIcon from '@/components/Icon/emailIcon.vue';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    defaultSet: 'mdi',
    aliases:{
      ...aliases,
      accountIcon: AccountIcon,
      cartIcon: CartIcon,
      threeLine: ThreeLine,
      kiraIcon: KiraIcon,
      emailIcon: EmailIcon,
    },
    sets: {
      fa,
      mdi,
    },
  },
})
