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
        faqs: 'FAQs',
        sliders: 'Sliders',
        verificationRequests: 'Provider Requests',
        sports: 'Sports'
      },
      filter: {
        filter: 'Filter',
        applyFilter: 'Apply Filter',
        resetFiltersTooltip: 'Reset Filters'
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
      viewOrders: 'View Orders',
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
      },
      filter: {
        include: 'Include',
        exclude: 'Exclude',
        clearFilter: 'Clear Filter',
        misc: 'Misc',
        byRole: 'By Role',
        adminRole: 'Admin',
        providerRole: 'Provider',
        emailVerified: 'Email Verified'
      },
      pages: {
        orders: {
          addOrder: 'Add Order',
          editOrder: 'Edit Order',
          orderList: 'Order List',
          deleteOrderText: 'Are you sure you want to delete this Order?',
          viewOrders: 'View Orders',
          dataTableHeaders: {
            price: 'Price',
            status: 'Status',
            description: 'Description',
            acceptedMessage: 'Accept Message',
            rejectedMessage: 'Reject Message',
            canceledMessage: 'Cancel Message',
            paidAt: 'Paid At',
            acceptedAt: 'Accepted At',
            rejectedAt: 'Rejected At',
            canceledAt: 'Canceled At',
            createdAt: 'Created At',
            updatedAt: 'Updated At'
          },
          filter: {
            status: 'Status',
            filterOrdersTitle: 'Filter Orders by status'
          }
        }
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
    sliders: {
      addSlider: 'Add Slider',
      editSlider: 'Edit Slider',
      sliderList: 'Slider List',
      deleteSliderText: 'Are you sure you want to delete this Slider?',
      name: 'Name',
      viewProviders: 'View Providers',
      dataTableHeaders: {
        name: 'Name',
        order: 'Order'
      },
      pages: {
        providers: {
          name: 'Name',
          description: 'Description',
          hourly_rate: 'Hourly Rate',
          published_at: 'Published At',
          addProvider: 'Add Provider',
          editProvider: 'Edit Provider',
          providerList: 'Provider List',
          deleteProviderText: 'Are you sure you want to delete this Provider?',
          addProviderToSlider: 'Add Provider',
          removeProviderToSlider: 'Remove Provider',
          dataTableHeaders: {
            name: 'Name',
            description: 'Description',
            hourlyRate: 'Hourly Rate',
            publishedAt: 'Published At',
            providerCount: 'Provider Count'
          },
          filter: {
            filterProvidersTitle: 'Display all Providers or only the ones in the Slider',
            filterProvidersSubtitle: 'Providers Sorting & Ordering (by order field) is disabled while displaying all Providers',
            onlyInSlider: 'Only in Slider',
            all: 'All',
            misc: 'Misc'
          }
        }
      }
    },
    requests: {
      addRequest: 'Add Request',
      editRequest: 'Edit Request',
      requestList: 'Request List',
      deleteRequestText: 'Are you sure you want to delete this Request?',
      questionEn: 'Question (EN)',
      questionDe: 'Question (DE)',
      answerEn: 'Answer (EN)',
      answerDe: 'Answer (DE)',
      userDetail: 'User Detail',
      verifyProvider: 'Verify Provider',
      rejectProvider: 'Reject Provider',
      dataTableHeaders: {
        sports: 'Sports',
        jobs: 'Jobs',
        languages: 'Languages',
        message: 'Message',
        verified: 'Verified',
        introductionMethod: 'Introduction Method',
        phone: 'Phone',
        address: 'Address',
        url: 'URL'
      },
      filter: {
        filterRequestsTitle: 'Display all Requests or only the Approved ones',
        onlyApproved: 'Only Approved',
        all: 'All'
      }
    },
    taxonomies: {
      pages: {
        sports: {
          addSport: 'Add Sport',
          editSport: 'Edit Sport',
          sportList: 'Sport List',
          deleteSportText: 'Are you sure you want to delete this Sport?',
          name: 'Name',
          labelEn: 'Label (EN)',
          labelDe: 'Label (DE)',
          dataTableHeaders: {
            name: 'Name',
            labelEn: 'Label (EN)',
            labelDe: 'Label (DE)'
          }
        }
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
