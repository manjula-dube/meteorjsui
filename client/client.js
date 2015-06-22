if (Meteor.isClient) {
  Template.body.helpers({
    tasks: [
      { text: "untagged" },
      { text: "lipsum" },
      { text: "yahoo" },
      { text: "client" },
      { text: "demand" },
      { text: "first" },
      { text: "second" },
      { text: "third" },
      { text: "fourth" }
    ]
  });
}

