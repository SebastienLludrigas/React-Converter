function converterReducer(state = { value: 1.09, name: 'United States Dollar' }, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        // Pour récupérer la valeur finale de mon result je fais le calcul suivant :
        // 1) Je convertis la valeur de la devise rentrée par le client
        // en son equivalent en euros, c'est le calcul à l'intérieur des parenthèses.
        // 2) Je convertis ce montant en euros en son équivalent dans la devise cible
        // et j'arrondis le tout à deux chiffres après la virgule
        value: Math.round(action.payloadValue * 100
        * (action.payloadInputValue / action.payloadInputRate)) / 100,
        name: action.payloadName,
      };
    default:
      return state;
  }
}

export default converterReducer;
