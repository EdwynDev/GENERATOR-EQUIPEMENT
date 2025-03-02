// Probabilités pour les raretés
const rarityProbabilities = {
  'Commun': 40, // 40%
  'Peu_commun': 30, // 30%
  'Rare': 15, // 15%
  'Épique': 10, // 10%
  'Légendaire': 4, // 4%
  'Mythique': 0.9, // 0.9%
  'Divin': 0.1, // 0.1%
  'Primordial': 0.05, // 0.05%
  'Éternel': 0.01, // 0.01%
  'Céleste': 0.0001 //0.0001%
};

// Probabilités pour les qualités
const qualityProbabilities = {
  'Endommagée': 20, // 20%
  'Normale': 50, // 50%
  'Supérieure': 20, // 20%
  'Avancée': 7, // 7%
  'Parfaite': 3, // 3%
  'Flamboyante': 1, // 1%
  'Divine': 0.1, // 0.1%
  'Immatérielle': 0.05 // 0.05%
};

// Probabilités pour le nombre d'étoiles
const starProbabilities = {
  1: 50, // 50%
  2: 30, // 30%
  3: 15, // 15%
  4: 4, // 4%
  5: 2, // 2%
  6: 1, // 1%
  7: 0.5, // 0.5%
  8: 0.1, // 0.1%
  9: 0.05, // 0.05%
  10: 0.01, // 0.01%
  11: 0.0001 // 0.0001%
};

// Couleurs des raretés
const rarityColors = {
  'Commun': '#c0c0c0', // Gris
  'Peu_commun': '#1a9334', // Vert
  'Rare': '#0070dd', // Bleu
  'Épique': '#a335ee', // Violet
  'Légendaire': '#ff8000', // Orange
  'Mythique': '#e01a6b', // Rose
  'Divin': '#f0d77a', // Or clair
  'Primordial': '#00ffff', // Cyan
  'Éternel': '#ff00ff', // Magenta
  'Céleste': '#280f3d' // 
};

// Images des équipements par nom
const equipmentImages = {
  // Armes
  'Épée du chaos': '/assets/images/weapons/epee-chaos.png',
  'Hache du dragon': '/assets/images/weapons/hache-dragon.png',
  'Dague de l\'ombre': '/assets/images/weapons/dague-ombre.png',
  'Arc céleste': '/assets/images/weapons/arc-celeste.png',
  'Marteau de guerre': '/assets/images/weapons/marteau-guerre.png',
  'Lame sanguinaire': '/assets/images/weapons/lame-sanguinaire.png',
  'Glaive de lumière': '/assets/images/weapons/glaive-lumiere.png',
  'Faux de l\'apocalypse': '/assets/images/weapons/faux-apocalypse.png',
  'Épée longue de l\'éclipse': '/assets/images/weapons/epee-eclipse.png',
  'Lance du phénix': '/assets/images/weapons/lance-phenix.png',

  // Armures
  'Cuirasse de fer': '/assets/images/armors/cuirasse-fer.png',
  'Robe mystique': '/assets/images/armors/robe-mystique.png',
  'Armure d\'écailles': '/assets/images/armors/armure-ecailles.png',
  'Plastron du chevalier': '/assets/images/armors/plastron-chevalier.png',
  'Manteau résistant': '/assets/images/armors/manteau-resistant.png',
  'Armure de la bête': '/assets/images/armors/armure-bete.png',
  'Tunique de l\'errant': '/assets/images/armors/tunique-errant.png',
  'Harnais de glace': '/assets/images/armors/harnais-glace.png',
  'Plastron en adamantium': '/assets/images/armors/plastron-adamantium.png',
  'Cape des ombres': '/assets/images/armors/cape-ombres.png',

  // Accessoires
  'Anneau de force': '/assets/images/accessories/anneau-force.png',
  'Bracelet du mage': '/assets/images/accessories/bracelet-mage.png',
  'Pendentif de vitalité': '/assets/images/accessories/pendentif-vitalite.png',
  'Charme ancien': '/assets/images/accessories/charme-ancien.png',
  'Amulette runique': '/assets/images/accessories/amulette-runique.png',
  'Anneau de givre': '/assets/images/accessories/anneau-givre.png',
  'Collier de la licorne': '/assets/images/accessories/collier-licorne.png',
  'Bague de feu': '/assets/images/accessories/bague-feu.png',
  'Pendentif de l\'étoile': '/assets/images/accessories/pendentif-etoile.png',
  'Bracelet de l\'infini': '/assets/images/accessories/bracelet-infini.png',

  // Boucliers
  'Rempart infernal': '/assets/images/shields/rempart-infernal.png',
  'Écu du gardien': '/assets/images/shields/ecu-gardien.png',
  'Bouclier de cristal': '/assets/images/shields/bouclier-cristal.png',
  'Barrière magique': '/assets/images/shields/barriere-magique.png',
  'Défense royale': '/assets/images/shields/defense-royale.png',
  'Bouclier de l\'aube': '/assets/images/shields/bouclier-aube.png',
  'Pavois de pierre': '/assets/images/shields/pavois-pierre.png',
  'Bouclier de l\'abysse': '/assets/images/shields/bouclier-abysse.png',
  'Égide de l\'immortel': '/assets/images/shields/egide-immortel.png',
  'Bouclier du titan': '/assets/images/shields/bouclier-titan.png',

  // Casques
  'Heaume du champion': '/assets/images/helmets/heaume-champion.png',
  'Couronne de sagesse': '/assets/images/helmets/couronne-sagesse.png',
  'Casque d\'acier': '/assets/images/helmets/casque-acier.png',
  'Capuche d\'assassin': '/assets/images/helmets/capuche-assassin.png',
  'Visière ancestrale': '/assets/images/helmets/visiere-ancestrale.png',
  'Casque du berserker': '/assets/images/helmets/casque-berserker.png',
  'Masque de la bête': '/assets/images/helmets/masque-bete.png',
  'Heaume de la tempête': '/assets/images/helmets/heaume-tempete.png',
  'Couronne de glace': '/assets/images/helmets/couronne-glace.png',
  'Casque du dragon': '/assets/images/helmets/casque-dragon.png',

  // Bottes
  'Bottes de vitesse': '/assets/images/boots/bottes-vitesse.png',
  'Bottes de furtivité': '/assets/images/boots/bottes-furtivite.png',
  'Bottes de l\'explorateur': '/assets/images/boots/bottes-explorateur.png',
  'Bottes de feu': '/assets/images/boots/bottes-feu.png',
  'Bottes de givre': '/assets/images/boots/bottes-givre.png',
  'Bottes de l\'ombre': '/assets/images/boots/bottes-ombre.png',
  'Bottes de la montagne': '/assets/images/boots/bottes-montagne.png',
  'Bottes du vent': '/assets/images/boots/bottes-vent.png',
  'Bottes de l\'enfer': '/assets/images/boots/bottes-enfer.png',
  'Bottes célestes': '/assets/images/boots/bottes-celestes.png',

  // Gants
  'Gants de force': '/assets/images/gloves/gants-force.png',
  'Gants de précision': '/assets/images/gloves/gants-precision.png',
  'Gants de l\'artisan': '/assets/images/gloves/gants-artisan.png',
  'Gants de foudre': '/assets/images/gloves/gants-foudre.png',
  'Gants de glace': '/assets/images/gloves/gants-glace.png',
  'Gants de l\'assassin': '/assets/images/gloves/gants-assassin.png',
  'Gants du berserker': '/assets/images/gloves/gants-berserker.png',
  'Gants de l\'éclipse': '/assets/images/gloves/gants-eclipse.png',
  'Gants du dragon': '/assets/images/gloves/gants-dragon.png',
  'Gants de l\'infini': '/assets/images/gloves/gants-infini.png',

  // Ceintures
  'Ceinture de puissance': '/assets/images/belts/ceinture-puissance.png',
  'Ceinture de résistance': '/assets/images/belts/ceinture-resistance.png',
  'Ceinture de l\'alchimiste': '/assets/images/belts/ceinture-alchimiste.png',
  'Ceinture de feu': '/assets/images/belts/ceinture-feu.png',
  'Ceinture de givre': '/assets/images/belts/ceinture-givre.png',
  'Ceinture de l\'ombre': '/assets/images/belts/ceinture-ombre.png',
  'Ceinture de la montagne': '/assets/images/belts/ceinture-montagne.png',
  'Ceinture du vent': '/assets/images/belts/ceinture-vent.png',
  'Ceinture de l\'enfer': '/assets/images/belts/ceinture-enfer.png',
  'Ceinture céleste': '/assets/images/belts/ceinture-celeste.png',

  // Jambières
  'Jambières de fer': '/assets/images/legs/jambieres-fer.png',
  'Jambières de cuir': '/assets/images/legs/jambieres-cuir.png',
  'Jambières de l\'explorateur': '/assets/images/legs/jambieres-explorateur.png',
  'Jambières de feu': '/assets/images/legs/jambieres-feu.png',
  'Jambières de givre': '/assets/images/legs/jambieres-givre.png',
  'Jambières de l\'ombre': '/assets/images/legs/jambieres-ombre.png',
  'Jambières de la montagne': '/assets/images/legs/jambieres-montagne.png',
  'Jambières du vent': '/assets/images/legs/jambieres-vent.png',
  'Jambières de l\'enfer': '/assets/images/legs/jambieres-enfer.png',
  'Jambières célestes': '/assets/images/legs/jambieres-celestes.png',

  // Pouvoirs
  'Manipulation Feu': '/assets/images/powers/manipulation-feu.png',
  'Manipulation Eau': '/assets/images/powers/manipulation-eau.png',
  'Manipulation Terre': '/assets/images/powers/manipulation-terre.png',
  'Manipulation Air': '/assets/images/powers/manipulation-air.png',
  'Manipulation Lumière': '/assets/images/powers/manipulation-lumiere.png',
  'Manipulation Ténèbres': '/assets/images/powers/manipulation-tenebres.png',
  'Manipulation Trou Noir': '/assets/images/powers/manipulation-trou-noir.png',
  'Manipulation du Temps': '/assets/images/powers/manipulation-temps.png',
  'Invocation des Ombres': '/assets/images/powers/invocation-ombres.png',
  'Transformation en Titan': '/assets/images/powers/transformation-titan.png',
};

