/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'index',
      className: 'red',
      label: 'Index',
    },
    {
      type: 'category',
      label: 'Tests',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tests',
        },
      ],
    },
    {
      type: 'category',
      label: 'section',
      collapsible: false,
      items: ['index', 'more-test'],
    },
    {
      type: 'category',
      label: 'Huge sidebar category',
      items: [
        ...[
          {
            type: 'link',
            href: '/',
            label: 'Test Test test test test test test',
          },
        ],
        ...generateHugeSidebarItems(4),
      ],
    },
    {
      type: 'link',
      label: 'External link',
      href: 'https://github.com/facebook/docusaurus',
      className: 'red',
    },
    {
      type: 'category',
      label: 'TOC tests',
      className: 'red',
      items: [
        {
          type: 'autogenerated',
          dirName: 'toc',
        },
      ],
    },
  ],
};

function generateHugeSidebarItems() {
  const maxLevel = 4;
  const linksCount = 8;
  const categoriesCount = 8;

  function generateRecursive(maxLevel, currentLevel = 0) {
    if (currentLevel === maxLevel) {
      return [];
    }

    const linkItems = [...Array(linksCount).keys()].map((index) => ({
      type: 'link',
      href: '/',
      label: `Link ${index} (level ${currentLevel + 1})`,
    }));

    const categoryItems = [...Array(categoriesCount).keys()].map((index) => ({
      type: 'category',
      label: `Category ${index} (level ${currentLevel + 1})`,
      items: generateRecursive(maxLevel, currentLevel + 1),
    }));

    return [...linkItems, ...categoryItems];
  }

  return generateRecursive(maxLevel);
}
