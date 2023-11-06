/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    {
      title: "The Polar Express",
      summary:
        "When a doubting young boy takes an extraordinary train ride to the North Pole, he embarks on a journey of self-discovery that shows him that the wonder of life never fades for those who believe.",
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    },
    {
      title: "The Grinch",
      summary:
        "The Grinch hatches a scheme to ruin Christmas when the residents of Whoville plan their annual holiday celebration.",
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Bc9VNd9CIHIyJtPKFqSQzrXWru.jpg",
    },
    {
      title: "Home Alone 2: Lost in New York",
      summary:
        "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy.",
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    },
    {
      title: "Elf",
      summary:
        "When young Buddy falls into Santa's gift sack on Christmas Eve, he's transported back to the North Pole and raised as a toy-making elf by Santa's helpers. ",
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oOleziEempUPu96jkGs0Pj6tKxj.jpg",
    },
    {
      title: "Arthur Christams",
      summary:
        "Each Christmas, Santa and his vast army of highly trained elves produce gifts and distribute them around the world in one night.",
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sPCrGLdTMn0ud3oAJG37VDxpQfZ.jpg",
    },
  ]);
};
