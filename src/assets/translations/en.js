import { en } from 'vuetify/es5/locale'

export default {
  ...en,

  general: {
    name: 'Name',
    enabled: 'Enabled',
    disabled: 'Disabled',
    enable: 'Enable',
    disable: 'Disable',
    actions: 'Actions',
    createdAt: 'Created At',
    verified: 'Verified',
    site: 'Site',
    branch: 'Branch',
    group: 'Group',
    inspector: 'Inspector',
    update: 'Update',
    reset: 'Reset',
    yes: 'Yes',
    no: 'No',
    itemsPerPage: 'Items per page',
    list: 'List',
    page: 'Page',
    of: 'of',
    components: {
      exportTo: 'Export to:',
      export: 'Export',
      viewInspections: 'View Inspections',
      viewMembers: 'View Members',
      viewBranches: 'View Branches',
      viewUnverifiedBranches: 'View Unverified Branches',
      verifySite: 'Verify Site',
      verifyBranch: 'Verify Branch',
      clonedForm: 'Clone Form',
      editSite: 'Edit Site',
      accountSetting: 'Account Setting',
      signOut: 'Sign Out',
      snackbar: {
        created: 'Item Created',
        updated: 'Item Updated',
        deleted: 'Item Deleted',
        networkError: 'A network error occurred',
        notFound: 'Resource not found',
        generalError: 'Something went wrong!'
      },
      navigationDrawer: {
        dashboard: 'Dashboard',
        accounts: 'Accounts',
        faqs: 'FAQs'
      },
      filter: {
        filter: 'Filter',
        byRole: 'By Role',
        adminRole: 'Admin',
        providerRole: 'Provider',
        applyFilter: 'Apply Filter',
        resetFiltersTooltip: 'Reset Filters',
        misc: 'Misc',
        include: 'Include',
        exclude: 'Exclude',
        clearFilter: 'Clear Filter',
        emailVerified: 'Email Verified'
      }
    }
  },
  pages: {
    users: {
      name: 'Name',
      email: 'Email',
      birth: 'Birthday',
      gender: 'Gender',
      role: 'Role',
      addAccount: 'Add Account',
      editAccount: 'Edit Account',
      accountList: 'Account List',
      deleteAccountText: 'Are you sure you want to delete this Account?',
      dataTableHeaders: {
        name: 'Name',
        email: 'Email',
        role: 'Role',
        birth: 'Birthday',
        gender: 'Gender',
        suspendedAt: 'Suspended At',
        lastBooking: 'Last Booking',
        emailVerifiedAt: 'Email Verified At',
        registeredAt: 'Registered At'
      }
    },
    profile: {
      editProfile: 'Edit Profile',
      name: 'Name',
      email: 'Email',
      emailRetype: 'Email (Retype)',
      newPassword: 'New Password',
      newPasswordRetype: 'New Password (Retype)',
      back: 'Back'
    },
    dashboard: {
      grades: 'Grades',
      totalInspections: 'Total Inspections',
      websiteVisitors: 'Website Visitors',
      totalInspectors: 'Total Inspectors',
      categories: 'Categories',
      all: 'All',
      today: 'Today',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      lastThreeMonths: 'Last 3 Months'
    },
    faqs: {
      addFaq: 'Add FAQ',
      editFaq: 'Edit FAQ',
      faqList: 'FAQ List',
      deleteFaqText: 'Are you sure you want to delete this FAQ?',
      questionEn: 'Question (EN)',
      questionDe: 'Question (DE)',
      answerEn: 'Answer (EN)',
      answerDe: 'Answer (DE)',
      dataTableHeaders: {
        questionEn: 'Question (EN)',
        questionDe: 'Question (DE)',
        answerEn: 'Answer (EN)',
        answerDe: 'Answer (DE)',
        order: 'Order'
      }
    },
    auth: {
      forbiddenMessage: 'You entered a forbidden place!',
      dashboard: 'Dashboard',
      takeMeBack: 'Take me back to',
      home: 'Home',
      login: 'Login',
      email: 'Email',
      password: 'password',
      staySignedIn: 'Stay signed in',
      forgotPassword: 'Forgot password?'
    },
    name: {}
  },
  languageSelectorOptions: {
    english: 'English',
    arabic: 'Arabic'
  }
}
