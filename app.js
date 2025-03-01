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

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemType);
      itemDiv.appendChild(itemDetails);
    } else {
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
    starColor: rarity === 'Céleste' ? '#280f3d' : rarity === 'Divin' ? '#ffd700' : rarity === 'Mythique' ? '#e01a6b' : '#ffcc00',
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

  let html = `
        <div class="p-6 bg-gray-800 rounded-lg shadow-lg">
          <div class="flex flex-col items-center mb-4">
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
    html += `<span class="text-gray-600">★</span>`;
  }

  html += `
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      `;

  // Afficher les stats
  if (equipment.attack !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Attaque</span>
            <span class="text-green-500">+${equipment.attack}</span>
          </div>
        `;
  }

  if (equipment.defense !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Défense</span>
            <span class="text-blue-500">+${equipment.defense}</span>
          </div>
        `;
  }

  if (equipment.magic !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Magie</span>
            <span class="text-purple-500">+${equipment.magic}</span>
          </div>
        `;
  }

  if (equipment.strength !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Force</span>
            <span class="text-red-500">+${equipment.strength}</span>
          </div>
        `;
  }

  if (equipment.agility !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Agilité</span>
            <span class="text-green-400">+${equipment.agility}</span>
          </div>
        `;
  }

  if (equipment.intelligence !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Intelligence</span>
            <span class="text-blue-400">+${equipment.intelligence}</span>
          </div>
        `;
  }

  if (equipment.vitality !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Vitalité</span>
            <span class="text-yellow-500">+${equipment.vitality}</span>
          </div>
        `;
  }

  if (equipment.critChance !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Chances de critique</span>
            <span class="text-yellow-400">+${equipment.critChance}%</span>
          </div>
        `;
  }

  if (equipment.critDamage !== undefined) {
    html += `
          <div class="flex justify-between">
            <span class="text-gray-400">Dégâts critiques</span>
            <span class="text-orange-500">+${equipment.critDamage}%</span>
          </div>
        `;
  }

  html += `
          </div>
          
          <div class="border-t border-gray-700 pt-3 mb-3">
            <div class="flex justify-between mb-2">
              <span class="text-gray-400">Niveau requis</span>
              <span>${equipment.requiredLevel}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-400">Durabilité</span>
              <span>${equipment.durability}/${equipment.maxDurability}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Valeur</span>
              <span class="text-yellow-300">${equipment.sellValue} or</span>
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
