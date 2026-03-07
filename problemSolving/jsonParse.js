const jsonData = {
    users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      address: {
        street: "123 Main St",
        city: "New York",
        zipcode: "10001"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "js@example.com",
      address: {
        street: "446 Oak Ave",
        city: "Los Angeles",
        zipcode: "90001"
      }
      
    },
    {
      id: 3,
      name: "Jane Jones",
      email: "jane@example.com",
      address: {
        street: "456 Oak Ave",
        city: "Los Angeles",
        zipcode: "90001"
      }
    },
    {
      id: 4,
      name: "John Albert",
      email: "ja@example.com",
      address: {
        street: "213 Oak Ave",
        city: "Los Angeles",
        zipcode: "90001"
      }
    },
    {
      id: 5,
      name: "John Cena",
      email: "jc@example.com",
      address: {
        street: "243 Park Ave",
        city: "Cicago",
        zipcode: "40001"
      }
    },
    {
      id: 6,
      name: "John Abraham",
      email: "ja@example.com",
      address: {
        street: "250 Boss Ave",
        city: "Cicago",
        zipcode: "40001"
      }
    }
  ]
}

function readJson(data) {
    // const firstUser = data.users[1];  // used for single data
    // console.log(firstUser);

    // const users = data.users; // see whole existing data under the user
    // console.log(users);

    //  const users = data.users;

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].name == "John Albert") {
    //         console.log(users[i]);
    //     }   
    // } 

    // const nameCount = {};
    // for (let i = 0; i < users.length; i++) {
    //   const name = users[i].nameCount;
    //     if (!nameCount[name]) {
    //         nameCount[name] = 1;
    //       } else {
    //         nameCount[name]++;
    //       }
    //       users[i].Index = nameCount[name];   
    //}
  
  
  let johnCount = 0;

      for (let i = 0; i < jsonData.users.length; i++) {
        const name = jsonData.users[i].name.split(" ")[0];
        if (name === "John") {
          johnCount++;
          jsonData.users[i].Index = johnCount;
        }
      }
    console.log(jsonData.users);

}

readJson(jsonData.users);