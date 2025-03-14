function superbowlWin(records) {
    // Use the find() method to locate the first object with a result of "W"
    const win = records.find(record => record.result === "W");
    
    // If a win is found, return the year, otherwise return undefined
    return win ? win.year : undefined;
  }
  
  // Example usage
  const gameRecords = [
    { year: "2018", result: "L" },
    { year: "2019", result: "L" },
    { year: "2020", result: "W" },
  ];
  
  console.log(superbowlWin(gameRecords)); // Output: "2020"
