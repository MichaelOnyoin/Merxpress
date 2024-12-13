type NavigationItem = {
    id: string;
    label: string;
    isHighlighted?: boolean;
  };
  
  export const navigationItems: NavigationItem[] = [
    { id: 'catalog', label: 'Catalog', isHighlighted: true },
    { id: 'sell', label: 'Sell on Merxpress', isHighlighted: true },
    { id: 'assist', label: 'MerxAssist' },
    { id: 'pay', label: 'MerxPay' },
    { id: 'estates', label: 'MerxEstates' },
    { id: 'foundation', label: 'MerxFoundation' },
    { id: 'academy', label: 'MerxAcademy' },
    { id: 'hub', label: 'Merx E-Hub' },
    { id: 'care', label: 'MerxCare' },
    { id: 'clips', label: 'MerxClips' },
    { id: 'services', label: 'E-Services' },
    { id: 'news', label: 'MerxNews' }
  ];