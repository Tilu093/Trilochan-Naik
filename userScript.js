function saveData() {
  var dataList = [];
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const adhaar = document.getElementById('adhaar').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    var data = {
      name: name,
      email: email,
      age: age,
      phone: phone,
      adhaar: adhaar,
      address: address,
      date: date
    }
    dataList.push(data);
    dataList = dataList.concat(JSON.parse(localStorage.getItem('dataList')||'[]'));
    localStorage.setItem("dataList", JSON.stringify(dataList));

    //console.log(dataList);
  }