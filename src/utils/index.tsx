export const navOption = [
    {
        id: "home",
        lable: "Home",
        path: "/"
    },
    {
        id: "listing",
        lable: "All Products",
        path: "/product/listing/all-products"
    },
    {
        id: "listingMen",
        lable: "Men",
        path: "/product/listing/men"
    },
    {
        id: "listingWomen",
        lable: "Women",
        path: "/product/listing/women"
    },
    {
        id: "listingKids",
        lable: "Kids",
        path: "/product/listing/kids"
    }
]

export const adminOption = [
    {
        id: "adminListingKids",
        lable: "Manage All Products",
        path: "/admin-view/all-products"
    },
    {
        id: "adminNewProduct",
        lable: "Add New Products",
        path: "/admin-view/add-product"
    }
]

export const registrationFormControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Enter your name",
        label: "Name",
        componentType: "input",
    },
    {
        id: "email",
        type: "email",
        placeholder: "Enter your email",
        label: "Email",
        componentType: "input",
    },
    {
        id: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password",
        componentType: "input",
    },
    {
        id: "role",
        type: "",
        placeholder: "",
        label: "Role",
        componentType: "select",
        options: [
            {
                id: "admin",
                label: "Admin",
            },
            {
                id: "customer",
                label: "customer",
            },
        ],
    },
];

export const loginFormControls = [
    {
        id: "email",
        type: "email",
        placeholder: "Enter your email",
        label: "Email",
        componentType: "input",
    },
    {
        id: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password",
        componentType: "input",
    },
];

export const adminAddProductformControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Enter name",
        label: "Name",
        componentType: "input",
    },
    {
        id: "price",
        type: "number",
        placeholder: "Enter price",
        label: "Price",
        componentType: "input",
    },
    {
        id: "description",
        type: "text",
        placeholder: "Enter description",
        label: "Description",
        componentType: "input",
    },
    {
        id: "category",
        type: "",
        placeholder: "",
        label: "Category",
        componentType: "select",
        options: [
            {
                id: "men",
                label: "Men",
            },
            {
                id: "women",
                label: "Women",
            },
            {
                id: "kids",
                label: "Kids",
            },
        ],
    },
    {
        id: "deliveryInfo",
        type: "text",
        placeholder: "Enter deliveryInfo",
        label: "Delivery Info",
        componentType: "input",
    },
    {
        id: "onSale",
        type: "",
        placeholder: "",
        label: "On Sale",
        componentType: "select",
        options: [
            {
                id: "yes",
                label: "Yes",
            },
            {
                id: "no",
                label: "No",
            },
        ],
    },
    {
        id: "priceDrop",
        type: "number",
        placeholder: "Enter Price Drop",
        label: "Price Drop",
        componentType: "input",
    },
];

export const AvailableSizes = [
    {
        id: "s",
        label: "S",
    },
    {
        id: "m",
        label: "M",
    },
    {
        id: "l",
        label: "L",
    },
];

export const firebaseConfig = {
    apiKey: "AIzaSyBxjhqqBW8K00Jf-5DFxNwaRrmCozbAlqU",
    authDomain: "next-js-ecommerce-81e52.firebaseapp.com",
    projectId: "next-js-ecommerce-81e52",
    storageBucket: "next-js-ecommerce-81e52.appspot.com",
    messagingSenderId: "624829563639",
    appId: "1:624829563639:web:86ebafe33a90afda6e49f2",
    measurementId: "G-NKCZ52N3SS"
};

export const firbaseStorageURL = 'gs://next-js-ecommerce-81e52.appspot.com'