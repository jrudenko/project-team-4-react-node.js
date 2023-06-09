export const theme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],

  fontSizes: {
    xxxs: 8,
    xxs: 10,
    xs: 12,
    s: 14,
    sm: 16,
    m: 18,
    l: 20,
    xl: 24,
    authxl: 28,
    xxl: 32,
    sectXl: 44,
    xxxl: 48,
  },

  fontWeights: {
    body: 400,
    subtitle: 500,
    title: 600,
    bold: 700,
  },

  colors: {
    primaryText: '#3E4462',
    backgroundMain: '#ECECEC',
    primaryBlack: '#1E1F28',
    colorAccent: '#8BAA36',
    greenSecondary: '#EBF3D4',
    success: '#3CBC81',
    warning: '#F6C23E',
    error: '#E74A3B',
    whiteText: '#FAFAFA',
    grey: '#D9D9D9',
    white: '#ffffff',
    black: '#000000',
    mainDark: '#23262A',
    secondaryDark: '#3E4462',
    titleConteiner: `#001833`,

    button: {
      textColorMain: '#FAFAFA',
      hoverTextColorMain: '#22252A',
      hoverSecondaryText: '#8BAA36',
      cancelPrimaryBag: '#D9D9D9',
      cancelSecondaryBag: '#FFFFFF',
      primaryBag: '#8BAA36',
      secondaryBag: '#22252A',
    },

    form: {
      inpBorder: '#FFFFFF',
      inpConfirm: '#3CBC81',
      inpWarning: '#F6C23E',
      inpError: '#E74A3B',
      formBottomLine: '#E0E0E0',
      formBackground: '#2a2c36',
      formIngredientsBackground: '#F5F5F5',
      formAddText: '#7d7d7d',
      formAddIcon: '#333333',
      labelText: '#000000',
    },
    switches: {
      darkTheme: {
        background: '#1E1F28',
        secondaryBg: '#2A2C36',
        cardBackground: '#2A2C36',
        deleteButton: '#1E1F28',
        headerText: '#FAFAFA',
        heroText: '#FAFAFA',
        primaryText: '#FAFAFA',
        heroForm: 'rgba(250, 250, 250, 0.5)',
        sectionTitle: '#FAFAFA',
        footerBg: '#8BAA36',
        footerText: '#FAFAFA',
        footerBgButton: '#22252A',
        footerSocialIcons: '#FAFAFA',
        therms: '#22252A',
        profileAvatarBg: '#D9D9D9',
        recipieDescMain: 'rgba(250, 250, 250, 0.6)',
        recipieDescSecondary: 'rgba(250, 250, 250, 0.6)',
        shoppingItemImageBg: '#2A2C36',
        notFoundPageText: '#FAFAFA',
        backdropColor: 'rgba(0, 0, 0, 0.5);',
        roundedBgColor: '#8BAA36',
        roundedBgHoverColor: '#22252A',
        roundedOtherBtnColor: '#23262A',
        subscribeBgColor: '#1E1F28',
        subscribeBtnColor: '#8BAA36',
        roundedDarkBgColor: '#8baa36',
        formAddInputText: '#fafafa',
        formAddPlaceholder: '#fafafa',
        formAddBorder: '#606167',
        formAddSelectMenu: '#8baa36',
        formAddScrollThumb: '#1E1F28',
        fromAddScrollTrack: '#8baa36',
        fromAddSelectOption: '#fafafa',
        formAddCounterBorder: '#fafafa',
        formAddCounterBtn: '#8baa36',
        formAddSelectIngr: '#4a4b52',
        formAddSelectIngrBg: '#1E1F28',
        formAddIngrBtn: '#fafafa',
        formAddTextarea: '#1E1F28',
        pageRecipeItemIngBg: '#2a2c36',
        pageRecipeCheckboxBorder: '#929398',
        paginateBg: '#2A2C36',
        paginateArrow: 'rgba(250, 250, 250, 0.6)',
        paginatePage: 'rgba(250, 250, 250, 0.6)',
        paginateActive: '#8BAA36',
        inputBg: '#8BAA36',
        backgroundSerch: '#FAFAFA',
        bgSerchInput: '#2A2C36',
        borderInputSearch: '1px solid rgba(250, 250, 250, 0.5)',
        colorInputSearch: '#23262A',
        socialIconHover: '#22252A',
        inputAcentColor:'#a5dd0c',
        folowUsIconHover: '#8BAA36',
        folowUsIcon: '#FAFAFA',
        formIcon: '#FAFAFA',

        boxShadow: {
        boxshadow: '17px 17px 84px 18px rgba(104, 101, 101, 0.375) inset',
       },

      },
      lightTheme: {
        background: '#FAFAFA',
        secondaryBg: '#EBF3D4',
        cardBackground: '#FFFFFF',
        deleteButton: '#EBF3D4',
        headerText: '#23262A',
        headerTextModal: '#FFFFFF',
        heroText: '#22252A',
        primaryText: '#3E4462',
        heroForm: '#F0F0F0',
        sectionTitle: '#001833',
        footerBg: '#22252A',
        footerText: '#FAFAFA',
        footerBgButton: '#8baa36',
        footerSocialIcons: '#8baa36',
        therms: '#22252A',
        profileAvatarBg: '#D9D9D9',
        recipieDescMain: '#23262A',
        recipieDescSecondary: '#7E7E7E',
        shoppingItemImageBg: '#ebf3d4',
        notFoundPageText: '#000000',
        backdropColor: 'rgba(255, 255, 255, 0.4)',
        roundedBgColor: '#22252A',
        roundedBgHoverColor: '#8baa36',
        roundedOtherBtnColor: '#23262A',
        subscribeBgColor: '#8baa36',
        subscribeBtnColor: '#22252A',
        roundedDarkBgColor: '#8baa36',
        formAddInputText: '#000000',
        formAddPlaceholder: '#7d7d7d',
        formAddBorder: '#e0e0e0',
        formAddSelectMenu: '#fafafa',
        formAddScrollThumb: '#e0e0e0',
        fromAddScrollTrack: '#fafafa',
        fromAddSelectOption: '#7d7d7d',
        formAddCounterBorder: '#bebebe',
        formAddCounterBtn: '#8baa36',
        formAddSelectIngr: '#bebebe00',
        formAddSelectIngrBg: '#F5F5F5',
        formAddIngrBtn: '#333333',
        formAddTextarea: '#F5F5F5',
        pageRecipeItemIngBg: '#ebf3d4',
        pageRecipeCheckboxBorder: '#a7ab9d',
        paginateBg: '#FAFAFA',
        paginateArrow: 'rgba(169, 169, 169, 0.73)',
        paginatePage: '#656565',
        paginateActive: '#EBF3D4',
        inputBg: '#22252A',
        backgroundSerch: '#FAFAFA',
        bgSerchInput: '#D9D9D9',
        borderInputSearch: '1px solid rgba(35, 38, 42, 0.2)',
        colorInputSearch: '#bdbdbd',
        inputAcentColor:'#FFFFFF',

        boxShadow: {
        boxshadow: '17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset',
        },
        socialIconHover:'#FFFFFF',
        folowUsIconHover: '#22252A',
        folowUsIcon: '#8baa36',
        formIcon: '#8BAA36',
      },
    },
  },

  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },


  device: {
    mobile: `(min-width: 375px)`,
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1440px)`,
    mobileMax: `(max-width: 375px)`,
    tabletMax: `(max-width: 768px)`,
    desktopMax: `(max-width: 1440px)`,
  },
  letterSpacings: {
    subheader: '-0.24px',
    content: '-0.02em',
  },

  lineHeights: {
    body: `1.5`,
    subheader: '1',
    content: '1.33',
    extraContent: '1.29',
    btnText: '1.12',
    description: '1.25',
    time: '1.43',
    heading: `1.125`,
    headerLinks: '1.6',
    userLink: '1.7',
    searchSelect: '1.5',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  fonts: {
    main: 'Poppins, sans-serif',
  },

  radius: {
    btnStandart: '6px',
    btnIcon: '4px',
    logo: '12px',
    image: '8px',
    switch: '50px',
    pagination: '26px',
    modal: '24px',
    circle: '50%',
  },
};
