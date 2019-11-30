import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

// Custom icons
import AllergyIcon from '../icons/AllergyIcon.vue'
import CareplansIcon from '../icons/CareplansIcon.vue'
import ImmunizationsIcon from '../icons/ImmunizationsIcon.vue'
import LabIcon from '../icons/LabIcon.vue'
import MedicationIcon from '../icons/MedicationIcon.vue'
import ProblemsIcon from '../icons/ProblemsIcon.vue'
import RecordsIcon from '../icons/RecordsIcon.vue'
import VitalsIcon from '../icons/VitalsIcon.vue'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
        values: {
          allergies: {
            component: AllergyIcon
          },
          careplans: {
            component: CareplansIcon
          },
          immunizations: {
            component: ImmunizationsIcon
          },
          lab: {
            component: LabIcon
          },
          medication: {
            component: MedicationIcon
          },
          problems: {
            component: ProblemsIcon
          },
          records: {
            component: RecordsIcon
          },
          vitals: {
            component: VitalsIcon
          }
        },
    },

    breakpoint: {
        // Breakpoints
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,

        // Conditionals
        xsOnly: true,
        smOnly: true,
        smAndDown: true,
        smAndUp: true,
        mdOnly: true,
        mdAndDown: true,
        mdAndUp: true,
        lgOnly: true,
        lgAndDown: true,
        lgAndUp: true,
        xlOnly: true,

        // Current breakpoint name (e.g. 'md')
        // name: string

        // Dimensions
        // height: number
        // width: number,

        thresholds: {
          xs: 340,
          sm: 540,
          md: 800,
          lg: 960,
          xl: 1280,
        },
        scrollBarWidth: 24,
    },
})

