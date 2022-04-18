const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(object, array) {
  const objectList = [];

  for (const [key, value] of Object.entries(object)) {
    objectList.push({ key, value });
  }

  objectList.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });

  objectList.forEach((element, index) => {
    for (let i = 0; i < array.length; i += 1) {
      if (element.key === array[i]) {
        objectList.splice(index, 1);
        objectList.unshift(element);
      }
    }
  });

  return objectList;
}

orderByProps(obj, ['name']);
