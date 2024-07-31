let data = []
const viewrecord = () => {
       document.getElementById('edit').style.display = "none";
       document.getElementById('add').style.display = "block";

       let tbl = "";
       let all = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
       all.map((val,i) => {
              tbl += `
                     <tr>
                            <td>${++i}</td>
                            <td>${val.name}</td>
                            <td>${val.phone}</td>
                            <td>
                                   <button onclick="deleteRecord(${val.id})">Delete</button> ||
                                   <button onclick="editRecord(${val.id})">Edit</button>
                            </td>
                     </tr>
              `
       })
       document.getElementById('view').innerHTML = tbl
}
viewrecord();

const saveData = () => {
       let username = document.getElementById('name').value;
       let userphone = document.getElementById('phone').value;

       if (!username || !userphone) {
              alert("NAME  AND PHONE IS REQUIRED");
              return false;
       }

       let obj = {
              id: Math.floor(Math.random() * 10000),
              name: username,
              phone: userphone
       }

       if (localStorage.getItem('user') === null || localStorage.getItem('user') === undefined) {
              data.push(obj);
              localStorage.setItem('user', JSON.stringify(data))
              alert("RECORD ADD");
              viewrecord()
       }
       else {
              let all = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [] all.push(obj);
              localStorage.setItem('user',JSON.stringify(all))
              alert("RECORD ADD");
              viewrecord()
       }
       document.getElementById('name').value = ""
       document.getElementById('phone').value = ""
}

       const editRecord = (id) => {
              document.getElementById('add').style.display = "none"
              document.getElementById('edit').style.display = "block"


              let all = JASON.parse(localStorage.getItem('user'));
              let single = all.find(val => val.id == id)
       }