// Image de secours si l'image spécifique n'est pas trouvée
const fallbackImages = {
  'Arme': '/assets/images/default/default-weapon.png',
  'Armure': '/assets/images/default/default-armor.png',
  'Accessoire': '/assets/images/default/default-accessory.png',
  'Bouclier': '/assets/images/default/default-shield.png',
  'Casque': '/assets/images/default/default-helmet.png',
  'Bottes': '/assets/images/default/default-boots.png',
  'Gants': '/assets/images/default/default-gloves.png',
  'Ceinture': '/assets/images/default/default-belt.png',
  'Jambières': '/assets/images/default/default-legs.png',
  'Pouvoir': '/assets/images/default/default-power.png'
};

// Fonction pour générer les données nécessaires
function generateEquipmentData() {
  const equipmentTypes = ['Arme', 'Armure', 'Accessoire', 'Bouclier', 'Casque', 'Bottes', 'Gants', 'Ceinture', 'Jambières', 'Pouvoir'];
  const rarities = ['Commun', 'Peu_commun', 'Rare', 'Épique', 'Légendaire', 'Mythique', 'Divin', 'Primordial', 'Éternel', 'Céleste'];
  const qualities = ['Endommagée', 'Normale', 'Supérieure', 'Avancée', 'Parfaite', 'Flamboyante', 'Divine', 'Immatérielle'];

  // Liste de noms possibles par type
  const namesByType = {
    'Arme': [
      'Épée du chaos', 'Hache du dragon', 'Dague de l\'ombre', 'Arc céleste', 'Marteau de guerre',
      'Lame sanguinaire', 'Glaive de lumière', 'Faux de l\'apocalypse', 'Épée longue de l\'éclipse', 'Lance du phénix'
    ],
    'Armure': [
      'Cuirasse de fer', 'Robe mystique', 'Armure d\'écailles', 'Plastron du chevalier', 'Manteau résistant',
      'Armure de la bête', 'Tunique de l\'errant', 'Harnais de glace', 'Plastron en adamantium', 'Cape des ombres'
    ],
    'Accessoire': [
      'Anneau de force', 'Bracelet du mage', 'Pendentif de vitalité', 'Charme ancien', 'Amulette runique',
      'Anneau de givre', 'Collier de la licorne', 'Bague de feu', 'Pendentif de l\'étoile', 'Bracelet de l\'infini'
    ],
    'Bouclier': [
      'Rempart infernal', 'Écu du gardien', 'Bouclier de cristal', 'Barrière magique', 'Défense royale',
      'Bouclier de l\'aube', 'Pavois de pierre', 'Bouclier de l\'abysse', 'Égide de l\'immortel', 'Bouclier du titan'
    ],
    'Casque': [
      'Heaume du champion', 'Couronne de sagesse', 'Casque d\'acier', 'Capuche d\'assassin', 'Visière ancestrale',
      'Casque du berserker', 'Masque de la bête', 'Heaume de la tempête', 'Couronne de glace', 'Casque du dragon'
    ],
    'Bottes': [
      'Bottes de vitesse', 'Bottes de furtivité', 'Bottes de l\'explorateur', 'Bottes de feu', 'Bottes de givre',
      'Bottes de l\'ombre', 'Bottes de la montagne', 'Bottes du vent', 'Bottes de l\'enfer', 'Bottes célestes'
    ],
    'Gants': [
      'Gants de force', 'Gants de précision', 'Gants de l\'artisan', 'Gants de foudre', 'Gants de glace',
      'Gants de l\'assassin', 'Gants du berserker', 'Gants de l\'éclipse', 'Gants du dragon', 'Gants de l\'infini'
    ],
    'Ceinture': [
      'Ceinture de puissance', 'Ceinture de résistance', 'Ceinture de l\'alchimiste', 'Ceinture de feu', 'Ceinture de givre',
      'Ceinture de l\'ombre', 'Ceinture de la montagne', 'Ceinture du vent', 'Ceinture de l\'enfer', 'Ceinture céleste'
    ],
    'Jambières': [
      'Jambières de fer', 'Jambières de cuir', 'Jambières de l\'explorateur', 'Jambières de feu', 'Jambières de givre',
      'Jambières de l\'ombre', 'Jambières de la montagne', 'Jambières du vent', 'Jambières de l\'enfer', 'Jambières célestes'
    ],
    'Pouvoir': [
      'Manipulation Feu', 'Manipulation Eau', 'Manipulation Terre', 'Manipulation Air', 'Manipulation Lumière',
      'Manipulation Ténèbres', 'Manipulation Trou Noir', 'Manipulation du Temps', 'Invocation des Ombres', 'Transformation en Titan'
    ]
  };

  // Calculer le nombre total de combinaisons possibles
  const totalNames = Object.values(namesByType).reduce((sum, names) => sum + names.length, 0);
  const possibilityNames = totalNames / equipmentTypes.length;
  const totalPossibilities = equipmentTypes.length * possibilityNames * rarities.length * qualities.length * 11;

  return {
    equipmentTypes,
    rarities,
    qualities,
    namesByType,
    totalPossibilities
  };
}

// Générer les données
const equipmentData = generateEquipmentData();

// Calculer le nombre total de combinaisons possibles
const totalPossibilities = equipmentData.totalPossibilities;

// Fonction pour choisir un élément basé sur des probabilités
const chooseWithProbability = (probabilities) => {
  const total = Object.values(probabilities).reduce((sum, prob) => sum + prob, 0);
  const random = Math.random() * total;
  let cumulative = 0;

  for (const [key, prob] of Object.entries(probabilities)) {
    cumulative += prob;
    if (random <= cumulative) {
      return key;
    }
  }
};

