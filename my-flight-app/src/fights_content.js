const FLIGHTS_API =[
    {id:1,
      "Airline":"Kenyan airways",
      "Origin":"Nairobi",
      "Destination":"Kampala",
      "available_seats":30,
      "Date":"2019-04-02 2:00:00",
      "Plane_number":"43W",
      "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
    },
    {id:2,
        "Airline":"Kenyan airways",
        "Origin":"Kampala",
        "Destination":"Kigali",
        "available_seats":30,
        "Date":"2019-04-19 7:00:00",
        "Plane_number":"566K",
        "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
      },
      {id:3,
        "Airline":"Kenyan airways",
        "Origin":"Kigali",
        "Destination":"New York",
        "available_seats":30,
        "Date":"2019-04-03 7:00:00",
        "Plane_number":"423R",
        "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
      },
      {id:4,
        "Airline":"Kenyan airways",
        "Origin":"New York",
        "Destination":"London",
        "available_seats":30,
        "Date":"2019-05-24 5:30:00",
        "Plane_number":"30PQ",
        "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
      },
      {id:5,
        "Airline":"Kenyan airways",
        "Origin":"London",
        "Destination":"Cape Town",
        "available_seats":30,
        "Date":"2019-04-18 7:00:00",
        "Plane_number":"499U",
        "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
      },
      {id:6,
        "Airline":"Ethiopian Airways",
        "Origin":"Nairobi",
        "Destination":"Kampala",
        "available_seats":30,
        "Date":"2019-04-02 2:00:00",
        "Plane_number":"43W",
        "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
      },
      {id:7,
          "Airline":"Ethiopian Airways",
          "Origin":"Kampala",
          "Destination":"Kigali",
          "available_seats":30,
          "Date":"2019-04-19 7:00:00",
          "Plane_number":"566K",
          "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
        },
        {id:8,
          "Airline":"Ethiopian Airways",
          "Origin":"Kigali",
          "Destination":"New York",
          "available_seats":30,
          "Date":"2019-04-03 7:00:00",
          "Plane_number":"423R",
          "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
        },
        {id:9,
          "Airline":"Ethiopian Airways",
          "Origin":"New York",
          "Destination":"London",
          "available_seats":30,
          "Date":"2019-05-24 5:30:00",
          "Plane_number":"30PQ",
          "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
        },
        {id:10,
          "Airline":"Ethiopian Airways",
          "Origin":"London",
          "Destination":"Cape Town",
          "available_seats":30,
          "Date":"2019-04-18 7:00:00",
          "Plane_number":"499U",
          "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
        },
        {id:11,
            "Airline":"Ugandan Airways",
            "Origin":"Nairobi",
            "Destination":"Kampala",
            "available_seats":30,
            "Date":"2019-04-02 2:00:00",
            "Plane_number":"43W",
            "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
          },
          {id:12,
              "Airline":"Ugandan Airways",
              "Origin":"Kampala",
              "Destination":"Kigali",
              "available_seats":30,
              "Date":"2019-04-19 7:00:00",
              "Plane_number":"566K",
              "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
            },
            {id:13,
              "Airline":"Ugandan Airways",
              "Origin":"Kigali",
              "Destination":"New York",
              "available_seats":30,
              "Date":"2019-04-03 7:00:00",
              "Plane_number":"423R",
              "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
            },
            {id:14,
              "Airline":"Ugandan Airways",
              "Origin":"New York",
              "Destination":"London",
              "available_seats":30,
              "Date":"2019-05-24 5:30:00",
              "Plane_number":"30PQ",
              "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
            },
            {id:15,
              "Airline":"Ugandan Airways",
              "Origin":"London",
              "Destination":"Cape Town",
              "available_seats":30,
              "Date":"2019-04-18 7:00:00",
              "Plane_number":"499U",
              "seats":{"seats":["1A","1B","1C","1D","1E","1F","2A","2B","2C","2D","2E","2F","3A","3B","3C","3D","3E","3F", "4A","4B","4C","4D","4E","4F", "5A","5B","5C","5D","5E","5F"]},
            },


  ]
export default FLIGHTS_API;