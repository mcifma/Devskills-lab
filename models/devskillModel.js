const devskills = [
    {id: 125223, devskill: 'HTML', done: true},
    {id: 127904, devskill: 'CSS', done: false},
    {id: 139608, devskill: 'Javasript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function create(devskill) {
    // Add the id
    devskill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    devskill.done = false;
    devskills.push(devskill);
  }

  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = devskills.findIndex(devskill => devskill.id === parseInt(id));
    devskills.splice(idx, 1);
  }

  function getAll() {
    return devskills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return devskills.find(devskill => devskill.id === parseInt(id));
  }