// État de l'application
let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let currentIndex = 0;
let filter = '';
let filterType = '';
let filterRarity = '';

// Référence aux éléments DOM
const equipmentDisplay = document.getElementById('equipment-display');
const inventoryCounter = document.getElementById('inventory-counter');
const progressionInfo = document.getElementById('progression-info');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const generateButton = document.getElementById('generate-button');
const searchInput = document.getElementById('search-input');
const typeFilter = document.getElementById('type-filter');
const rarityFilter = document.getElementById('rarity-filter');
const resetFiltersButton = document.getElementById('reset-filters');
const statsCount = document.getElementById('stats-count');
const statsTypes = document.getElementById('stats-types');
const statsRarities = document.getElementById('stats-rarities');
const statsValue = document.getElementById('stats-value');
// Variables pour l'index
let indexPage = 0;
const itemsPerPage = 20; // Nombre d'items par page de l'index
let itemsGenerator = null; // Remplace allPossibleItems
let currentPageItems = []; // Stocke les items de la page actuelle

// Référence aux éléments DOM de l'index
const indexModal = document.getElementById('index-modal');
const showIndexButton = document.getElementById('show-index');
const closeIndexButton = document.getElementById('close-index');
const indexGrid = document.getElementById('index-grid');
const indexPagination = document.getElementById('index-pagination');
const indexPrevButton = document.getElementById('index-prev');
const indexNextButton = document.getElementById('index-next');

// Générer la liste complète des équipements possibles
const generateAllPossibleItems = () => {
  // Au lieu de générer tous les items, on calcule simplement le nombre total
  let totalCount = 0;

  for (const type of equipmentData.equipmentTypes) {
    for (const name of equipmentData.namesByType[type]) {
      for (const rarity of equipmentData.rarities) {
        for (const quality of equipmentData.qualities) {
          for (let stars = 1; stars <= 11; stars++) {
            totalCount++;
          }
        }
      }
    }
  }

  return {
    totalCount,
    getItemsForPage: (page, itemsPerPage) => {
      const start = page * itemsPerPage;
      const end = start + itemsPerPage;
      const items = [];
      let currentIndex = 0;

      // Parcourir toutes les combinaisons possibles mais ne créer que celles de la page actuelle
      for (const type of equipmentData.equipmentTypes) {
        for (const name of equipmentData.namesByType[type]) {
          for (const rarity of equipmentData.rarities) {
            for (const quality of equipmentData.qualities) {
              for (let stars = 1; stars <= 11; stars++) {
                // Ne créer l'objet que s'il est dans la plage de la page actuelle
                if (currentIndex >= start && currentIndex < end) {
                  const item = {
                    id: `${type}-${name}-${rarity}-${quality}-${stars}`,
                    name,
                    type,
                    rarity,
                    quality,
                    stars,
                    owned: false // Par défaut, non possédé
                  };
                  items.push(item);
                }

                currentIndex++;
                // Si on a dépassé la fin de la page, on peut arrêter
                if (currentIndex >= end) {
                  break;
                }
              }
              if (currentIndex >= end) break;
            }
            if (currentIndex >= end) break;
          }
          if (currentIndex >= end) break;
        }
        if (currentIndex >= end) break;
      }

      return items;
    }
  };
};

// Vérifier si un item est dans l'inventaire
const checkIfOwned = () => {
  currentPageItems.forEach(item => {
    item.owned = inventory.some(invItem =>
      invItem.name === item.name &&
      invItem.type === item.type &&
      invItem.rarity === item.rarity &&
      invItem.quality === item.quality &&
      invItem.stars === item.stars
    );
  });
};

// Afficher la page actuelle de l'index
const renderIndexPage = () => {
  indexGrid.innerHTML = '';

  // Obtenir les items pour la page actuelle
  if (!itemsGenerator) {
    itemsGenerator = generateAllPossibleItems();
  }

  currentPageItems = itemsGenerator.getItemsForPage(indexPage, itemsPerPage);
  checkIfOwned();

  currentPageItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `bg-gray-800 rounded p-3 flex flex-col items-center relative`;

    // Ajouter le cadenas pour les items non possédés
    if (!item.owned) {
      const lockIcon = document.createElement('div');
      lockIcon.className = 'absolute top-2 right-2 text-gray-400';
      lockIcon.innerHTML = feather.icons.lock.toSvg({ width: 16, height: 16 });
      itemDiv.appendChild(lockIcon);
      // Obtenir l'URL de l'image
      const imageUrl = fallbackImages[item.type];
      let itemBGROTATE;
      let imageRotate;
      if (item.rarity === 'Mythique') {
        imageRotate = '/assets/bg-icons/rotateBG.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Divin') {
        imageRotate = '/assets/bg-icons/rotateBG2.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Primordial') {
        imageRotate = '/assets/bg-icons/rotateBG3.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Éternel') {
        imageRotate = '/assets/bg-icons/rotateBG4.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Céleste') {
        imageRotate = '/assets/bg-icons/rotateBG.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG2.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-14 h-14 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG3.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-12 h-12 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG4.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-10 h-10 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG5.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-8 h-8 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      }

      // Ajouter l'image
      const itemImage = document.createElement('div');
      itemImage.className = 'w-12 h-12 mb-2';
      itemImage.innerHTML = `<img src="${imageUrl}" alt="${item.name}" class="glowing-image-${(item.rarity).toLowerCase()} w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
      itemDiv.appendChild(itemImage);

      const itemName = document.createElement('div');
      itemName.className = `font-bold text-sm mb-1 text-center rarity-${(item.rarity).toLowerCase()} ${(item.rarity).toLowerCase()}-item`;
      itemName.style.color = rarityColors[item.rarity] || '#ffffff';
      itemName.textContent = "???";

      const itemType = document.createElement('div');
      itemType.className = 'text-xs text-gray-400 mb-1';
      itemType.textContent = "???";

      const itemDetails = document.createElement('div');
      itemDetails.className = 'text-xs text-gray-300 mb-1';
      itemDetails.textContent = `??? • ???`;

      const itemStars = document.createElement('div');
      itemStars.className = 'text-xs';
      const starColor = item.rarity === 'Céleste' ? '#280f3d' :
        item.rarity === 'Divin' ? '#ffd700' :
          item.rarity === 'Mythique' ? '#e01a6b' :
            '#ffcc00';

      for (let i = 0; i < item.stars; i++) {
        const star = document.createElement('span');
        star.className = `rarity-${(item.rarity).toLowerCase()} ${(item.rarity).toLowerCase()}-item`
        star.style.color = starColor;
        star.textContent = '★';
        itemStars.appendChild(star);
      }

      for (let i = item.stars; i < 11; i++) {
        const star = document.createElement('span');
        star.className = 'text-gray-600';
        star.textContent = '★';
        itemStars.appendChild(star);
      }

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemType);
      itemDiv.appendChild(itemDetails);
      itemDiv.appendChild(itemStars);
    } else {
      // Obtenir l'URL de l'image
      const imageUrl = /*equipmentImages[item.name] ||*/ fallbackImages[item.type];
      let itemBGROTATE;
      let imageRotate;
      if (item.rarity === 'Mythique') {
        imageRotate = '/assets/bg-icons/rotateBG.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Divin') {
        imageRotate = '/assets/bg-icons/rotateBG2.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Primordial') {
        imageRotate = '/assets/bg-icons/rotateBG3.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Éternel') {
        imageRotate = '/assets/bg-icons/rotateBG4.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      } else if (item.rarity === 'Céleste') {
        imageRotate = '/assets/bg-icons/rotateBG.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-16 h-16 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG2.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-14 h-14 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG3.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-12 h-12 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG4.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-10 h-10 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
        imageRotate = '/assets/bg-icons/rotateBG5.png';
        itemBGROTATE = document.createElement('div');
        itemBGROTATE.className = 'w-8 h-8 mb-2 absolute';
        itemBGROTATE.style = 'top:0;'
        itemBGROTATE.innerHTML = `<img src="${imageRotate}" alt="${item.name}" class="celeste-rarity w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
        itemDiv.appendChild(itemBGROTATE);
      }

      // Ajouter l'image
      const itemImage = document.createElement('div');
      itemImage.className = 'w-12 h-12 mb-2';
      itemImage.innerHTML = `<img src="${imageUrl}" alt="${item.name}" class="glowing-image-${(item.rarity).toLowerCase()} w-full h-full object-contain" onerror="this.src='${fallbackImages['default']}';">`;
      itemDiv.appendChild(itemImage);

      const itemName = document.createElement('div');
      itemName.className = `font-bold text-sm mb-1 text-center rarity-${(item.rarity).toLowerCase()} ${(item.rarity).toLowerCase()}-item`;
      itemName.style.color = rarityColors[item.rarity] || '#ffffff';
      itemName.textContent = item.name;

      const itemType = document.createElement('div');
      itemType.className = 'text-xs text-gray-400 mb-1';
      itemType.textContent = item.type;

      const itemDetails = document.createElement('div');
      itemDetails.className = 'text-xs text-gray-300 mb-1';
      itemDetails.textContent = `${item.rarity} • ${item.quality}`;

      const itemStars = document.createElement('div');
      itemStars.className = 'text-xs';
      const starColor = item.rarity === 'Céleste' ? '#280f3d' :
        item.rarity === 'Divin' ? '#ffd700' :
          item.rarity === 'Mythique' ? '#e01a6b' :
            '#ffcc00';

      for (let i = 0; i < item.stars; i++) {
        const star = document.createElement('span');
        star.className = `rarity-${(item.rarity).toLowerCase()} ${(item.rarity).toLowerCase()}-item`
        star.style.color = starColor;
        star.textContent = '★';
        itemStars.appendChild(star);
      }

      for (let i = item.stars; i < 11; i++) {
        const star = document.createElement('span');
        star.className = 'text-gray-600';
        star.textContent = '★';
        itemStars.appendChild(star);
      }

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemType);
      itemDiv.appendChild(itemDetails);
      itemDiv.appendChild(itemStars);
    }

    indexGrid.appendChild(itemDiv);
  });

  // Mise à jour de la pagination
  const totalPages = Math.ceil(itemsGenerator.totalCount / itemsPerPage);
  indexPagination.textContent = `Page ${indexPage + 1} / ${totalPages}`;

  // Activer/désactiver les boutons de navigation
  indexPrevButton.disabled = indexPage === 0;
  indexNextButton.disabled = indexPage >= totalPages - 1;
};

