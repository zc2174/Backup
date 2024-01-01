const {
  filterList,
  milesToYards,
  lbsToKg,
  convertMilesFilterByYards,
  getTokenFrequency,
  fullList,
  tokens,
} = require("./index.js");

let list;

describe("filterList", () => {
  beforeEach(() => {
    list = fullList;
  });

  test("filters by id", () => {
    const filteredList = filterList(list)("id", 1);

    expect(filteredList.length).toBe(3);

    filteredList.forEach((item) => {
      expect(item.id).not.toBe(1);
      expect(item.name).not.toEqual("Iain");
    });
  });

  test("filters by name", () => {
    const filteredList = filterList(list)("name", "Luna");

    expect(filteredList.length).toBe(3);

    filteredList.forEach((item) => {
      expect(item.name).not.toEqual("Luna");
    });
  });

  test("filters by email", () => {
    const filteredList = filterList(list)("email", "ashwin@example.com");

    expect(filteredList.length).toBe(3);

    filteredList.forEach((item) => {
      expect(item.name).not.toEqual("Ashwin");
      expect(item.email).not.toEqual("ashwin@example.com");
    });
  });

  test("filters by distance", () => {
    const filteredList = filterList(list)("distance", 10);

    expect(filteredList.length).toBe(2);

    filteredList.forEach((item) => {
      expect(item.name).not.toEqual("Jamie");
      expect(item.name).not.toEqual("Iain");
    });
  });

  test("filters by weight", () => {
    const filteredList = filterList(list)("weight", 155);

    expect(filteredList.length).toBe(2);

    filteredList.forEach((item) => {
      expect(item.name).not.toEqual("Luna");
      expect(item.name).not.toEqual("Ashwin");
    });
  });
});

describe("milesToYards", () => {
  beforeEach(() => {
    list = fullList;
  });

  test("returns number of yards for given number of miles", () => {
    const yards = [17600, 35200, 1760, 17600];

    list.forEach((item, index) => {
      expect(milesToYards(item.distance)).toEqual(yards[index]);
    });
  });
});

describe("lbsToKg", () => {
  beforeEach(() => {
    list = fullList;
  });

  test("returns number of kilograms (kg) for given number of pounds (lbs)", () => {
    const kg = [90.72, 70.31, 70.31, 102.97];

    list.forEach((item, index) => {
      expect(lbsToKg(item.weight)).toEqual(kg[index]);
    });
  });
});

describe("convertMilesFilterByYards", () => {
  beforeEach(() => {
    list = fullList;
  });

  test("filters a given array by yards", () => {
    const filteredList = convertMilesFilterByYards(list, 17600);

    expect(filteredList.length).toBe(2);

    filteredList.forEach((item) => {
      expect(item.name).not.toEqual("Jamie");
      expect(item.name).not.toEqual("Iain");
    });
  });

  test("filters a new array by yards", () => {
    const filteredList = convertMilesFilterByYards(
      [{ distance: 10, distance: 1 }],
      17600
    );

    expect(filteredList.length).toBe(1);

    expect(filteredList[0].yards).toBe(1760);
  });
});

describe("getTokenFrequency", () => {
  test("returns an object of frequencies", () => {
    const freq = getTokenFrequency(tokens);

    expect(Object.keys(freq)).toHaveLength(104);

    /**
     * Answer to prompt:
     * What is the most frequent
     * distance and how many times does
     * it appear?
     */

    const sortedTokens = Object.entries(freq).sort((t1, t2) => {
      return t2[1] - t1[1];
    });

    expect(sortedTokens.slice(0, 5)).toEqual([
      ["and", 8],
      ["the", 4],
      ["to", 4],
      ["for", 3],
      ["a", 3],
    ]);
  });
});
