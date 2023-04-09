export type SlideItemType = {
  id: number;
  name: string;
};

export type roadAchivType = {
  id: number;
  passed: boolean;
  catImg: boolean;
  mainName: string;
  miniName: string;
}

export const sliderData: SlideItemType[] = [
  { id: 1, name: 'Name cat' },
  { id: 2, name: 'Name cat' },
  { id: 3, name: 'Name cat' },
  { id: 4, name: 'Name cat' },
  { id: 5, name: 'Name cat' },
  { id: 6, name: 'Name cat' },
  { id: 7, name: 'Name cat' },
  { id: 8, name: 'Name cat' },
];

export const someData = [];

export let catCount = 4562;

export const roadAchiv: roadAchivType[] = [
  { id: 1, passed: false, catImg: false, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 2, passed: true, catImg: true, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 3, passed: true, catImg: false, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 4, passed: false, catImg: false, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 5, passed: true, catImg: true, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 6, passed: false, catImg: false, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 7, passed: true, catImg: true, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
  { id: 8, passed: true, catImg: false, mainName: 'Rarity Tools',
  miniName: 'Integrate with Rarity Tools to let you see how rare your NFT is and compare all of the traits.'},
]

export const singleCollectionAddress = process.env.COLLECTION_ADDRESS;