// Ouvrir l'index
const openIndex = () => {
  // Initialiser le générateur d'items si ce n'est pas déjà fait
  if (!itemsGenerator) {
    itemsGenerator = generateAllPossibleItems();
  }

  // Afficher la première page
  indexPage = 0;
  renderIndexPage();

  // Afficher la modal
  indexModal.classList.remove('hidden');
};

// Fermer l'index
const closeIndex = () => {
  indexModal.classList.add('hidden');
};

// Page précédente de l'index
const prevIndexPage = () => {
  if (indexPage > 0) {
    indexPage--;
    renderIndexPage();
  }
};

// Page suivante de l'index
const nextIndexPage = () => {
  if (!itemsGenerator) {
    itemsGenerator = generateAllPossibleItems();
  }

  const totalPages = Math.ceil(itemsGenerator.totalCount / itemsPerPage);
  if (indexPage < totalPages - 1) {
    indexPage++;
    renderIndexPage();
  }
};

// Générer un ID unique
const generateId = () => Math.random().toString(36).substr(2, 9);

// Peuplement des sélecteurs de filtre
equipmentData.equipmentTypes.forEach(type => {
  const option = document.createElement('option');
  option.value = type;
  option.textContent = type;
  typeFilter.appendChild(option);
});

equipmentData.rarities.forEach(rarity => {
  const option = document.createElement('option');
  option.value = rarity;
  option.textContent = rarity;
  rarityFilter.appendChild(option);
});

// Générateur d'équipement aléatoire
const generateRandomEquipment = () => {
  const type = equipmentData.equipmentTypes[Math.floor(Math.random() * equipmentData.equipmentTypes.length)];
  const rarity = chooseWithProbability(rarityProbabilities);
  const quality = chooseWithProbability(qualityProbabilities);
  const stars = parseInt(chooseWithProbability(starProbabilities));

  const names = equipmentData.namesByType[type] || ['Objet mystérieux'];
  const name = names[Math.floor(Math.random() * names.length)];

  // Statistiques basées sur la rareté
  const statMultiplier = equipmentData.rarities.indexOf(rarity) + 1;
  const qualityMultiplier = equipmentData.qualities.indexOf(quality) + 0.8;

  return {
    id: generateId(),
    name,
    type,
    rarity,
    quality,
    stars,
    starColor: rarity === 'Primordial' ? '#00ffff' : rarity === 'Éternel' ? '#ff00ff' : rarity === 'Céleste' ? '#280f3d' : rarity === 'Divin' ? '#ffd700' : rarity === 'Mythique' ? '#e01a6b' : '#ffcc00',
    attack: type === 'Arme' ? Math.floor(10 * statMultiplier * qualityMultiplier) : undefined,
    defense: ['Armure', 'Bouclier', 'Casque'].includes(type) ? Math.floor(8 * statMultiplier * qualityMultiplier) : undefined,
    magic: ['Arme', 'Accessoire'].includes(type) ? Math.floor(6 * statMultiplier * qualityMultiplier) : undefined,
    strength: Math.random() > 0.5 ? Math.floor(3 * statMultiplier * qualityMultiplier) : undefined,
    agility: Math.random() > 0.5 ? Math.floor(3 * statMultiplier * qualityMultiplier) : undefined,
    intelligence: Math.random() > 0.5 ? Math.floor(3 * statMultiplier * qualityMultiplier) : undefined,
    vitality: Math.random() > 0.5 ? Math.floor(4 * statMultiplier * qualityMultiplier) : undefined,
    critChance: Math.random() > 0.7 ? Math.floor(2 * statMultiplier * qualityMultiplier) : undefined,
    critDamage: Math.random() > 0.7 ? Math.floor(5 * statMultiplier * qualityMultiplier) : undefined,
    level: Math.floor(5 * statMultiplier * qualityMultiplier),
    requiredLevel: Math.floor(3 * statMultiplier),
    description: `Un${type === 'Arme' || type === 'Armure' ? 'e' : ''} ${type.toLowerCase()} de qualité ${quality.toLowerCase()}.`,
    specialEffect: Math.random() > 0.7 ? "Effet spécial à découvrir" : undefined,
    durability: Math.floor(50 * qualityMultiplier),
    maxDurability: Math.floor(50 * qualityMultiplier),
    enhancementLevel: 0,
    maxEnhancementLevel: Math.floor(equipmentData.rarities.indexOf(rarity) + 3),
    powerScore: Math.floor(100 * statMultiplier * qualityMultiplier),
    sellValue: Math.floor(50 * statMultiplier * qualityMultiplier),
  };
};

const isEquipmentUnique = (newEquipment) => {
  return !inventory.some(item =>
    item.name === newEquipment.name &&
    item.type === newEquipment.type &&
    item.rarity === newEquipment.rarity &&
    item.quality === newEquipment.quality &&
    item.stars === newEquipment.stars
  );
};

const generateEquipment = () => {
  let newEquipment;
  do {
    newEquipment = generateRandomEquipment();
  } while (!isEquipmentUnique(newEquipment));

  inventory.push(newEquipment);
  currentIndex = inventory.length - 1;
  localStorage.setItem('inventory', JSON.stringify(inventory));
  updateUI();

  // Mettre à jour l'index si ouvert
  if (!indexModal.classList.contains('hidden')) {
    // Pas besoin de vérifier la longueur, puisque nous utilisons maintenant le générateur
    renderIndexPage(); // Cette fonction appelle déjà checkIfOwned
  }
};

