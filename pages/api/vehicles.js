// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      id: "001",
      name: "EV600",
      status: "active",
      energy: "80",
      lat: "42.3193284",
      lng: "-83.0397932",
    },
    {
      id: "002",
      name: "EV602",
      status: "inactive",
      energy: "50",
      lat: "42.7293284",
      lng: "-83.0497632",
    },
    {
      id: "003",
      name: "EV603",
      status: "active",
      energy: "20",
      lat: "42.1293284",
      lng: "-83.0317632",
    },
    {
      id: "004",
      name: "EV604",
      status: "inactive",
      energy: "10",
      lat: "42.7293284",
      lng: "-83.0397632",
    },
    {
      id: "005",
      name: "EV605",
      status: "inactive",
      energy: "98",
      lat: "42.8593284",
      lng: "-83.0396032",
    },
  ]);
};
