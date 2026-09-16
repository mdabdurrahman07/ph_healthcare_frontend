const prefix = "/doctor"
export const doctorRoutes = [
     {
      title: "Schedule",
      items: [
        {
          title: "Overview",
          url: `${prefix}`,
        },
        {
          title: "Create Schedule",
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