// Filtrer l'inventaire
const getFilteredInventory = () => {
  return inventory.filter(item => {
    const nameMatch = item.name.toLowerCase().includes(filter.toLowerCase());
    const typeMatch = filterType ? item.type === filterType : true;
    const rarityMatch = filterRarity ? item.rarity === filterRarity : true;
    return nameMatch && typeMatch && rarityMatch;
  });
};

// Navigation dans l'inventaire
const goToPrevious = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
};

const goToNext = () => {
  const filteredInventory = getFilteredInventory();
  if (currentIndex < filteredInventory.length - 1) {
    currentIndex++;
    updateUI();
  }
};

// Réinitialiser les filtres
const resetFilters = () => {
  filter = '';
  filterType = '';
  filterRarity = '';
  searchInput.value = '';
  typeFilter.value = '';
  rarityFilter.value = '';
  currentIndex = 0;
  updateUI();
};

// Mettre à jour les statistiques
const updateStats = () => {
  statsCount.textContent = inventory.length;
  statsTypes.textContent = new Set(inventory.map(item => item.type)).size;
  statsRarities.textContent = new Set(inventory.map(item => item.rarity)).size;
  statsValue.textContent = inventory.reduce((sum, item) => sum + (item.sellValue || 0), 0) + ' or';
};

