export const headerLinks = [
    {
      label: 'Acceuil',
      route: '/',
    },
    {
      label: 'Créer un Evènement',
      route: '/events/create',
    },
    {
      label: 'Mon Profil',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }