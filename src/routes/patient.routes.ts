const prefix = "/patient"
export const patientRoutes = [
     {
      title: "Bookings",
      items: [
        {
          title: "Overview",
          url: `${prefix}`,
        },
        {
          title: "Payment History",
          url: `${prefix}`,
        },
      ],
    },
    {
      title: "Build Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        }
      ],
    },
]