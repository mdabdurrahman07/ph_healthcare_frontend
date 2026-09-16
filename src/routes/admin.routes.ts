const prefix = "/admin"
export const adminRoutes = [
     {
      title: "Management",
      items: [
        {
          title: "Overview",
          url: `${prefix}`,
        },
        {
          title: "Doctor Approval",
          url: `${prefix}/approve-doctor`,
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