// Rendu de l'équipement
const renderEquipment = (equipment) => {
  if (!equipment) {
    equipmentDisplay.innerHTML = '<div class="p-6 text-center">Aucun équipement trouvé</div>';
    return;
  }

  // Obtenir l'URL de l'image
  const imageUrl = /*equipmentImages[equipment.name] ||*/ fallbackImages[equipment.type];
  let imageRotate = '';

  let html = `<div class="p-6 mt-12 bg-gray-800 rounded-lg shadow-lg relative" style="z-index:1;">`
  if (equipment.rarity == 'Mythique') {
    imageRotate = '/assets/bg-icons/rotateBG.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-40 h-40 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
  } else if (equipment.rarity == 'Divin') {
    imageRotate = '/assets/bg-icons/rotateBG2.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-40 h-40 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
  } else if (equipment.rarity == 'Primordial') {
    imageRotate = '/assets/bg-icons/rotateBG3.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-40 h-40 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
  } else if (equipment.rarity == 'Éternel') {
    imageRotate = '/assets/bg-icons/rotateBG4.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-40 h-40 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
  } else if (equipment.rarity == 'Céleste') {
    imageRotate = '/assets/bg-icons/rotateBG.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-40 h-40 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
    imageRotate = '/assets/bg-icons/rotateBG2.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-36 h-36 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
    imageRotate = '/assets/bg-icons/rotateBG3.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-32 h-32 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
    imageRotate = '/assets/bg-icons/rotateBG4.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-28 h-28 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
    imageRotate = '/assets/bg-icons/rotateBG5.png';
    html += ` <div class="ml-4 absolute p-6" style="border-radius:50%; top:-60px; right:-60px;">
                <img src="${imageRotate}" class="celeste-rarity w-24 h-24 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
  } else {
    html += ` <div class="ml-4 absolute bg-gray-800 p-6" style="border-radius:50%; top:-30px; right:-30px;">
                <img src="${imageUrl}" alt="${equipment.name}" class="w-24 h-24 object-contain" onerror="this.src='${fallbackImages['default']}';">
              </div>
              `
  }
  html += `
          <div class="ml-4 absolute p-6" style="border-radius:50%; top:-30px; right:-30px;">
            <img src="${imageUrl}" alt="${equipment.name}" class="glowing-image-${(equipment.rarity).toLowerCase()} w-24 h-24 object-contain" onerror="this.src='${fallbackImages['default']}';">
          </div>
          <div class="flex flex-col items-left mb-4">
            <h2 
              class="text-2xl font-bold mb-1 rarity-${(equipment.rarity).toLowerCase()} ${(equipment.rarity).toLowerCase()}-item"
              style="color: ${rarityColors[equipment.rarity] || '#ffffff'}"
            >
              ${equipment.name}
            </h2>
            <div class="flex items-center space-x-2 mb-2">
              <span class="text-sm text-gray-400">${equipment.type}</span>
              <span class="text-sm" style="color: ${rarityColors[equipment.rarity]}">
                ${equipment.rarity}
              </span>
              <span class="text-sm text-gray-400">(${equipment.quality})</span>
            </div>
            <div class="mb-3">
      `;

  // Afficher les étoiles
  for (let i = 0; i < equipment.stars; i++) {
    html += `<span style="color: ${equipment.starColor}" class="${(equipment.rarity).toLowerCase()}-item">★</span>`;
  }
  for (let i = equipment.stars; i < 11; i++) {
    html += `<span class="text-gray-600">★${!(i + 1 < 11) ? `(${equipment.stars})` : ''}</span>`;
  }

  html += `
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-t border-gray-700 pt-4">
      `;

  // Afficher les stats
  if (equipment.attack !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #195F53;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-green-500">
          <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,1)" style=""><path d="M146.326 6.15l87.813 128.725-60.87-39.916 34.925 62.864L38.56 48.06h-.003c40.207 71.33 82.046 134.913 129.23 191.764L303.94 103.67c-45.164-37.052-96.674-69.324-157.614-97.52zm347.145 9.496L372.983 61.713l-214.59 214.09 13.213 13.215L383.367 77.75l78.078-29.85-29.402 78.56-211.746 211.25 13.213 13.214 214.61-214.106 45.35-121.172zM407.177 89.13l-259.95 259.95c-11.956-17.32-11.687-40.444.25-57.764l-31.26-31.255c-28.637 34.832-28.588 85.102.167 119.864L52.336 443.97c-2.528-.95-5.184-1.43-7.842-1.43-5.74 0-11.476 2.216-15.908 6.647-8.864 8.865-8.866 22.953 0 31.82 8.864 8.863 22.954 8.863 31.818 0 6.512-6.513 8.234-15.844 5.178-23.853l64.057-64.056c34.788 28.437 85.12 28.65 119.817.203l-31.262-31.26c-17.28 11.84-40.352 11.907-57.68.18l259.876-259.874-13.214-13.215zm-2.196 117.01L268.186 342.937c55.29 48.057 118.235 90.138 192.464 127.216L398.783 351.41l102.78 68.85-117.75-164.645 86.816 42.908c-20.895-33.04-42.523-63.772-65.65-92.382z" fill="#195F53"/></g></svg>
            <span class="text-green-500">Attaque  :  +${equipment.attack}</span>
          </div>
        `;
  }

  if (equipment.defense !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #4287f5;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-blue-500">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#4287f5" d="M162 35.75l-94.49 27.1c-12.05 6.3-23.47 23.9-31.01 46.35-6.07 18.2-9.62 38.9-10.93 58.3L136.7 112zm188 .1L375.4 112l111 55.6c-1.3-19.3-4.9-40.2-10.9-58.3-5.7-17.05-13.6-31.35-22.5-40.05-2.7-2.8-5.5-4.9-8.4-6.4zm-172.9 11.5l-25.7 77.45-92.9 46.4 14.08 53.5 88.82 44.4 94.6-15.9 94.6 15.9 88.8-44.4 14.1-53.5-92.8-46.4-25.8-77.35h-10.5l-59.3 73.95-.1 61.1h-18.1l.1-61-59.3-74.15zM78.65 247.7l22.05 83.9 146.2-43.8v-14.7l-88.4 14.7zm354.75 0l-80 40.1-88.4-14.7v14.7l146.3 43.8zm-186.5 58.7l-31.6 9.6-35.1 70.2 66.7-33.3zm18.1 0v46.5l66.9 33.4-35.2-70.3zM191.7 323l-86.4 26 25.3 96.3zm128.6.1l61.1 122.1 25.3-96.2zm-55.3 50l.1 43.2 100.7 37.8-20.4-40.8zm-18.1 0l-80.2 40.1-20.5 40.9L247 416.3zm.1 62.4l-81.6 30.6 81.6 10.2zm18.1 0v40.7l81.7-10.2z"/></svg>
            <span class="text-blue-500">Défense  :  +${equipment.defense}</span>
          </div>
        `;
  }

  if (equipment.magic !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #7C55DB;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-purple-500">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,2)" style=""><path d="M237.4 20.73c-6.1 42.1-26.8 64.2-63.9 64 31.6 4.5 63.8 8 63.9 64.07-.6-46.1 24.5-63.07 64.1-64.07-38-1.5-64.9-16.3-64.1-64zm127.8 11.58c-9.1 14.25-20.8 21.29-38.9 10.28 14.9 11.79 18.6 24.76 10.2 38.97 8.9-11.18 17.5-22.73 39-10.27-17.8-10.06-18.8-23.57-10.3-38.98zM59.68 41.69c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.52-.3-20.5 10.9-28.12 28.5-28.52-16.9-.7-28.9-7.3-28.5-28.5zM431 66.28c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.52-.3-20.5 10.9-28.12 28.5-28.52-16.9-.7-28.9-7.3-28.5-28.5zM120.3 116.4c-15.8 53.7-47.76 48-79.35 43.4C76.6 170 90.3 197.1 84.28 239.2c12.66-46 42.62-52.6 79.42-43.4-37.6-12.1-56.9-35.4-43.4-79.4zm187 5c-8.8 61.6-39.3 94-93.6 93.7 46.2 6.5 93.6 11.7 93.6 93.7-.8-67.3 35.9-92.2 93.8-93.7-55.5-2.2-94.9-23.9-93.8-93.7zm136.8 38.3c-13.1 21.6-29.5 28.8-49.7 20.1 16.3 9.7 33 19.1 20.1 49.6 10.3-25.2 27.9-28.7 49.7-20-20.3-9.7-31.6-23.9-20.1-49.7zM50.7 243.2c9.16 16.7 7.63 30.1-5.61 40 12.46-6.9 24.85-14.3 39.91 5.6-12.57-16.2-8.2-29 5.61-40-13.92 9.7-27.47 11.6-39.91-5.6zm137.2.3c11.4 26.8-.5 41.3-21.7 50.9 22.7-8.5 40.8-4.5 50.9 21.7-12.7-31.8 4.8-41.2 21.7-50.9-21 8.5-37.8.9-50.9-21.7zm228 12.6c-26.6 64.7-68.7 91.7-127.8 76.4 48.6 19.8 98.8 38.5 76.4 127.9 17.5-73.7 64.4-90.7 127.9-76.5-59.9-17.5-96.9-52-76.5-127.8zM99.94 295.5c15.66 57.8.86 98.1-47.32 118.5 43.46-11.8 87.38-25.2 118.68 47.4-26.4-59.3-3.4-95.4 47.3-118.8-50 19.2-93.1 15-118.66-47.1zm169.36 61c-21.8 20.6-43 23.6-63.2 7.3 15.5 16.3 31.6 32.4 7.2 63.3 19.8-25.6 41.2-24.1 63.3-7.3-20.2-17.4-28.6-37.5-7.3-63.3zM443.2 404c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.5-.3-20.5 10.9-28.1 28.5-28.5-16.9-.7-28.9-7.3-28.5-28.5zm-169.7 36c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.5-.3-20.5 10.9-28.1 28.5-28.5-16.9-.7-28.9-7.3-28.5-28.5z" fill="#7C55DB"/></g></svg>
            <span class="text-purple-500">Magie  :  +${equipment.magic}</span>
          </div>
        `;
  }

  if (equipment.strength !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #C13E41;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-red-500">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#C13E41" d="M329.8 235.69l62.83-82.71 42.86 32.56-62.83 82.75zm-12.86-9.53l66.81-88-45-34.15-66.81 88zm-27.48-97.78l-19.3 39.57 57-75-42.51-32.3-36.24 47.71zm-20.74-73.24l-46.64-35.43-42 55.31 53.67 26.17zm107 235.52l-139-102.71-9.92.91 4.56 2 62.16 138.43-16.52 2.25-57.68-128.5-40-17.7-4-30.84 39.41 19.42 36.36-3.33 17-34.83-110.9-54.09-80.68 112.51L177.6 346.67l-22.7 145.62H341V372.62l35.29-48.93L387 275.77z"/></></svg>
            <span class="text-red-500">Force  :  +${equipment.strength}</span>
          </div>
        `;
  }

  if (equipment.agility !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #30B98A;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-green-400">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,2)" style=""><path d="M135.6 38.35l-17 6.17c6.2 16.99 9.1 34.17 2.3 51.32 4.5 4.76 8.9 9.46 13.3 14.06 12.5-24.41 9.2-50.15 1.4-71.55zm-25.8 71.95c-6.8 2.6-12.82 5.9-18.27 9.7 27.17 29.8 50.17 61.6 63.77 92.1 12.7 28.7 17.4 57.3 7.2 81.1l219.8 158.9c27.5-1.4 45.3-8.1 57.5-17.5 12.8-9.8 20.1-22.9 25.4-38.4-2.9-3.2-6.1-6.3-9.6-9.4-25.7 4.5-48.2-.6-66.9-12.4-19.5-12.2-34.8-31.1-47.8-53-24.5-41.3-41-94-57.7-137.5-44.5 4.5-77.1-1.7-102.7-14.2-30.6-15-50.7-38.1-70.7-59.4zm-31.92 21.5c-4.57 4.9-8.65 10.3-12.34 16.1-10.56 16.7-17.8 37-23.99 57.9l105.85 76.5c5.7-17.1 2.3-38.5-8.6-62.9-12.5-27.9-34.6-58.6-60.92-87.6zm238.92 47c-5.2 1-10.2 1.9-15.2 2.7 3.7 9.7 7.4 19.7 11.1 29.8l26 13.1c-6.9-16.1-13.7-31.5-21.9-45.6zm-285.29 42c-2.72 2.9-4.48 5.9-5.39 9-1.23 4-1.07 8.4 1.01 13.8L266 398c21.8 14 41.4 25.6 59.2 35.1zm290.29 15.3c6.9 18.3 14.2 36.4 22.3 53.1l33.2 14.7c-11.2-18.1-19.8-36.1-27.5-53.7zm36.2 78.8c11.7 19.2 25 34.7 40.3 44.3 11 6.9 22.9 10.9 36.8 11.3-14.8-12.4-27.1-25.2-37.6-38.2zm119.8 98.4c-5.9 13.3-14.2 25.8-27 35.6-11.4 8.7-26 15.2-44.7 18.6 17.5 4.9 31.2 6.5 41.6 6.1 14.9-.6 23.4-4.7 28.6-8.8 5.2-4.1 7.2-8.2 8.1-10.2 3.5-7.8 3.2-19.9-2.5-33.3-1.1-2.6-2.5-5.3-4.1-8z" fill="#30B98A"/></g></svg>
            <span class="text-green-400">Agilité  :  +${equipment.agility}</span>
          </div>
        `;
  }

  if (equipment.intelligence !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #5999E6;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-blue-400">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,2)" style=""><path d="M241.063 54.406c-2.31.008-4.61.032-6.907.094-1.805.05-3.61.106-5.406.188-8.814 1.567-12.884 5.426-15.094 9.843-2.435 4.87-2.34 11.423.375 17.25 2.717 5.83 7.7 10.596 14.657 12.376 6.958 1.78 16.536.86 29.125-7.187l10.063 15.75c-15.818 10.11-31.124 12.777-43.813 9.53-12.688-3.247-22.103-12.123-26.968-22.563-4.584-9.836-5.426-21.376-1.03-31.624-42.917 6.94-81.777 23.398-111.626 46.562-9.81 10.688-10.77 23.11-6.47 31.594 4.83 9.526 16.21 16.48 38.97 9.28l5.656 17.813c-28.58 9.04-52.137-.588-61.28-18.625-2.23-4.397-3.592-9.156-4.127-14.063-4.814 5.712-9.16 11.658-13 17.844l.126.06c-8.614 19.616-8.81 33.203-5.376 42.032 3.436 8.83 10.635 14.44 21.72 17.532 22.168 6.18 58.065-1.277 83.343-20.156 10.82-8.08 21.077-27.677 21.97-42.875.445-7.6-1.165-13.604-4.345-17.438-3.18-3.834-8.272-6.703-18.813-6.594l-.187-18.686c14.487-.15 26.25 4.754 33.375 13.344 7.124 8.59 9.26 19.652 8.625 30.468-1.27 21.633-12.595 44.172-29.438 56.75-29.876 22.314-69.336 31.606-99.53 23.188-13.988-3.9-26.37-12.386-32.75-25.53-9.546 45.446 4.323 87.66 30.718 116.874 3.45 3.82 7.122 7.43 10.97 10.78-2.754-7.887-4.016-16.1-3.72-24.093.53-14.325 6.082-28.346 17.22-38.03 9.134-7.946 21.752-12.53 36.843-12.5 1.006 0 2.034.018 3.062.06 2.35.1 4.763.304 7.22.626l-2.44 18.532c-15.588-2.048-25.705 1.522-32.436 7.375-6.73 5.854-10.443 14.614-10.813 24.625-.74 20.024 12.07 43.406 39.69 50.188l-.032.188c27.192 5.19 57.536.372 88-18.22.018-.012.043-.017.062-.03 6.34-4.45 9.755-8.808 11.438-12.563 1.985-4.432 1.943-8.292.53-12.438-2.824-8.29-12.94-16.812-22.218-19.187-15.002-3.84-24.532 1.436-29 7.72-4.468 6.28-4.74 12.45 2.156 17.81l-11.47 14.75c-14.187-11.033-15.092-30.487-5.905-43.405 6.892-9.688 18.985-16.326 33.564-16.75.607-.018 1.228-.036 1.844-.03 4.306.03 8.79.622 13.437 1.81 15.505 3.97 29.84 15.277 35.28 31.25 1.416 4.155 2.09 8.69 1.876 13.314 16.71-8.538 34.332-16.12 52.282-21.814 30.156-13.78 43.23-37.938 42.72-58.28-.515-20.493-13.187-37.74-42.376-40.626l1.844-18.594c36.666 3.626 58.462 29.848 59.188 58.75.422 16.84-5.754 34.363-18.188 49.28 16.072-1.8 32.044-1.495 47.53 1.627-3.152-6.472-4.68-13.478-4.467-20.438.677-22.036 19.42-42.593 48.875-42.906 1.963-.022 3.974.053 6.03.218l-1.5 18.625c-24.927-1.998-34.3 11.086-34.718 24.656-.412 13.42 8.545 28.442 34.22 30.436 28.3.25 48.588-15.098 58.53-37.906 13.31-30.536 6.997-76.317-34.844-118.188-.792-.793-1.578-1.593-2.375-2.375-.444 3.792-1.424 7.443-2.842 10.844-7.25 17.39-24.233 29.128-41.875 32.407-24.335 4.522-44.29-5.347-53.5-20.406-9.21-15.057-6.792-36.35 9.78-47.56l10.47 15.5c-8.913 6.028-9.28 14.19-4.313 22.31 4.967 8.122 16.17 15.156 34.156 11.814 11.306-2.102 23.896-11.33 28.03-21.25 2.07-4.96 2.47-9.862.408-15.47-1.675-4.555-5.187-9.764-11.72-15.25l-.187-.155c-27.316-20.587-56.338-35.393-85.75-45.157.018.032.045.06.063.093 6.684 12.22 7.18 26.082 3.063 38.344-8.233 24.525-34.07 43.848-66.032 42.78-6.948-.23-13.56 3.12-19.186 9.657-5.627 6.537-9.735 16.113-10.688 26.313-1.905 20.4 6.923 42.886 41.344 54L277 258.28c-41.083-13.264-56.83-45.546-54.22-73.5 1.307-13.975 6.706-26.962 15.157-36.78 8.452-9.818 20.475-16.603 33.97-16.156 24.04.802 42.323-14.084 47.687-30.063 2.682-7.988 2.335-15.937-1.75-23.405-3.968-7.252-11.83-14.423-25.906-19.656-17.114-2.967-34.16-4.367-50.875-4.314zM342.28 306.344c-41.915 3.41-87.366 23.4-125.28 46.562-55.98 34.198-114.89 26.733-156.688-4.28 16.444 58.844 74.712 70.788 135.5 55.905 6.083-2.285 12.06-6.538 17.157-12.03 7.057-7.607 12.17-17.47 13.78-25.625l18.344 3.625c-2.445 12.383-9.078 24.666-18.406 34.72-8.95 9.645-20.61 17.35-34.094 19.374-6.766 15.07-12.334 29.68-14.594 39.906-3.55 16.06 14.206 22.225 22.156 6.03 19.022-38.743 45.87-73.23 79.406-102.967 26.064-17.153 48.406-38.303 62.72-61.22z" fill="#5999E6"/></g></svg>
            <span class="text-blue-400">Intélligence  :  +${equipment.intelligence}</span>
          </div>
        `;
  }

  if (equipment.vitality !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #A6731C;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-yellow-500">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,2)" style=""><path d="M372.48 31.215c-77.65 0-116.48 65.73-116.48 65.73s-38.83-65.72-116.48-65.72c-37.14 0-107.77 33.72-107.77 125.13 0 161.24 224.25 324.43 224.25 324.43s224.25-163.19 224.25-324.43c0-91.42-70.63-125.13-107.77-125.14zm-145.492 115.02h60.698v79.415h79.238v60.7h-79.238v79.884h-60.698V286.35h-80.064v-60.7h80.064z" fill="#A6731C"/></g></svg>
            <span class="text-yellow-500">Vitalité  :  +${equipment.vitality}</span>
          </div>
        `;
  }

  if (equipment.critChance !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #D5A527;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-yellow-400">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,2)" style=""><path d="M105.186 26.426c-38.314.06-62.13 26.334-31.37 72.994C6.192 97.785-9.36 188.75 62.29 218.39c54.838 22.684 82.008-6.012 142.985 15.008-64.015-7.88-119.143 21.696-153.814 66.6-38.507 49.87-24.104 120.148 40.41 100.332-9.024 67.12 62.385 100.137 103.907 47.166 35.793-45.66 15.51-103.756 41.842-182.885 7.1 61.706-5.617 108.762 11.573 166.478 21.393 71.83 103.075 75.605 118.537 6.34 55.84 51.31 95.82-9.41 75.754-76.643-17.993-60.285-90.76-98.2-167.65-118.703 72.808-3.032 108.846 44.51 167.78 30.084 72.446-17.734 64.365-108.426-10.823-128.922 45.767-54.918-19.446-110.047-87.18-93.117-57.113 14.275-90.85 71.977-101.928 143.33-5.55-65.618-28.823-120.138-81.03-150.316-19.64-11.353-40.05-16.74-57.466-16.714z" fill="#D5A527"/></g></svg>
            <span class="text-yellow-400">Crit-Chance  :  +${equipment.critChance}%</span>
          </div>
        `;
  }

  if (equipment.critDamage !== undefined) {
    html += `
          <div style="box-shadow: inset 0 -10px 13px -10px #ffffff;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-white" style="box-shadow: inset 0 -10px 13px -10px #fff;">
            <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,1)" style=""><path d="M191.016 21.223l30.134 64.965-118.543-63.64 59.25 77.796-123.93-74.23L139.96 160.796l-86.446-49.315 69.675 89.41-41.096-16.087 55.174 59.226c-.14-2.69-.21-5.4-.21-8.124 0-42.632 17.186-81.3 44.98-109.478 35.214-25.46 80.616-19.796 119.876-1.115 11.515 5.478 22.556 12.13 32.926 19.515l23.685 19.252c11.312 10.59 21.05 21.986 28.627 33.607l77.15-68.765.01-.008c17.818-15.805 23.727-28.155 25.663-43.726 1.432-11.527-.004-26.39-1.815-43.502L368.84 147.262l-12.75-13.674 13.353-11.815c-12.63-8.46-26.75-14.87-41.884-18.78L260.17 30.726l22.723 63.59-91.88-73.094zm46.02 106.662c-15.684.07-30.484 4.126-43.352 13.195-23.513 24.63-37.94 58.012-37.94 94.826 0 75.94 61.36 137.3 137.3 137.3 75.938 0 137.296-61.36 137.296-137.3 0-15.76-2.652-30.89-7.522-44.976l-40.46 36.064-5.604-10.443c-14.45-26.928-47.06-57.324-82.87-74.363-19.023-9.05-38.534-14.383-56.847-14.302zm-104.73 173.053l-44.15 39.156 87.63 98.812 44.15-39.158-14.5-16.348-24.225 21.504-51.17-57.818-6.18-6.982 24.146-21.463-15.7-17.702zm34.274 26.197l-16.367 14.55 32.59 36.82 18.554-16.47c-13.347-9.727-25.097-21.517-34.777-34.9zm-60.207 61.668L75.867 415.86l38.21 15.146 16.638-14.756-24.342-27.447zM60.377 429.82l8.598 41.19 29.44-26.112-38.038-15.078zm-16.148 14.1l-21.304 18.894c-.68 8.615 1.325 14.94 5.197 19.33 3.872 4.39 10.162 7.378 19.262 8.014l5.48-4.86-8.636-41.378z" fill="#fff"/></g></svg>
            <span class="text-white">Attaque-Critique  :  +${equipment.critDamage}%</span>
          </div>
        `;
  }

  html += `
          </div>
          
          <div class="border-t border-gray-700 pt-3 mb-3">
            <div style="box-shadow: inset 0 -10px 13px -10px #ffffff;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-gray-700 mb-2">
              <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,1)" style=""><path d="M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z" fill="#fff"/></g></svg>
              <span>Niveaux  :  ${equipment.requiredLevel}</span>
            </div>
            <div style="box-shadow: inset 0 -10px 13px -10px #ffffff;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-gray-700 mb-2">
              <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,1)" style=""><path d="M256 23c-3.7 0-7.4.1-11.1.27l.8 17.98c3.4-.16 6.8-.25 10.3-.25 118.8 0 215 96.2 215 215s-96.2 215-215 215c-89.6 0-166.35-54.7-198.65-132.6l27.63-8.3-48.43-34.3-19.05 54.5 22.55-6.7C74.68 428.8 158.4 489 256 489c128.6 0 233-104.4 233-233S384.6 23 256 23zm-30.8 2.04c-13.3 1.75-26.1 4.6-38.6 8.48l5.6 17.09c11.4-3.54 23.3-6.15 35.4-7.75l-2.4-17.82zm-57 15.12c-12.4 5.05-24.2 11.12-35.4 18.12l9.5 15.21c10.3-6.44 21.2-12.03 32.6-16.67l-6.7-16.66zM116.4 69.5a234.139 234.139 0 0 0-29.35 26.12l13.05 12.28c8.3-8.77 17.4-16.81 27-24.06l-4.8-6.57-5.9-7.77zm69.5 8.58l-4.4 17.44 217 55.48 4.4-17.4-217-55.52zM74.07 110.5c-8.19 10.2-15.54 21.2-21.94 32.7l15.65 8.8c5.91-10.7 12.69-20.8 20.26-30.3l-13.97-11.2zm127.63 8.8c-3.9 26 2.8 55.2 14.2 79.2 6.4 13.4 14.2 25.2 21.9 33.8 4.2 4.7 8.4 8.3 12.2 10.9l-5.4 21.2c-4.6.4-10 1.6-16 3.7-10.9 3.8-23.4 10.4-35.4 19.1-21.6 15.6-41.4 37.9-50.4 62.6l167.5 42.9c3.9-26-2.8-55.2-14.2-79.2-6.4-13.4-14.2-25.2-21.9-33.8-4.2-4.7-8.4-8.3-12.2-10.9l5.4-21.2c4.5-.5 10-1.6 16-3.7 10.9-3.8 23.4-10.4 35.4-19.1 21.6-15.6 41.4-37.9 50.4-62.6l-167.5-42.9zM43.24 160.9c-5.33 12-9.7 24.4-13 37.3l17.48 4.2c3.03-11.8 7.04-23.2 11.95-34.2l-16.43-7.3zM26.2 217.5C24.11 230 23 242.9 23 256v.9l18-.2v-.7c0-12.1 1.02-24 2.95-35.6l-17.75-2.9zM113.5 361l-4.4 17.4 217 55.5 4.4-17.4-217-55.5z" fill="#fff"/></g></svg>
              <span>Durabilité  :  ${equipment.durability}/${equipment.maxDurability}</span>
            </div>
            <div style="box-shadow: inset 0 -10px 13px -10px #E0BE4A;" class="flex justify-left border-l pl-2 border-b pb-2 border-r border-t pt-2 rounded-lg border-yellow-300">
              <svg class="w-6 h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" transform="translate(1,1)" style=""><path d="M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z" fill="#E0BE4A"/></g></svg>
              <span class="text-yellow-300">Valeur  :  ${equipment.sellValue} or</span>
            </div>
          </div>
      `;

  if (equipment.specialEffect) {
    html += `
          <div class="border-t border-gray-700 pt-3 mb-3">
            <p class="text-indigo-400 italic">${equipment.specialEffect}</p>
          </div>
        `;
  }

  html += `
          <div class="border-t border-gray-700 pt-3">
            <p class="text-gray-400 text-sm">${equipment.description}</p>
          </div>
        </div>
      `;

  equipmentDisplay.innerHTML = html;
};

// Mettre à jour l'interface
const updateUI = () => {
  const filteredInventory = getFilteredInventory();
  const currentEquipment = filteredInventory[currentIndex];

  renderEquipment(currentEquipment);

  // Mise à jour du compteur d'inventaire
  inventoryCounter.textContent = filteredInventory.length > 0 ? `${currentIndex + 1}/${filteredInventory.length}` : '0/0';

  // Mise à jour de l'info de progression
  if (!itemsGenerator) {
    itemsGenerator = generateAllPossibleItems();
  }
  progressionInfo.textContent = `${inventory.length}/${itemsGenerator.totalCount}`;

  // Activer/désactiver les boutons
  prevButton.disabled = currentIndex === 0 || filteredInventory.length === 0;
  nextButton.disabled = currentIndex >= filteredInventory.length - 1 || filteredInventory.length === 0;

  // Mise à jour des statistiques
  updateStats();

  // Mise à jour de l'index si ouvert
  if (!indexModal.classList.contains('hidden')) {
    renderIndexPage();
  }

  // Initialiser Feather Icons
  feather.replace();
};

// Écouteurs d'événements
generateButton.addEventListener('click', generateEquipment);
prevButton.addEventListener('click', goToPrevious);
nextButton.addEventListener('click', goToNext);
resetFiltersButton.addEventListener('click', resetFilters);
showIndexButton.addEventListener('click', openIndex);
closeIndexButton.addEventListener('click', closeIndex);
indexPrevButton.addEventListener('click', prevIndexPage);
indexNextButton.addEventListener('click', nextIndexPage);

searchInput.addEventListener('input', (e) => {
  filter = e.target.value;
  currentIndex = 0;
  updateUI();
});

typeFilter.addEventListener('change', (e) => {
  filterType = e.target.value;
  currentIndex = 0;
  updateUI();
});

rarityFilter.addEventListener('change', (e) => {
  filterRarity = e.target.value;
  currentIndex = 0;
  updateUI();
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
  generateEquipment();
});
