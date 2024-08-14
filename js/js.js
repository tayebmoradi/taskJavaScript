const notesList = [
    {
      id: 1,
      title: "Coding JavaScript",
      createdAt: "2024-03-13T20:43:34.067Z",
      completed: false,
    },
    {
      id: 2,
      title: "Study physics",
      createdAt: "2024-02-13T20:43:34.067Z",
      completed: true,
    },
    {
      id: 3,
      title: "React.js intervew",
      createdAt: "2024-01-13T20:43:34.067Z",
      completed: true,
    },
    {
      id: 4,
      title: "Cooking",
      createdAt: "2024-04-13T20:43:34.067Z",
      completed: false,
    },
    {
        id: 5,
        title: "Coding",
        createdAt: "2024-04-13T20:43:34.067Z",
        completed: true,
    },
    {
        id: 6,
        title: "c#",
        createdAt: "2024-04-13T20:43:34.067Z",
        completed: false,
    },
    {
        id: 7,
        title: "php",
        createdAt: "2024-01-13T20:43:34.067Z",
        completed: false,
    },
    {
        id: 8,
        title: "javaScript",
        createdAt: "2024-04-13T20:43:34.067Z",
        completed: true,
    },
  ];
  
  const queryData = ({ sort = 'latest', filter = '', status = 'all' }) => {
   
    let filteredData = notesList.filter((note) => {
      if (status === 'completed') return note.completed;
      if (status === 'uncompleted') return !note.completed;
      return true; 
    });
  

    if (filter) {
      filteredData = filteredData.filter((note) =>
        note.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
  
  
    if (sort === 'latest') {
      filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'earliest') {
      filteredData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
  
    return filteredData;
  };
  

  const result1 = queryData({
    sort: 'latest',
    filter: 'Coding',
    status: 'completed',
  });
  
  const result2 = queryData({
    sort: 'earliest',
    filter: 'React',
    status: 'all',
  });
  
  const result3 = queryData({
    sort: 'latest',
    filter:'javaScript',
    status: 'uncompleted',
  });
  
  console.log(result1);
  console.log(result2);
  console.log(result3);