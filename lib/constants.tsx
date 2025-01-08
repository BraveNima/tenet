export const invoiceData = [
  { id: 1, amount: "250.00", productName: "Running Shoes" },
  { id: 2, amount: "150.00", productName: "T-Shirt" },
  { id: 3, amount: "300.00", productName: "Leather Wallet" },
  { id: 4, amount: "450.00", productName: "Smartphone" },
  { id: 5, amount: "200.00", productName: "Casual Sneakers" },
  { id: 6, amount: "500.00", productName: "Kitchen Set" },
  { id: 7, amount: "350.00", productName: "High-Top Sneakers" },
  { id: 8, amount: "600.00", productName: "Hoodie" },
  { id: 9, amount: "100.00", productName: "Leather Wallet" },
  { id: 10, amount: "750.00", productName: "Parka" },
];

export const menuItems = [
  {
    label: "Dashboard",
    link: "#",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        ></path>
      </svg>
    ),
  },
  {
    label: "Inbox",
    link: "#",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        ></path>
      </svg>
    ),
    badge: { text: "New", color: "bg-indigo-50 text-indigo-500" },
  },
  {
    label: "Messages",
    link: "#",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 a02h14a2z"
        ></path>
      </svg>
    ),
  },
];
