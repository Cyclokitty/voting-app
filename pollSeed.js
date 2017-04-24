Poll.create(
  {
    "heading": "Favourite Programming Language",
    "poll": [
      {"name": "JavaScript", "votes": 97},
      {"name":"Closure", "votes": 1},
      {"name":"C++", "votes": 32},
      {"name":"Python", "votes": 86},
      {"name":"Java", "votes": 10}
    ]
  },
  function(err, poll) {
    if (err) {
      console.log(err);
    } else {
      console.log("Fresh new poll!");
      console.log(poll);
    }
  }
)
