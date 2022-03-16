import { ar } from 'vuetify/es5/locale'

export default {
  ...ar,

  general: {
    name: 'الاسم',
    enabled: 'تم التفعيل',
    disabled: 'تم الاغلاق',
    enable: 'تفعيل',
    disable: 'اغلاق',
    status: 'حالة',
    actions: 'اجراءات',
    createdAt: 'تم الانشاء في',
    verified: 'Verified',
    site: 'موقع',
    branch: 'فرع',
    group: 'مجموعة',
    inspector: 'مفتش',
    update: 'تحديث',
    reset: 'اعادة',
    yes: 'نعم',
    no: 'لا',
    itemsPerPage: 'Items per page',
    list: 'قائمة',
    page: 'صفحة',
    of: 'of',
    components: {
      exportTo: 'تصدير الي:',
      export: 'تصدير',
      viewInspections: 'معاينة التفتيشات',
      viewMembers: 'رؤية الاعضاء',
      viewBranches: 'معاينة الافرع',
      viewUnverifiedBranches: 'View Unverified Branches',
      verifySite: 'Verify Site',
      verifyBranch: 'Verify Branch',
      clonedForm: 'Clone Form',
      editSite: 'تعديل الموقع',
      accountSetting: 'اعدادات حساب',
      signOut: 'تسجيل خروج',
      snackbar: {
        created: 'تم انشاء الصنف',
        updated: 'تم التحديث',
        deleted: 'تم المسح',
        networkError: 'خطا بالشبكة',
        notFound: 'لم يتم العثور على المورد',
        generalError: 'Something went wrong!'
      },
      navigationDrawer: {
        dashboard: 'لوحة تحكم',
        sites: 'مواقع',
        groups: 'المجموعات',
        categories: 'اصناف',
        user: 'الموظفين',
        forms: 'الاستمارات',
        inspections: 'التفاتيش',
        verifications: 'Verifications'
      }
    }
  },
  pages: {
    user: {
      userId: 'رقم الموظف',
      name: 'الاسم',
      phoneNumber: 'رقم هاتف',
      email: 'ايميل',
      role: 'Role',
      addMember: 'اضافة العضو',
      editUser: 'تعديل الموظفين',
      userList: 'قائمة الموظفين',
      deleteFromGroupText: 'متاكد تريد ازالة هذا العضو من المجموعة؟',
      deleteUserText: 'متاكد تريد مسح الموظف؟',
      dataTableHeaders: {
        name: 'الاسم',
        phoneNumber: 'رقم هاتف',
        email: 'ايميل',
        isAdmin: 'مسئول؟',
        userId: 'رقم الموظف',
        role: 'Role'
      }
    },
    site: {
      newSite: 'New Site',
      editSite: 'Edit Site',
      siteList: 'Site List',
      rejectionReason: 'Rejection Reason',
      siteDataTableHeaders: {
        siteName: 'Site Name',
        email: 'E-Mail',
        category: 'Category'
      },
      backToSites: 'الذهاب لمواقع',
      backToVerifications: 'Back to Verifications',
      backToSiteUnverifiedBranches: 'Back to Unverified Branches List',
      saveAndContinue: 'حفظ و إستمرار للتعديل',
      saveChanges: 'حفظ التعديلات',
      generalInfo: 'معلومات عامة',
      siteName: 'اسم الموقع',
      email: 'ايميل',
      companyNameEn: 'Company Name (EN)',
      companyNameAr: 'اسم الشركة (AR)',
      category: 'صنف',
      logo: 'شعار',
      cover: 'Cover',
      disabledMessage: 'This Site will be',
      viewBranches: 'معاينة الأفرع',
      viewInspections: 'معاينة التفتيشات',
      commercialLicense: 'رخصة تجارية',
      licenseNumber: 'رقم الترخيص',
      licenseExpireDate: 'تاريخ انتهاء الترخيص',
      licensePhoto: 'صورة الترخيص',
      seniorUser: 'الموظف المسؤول',
      name: 'الاسم',
      phoneNumber: 'رقم هاتف',
      position: 'الصفة',
      paci: 'المعلومات المدنية',
      paciNumber: 'رقم المعلومات المدنية',
      municipality: 'البلدية',
      managingPartner: 'شريك إداري',
      branchNumber: 'رقم الفرع',
      branchNameEn: 'Branch Name (EN)',
      branchNameAr: 'اسم الفرع (AR)',
      area: 'المنطقة',
      youtubeURL: 'Youtube URL',
      address: 'العنوان',
      managerName: 'اسم المدير',
      managerPhoneNumber: 'رقم هاتف مدير',
      deleteDialogText: 'متاكد تريد مسح الفرع؟',
      editBranch: 'تعديل الفرع',
      branchList: 'قائمة الافرع',
      dataTableHeaders: {
        branchNumber: 'رقم الفرع',
        brandNameEn: 'Brand Name (EN)',
        brandNameAr: 'اسم العلامة التجارية (AR)',
        address: 'العنوان',
        managerName: 'اسم المدير',
        managerPhoneNumber: 'رقم هاتف مدير'
      }
    },
    profile: {
      editProfile: 'تعديل الملف المستخدم',
      name: 'الاسم',
      email: 'ايميل',
      emailRetype: 'ايميل (اعادة الادخال)',
      newPassword: ' كلمة المرور الجديد',
      newPasswordRetype: 'كلمة المرور الجديد (اعادة الادخال)',
      back: 'رجوع'
    },
    inspections: {
      inspectionList: 'قائمة التفاتيش',
      deleteDialogText: 'متاكد تريد مسح التفتيش؟',
      editInspection: 'تعديل التفتيش',
      newRandomInspection: 'تفتيش عشوائي جديد',
      dueDate: 'تاريخ التسليم',
      deadlineDays: 'Deadline (Days)',
      dataTableHeaders: {
        inspectionSite: 'موقع التفتيش',
        group: 'مجموعة',
        dueDate: 'تاريخ التسليم',
        inspector: 'مفتش',
        address: 'العنوان',
        deadline: 'Deadline (Days)',
        score: 'الناتج',
        grade: 'تقييمات',
        type: 'نوع'
      }
    },
    groups: {
      groupList: 'قائمة المجموعات',
      deleteDialogText: 'متاكد تريد مسح المجموعة؟',
      newGroup: 'مجموعة الجديدة',
      editGroup: 'تعديل المجموعة',
      member: 'عضو',
      groupAdmin: 'مسئول المجموعة',
      groupPhoto: 'Group Photo',
      description: 'وصف',
      admins: 'مسئولين',
      users: 'المستخدم',
      dataTableHeaders: {
        groupName: 'اسم المجموعة'
      }
    },
    dashboard: {
      grades: 'تقييمات',
      totalInspections: 'اجمالي التفاتيش',
      websiteVisitors: 'Website Visitors',
      totalInspectors: 'اجمالي المفتشين',
      categories: 'اصناف',
      all: 'كل',
      today: 'اليوم',
      thisWeek: 'هذا الاسبوع',
      thisMonth: 'هذا الشهر',
      lastThreeMonths: 'الثلاث شهور الاخيرة'
    },
    categories: {
      form: 'استمارة',
      groups: 'مجموعات',
      routineInspectionDuration: 'مدة التفتيش الروتين',
      deadline: 'Deadline',
      categoryList: 'قائمة الصنف',
      deleteDialogText: 'متاكد تريد حذف الصنف؟',
      editCategory: 'تعديل الصنف',
      newCategory: 'صنف الجديد',
      grades: 'Grades',
      addGrade: 'Add Grade',
      gradeName: 'Name',
      gradeValue: 'Minimum required value (%)',
      dataTableHeaders: {
        category: 'صنف',
        assignedForms: 'استمارات المعينة',
        assignedGroups: 'مجموعات المعينة',
        routineDuration: 'مدة الروتين',
        deadline: 'Deadline'
      }
    },
    auth: {
      forbiddenMessage: 'تم إدخال في الخانة الخطأ',
      dashboard: 'لوحة تحكم',
      takeMeBack: 'ارجعني',
      home: 'الصفحة الرئيسية',
      login: 'تسجيل الدخول',
      email: 'ايميل',
      password: 'كلمة المرور',
      staySignedIn: 'ابقني مسجلا',
      forgotPassword: 'نسيت كلمة المرور؟'
    },
    name: {}
  },
  languageSelectorOptions: {
    english: 'انگلیسی',
    arabic: 'عربی'
  }
}
