// Checking usernames

let current_users:string[] = ['Hamza','Muzammil', 'Aqeel','Ahmed', 'Tania', 'Hameez'] // List of Current Users

let new_users:string[] = ['Arsal', 'Aqeel', 'Hameez', 'Areeb', 'Noor', 'Moiz'] // List of New User

for (let new_user of new_users) {
    let usernameLower = new_user.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  
    if (current_users.some((user) => user.toLowerCase() === usernameLower)) {
      console.log(`${new_user} is already taken. Please choose another username.`); // statement when new_user match with current user 
    } else {
      console.log(`${new_user} is available!`);// statement when new_user does not match with current user 
    }
  }